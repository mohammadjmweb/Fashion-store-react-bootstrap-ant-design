import { Spin, Flex, Typography } from "antd";

const { Text } = Typography;

const Loading = ({
  tip = "Loading...",
  fullScreen = true,
}) => {
  if (fullScreen) {
    return (
      <Flex
        vertical
        align="center"
        justify="center"
        style={{
          minHeight: "100vh",
          gap: 20,
        }}
      >
        <Spin size="large" />

        <Text
          style={{
            fontSize: 18,
          }}
        >
          {tip}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{
        padding: "60px 0",
        gap: 15,
      }}
    >
      <Spin size="large" />

      <Text>{tip}</Text>
    </Flex>
  );
};

export default Loading;