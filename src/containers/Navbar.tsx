import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav>
            <div className="">
                <Link className="px-3 text-emerald-400 text-2xl "  to="/coins" >
                    coins
                </Link>
                <Link className="px-3 text-emerald-400 text-2xl"  to="/exchanges">
                    exchanges
                </Link>
                <Link className="px-3 text-emerald-400 text-2xl"  to="/finance">
                    finance
                </Link>
            </div>
        </nav>
    )
}


export default Navbar