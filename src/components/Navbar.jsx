import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Switch } from "antd";

import {
  HomeOutlined,
  ShoppingOutlined,
  AppstoreOutlined,
  DownOutlined,
} from "@ant-design/icons";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();

  // رفتن به صفحه و سپس اسکرول به بالا
  const handleNavigate = (path) => {
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const items = [
    {
      key: "1",
      label: (
        <span
          onClick={() =>
            handleNavigate("/products?category=Men")
          }
        >
          Men
        </span>
      ),
    },

    {
      key: "2",
      label: (
        <span
          onClick={() =>
            handleNavigate("/products?category=Women")
          }
        >
          Women
        </span>
      ),
    },

    {
      key: "3",
      label: (
        <span
          onClick={() =>
            handleNavigate("/products?category=Shoes")
          }
        >
          Shoes
        </span>
      ),
    },

    {
      key: "4",
      label: (
        <span
          onClick={() =>
            handleNavigate("/products?category=Accessories")
          }
        >
          Accessories
        </span>
      ),
    },
  ];

  return (
    <nav
      className={`navbar sticky-top shadow-sm py-3 ${
        darkMode
          ? "navbar-dark bg-dark"
          : "navbar-light bg-white"
      }`}
    >
      <div className="container-fluid px-3 px-lg-4">

        {/* Logo */}

        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="navbar-brand fw-bold fs-3 text-primary"
        >
          Fashion Store
        </Link>

        {/* Menu */}

        <ul className="navbar-nav flex-row mx-auto gap-4">

          {/* Home */}

          <li className="nav-item">
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="nav-link d-flex align-items-center gap-2"
            >
              <HomeOutlined />

              <span className="d-none d-lg-inline">
                Home
              </span>
            </Link>
          </li>

          {/* Shop */}

          <li className="nav-item">
            <Link
              to="/products"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="nav-link d-flex align-items-center gap-2"
            >
              <ShoppingOutlined />

              <span className="d-none d-lg-inline">
                Shop
              </span>
            </Link>
          </li>

          {/* Categories */}

          <li className="nav-item">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["hover"]}
            >
              <span
                className="nav-link d-flex align-items-center gap-2"
                style={{
                  cursor: "pointer",
                }}
              >
                <AppstoreOutlined />

                <span className="d-none d-lg-inline">
                  Categories
                </span>

                <DownOutlined className="d-none d-lg-inline" />
              </span>
            </Dropdown>
          </li>
        </ul>

        {/* Theme */}

        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          checkedChildren="🌙"
          unCheckedChildren="☀️"
        />
      </div>
    </nav>
  );
};

export default Navbar;
