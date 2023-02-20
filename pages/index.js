import Head from "next/head";
import Pricing from "@/components/pricing";
import Project from "@/components/project";
import Services from "@/components/services";
import Tag from "@/components/tag";

export default function Home() {
  return (
    <main>
      <Head>
        <title>TrendingByte</title>
      </Head>
      <div className="bg-gray-900">
        <div className="md:max-w-[1040px] sm:mx-5 md:mx-auto box-border">
          <Services />
          <Tag />
          <Pricing />
          <Project />
        </div>
      </div>
    </main>
  );
}
