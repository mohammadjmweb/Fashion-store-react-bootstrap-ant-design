
import { Card, Row, Col, Typography, Badge } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const categories = [
  {
    id: 1,
    title: "Men",
    description: "Classic & Modern Fashion",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayfgKZTPZdiINSVAFUJv9g_nY2AkTHZEYuhVJnNDrS3zXTLL5WOma59-I&s=10",
    products: 120,
  },
  {
    id: 2,
    title: "Women",
    description: "Elegant Styles for Every Occasion",
    image:
      "https://the-wardrobe-stylist.com/wp-content/uploads/2024/02/11056-black-skinny-pants-stylish-outfits-for-women-stylish-outfits-for-fall-stylish-outfits-for-winter-stylish-outfits-for-autumn-comfy-stylish-outfits.jpg",
    products: 140,
  },
  {
    id: 3,
    title: "Shoes",
    description: "Sneakers & Casual Shoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4QBmXRl7RchJTxz1AXB9qnoz3eOTTC5WIsaFmetKipDVuRfjNgGwLbE&s=10",
    products: 90,
  },
  {
    id: 4,
    title: "Accessories",
    description: "Complete Your Outfit",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJVqb9jxYsQrfEcgjzdhWkV4MEuZpTzlWKgP3JBn9k5IIw4TH22x9ztv4&s=10",
    products: 65,
  },
];

const CategorySection = ({ darkMode }) => {
  return (
    <section className="my-5">

      <Title
        level={2}
        className={`text-center mb-5 ${
          darkMode ? "text-light" : "text-dark"
        }`}
      >
        Shop by Category
      </Title>

      <Row gutter={[24, 24]}>
        {categories.map((category) => (
          <Col
            xs={24}
            sm={12}
            lg={8}
            xl={6}
            key={category.id}
          >
            <Badge.Ribbon
              text={`${category.products} Products`}
              color="blue"
            >
              <Link
                to={`/products?category=${category.title}`}
                className="text-decoration-none"
              >
                <Card
                  hoverable
                  className={`rounded-4 overflow-hidden h-100 ${
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

                  {/* Image */}
                  <div
                    className="d-flex justify-content-center align-items-center rounded-4 overflow-hidden"
                    style={{
                      height: "300px",
                      backgroundColor: darkMode
                        ? "#2b3035"
                        : "#f8f9fa",
                    }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <Title
                    level={4}
                    className={`mt-3 ${
                      darkMode
                        ? "text-light"
                        : "text-dark"
                    }`}
                  >
                    {category.title}
                  </Title>

                  {/* Description */}
                  <Paragraph
                    className={
                      darkMode
                        ? "text-secondary mb-0"
                        : "text-muted mb-0"
                    }
                  >
                    {category.description}
                  </Paragraph>

                </Card>
              </Link>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>

    </section>
  );
};

export default CategorySection;

