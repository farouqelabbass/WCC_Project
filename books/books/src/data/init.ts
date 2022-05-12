import sqlite from "sqlite3";
import { books } from "../books";

const sqlite3 = sqlite.verbose();

export const db = new sqlite3.Database("db.sqlite", (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  } else {
    console.log("Connected to the database");
    db.run(
      `
CREATE TABLE author(
    id INTEGER PRIMARY KEY,
    name TEXT
)
`,
      (dberr) => {
        if (dberr) {
          console.log("Authors' table already created.");
        } else {
          const insert = "INSERT INTO author (id,name) VALUES (?,?)";
          db.run(insert, [0, "Philip K. Dick"]);
          db.run(insert, [1, "Frank Herbert"]);
          db.run(insert, [2, "Jack London"]);
          db.run(insert, [3, "Gene Stratton-Porter"]);
          db.run(insert, [4, "Joseph W. Kane"]);
          db.run(insert, [5, "Morton M. Sternheim"]);
          db.run(insert, [6, "Robert T. Kiyosaki"]);
          db.run(insert, [7, "Sharon L. Lechter"]);
          db.run(insert, [8, "Adam Kay"]);
          db.run(insert, [9, "Daniel Kahneman"]);
          db.run(insert, [10, "Paul Kalanithi"]);
          db.run(insert, [11, "Russ Harris"]);
          db.run(insert, [12, "Viktor E. Frankl"]);
          db.run(insert, [13, "Oliver Sacks"]);
          db.run(insert, [14, "Michael Mosley"]);
          db.run(insert, [15, "Jordan B. Peterson"]);
          db.run(insert, [16, "Atul Gawande"]);
          db.run(insert, [17, "Giulia Enders"]);
          db.run(insert, [18, "Norman Doidge"]);
          db.run(insert, [19, "Anthony William"]);
          db.run(insert, [20, "Keri Smith"]);
          db.run(insert, [21, "American Psychiatric Association"]);
          db.run(insert, [22, "Dr Natasha Campbell-McBride"]);
          db.run(insert, [23, "Austin Kleon"]);
          db.run(insert, [24, "Eline Snel"]);
          db.run(insert, [25, "Michael Greger"]);
        }
      }
    );
    db.run(
      `
CREATE TABLE book(
    id INTEGER PRIMARY KEY,
    title TEXT,
    image TEXT,
    rating INTEGER,
    category TEXT,
    numberrating INTEGER
)
`,
      (dberr) => {
        if (dberr) {
          console.log("Books' table already created.");
        } else {
          const insert = `
INSERT INTO book (id,title, image, rating, category ,numberrating) VALUES (?,?,?,?,?,?)
`;
          books.forEach((b) => {
            db.run(insert, [b.id, b.title, b.image, b.rating, b.category, b.numberrating]);
          });
        }
      }
    );

    db.run(
      `
CREATE TABLE author_book(
    author_id INTEGER,
    book_id INTEGER,
    FOREIGN KEY(author_id) REFERENCES author(author_id),
    FOREIGN KEY(book_id) REFERENCES book(book_id)
)
`,

      (dberr) => {
        if (dberr) {
          console.log("Book/Author relation table already created.");
        } else {
          const insert = `
INSERT INTO author_book (author_id, book_id) VALUES (?,?)
`;
          db.run(insert, [0, 1]);
          db.run(insert, [0, 2]);
          db.run(insert, [0, 3]);
          db.run(insert, [0, 4]);
          db.run(insert, [1, 5]);
          db.run(insert, [2, 6]);
          db.run(insert, [3, 7]);
          db.run(insert, [4, 8]);
          db.run(insert, [5, 8]);
          db.run(insert, [6, 9]);
          db.run(insert, [7, 9]);
          db.run(insert, [8, 10]);
          db.run(insert, [9, 11]);
          db.run(insert, [10, 12]);
          db.run(insert, [11, 13]);
          db.run(insert, [12, 14]);
          db.run(insert, [13, 15]);
          db.run(insert, [14, 16]);
          db.run(insert, [14, 17]);
          db.run(insert, [15, 18]);
          db.run(insert, [16, 19]);
          db.run(insert, [17, 20]);
          db.run(insert, [18, 21]);
          db.run(insert, [19, 22]);
          db.run(insert, [20, 23]);
          db.run(insert, [15, 24]);
          db.run(insert, [21, 25]);
          db.run(insert, [22, 26]);
          db.run(insert, [19, 27]);
          db.run(insert, [23, 28]);
          db.run(insert, [24, 29]);
          db.run(insert, [25, 30]);
        }
      }
    );
  }
});
