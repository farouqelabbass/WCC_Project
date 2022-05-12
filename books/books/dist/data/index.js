"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOneBook = exports.getOneBook = exports.getAllAuthBook = exports.getAllBooks = void 0;
const init_1 = require("./init");
function getAllBooks(search, fn) {
    const sql = `
              SELECT * FROM Book b
              WHERE b.title LIKE '%' || ? || '%'
              `;
    const params = [search];
    return init_1.db.all(sql, params, (err, rows) => {
        if (err) {
            console.log("error in database: " + err);
            fn([]);
        }
        else {
            // console.log(rows)
            const result = [];
            for (const row of rows) {
                // console.log("eeeeeeeeeeeee", row.id)
                const sql1 = `
        SELECT name FROM author a INNER JOIN author_book b ON a.id = b.author_id where b.book_id = ? ;
        `;
                // console.log("eeeeeeeeeeeee")
                init_1.db.all(sql1, [row.id], (err1, data1) => __awaiter(this, void 0, void 0, function* () {
                    if (err1) {
                        console.log("error in database: " + err1);
                        fn([]);
                    }
                    else {
                        // console.log("here112337345257890", data1)
                        row.authors = data1;
                        yield result.push(row);
                    }
                }));
                // console.log("final", result)
            }
            console.log("final", result);
            setTimeout(() => {
                fn(result);
            }, 500);
        }
    });
}
exports.getAllBooks = getAllBooks;
function getAllAuthBook(search, fn) {
    const sql = `
              SELECT * FROM author_book

              `;
    const params = [search];
    return init_1.db.all(sql, (err, rows) => {
        if (err) {
            console.log("error in database: " + err);
            fn([]);
        }
        else {
            console.log("authhhhhhhhhhh", rows);
            setTimeout(() => {
                fn(rows);
            }, 500);
        }
    });
}
exports.getAllAuthBook = getAllAuthBook;
function getOneBook(id, fn) {
    const sql = "SELECT * FROM Book WHERE id = ?";
    const params = ["" + id];
    return init_1.db.get(sql, params, (err, row) => {
        if (err) {
            console.log("error in database: " + err);
            fn(null);
        }
        else {
            // console.log(row)
            fn(row);
        }
    });
}
exports.getOneBook = getOneBook;
;
function addOneBook(s) {
    console.log(s);
    const sql = "SELECT * FROM book";
    return init_1.db.all(sql, (err, rows) => {
        if (err) {
            console.log("error in database: " + err);
        }
        else {
            for (const row of rows) {
                if (row.title === s.title) {
                    console.error("BOOK EXISTS");
                    return;
                }
            }
            const id = rows[rows.length - 1].id;
            // console.log("newid" , id)
            const sql1 = "INSERT INTO book  (id, title, image, rating,category, numberrating ) VALUES (?,?,?,?,?,?);";
            const srat = s.rating;
            const nrat = s.numberrating;
            init_1.db.run(sql1, [id + 1, s.title, s.image, srat, s.category, nrat], (err1) => {
                if (err1) {
                    console.log(err1.message);
                }
                else {
                    // get the last insert id
                    console.log(`A row has been inserted with rowid`);
                    const sql3 = "SELECT * FROM author;";
                    init_1.db.all(sql3, (err2, rows2) => {
                        if (err2) {
                            console.log(err2.message);
                        }
                        else {
                            const allauthors = [];
                            for (const row of rows2) {
                                allauthors.push(row.name);
                            }
                            const authors = [];
                            if (!allauthors.includes(s.author1)) {
                                authors.push(s.author1);
                            }
                            if (!allauthors.includes(s.author2)) {
                                authors.push(s.author2);
                            }
                            if (!allauthors.includes(s.author3)) {
                                authors.push(s.author3);
                            }
                            const AuthId = rows2[rows2.length - 1].id;
                            for (const auth of authors) {
                                const sql4 = "INSERT INTO author (id, name) VALUES (?,?);";
                                const authorId = authors.indexOf(auth) + 1 + AuthId;
                                init_1.db.run(sql4, [authorId, auth], (err3) => {
                                    if (err3) {
                                        console.log(err3.message);
                                    }
                                    else {
                                        const sql5 = "INSERT INTO author_book (author_id, book_id) VALUES (?,?);";
                                        init_1.db.run(sql5, [authorId, id + 1], (err4) => {
                                            if (err4) {
                                                console.log(err4.message);
                                            }
                                            else {
                                                console.log("sucess");
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
    });
}
exports.addOneBook = addOneBook;
//# sourceMappingURL=index.js.map