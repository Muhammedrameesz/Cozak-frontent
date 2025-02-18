 const Partners = () =>{
    const partners = [
      { name: "LuLu", logo: "/Images/lulu.png" },
      { name: "Huawei", logo: "/Images/huawei.png" },
      { name: "Alsayegh Media", logo: "/Images/alsayegh-media.png" },
      { name: "GEMS Education", logo: "/Images/gems-education.png" },
      { name: "Belvedere Vodka", logo: "/Images/belvedere.png" },
      { name: "Hennessy", logo: "/Images/hennessy.png" },
      { name: "Cubano Lito", logo: "/Images/cubano-lito.png" },
      { name: "Soundkraft LLC", logo: "/Images/soundkraft.png" },
      { name: "Diva Modelling", logo: "/Images/diva.png" },
      { name: "Brand Box", logo: "/Images/brand-box.png" },
    ];
  
    return (
      <section className="pb-6 bg-white text-center">
       
        <div className="titleContainer py-3">
          <h2 className="headerText">
            OUR <span className="text-[#ffffff]">PARTNERS</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center hover:scale-105"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 mt-5 object-cover"
              />
            </div>
          ))}
        </div>
        <style jsx>{`
        .titleContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
          background-color:#013E57;
          
        }
       
        .headerText {
          font-size: 1.8rem;
          font-weight: bold;
          color: #34C5FF;
          text-align: center;
          white-space: nowrap;
          padding-left: 10px;
          padding-right: 10px;
        }
        
      `}</style>
      </section>
    );
  }
  
export default Partners;
