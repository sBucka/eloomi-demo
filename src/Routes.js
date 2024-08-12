import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import EloomiPage from "pages/Home";
import BookDemo from "pages/BookDemo";
import NotFoundPage from "pages/NotFoundPage";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<EloomiPage />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
