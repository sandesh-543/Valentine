const messages = [
    "Are you sure?",
    "Reallllyyyy?",
    "Are you positive pookie?",
    "Please don't say no. I'll be sad",
    "I will be very sad...",
    "I will be very very sad...",
    "I will be very very very sad...",
    "Ok fine, I'll stop asking. You're no fun.",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() { 
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "selection.html";
}
