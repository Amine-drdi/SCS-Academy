import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../app/context/AppContext";
import {
  MdOutlineAccountCircle,
  MdSearch,
  MdMenu,
} from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import {
  administrativeCategories,
  btpCategories,
  medicalCategories,
} from "../assets/data/categories";

const Header = () => {
  const { activeMenu, setActiveMenu, openSearchMenu, setOpenSearchMenu } =
    useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  
  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
  };

  const handleLogout = async () => {
    try {
    } catch (e) {}
  };

  const handleKeyPress = (e) => {
    if (searchQuery.trim() !== "" && e.key === "Enter") {
      navigate(`/formations/recherches?search=${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/formations/recherches?search=${searchQuery}`);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // petit délai pour éviter les fermetures trop rapides
  };

  return (
    <header className="sticky top-0 z-[999] xl:px-desktop_padding md:px-laptop_padding sm:px-tablet_padding px-mobile_padding h-16 flex flex-row items-center justify-between w-full bg-header_background_color text-header_text_color shadow-headerShadow">
      <div className="max-lg:w-full max-lg:flex max-lg:justify-between max-lg:items-center">
        <div className="py-[17px] w-[139px] flex items-center gap-4">
          <button
            className="lg:hidden flex"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MdMenu className="w-8 h-8 text-[#141414]" />
          </button>
          <NavLink to="/" className="">
            <img
              className="h-48 w-96"
              src="/public/images/logo_lemida.png"
              alt="SCS Academy"
            />
          </NavLink>
        </div>
        <div className="lg:hidden flex gap-4">
          <NavLink to="/connexion">
            <MdOutlineAccountCircle className="w-8 h-8 text-[#141414]" />
          </NavLink>
          {/*<button
            className="cursor-pointer"
            onClick={() => setOpenSearchMenu(!openSearchMenu)}
          >
            <MdSearch className="w-8 h-8 text-[#141414]" />
          </button>*/}
        </div>
      </div>

      <div className="lg:flex hidden justify-end items-center xl:gap-10 gap-7 w-full h-full text-sm font-medium leading-[22px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
          [
          "relative w-fit h-full flex items-center text-nav_color/85 border-b-2 border-transparent",
           isActive ? " border-orange-500 text-orange-600" : "",
          "group",
            ].join(" ")
          }
          >
          <span className="relative z-10 group-hover:text-orange-500 transition-all">Accueil</span>
          <span className="absolute inset-0 -mx-4  opacity-0 group-hover:opacity-100 transition-all"></span>
          </NavLink>


        <div
      className="relative ml-[20px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Lien Formations */}
      <div
  className={`relative flex gap-1 items-center h-full cursor-pointer border-b-2 transition-all group
    ${
      location.pathname.includes("/formations")
        ? "border-orange-500 text-orange-600"
        : "border-transparent text-nav_color/85"
    }`}
>
  <NavLink
    to="/formations/categorie/btp"
    className="flex items-center relative z-10 group-hover:text-orange-500 transition-all"
  >
    Formations
  </NavLink>
  <HiChevronDown className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:text-orange-500 group-hover:rotate-180" />
  <span
    className="absolute inset-0 -mx-2  opacity-0 group-hover:opacity-100 transition-all duration-300"
  ></span>
</div>


      {/* Menu dropdown visible si hover sur Formations ou menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/3 mt-6 bg-white shadow-xl rounded-xl px-6 py-6 w-[700px] z-50 grid grid-cols-3 gap-6 animate-fade-in">
          {btpCategories.map((category) => (
            <NavLink
              key={category.id}
              to={`/formations/btp/${category.id}`}
              className="block text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>



    <NavLink
  to="/a-propos"
  className={({ isActive }) =>
    [
      "relative w-fit h-full flex items-center text-nav_color/85 border-b-2 border-transparent",
      isActive ? "text-orange-600 border-orange-500" : "",
      "group",
    ].join(" ")
  }
>
  <span className="relative z-10 group-hover:text-orange-500 transition-all">Qui sommes-nous?</span>
  <span className="absolute inset-0 -mx-2 opacity-0 group-hover:opacity-100 transition-all"></span>
</NavLink>


        

<NavLink
  to="/contact"
  className={({ isActive }) =>
    [
      "relative w-fit h-full flex items-center text-nav_color/85 border-b-2 border-transparent",
      isActive ? "text-orange-600 border-orange-500" : "",
      "group",
    ].join(" ")
  }
>
  <span className="relative z-10 group-hover:text-orange-500 transition-all">Contactez-nous</span>
  <span className="absolute inset-0 -mx-2  opacity-0 group-hover:opacity-100 transition-all"></span>
</NavLink>



      </div>
    </header>
  );
};

export default Header;