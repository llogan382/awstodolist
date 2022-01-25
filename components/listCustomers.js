import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createCustomer } from '../src/graphql/mutations'
import { API, Auth, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


function ListCustomers(){


const todoDetails = {
  firstName: "John",
  lastName: "Doe",
  email: "test@testlcom",
};

const addCustomer = () => {
  API.graphql(graphqlOperation(createCustomer, { input: todoDetails }))
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

const showTHis = <div>Not logged IN</div>
return (
  <div>
    {Auth.user?.username ? (
      <h2>You should only see this if you are logged in.</h2>
    ) : (
      showTHis
    )}
  </div>
);};

export default ListCustomers;
