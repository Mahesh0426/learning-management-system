document.addEventListener("DOMContentLoaded", function () {
  // Navigation functionality
  const navLinks = document.querySelectorAll(".profile-nav a");
  const sections = document.querySelectorAll(".profile-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);

      // Update active nav link
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");

      // Show target section, hide others
      sections.forEach((section) => {
        if (section.id === targetId) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    });
  });

  // Personal Information form submission
  const personalInfoForm = document.querySelector("#personal-info form");
  personalInfoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("Personal information updated successfully!");
  });

  // Add New Class button
  const addClassButton = document.querySelector("#class-management button");
  addClassButton.addEventListener("click", function () {
    const className = prompt("Enter new class name:");
    if (className) {
      const classList = document.querySelector(".class-list");
      const newClass = document.createElement("li");
      newClass.textContent = className;
      classList.appendChild(newClass);
    }
  });

  // Learning Goals form submission
  const learningGoalsForm = document.querySelector("#learning-goals form");
  learningGoalsForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const goal = document.getElementById("class-goal").value;
    const deadline = document.getElementById("deadline").value;
    if (goal && deadline) {
      const goalList = document.querySelector(".goal-list");
      const newGoal = document.createElement("li");
      newGoal.textContent = `${goal} by ${deadline}`;
      goalList.appendChild(newGoal);
      this.reset();
    }
  });

  // You can add more functionality here, such as:
  // - Fetching and displaying student data
  // - Implementing the chart in the student data section
  // - Adding edit/delete functionality for classes and goals
});
