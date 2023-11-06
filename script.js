/* global variable */
const progText = document.querySelectorAll(".progText");
const progress = document.querySelectorAll(".progress");

// Function to start the progress animations when the page loads
function startProgressAnimation() {
  for (let i = 0; i < progText.length; i++) {
    const target = parseInt(progText[i].dataset.count);
    animateProgress(i, target);
  }
}

// Function to animate progress
function animateProgress(index, target) {
  let count = 0;

  function updateCount() {
    if (count < target) {
      count++;
      progText[index].innerText = count;
      progress[index].style.top = `${100 - count}%`;
      setTimeout(updateCount, 50); // Count speed
    } else {
      progText[index].innerText = target + "%";
    }
  }

  updateCount();
}

// Initialize progress animation when the page loads
startProgressAnimation();
