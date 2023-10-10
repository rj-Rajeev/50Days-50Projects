// MouseFollower


let arrow = document.querySelector(".mouseFollower");

function dotMouseFollower(){
  document.addEventListener("mousemove", function(dets){
      arrow.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px`
  })
}
dotMouseFollower();













document.querySelectorAll('.sidenav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



// ----------------------------------------Active NavIcons---------------------------------

// Get all navigation links
const navLinks = document.querySelectorAll('.sidenav a');

// Function to highlight the active icon
function highlightActiveIcon() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Define an array to map sections to their related icons
  const sectionToIconMap = [
    { section: 'sec1', icon: 'ri-home-7-fill' },
    { section: 'sec2', icon: 'ri-contacts-fill' },
    { section: 'sec3', icon: 'ri-linkedin-box-fill' },
    { section: 'sec4', icon: 'ri-github-fill' }
  ];

  // Loop through each section and its corresponding link
  navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Check if the section is in the viewport
    if (
      targetSection &&
      scrollPosition >= targetSection.offsetTop &&
      scrollPosition < targetSection.offsetTop + targetSection.offsetHeight
    ) {
      // Remove any existing active class from all links
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });

      // Add an 'active' class to the current link
      link.classList.add('active');

      // Find the corresponding icon for the active section
      const icon = sectionToIconMap.find(item => item.section === targetId);

      // Change the color of the icon (assuming you have a class for icon color)
      document.querySelector(`.${icon.icon}`).classList.add('active-icon');
    } else {
      // If the section is not in the viewport, remove the 'active' class
      link.classList.remove('active');
    }
  });
}

// Attach the scroll event listener to highlight the active icon
window.addEventListener('scroll', highlightActiveIcon);

// Initial call to highlight the active icon when the page loads
highlightActiveIcon();



