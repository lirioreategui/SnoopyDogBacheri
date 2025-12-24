let detalhesSelecionados = {
  carnes: [],
  bebidas: []
};

const numeroWhatsApp = "5541999177777";

document.querySelectorAll(".btn-whatsapp").forEach(botao => {
  botao.addEventListener("click", () => {
    const lanche = botao.dataset.lanche;

    let msg = `Olá! Quero pedir o ${lanche}`;

    if (detalhesSelecionados.carnes.length > 0) {
      msg += `\nAdicionais de carnes:`;
      detalhesSelecionados.carnes.forEach(c => {
        msg += `\n+ ${c}`;
      });
    }

    if (detalhesSelecionados.bebidas.length > 0) {
      msg += `\nBebidas:`;
      detalhesSelecionados.bebidas.forEach(b => {
        msg += `\n${b}`;
      });
    }

    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    // limpa para o próximo pedido
    detalhesSelecionados = { carnes: [], bebidas: [] };
  });
});




function abrirModal(botao){
  lancheAtual = botao.parentElement.querySelector("strong").innerText;
  document.getElementById("modalDetalhes").style.display = "flex";
}


function fecharModal(){
  document.getElementById("modalDetalhes").style.display = "none";
}

function confirmarDetalhes() {
  const checks = document.querySelectorAll('#modalDetalhes input:checked');

  let carnes = [];
  let bebidas = [];

  checks.forEach(input => {
    const tipo = input.dataset.tipo;
    const valor = input.value;

    if (tipo === 'carne') {
      carnes.push(valor);
    }

    if (tipo === 'bebida') {
      bebidas.push(valor);
    }
  });

  detalhesSelecionados = { carnes, bebidas };

  fecharModal();
}
