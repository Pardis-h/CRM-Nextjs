import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function CustomerCard({ name, lastName, _id ,avatar}: any) {
  const router = useRouter()
  const deleteHandler = async()=>{
    const {data} = await axios.delete(`/api/customer/delete/${_id}`)
    console.log(data);
    if(data.status === "success"){
      router.reload()
    }
    
  }
  return (
    <div className="flex justify-between items-center bg-indigo-50 p-3 rounded-lg">
      <Link
        className=" text-lg text-indigo-700 font-medium flex gap-3 items-center"
        href={`/customer/${_id}`}
      >
        <Image className=" rounded-full" src={`/avatars/${avatar}.png`} width={40} height={40} alt="avatar" />
        <p>

        {name} {lastName}
        </p>
      </Link>
      <div className="flex gap-3">
        <Link
          className="font-bold rounded-md bg-white shadow-md text-indigo-500 px-5 py-2"
          href={`/edit/${_id}`}
        >
          Edit
        </Link>
        <button
          className="font-bold rounded-md text-white shadow-md bg-red-500 px-5 py-2"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CustomerCard;
