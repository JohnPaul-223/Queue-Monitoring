export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Cookie, Set-Cookie');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const pbxUrl = 'https://pbx-datche.dbsone.com';
  const { path } = req.query;
  
  if (!path) {
    return res.status(400).json({ error: 'Path parameter is required' });
  }

  try {
    const targetUrl = `${pbxUrl}${path.startsWith('/') ? path : '/' + path}`;
    
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'DeltapathWallboard/1.0'
    };

    // Forward cookies from client
    if (req.headers.cookie) {
      headers['Cookie'] = req.headers.cookie;
    }

    const fetchOptions = {
      method: req.method,
      headers: headers
    };

    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(targetUrl, fetchOptions);
    const data = await response.text();
    
    // Forward cookies from PBX to client
    const setCookies = response.headers.get('set-cookie');
    if (setCookies) {
      res.setHeader('Set-Cookie', setCookies);
    }

    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json');
    res.status(response.status).send(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      success: false, 
      errors: `Proxy error: ${error.message}` 
    });
  }
}
