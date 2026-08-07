import { useRef } from "react";
import { Carousel, Button, Typography } from "antd";
import {
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const slides = [
  // slides...
  {
    id: 1,
    title: "Summer Collection 2026",
    subtitle: "Discover the latest trends with premium quality clothing.",
    image: "https://cdn.faire.com/fastly/1b2184521aed69fc6b3691bb4cfcd9ef017aad1f8691550736dc45a13b1c86f6.jpeg?dpr=1&format=jpg&width=1200",
  },
  {
    id: 2,
    title: "Men's Fashion",
    subtitle: "Modern style designed for every occasion.",
    image: "https://fault-magazine.com/wp-content/uploads/2023/01/pexels-andrea-piacquadio-842811.jpg",
  },
  {
    id: 3,
    title: "Women's Collection",
    subtitle: "Elegant outfits inspired by today's fashion.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvh0r3YJ-oE5UYEyH7W-Qk-IXxxB1We97rQgA0NbipZ7IuCsn5Un4YtKax&s=10",
  }
];

const Hero = () => {
  const carouselRef = useRef(null);

  return (
    <div className="position-relative">

      <Carousel
        ref={carouselRef}
        autoplay
        autoplaySpeed={5000}
        effect="fade"
      >
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="d-flex align-items-center"
              style={{
                minHeight: "85vh",
                backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">

                    <Title
                      className="text-white"
                      style={{
                        fontSize: "clamp(2.5rem,5vw,4rem)",
                      }}
                    >
                      {slide.title}
                    </Title>

                    <Paragraph
                      className="text-light fs-5"
                    >
                      {slide.subtitle}
                    </Paragraph>

                    <Link to="/products">
                      <Button
                        type="primary"
                        size="large"
                        icon={<RightOutlined />}
                      >
                        Shop Now
                      </Button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Previous */}

      <Button
        shape="circle"
        size="large"
        icon={<LeftOutlined />}
        onClick={() => carouselRef.current.prev()}
        className="position-absolute top-50 start-0 translate-middle-y ms-3"
      />

      {/* Next */}

      <Button
        shape="circle"
        size="large"
        icon={<RightOutlined />}
        onClick={() => carouselRef.current.next()}
        className="position-absolute top-50 end-0 translate-middle-y me-3"
      />

    </div>
  );
};

export default Hero;