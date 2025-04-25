"use client";

import InnerHeaderBanner from "@/app/component/BannerComponents/InnerPageBanner";

export default function Page() {
  return (
    <div>
      <main className="flex-grow bg-[#013E57] pt-16">
        <InnerHeaderBanner
          title={"Web Designing"}
          bannerKey="web_design"
        />
      </main>
     
    </div>
  );
}
