import { child, get, getDatabase, ref } from "firebase/database";

import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyCSd1F8tg9Dvei4SANFkiz-ns5p7gZWEGs",
  authDomain: "albumrepository-5a44a.firebaseapp.com",
  databaseURL: "https://albumrepository-5a44a-default-rtdb.firebaseio.com",
  projectId: "albumrepository-5a44a",
  storageBucket: "albumrepository-5a44a.appspot.com",
  messagingSenderId: "639140218149",
  appId: "1:639140218149:web:eaa8523e7bfe1334a246cc",
  measurementId: "G-9E19MS034Y",
});

const db = getDatabase(app);
const dbRef = ref(db);

export const getAlbums = () => {
  get(child(dbRef, "albums"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
