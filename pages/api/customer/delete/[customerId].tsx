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
  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      res
        .status(200)
        .json({ status: "success", message: "Deleted Successfully!" });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ status: "failed", message: "Error in Deleting data from DB" });
    }
  }
}
