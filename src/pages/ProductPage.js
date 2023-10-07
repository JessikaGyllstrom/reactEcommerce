import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import Button from "../components/Button";
import AddWish from "../components/AddWish";
import scrollToTop from "../utils/ScrollToTop";
import StarRating from "../components/StarRating";
import { FadeIn } from "../components/FadeIn";

const ProductPage = () => {

  scrollToTop()

  // get current product id from url 
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
      return item.id === parseInt(id);
  });
  // destructure product
  const { title, price, description, image, rating } = product;

  return (
    <div className="container w-full h-screen md:mt-[3rem] mx-auto flex justify-center items-center">
      <FadeIn>
        <div className="flex justify-center items-center rounded-xl w-[82%] p-3 lg:w-[45%] lg:p-7 mx-auto bg-white">
          <div className="flex flex-col items-center px-3">
            <div className="flex w-full">
              <AddWish id={product.id} product={product}/>
            </div>
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img className="max-w-[120px] lg:max-w-[170px]" src={image} alt={title} />
            </div>
            <div className="lg:px-5">
              <h5 className="text-lg md:text-xl font-normal lg:mt-6">{title}</h5>
              {/* rating  */}
              <div className="my-2 lg:mt-3">
                <StarRating rating={rating.rate} />
              </div>
              <div className="text-lg lg:text-xl font-normal lg:mt-3">
                ${price}
              </div>
              <p className="mt-3 text-sm font-light lg:text-lg">{description}</p>
              <div className="flex flex-col items-end justify-between mt-3">
                <div className="w-[50%] lg:w-[40%] items-end">
                  <Button product={product} id={product.id} />
                </div>
              </div>
            </div>          
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ProductPage;
