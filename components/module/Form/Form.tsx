import FormInput from "@/components/element/FormInput";
import Image from "next/image";
import { useState } from "react";

function Form({ form, setForm, title }: any) {
  const [modal, setModal] = useState(false);
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const avatarHandler = (img: any) => {
    setForm({ ...form, avatar: img });
    setModal(false);
  };
  return (
    <form className="w-full">
      <h3 className="font-bold text-lg mb-3">{title}</h3>

      <div className="flex flex-col gap-4 w-full">
        <Image
          className=" rounded-full cursor-pointer"
          src={`/avatars/${form.avatar}.png`}
          width={60}
          height={60}
          alt="avatar"
          onClick={() => setModal(true)}
        />

        <FormInput
          label={"Name"}
          name={"name"}
          type={"text"}
          value={form.name}
          onChange={changeHandler}
        />
        <FormInput
          label={"Last Name"}
          name={"lastName"}
          type={"text"}
          value={form.lastName}
          onChange={changeHandler}
        />
        <FormInput
          label={"Email"}
          name={"email"}
          type={"text"}
          value={form.email}
          onChange={changeHandler}
        />
      </div>
        <div className={` ${modal ? '':'hidden'} z-50 w-screen h-screen bg-white bg-opacity-70  flex justify-center items-center fixed top-0 left-0 `}>
          <div className="rounded-lg shadow-md w-400 h-400 bg-white p-4 gap-4 flex flex-wrap max-w-[400px]">
            {images.map((img: any) => (
              <Image
                key={img}
                className=" rounded-full cursor-pointer"
                src={`/avatars/${img}.png`}
                width={80}
                height={80}
                alt="avatar"
                onClick={() => avatarHandler(img)}
              />
            ))}
          </div>
        </div>

    </form>
  );
}

export default Form;
