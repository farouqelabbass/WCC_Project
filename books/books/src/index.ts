import express from 'express'
import './data'
import { addOneBook, getAllBooks, getOneBook, getAllAuthBook} from './data'

const app = express()
const port = 8080

app.use(express.static('public'))

// Getting all books, with search
app.get('/api/books', (req,res) => {
    const search:string = ( req.query.search || "" ) as string
    getAllBooks(search, (data) => {
        // console.log("its here",data)
        res.send(JSON.stringify(data)) })
})


// Getting all authors books connections
app.get('/api/authors', (req,res) => {
    const search:string = ( req.query.search || "" ) as string
    getAllAuthBook(search, (data) => {
        console.log("its here",data)
        res.send(JSON.stringify(data)) })
})





// Getting one book
app.get('/api/books/:id', (req,res) => {
    const bookId = parseInt(req.params.id,10)
    getOneBook(bookId, (book) => {
        if (book != null) res.send(JSON.stringify(book))
        else {
            res.status(404)
            res.send()
        }
    })
})

// Adding one book
app.post('/api/books', (req,res) => {
    console.log('New Books Being added')
    let body = ""
    req
    .on('data', (data) => {

    body += data
    console.log("data", data)
    })
    .on('end', () => { addOneBook(JSON.parse(body)) })
})

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );






























