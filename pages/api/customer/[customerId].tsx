import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
  }

  if (req.method === "GET") {
    const id = req.query.customerId
    console.log(id);
    
    try{
        const customer = await Customer.findOne({_id:id});
        console.log(customer);
        
        res.status(200).json({status:"success", data: customer})
    }catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in get data from DB" });
  }
    
  }
}
