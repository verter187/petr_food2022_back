const router = new require("express")();

const {
  getBooks,
  getTestData,
  addTestsEntries,
} = require("../controllers/Controller");

router.get("/books", getBooks);
router.post("/test", getTestData);

router.get("/addTestsEntries", addTestsEntries);

module.exports = router;
