(function () {
  "use strict";
  const countdown = document.querySelector(".countdown");
  const output = countdown.innerHTML;

  const countDownDate = function () {
    const targetDate = new Date(countdown.dataset.count);
    const now = new Date();

    // Calculate the time difference in milliseconds
    const timeleft = targetDate - now;

    // Convert milliseconds to seconds
    const seconds = Math.floor(timeleft / 1000);

    // Calculate days, hours, minutes
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    // Update the countdown display
    countdown.innerHTML = output
      .replace("%d", days)
      .replace("%h", hours)
      .replace("%m", minutes)
      .replace("%s", seconds % 60);
  };

  countDownDate();
  setInterval(countDownDate, 1000);
})();
