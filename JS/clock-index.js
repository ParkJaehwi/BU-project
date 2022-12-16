const clock = document.querySelector("#clock-index-time");
const cal = document.querySelector("#cal");
const monthEng = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const year = date.getFullYear();
  const month = parseInt(("0" + date.getMonth()).slice(-2));
  const day = ("0" + date.getDate()).slice(-2);
  console.log(month);
  clock.innerText = ` ${hours} : ${minutes} `;
  cal.innerText = ` ${year}. ${month + 1}. ${day}`;
}
getClock();
setInterval(getClock, 1000);
