import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouterProvider,
} from "react-router-dom";
import { EloomiPage } from "pages/EloomiPage";
import BookDemo from "pages/BookDemo";
import NotFoundPage from "pages/NotFoundPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <EloomiPage></EloomiPage>
        </Route>
        <Route>
          <BookDemo path="/BookDemo"></BookDemo>
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
