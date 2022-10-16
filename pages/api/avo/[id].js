import Database from'../../../database/db';

const oneAvo = async (req, res) => {
  const id = req.query.id
  const AVO = await Database.getById(id);
  res.status(200).json({ avo: AVO });
};

export default oneAvo;