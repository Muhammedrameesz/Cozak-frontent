const Partners = () => {
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
      <section className="pb-10 bg-white text-center">
        <div className="flex items-center justify-center py-6 bg-[#013E57]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#34C5FF] px-4">
            OUR <span className="text-white">PARTNERS</span>
          </h2>
        </div>
        <div className="max-w-[88%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-5 md:mt-16 mt-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center transform transition-transform duration-300 hover:scale-105 pt-3"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 sm:h-24 md:h-28 lg:h-30 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Partners;