const handler = async (req, res) => {

  let uri = 'http://localhost:8000/tasks';

  // Get query data and check if ID was provided
  // If ID was provided, search for specifc ID
  const { id } = req.query;
  if (id) {
    uri += `/${id}`;
  }

  try {
    let response;
    if (req.method === "GET") {
      response = await fetch(uri);
    } else if (req.method === "POST") {
      response = await fetch(uri, {
        method: req.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body)
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }

}

export default handler;