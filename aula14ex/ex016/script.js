function calcular() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpaso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO], preencha corretamente os campos')
    } else {
        res.innerHTML = 'contando: '
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if (p <= 0) {
            window.alert('passou invalido')
        }
        if (i < f) {
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` 
            }
        } else {
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}` 
            }
            
        }
        res.innerHTML += `\u{1F3C1}`

    }
}
