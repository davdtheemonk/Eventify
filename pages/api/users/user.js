export default function POST(req, res) {
  if (req.method === "PATCH") {
    res.status(200).json({ message: "update users" });
  }
  if (req.method === "GET") {
    res.status(200).json({ message: "get all users" });
  }
  res.status(200).json({ message: "users" });
}
