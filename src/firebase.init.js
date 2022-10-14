
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDu8yAQJnXZHbvh1uljIRkcB1W1KzLsrVU",
    authDomain: "super-assistant-ad5dd.firebaseapp.com",
    projectId: "super-assistant-ad5dd",
    storageBucket: "super-assistant-ad5dd.appspot.com",
    messagingSenderId: "999761740973",
    appId: "1:999761740973:web:2575d9418bbfba04553224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth