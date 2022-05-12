//fill star function

function fillstar(num){
    let rating = document.getElementById("rating")
    rating.innerHTML = num
    for (let i = 1; i<= num ; i++){
      let id = "" + i
      let star = document.getElementById(id)
      star.style.color = "yellow";
    }
    if (num < 5){
        for (let i = num+1; i<= 5 ; i++){
            let id = "" + i
            let star = document.getElementById(id)
            star.style.color = "black";
          } 
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

function AddNewBook(){

    let title = document.getElementById("BTitle").value
    let image = document.getElementById("Image").value
    let Nrating = document.getElementById("NRating").value
    let rating = document.getElementById("rating").innerHTML
    let author1 = document.getElementById("author1").value
    let category = document.getElementById("category").value
    let author2 = document.getElementById("author2").value
    let author3 = document.getElementById("author3").value
    let data = {title: title,
                image: image,
                rating: rating,
                category: category,
                numberrating: Nrating,
                author1: author1,
                author2: author2,
                author3: author3
     };
    console.log(data)
    fetch("/api/books", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data)
    }).then(res => {
    console.log("Request complete! response:", res);
    });

}