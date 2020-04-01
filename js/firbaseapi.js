
//---------------------------------------------------------------------
// Your web app's Firebase configuration (9 lines of code)
// Replace the configuration with YOUR project's API information
// copied from the firebase console (settings) of your project.
//---------------------------------------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyA7rHlObFu_BWYbkEL-wHthDdwXT2v9nzc",
  authDomain: "hang-man-cbf91.firebaseapp.com",
  databaseURL: "https://hang-man-cbf91.firebaseio.com",
  projectId: "hang-man-cbf91",
  storageBucket: "hang-man-cbf91.appspot.com",
  messagingSenderId: "48536284558",
  appId: "1:48536284558:web:3580fdb1b2986b81d008df"
};
//------------------------------------------------
// Initialize Firebase and Firestore reference
// Do not delete!
//------------------------------------------------
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();