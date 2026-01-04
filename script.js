window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    // Wait 1.5 seconds before starting fade-out
    setTimeout(() => {
        loader.style.opacity = "0";

        // After fade-out duration (0.5s), hide completely
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // match CSS transition
    }, 1000); // loader stays visible for 1.5 seconds
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    formData.append("subject", "New Bridal Makeup Inquiry");
    formData.append("from_name", "Vibha Bridal Makeover");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            alert("Thank you! Your inquiry has been sent.");
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Network error. Please try again later.");
    }
});
function sendQuote() {
  const event = document.getElementById("qt-event").value;
  const city = document.getElementById("qt-city").value;
  const date = document.getElementById("qt-date").value;

  if (!event || !city || !date) {
    alert("Please fill all fields");
    return;
  }

  const msg = `Hi Vibha Bridal Makeover,%0A
I would like a quote.%0A
Event: ${event}%0A
City: ${city}%0A
Date: ${date}`;

  window.open(
    `https://wa.me/918848208556?text=${msg}`,
    "_blank"
  );
}
document.addEventListener("DOMContentLoaded", () => {

  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  if (!mobileMenu || !navLinks) return;

  mobileMenu.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");
    e.stopPropagation(); // Prevent the click from bubbling up to the document
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });

});


