document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar a"); // Select anchor tags within #navbar
  
    navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior (jumping to top)
  
        const targetId = this.getAttribute("href").slice(1); // Extract ID from href (remove leading '#')
        const targetSection = document.querySelector(targetId); // Find the section element
  
        if (targetSection) {
          const offsetTop = targetSection.offsetTop; // Get the offset from the top
  
          // Improved scrolling with error handling:
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          }).catch(error => {
            console.error("Scrolling error:", error); // Log errors in case of issues
          });
        } else {
          console.warn("Target section not found:", targetId); // Log a warning if section not found
        }
      });
    });
  });
  