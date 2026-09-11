// Data List
const diecastCars = [
    {
        id: 1,
        title: "Nissan Skyline GT-R (R34)",
        category: "hotwheels",
        brand: "Hot Wheels Premium",
        scale: "1:64",
        year: "2023 Release",
        condition: "Mint in Box",
        material: "Die-cast Metal",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
        description: "Iconic Bayside Blue Japanese tuner legend featuring Real Riders rubber tires and fully detailed interior craftsmanship."
    },
    {
        id: 2,
        title: "Ferrari F40 Supercar",
        category: "bburago",
        brand: "Bburago Race Series",
        scale: "1:24",
        year: "2021 Release",
        condition: "Display Case",
        material: "Metal & Plastic",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop",
        description: "Classic Rossa Corsa red Ferrari F40 edition with fully opening engine bay doors and active front wheel steering system."
    },
    {
        id: 3,
        title: "Porsche 911 GT3 RS",
        category: "cca",
        brand: "CCA Racing Spec",
        scale: "1:43",
        year: "2024 Edition",
        condition: "Brand New",
        material: "Zinc Alloy",
        image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop",
        description: "Track-focused track monster in Weissach Package trims with clear carbon rear wing details and high precision brake calipers."
    },
    {
        id: 4,
        title: "Vintage Racing Heritage Art",
        category: "posters",
        brand: "Art & Posters",
        scale: "A3 Canvas",
        year: "Collector Edition",
        condition: "Framed",
        material: "Matte Print",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
        description: "Minimalist vintage automotive artwork capturing classic Le Mans endurance racing history."
    }
];

const carGrid = document.getElementById('carGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Modal Elements
const modal = document.getElementById('carModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalScale = document.getElementById('modalScale');
const modalBrand = document.getElementById('modalBrand');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalYear = document.getElementById('modalYear');
const modalCondition = document.getElementById('modalCondition');
const modalMaterial = document.getElementById('modalMaterial');

// Render Cars Grid
function renderCars(cars) {
    carGrid.innerHTML = '';
    
    cars.forEach(car => {
        const cardHTML = `
            <div class="car-card" onclick="openModal(${car.id})">
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

// Open Modal Pop-up
function openModal(id) {
    const car = diecastCars.find(item => item.id === id);
    if (!car) return;

    modalImg.src = car.image;
    modalScale.innerText = car.scale;
    modalBrand.innerText = car.brand;
    modalTitle.innerText = car.title;
    modalDesc.innerText = car.description;
    modalYear.innerText = car.year;
    modalCondition.innerText = car.condition;
    modalMaterial.innerText = car.material;

    modal.classList.add('active');
}

// Close Modal
modalClose.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// Category Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        if (category === 'all') {
            renderCars(diecastCars);
        } else {
            renderCars(diecastCars.filter(car => car.category === category));
        }
    });
});

// Initial Render
renderCars(diecastCars);

/* --- High-Density Animated Particles --- */
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.alpha = Math.random() * 0.6 + 0.3;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = `rgba(255, 51, 68, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    // ঘন পার্টিকেলের সংখ্যা বাড়ানো হলো (Density Multiplier)
    const count = Math.floor((canvas.width * canvas.height) / 5500);
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // কানেক্টিং লাইট লাইন আঁকার ব্যবস্থা
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 90) {
                ctx.strokeStyle = `rgba(255, 51, 68, ${0.15 - dist / 600})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();