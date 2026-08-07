import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button
              type="primary"
              size="large"
            >
              Back To Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;