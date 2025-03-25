// JS for Portfolio 
document.addEventListener("DOMContentLoaded", function () {

  const introCard = document.getElementById("intro-card");
  const overlay = document.getElementById("transition-overlay");
  const secondCard = document.getElementById("second-card");
  const starCircles = document.getElementById("star-circles");
  const circles = document.querySelectorAll(".circle");
  
  // Track hover state and timeout
  let hoverTimeout;
  let isHoveringAnyCard = false;
  let lastTap = 0; // For double-tap detection

  // Hide second card
  if (secondCard) {
    secondCard.style.opacity = "0";
    secondCard.style.pointerEvents = "none";
  }

  // Welcome card handler
  introCard.addEventListener("click", function () {
    // Activate the transition
    overlay.classList.add("transition-active");
    overlay.classList.remove("transition-reverse");
    // Show second card after transition
    setTimeout(function () {
      if (secondCard) {
        secondCard.style.opacity = "1";
        secondCard.style.pointerEvents = "auto";
      }
    }, 2500); 
  });

  // Single-click handler for second card to go back
  secondCard.addEventListener("click", function() {
    // Single click now triggers the reverse transition
    reverseTransition();
  });

  // Function to reverse the transition
  function reverseTransition() {
    // Hide mini cards first
    starCircles.style.opacity = "0";
    circles.forEach(circle => {
      circle.style.transform = "scale(0)";
      circle.style.opacity = "0";
    });
    
    // Hide second card
    secondCard.style.opacity = "0";
    secondCard.style.pointerEvents = "none";
    
    // Reverse transition class to overlay
    overlay.classList.remove("transition-active");
    overlay.classList.add("transition-reverse");
    
    // After reverse animation completes, hide overlay and show intro card
    setTimeout(function() {
      overlay.style.display = "none";
      overlay.classList.remove("transition-reverse");
      
      // Reset intro card
      introCard.style.display = "flex";
      introCard.style.opacity = "1";
      introCard.style.pointerEvents = "auto";
    }, 2500);
  }

  // Show mini cards when hovering over second card
  secondCard.addEventListener("mouseenter", function () {
    isHoveringAnyCard = true;
    clearTimeout(hoverTimeout);
    showMiniCards();
  });

  secondCard.addEventListener("mouseleave", function() {
    isHoveringAnyCard = false;
    // Start the hiding timeout
    startHideTimeout();
  });

  // Event listeners to all mini cards
  circles.forEach(circle => {
    circle.addEventListener("mouseenter", function() {
      isHoveringAnyCard = true;
      clearTimeout(hoverTimeout);
    });
    
    circle.addEventListener("mouseleave", function() {
      isHoveringAnyCard = false;
      startHideTimeout();
    });
  });

  // Function to show mini cards
  function showMiniCards() {
    starCircles.style.opacity = "1";
    circles.forEach((circle, index) => {
      setTimeout(() => {
        circle.style.transform = "scale(1)";
        circle.style.opacity = "1";
      }, 100 * (index + 1));
    });
  }

  // Function to start the hide timeout
  function startHideTimeout() {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      // Only hide if we're not hovering any card
      if (!isHoveringAnyCard) {
        // Fade out the entire star-circles container
        starCircles.style.opacity = "0";
        
        // Scale down and fade out each circle with a sequential delay
        circles.forEach((circle, index) => {
          setTimeout(() => {
            circle.style.transform = "scale(0)";
            circle.style.opacity = "0";
          }, 100 * (index + 1));
        });
      }
    }, 2000);
  }

  // Dark Mode handler
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const modeIcon = darkModeToggle.querySelector(".mode-icon");
  
  // Check for saved user preference
  const savedDarkMode = localStorage.getItem("darkMode");
  
  // Apply dark mode if previously saved
  if (savedDarkMode === "enabled") {
    document.body.classList.add("dark-mode");
    modeIcon.textContent = "☯︎"; // Sun icon for dark mode
  }
  
  // Handle dark mode toggle click
  darkModeToggle.addEventListener("click", function() {
    if (document.body.classList.contains("dark-mode")) {
      // Switch to light mode
      document.body.classList.remove("dark-mode");
      modeIcon.textContent = "☯︎"; // Yang icon for dark mode
      localStorage.setItem("darkMode", "disabled");
    } else {
      // Switch to dark mode
      document.body.classList.add("dark-mode");
      modeIcon.textContent = "☯︎"; // Yin icon for light mode
      localStorage.setItem("darkMode", "enabled");
    }
  });

});

