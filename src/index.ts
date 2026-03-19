import express, { type Request, type Response } from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_: Request, res: Response) => {
	res.send("Hello World!");
});

app.get("/health", (_: Request, res: Response) => {
	res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
