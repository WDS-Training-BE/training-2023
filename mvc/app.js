const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", "./view");

// ROUTERS
const root = require("./route");

app.get("/", (req, res, next) => {
	console.log("Hello World This Is Root Endpoint");

	// next({ msg: "Call to next middleware" });
	throw new Error("ABC Error");
});

app.use("/api/v1/", root);

// Handling non matching request from the client
app.use((req, res, next) => {
	res.status(404).send("<h1>Page not found on the server</h1>");
});

// References: https://expressjs.com/en/guide/using-template-engines.html
app.get("/pugjs", (req, res, next) => {
	res.render("home");
});

app.get("/puglikehtml", (req, res, next) => {
	res.send("<h2>Hello Pugjs</h2>");
});

app.get("/pugjs/carousel", (req, res, next) => {
	res.render("carousel.pug");
});

app.listen(3000, () => {
	console.log("server is running at 3000");
});
