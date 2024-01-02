document.addEventListener("DOMContentLoaded", function () {
  const myDate = new Date();

  let myHours = myDate.getHours();
  let myMinutes = myDate.getMinutes();
  let mySeconds = myDate.getSeconds();

  setInterval(() => {
    mySeconds++;

    if (mySeconds === 60) {
      myMinutes++;
      mySeconds = 0;
    }

    if (myMinutes === 60) {
      myHours++;
      myMinutes = 0;
    }

    let hour = myHours % 12;

    document.querySelector(".hour").textContent = hour;
    document.querySelector(".minute").textContent = myMinutes;
    document.querySelector(".second").textContent = mySeconds;
  }, 1000);
});
