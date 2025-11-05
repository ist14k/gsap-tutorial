import gsap from "gsap";

const tabRow = document.querySelector(".tab-row");
const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");

const updateIndicator = (element) => {
  const tabBounds = element.getBoundingClientRect();  // Position of the clicked tab
  const rowBounds = tabRow.getBoundingClientRect();   // Position of the tab container

  const offset = tabBounds.left - rowBounds.left;  // Relative position within tabRow
  const width = tabBounds.width; // Get the width of the tab

  gsap.to(indicator, {
    duration: 0.5,
    ease: "back.out(1.7)",
    left: offset,
    width: width,
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach(t => t.classList.remove("active"));
    e.currentTarget.classList.add("active");
    updateIndicator(e.currentTarget);
  });
});

// Initialize the indicator on the first tab
updateIndicator(tabs[0]);
