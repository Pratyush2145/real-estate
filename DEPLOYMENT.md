# Jaipur Dream Homes - Deployment Guide

## Render Deployment

This project is configured to deploy on [Render](https://render.com).

### Prerequisites

1. GitHub account with the repository pushed
2. Render account (free tier available)
3. Environment variables configured

### Deployment Steps

1. **Connect Repository to Render**
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Grant Render access to your repository

2. **Configure Deployment Settings**
   
   The `render.yaml` file is already configured with:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 20.11.0 (specified in `.node-version`)
   - **Environment**: Node.js

3. **Set Environment Variables on Render**
   
   In the Render dashboard, add the following environment variables:
   
   ```
   NODE_ENV=production
   VITE_SHEETY_API_URL=https://api.sheety.co/b867d64fe479d2ff97e4c5d201fd3171/eStateSpreadsheet/sheet1
   ```

4. **Deploy**
   - Render will automatically deploy on every push to your main/master branch
   - Monitor deployment in the Render dashboard
   - Your site will be live at `https://your-service-name.onrender.com`

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Project Structure

- **src/routes/** - Page routes
- **src/components/** - Reusable React components
- **src/data/** - Static data (properties list)
- **src/lib/** - Utility functions and helpers
- **vite.config.ts** - Vite build configuration
- **render.yaml** - Render deployment configuration

### Features

✅ Full-stack React with TanStack Start
✅ Server-side rendering (SSR)
✅ TypeScript support
✅ Tailwind CSS styling
✅ Responsive UI components
✅ Sheety API integration for property inquiries
✅ Error page handling
✅ Production-ready configuration

### Performance Optimization

- Automatic code splitting
- Asset optimization during build
- CSS purging (only used styles included)
- Tree-shaking for smaller bundles

### Monitoring & Logs

In Render dashboard:
1. Go to your Web Service
2. Click "Logs" tab to view:
   - Build logs
   - Deployment logs
   - Runtime logs and errors

### Troubleshooting

**Build Fails**
- Check that all dependencies are listed in package.json
- Ensure Node version is compatible (20.11.0+)
- Review Render build logs for specific errors

**Runtime Errors**
- Check Render logs for error messages
- Ensure all environment variables are set correctly
- Verify Sheety API URL is accessible

**Site Not Loading**
- Verify the Web Service has fully deployed (check status in Render dashboard)
- Check browser console for client-side errors
- Ensure environment variables are correctly configured

### Updating the Site

Simply push changes to your GitHub repository:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Render will automatically detect changes and redeploy.

### Custom Domain

1. In Render dashboard, go to your Web Service
2. Click "Settings" → "Custom Domain"
3. Add your domain and follow DNS configuration steps

---

For more info, visit [Render Documentation](https://render.com/docs)
