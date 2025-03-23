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
        key: "1",
        title: "WEBSITE AUDIT/ANALYSIS",
        image: "/ServicesImage/seo2.png",
      },
      {
        id: 2,
        key: "2",
        title: "KEYWORD ANALYSIS",
        image: "/ServicesImage/seo3.png",
      },
      {
        id: 3,
        key: "3",
        title: "RANK MAINTENANCE*",
        image: "/ServicesImage/seo1.png",
      },
      {
        id: 2,
        key: "4",
        title: "PERIODIC REPORTING",
        image: "/ServicesImage/seo4.png",
      },
      {
        id: 3,
        key: "5",
        title: "ON-PAGE / OFF-PAGE OPTIMIZATION",
        image: "/ServicesImage/seo5.png",
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
                width={300}
                height={300}
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
        key: "1",
        title: "",
        image: "/ServicesImage/mob1.png",
      },
      {
        id: 2,
        key: "2",
        title: "",
        image: "/ServicesImage/mob2.png",
      },
      {
        id: 3,
        key: "3",
        title: "",
        image: "/ServicesImage/mob3.png",
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

  const getTitleText = (inputKey: string): string | undefined => {
    const data: Record<string, string> = {
      mobile_development:
        "Android powers hundreds of millions of mobile devices in more than 190 countries around the world.\n" +
        "It's the largest installed base of any mobile platform and growing fast. Every day, another million users\n" +
        "power up their Android devices for the first time and start looking for apps, games, and other digital content.\n" +
        "Our mobile app development process covers the entire lifecycle of an app, starting from designing,\n" +
        "moving on to developing, and then deploying the application. Android is a powerful operating system\n" +
        "supporting a large number of applications in smartphones. These applications make life more comfortable\n" +
        "and advanced for users.",
      seo:
        "The company possesses not only the latest technology gadgets but also the most knowledgeable and\n" +
        "experienced hands to offer the most user-friendly customized solutions. We developed a range of solutions\n" +
        "and gained ample experience in the services.\n" +
        "Having the right fundamental SEO strategy is the key to maximizing the way to success. Unlock your\n" +
        "website's true potential through our talented team of professionals who live and breathe SEO.",
      web_development:
        "Our website development professionals recognize the value of solid information architecture design\n" +
        "and integrative branding that engages the customer from the first stop at your site. Engagement with\n" +
        "your customer is crucial to tying into their emotional connection to your site and developing loyalty.",
      web_design:
        "Our website development professionals recognize the value of solid information architecture design\n" +
        "and integrative branding that engages the customer from the first stop at your site. Engagement with\n" +
        "your customer is crucial to tying into their emotional connection to your site and developing loyalty.",
    };

    return data[inputKey];
  };

  const SectionHeader = ({ title }: { title: string }): JSX.Element => {
    return (
      <div className="flex items-center justify-center w-full my-14">
        <div className="flex-grow h-1 bg-gray-200 rounded-full"></div>
        <h2 className="px-4 text-3xl font-bold text-black">
          <span className="text-[#013E57]">OUR</span> {title}
        </h2>
        <div className="flex-grow h-1 bg-gray-200 rounded-full"></div>
      </div>
    );
  };

  const pages: Record<string, JSX.Element> = {
    mobile_development: (
      <div>
        <div>
          <div className=" mb-20 left-[81px] flex justify-center items-center mt-10">
            <h3 className="w-3/4 font-inter font-normal text-[18px] leading-[24px] tracking-[2%] text-center text-[#013E57]">
              {getTitleText(slug)}
            </h3>
          </div>
          <SectionHeader title={"MOBILE APP PROJECTS"} />
          <MobileAppDev />
        </div>
      </div>
    ),
    seo: (
      <div>
        <div className=" mb-20 left-[81px] flex justify-center items-center mt-10">
          <h3 className="w-3/4 font-inter font-normal text-[18px] leading-[24px] tracking-[2%] text-center text-[#013E57]">
            {getTitleText(slug)}
          </h3>
        </div>
        <SectionHeader title={"SEO SERVICES"} />
        <SEO />
      </div>
    ),
    web_development: (
      <div>
        <div>
          <div className=" mb-20 left-[81px] flex justify-center items-center mt-10">
            <h3 className="w-3/4 font-inter font-normal text-[18px] leading-[24px] tracking-[2%] text-center text-[#013E57]">
              {getTitleText(slug)}
            </h3>
          </div>
          <SectionHeader title={"WEB PROJECTS"} />
          <WebDevelopment />
        </div>
      </div>
    ),
    web_design: (
      <div>
        <div>
          <div className=" mb-20 left-[81px] flex justify-center items-center mt-10">
            <h3 className="w-3/4 font-inter font-normal text-[18px] leading-[24px] tracking-[2%] text-center text-[#013E57]">
              {getTitleText(slug)}
            </h3>
          </div>
          <SectionHeader title={"WEB DESIGNING PROJECTS"} />
          <WebDesign />
        </div>
      </div>
    ),
  };

  return pages[slug] || <div>NO DATA FOUND!</div>;
}
