# Deploying to Vercel

## Quick Start

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com) and sign in with your GitHub account

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `JohnPaul-223/Queue-Monitoring`
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Select "Other" or leave as detected
   - **Root Directory**: Leave as `./` (default)
   - **Build Command**: Leave empty (static site)
   - **Output Directory**: Leave empty
   
4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at: `https://your-project-name.vercel.app`

## Important Notes for Production

### CORS and API Proxy

The `wallboard-proxy.py` file is for **local development only** and won't run on Vercel (which doesn't support Python web servers in this configuration).

For production, you have two options:

#### Option 1: Direct PBX Connection (Recommended if CORS is configured)
If your PBX allows CORS requests from your Vercel domain:
1. Edit `queue-wallboard.html`
2. Update the API endpoint to point directly to your PBX
3. No proxy needed

#### Option 2: Serverless API Proxy
Create a Vercel serverless function to proxy requests:

1. Create `/api/proxy.js`:
```javascript
export default async function handler(req, res) {
  const { path } = req.query;
  const pbxUrl = process.env.PBX_URL; // Set in Vercel environment variables
  
  try {
    const response = await fetch(`${pbxUrl}${path}`, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...req.headers
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });
    
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

2. Set environment variable in Vercel:
   - Go to Project Settings → Environment Variables
   - Add `PBX_URL` = `https://your-pbx-address.com`

3. Update your HTML to use `/api/proxy?path=/RESTful/...`

## Environment Variables

If needed, configure these in Vercel Project Settings:

- `PBX_URL`: Your Deltapath PBX address
- `PBX_USERNAME`: API username (if using serverless proxy)
- `PBX_PASSWORD`: API password (if using serverless proxy)

## Custom Domain

To use a custom domain:
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as instructed

## Monitoring

- View deployment logs in Vercel dashboard
- Set up monitoring alerts in Project Settings
- Use Vercel Analytics for usage insights

## Troubleshooting

### "Cannot connect to PBX"
- Check that your PBX allows connections from Vercel's IP ranges
- Verify CORS settings on your PBX
- Consider implementing the serverless proxy option

### "Deployment failed"
- Check build logs in Vercel dashboard
- Ensure all files are committed to GitHub
- Verify `vercel.json` configuration

### "Page not loading"
- Clear browser cache
- Check browser console for errors
- Verify the HTML file is being served correctly

## Support

For issues:
1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Review GitHub repository issues
3. Contact your Deltapath administrator for PBX connectivity questions
