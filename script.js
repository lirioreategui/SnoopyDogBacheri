const numeroWhatsApp = "5541999177777";

document.querySelectorAll(".btn-whatsapp").forEach(botao => {
  botao.addEventListener("click", () => {
    const lanche = botao.dataset.lanche;
    const msg = `Oi! Quero pedir um lanche ${lanche}.`;
    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(msg)}`, "_blank"
    );
  });
});