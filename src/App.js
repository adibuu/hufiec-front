import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Hero from "./components/sections/Hero";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/kontakt">
            <Contact />
          </Route>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
