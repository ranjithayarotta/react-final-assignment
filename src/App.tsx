import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import Layout from "./Component/Layout";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid container style={{fontFamily:"Montserrat"}}>
      <Grid item xs={12}>
        <NavigationBar />
      </Grid>
      <Grid item style={{margin:"33px",fontFamily:"Montserrat"}} xs={12}>
        <Layout />
      </Grid>
    </Grid>
  );
}

export default App;
