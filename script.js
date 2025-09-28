// 💗 Heart Icon functionality

const favCount = document.getElementById("fav-count");
let count = 0;

const hearts = document.querySelectorAll(".heart");
hearts.forEach(function (event) {
  event.addEventListener("click", function () {
    count++;

    favCount.innerText = count;
  });
});

// Append New History function

function addToHistory(serviceName, serviceNumber) {
  const history = document.getElementById("call-history");

  const div = document.createElement("div");
  div.className =
    "bg-gray-100 flex items-center gap-6 mt-6 py-4 pl-4 rounded-lg";

  const left = document.createElement("div");
  left.innerHTML = `
                    <h3 class="text-lg font-semibold mb-0">${serviceName}</h3>
                    <p class="text-lg font-normal text-gray-500">${serviceNumber}</p>
    `;

  const serviceTime = document.createElement("p");
  serviceTime.className = "ml-auto mr-3";
  const time = new Date();
  serviceTime.innerText = time.toLocaleTimeString();

  div.appendChild(left);
  div.appendChild(serviceTime);

  history.appendChild(div);
}

// Call Buttons functionality

const coinCount = document.getElementById("coin-count");
let coins = 100;

const buttons = document.querySelectorAll(".call-btn");
buttons.forEach(function (event) {
  event.addEventListener("click", function () {
    const card = event.closest(".style-card");
    const serviceName = card.querySelector("h2").innerText;
    const serviceNumber = card.querySelector("h3").innerText;

    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinCount.innerText = coins;
    alert("Calling" + " " + serviceName + " " + serviceNumber);

    addToHistory(serviceName, serviceNumber);
  });
});
