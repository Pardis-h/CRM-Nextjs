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

  if (req.method === "POST") {
    const { data } = req.body;
    console.log(req.body);
    
    if (!data.name || !data.lastName || !data.email) {
      return res.status(400).json({
        status: "failed",
        message: "Invalid Data",
      });
    }

    try{
        const customer = await Customer.create(data);
        return res.status(201).json({
            status:"success",
            message:"Data Created",
            data:customer
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            status:"failed",
            message:"Error in Storing in DB"
        })
    }
  }
}
