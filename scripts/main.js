// TOday's Date JS Code
document.addEventListener("DOMContentLoaded", function () {
  let today = new Date();
  let options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  let formattedDate = today.toLocaleDateString("en-US", options);
  let finalDate = formattedDate.replace(
    /(\w{3}) (\w{3}) (\d{2}), (\d{4})/,
    "$1 , $2 $3 $4"
  );
  document.querySelector(".today-date").innerHTML += `<p>${finalDate}</p>`;
});
