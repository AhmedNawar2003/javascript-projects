let smallCups = document.querySelectorAll(".cup-small");
let percentage = document.getElementById("percentage");
let remained = document.getElementById("remained");
let filled = document.getElementById("filled");
let liters = document.getElementById("liters");
let resetButton = document.getElementById("reset");
let totalLiters = 2; // Total liters can be adjusted here

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCups(idx));
});

resetButton.addEventListener("click", resetCups);

function highlightCups(idx) {
    if (smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full"))
        idx--;
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
        filled.innerText = "0%";
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        filled.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${(totalLiters - (totalLiters / totalCups) * fullCups).toFixed(2)}L`;
    }
}

function resetCups() {
    smallCups.forEach(cup => {
        cup.classList.remove("full");
    });
    updateBigCup();
}