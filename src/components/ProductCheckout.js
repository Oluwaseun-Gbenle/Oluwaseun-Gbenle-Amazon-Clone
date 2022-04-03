import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";


function ProductCheckout({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
          id,
          title,
          price,
          rating,
          description,
          category,
          image,
          hasPrime
        };
        dispatch(addToBasket(product));
      };

      const removeItemFromBasket = () => {
     dispatch(removeFromBasket({ id }))
      }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500 " />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div className="mb-5 ">
          <Currency quantity={price * 450} currency="NGN" />
        </div>
        <div>
          {!hasPrime ? (
            ""
          ) : (
            <div className="flex items-center space-x-2 -mt-5">
              <img
                loading="lazy"
                className="w-12"
                src="https://mpng.subpng.com/20180630/buy/kisspng-amazon-com-amazon-prime-amazon-video-retail-prime-amazon-prime-5b376c3bdf3100.0051578015303588439142.jpg"
                alt=""
              />
              <p className="text-xs my-3 text-gray-500">
                FREE Next-day Delivery
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">Add To Basket</button>
        <button onClick={removeItemFromBasket} className="button">Remove From basket</button>
      </div>
    </div>
  );
}

export default ProductCheckout;
