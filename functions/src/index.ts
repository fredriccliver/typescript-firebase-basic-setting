import * as functions from "firebase-functions"

import {tsConst} from "./tsConst"
import {jsConst} from "./jsConst"


export const helloWorld = functions.https.onCall((data, context) => {
  return `Hello from Firebase!\n${tsConst.data}\n${jsConst.data}`
})
