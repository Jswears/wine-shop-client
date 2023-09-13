import Link from "next/link";
import CartButton from "./shoppingcart/CartButton";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center h-12 bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <Link href="/">
          <h1 className="ms-5 font-bold">Vinotique.</h1>
        </Link>
        <div className="nav-links flex justify-between items-center font-medium">
          <div className="links me-20 flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/shop/wines">Wines</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="nav-users flex me-10 gap-5">
            {/* TODO: If loggedIn, re-direct to /profile, if !loggedIn re-direct to /login */}
            <Link href="/sign-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
              </svg>
            </Link>
            <CartButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
