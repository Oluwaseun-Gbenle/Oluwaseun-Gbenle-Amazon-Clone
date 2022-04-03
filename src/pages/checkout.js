import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import ProductCheckout from "../components/ProductCheckout";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/*left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping basket"}
            </h1>
        {items.map((item, i) => (
            <ProductCheckout
            key={i}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating}
            hasPrime={item.hasPrime}
            />
        ))}

          </div>
        </div>

        {/*right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
            {items.length > 0 && (
                <div>
                <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">
                <Currency quantity={total} currency="NGN" />
                </span>
                </h2>
                <button disabled={!session} className= {!session ? 'p-2 text-xs md:text-sm bg-gradient-to-b rounded-sm from-gray-300 to bg-gray-500 border-gray-200 text-gray-300 cursor-not-allowed' : 'button mt-2'}>
                    {!session ? "Sign in to checkout" : "Proceed to checkout"}</button>
                </div>
            )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
