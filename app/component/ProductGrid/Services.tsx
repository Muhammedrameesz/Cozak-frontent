import Image from "next/image";
import React from "react";

const Services = ({ products }: any) => {
  return (
    <div className="container">
      <div className="contentContainer">
        <div className="titleContainer">
          <div className="line"></div>
          <h2 className="headerText">
            OUR <span className="text-[#013E57]">SERVICES</span>
          </h2>
          <div className="line"></div>
        </div>

        <div className="grid">
          {products.map((product: any) => (
            <div key={product.id} className="card">
              <h2
                style={{
                  color: "#ffffff",
                  backgroundColor: "#013E57",
                  fontSize: 16,
                  fontWeight: "normal",
                  letterSpacing: 1,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 5,
                  paddingRight: 5,
                }}
              >
                {(product?.title ?? "")?.toUpperCase()}
              </h2>
              <Image
                src={product?.image}
                alt="Sample Image"
                width={225}
                height={200}
                style={{ margin: "0 auto", padding:"1px" }}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .titleContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .line {
          flex: 1;
          height: 1px;
          background-color: #013E57;
        }
        .headerText {
          font-size: 2.2rem;
          font-weight: bold;
          color: #000;
          text-align: center;
          white-space: nowrap;
          padding-left: 10px;
          padding-right: 10px;
        }
        .subText {
          text-align: center;
        }
        .container {
          width: 100%;
          margin: 0 auto;
          padding-top: 25px;
          padding-bottom: 1px;
          text-align: center;
          background-color: #013E57;
        }
        .contentContainer {
          width: 100%;
          margin: 0 auto;
          padding-top: 25px;
          padding-bottom: 25px;
          text-align: center;
          background-color: #fff;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 10px;
          padding-left: 50px;
          padding-right: 50px;
        }
        .card {
          border: 1px solid #013E57;
          //   padding: 20px;
          border-radius: 4px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out;
          background-color: #fff;
          width:250px;
          height:290px
        }
        .card:hover {
          transform: translateY(-10px);
        }
        h2 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }
        h3 {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 12px;
        }
        p {
          font-size: 1rem;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Services;
