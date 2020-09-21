import firebase from "firebase/app"
import "firebase/functions"
import { firebaseConfig } from "./firebaseInit"
firebase.initializeApp(firebaseConfig)

if (location.hostname == "127.0.0.1" || location.hostname == "localhost") {
  console.log("This is local emulator environment")
  firebase.functions().useFunctionsEmulator("http://localhost:5001")
}

const helloWorld = firebase.functions().httpsCallable("helloWorld")
const callFunction = () => {
  helloWorld()
    .then((result) => {
      console.log(result.data)
    })
    .catch((error) => console.log(error))
}

callFunction()
