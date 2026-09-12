// Diecast Collection Data
const diecastCars = [
    {
        id: 1,
        title: "Mercedes-AMG F1 W16 E Performance (No. 12 - Andrea Kimi Antonelli)",
        category: "bburago",
        brand: "Bburago / Formula 1",
        scale: "1:43",
        year: "2025 Season / F1 Grand Prix Series",
        condition: "Mint / Brand New in Box",
        material: "Die-cast Metal with Plastic & Rubber Components",
        color: "Silver & Black Gradient with Petronas Emerald Green Accents",
        images: [
            "https://hobbycenterbd.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-03-03-at-11.14.00-1.jpeg",
            "https://hobbycenterbd.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-03-03-at-11.14.00-2-300x300.jpeg"
        ],
        description: "• Driver Car No. 12: Represents the debut Formula 1 race car of Italian driver Andrea Kimi Antonelli.\n• Aerodynamic Design: Detailed ground-effect aerodynamics, finely crafted front and rear wings, and an accurate Halo safety system.\n• Livery & Sponsor Decals: Iconic Silver Arrow and matte black color scheme featuring high-precision Petronas, INEOS, AMD, and official team sponsor logos.\n• Real Rubber Tires: Replica Pirelli racing tires with accurate wheel rim designs and detailing."
    },
    {
        id: 2,
        title: "Oracle Red Bull Racing RB21 Special White Livery (No. 1 - Max Verstappen)",
        category: "bburago",
        brand: "Bburago / Formula 1",
        scale: "1:43",
        year: "2025 Season / F1 Special Edition",
        condition: "Mint / Brand New in Box",
        material: "Die-cast Metal with Plastic & Rubber Components",
        color: "Championship White & Red (Honda Tribute Livery)",
        images: [
            "https://hobbycenterbd.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-03-03-at-11.14.00.jpeg"
        ],
        description: "• Car No. 1: Features car number 1, belonging to multi-time World Champion Max Verstappen.\n• Special Tribute Livery: One-off white and red livery honoring Honda and the historic 1965 Honda RA272 F1 car.\n• Aerodynamic & Safety Detail: Features accurate 2025 ground-effect floor detailing, intricate front/rear wing elements, and a halo safety ring.\n• Sponsor Decals: Precise placement of Honda 'H' branding, Oracle, Red Bull, and team sponsor logos on a matte white finish.\n• Real Rubber Tires: High-detail Pirelli racing slicks mounted on authentic wheel rims."
    },
    {
        id: 3,
        title: "Porsche 911 GT3 R #77 AO Racing \"Rexy / Spike\" (IMSA Petit Le Mans)",
        category: "minigt",
        brand: "Mini GT",
        scale: "1:64",
        year: "2025 Season / IMSA Endurance Series Special Edition",
        condition: "Mint / Brand New in Box",
        material: "Die-cast Metal with Plastic & Rubber Components",
        color: "Bright Green (\"Rexy\" T-Rex Livery) / Special Skeleton Livery",
        images: [
            "https://minigt.tsm-models.com/upload/picfile_list/588d0343f494b010c56a66e903d8449720260830005036166.JPG",
            "https://minigt.tsm-models.com/upload/picfile_list/1157a337f7c556c79f87841e4b32454220260106205322244.JPG",
            "https://minigt.tsm-models.com/upload/picfile_list/f5b9c5a4251436e7bd5d4fc5b111c93920260106205322247.JPG"
        ],
        description: "• Iconic Fan-Favorite Livery: Features the famous AO Racing \"Rexy\" T-Rex design complete with dinosaur sharp teeth on the front bumper and eye decals above the headlights.\n• Car #77 GTD Pro Spec: Features accurate IMSA GTD Pro class red number panels, windshield banners, and official IMSA partner decals.\n• Aggressive Aerodynamics: Includes precision-molded swan-neck rear wing, widebody GT3 fender vents, front dive planes, and rear diffuser.\n• Authentic Race Detailing: Equipped with high-detail Michelin racing slicks, detailed brake discs behind custom rims, and authentic race cockpit roll-cage structure."
    },
    {
        id: 4,
        title: "McLaren F1 MCL39 (No. 4 - Lando Norris)",
        category: "bburago",
        brand: "Bburago / Formula 1",
        scale: "1:43",
        year: "2025 Season / Bburago F1 Racing Series",
        condition: "Mint / Brand New in Box",
        material: "Die-cast Metal Chassis & Body with Plastic & Rubber Components",
        color: "Signature Papaya Orange & Anthracite Black",
        images: [
            "https://www.thewarehouse.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-twl-master-catalog/default/dw794c9806/images/hi-res/D7/01/R3054769_30.jpg?sw=765&sh=765",
            "https://www.thewarehouse.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-twl-master-catalog/default/dw6546f722/images/hi-res/D7/01/R3054769_41.jpg?sw=765&sh=765",
            "https://www.thewarehouse.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-twl-master-catalog/default/dw9d299b7c/images/hi-res/D7/01/R3054769_40.jpg?sw=765&sh=765"
        ],
        description: "• Driver Car No. 4: Features car number 4 belonging to British Formula 1 driver Lando Norris.\n• Official Licensed Livery: Precision tampo-printed McLaren livery with official sponsor decals including OKX, Mastercard, Google Chrome, and Android branding.\n• Detailed Aerodynamics: Ground-effect floor design, intricate front/rear wings, sidepod inlets, and Halo safety structure.\n• Authentic Cockpit & Helmet Detail: Replicated cockpit cell with detailed steering wheel and miniature helmet graphics.\n• Real Rubber Tires: Pirelli replica racing tires mounted on accurate multi-spoke wheel rims."
    },
    {
        id: 5,
        title: "LB★WORKS Lamborghini Huracán GT \"RONIN\" Limited Edition",
        category: "minigt",
        brand: "Mini GT (TSM Model) / Liberty Walk Collection",
        scale: "1:64",
        year: "Mini GT Limited Edition Series",
        condition: "Mint / Brand New in Box (Blister Pack or Paper Box)",
        material: "Die-cast Metal Chassis & Body with Plastic & Rubber Components",
        color: "Gray Metallic with Gloss Black & Crimson Red Graphics",
        images: [
            "https://minigt.tsm-models.com/upload/picfile_list/9a4f18c8e49232ca265471b276eab2ea20251214234834896.JPG",
            "https://minigt.tsm-models.com/upload/picfile_list/6e70e309fd589ecb1c3bbe009df0d19320251214234834901.JPG",
            "https://minigt.tsm-models.com/upload/picfile_list/da848c9e74269bb41934ea3d662c478c20251214234834904.JPG",
            "https://minigt.tsm-models.com/upload/picfile_list/ac3ac903af3d8a276a2e0feb1cfe8f3520260830003656949.JPG"
        ],
        description: "• Exclusive \"RONIN\" Livery: Distinctive custom graphic wrap featuring metallic gray base paint paired with aggressive black panels, red accents, and specialized tuner branding.\n• Liberty Walk Widebody Styling: High-precision casting showcasing LB★WORKS bolt-on wide fender flares, prominent front splitter, side air-diffusers, and a massive GT rear wing.\n• Premium Metal-on-Metal Construction: Full metal chassis and die-cast body structure delivering authentic weight and durability.\n• Real Rubber Tires & Custom Wheels: Deep-dish blacked-out racing rims fitted with real treaded rubber tires for smooth rolling and realism.\n• Soft Rubber Mirrors: Signature Mini GT flexible side mirrors designed to absorb light impacts without breaking."
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

let imageSliders = [];

// Render Cars Grid
function renderCars(cars) {
    imageSliders.forEach(interval => clearInterval(interval));
    imageSliders = [];

    carGrid.innerHTML = '';
    
    if (cars.length === 0) {
        carGrid.innerHTML = `<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1; padding: 2rem;">No cars found in this category.</p>`;
        return;
    }

    cars.forEach(car => {
        const primaryImage = car.images && car.images.length > 0 ? car.images[0] : '';
        
        const cardHTML = `
            <div class="car-card" onclick="openModal(${car.id})">
                <div class="card-img-wrapper">
                    <img id="card-img-${car.id}" src="${primaryImage}" alt="${car.title}">
                    <span class="scale-tag">${car.scale}</span>
                </div>
                <div class="card-info">
                    <span class="brand-badge">${car.brand}</span>
                    <h3 class="car-title">${car.title}</h3>
                    <p class="car-desc">${car.description.replace(/\n/g, '<br>')}</p>
                </div>
            </div>
        `;
        carGrid.innerHTML += cardHTML;
    });

    // Auto Image Switcher Loop
    cars.forEach(car => {
        if (car.images && car.images.length > 1) {
            let index = 0;
            const imgElement = document.getElementById(`card-img-${car.id}`);

            const slider = setInterval(() => {
                if (imgElement) {
                    imgElement.style.opacity = '0.3';
                    setTimeout(() => {
                        index = (index + 1) % car.images.length;
                        imgElement.src = car.images[index];
                        imgElement.style.opacity = '1';
                    }, 300);
                }
            }, 3000);

            imageSliders.push(slider);
        }
    });
}

// Open Modal Pop-up
function openModal(id) {
    const car = diecastCars.find(item => item.id === id);
    if (!car) return;

    modalImg.src = car.images[0];
    modalScale.innerText = car.scale;
    modalBrand.innerText = car.brand;
    modalTitle.innerText = car.title;
    modalDesc.innerHTML = car.description.replace(/\n/g, '<br>');
    modalYear.innerText = car.year;
    modalCondition.innerText = car.condition;
    modalMaterial.innerText = car.material;

    // Modal Image Click Switcher
    let currentImgIndex = 0;
    modalImg.onclick = () => {
        if (car.images && car.images.length > 1) {
            modalImg.style.opacity = '0.3';
            setTimeout(() => {
                currentImgIndex = (currentImgIndex + 1) % car.images.length;
                modalImg.src = car.images[currentImgIndex];
                modalImg.style.opacity = '1';
            }, 200);
        }
    };

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
    const count = Math.floor((canvas.width * canvas.height) / 5500);
    for (i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
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