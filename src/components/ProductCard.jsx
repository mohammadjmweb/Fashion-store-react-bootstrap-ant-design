import { Link } from "react-router-dom";

import {
  Card,
  Tag,
  Rate,
  Badge,
} from "antd";

import {
  EyeOutlined,
} from "@ant-design/icons";


const ProductCard = ({
  product,
  darkMode,
}) => {

  return (

    <Badge.Ribbon
      text={
        product.discount
          ? `${product.discount}% OFF`
          : "NEW"
      }
      color={
        product.discount
          ? "red"
          : "green"
      }
    >


      <Card

        hoverable

        className={`border-0 shadow rounded-4 overflow-hidden ${
          darkMode
            ? "bg-dark text-light"
            : "bg-white"
        }`}

        style={{
          height: "100%",
        }}

      >


        {/* Image */}

        <div

          className="d-flex justify-content-center align-items-center bg-light rounded-4 overflow-hidden"

          style={{
            height: "260px",
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


          <Tag color="blue">

            {product.category}

          </Tag>





          <h5

            className={`fw-bold mt-3 ${
              darkMode
                ? "text-light"
                : "text-dark"
            }`}

            style={{
              minHeight:"48px",
            }}

          >

            {product.title}

          </h5>





          <div className="mb-3">

            <Rate

              disabled

              allowHalf

              value={product.rating}

            />

          </div>







          <div

            className="d-flex justify-content-between align-items-center"

          >



            <div>


              <h4 className="text-primary fw-bold mb-0">

                ${product.price}

              </h4>



              {
                product.oldPrice && (

                  <span className="text-muted text-decoration-line-through">

                    ${product.oldPrice}

                  </span>

                )
              }


            </div>





            <Link

              to={`/product/${product.id}`}

              className="btn btn-primary rounded-pill px-3"

              onClick={() =>
                window.scrollTo({
                  top:0,
                  behavior:"smooth",
                })
              }

            >

              <EyeOutlined className="me-1" />

              Details


            </Link>




          </div>


        </div>


      </Card>


    </Badge.Ribbon>

  );

};


export default ProductCard;
