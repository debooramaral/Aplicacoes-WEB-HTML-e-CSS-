function pedido(){
    var pedido_lanche = parseInt(prompt("Digite o código do lanche:"))
    var qtd_lanche = parseInt(prompt("Digite a quantidade desejada de lanche:"))
    switch(pedido_lanche){
        case 001:
            v_lanche = 15;
            v_total = qtd_lanche * v_lanche;
        break;
        case 002:
            v_lanche = 10;
            v_total = qtd_lanche * v_lanche;
        break;
        case 003:
            v_lanche = 20;
            v_total = qtd_lanche * v_lanche;
        break;
    }
    alert(`Valor total a pagar $ ${v_total}`)
    alert("Compra realizada com sucesso")
}