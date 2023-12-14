document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('.progress');
    const percentageText = document.querySelector('.percentage');
  
    const totalTime = 50 * 100; // 15 seconds in milliseconds
    let currentTime = 0;
  
    const updateProgressBar = () => {
      const progressWidth = (currentTime / totalTime) * 1000;
      progressBar.style.width = `2000px`;
      const percentage = Math.floor((currentTime / totalTime) * 100);
      percentageText.textContent = `${percentage}%`;
  
      if (currentTime >= totalTime) {
        clearInterval(timer);
        window.location.href = './game.html'; // Redirect to homepage after loading
        // window.location.href = '#'; // Redirect to homepage after loading
      }
  
      currentTime += 100;
    };
  
    const timer = setInterval(updateProgressBar, 100);
  });