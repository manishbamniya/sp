import React from "react";
import { Route, Switch } from "react-router-dom";
import UserPage from "../pages/userPage";
import SystemPage from "../pages/systemPage";
import Header from "../components/Header";
import MainLayout from "../layouts/mainLayout";
import UserDetails from "../pages/userDetail";
import SystemDetails from "../pages/systemDetail";

export default function Routes() {
  return (
    <>
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/" component={UserPage} exact />
          <Route path="/user" component={UserPage} exact />
          <Route path="/system" component={SystemPage} exact />
          <Route path="/user/:id/userDetails" component={UserDetails} exact />
          <Route path="/system/:id/systemDetails" component={SystemDetails} exact />
          <Route component={Error} />
        </Switch>
      </MainLayout>
    </>
  );
}
