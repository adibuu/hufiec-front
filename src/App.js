import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Articles from "./components/sections/Articles/Articles";
import Contact from "./components/sections/Contact/Contact";
import Gallery from "./components/sections/Gallery";
import Documents from "./components/sections/Documents";
import Teams from "./components/sections/Teams/Teams";
import FullArticlePage from "./components/sections/FullArticlePage/FullArticlePage";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/aktualnosci/artykul/:id">
            <FullArticlePage />
          </Route>
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
            <Articles />
          </Route>
          <Route path="/druzyny">
            <Teams />
          </Route>
          <Route path="/">
            <Articles />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
