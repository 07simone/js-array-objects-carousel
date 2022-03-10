const teamMarvel = [
    {
        name: 'Iron-man', 
        image: 'Iron_man.jpg',
    },
    {
        name: 'Captain America',
        image: 'captain.jpg',
    },
    {
        name: 'Team-avengers',
        image: 'avengers.jpg',
    },
    {
        name: 'Dr.Strange',
        image: 'dr-strange.jpg',
    },
    {
        name: 'Captain-Marvel',
        image: 'marvel.jpg',
    },
    {
        name: 'Bimbo Ragno',
        image: 'spider-man.jpg',
    },
    ];

    let Principal ="";
    let Secondary ="";
    for(let i = 0; i < teamMarvel.length; i++){
        console.log(teamMarvel[i])
        Principal +=`
        <div class="my-container">
        <img class ="img-fluid" src="img/${teamMarvel[i].image}" alt"">
      
        </div>`
        Secondary += `
        <div class="my-jumbo">
        <img class ="img-fluid" src="img/${teamMarvel[i].image}">
        
        </div>`
    }
    const div = document.querySelector(".my-carousel-images")
    const newDiv = document.createElement("div");
    div.appendChild(newDiv)
    newDiv.classList.add("my-container")
   /*  const PrincipalElement = document.querySelector(".my-container")
    PrincipalElement.innerHTML = Principal

    const SecondaryElement = document.querySelector(".my-jumbo")
    SecondaryElement.innerHTML += Secondary 

    let activeElement = 0;
    document.getElementsByClassName("my-container")[activeElement].classList.add("active"); */
    