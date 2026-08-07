import {
  Tabs,
  Typography,
  Descriptions,
  Rate,
  Avatar,
  List,
} from "antd";

const { Paragraph, Text } = Typography;

const ProductTabs = ({ product, darkMode }) => {
  const textColor = darkMode ? "#ffffff" : "#1f1f1f";
  const secondaryColor = darkMode ? "#d9d9d9" : "#595959";

  const items = [
    {
      key: "1",
      label: "Description",
      children: (
        <Paragraph
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: textColor,
          }}
        >
          {product.description}
        </Paragraph>
      ),
    },

    {
      key: "2",
      label: "Specifications",
      children: (
        <Descriptions
          bordered
          column={1}
          labelStyle={{
            color: textColor,
            fontWeight: 600,
          }}
          contentStyle={{
            color: secondaryColor,
          }}
        >
          <Descriptions.Item label="Brand">
            {product.brand}
          </Descriptions.Item>

          <Descriptions.Item label="Category">
            {product.category}
          </Descriptions.Item>

          <Descriptions.Item label="Material">
            {product.material}
          </Descriptions.Item>

          <Descriptions.Item label="Size">
            {product.sizes?.length > 0
              ? product.sizes.join(", ")
              : "Not available"}
          </Descriptions.Item>

          <Descriptions.Item label="Availability">
            <Text
              style={{
                color: "#52c41a",
                fontWeight: 600,
              }}
            >
              In Stock
            </Text>
          </Descriptions.Item>
        </Descriptions>
      ),
    },

    {
      key: "3",
      label: "Reviews",
      children: (
        <>
          {product.reviews?.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={product.reviews}
              renderItem={(review) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src={review.avatar}>
                        {review.name?.charAt(0)}
                      </Avatar>
                    }
                    title={
                      <div>
                        <span
                          style={{
                            color: textColor,
                            fontWeight: 600,
                          }}
                        >
                          {review.name}
                        </span>

                        <div className="mt-1">
                          <Rate
                            disabled
                            allowHalf
                            value={review.rating}
                          />
                        </div>
                      </div>
                    }
                    description={
                      <span
                        style={{
                          color: secondaryColor,
                        }}
                      >
                        {review.comment}
                      </span>
                    }
                  />
                </List.Item>
              )}
            />
          ) : (
            <div className="py-4 text-center">
              <Text
                style={{
                  color: secondaryColor,
                }}
              >
                No reviews yet.
              </Text>
            </div>
          )}
        </>
      ),
    },
  ];

  return (
    <div
      className={
        darkMode
          ? "text-light"
          : "text-dark"
      }
    >
      <Tabs
        defaultActiveKey="1"
        items={items}
        size="large"
        style={{
          marginTop: 40,
          color: textColor,
        }}
      />
    </div>
  );
};

export default ProductTabs;
