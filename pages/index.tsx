import HomePage from "@/components/template/HomePage";
import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default function Home({ customers }: any) {
  return <HomePage data={customers} />;
}

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
// export async function getStaticProps() {
//   try {
//     await connectDB();
//     const customers = await Customer.find();
//     return {
//       props: {
//         customers: JSON.parse(JSON.stringify(customers)),
//       },
//       revalidate: 60*60*24
//     };
//   } catch {
//     return {
//       notFound: true,
//     };
//   }
// }
