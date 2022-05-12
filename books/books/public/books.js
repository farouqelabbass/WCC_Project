// This is the code for the client application
// This does not contain the solution to the second assignment
function createBookBox(book) {
    // This is to be replaced by the appropriate code to construct the HTML elements in JavsScript
    const li = document.createElement("LI")
    const stars = 5
    const star = "★"
    const div = document.createElement("DIV")
    const div1 = document.createElement("DIV")
    const div2 = document.createElement("DIV")
    const h2 = document.createElement("h2")
    const h4 = document.createElement("h3")
    const h3 = document.createElement("h3")
    const img = document.createElement("img")
    const span = document.createElement("span")
    div.classList.add("bookbox")
    img.src = book.image
    h2.innerHTML= book.title
    h4.innerHTML= "Category: " + book.category
    for (var i=0; i < book.authors.length; i++ ){
        const h4 = document.createElement("h4")
        h4.innerHTML = book.authors[i].name
        h3.appendChild(h4)
    }
    for (var i=1; i <= stars; i++ ){
        const span = document.createElement("span")
        span.innerHTML = star
        span.classList.add("star")
        if (i <= book.rating){
            span.classList.add("yellowstar")
        }
        div2.appendChild(span)
    }
    span.innerHTML = "(" + book.numberrating +")"
    div2.appendChild(span)
    div1.appendChild(h2)
    div1.appendChild(h4)
    div1.appendChild(h3)
    div.appendChild(img)
    div.appendChild(div1)
    div.appendChild(div2)
    li.appendChild(div)    
    return li
}


function fillBooks(books) {
  console.log(books);
  const list = document.getElementById("listofbooks");
  list.innerHTML = "";
  for (const idx in books) {
    const li = createBookBox(books[idx]);
    list.append(li);
  }
}


function togglefunction(id) {
  let smenu = document.getElementById(id);
  if (smenu.className === "submenu") {
      smenu.className = ('submenu hidden');
  } else {
      smenu.className = "submenu";
  }
}


function loadAndFillBooks(search) {
  let query = "";
  if (search != undefined) query = `?search=${search}`;

    fetch('/api/books'+query)
    .then(data => data.json())
    .then(books => { fillBooks(books) })


}

function addNewBook() {
  fetch("/api/books", {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ title: "Bla" }),
  });
}

function applySearch() {
  const input = document.getElementById("searchbox");
  console.log(input);
  const text = input.value;
  loadAndFillBooks(text);
}

function installOtherEventHandlers() {
  // Events to open and close menus
  // ...

  // Events to call loadAndFillBooks with a new search value
  document.getElementById("searchbutton").onclick = applySearch;
}





window.onload = () => {
  loadAndFillBooks(); // If no parameter is given, search is undefined

  installOtherEventHandlers();
};
