function clock() {
  let date = document.getElementById("date");
  let month = document.getElementById("month");
  let year = document.getElementById("year");
  let hours = document.getElementById("hour");
  let minute = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  const months = [
    "January",
    "February",
    "March",
    "Aprel",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  //  ! date

  let d =
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate();
  let mon = new Date().getMonth();
  let y = new Date().getFullYear();

  date.innerHTML = d;
  month.innerHTML = months[mon];
  year.innerHTML = y;

  //  * time

  let h =
    new Date().getHours() < 10
      ? "0" + new Date().getHours()
      : new Date().getHours();
  hours.innerHTML = h;
  let m =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();
  minute.innerHTML = m;
  let s =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();
  seconds.innerHTML = s;
}

var integral = setInterval(clock, 1000);
