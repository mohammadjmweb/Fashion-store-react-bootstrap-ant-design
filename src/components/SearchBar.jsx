import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = ({
  value,
  onChange,
  darkMode,
}) => {
  return (
    <div
      className={`
        position-relative 
        rounded-pill 
        overflow-hidden
        ${
          darkMode
            ? "border border-secondary bg-dark"
            : "border border-light-subtle bg-white"
        }
      `}
      style={{
        height: "58px",
        transition: "0.3s",
      }}
    >

      {/* Search Icon */}

      <SearchOutlined
        className={`position-absolute top-50 translate-middle-y ms-3 ${
          darkMode
            ? "text-secondary"
            : "text-muted"
        }`}
        style={{
          fontSize: "20px",
          zIndex: 2,
        }}
      />


      {/* Input */}

      <Input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search products, brands..."
        allowClear

        className="h-100 border-0 shadow-none"

        style={{
          width: "100%",
          height: "100%",
          paddingLeft: "50px",
          paddingRight: "45px",

          backgroundColor: darkMode
            ? "#212529"
            : "#ffffff",

          color: darkMode
            ? "#ffffff"
            : "#212529",

          fontSize: "16px",
        }}

      />

    </div>
  );
};

export default SearchBar;
