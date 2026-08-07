import { Row, Col, Typography, Empty } from "antd";
import { useNavigate } from "react-router-dom";

import ProductCard from "./ProductCard";

const { Title } = Typography;

const RelatedProducts = ({
  currentProduct,
  products = [],
  darkMode,
}) => {
  const navigate = useNavigate();

  const relatedProducts = products
    .filter(
      (product) =>
        product.category === currentProduct?.category &&
        product.id !== currentProduct?.id
    )
    .slice(0, 4);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-5 pt-4 pb-5">

      {/* Title */}

      <Title
        level={2}
        className={
          darkMode
            ? "text-light"
            : "text-dark"
        }
      >
        Related Products
      </Title>

      {/* Products */}

      {relatedProducts.length === 0 ? (
        <div
          className={
            darkMode
              ? "text-light"
              : "text-dark"
          }
        >
          <Empty
            description={
              <span
                className={
                  darkMode
                    ? "text-light"
                    : "text-muted"
                }
              >
                No related products found.
              </span>
            }
          />
        </div>
      ) : (
        <Row gutter={[24, 24]}>
          {relatedProducts.map((product) => (
            <Col
              xs={24}
              sm={12}
              md={12}
              lg={6}
              key={product.id}
              onClick={() =>
                handleProductClick(product.id)
              }
              style={{
                cursor: "pointer",
              }}
            >
              <ProductCard
                product={product}
                darkMode={darkMode}
              />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default RelatedProducts;
