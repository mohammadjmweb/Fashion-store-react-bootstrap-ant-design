import { Select, Slider, Rate, Divider } from "antd";


const ProductFilter = ({
  darkMode,
  category,
  setCategory,
  brand,
  setBrand,
  price = [0, 500],
  setPrice,
  rating,
  setRating,
}) => {


  return (

    <div>


      {/* Category */}

      <div className="mb-4">

        <label
          className={`form-label fw-semibold ${
            darkMode ? "text-light" : "text-dark"
          }`}
        >
          Category
        </label>


        <Select

          size="large"

          className="w-100"

          value={category}

          onChange={setCategory}

          options={[

            {
              value: "All",
              label: "All Categories",
            },

            {
              value: "Men",
              label: "Men",
            },

            {
              value: "Women",
              label: "Women",
            },

            {
              value: "Shoes",
              label: "Shoes",
            },

            {
              value: "Accessories",
              label: "Accessories",
            },

          ]}

        />


      </div>




      <Divider />




      {/* Brand */}

      <div className="mb-4">


        <label
          className={`form-label fw-semibold ${
            darkMode ? "text-light" : "text-dark"
          }`}
        >
          Brand
        </label>



        <Select

          size="large"

          className="w-100"

          value={brand}

          onChange={setBrand}

          options={[

            {
              value:"All",
              label:"All Brands",
            },

            {
              value:"Nike",
              label:"Nike",
            },

            {
              value:"Adidas",
              label:"Adidas",
            },

            {
              value:"Puma",
              label:"Puma",
            },

            {
              value:"Zara",
              label:"Zara",
            },

            {
              value:"H&M",
              label:"H&M",
            },

            {
              value:"Levi's",
              label:"Levi's",
            },

          ]}

        />


      </div>




      <Divider />




      {/* Price */}

      <div className="mb-4">


        <label
          className={`form-label fw-semibold ${
            darkMode ? "text-light" : "text-dark"
          }`}
        >
          Price Range
        </label>



        <Slider

          range

          min={0}

          max={500}

          step={10}

          value={price}

          onChange={setPrice}

        />



        <div
          className={`d-flex justify-content-between mt-2 ${
            darkMode ? "text-light" : "text-muted"
          }`}
        >

          <span>
            ${price[0]}
          </span>


          <span>
            ${price[1]}
          </span>


        </div>


      </div>




      <Divider />




      {/* Rating */}

      <div className="mb-2">


        <label
          className={`form-label fw-semibold ${
            darkMode ? "text-light" : "text-dark"
          }`}
        >
          Minimum Rating
        </label>



        <div>

          <Rate

            value={rating}

            onChange={setRating}

          />

        </div>


      </div>


    </div>

  );

};


export default ProductFilter;