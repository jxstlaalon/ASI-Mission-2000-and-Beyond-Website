// 1. Initialize Hero Carousel (Dynamic Injection)
const heroImages = [
    "/img/Barbados.jpg",
     "/img/Belize.jpg",
    "/img/Trinidad.jpg",
    "/img/grouppic2.jpg",
    "/img/grouppic.jpg",
    "/img/Columbia.jpg"
];

const heroContainer = document.getElementById("hero-slides");

// Inject slides ONLY if container exists
if (heroContainer) {
    heroImages.forEach(img => {
        heroContainer.innerHTML += `
        <div class="swiper-slide">
            <div class="carousel-slide" style="background-image:url('${img}')">
                <div class="carousel-content">
                    <h1>ASI Mission 2000 and Beyond</h1>
                    <p>Transforming lives through youth-led mission projects</p>
                    <a href="about.html" class="learn-more-btn">Learn More</a>
                </div>
            </div>
        </div>`;
    });

    // Start Swiper AFTER slides are injected
    const heroSwiper = new Swiper('.hero-carousel', {
        loop: true,
        effect: 'fade', // Adds a nice fade effect
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// 2. Initialize Testimonials Swiper
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    loop: true,
    slidesPerView: 1, // Mobile default
    spaceBetween: 30,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2, // Tablet
        },
        992: {
            slidesPerView: 3, // Desktop
        }
    }
});

// 3. Hamburger Menu Logic
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.header-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class on the menu
            navMenu.classList.toggle('active');

            // Optional: Toggle icon from menu to 'x'
            const icon = hamburger.querySelector('box-icon');
            if (navMenu.classList.contains('active')) {
                icon.setAttribute('name', 'x');
            } else {
                icon.setAttribute('name', 'menu');
            }
        });
    }
});

// 4. Animate Statistics Counter
function animateCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    let target = +stat.dataset.count;
                    let current = 0;

                    let interval = setInterval(() => {
                        current++;
                        stat.textContent = current.toLocaleString();

                        if (current >= target) clearInterval(interval);
                    }, 2000 / target);
                });

                observer.disconnect(); // Run once
            }
        });
    }, { threshold: 0.2 }); 

    observer.observe(document.querySelector('.stats-section'));
}
animateCounter();


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkScroll() {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection && isInViewport(statsSection)) {
        startCounting();
        window.removeEventListener('scroll', checkScroll);
    }
}

checkScroll();
window.addEventListener('scroll', checkScroll);
setTimeout(checkScroll, 500);


// Start animations
animateCounter();

// 5. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});