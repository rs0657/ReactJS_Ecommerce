# 🔒 Security Guidelines for Environment Variables

## ⚠️ IMPORTANT: Environment File Security

### ❌ **NEVER commit these files to GitHub:**
- `.env`
- `.env.local`
- `.env.development`
- `.env.production`
- `backend/.env`
- Any file containing sensitive information

### ✅ **What to commit instead:**
- `.env.example` - Template files with dummy values
- `.gitignore` - Properly configured to exclude sensitive files
- Documentation explaining how to set up environment variables

## 🛡️ Security Best Practices

### 1. **Use Environment Templates**
```bash
# Copy the example file and fill in real values
cp .env.example .env
cp backend/.env.example backend/.env
```

### 2. **Never Hard-code Secrets**
```javascript
// ❌ BAD - Hard-coded secrets
const dbUrl = "mongodb+srv://user:password123@cluster.mongodb.net/db";

// ✅ GOOD - Use environment variables
const dbUrl = process.env.MONGO_URI;
```

### 3. **Use Strong, Unique Values**
- Generate random JWT secrets: `openssl rand -base64 32`
- Use different credentials for development/production
- Regularly rotate API keys and passwords

### 4. **Check Your .gitignore**
Make sure these patterns are in your `.gitignore`:
```
# Environment files
.env
.env.*
backend/.env
backend/.env.*
```

## 🚀 Deployment Security

### For Production Deployments:
1. **Never use development credentials in production**
2. **Set environment variables in your hosting platform:**
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **Heroku**: Config Vars in dashboard
   - **AWS/Railway/DigitalOcean**: Platform-specific env var settings

### Example Production Setup:
```bash
# Production environment variables (set in hosting platform)
MONGO_URI=mongodb+srv://prod-user:secure-password@prod-cluster.mongodb.net/ecommerce
NODE_ENV=production
JWT_SECRET=super-secure-random-string-for-production
FRONTEND_URL=https://your-app.vercel.app
```

## 🔍 How to Check if Files are Ignored

```bash
# Check if files are properly ignored
git status

# Should NOT show .env files
# If they appear, they're not properly ignored!

# Remove accidentally committed env files
git rm --cached .env
git rm --cached backend/.env
git commit -m "Remove accidentally committed env files"
```

## 📋 Environment Variables Used in This Project

### Backend (`backend/.env`)
- `MONGO_URI` - Database connection string
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode
- `JWT_SECRET` - JWT token secret
- `FRONTEND_URL` - Frontend URL for CORS

### Frontend (`.env`)
- `REACT_APP_API_URL` - Backend API URL

## 🆘 If You Accidentally Commit Secrets

1. **Immediately change all compromised credentials**
2. **Remove from git history:**
   ```bash
   git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch .env' --prune-empty --tag-name-filter cat -- --all
   ```
3. **Force push to remote:**
   ```bash
   git push --force-with-lease origin main
   ```
4. **Notify team members to re-clone the repository**

## ✅ Quick Security Checklist

- [ ] `.env` files are in `.gitignore`
- [ ] No sensitive data is hard-coded
- [ ] `.env.example` files are provided
- [ ] Production uses different credentials than development
- [ ] Environment variables are set in hosting platform
- [ ] Secrets are strong and unique
- [ ] Team members know not to commit `.env` files

Remember: **When in doubt, don't commit it!** 🔒
