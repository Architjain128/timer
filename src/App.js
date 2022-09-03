import React from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from "./list";
import striverData from './data/striver'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<>Made By Archit</>} />
          <Route path="/striver" element={<List title={"Striver Sheet"} data={striverData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
