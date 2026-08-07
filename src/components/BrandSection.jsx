import {
  Row,
  Col,
  Card,
  Avatar,
  Typography,
  Badge,
} from "antd";

const { Title, Text } = Typography;

const brands = [
  {
    id: 1,
    name: "Nike",
    logo:
      "https://www.earlsfightshop.com/cdn/shop/collections/14.png?v=1700287250",
    products: 120,
    color: "#1677ff",
  },
  {
    id: 2,
    name: "Adidas",
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtKbwV7WEoskI2rCQrvA-Dsxa4amz4-bPZdrG_zb0_JJyAFw2SCrgayXY&s=10",
    products: 95,
    color: "#000",
  },
  {
    id: 3,
    name: "Puma",
    logo:
      "https://fabrikbrands.com/wp-content/uploads/Puma-Logo-1-1155x770.png",
    products: 80,
    color: "#d4380d",
  },
  {
    id: 4,
    name: "Zara",
    logo:
      "https://static.vecteezy.com/system/resources/thumbnails/024/131/336/small/zara-brand-logo-symbol-clothes-black-design-icon-abstract-illustration-free-vector.jpg",
    products: 60,
    color: "#722ed1",
  },
  {
    id: 5,
    name: "H&M",
    logo:
      "https://images.seeklogo.com/logo-png/6/1/hm-logo-png_seeklogo-64496.png",
    products: 75,
    color: "#cf1322",
  },
  {
    id: 6,
    name: "Levi's",
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNeDEKAGKYr-taLRfXeXTNm5fCVuQ4I2KgxAIfN20a8g&s=10",
    products: 55,
    color: "#1890ff",
  },
];

const BrandSection = ({ darkMode }) => {
  return (
    <section className="my-5 py-5">

      {/* Title */}

      <Title
        level={2}
        className={`text-center mb-5 ${
          darkMode ? "text-light" : "text-dark"
        }`}
      >
        Popular Brands
      </Title>

      {/* Brands */}

      <Row gutter={[24, 24]}>
        {brands.map((brand) => (
          <Col
            xs={12}
            sm={8}
            md={6}
            lg={4}
            key={brand.id}
          >
            <Badge
              count={`${brand.products}+`}
              color={brand.color}
            >

              <Card
                hoverable
                className={`text-center rounded-4 h-100 ${
                  darkMode
                    ? "bg-dark text-light border-secondary"
                    : "bg-white text-dark"
                }`}
                styles={{
                  body: {
                    backgroundColor: darkMode
                      ? "#212529"
                      : "#ffffff",
                  },
                }}
              >

                {/* Logo */}

                <Avatar
                  src={brand.logo}
                  size={80}
                  style={{
                    marginBottom: 20,
                    backgroundColor: "#fff",
                  }}
                />

                {/* Brand Name */}

                <Title
                  level={5}
                  className={
                    darkMode
                      ? "text-light"
                      : "text-dark"
                  }
                >
                  {brand.name}
                </Title>

                {/* Products */}

                <Text
                  className={
                    darkMode
                      ? "text-secondary"
                      : "text-muted"
                  }
                >
                  {brand.products} Products
                </Text>

              </Card>

            </Badge>
          </Col>
        ))}
      </Row>

    </section>
  );
};

export default BrandSection;

