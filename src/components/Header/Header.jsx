import React, { useContext, useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext.jsx";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const {theme,toggleTheme}=useContext(ThemeContext)

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className={`py-3 shadow ${theme=== 'light' ? 'bg-gray-200' : 'bg-gray-800'}`}>
      <Container>
        <nav className="flex items-center justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" /> 
            </Link>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
            <button onClick={toggleTheme} className="focus:outline-none lg:hidden">
              {theme === 'light' ? (
                <img src="/moon.png" alt="Switch to Dark Mode" className="w-6 h-6" />
              ) : (
                <img src="/light.png" alt="Switch to Light Mode" className="w-6 h-6" />
              )}
            </button>
          </div>
          <ul className={`flex flex-col lg:flex-row lg:items-center lg:space-x-4 ${menuOpen ? "block" : "hidden"} lg:flex`}>
          <li>
              <button onClick={toggleTheme} className="focus:outline-none">
                {theme === 'light' ? (
                  <img src="/moon.png" alt="Switch to Dark Mode" className="w-6 h-6" />
                ) : (
                  <img src="/light.png" alt="Switch to Light Mode" className="w-6 h-6" />
                )}
              </button>
            </li>

            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="my-2 lg:my-0">
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-6 py-2 duration-200 ${theme === 'light' ? 'hover:bg-blue-100': 'hover:bg-gray-600' }  rounded-full`}
                  >
                   <b>{item.name}</b> 
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="my-2 lg:my-0">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
