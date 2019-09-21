import { initializeApp } from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

import { config } from "./config";

export default initializeApp(config);
