import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import EloomiPage from "pages/Home/Home";
import BookDemo from "pages/BookDemo/BookDemo";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";

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
