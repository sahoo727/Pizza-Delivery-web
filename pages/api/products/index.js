import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

// backend - 1 - after creating models of moongoose try testing with GET, POST using postman if you send and get information just in backend
export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if(method === "GET"){
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  if(method === "POST"){
    try {
      const product =  await Product.create(req.body);
      res.status(200).json();
    } catch (error) {
      res.status(500).json(error);
    }
  };
}