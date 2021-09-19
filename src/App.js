import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Articles from "./components/sections/Articles/Articles";
import Contact from "./components/sections/Contact/Contact";
import Gallery from "./components/sections/Gallery";
import Documents from "./components/sections/Documents";
import Teams from "./components/sections/Teams/Teams";
import FullArticlePage from "./components/sections/FullArticlePage/FullArticlePage";
import FullTeamPage from "./components/sections/FullTeamPage/FullTeamPage";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/aktualnosci/artykul/:id" component={FullArticlePage} />
          <Route path="/druzyny/:id" component={FullTeamPage} />
          <Route path="/dokumenty" component={Documents} />
          <Route path="/galeria" component={Gallery} />
          <Route path="/kontakt" component={Contact} />
          <Route exact path="/aktualnosci" component={Articles} />
          <Route exact path="/druzyny" component={Teams} />
          <Route path="/" component={Articles} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
