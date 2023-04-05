import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyDbyFsoT6LisZjabiTbmEA5-RFcK2koLCA",
  authDomain: "appnews-2707c.firebaseapp.com",
  projectId: "appnews-2707c",
  storageBucket: "appnews-2707c.appspot.com",
  messagingSenderId: "568188840902",
  appId: "1:568188840902:web:b1692d209557defa16a0c7",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;
