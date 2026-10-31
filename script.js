
function simularCompra() {

    const precoColar = 39.90;
    const precoOculos = 59.90;
    const precoBolsa = 89.90;

    const quantidadeColar = Number(prompt("Quantos colares deseja comprar?"));
    const quantidadeOculos = Number(prompt("Quantos óculos deseja comprar?"));
    const quantidadeBolsa = Number(prompt("Quantas bolsas deseja comprar?"));

    if (
        !Number.isInteger(quantidadeColar) || quantidadeColar < 0 ||
        !Number.isInteger(quantidadeOculos) || quantidadeOculos < 0 ||
        !Number.isInteger(quantidadeBolsa) || quantidadeBolsa < 0
    ) {
        alert("Digite quantidades inteiras iguais ou maiores que zero!");
        return;
    }

    if (
        quantidadeColar === 0 &&
        quantidadeOculos === 0 &&
        quantidadeBolsa === 0
    ) {
        alert("Nenhum produto foi selecionado!");
        return;
    }

    const valorColar = precoColar * quantidadeColar;
    const valorOculos = precoOculos * quantidadeOculos;
    const valorBolsa = precoBolsa * quantidadeBolsa;

    const total = valorColar + valorOculos + valorBolsa;

    let desconto = 0;

    if (total >= 150) {
        desconto = total * 0.10;
    }

    const valorFinal = total - desconto;

    const moeda = valor => valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    alert(
        "AZURIQ STORE - RESULTADO DA COMPRA\n\n" +
        "Colar Delicado: " + quantidadeColar +
        " unidade(s) - " + moeda(valorColar) + "\n" +
        "Óculos de Sol: " + quantidadeOculos +
        " unidade(s) - " + moeda(valorOculos) + "\n" +
        "Bolsa Casual: " + quantidadeBolsa +
        " unidade(s) - " + moeda(valorBolsa) + "\n\n" +
        "Total: " + moeda(total) + "\n" +
        "Desconto: " + moeda(desconto) + "\n" +
        "Valor final: " + moeda(valorFinal)
    );
}
