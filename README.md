# HQ Tracker — Portfolio Demo

A public, frontend-only demonstration of an HQ attendance dashboard built with Vite and vanilla JavaScript.

## Website

Explore the live HQ Tracker website: https://hq.iecpsau.org/

This link points to the publicly accessible live website. The repository below remains a separate, frontend-only portfolio demo using fictional sample data.

## Demo features
- Overview cards for members, attendance, and check-ins
- Searchable member list
- Sample attendance records and status indicators
- Responsive layout for desktop and mobile
- Local mock data only

## Run locally
```bash
npm install
npm run dev
```

## Security and privacy
This repository is a **standalone portfolio demo**. It does not connect to a live Supabase project, contains no real member records, and does not implement real authentication or authorization. All displayed names and attendance records are fictional sample data stored in the frontend.

Do not use this demo to store real attendance information. A production deployment needs server-enforced authentication, authorization, and carefully tested Row Level Security (RLS) policies. Never put a Supabase service-role key or other private credentials in frontend code.

## Tech stack
- Vite
- HTML, CSS, JavaScript

Created as a portfolio showcase.
