const menuItems = [
    { id: 1, name: "Espresso", category: "coffee", price: 3.50, desc: "Rich and strong." },
    { id: 2, name: "Latte", category: "coffee", price: 4.50, desc: "Creamy and smooth." },
    { id: 3, name: "Cappuccino", category: "coffee", price: 4.00, desc: "Frothy delight." },
    { id: 4, name: "Croissant", category: "pastry", price: 3.00, desc: "Buttery perfection." },
    { id: 5, name: "Muffin", category: "pastry", price: 3.25, desc: "Blueberry burst." },
    { id: 6, name: "Cold Brew", category: "coffee", price: 4.75, desc: "Chilled energy." }
];

document.addEventListener('DOMContentLoaded', () => {
    
    const menuGrid = document.getElementById('menu-grid');
    if (menuGrid) {
        checkUserStorage();
        renderMenu(menuItems);
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function renderMenu(items) {
    const menuGrid = document.getElementById('menu-grid');
    
    if (items.length === 0) {
        menuGrid.innerHTML = '<p>No items found.</p>';
        return;
    }

    const htmlString = items.map(item => `
        <article class="menu-item" data-id="${item.id}">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <span class="price">$${item.price.toFixed(2)}</span>
        </article>
    `).join('');

    menuGrid.innerHTML = htmlString;
}

function filterMenu(category) {
    if (category === 'all') {
        renderMenu(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

function handleFormSubmit(e) {
    e.preventDefault(); // Prevent actual page reload
    
    const nameInput = document.getElementById('name').value;
    const feedback = document.getElementById('form-feedback');

    if(nameInput) {
        localStorage.setItem('urbanBrewUser', nameInput);
        
        feedback.style.color = 'green';
        feedback.textContent = `Thanks, ${nameInput}! You've joined the club.`;
        
        e.target.reset();
    } else {
        feedback.style.color = 'red';
        feedback.textContent = 'Please enter your name.';
    }
}

function checkUserStorage() {
    const user = localStorage.getItem('urbanBrewUser');
    const welcomeDiv = document.getElementById('welcome-message');
    
    if (user && welcomeDiv) {
        welcomeDiv.innerHTML = `<p>Welcome back, <strong>${user}</strong>! Check out our specials.</p>`;
    }
}