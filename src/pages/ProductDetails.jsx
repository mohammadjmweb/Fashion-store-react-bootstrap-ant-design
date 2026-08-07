import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Row,
  Col,
  Typography,
  Image,
  Rate,
  Tag,
  Button,
  Divider,
  Breadcrumb,
  Select,
  Card,
} from "antd";

import {
  ShoppingOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import { products } from "../data/products";

import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";

const { Title, Paragraph, Text } = Typography;

const ProductDetails = ({ darkMode }) => {
  const { id } = useParams();

  // پیدا کردن محصول
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // رفتن به بالای صفحه هنگام تغییر محصول
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  // اگر محصول وجود نداشت
  if (!product) {
    return (
      <div
        className={`container-fluid min-vh-100 d-flex justify-content-center align-items-center ${
          darkMode
            ? "bg-dark text-light"
            : "bg-light text-dark"
        }`}
      >
        <Title
          level={2}
          className={darkMode ? "text-light" : "text-dark"}
        >
          Product Not Found
        </Title>
      </div>
    );
  }

  return (
    <div
      className={`container-fluid py-5 ${
        darkMode
          ? "bg-dark text-light"
          : "bg-light text-dark"
      }`}
    >
      <div className="container-fluid px-3 px-lg-5">

        {/* Breadcrumb */}

        <Breadcrumb
          className="mb-4"
          items={[
            {
              title: (
                <span
                  className={
                    darkMode
                      ? "text-light"
                      : "text-dark"
                  }
                >
                  Home
                </span>
              ),
            },
            {
              title: (
                <span
                  className={
                    darkMode
                      ? "text-light"
                      : "text-dark"
                  }
                >
                  Products
                </span>
              ),
            },
            {
              title: (
                <span
                  className={
                    darkMode
                      ? "text-light"
                      : "text-dark"
                  }
                >
                  {product.title}
                </span>
              ),
            },
          ]}
        />

        {/* Product */}

        <Card
          bordered={false}
          className={`border-0 shadow-lg rounded-4 ${
            darkMode
              ? "bg-secondary text-light"
              : "bg-white"
          }`}
          styles={{
            body: {
              padding: "30px",
            },
          }}
        >
          <Row gutter={[50, 50]}>

            {/* Product Image */}

            <Col xs={24} lg={12}>
              <div
                className={`rounded-4 overflow-hidden d-flex justify-content-center align-items-center ${
                  darkMode
                    ? "bg-dark"
                    : "bg-light"
                }`}
                style={{
                  minHeight: "500px",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width="100%"
                  style={{
                    maxHeight: "550px",
                    objectFit: "contain",
                  }}
                  preview
                />
              </div>
            </Col>

            {/* Product Information */}

            <Col xs={24} lg={12}>

              {/* Category */}

              <Tag color="blue">
                {product.category}
              </Tag>

              {/* Title */}

              <Title
                level={2}
                className={`mt-3 ${
                  darkMode
                    ? "text-light"
                    : "text-dark"
                }`}
              >
                {product.title}
              </Title>

              {/* Rating */}

              <div className="d-flex align-items-center gap-2 mb-3">
                <Rate
                  disabled
                  allowHalf
                  value={product.rating}
                />

                <Text
                  className={
                    darkMode
                      ? "text-light"
                      : "text-muted"
                  }
                >
                  ({product.rating})
                </Text>
              </div>

              <Divider />

              {/* Price */}

              <div className="mb-4">

                <Title
                  level={2}
                  className="text-primary mb-1"
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

              {/* Description */}

              <Paragraph
                className={`fs-5 ${
                  darkMode
                    ? "text-light"
                    : "text-dark"
                }`}
                style={{
                  lineHeight: 1.8,
                }}
              >
                {product.description}
              </Paragraph>

              <Divider />

              {/* Size */}

              {product.sizes?.length > 0 && (
                <div className="mb-4">

                  <Text
                    strong
                    className={
                      darkMode
                        ? "text-light"
                        : "text-dark"
                    }
                  >
                    Size
                  </Text>

                  <Select
                    size="large"
                    className="d-block mt-2"
                    style={{
                      width: 200,
                    }}
                    defaultValue={
                      product.sizes[0]
                    }
                    options={product.sizes.map(
                      (size) => ({
                        value: size,
                        label: size,
                      })
                    )}
                  />

                </div>
              )}

              {/* Material */}

              <div className="mb-4">

                <Text
                  strong
                  className={
                    darkMode
                      ? "text-light"
                      : "text-dark"
                  }
                >
                  Material:
                </Text>

                <span
                  className={`ms-2 ${
                    darkMode
                      ? "text-light"
                      : "text-dark"
                  }`}
                >
                  {product.material}
                </span>

              </div>

            </Col>
          </Row>
        </Card>

        {/* Product Tabs */}

        <div className="mt-5">
          <ProductTabs
            product={product}
            darkMode={darkMode}
          />
        </div>

        {/* Related Products */}

        <div className="mt-5">
          <RelatedProducts
            currentProduct={product}
            products={products}
            darkMode={darkMode}
          />
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
