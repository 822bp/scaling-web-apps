import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Order from './Order';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/order/:id" element={<Order />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
