import axios from "axios";

export default async (req, res) => {
  const { pageParam } = req.body;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  axios
    .get(
      `https://ohou.se/store/category.json?v=2&order=popular&page=${pageParam}&per=24`,
      { withCredentials: true },
      {
        params: {
          key: process.env.REACT_APP_API_KEY,
          categoryId: "100",
          output: "json",
        },
      }
    )
    .then((response) => res.send(response.data));
};
