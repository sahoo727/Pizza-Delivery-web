import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default function handler(req, res) {
  const { method } = req;

  dbConnect();

  if(method === "GET"){};
  
  if(method === "POST"){};
}