"use client";
import Header from "@/app/component/Services/SoftwareDevolopment/Header";
import ContentCard from "@/app/component/Services/SoftwareDevolopment/ContentCard";
import InnerHeaderBanner from "@/app/component/BannerComponents/InnerPageBanner";

export default function Page() {
  return (
    <div>
      <main className="flex-grow bg-[#013E57] pt-16">
        <InnerHeaderBanner
          title={"Software Devolopment"}
          bannerKey="softwareDevolopment"
        />
      </main>
      <Header />
      <ContentCard />
    </div>
  );
}
