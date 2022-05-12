"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const books_1 = require("../books");
const sqlite3 = sqlite3_1.default.verbose();
exports.db = new sqlite3.Database("db.sqlite", (err) => {
    if (err) {
        console.log(err.message);
        throw err;
    }
    else {
        console.log("Connected to the database");
        exports.db.run(`
CREATE TABLE author(
    id INTEGER PRIMARY KEY,
    name TEXT
)
`, (dberr) => {
            if (dberr) {
                console.log("Authors' table already created.");
            }
            else {
                const insert = "INSERT INTO author (id,name) VALUES (?,?)";
                exports.db.run(insert, [0, "Philip K. Dick"]);
                exports.db.run(insert, [1, "Frank Herbert"]);
                exports.db.run(insert, [2, "Jack London"]);
                exports.db.run(insert, [3, "Gene Stratton-Porter"]);
                exports.db.run(insert, [4, "Joseph W. Kane"]);
                exports.db.run(insert, [5, "Morton M. Sternheim"]);
                exports.db.run(insert, [6, "Robert T. Kiyosaki"]);
                exports.db.run(insert, [7, "Sharon L. Lechter"]);
                exports.db.run(insert, [8, "Adam Kay"]);
                exports.db.run(insert, [9, "Daniel Kahneman"]);
                exports.db.run(insert, [10, "Paul Kalanithi"]);
                exports.db.run(insert, [11, "Russ Harris"]);
                exports.db.run(insert, [12, "Viktor E. Frankl"]);
                exports.db.run(insert, [13, "Oliver Sacks"]);
                exports.db.run(insert, [14, "Michael Mosley"]);
                exports.db.run(insert, [15, "Jordan B. Peterson"]);
                exports.db.run(insert, [16, "Atul Gawande"]);
                exports.db.run(insert, [17, "Giulia Enders"]);
                exports.db.run(insert, [18, "Norman Doidge"]);
                exports.db.run(insert, [19, "Anthony William"]);
                exports.db.run(insert, [20, "Keri Smith"]);
                exports.db.run(insert, [21, "American Psychiatric Association"]);
                exports.db.run(insert, [22, "Dr Natasha Campbell-McBride"]);
                exports.db.run(insert, [23, "Austin Kleon"]);
                exports.db.run(insert, [24, "Eline Snel"]);
                exports.db.run(insert, [25, "Michael Greger"]);
            }
        });
        exports.db.run(`
CREATE TABLE book(
    id INTEGER PRIMARY KEY,
    title TEXT,
    image TEXT,
    rating INTEGER,
    category TEXT,
    numberrating INTEGER
)
`, (dberr) => {
            if (dberr) {
                console.log("Books' table already created.");
            }
            else {
                const insert = `
INSERT INTO book (id,title, image, rating, category ,numberrating) VALUES (?,?,?,?,?,?)
`;
                books_1.books.forEach((b) => {
                    exports.db.run(insert, [b.id, b.title, b.image, b.rating, b.category, b.numberrating]);
                });
            }
        });
        exports.db.run(`
CREATE TABLE author_book(
    author_id INTEGER,
    book_id INTEGER,
    FOREIGN KEY(author_id) REFERENCES author(author_id),
    FOREIGN KEY(book_id) REFERENCES book(book_id)
)
`, (dberr) => {
            if (dberr) {
                console.log("Book/Author relation table already created.");
            }
            else {
                const insert = `
INSERT INTO author_book (author_id, book_id) VALUES (?,?)
`;
                exports.db.run(insert, [0, 1]);
                exports.db.run(insert, [0, 2]);
                exports.db.run(insert, [0, 3]);
                exports.db.run(insert, [0, 4]);
                exports.db.run(insert, [1, 5]);
                exports.db.run(insert, [2, 6]);
                exports.db.run(insert, [3, 7]);
                exports.db.run(insert, [4, 8]);
                exports.db.run(insert, [5, 8]);
                exports.db.run(insert, [6, 9]);
                exports.db.run(insert, [7, 9]);
                exports.db.run(insert, [8, 10]);
                exports.db.run(insert, [9, 11]);
                exports.db.run(insert, [10, 12]);
                exports.db.run(insert, [11, 13]);
                exports.db.run(insert, [12, 14]);
                exports.db.run(insert, [13, 15]);
                exports.db.run(insert, [14, 16]);
                exports.db.run(insert, [14, 17]);
                exports.db.run(insert, [15, 18]);
                exports.db.run(insert, [16, 19]);
                exports.db.run(insert, [17, 20]);
                exports.db.run(insert, [18, 21]);
                exports.db.run(insert, [19, 22]);
                exports.db.run(insert, [20, 23]);
                exports.db.run(insert, [15, 24]);
                exports.db.run(insert, [21, 25]);
                exports.db.run(insert, [22, 26]);
                exports.db.run(insert, [19, 27]);
                exports.db.run(insert, [23, 28]);
                exports.db.run(insert, [24, 29]);
                exports.db.run(insert, [25, 30]);
            }
        });
    }
});
//# sourceMappingURL=init.js.map