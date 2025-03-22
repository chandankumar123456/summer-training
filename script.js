// Curriculum section toggle
function showCurriculum() {
    const curriculumSection = document.getElementById('curriculumSection');
    if (curriculumSection) {
        curriculumSection.classList.toggle('hidden');
        const viewCurriculumBtn = document.getElementById('viewCurriculumBtn');
        if (viewCurriculumBtn) {
            viewCurriculumBtn.textContent = curriculumSection.classList.contains('hidden') ? 'View Full Curriculum' : 'Hide Curriculum';
        }
    }
}
// Smooth scroll function
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

// Curriculum section toggle
function showCurriculum() {
    const curriculumSection = document.getElementById('curriculumSection');
    if (curriculumSection) {
        curriculumSection.classList.toggle('hidden');
        const viewCurriculumBtn = document.getElementById('viewCurriculumBtn');
        if (viewCurriculumBtn) {
            viewCurriculumBtn.textContent = curriculumSection.classList.contains('hidden') ? 'View Full Curriculum' : 'Hide Curriculum';
        }
    }
}

// Enroll now function
function enrollNow() {
    window.location.href = "https://forms.gle/eC2u1RQGGxV7UHYY7";
}

// Scroll to curriculum section
function scrollToCurriculum() {
    const courseSection = document.getElementById('course');
    if (courseSection) {
        window.scrollTo({
            top: courseSection.offsetTop - 80,
            behavior: 'smooth'
        });

        // Show curriculum if hidden
        const curriculumSection = document.getElementById('curriculumSection');
        if (curriculumSection && curriculumSection.classList.contains('hidden')) {
            setTimeout(function () {
                showCurriculum();
            }, 500);
        }
    }
}
function positionSlides() {
    const track = document.getElementById('testimonialTrack');
    track.style.transition = "transform 0.6s ease-in-out"; // Ensure smooth transition
    track.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
}


document.addEventListener('DOMContentLoaded', function () {



    const track = document.getElementById('testimonialTrack');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.getElementById('prevTestimonial');
    const nextButton = document.getElementById('nextTestimonial');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const visibleCount = window.innerWidth < 768 ? 1 : 3;
    

    function moveSlides() {
        const shiftPercentage = currentIndex * (100 / visibleCount);
        track.style.transition = "transform 0.6s ease-in-out";
        track.style.transform = `translateX(-${shiftPercentage}%)`;
    }

    // Auto-scroll function
    function startAutoScroll() {
        return setInterval(() => {
            // If currentIndex reaches the last complete set, reset to 0
            if (currentIndex >= totalSlides - visibleCount) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            moveSlides();
        }, 5000);
    }

    // Start auto-scrolling
    let autoScroll = startAutoScroll();

    // Button navigation
    prevButton.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = totalSlides - visibleCount;
        } else {
            currentIndex--;
        }
        moveSlides();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex >= totalSlides - visibleCount) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        moveSlides();
    });

    // Stop auto-scroll when hovered
    track.addEventListener('mouseenter', () => clearInterval(autoScroll));
    track.addEventListener('mouseleave', () => autoScroll = startAutoScroll());


    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Contact Us button functionality
    const contactUsBtn = document.getElementById('contactUsBtn');
    const mobileContactBtn = document.getElementById('mobileContactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');

    if (contactUsBtn && contactModal && closeModal) {
        contactUsBtn.addEventListener('click', function () {
            contactModal.classList.remove('hidden');
        });

        if (mobileContactBtn) {
            mobileContactBtn.addEventListener('click', function () {
                contactModal.classList.remove('hidden');
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        }

        closeModal.addEventListener('click', function () {
            contactModal.classList.add('hidden');
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', function (event) {
            if (event.target === contactModal) {
                contactModal.classList.add('hidden');
            }
        });
    }

    // View curriculum button functionality
    const viewCurriculumBtn = document.getElementById('viewCurriculumBtn');
    if (viewCurriculumBtn) {
        viewCurriculumBtn.addEventListener('click', showCurriculum);
    }

    // Enroll now button functionality
    const enrollBtns = document.querySelectorAll('.enroll-btn');
    enrollBtns.forEach(function (btn) {
        btn.addEventListener('click', enrollNow);
    });

    // Navigation link smooth scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(e, targetId);
        });
    });

    // Initialize any sliders or carousels if needed
    // Example: initializeTestimonialSlider();
});

// function enrollNow() {
//     alert("Enrollment process will start soon!"); // Replace this with actual logic
//     window.location.href = "https://example.com/enroll"; // Replace with your actual enrollment link
// }
// function showCurriculum() {
//     let curriculumSection = document.getElementById("curriculumSection");
//     if (curriculumSection.classList.contains("hidden")) {
//         curriculumSection.classList.remove("hidden");
//     } else {
//         curriculumSection.classList.add("hidden");
//     }
// }
// function scrollToCurriculum() {
//     document.getElementById("course").scrollIntoView({ behavior: "smooth" });
// }
// function smoothScroll(event, sectionId) {
//     event.preventDefault(); // Prevent default anchor behavior
//     document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     // Testimonial Slider
//     const track = document.getElementById('testimonialTrack');
//     const slides = track.children;
//     const prevButton = document.getElementById('prevTestimonial');
//     const nextButton = document.getElementById('nextTestimonial');
//     let currentIndex = 0;

//     // Set initial position
//     positionSlides();

//     // Event Listeners
//     prevButton.addEventListener('click', () => {
//         currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
//         positionSlides();
//     });

//     nextButton.addEventListener('click', () => {
//         currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
//         positionSlides();
//     });

//     // Auto slide every 5 seconds
//     setInterval(() => {
//         currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
//         positionSlides();
//     }, 5000);

//     function positionSlides() {
//         track.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }
// });

