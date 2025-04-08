"use client";

import InnerHeaderBanner from "../component/BannerComponents/InnerPageBanner";
import ContactForm from "../component/contactForm/ContactForm";


export default function ContactPage() {
  return (
    <div>
       <main className="flex-grow bg-[#013E57] pt-16">
          <InnerHeaderBanner bannerKey={"contactUs"} title={"Contact Us"}/>
        </main>
        <ContactForm />
    </div>
  );
}
