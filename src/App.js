import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import Error from "./components/Error";
import Articles from "./components/sections/Articles/Articles";
import Contact from "./components/sections/Contact/Contact";
import Gallery from "./components/sections/Gallery";
import Documents from "./components/sections/Documents";
import Teams from "./components/sections/Teams/Teams";
import FullArticlePage from "./components/sections/FullArticlePage/FullArticlePage";
import FullTeamPage from "./components/sections/FullTeamPage/FullTeamPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "./store/actions/contactActions";
import { fetchInfoModal } from "./store/actions/infoModalActions";

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.ui.error);

  useEffect(() => {
    dispatch(fetchInfoModal());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Layout>
      <BrowserRouter>
        {error && <Error />}
        <Switch>
          <Route path="/aktualnosci/artykul/:id" component={FullArticlePage} />
          <Route path="/druzyny/:id" component={FullTeamPage} />
          <Route path="/dokumenty" component={Documents} />
          <Route path="/galeria" component={Gallery} />
          <Route path="/kontakt" component={Contact} />
          <Route exact path="/aktualnosci/:pageNumber" component={Articles} />
          <Route exact path="/druzyny" component={Teams} />
          <Route path="/" component={Articles} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
