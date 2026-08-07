import { FloatButton } from "antd";

const ScrollToTop = () => {
  return (
    <FloatButton.BackTop
      visibilityHeight={300}
      tooltip="Back to top"
    />
  );
};

export default ScrollToTop;