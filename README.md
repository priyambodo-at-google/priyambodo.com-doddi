# My Next.js Project

This is a web application built with Next.js, TypeScript, Tailwind CSS, and ESLint.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment to Google Cloud Run

This project can be deployed to Google Cloud Run.

### Prerequisites

- Google Cloud SDK installed and configured.
- Docker installed.
- Environment variables set:
    - `GCP_REGION`: e.g., `us-central1`
    - `GCP_PROJECT`: Your Google Cloud Project ID
    - `AR_REPO`: Your Artifact Registry repository name, e.g., `iamdoddi-artifactregistry`
    - `SERVICE_NAME`: The name for your Cloud Run service, e.g., `iamdoddi`

### Steps

1.  **Create Artifact Registry (if it doesn't exist):**
    ```bash
    gcloud artifacts repositories create "$AR_REPO" --location="$GCP_REGION" --repository-format=Docker
    ```

2.  **Configure Docker authentication:**
    ```bash
    gcloud auth configure-docker "$GCP_REGION-docker.pkg.dev"
    ```

3.  **Build the application:**
    ```bash
    npm run build
    ```

4.  **Build and push the Docker image to Artifact Registry:**
    ```bash
    gcloud builds submit --tag "$GCP_REGION-docker.pkg.dev/$GCP_PROJECT/$AR_REPO/$SERVICE_NAME"
    ```

5.  **Deploy to Cloud Run:**
    ```bash
    gcloud run deploy "$SERVICE_NAME" \
       --image="$GCP_REGION-docker.pkg.dev/$GCP_PROJECT/$AR_REPO/$SERVICE_NAME" \
       --port=8080 \
       --allow-unauthenticated \
       --region=$GCP_REGION \
       --platform=managed  \
       --project=$GCP_PROJECT \
       --set-env-vars=GCP_PROJECT=$GCP_PROJECT,GCP_REGION=$GCP_REGION
    ```

## Learn More (from create-next-app)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel (from create-next-app)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
