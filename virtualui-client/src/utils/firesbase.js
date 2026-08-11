
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtualui-bcf43.firebaseapp.com",
  projectId: "virtualui-bcf43",
  storageBucket: "virtualui-bcf43.firebasestorage.app",
  messagingSenderId: "278920391773",
  appId: "1:278920391773:web:6618d4b741265e2fec71b4"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}