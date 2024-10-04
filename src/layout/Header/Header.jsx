import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { GlobalDataContext } from "../../context/ModeContext";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18next";
import { FaEarthAmericas } from "react-icons/fa6";
import styles from "./Header.module.css";

const Header = ({ token: initialToken }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [token, setToken] = useState(initialToken);
  const { toggleMode, darkMode } = useContext(GlobalDataContext);

  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const { t } = useTranslation();

  useEffect(() => {
    setToken(initialToken);
  }, [initialToken]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageMenuOpen(false); 
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link to="/">
          <h1>Glamora</h1>
        </Link>
      </div>

      <div className={`${styles.navbarMenu}`}>
        <ul>
          <li>
            <Link to="/">{t("header.li1")}</Link>
          </li>
          <li>
            <Link to="/about">{t("header.li2")}</Link>
          </li>
          <li>
            <Link to="/shop">{t("header.li3")}</Link>
          </li>
          <li>
            <Link to="/faq">{t("header.li4")}</Link>
          </li>
          <li>
            <Link to="/blogs">{t("header.li5")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("header.li6")}</Link>
          </li>
        </ul>
      </div>

      <div
        className={`${styles.navbarMenuResp} ${isOpen ? styles.isActive : ""}`}
      >
        <ul>
          <li>
            <Link to="/">{t("header.li1")}</Link>
          </li>
          <li>
            <Link to="/about">{t("header.li2")}</Link>
          </li>
          <li>
            <Link to="/shop">{t("header.li3")}</Link>
          </li>
          <li>
            <Link to="/faq">{t("header.li4")}</Link>
          </li>
          <li>
            <Link to="/blogs">{t("header.li5")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("header.li6")}</Link>
          </li>
        </ul>
      </div>

      <div className={styles.icons}>
        <div className={styles.wishListDiv}>
          <span className={styles.span2}>{totalWishlistItems}</span>
          <Link to="/wishlist">
            <button aria-label="Wishlist">
              <IoMdHeartEmpty />
            </button>
          </Link>
        </div>

        <div className={styles.basketDiv}>
          <span className={styles.span1}>{totalItems}</span>
          <Link to="/basketPage">
            <button aria-label="Basket">
              <SlBasket />
            </button>
          </Link>
        </div>
        <button
          onClick={toggleMode}
          className={styles.darkLight}
          aria-label="Toggle dark/light mode"
        >
          {darkMode ? <IoMdSunny /> : <IoMdMoon />}
        </button>

        <div className={styles.userLogin}>
          {token ? (
            <div className={styles.loggedInMenu}>
              <div
                className={styles.profileIcon}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <IoPersonCircle size={24} />
                <span>{token.user?.user_metadata?.user_name}</span>
              </div>
              {dropdownOpen && (
  <div className={styles.dropdownMenu}>
    <ul>
      <li>
        {token.user?.user_metadata?.user_name === "Admin" ? (
          <Link to="/admin/blogs">Dashboard</Link>
        ) : (
          <Link to="/basketPage"></Link> // No text for non-admin users
        )}
      </li>
      <li>
        <button onClick={handleLogout}>
          <FiLogOut /> Logout
        </button>
      </li>
    </ul>
  </div>
)} 
</div>
) : (
  <Link to="/register">
    <button aria-label="Register">
      <IoPersonCircle size={24} />
    </button>
  </Link>
)}

        </div>

        <div className={styles.languageSwitcher}>
          <button
            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            aria-label="Language menu"
            className={styles.languageButton}
          >
            <FaEarthAmericas />
          </button>
          {languageMenuOpen && (
            <div className={styles.languageDropdown}>
              <button onClick={() => changeLanguage("en")}>en</button>
              <button onClick={() => changeLanguage("rus")}>rus</button>
            </div>
          )}
        </div>
      </div>

      <button
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
    </nav>
  );
};

export default Header;
