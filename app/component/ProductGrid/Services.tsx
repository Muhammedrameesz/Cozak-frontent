import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  id: string | number;
  key: string;
  title: string;
  image: string;
}

interface ServicesProps {
  products: Product[];
}

const Services: React.FC<ServicesProps> = ({ products }) => {
  return (
    <div className="w-full bg-[#013E57] py-6 text-center">
      <div className="max-w-[88%] mx-auto bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="flex-1 h-px bg-[#013E57]"></div>
          <h2 className="text-3xl font-bold text-black whitespace-nowrap">
            OUR <span className="text-[#013E57]">SERVICES</span>
          </h2>
          <div className="flex-1 h-px bg-[#013E57]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {products.map((product) => (
            <Link href={`/home/${product?.key}`} key={product.key}>
              <div className="border border-[#013E57] rounded-lg shadow-lg overflow-hidden bg-white transform transition-transform duration-300 hover:-translate-y-2">
                <h2 className="text-white bg-[#013E57] text-lg font-normal tracking-wide py-2 px-3">
                  {product.title.toUpperCase()}
                </h2>
                <div className="flex justify-center p-2">
                  <Image
                    src={product.image}
                    alt="Service Image"
                    width={225}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
