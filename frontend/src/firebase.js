import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "city-center-690af.firebaseapp.com",
    projectId: "city-center-690af",
    storageBucket: "city-center-690af.appspot.com",
    messagingSenderId: "510703639942",
    appId: "1:510703639942:web:3dec0744c464a7fe65e007",
    measurementId: "G-MJNJNECPLC"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);