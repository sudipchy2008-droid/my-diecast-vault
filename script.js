// Data: Tomar collection er car gulo ekhane add korbe
const diecastCars = [
    {
        id: 1,
        title: "Nissan Skyline GT-R (R34)",
        category: "hotwheels",
        brand: "Hot Wheels",
        scale: "1:64",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
        description: "Iconic Japanese tuner car in sleek blue metallic finish."
    },
    {
        id: 2,
        title: "Ferrari F40",
        category: "bburago",
        brand: "Bburago",
        scale: "1:24",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop",
        description: "Classic red Italian supercar with high precision opening doors."
    },
    {
        id: 3,
        title: "Porsche 911 GT3 RS",
        category: "cca",
        brand: "CCA",
        scale: "1:43",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600&auto=format&fit=crop",
        description: "Track-focused aerodynamics with detailed interior."
    },
    {
        id: 4,
        title: "Vintage Auto Poster Art",
        category: "posters",
        brand: "Posters & Art",
        scale: "Art",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop",
        description: "Minimalist vintage automotive artwork print."
    }
];

const carGrid = document.getElementById('carGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Function to render cars in the grid
function renderCars(cars) {
    carGrid.innerHTML = '';
    
    cars.forEach(car => {
        const cardHTML = `
            <div class="car-card">
                <div class="card-img-wrapper">
                    <img src="${car.image}" alt="${car.title}">
                    <span class="scale-tag">${car.scale}</span>
                </div>
                <div class="card-info">
                    <span class="brand-badge">${car.brand}</span>
                    <h3 class="car-title">${car.title}</h3>
                    <p class="car-desc">${car.description}</p>
                </div>
            </div>
        `;
        carGrid.innerHTML += cardHTML;
    });
}

// Filter Functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active class switch
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        if (category === 'all') {
            renderCars(diecastCars);
        } else {
            const filteredCars = diecastCars.filter(car => car.category === category);
            renderCars(filteredCars);
        }
    });
});

// Initial load
renderCars(diecastCars);