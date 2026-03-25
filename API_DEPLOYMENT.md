# API Deployment Guide

## Security Fix: API Key Protection

The Gemini API key has been moved from the client-side code to a secure backend API endpoint. This prevents the API key from being exposed in the client bundle.

## Local Development

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Link your project to Vercel:
```bash
vercel link
```

3. Add your API key to Vercel environment variables:
```bash
vercel env add GEMINI_API_KEY
```
Then paste your actual Gemini API key when prompted.

4. Pull environment variables for local development:
```bash
vercel env pull .env.local
```

5. Run the development server with API support:
```bash
vercel dev
```

This will start both the Vite frontend and the serverless functions locally.

### Option 2: Separate Frontend and Mock API

If you prefer to run just the frontend:

1. Ensure `.env.local` has your API key:
```
GEMINI_API_KEY=your_actual_key_here
```

2. The frontend will try to call `/api/chat` which will fail in development without a backend.
   You'll need to run `vercel dev` or set up a separate backend server.

## Production Deployment

### Deploy to Vercel (Recommended)

1. Push your code to Git (GitHub, GitLab, or Bitbucket)

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Click "Import Project" and select your repository

4. Vercel will automatically detect the Vite configuration

5. **IMPORTANT**: Add environment variables:
   - Go to Project Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your actual API key
   - Select "Production", "Preview", and "Development" environments

6. Deploy!

Vercel will automatically:
- Build your Vite app
- Create serverless functions from the `/api` directory
- Serve your static assets
- Route `/api/*` requests to the serverless functions

### Deploy to Netlify

1. Create a `netlify.toml` file:
```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

2. Move the `api/chat.ts` file to `netlify/functions/chat.ts`

3. Adapt the serverless function format for Netlify

4. Add `GEMINI_API_KEY` to Netlify environment variables

## Environment Variables

### Required Variables

- `GEMINI_API_KEY`: Your Google Gemini API key

### Where to add them

**Local Development:**
- File: `.env.local` (already gitignored)

**Vercel Production:**
- Vercel Dashboard → Project → Settings → Environment Variables

**Netlify Production:**
- Netlify Dashboard → Site → Site settings → Build & deploy → Environment

## Security Notes

✅ **Good:**
- API key is now stored server-side only
- `.env.local` is in `.gitignore`
- Rate limiting is implemented (20 requests/hour per IP)
- Proper error handling prevents information leakage

⚠️ **Important:**
- Never commit `.env.local` to git
- Never expose `GEMINI_API_KEY` in client-side code
- Keep your API key rotated periodically
- Monitor usage in Google Cloud Console

## Troubleshooting

### "Failed to process chat message" error
- Check that `GEMINI_API_KEY` is set in environment variables
- Verify the API key is valid in Google Cloud Console
- Check API quotas and billing

### Chat widget not connecting
- In development: Make sure `vercel dev` is running, not just `npm run dev`
- Check browser console for network errors
- Verify the `/api/chat` endpoint is accessible

### Rate limit errors
- Default limit is 20 requests/hour per IP
- Adjust `RATE_LIMIT` in `api/chat.ts` if needed
- Consider implementing user-based rate limiting instead of IP-based

## Testing the API

### Using curl:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hallo, wat doen jullie?",
    "history": []
  }'
```

### Expected response:

```json
{
  "text": "Wij zijn Van Dee AI Solutions...",
  "success": true
}
```

## Migration Checklist

- [x] Created `/api/chat.ts` serverless function
- [x] Updated `services/gemini.ts` to call backend API
- [x] Removed unsafe `define` from `vite.config.ts`
- [x] Added `.env.local` to `.gitignore`
- [x] Added rate limiting to API endpoint
- [ ] Test chat widget functionality locally
- [ ] Deploy to Vercel/Netlify
- [ ] Add `GEMINI_API_KEY` to production environment
- [ ] Test chat widget in production
- [ ] Verify API key not in client bundle (check DevTools → Network)
