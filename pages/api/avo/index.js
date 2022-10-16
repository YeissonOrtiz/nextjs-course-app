import Database from'../../../database/db';

const allAvos = async (req, res) => {
  const data = await Database.getAll();
  const length = data.length;
  res.status(200).json({ data, length });
};

export default allAvos;