# Deployment Guide for Urs Choice Landing Page

This guide outlines the steps to deploy the **Urs Choice** landing page to [Vercel](https://vercel.com/), a platform for static and serverless deployment.

## Prerequisites

1.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com/signup).
2.  **GitHub Repository**: Ensure your code is pushed to GitHub (which we have already done).

## Option 1: Deploy via Vercel Dashboard (Recommended)

This is the easiest method and sets up automatic deployments whenever you push changes to GitHub.

1.  **Login to Vercel**: Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  **Add New Project**:
    *   Click the **"Add New..."** button (usually top right).
    *   Select **"Project"**.
3.  **Import Git Repository**:
    *   You should see your GitHub repositories listed.
    *   Find **Urs-Choice-Landing-Page** (or your repository name) and click **"Import"**.
4.  **Configure Project**:
    *   **Framework Preset**: It should automatically detect **"Vite"**. If not, select it manually.
    *   **Root Directory**: Leave as `./` (default).
    *   **Build & Output Settings**: Leave as default (`vite build` / `dist`).
5.  **Deploy**:
    *   Click **"Deploy"**.
    *   Wait for the build to complete (usually < 1 minute).
6.  **Success**:
    *   Once finished, you will see a preview of your site.
    *   Click the domain link to view your live website.

## Option 2: Deploy via standard CLI

If you prefer using the command line:

1.  **Install Vercel CLI**:
    ```bash
    npm i -g vercel
    ```
2.  **Login**:
    ```bash
    vercel login
    ```
3.  **Deploy**:
    Run this command in your project root:
    ```bash
    vercel
    ```
    *   Follow the prompts (accept defaults by pressing Enter).
4.  **Production Deploy**:
    To deploy to production (live):
    ```bash
    vercel --prod
    ```

## Verification

After deployment:
1.  Visit the provided URL.
2.  Check that the specific font and images load correctly.
3.  Test the **"Contact Us"** form (note: without a backend, it will just log to console or try to open `tel:` link as per current code).
4.  Check responsive design on mobile and desktop.
