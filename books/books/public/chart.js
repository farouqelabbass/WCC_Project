

async function plot_chart(){

     
    let ratings = {
        one : 0,
        two : 0,
        three : 0,
        four : 0,
        five : 0,
    }

    await fetch('/api/books')
    .then(data => data.json())
    .then(books => { console.log(books)
        
            for (let i = 0; i<  books.length ; i++){
                if(books[i].rating === 1){
                    ratings.one = ratings.one + 1
                } else if(books[i].rating === 2){
                 ratings.two = ratings.two + 1
                } else if(books[i].rating === 3){
                 ratings.three = ratings.three + 1
                } else if(books[i].rating === 4){
                 ratings.four =ratings.four+ 1
                } else if(books[i].rating === 5){
                 ratings.five = ratings.five+ 1
                }
             } 
            
        
        console.log(ratings)
    })
     

  const labels = [
    '1 star',
    '2 stars',
    '3 stars',
    '4 stars',
    '5 stars',
  ];



  let plotData = [ratings.one , ratings.two, ratings.three, ratings.four, ratings.five]
  console.log(plotData)

  const data = {
    labels: labels,
    datasets: [{
      label: 'Rating statistics',
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgba(153, 102, 255)',
        'rgba(201, 203, 207)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderColor: 'rgb(255, 99, 132)',
      data: plotData,
    }]
  };

  const config = {
    type: 'bar',
    data: data,
  };

  const myChart = new Chart(
    document.getElementById('barplot'),
    config
  );
}


async function pie_chart(){

    let ids = []
    const count = {};
    await fetch('/api/authors')
    .then(data => data.json())
    .then(books => { console.log("authors here", books)

    for (let i = 0; i<  books.length ; i++){
       ids.push(books[i].book_id)
       
    }

    })

  
    ids.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });
    console.log(count)
    let count_auth = Object.values(count)
    console.log(count_auth)
    

    let count_auth_books = {
        one : 0,
        two : 0,
        three : 0,
    }

    for (let i = 0; i<  count_auth.length ; i++){
        if (count_auth[i] === 1){
            count_auth_books.one += 1
        } else if (count_auth[i] === 2){
            count_auth_books.two += 1
        } else if (count_auth[i] === 3){
            count_auth_books.three += 1
        }
        
     }

    console.log("ewooooo",count_auth_books)  


    //let pieData = [count_auth_books.one , count_auth_books.two, count_auth_books.three]

  const data = {
    labels: [
      'Books with one author',
      'Books with two authors',
      'Books with three authors '
    ],
    datasets: [{
      label: 'Pie chart for number of authors in books',
      data: [count_auth_books.one , count_auth_books.two, count_auth_books.three],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  const myChart = new Chart(
    document.getElementById('pieplot'),
    config
  );
}

function togglefunction(id) {
  let smenu = document.getElementById(id);
  if (smenu.className === "submenu") {
      smenu.className = ('submenu hidden');
  } else {
      smenu.className = "submenu";
  }
}