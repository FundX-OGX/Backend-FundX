# Deploy to Render Cloud

## Prerequisites
- Render account
- Git repository (GitHub/GitLab/Bitbucket)

## Deployment Steps

### 1. Environment Variables
Set these in Render dashboard:
- `NODE_ENV=production`
- `PORT=10000` (Render tự động set, nhưng có thể override)

### 2. Build Settings
- **Build Command:** `pnpm install && pnpm run build`
- **Start Command:** `pnpm run start:prod`

### 3. Health Check
- **Health Check Path:** `/health`

### 4. Using render.yaml (Optional)
Nếu dùng `render.yaml`, Render sẽ tự động detect và apply settings.

## Post-Deployment

### Verify Deployment
1. Check health endpoint: `https://your-app.onrender.com/health`
2. Check Swagger docs: `https://your-app.onrender.com/api/docs`
3. Test API endpoints

### Common Issues

#### Port Configuration
Render tự động set PORT environment variable. Code đã handle:
```typescript
const port = process.env.PORT || 3000;
```

#### Build Errors
- Ensure all dependencies are in `dependencies` (not `devDependencies`)
- Check Node.js version compatibility

#### Runtime Errors
- Check logs in Render dashboard
- Verify environment variables are set correctly

## Notes
- Render uses port 10000 by default
- Health check endpoint is required for Render
- Swagger docs available at `/api/docs`

