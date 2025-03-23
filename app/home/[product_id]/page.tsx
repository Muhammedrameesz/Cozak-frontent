import Image from "next/image";
import { JSX } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ product_id: string }>;
}) {
  const slug = (await params).product_id;

  //=========SEO===========================
  const SEO = () => {
    const designs = [
      {
        id: 1,
        key: "bacardi",
        title: "BACARDI",
        image: "/ServicesImage/bacardi.png",
      },
      {
        id: 2,
        key: "lulu",
        title: "LULU",
        image: "/ServicesImage/lulu.png",
      },
      {
        id: 3,
        key: "neocon",
        title: "NEOCON",
        image: "/ServicesImage/neocon.png",
      },
    ];

    return (
      <div className="md:grid-cols-3 grid sm:grid-cols-1 py-5 px-10 bg-slate-50">
        {designs.map((item) => (
          <div className="rounded-lg shadow-xl overflow-hidden bg-white transform transition-transform duration-300 hover:-translate-y-2 flex items-center justify-center mt-5 md:m-5">
            <div className="flex items-center justify-center p-2">
              <Image
                src={item.image}
                alt="Service Image"
                width={425}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

//=========MOBILE APP DEVELOPMENT===========================

  const MobileAppDev = () => {
    const designs = [
      {
        id: 1,
        key: "bacardi",
        title: "BACARDI",
        image: "/ServicesImage/bacardi.png",
      },
      {
        id: 2,
        key: "lulu",
        title: "LULU",
        image: "/ServicesImage/lulu.png",
      },
      {
        id: 3,
        key: "neocon",
        title: "NEOCON",
        image: "/ServicesImage/neocon.png",
      },
    ];

    return (
      <div className="md:grid-cols-3 grid sm:grid-cols-1 py-5 px-10 bg-slate-50">
        {designs.map((item) => (
          <div className="rounded-lg shadow-xl overflow-hidden bg-white transform transition-transform duration-300 hover:-translate-y-2 flex items-center justify-center mt-5 md:m-5">
            <div className="flex items-center justify-center p-2">
              <Image
                src={item.image}
                alt="Service Image"
                width={425}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };


  //=========WEB DEVELOPMENT===========================

  const WebDevelopment = () => {
    const designs = [
      {
        id: 1,
        key: "bacardi",
        title: "BACARDI",
        image: "/ServicesImage/bacardi.png",
      },
      {
        id: 2,
        key: "lulu",
        title: "LULU",
        image: "/ServicesImage/lulu.png",
      },
      {
        id: 3,
        key: "neocon",
        title: "NEOCON",
        image: "/ServicesImage/neocon.png",
      },
    ];

    return (
      <div className="md:grid-cols-3 grid sm:grid-cols-1 py-5 px-10 bg-slate-50">
        {designs.map((item) => (
          <div className="rounded-lg shadow-xl overflow-hidden bg-white transform transition-transform duration-300 hover:-translate-y-2 flex items-center justify-center mt-5 md:m-5">
            <div className="flex items-center justify-center p-2">
              <Image
                src={item.image}
                alt="Service Image"
                width={425}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

//=========WEB DESIGN===========================

  const WebDesign = () => {
    const designs = [
      {
        id: 1,
        key: "bacardi",
        title: "BACARDI",
        image: "/ServicesImage/bacardi.png",
      },
      {
        id: 2,
        key: "lulu",
        title: "LULU",
        image: "/ServicesImage/lulu.png",
      },
      {
        id: 3,
        key: "neocon",
        title: "NEOCON",
        image: "/ServicesImage/neocon.png",
      },
    ];

    return (
      <div className="md:grid-cols-3 grid sm:grid-cols-1 py-5 px-10 bg-slate-50">
        {designs.map((item) => (
          <div className="rounded-lg shadow-xl overflow-hidden bg-white transform transition-transform duration-300 hover:-translate-y-2 flex items-center justify-center mt-5 md:m-5">
            <div className="flex items-center justify-center p-2">
              <Image
                src={item.image}
                alt="Service Image"
                width={425}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

//==========================

  const pages: Record<string, JSX.Element> = {
    mobile_development: (
      <div>
        <div>
        <div>
        <h3>{"Our website development professionals recognize the value of solid information architecture design and integrative branding that engages the customer from the first stop at your site. Engagement with your customer is crucial to tying into their emotional connection to your site and developing loyalty."}</h3>
        </div>
          <MobileAppDev />
        </div>
      </div>
    ),
    seo: (
      <div>
         <div>
        <h3>{"Our website development professionals recognize the value of solid information architecture design and integrative branding that engages the customer from the first stop at your site. Engagement with your customer is crucial to tying into their emotional connection to your site and developing loyalty."}</h3>
        </div>
        <SEO />
      </div>
    ),
    web_development: (
      <div>
        <div>
        <div>
        <h3>{"Our website development professionals recognize the value of solid information architecture design and integrative branding that engages the customer from the first stop at your site. Engagement with your customer is crucial to tying into their emotional connection to your site and developing loyalty."}</h3>
        </div>
          <WebDevelopment />
        </div>
      </div>
    ),
    web_design: (
      <div>
        <div>
        <div>
        <h3>{"Our website development professionals recognize the value of solid information architecture design and integrative branding that engages the customer from the first stop at your site. Engagement with your customer is crucial to tying into their emotional connection to your site and developing loyalty."}</h3>
        </div>
          <WebDesign />
        </div>
      </div>
    ),
  };

  return pages[slug] || <div>NO DATA FOUND!</div>;
}
