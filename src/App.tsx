import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Coins from './containers/Coins';
import Exchanges from './containers/Exchanges';
import Finance from './containers/Finance';
import Navbar from './containers/Navbar';
import Nfts from './containers/Nfts';

function App() {
  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center ">
        <div className="py-1 m-3">
        <h1 className=' text-4xl text-blue-700  ' >CriptDav</h1>
        </div>
        <BrowserRouter>
          <Navbar />
          <div className=" min-h-screen p-2 text-zinc-50 flex flex-col justify-center items-center">
            <Routes>
              <Route path="/" element={<Navigate to="/coins" />} />
              <Route path="/coins" element={<Coins />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/nfts" element={<Nfts />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
