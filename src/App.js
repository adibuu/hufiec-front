import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingLayout from "./components/layouts/LandingLayout";
import Hero from "./components/sections/Hero";

export default function App() {
  return (
    <LandingLayout>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
      </BrowserRouter>
    </LandingLayout>
  );
}
