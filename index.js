function simulateNoise() {
  const messages = [
    "Hello, can you hear me?",
    "H#llo, c@n you h3ar m3?",
    "Hey, what did you say again?",
    "Hel--static--you hea--zzz--me?",
    "I think there's some interference!"
  ];

  const messageBox = document.getElementById("messageBox");
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[randomIndex];
}

