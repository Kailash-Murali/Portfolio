document.addEventListener("DOMContentLoaded", function() {
    const card = document.getElementById("intro-card");
    const overlay = document.getElementById("transition-overlay");
    const nightSky = document.getElementById("night-sky");
    
    // Fix the mismatch: Change 'transition-overlay' to 'transition-active'
    card.addEventListener("click", function() {
      // Activate the transition
      overlay.classList.add("transition-active"); // Fixed class name!
      
      // Show night sky after transition completes
      setTimeout(function() {
        nightSky.classList.remove("hidden");
        setTimeout(function() {
          nightSky.classList.add("visible");
        }, 100);
      }, 100); // Match the transition duration (2.5s)
    });
    
    // Mouse movement parallax effect
    document.addEventListener("mousemove", function(e) {
      if (nightSky.classList.contains("visible")) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const starsSmall = document.querySelector(".stars-small");
        const starsMedium = document.querySelector(".stars-medium");
        const starsLarge = document.querySelector(".stars-large");
        const nebula1 = document.querySelector(".nebula-1");
        const nebula2 = document.querySelector(".nebula-2");
        
        // Different parallax speeds for different elements
        starsSmall.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
        starsMedium.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
        starsLarge.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
        nebula1.style.transform = `translate(${mouseX * -40}px, ${mouseY * -40}px)`;
        nebula2.style.transform = `translate(${mouseX * -60}px, ${mouseY * -60}px)`;
      }
    });
  }); // This closing bracket and parenthesis were missing
  