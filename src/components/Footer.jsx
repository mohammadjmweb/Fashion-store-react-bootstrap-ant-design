import { Layout, Typography } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  GithubFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer = ({ darkMode }) => {
  return (
    <AntFooter
      className={`py-5 border-top ${
        darkMode
          ? "bg-dark border-secondary"
          : "bg-white border-light"
      }`}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Logo */}

          <div className="col-12 col-md-4">
            <Title
              level={3}
              className="text-primary mb-2"
            >
              Fashion Store
            </Title>

            <Text
              className={
                darkMode
                  ? "text-light"
                  : "text-secondary"
              }
            >
              Modern Fashion Store built with React,
              Bootstrap and Ant Design.
            </Text>
          </div>

          {/* Quick Links */}

          <div className="col-12 col-md-4">
            <Title
              level={5}
              className={
                darkMode
                  ? "text-light"
                  : "text-dark"
              }
            >
              Quick Links
            </Title>

            <div className="d-flex flex-column gap-2">
              <Link
                to="/"
                className={`text-decoration-none ${
                  darkMode
                    ? "text-light"
                    : "text-secondary"
                }`}
              >
                Home
              </Link>

              <Link
                to="/products"
                className={`text-decoration-none ${
                  darkMode
                    ? "text-light"
                    : "text-secondary"
                }`}
              >
                Shop
              </Link>

              <Link
                to="/products?category=Men"
                className={`text-decoration-none ${
                  darkMode
                    ? "text-light"
                    : "text-secondary"
                }`}
              >
                Men
              </Link>

              <Link
                to="/products?category=Women"
                className={`text-decoration-none ${
                  darkMode
                    ? "text-light"
                    : "text-secondary"
                }`}
              >
                Women
              </Link>
            </div>
          </div>

          {/* Social */}

          <div className="col-12 col-md-4">
            <Title
              level={5}
              className={
                darkMode
                  ? "text-light"
                  : "text-dark"
              }
            >
              Follow Us
            </Title>

            <div className="d-flex gap-4 mt-3">
              <FacebookFilled
                className="fs-3 text-primary"
                style={{ cursor: "pointer" }}
              />

              <InstagramFilled
                className="fs-3 text-danger"
                style={{ cursor: "pointer" }}
              />

              <GithubFilled
                className={`fs-3 ${
                  darkMode
                    ? "text-light"
                    : "text-dark"
                }`}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        {/* Copyright */}

        <div
          className={`text-center pt-4 mt-5 border-top ${
            darkMode
              ? "border-secondary"
              : "border-light"
          }`}
        >
          <Text
            className={
              darkMode
                ? "text-light"
                : "text-secondary"
            }
          >
            © {new Date().getFullYear()} Fashion Store |
            Designed by Mohammad Jm
          </Text>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;