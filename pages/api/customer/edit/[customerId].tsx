import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "Error in connecting to DB",
    });
  }

  if(req.method === "PATCH"){
    const {customerId} = req.query
    const {data} = req.body
    try{
        const customer = await Customer.findOne({_id:customerId})
        customer.name = data.name
        customer.lastName = data.lastName
        customer.email = data.email
        customer.avatar = data.avatar
        customer.updatedAt = Date.now()
        customer.save()
        res.status(200).json({status:"success",data:customer})
    }catch (err: any) {
        console.log(err);
        res.status(500).json({
          status: "failed",
          message: "Error in updating data in DB",
        });
      }
  }
}
