import Form from "@/components/module/Form";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function EditPage({ id, data }: any) {
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    avatar : data.avatar
  });
  const router = useRouter();

  const cancelHandler = () => {
    router.push("/");
  };

  const saveHandler = async () => {
    console.log("save Click Edit",form);

    try {
      const res = await axios.patch(`/api/customer/edit/${id}`, {
        data: form,
      });
      console.log(res.status);
      if (res.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (data)
      setForm({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        avatar : data.avatar
      });
  }, [data]);
  return (
    <div className="flex flex-col gap-5 ">
      <Head>
        <title>CRM - Edit</title>
      </Head>
      <Form form={form} setForm={setForm} title={"Edit Customer"} />
      <div className="flex w-full justify-end gap-3 mt-4">
        <button
          className=" bg-slate-300 rounded-md px-10 py-3"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button
          className=" bg-indigo-500 rounded-md text-white px-10 py-3"
          onClick={saveHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditPage;
