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
  const historyList = document.getElementById("history-list");

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

  historyList.appendChild(div);
}

// Clear History Functionality

document.getElementById("clear-history").addEventListener("click", function () {
  const historyList = document.getElementById("history-list");
  historyList.innerText = "";
  historyList.appendChild(div);
});

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

// Copy Buttons function

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    document.execCommand("copy");
    document.body.removeChild(textArea);
    return Promise.resolve();
  }
}

// Copy Button Handler functionality

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;

  const card = btn.closest(".style-card");
  const targetSelector = btn.getAttribute("data-copy-target");
  const targetEl = card.querySelector(targetSelector);

  console.log(card,targetSelector,targetEl)

  if (targetEl) {
    const text = targetEl.innerText.trim();

    copyToClipboard(text).then(function () {
      const span = btn.querySelector("span");

      if (!span) {
        const span = document.createElement("span");
        span.innerText = " Copy";
        btn.appendChild(span);
      }

      const originalText = span.innerText;
      span.innerText = " Copied!";

      btn.classList.add("bg-green-600", "text-white");
      btn.classList.remove("bg-white", "text-gray-500");

      setTimeout(function () {
        span.textContent = originalText;
        btn.classList.remove("bg-green-600", "text-white");
        btn.classList.add("bg-white", "text-gray-500");
      }, 1500);
    });
  }
});
