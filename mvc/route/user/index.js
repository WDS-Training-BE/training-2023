const router = require("express").Router();

// Require another routes
const getUserByAge = require("./getUserByAge");

// Require services
const { getUsers } = require("../../service/user_service");

// --api/v1/user
router.get("/", (req, res, next) => {
	// Call user service
	const users = getUsers();

	// Create dto
	let dtos = {
		numberOfLessons: users.length,
		courses: users,
	};

	res.status(200).json(dtos);
});

// router.get("/get-age", (req, res, next) => {
// 	let age = {
// 		Age: 19,
// 	};

// 	res.status(200).json(age);
// });

// --api/v1/user/get-age
router.use("/get-age", getUserByAge);

module.exports = router;
