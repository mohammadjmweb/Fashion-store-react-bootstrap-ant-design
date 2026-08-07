import { useEffect, useMemo, useState } from "react";
import { Row, Col, Typography, Empty } from "antd";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import SearchBar from "../components/SearchBar";

import { products } from "../data/products";


const { Title, Text } = Typography;


const Products = ({ darkMode }) => {

  const [searchParams] = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category");


  const [category, setCategory] =
    useState(categoryFromUrl || "All");

  const [brand, setBrand] =
    useState("All");

  const [price, setPrice] =
    useState([0, 500]);

  const [rating, setRating] =
    useState(0);

  const [search, setSearch] =
    useState("");



  useEffect(() => {

    setCategory(
      categoryFromUrl || "All"
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [categoryFromUrl]);





  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const categoryMatch =
        category === "All" ||
        product.category === category;


      const brandMatch =
        brand === "All" ||
        product.brand === brand;


      const priceMatch =
        product.price >= price[0] &&
        product.price <= price[1];


      const ratingMatch =
        rating === 0 ||
        product.rating >= rating;


      const searchMatch =
        search.trim() === "" ||
        product.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.brand
          ?.toLowerCase()
          .includes(search.toLowerCase());


      return (
        categoryMatch &&
        brandMatch &&
        priceMatch &&
        ratingMatch &&
        searchMatch
      );

    });

  }, [
    category,
    brand,
    price,
    rating,
    search,
  ]);





  return (

    <main
      className={
        darkMode
          ? "bg-dark text-light min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >


      <div className="container-fluid px-4 px-lg-5 py-5">


        {/* Header */}

        <div className="text-center mb-5">

          <Title
            level={1}
            className={
              darkMode
                ? "text-light"
                : "text-dark"
            }
          >
            Shop Products
          </Title>


          <Text
            className={
              darkMode
                ? "text-light"
                : "text-muted"
            }
          >
            Find the perfect product for you
          </Text>

        </div>





        {/* Search */}

        <div className="mb-5">

          <SearchBar
            value={search}
            onChange={setSearch}
            darkMode={darkMode}
          />

        </div>






        <Row gutter={[24,24]}>



          {/* Filter */}

          <Col
            xs={24}
            lg={6}
          >

            <div
              className={`p-4 rounded-4 shadow-sm ${
                darkMode
                  ? "bg-dark border border-secondary"
                  : "bg-white"
              }`}
            >

              <Title
                level={4}
                className={
                  darkMode
                    ? "text-light"
                    : "text-dark"
                }
              >
                Filters
              </Title>


              <ProductFilter

                darkMode={darkMode}

                category={category}

                setCategory={setCategory}

                brand={brand}

                setBrand={setBrand}

                price={price}

                setPrice={setPrice}

                rating={rating}

                setRating={setRating}

              />


            </div>


          </Col>







          {/* Products */}

          <Col
            xs={24}
            lg={18}
          >


            <div className="mb-3">

              <Text
                className={
                  darkMode
                    ? "text-light"
                    : "text-muted"
                }
              >

                {filteredProducts.length}
                {" "}
                Products Found

              </Text>

            </div>





            <Row
              gutter={[24,24]}
            >


              {
                filteredProducts.length === 0 ? (

                  <Col span={24}>

                    <Empty
                      description="No products found"
                    />

                  </Col>


                ) : (


                  filteredProducts.map((product)=>(


                    <Col

                      xs={24}

                      sm={12}

                      lg={8}

                      xl={6}

                      key={product.id}

                    >

                      <ProductCard

                        product={product}

                        darkMode={darkMode}

                      />


                    </Col>


                  ))


                )
              }


            </Row>


          </Col>


        </Row>


      </div>


    </main>

  );

};


export default Products;
