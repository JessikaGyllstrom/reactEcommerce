import { Link } from "react-router-dom";
import Button from "./Button";

const ProductItem = ({ product }) => {
  const { id, image, title, price, category } = product;

  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl p-3  duration-500 hover:scale-103 hover:shadow-xl">
      <div className="flex w-full justify-center">
        <Link to={`/product/${id}`}><img src={image} alt={title} className="h-48 object-contain group-hover:scale-110 transition duration-300"/></Link>
      </div>
      <div className="flex h-full flex-col p-2">
        <div className="text-sm text-slate-400 mt-3 uppercase">{category}</div>
          <div className="h-full">
            <Link to={`/product/${id}`}>{title}</Link>
        </div>

          <div className="flex justify-between text-md font-medium items-center rounded-sm">
            ${price}
            <div>
          <Button product={product} id={id}></Button>


          </div>

        </div>

      </div>
    </div>
  );
};
export default ProductItem;


