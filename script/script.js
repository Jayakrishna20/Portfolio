document.addEventListener("DOMContentLoaded", function () {
  // Get tabs and tab contents
  var tabs = document.querySelectorAll(".tab");
  var tabcontents = document.querySelectorAll(".tabcontent");

  // Add click event listener to each tab
  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and tab contents
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      tabcontents.forEach(function (tabcontent) {
        tabcontent.classList.remove("active");
      });

      // Add active class to clicked tab and corresponding tab content
      this.classList.add("active");
      tabcontents[index].classList.add("active");
    });
  });
});