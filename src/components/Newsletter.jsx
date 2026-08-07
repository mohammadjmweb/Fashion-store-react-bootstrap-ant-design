import {
  Card,
  Typography,
  Input,
  Button,
  Space,
  message,
} from "antd";

import {
  MailOutlined,
  SendOutlined,
} from "@ant-design/icons";

import { useState } from "react";

const { Title, Paragraph } = Typography;

const Newsletter = ({ darkMode }) => {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    if (!email.trim()) {
      message.error("Please enter your email.");
      return;
    }

    message.success("Thanks for subscribing!");

    setEmail("");
  };

  return (
    <section className="my-5 py-5">

      <Card
        bordered={false}
        className={`rounded-4 ${
          darkMode
            ? "bg-dark text-light"
            : "text-white"
        }`}
        style={{
          textAlign: "center",
          background: darkMode
            ? "#212529"
            : "linear-gradient(135deg, #1677ff, #69b1ff)",
          border: darkMode
            ? "1px solid #495057"
            : "none",
        }}
      >

        {/* Title */}

        <Title
          level={2}
          className={
            darkMode
              ? "text-light"
              : "text-white"
          }
        >
          Join Our Newsletter
        </Title>

        {/* Description */}

        <Paragraph
          className={
            darkMode
              ? "text-secondary"
              : "text-light"
          }
          style={{
            fontSize: 17,
            maxWidth: 650,
            margin: "0 auto 35px",
          }}
        >
          Subscribe to receive exclusive offers,
          new arrivals and fashion trends directly
          in your inbox.
        </Paragraph>

        {/* Email */}

        <Space.Compact
          className="w-100"
          style={{
            maxWidth: 550,
          }}
        >
          <Input
            size="large"
            prefix={<MailOutlined />}
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Button
            size="large"
            type="primary"
            icon={<SendOutlined />}
            onClick={subscribe}
          >
            Subscribe
          </Button>
        </Space.Compact>

      </Card>

    </section>
  );
};

export default Newsletter;

