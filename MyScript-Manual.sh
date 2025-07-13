#/bin/bash
#This is the Step by Step to build the React Web Application

#Create NextJS version
#npx create-next-app@latest --typescript --tailwind --eslint
#npx v0@latest init

cd doddi.priyambodo.com
npm install
npm run dev 
npm run build
npm run start

#Create React version
npx create-react-app doddi.priyambodo.com
cd doddi.priyambodo.com
  npm start
    Starts the development server.
  npm run build
    Bundles the app into static files for production.
  npm test
    Starts the test runner.
  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
We suggest that you begin by typing:
  cd doddi.priyambodo.com
  npm start

#Deploy to CloudRun
export GCP_REGION='us-central1'
export GCP_PROJECT='work-mylab-machinelearning'
export AR_REPO='iamdoddi-artifactregistry'  
export SERVICE_NAME='iamdoddi' 
gcloud artifacts repositories create "$AR_REPO" --location="$GCP_REGION" --repository-format=Docker
gcloud auth configure-docker "$GCP_REGION-docker.pkg.dev"
npm run build
gcloud builds submit --tag "$GCP_REGION-docker.pkg.dev/$GCP_PROJECT/$AR_REPO/$SERVICE_NAME"
gcloud run deploy "$SERVICE_NAME" \
   --image="$GCP_REGION-docker.pkg.dev/$GCP_PROJECT/$AR_REPO/$SERVICE_NAME" \
   --port=8080 \
   --allow-unauthenticated \
   --region=$GCP_REGION \
   --platform=managed  \
   --project=$GCP_PROJECT \
   --set-env-vars=GCP_PROJECT=$GCP_PROJECT,GCP_REGION=$GCP_REGION

#Update GitHub to Source Code
git config --global user.name "Doddi Priyambodo"
git config --global user.email "doddi@bicarait.com"
git add .
git tag -a autobuild -m "Auto Build CICD to Cloud Run at $(date +"%Y-%m-%d %H:%M:%S")"
git commit -a -m "Doddi Priyambodo is committing at $(date +"%Y-%m-%d %H:%M:%S")"
git push origin main