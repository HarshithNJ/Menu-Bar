document.getElementById("Contactbtn").addEventListener("click", function() {
    alert("Error Detected! Try Again Later");
});

document.getElementById("exploreBtn").addEventListener("click", function() {
    alert("Welcome, Let's Continue our journey in the everlasting Technological Impacts!");
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseover', function() {
      this.querySelectorAll('.dropdown-content1').forEach(subMenu => {
        subMenu.style.display = 'block';
      });
    });
  
    dropdown.addEventListener('mouseleave', function() {
      this.querySelectorAll('.dropdown-content1').forEach(subMenu => {
        subMenu.style.display = 'none';
      });
    });
  });