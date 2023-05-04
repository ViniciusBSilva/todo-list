// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


const taskListJSON = [
  {
    "id": 1,
    "title": "Lorem Ipsum",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "completed": false,
    "category": "Work",
    "dueDate": "2023-05-02",
    "createdAt": "2023-04-23",
    "createdBy": "Vinicius"
  },
  {
    "id": 2,
    "title": "The Quick Brown Fox",
    "description": "The quick brown fox jumps over the lazy dog",
    "completed": true,
    "category": "Personal",
    "dueDate": "2023-12-31",
    "createdAt": "2023-04-22",
    "createdBy": "Vinicius"
  }
]

const handler = async (req, res) => {

  // let uri = 'http://localhost:8000/tasks';

  // res = await fetch(uri);

  res.status(200).json(taskListJSON);

}

export default handler;