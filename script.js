function atualizarRTP() {
  // Simulando atualização de RTPs (no futuro dá pra usar scraping da VenuzBet)
  const rtp = Math.floor(Math.random() * 5 + 94); // Simula de 94 a 99%
  document.getElementById("rtp-slots").innerText = rtp;
}
