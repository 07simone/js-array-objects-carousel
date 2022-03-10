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
    
    const myCarouselImage = document.querySelector(".my-carousel-images")
    myCarouselImage.innerHTML =`<img class ="img-fluid" src="img/${teamMarvel[1].image}" alt"">`
    
    const myThumbnails = document.querySelector(".my-thumbnails");
    for(let i = 0; i < teamMarvel.length; i++){
        myThumbnails.innerHTML += `
        <div class="my-jumbo">
        <img class ="img-fluid" src="img/${teamMarvel[i].image}">
        
        </div>`
    }

   /*  const PrincipalElement = document.querySelector(".my-container")
    PrincipalElement.innerHTML = Principal

    const SecondaryElement = document.querySelector(".my-jumbo")
    SecondaryElement.innerHTML += Secondary 

    let activeElement = 0;
    document.getElementsByClassName("my-container")[activeElement].classList.add("active"); */
    