// dashboard.js

document.addEventListener("DOMContentLoaded", function () {
  // Grade Distribution Chart
  const gradeDistributionCtx = document
    .getElementById("gradeDistributionChart")
    .getContext("2d");
  new Chart(gradeDistributionCtx, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D", "F"],
      datasets: [
        {
          label: "Number of Students",
          data: [30, 45, 20, 10, 5],
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Subject Performance Chart
  const subjectPerformanceCtx = document
    .getElementById("subjectPerformanceChart")
    .getContext("2d");
  new Chart(subjectPerformanceCtx, {
    type: "radar",
    data: {
      labels: ["Java", "HTML", "CSS", "javascript", "C#"],
      datasets: [
        {
          label: "Average Score",
          data: [85, 78, 82, 75, 88],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          pointBackgroundColor: "rgba(54, 162, 235, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(54, 162, 235, 1)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: {
            display: false,
          },
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
    },
  });

  // Daily Engagement Chart
  const dailyEngagementCtx = document
    .getElementById("dailyEngagementChart")
    .getContext("2d");
  new Chart(dailyEngagementCtx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Average Engagement (minutes)",
          data: [45, 50, 60, 55, 70, 40, 30],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Resource Usage Chart
  const resourceUsageCtx = document
    .getElementById("resourceUsageChart")
    .getContext("2d");
  new Chart(resourceUsageCtx, {
    type: "pie",
    data: {
      labels: ["Videos", "Quizzes", "Readings", "Discussions", "Assignments"],
      datasets: [
        {
          data: [30, 20, 25, 15, 10],
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  });
});
