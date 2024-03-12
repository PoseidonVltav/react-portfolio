import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation";
import Home from "./Home";
import NoPage from "./NoPage";
import Api from './api/api';
import Ukolnicek from "./mui/Ukolnicek";
import Kalkulacka from "./nacteni_vstupu/Kalkulacka";
import Eshop from './eshop/eshop';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation />}>;
        <Route index element={<Home />} />;
        <Route path="/nacteni_vstupu" element={<Kalkulacka />} />;
        <Route path="/api" element={<Api />} />;
        <Route path="/mui" element={<Ukolnicek />} />;
        <Route path="/eshop" element={<Eshop />} />;
        <Route path="*" element={<NoPage />} />;
      </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
