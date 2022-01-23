import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';


import Coins from './containers/Coins';
import Exchanges from './containers/Exchanges';
import Finance from './containers/Finance';
import Navbar from './containers/Navbar';





function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-2 text-zinc-50 flex flex-col justify-center items-center">
      <h1>CriptDav</h1>
      <BrowserRouter>
          <Navbar />
        <Routes>
          
          <Route path="/" element={<Navigate to="/coins" />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/finance" element={<Finance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
