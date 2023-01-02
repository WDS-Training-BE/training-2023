const router = require("express").Router();

// router / app . [HTTP_METHOD]

//............../get-age/get-age-over-19
router.get("/get-age-over-19", (req, res, next) => {
	let users = [
		{
			Name: "NguyenVanA",
			Age: 30,
		},
		{
			Name: "NguyenVanB",
			Age: 20,
		},
		{
			Name: "NguyenVanC",
			Age: 22,
		},
	];

	res.status(200).json(users);
});

router.get("/get-age-over-30", (req, res, next) => {
	let users = [
		{
			Name: "NguyenVanA",
			Age: 31,
		},
	];

	res.status(200).json(users);
});

//............../get-age/x
router.post("/x", (req, res, next) => {
	let users = [
		{
			Name: "NguyenVanA",
			Age: 30,
		},
		{
			Name: "NguyenVanB",
			Age: 20,
		},
		{
			Name: "NguyenVanC",
			Age: 22,
		},
	];

	res.status(200).json(users);
});

router.put("/", (req, res, next) => {
	let users = [
		{
			Name: "NguyenVanA",
			Age: 30,
		},
		{
			Name: "NguyenVanB",
			Age: 20,
		},
		{
			Name: "NguyenVanC",
			Age: 22,
		},
	];

	res.status(200).json(users);
});

router.delete("/", (req, res, next) => {
	let users = [
		{
			Name: "NguyenVanA",
			Age: 30,
		},
		{
			Name: "NguyenVanB",
			Age: 20,
		},
		{
			Name: "NguyenVanC",
			Age: 22,
		},
	];

	res.status(200).json(users);
});

module.exports = router;
