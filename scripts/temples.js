const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "December 15, 2019",
    area: 116642,
    imageUrl:
    "https://churchofjesuschrist.org/imgs/55f6c59ce8f9c093a9c689067f8674335de544e2/full/640%2C/0/default"
  },
  {
    templeName: "Bentonville Arkansas Temple",
    location: "Bentonville, Arkansas, United States",
    dedicated: "September 17, 2023",
    area: 116642,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/34410870d7d011ed8402eeeeac1ec672bdc0ce45/full/640%2C/0/default"
  },
  {
    templeName: "Belém Brazil Temple",
    location: "Belém, Para, Brazil",
    dedicated: "November 20, 2022",
    area: 116642,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/588d3a27e2b911ec94adeeeeac1e0a0694f432a0/full/640%2C/0/default"
  },
];

// 2. FUNÇÃO REUTILIZÁVEL PARA CRIAR CARDS
function createTempleCard(filteredTemples) {
    const container = document.querySelector("#temple-container");
    
    container.innerHTML = ""; 

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.className = "card";

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Size:</span> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        `;

        container.appendChild(card);
    });
}


const homeLink = document.querySelector(".Home");
const oldLink = document.querySelector(".Old");
const newLink = document.querySelector(".New");
const largeLink = document.querySelector(".Large");
const smallLink = document.querySelector(".Small");
const mainTitle = document.querySelector("main h2");

homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    mainTitle.textContent = "Home";
    createTempleCard(temples);
});

oldLink.addEventListener("click", (event) => {
    event.preventDefault();
    mainTitle.textContent = "Old Temples";
    
    const oldTemples = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year < 1900;
    });
    
    createTempleCard(oldTemples);
});

newLink.addEventListener("click", (event) => {
    event.preventDefault();
    mainTitle.textContent = "New Temples";
    
    const newTemples = temples.filter(temple => {
        const year = new Date(temple.dedicated).getFullYear();
        return year > 2000;
    });
    
    createTempleCard(newTemples);
});

largeLink.addEventListener("click", (event) => {
    event.preventDefault();
    mainTitle.textContent = "Large Temples";
    
    const largeTemples = temples.filter(temple => temple.area > 90000);
    
    createTempleCard(largeTemples);
});

smallLink.addEventListener("click", (event) => {
    event.preventDefault();
    mainTitle.textContent = "Small Temples";
    
    const smallTemples = temples.filter(temple => temple.area < 10000);
    
    createTempleCard(smallTemples);
});

createTempleCard(temples);