import { Carousel, Card, Button, Badge, Rate, Typography } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ProductCarousel = ({ title, products, darkMode }) => {
  return (
    <section className="my-5">

      {/* Section Title */}
      <Title
        level={2}
        className={`mb-4 ${
          darkMode ? "text-light" : "text-dark"
        }`}
      >
        {title}
      </Title>

      <Carousel
        autoplay
        dots
        slidesToShow={4}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >

        {products.map((product) => (
          <div
            key={product.id}
            className="px-2"
          >

            <Badge.Ribbon
              color={product.discount ? "red" : "green"}
              text={
                product.discount
                  ? `${product.discount}% OFF`
                  : "NEW"
              }
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

                {/* Product Image */}
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
                    src={product.image}
                    alt={product.title}
                    className="w-100 h-100"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="pt-3">

                  <Title
                    level={5}
                    className={
                      darkMode
                        ? "text-light"
                        : "text-dark"
                    }
                  >
                    {product.title}
                  </Title>

                  <Rate
                    disabled
                    allowHalf
                    value={product.rating}
                  />

                  <div className="d-flex justify-content-between align-items-center mt-3">

                    {/* Price */}
                    <div>

                      <Title
                        level={4}
                        className="mb-0 text-primary"
                      >
                        ${product.price}
                      </Title>

                      {product.oldPrice && (
                        <Text
                          delete
                          className={
                            darkMode
                              ? "text-secondary"
                              : "text-muted"
                          }
                        >
                          ${product.oldPrice}
                        </Text>
                      )}

                    </div>

                    {/* Details */}
                    <Link
                      to={`/product/${product.id}`}
                    >
                      <Button
                        type="primary"
                        icon={<EyeOutlined />}
                      >
                        View
                      </Button>
                    </Link>

                  </div>

                </div>

              </Card>

            </Badge.Ribbon>

          </div>
        ))}

      </Carousel>

    </section>
  );
};

export default ProductCarousel;

