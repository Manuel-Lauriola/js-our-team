const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


//dichiaro la funzione che includa le variabili prese dai singoli oggetti in una variabile del mio html
const generateCard = (member) => {
  const card = `<div class="card mb-3 col-4">
  <div class="row g-0 bg-black">
    <div class="col-md-4">
      <img src="./assets/${member.img}" class="img-fluid rounded-start" alt="#">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-light">${member.name}</h5>
        <p class="card-text text-light">${member.role}</p>
        <p class="card-text"><small class="text-body-secondary"><a href="#">${member.email}</a></small></p>
      </div>
    </div>
  </div>
</div>`
return card
}

//prendo dall'html la variabile dove inserirò le cards
const album = document.getElementById('album')

//ciclo l'array di oggetti in modo da assegnare i valori in ogni card
for (let i=0; i<teamMembers.length; i++) {
  let memberCard = generateCard(teamMembers[i])
  //le inserisco all'interno dell'album
  album.innerHTML += memberCard
}