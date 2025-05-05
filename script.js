function simulateNoise() {
  const messages = [
    "What did I eat for dinner (personal)",
    "How long is this presentation going to take? (personal)",
    "*Background Noise* (physical)",
    "*Louder Background Noise* (physical)",
    "Pt is no (semantic)",
    "This is the last slide"	  
  ];

  const messageBox = document.getElementById("messageBox");
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageBox.textContent = messages[randomIndex];
}

