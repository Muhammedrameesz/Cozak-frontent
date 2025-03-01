import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="bg-[#013E57] text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">CONTACT INFO</h3>
          <p className="text-sm mb-3 font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
            Welcome to our Website. We are glad to have you around. If you need
            to contact us, use the details below.
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2 font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <Image
                src="/FooterImages/phone.png"
                alt="Phone"
                width={16}
                height={16}
              />
              +91 8089013101
            </p>
            <p className="flex items-center gap-2 font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <Image
                src="/FooterImages/phone.png"
                alt="Phone"
                width={16}
                height={16}
              />
              +91 9037427420
            </p>
            <p className="flex items-center gap-2 font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <Image
                src="/FooterImages/email.png"
                alt="Phone"
                width={16}
                height={16}
              />
              mail@cozaktechnologies.in
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="md:ml-5">
          <h3 className="font-bold text-lg mb-3">GET IN TOUCH WITH US</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <Image
                src="/FooterImages/whatsapp.png"
                alt="Phone"
                width={16}
                height={16}
              />
              Whatsapp
            </li>
            <li className="flex items-center gap-2 font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px] font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <Image
                src="/FooterImages/fb.png"
                alt="Phone"
                width={16}
                height={16}
              />
              Facebook
            </li>
            <li className="flex items-center gap-2 font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <Image
                src="/FooterImages/insta.png"
                alt="Phone"
                width={16}
                height={16}
              />
              Instagram
            </li>
            <li className="flex items-center gap-2 font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <Image
                src="/FooterImages/twitter.png"
                alt="Phone"
                width={16}
                height={16}
              />
              Twitter
            </li>
            <li className="flex items-center gap-1 font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <Image
                src="/FooterImages/linkedin.png"
                alt="Phone"
                width={20}
                height={20}
              />
              Linkedin
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-3">SERVICES</h3>
          <ul className="space-y-2">
            <li className="font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">Software Development</li>
            <li className="font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">Web Designing</li>
            <li className="font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">Mobile App Development</li>
            <li className="font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">SEO</li>
            <li className="font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">Embedded Systems</li>
            <li className="font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">Creative Ad Works</li>
          </ul>
        </div>

        {/* Branch Offices */}
        <div>
          <h3 className="font-bold text-lg mb-3">BRANCH OFFICES</h3>
          <ul className="space-y-3">
            <li  className="font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <div className="flex items-center gap-2">
                <Image
                  src="/FooterImages/ind.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />
                <strong className="font-bold">INDIA</strong>
              </div>
              Palakkad | Thrissur <br />
              +91 808 901 3101, +91 807 570 8905
            </li>
            <li className="font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <div className="flex items-center gap-2">
                <Image
                  src="/FooterImages/uae.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />
                <strong className="font-bold">UNITED ARAB EMIRATES</strong>
              </div>
              Dubai <br />
              +971 55 604 4680
            </li>
            <li className="font-inter font-light text-[14px] leading-[20.94px] tracking-[0.42px]">
              <div className="flex items-center gap-2">
                <Image
                  src="/FooterImages/uk.png"
                  alt="Phone"
                  width={16}
                  height={16}
                />
                <strong className="font-bold">UNITED KINGDOM</strong>
              </div>
              Sheffield <br />
              +44 7833 852 420
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
    </footer>
  );
};

export default FooterComponent;
