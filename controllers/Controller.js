const { Book } = require("../models/models");

class Controllers {
  async getBooks(req, res) {
    const books = await Book.findAll();
    return res.send(books);
  }
  async getTestData(req, res) {
    return res.send(req.body);
  }

  addTestsEntries(req, res) {
    const new_books = [
      {
        title: "Atomic One’s",
        price: "13.84",
        descr:
          "As the book contains theoretical content as well as solved questions.",
        type: "Printed Book",
        img_name: "book1.png",
      },
      {
        title: "The Dark Light",
        price: "86.11",
        descr:
          "As the book contains theoretical content as well as solved questions.",
        type: "Printed Book",
        img_name: "book2.png",
      },
    ];
    Book.bulkCreate(new_books);

    return res.send(true);
  }
}

module.exports = new Controllers();
