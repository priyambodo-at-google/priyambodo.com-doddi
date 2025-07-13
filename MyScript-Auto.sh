#!/bin/bash
#
# A robust script for building, deploying, and managing the application.
#
# Usage:
#   ./MyScript.sh <command>
#
# Commands:
#   deploy      Builds the Docker image and deploys it to Google Cloud Run.
#   git-update  Commits and pushes changes to the main branch on GitHub.
#   cicd        Runs the full CI/CD pipeline: build, deploy, and git-update.
#
# Environment Variables:
#   GCP_PROJECT       (Required) Your Google Cloud Project ID.
#   GCP_REGION        (Optional) The Google Cloud region for deployment. Default: us-central1
#   AR_REPO           (Optional) The Artifact Registry repository name. Default: iamdoddi-artifactregistry
#   SERVICE_NAME      (Optional) The name for your Cloud Run service. Default: iamdoddi
#   GIT_USER_NAME     (Optional) The name for git commits. Default: "Doddi Priyambodo"
#   GIT_USER_EMAIL    (Optional) The email for git commits. Default: "doddi@bicarait.com"

# --- Strict Mode ---
# Exit immediately if a command exits with a non-zero status.
set -e
# Treat unset variables as an error when substituting.
set -u
# The return value of a pipeline is the status of the last command to exit
# with a non-zero status, or zero if no command exited with a non-zero status.
set -o pipefail

# --- Helper Functions ---

# Print a message to stdout.
log() {
  echo "==> [$(date +"%Y-%m-%d %H:%M:%S")] $1"
}

# Print usage information and exit.
usage() {
  echo "Usage: $0 {deploy|git-update|cicd|help}"
  echo "  deploy:      Builds the Docker image and deploys it to Google Cloud Run."
  echo "  git-update:  Commits and pushes changes to the main branch on GitHub."
  echo "  cicd:        Runs the full CI/CD pipeline: build, deploy, and git-update."
  echo "  help:        Show this help message."
  echo
  echo "Please ensure required environment variables like GCP_PROJECT are set."
}

# Check for required commands.
check_deps() {
  log "Checking for required tools..."
  for cmd in gcloud npm git; do
    if ! command -v "$cmd" &> /dev/null; then
      log "Error: Required command '$cmd' is not installed. Please install it and try again."
      exit 1
    fi
  done
  log "All required tools are present."
}

# --- Configuration ---
# Set sensible defaults for configuration variables.
# These can be overridden by setting environment variables.
GCP_PROJECT="${GCP_PROJECT:-"work-mylab-machinelearning"}"
GCP_REGION="${GCP_REGION:-"us-central1"}"
AR_REPO="${AR_REPO:-"iamdoddi-artifactregistry"}"
SERVICE_NAME="${SERVICE_NAME:-"iamdoddi"}"
GIT_USER_NAME="${GIT_USER_NAME:-"Doddi Priyambodo"}"
GIT_USER_EMAIL="${GIT_USER_EMAIL:-"doddi@bicarait.com"}"

# --- Core Functions ---

# Build the Next.js app and the Docker image, then push to Artifact Registry.
build_and_push_image() {
  log "Starting build and push process..."

  # Ensure GCP_PROJECT is set
  if [ -z "${GCP_PROJECT:-}" ]; then
    log "Error: GCP_PROJECT environment variable is not set."
    exit 1
  fi

  local DOCKER_IMAGE_TAG="$GCP_REGION-docker.pkg.dev/$GCP_PROJECT/$AR_REPO/$SERVICE_NAME"

  (
    cd doddi.priyambodo.com
    log "Building Next.js application..."
    npm run build

    log "Submitting build to Google Cloud Build..."
    gcloud builds submit --tag "$DOCKER_IMAGE_TAG" --project="$GCP_PROJECT"
  )

  log "Build and push complete. Image: $DOCKER_IMAGE_TAG"
}

# Deploy the image to Google Cloud Run.
deploy_to_cloudrun() {
  log "Starting deployment to Cloud Run..."

  # Ensure GCP_PROJECT is set
  if [ -z "${GCP_PROJECT:-}" ]; then
    log "Error: GCP_PROJECT environment variable is not set."
    exit 1
  fi

  local DOCKER_IMAGE_TAG="$GCP_REGION-docker.pkg.dev/$GCP_PROJECT/$AR_REPO/$SERVICE_NAME"

  # Create Artifact Registry if it doesn't exist.
  log "Checking for Artifact Registry repository '$AR_REPO'..."
  if ! gcloud artifacts repositories describe "$AR_REPO" --location="$GCP_REGION" --project="$GCP_PROJECT" &> /dev/null; then
    log "Repository not found. Creating '$AR_REPO'..."
    gcloud artifacts repositorieGive me a summary of all the changes that went in yesterdays create "$AR_REPO" --location="$GCP_REGION" --repository-format=Docker --project="$GCP_PROJECT"
  else
    log "Repository '$AR_REPO' already exists."
  fi

  log "Configuring Docker authentication for Artifact Registry..."
  gcloud auth configure-docker "$GCP_REGION-docker.pkg.dev" --quiet

  log "Deploying service '$SERVICE_NAME' to Cloud Run..."
  gcloud run deploy "$SERVICE_NAME" \
    --image="$DOCKER_IMAGE_TAG" \
    --port=8080 \
    --allow-unauthenticated \
    --region="$GCP_REGION" \
    --platform=managed \
    --project="$GCP_PROJECT" \
    --set-env-vars="GCP_PROJECT=$GCP_PROJECT,GCP_REGION=$GCP_REGION" \
    --quiet

  log "Deployment of '$SERVICE_NAME' successful."
}

# Commit and push changes to GitHub.
update_github() {
  log "Updating GitHub repository..."

  # Use local git config to avoid changing global settings
  git config user.name "$GIT_USER_NAME"
  git config user.email "$GIT_USER_EMAIL"

  log "Adding all changes to git..."
  git add .

  local COMMIT_TIMESTAMP
  COMMIT_TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
  local COMMIT_MESSAGE="Automated commit at $COMMIT_TIMESTAMP"

  # Check if there are any changes to commit
  if git diff-index --quiet HEAD --; then
    log "No changes to commit. Working tree is clean."
  else
    log "Committing changes with message: '$COMMIT_MESSAGE'..."
    git commit -m "$COMMIT_MESSAGE"
  fi

  log "Pushing changes to origin main..."
  git push origin main

  log "GitHub update complete."
}

# --- Main Logic ---
main() {
  check_deps

  # Default action to 'help' if no arguments are provided.
  local ACTION=${1:-help}

  case "$ACTION" in
    deploy)
      build_and_push_image
      deploy_to_cloudrun
      ;;
    git-update)
      update_github
      ;;
    cicd)
      log "Starting full CI/CD pipeline..."
      build_and_push_image
      deploy_to_cloudrun
      update_github
      log "Full CI/CD pipeline finished successfully."
      ;;
    help)
      usage
      ;;
    *)
      log "Error: Unknown command '$ACTION'"
      usage
      exit 1
      ;;
  esac
}

# Run the main function with all script arguments
main "$@"