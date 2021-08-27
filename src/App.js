import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import News from "./components/sections/News";
import Contact from "./components/sections/Contact";
import Gallery from "./components/sections/Gallery";
import Documents from "./components/sections/Documents";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/dokumenty">
            <Documents />
          </Route>
          <Route path="/galeria">
            <Gallery />
          </Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
          <Route path="/aktualnosci">
            <News />
          </Route>
          <Route path="/">
            <News />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
