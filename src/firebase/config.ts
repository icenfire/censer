const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const appId = process.env.REACT_APP_FIREBASE_APP_ID;
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;

export const config = {
  apiKey,
  projectId,
  appId,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId
};
