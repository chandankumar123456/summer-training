function enrollNow() {
    alert("Enrollment process will start soon!"); // Replace this with actual logic
    window.location.href = "https://example.com/enroll"; // Replace with your actual enrollment link
}
function showCurriculum() {
    let curriculumSection = document.getElementById("curriculumSection");
    if (curriculumSection.classList.contains("hidden")) {
        curriculumSection.classList.remove("hidden");
    } else {
        curriculumSection.classList.add("hidden");
    }
}
function scrollToCurriculum() {
    document.getElementById("course").scrollIntoView({ behavior: "smooth" });
}
function smoothScroll(event, sectionId) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', function () {
    // Testimonial Slider
    const track = document.getElementById('testimonialTrack');
    const slides = track.children;
    const prevButton = document.getElementById('prevTestimonial');
    const nextButton = document.getElementById('nextTestimonial');
    let currentIndex = 0;

    // Set initial position
    positionSlides();

    // Event Listeners
    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
        positionSlides();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
        positionSlides();
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
        positionSlides();
    }, 5000);

    function positionSlides() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});