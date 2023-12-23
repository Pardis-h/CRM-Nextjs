import DetailsPage from "@/components/template/DetailsPage";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function CustomerDetail() {
  const [data, setData] = useState();
  const router = useRouter();
  const id = router.query.customerId;
  const isReady = router;
  const getData = async () => {
    const { data } = await axios.get(`/api/customer/${id}`);
    setData(data.data);
  };
  useEffect(() => {
    if (isReady) {
      getData();
    }
  }, [isReady]);
  if (data) return <DetailsPage data={data} id={id} />;
}

export default CustomerDetail;
