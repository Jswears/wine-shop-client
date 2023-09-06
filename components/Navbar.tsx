import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { userId } = auth();
  return (
    <header>
      <nav className="flex justify-between items-center h-12 bg-white shadow-md">
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
              {userId ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                </svg>
              )}
            </Link>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                <circle cx="10.5" cy="19.5" r="1.5"></circle>
                <circle cx="17.5" cy="19.5" r="1.5"></circle>
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
