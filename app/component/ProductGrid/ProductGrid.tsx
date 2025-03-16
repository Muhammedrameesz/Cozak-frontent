// import Image from "next/image";
// import React from "react";

// const ProductGrid = ({ products }: any) => {
//   return (
//     <div className="container">
//       <div className="contentContainer">
//         <div className="titleContainer">
//           <div className="line"></div>
//           <h2 className="headerText">
//             OUR <span className="text-[#ffffff]">SOFTWARE PRODUCTS</span>
//           </h2>
//           <div className="line"></div>
//         </div>

//         <div className="grid">
//           {products.map((product: any ,index :any) => (
//             <div key={product.id} className="card mb-44 md:mt-0 md:mb-0">
//               <div className="imageContainer">
//                 <Image
//                   src="/dummy.png"
//                   alt="Sample Image"
//                   width={400}
//                   height={400}
//                   className="productImage"
//                 />
//               </div>
//               <h2 className="productTitle text-left">{product?.title?.toUpperCase()}</h2>
//               <p className="productDescription text-left">{product?.description}</p>

//               <div className="buttonContainer">
//                 <div className="flex justify-end mt-5 mb-5">
//                 <button className="readMoreButton bg-[#013E57] text-white px-4 py-2 rounded-l-full">
//                   Read More
//                 </button>
//               </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .titleContainer {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//         }
//         .line {
//           flex: 1;
//           height: 1px;
//           background-color: #ffffff;
//         }
//         .headerText {
//           font-size: 1.5rem;
//           font-weight: bold;
//           color: #34c5ff;
//           text-align: center;
//           white-space: nowrap;
//           // padding: 0 10px;

//           padding-left: 10px;
//           padding-right: 10px;


//         }
//         .container {
//           width: 100%;
//           margin: 0 auto;
//           padding-top: 1px;
//           padding-bottom: 25px;
//           text-align: center;
//           background-color: #013E57;
//         }
//         .contentContainer {
//           width: 100%;
//           margin: 0 auto;
//           padding-top: 25px;
//           padding-bottom: 25px;
//           text-align: center;
//         }
//         .grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 40px;
//           padding: 10px;
//           margin-top: 220px;
//         }
//         .card {
//           position: relative;
//           background-color: #ffffff;
//           padding: 60px 20px 20px;
//           border-radius: 2px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           text-align: center;
//           transition: transform 0.2s ease-in-out;
//           display: flex;
//           flex-direction: column;
//         }
//         .card:hover {
//           transform: translateY(-10px);
//         }
//         .imageContainer {
//           position: absolute;
//           top: -170px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 330px;
//           border-radius: 2px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         }
//         .productImage {
//           border-radius: 10px;
//         }
//         .productTitle {
//           font-size: 1.2rem;
//           font-weight: bold;
//           color: #013E57;
//           margin-top: 60px;
//           padding: 0 8px;
//         }
//         .productDescription {
//           font-size: 1rem;
//           color: #555;
//           margin-top: 10px;
//           padding: 0 10px;
//         }
//         .buttonContainer {
//           margin-top: auto;
//           display: flex;
//           justify-content: flex-end;
//           // padding-bottom: 10px;
//           margin-right:-20px
//         }
//         .readMoreButton {
//           background-color: #013E57;
//           color: white;
//           // padding: 8px 15px;
//           // border-radius: 20px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
//         .readMoreButton:hover {
//           background-color: #34C5FF;
//           color: #013E57
//         }
        
//       `}</style>
//     </div>
//   );
// };

// export default ProductGrid;

import Image from "next/image";
import React from "react";

const ProductGrid = ({ products }: any) => {
  return (
    <div className="justify-center items-center w-[100vw] md:px-20 px-1">
      <div className="contentContainer">
        <div className="titleContainer">
          <div className="line"></div>
          <h2 className="headerText">
            OUR <span className="text-white">SOFTWARE PRODUCTS</span>
          </h2>
          <div className="line"></div>
        </div>

        <div className="grid  md:gap-[20px] md:p-[20px]">
          {products.map((product: any) => (
            <div key={product.id} className="card mt-36 md:mt-36">
              <div className="imageContainer ">
              <img
                  src={'/dummy.png'}
                  alt={'/dummy.png'}
                  className="w-[300] md:w-400 md:h-400 object-cover rounded-md"
                />
                {/* <Image
                  src="/dummy.png"
                  alt="Sample Image"
                  width={400}
                  height={400}
                  className="productImage"
                /> */}
              </div>
              <h2 className="productTitle">{product?.title?.toUpperCase()}</h2>
              <p className="productDescription">{product?.description}</p>

              

              <div className="buttonContainer">
                {/* <button className="readMoreButton">Read More</button> */}
                <div className="flex justify-end mt-5 mb-5">
                {/* <a href="/productPage" className="block px-4 py-2">Read More</a> */}
                <button className="readMoreButton bg-[#013E57] text-white px-4 py-2 rounded-l-full" onClick={() => (window.location.href = "/productPage")}>
                  Read More
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .titleContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0px;
        }
        .line {
          flex: 1;
          height: 1px;
          background-color: #ffffff;
        }
        .headerText {
          font-size: 1.5rem;
          font-weight: bold;
          color: #34c5ff;
          text-align: center;
          white-space: nowrap;
          padding: 0 10px;
        }
        .contentContainer {
          // max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
         
          
        }
        .card {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.2s ease-in-out;
          display: flex;
          flex-direction: column;
          // align-items: center;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .imageContainer {
          // width: 250px;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top:-150px
        }
        .productImage {
          border-radius: 10px;
          max-width: 100%;
          height: auto;
          
        }
        .productTitle {
          font-size: 1.2rem;
          font-weight: bold;
          color: #013e57;
          margin-top: 20px;
        }
        .productDescription {
          font-size: 1rem;
          color: #555;
          margin-top: 10px;
        }
        .buttonContainer {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
          // padding-bottom: 10px;
          margin-right:-20px
        }
        .readMoreButton {
          background-color: #013E57;
          color: white;
          // padding: 8px 15px;
          // border-radius: 20px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .readMoreButton:hover {
          background-color: #34C5FF;
          color: #013E57
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;

