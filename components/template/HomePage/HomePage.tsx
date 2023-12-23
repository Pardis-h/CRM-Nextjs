import CustomerCard from "@/components/module/CustomerCard";
import Head from "next/head";

function HomePage({ data }: any) {
  return (
    <div className="flex flex-col gap-4 my-5 max-w-[800px] mx-auto">
      <Head>
        <title>CRM - Home</title>
        <meta name="description" content="this is a test api next project" />
      </Head>
      {data.map((customer: any) => (
        <CustomerCard key={customer._id} {...customer} />
      ))}
    </div>
  );
}

export default HomePage;
