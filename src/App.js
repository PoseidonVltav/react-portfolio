import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import NoPage from "./NoPage";
import Api from './api/api';
import Ukolnicek from "./mui/Ukolnicek";
import Kalkulacka from "./nacteni_vstupu/Kalkulacka";
import Eshop from './eshop/eshop';
import OblibenaBarva from './barva/Barva';
import Navigation from './Navigation';
import { useState } from 'react'




function App() {
  const [barva, nastavBarvuObrazce] = useState("");


  return (
    <HashRouter basename='/'>
      <Navigation oblibenaBarva={barva} />
      <Routes>
        <Route index element={<Home />} />;
        <Route path="/nacteni_vstupu" element={<Kalkulacka />} />;
        <Route path="/api" element={<Api />} />;
        <Route path="/mui" element={<Ukolnicek />} />;
        <Route path="/eshop" element={<Eshop />} />;
        <Route path="/barva" element={<OblibenaBarva barva={barva} nastavBarvuObrazce={nastavBarvuObrazce} />} />;
        <Route path="*" element={<NoPage />} />;
      </Routes>
    </HashRouter>

  );
}

export default App;
