import '../styles/globals.css'
// import Amplify, { API, graphqlOperation } from "aws-amplify";
import {Amplify } from "aws-amplify";
import awsmobile from "../src/aws-exports";
Amplify.configure(awsmobile);


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
