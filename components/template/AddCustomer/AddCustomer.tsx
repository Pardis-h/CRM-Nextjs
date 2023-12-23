import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../../module/Form";
import axios from "axios";
import Head from "next/head";

const defaultForm = {
  name: "",
  lastName: "",
  email: "",
  avatar: 1
};

function AddCustomer() {
  const router = useRouter();
  const [form, setForm] = useState(defaultForm);

  const cancelHandler = () => {
    setForm(defaultForm);
    router.back();
  };

  const saveHandler = async () => {
    console.log(form,"save Add");

    try {
      const { data } = await axios.post("/api/customer", {
        data: form,
      });
      if (data.status === "success") {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full max-w-[800px] mx-auto my-3 flex flex-col justify-between h-full">
      <Head>
        <title>CRM - Add Customer</title>
      </Head>
      <Form form={form} setForm={setForm} title={"AddCustomer"} />
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

export default AddCustomer;
