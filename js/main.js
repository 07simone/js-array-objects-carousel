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
        <div class="my-carousel-images">
        <img class ="img-fluid" src="img/${teamMarvel[i].image}" alt"">
      
        </div>`
        Secondary += `
        <div class="my-thumbnails ">
        <img class ="img-fluid" src="img/${teamMarvel[i].image}">
        
        </div>`
    }
    
    const PrincipalElement = document.querySelector(".my-carousel-images")
    PrincipalElement.innerHTML = Principal

    const SecondaryElement = document.querySelector(".my-thumbnails")
    SecondaryElement.innerHTML += Secondary 

let activeElement = 0;
    document.getElementsByClassName("my-carousel-images")[activeElement].classList.add("active");
    