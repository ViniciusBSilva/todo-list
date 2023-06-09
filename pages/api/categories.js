const handler = async (req, res) => {

    let uri = 'http://localhost:8000/categories';

    // Get query data and check if ID was provided
    // If ID was provided, search for specifc ID
    // If ID wasn't provided check for "name"
    // If "name" was provided, use it for the search
    const { id } = req.query;
    const { name } = req.query;

    if (id) {
        uri += `/${id}`;
    } else {
        if (name) {
            uri += `?name=${name}`;
        }
    }

    try {

        let response;

        switch (req.method) {
            case "GET":
                if (!id && !name) {
                    uri += "?_sort=name&_order=asc"
                }
                response = await fetch(uri);
                break;
            case "POST":
            case "PUT":
            case "PATCH":
                response = await fetch(uri, {
                    method: req.method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(req.body)
                });
                break;
            case "DELETE":
                response = await fetch(uri, {
                    method: req.method,
                });
                break;
        }

        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }

}

export default handler;