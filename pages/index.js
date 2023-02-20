import Head from "next/head";
import Pricing from "@/components/pricing";
import Project from "@/components/project";
import Services from "@/components/services";
import Tag from "@/components/tag";
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      <Head>
        <title>TrendingByte</title>
      </Head>
      <div className="bg-gray-900">
        <NavBar />
        <div className="md:max-w-[1040px] mx-auto box-border">
          <Hero />
          <Services />
          <Tag />
          <Pricing />
          <Project />
          <Testimonial />
        </div>
      </div>
    </main>
  );
}
