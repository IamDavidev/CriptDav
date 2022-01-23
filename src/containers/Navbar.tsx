import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="">
        <Link className="px-3 text-emerald-400 text-2xl uppercase" to="/coins">
          coins
        </Link>
        <Link
          className="px-3 text-emerald-400 text-2xl uppercase"
          to="/exchanges"
        >
          exchanges
        </Link>
        <Link className="px-3 text-emerald-400 text-2xl uppercase " to="/nfts">
          Nfts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
