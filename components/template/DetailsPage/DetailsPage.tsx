import Head from "next/head"

function DetailsPage({data,id}:any) {
  return (
    <div>
              <Head>
        <title>CRM - Customer Detail</title>
      </Head>
        <h2>DetailsPage:</h2>
        <p>{data.name} {data.lastName}</p>
    </div>
  )
}

export default DetailsPage