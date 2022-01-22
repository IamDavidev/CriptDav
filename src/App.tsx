import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import Coins from './containers/Coins';
import Exchanges from './containers/Exchanges';
import Finance from './containers/Finance';





function App() {
  return (
    <div className="bg-gray-900 h-screen p-2 text-zinc-50 flex flex-col justify-center items-center">
      <h1>CriptDav</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/finace" element={<Finance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
