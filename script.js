// Hamburger Menu TOGGLE //
const checkboxToggle = document.getElementById("checkboxToggle");
const hamburgerMenu = document.getElementById("hamburgerMenu");

checkboxToggle.addEventListener("click", hamToggle);

function hamToggle() {
    if (checkboxToggle.checked === true) {
        hamburgerMenu.style.display = "block";
    } else {
        hamburgerMenu.style.display = "none";
    }
}

// WRAPPER CARD TOGGLE //

const card1 = document.getElementById("c1");
const card2 = document.getElementById("c2");
const card3 = document.getElementById("c3");
const card4 = document.getElementById("c4");
const unToggle = document.getElementById("header");



unToggle.addEventListener("click", cardToggle);

function cardToggle() {
    card1.checked = false;
    card2.checked = false;
    card3.checked = false;
    card4.checked = false;
};

// TOTAL COST CALCULATOR //

const roomsNumber = document.getElementById("rooms");
const basicRoom = document.getElementById("type-of-room-basic");
const vipRoom = document.getElementById("type-of-room-vip");
const totalCost = document.getElementById("total-cost-display");

const basicRoomCost = 250;
const vipRoomCost = 500;

roomsNumber.addEventListener("change", calculateCost);
basicRoom.addEventListener("change", calculateCost);
vipRoom.addEventListener("change", calculateCost);


function calculateCost() {
    if (basicRoom.checked === true) {
        totalCost.innerHTML = `${basicRoomCost * roomsNumber.value} $`;
    } else if (vipRoom.checked === true) {
        totalCost.innerHTML = `${vipRoomCost * roomsNumber.value} $`;
    } else {
        totalCost.innerHTML = "Please choose a room type";
    }

    if (vipRoom.checked === true && roomsNumber.value >= 3) {
        totalCost.innerHTML = `${vipRoomCost * roomsNumber.value * 0.9} $`;
    }
    
};


