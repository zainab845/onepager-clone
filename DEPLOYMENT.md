Vercel deployment checklist for this project

Overview
- Frontend: Vite app in `frontend/` (static build)
- Backend: Express app in `backend/index.js` exported as `module.exports = app`
- `vercel.json` builds the backend with `@vercel/node` and the frontend as a static build

Required Environment Variables (set in Vercel Project > Settings > Environment Variables)
- MONGO_URI            : MongoDB connection string
- CLOUDINARY_CLOUD_NAME: Cloudinary cloud name
- CLOUDINARY_API_KEY   : Cloudinary API key
- CLOUDINARY_API_SECRET: Cloudinary API secret

Optional / Recommended
- Any other secrets used by your code (JWT secrets, third-party keys)

Serverless considerations
- Database connections: The backend now caches the mongoose connection to avoid multiple reconnects in serverless environments.
- File uploads: Using `multer` inside serverless functions can hit payload/time limits. For production, prefer direct client uploads to Cloudinary (signed uploads) or use a small long-running server if you expect large files.

Build & Deploy Steps (Vercel)
1. Create a new project in Vercel and point it to this repository.
2. In Project Settings > Build & Development Settings, ensure the `Build Command` for the root is `npm run build` and the `Output Directory` is not necessary because `vercel.json` already specifies `frontend/dist` for the static build.
3. Add the environment variables listed above in the Vercel dashboard (both Preview and Production as needed).
  
Note about frontend API URL
- The frontend uses `VITE_API_BASE_URL` at build time. If this is not set, the app now defaults to a relative `/api`, which will call the backend on the same origin in Vercel.
- If you prefer an absolute backend URL, set `VITE_API_BASE_URL` in the Vercel Environment Variables (e.g. `https://your-project.vercel.app/api`).
4. Push to the branch connected to Vercel; Vercel will run the build and deploy.

After pushing these fixes, redeploy the project in Vercel and test the Admin publish flow again.

Local testing
- Build frontend:

```bash
# from repo root
npm run build
```

- Run backend locally:

```bash
cd backend
npm install
node -e "require('./index')"
# or for dev: npx nodemon index.js
```

If you want, I can add a tiny README in `backend/` describing how to perform signed uploads to Cloudinary and an explicit Vercel serverless wrapper file. Let me know which you'd prefer.
