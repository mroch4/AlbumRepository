import { child, get, getDatabase, ref } from "firebase/database";

import { firebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

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
