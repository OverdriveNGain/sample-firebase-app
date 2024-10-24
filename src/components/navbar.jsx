import { useState } from 'react';

export const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
      <nav className="navbar flex flex-row bg-[#15ae5c] items-center py-2 px-8">
        <img
          className="h-10 mr-2"
          src="/images/sample_green_logo.jpg"
          alt="Logo"
        />
        <span className="flex-1">Global Chat</span>
        <button className="navbar-button mx-2" onClick={handleLoginLogout}>
          {isLoggedIn ? "Log out" : "Log in"}
        </button>
      </nav>
    );
}


