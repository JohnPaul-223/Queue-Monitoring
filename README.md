# Deltapath Live Queue Monitor

A real-time queue monitoring wallboard for Deltapath PBX systems. This application provides live visualization of call queues, agent status, and queue metrics.

**GitHub Repository**: https://github.com/JohnPaul-223/Queue-Monitoring

## Features

- **Real-time Queue Monitoring**: View live status of all queues
- **Agent Status Tracking**: Monitor agent availability and call status
- **Call Queue Visualization**: See waiting callers and queue metrics
- **Responsive Dashboard**: Works on desktop displays and TV monitors
- **Detailed Queue View**: Click any queue for in-depth metrics and analytics

## Deployment

### Local Development

1. **Prerequisites**: Python 3.7+ installed

2. **Run the proxy server**:
   ```bash
   python wallboard-proxy.py https://your-pbx-address.com --port 8080
   ```

3. **Access the wallboard**:
   - On local PC: `http://localhost:8080`
   - On TV/remote: `http://your-pc-ip:8080`

### Vercel Deployment

This application can be deployed to Vercel for cloud hosting:

1. Push this repository to GitHub
2. Import the project in Vercel
3. Configure environment variables (if needed)
4. Deploy

**Note**: The Python proxy server is for local development. For production deployment on Vercel, you'll need to configure the PBX API endpoint directly or set up a serverless function as a proxy.

## Configuration

Edit the queue wallboard HTML file to customize:
- PBX endpoint URL
- Refresh intervals
- Display styling and themes
- Alert thresholds

## Files

- `index.html` - Main wallboard interface
- `wallboard-proxy.py` - Local development proxy server (bypasses CORS)
- `README.md` - This file
- `VERCEL_DEPLOYMENT.md` - Guide for deploying to Vercel

## Usage

The wallboard will:
1. Connect to your Deltapath PBX
2. Fetch queue and agent data in real-time
3. Display metrics including:
   - Active calls
   - Waiting callers
   - Agent availability
   - Average wait times
   - SLA compliance

## Security Notes

- Ensure proper authentication is configured for PBX access
- Use HTTPS in production environments
- Keep PBX credentials secure
- Configure appropriate CORS policies

## License

MIT License - Feel free to use and modify for your organization's needs.
