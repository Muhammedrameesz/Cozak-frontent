
const FooterComponent = () => {
  return (
    <footer className="bg-[#013E57] text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">CONTACT INFO</h3>
          <p className="text-sm mb-3">
            Welcome to our Website. We are glad to have you around. If you need
            to contact us, use the details below.
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              +91 8089013101
            </p>
            <p className="flex items-center gap-2">
             +91 9037427420
            </p>
            <p className="flex items-center gap-2">
              mail@cozaktechnologies.in
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">GET IN TOUCH WITH US</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              Whatsapp
            </li>
            <li className="flex items-center gap-2">
               Facebook
            </li>
            <li className="flex items-center gap-2">
              Instagram
            </li>
            <li className="flex items-center gap-2">
               Twitter
            </li>
            <li className="flex items-center gap-2">
               Linkedin
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-3">SERVICES</h3>
          <ul className="space-y-2">
            <li>Software Development</li>
            <li>Web Designing</li>
            <li>Mobile App Development</li>
            <li>SEO</li>
            <li>Embedded Systems</li>
            <li>Creative Ad Works</li>
          </ul>
        </div>

        {/* Branch Offices */}
        <div>
          <h3 className="font-bold text-lg mb-3">BRANCH OFFICES</h3>
          <ul className="space-y-3">
            <li>
              🇮🇳 <strong>INDIA</strong> <br />
              Palakkad | Thrissur <br />
              +91 808 901 3101, +91 807 570 8905
            </li>
            <li>
              🇦🇪 <strong>UNITED ARAB EMIRATES</strong> <br />
              Dubai <br />
              +971 55 604 4680
            </li>
            <li>
              🇬🇧 <strong>UNITED KINGDOM</strong> <br />
              Sheffield <br />
              +44 7833 852 420
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
     
    </footer>
  );
}

export default FooterComponent;
