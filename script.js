function atualizarRTP() {
  const rtpSlots = Math.floor(Math.random() * (98 - 94 + 1) + 94);
  document.getElementById("slots-rtp").innerText = `RTP: ${rtpSlots}%`;
}
