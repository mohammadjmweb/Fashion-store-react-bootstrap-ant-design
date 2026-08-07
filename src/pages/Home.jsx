import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductCarousel from "../components/ProductCarousel";
import BrandSection from "../components/BrandSection";
import Newsletter from "../components/Newsletter";

import { products } from "../data/products";

const Home = ({ darkMode }) => {
  const newArrivals = products.slice(0, 8);

  const bestSellers = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const saleProducts = products
    .filter((product) => product.discount > 0)
    .slice(0, 8);

  return (
    <>
      <Hero darkMode={darkMode} />

      <div className="container-fluid py-5 px-0">

        {/* Categories */}
        <div className="px-4">
          <CategorySection darkMode={darkMode} />
        </div>

        {/* New Arrivals */}
        <div className="my-5 px-4">
          <ProductCarousel
            title="New Arrivals"
            products={newArrivals}
            darkMode={darkMode}
          />
        </div>

        {/* Best Sellers */}
        <div className="my-5 px-4">
          <ProductCarousel
            title="Best Sellers"
            products={bestSellers}
            darkMode={darkMode}
          />
        </div>

        {/* Sale Products */}
        <div className="my-5 px-4">
          <ProductCarousel
            title="Sale Products"
            products={saleProducts}
            darkMode={darkMode}
          />
        </div>

        {/* Brands */}
        <div className="my-5 px-4">
          <BrandSection darkMode={darkMode} />
        </div>

        {/* Newsletter */}
        <div className="mt-5 px-4">
          <Newsletter darkMode={darkMode} />
        </div>

      </div>
    </>
  );
};

export default Home;