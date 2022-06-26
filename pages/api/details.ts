// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import details from "../../details.json";

type Data = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const query = req.query as { [key: string]: string };
  const finalDetails = Object.assign({}, details, query);
  res.status(200).json(finalDetails);
};

export default handler;