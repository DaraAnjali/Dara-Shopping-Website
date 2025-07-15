const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}


//blog

document.addEventListener("DOMContentLoaded", function() {
    console.log("Blog page loaded successfully!");

    let currentPage = 1;
    const totalPages = 3; // Example: Total 3 pages

    function updatePagination() {
        document.getElementById("pageNumber").innerText = `Page ${currentPage} of ${totalPages}`;
    }

    document.getElementById("prevPage").addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    document.getElementById("nextPage").addEventListener("click", function() {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });

    updatePagination();
});

//about
document.addEventListener("DOMContentLoaded", function() {
    console.log("About Page Loaded Successfully!");

    // Toggle FAQ Answers
    document.querySelectorAll(".faq-box h3").forEach(faqHeader => {
        faqHeader.addEventListener("click", function() {
            let answer = this.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

    // Rotate Testimonials
    let testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showTestimonial() {
        testimonials.forEach(testimonial => testimonial.style.display = "none");
        testimonials[index].style.display = "block";
        index = (index + 1) % testimonials.length;
    }

    showTestimonial();
    setInterval(showTestimonial, 3000);
});

