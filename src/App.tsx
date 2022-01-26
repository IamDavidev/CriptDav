import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './containers/Navbar';

const Coins = lazy(() => import('./containers/Coins'));
const CoinFilter = lazy(() => import('./containers/CoinFilter'));
const Exchanges = lazy(() => import('./containers/Exchanges'));
const Nfts = lazy(() => import('./containers/Nfts'));

function App() {
  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center ">
        <BrowserRouter>
          <Navbar />
          <div className=" min-h-screen p-2 text-zinc-50 flex flex-col justify-center items-center">
            <Suspense fallback={<div>laoding ...</div>}>
              <Routes>
                <Route path="/" element={<Navigate to="/coins" />} />
                <Route path="/coins" element={<Coins />} />
                <Route path="/coin/:title" element={<CoinFilter />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/nfts" element={<Nfts />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
