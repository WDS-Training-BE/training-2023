const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
	let a = {
		Name: "NguyenVanA",
		Age: 19,
	};

	res.status(200).json(a);
});

app.get("/users", (req, res, next) => {
	res.status(200).send("Root endpoint");
});

app.listen(3000, () => {
	console.log("server is running at 3000");
});
