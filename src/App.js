import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Hero from "./components/sections/Hero";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
