const handler = async (req, res) => {

  let uri = 'http://localhost:8000/tasks';

  const { id } = req.query;

  if (id) {
    uri += `/${id}`;
  }

  try {
    const response = await fetch(uri);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }

}

export default handler;