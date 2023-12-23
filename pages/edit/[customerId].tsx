import EditPage from "@/components/template/EditPage";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function EditCustomer() {
  const [data, setData] = useState({});
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;
  const getData = async () => {
    const { data } = await axios.get(`/api/customer/${customerId}`);
    console.log(data.data);
    setData(data.data);
  };
  useEffect(() => {
    if (isReady) {
      getData();
    }
  }, [isReady]);
  if (data) return <EditPage id={customerId} data={data} />;
}

export default EditCustomer;
