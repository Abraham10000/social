# Sentiment Detector (Frontend)

Sentiment Detector is an application designed to analyze the sentiment of user posts collected via the Facebook Graph API and provide feedback based on the reactions to those posts. This README specifically covers the frontend implementation of Sentiment Detector.

## Installation and Setup

1. Ensure you have Node.js installed on your system. Sentiment Detector requires Node.js for development. You can download and install Node.js from [here](https://nodejs.org/).

2. Clone the frontend repository to your local machine.
 ```bash
 git clone https://github.com/SentimentDetector/social.git
 ```

3. Navigate to the project directory.
```bash
cd social/
```

4. Create a `.env.local` file in the project root.

5. Inside the `.env.local` file, add the following environment variables:
```plaintext
NEXT_PUBLIC_REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
NEXT_PUBLIC_REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID
NEXT_PUBLIC_REACT_APP_BACKEND_URL=http://localhost:4000
```

6. Install dependencies
 ```bash
 npm install
 ```

## How to Run

Once the installation is complete, you can run the frontend server using the following command:
```bash
npm run dev
```

This will start the development server, and you can access the application in your web browser at `http://localhost:3000`.

## Code Quality and Testing

This project follows strict coding standards to ensure consistency and maintainability. We use ESLint for linting and Jest for testing.

To run ESLint and automatically fix all fixable errors, use the following command:
```bash
npx eslint . --fix
```

To run tests with Jest, use the following commands:
```bash
npm install
npm test
```

## Deployment

The Sentiment Detector frontend application is deployed on [Vercel](https://vercel.com/). You can access the deployed version of the application [here](https://social-six-liard.vercel.app/login).

## Repository

You can find the frontend source code repository [here](https://github.com/SentimentDetector/social.git).

Thank you!
