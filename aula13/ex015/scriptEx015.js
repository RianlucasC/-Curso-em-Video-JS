function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('nasc')
    var res = document.querySelector('div#res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('[ERR0] verifique os dados e tente novamente')
    }else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 1 && idade < 10 ) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }else if (sex[1].checked) {
            genero = 'Mulher' 
            if (idade >= 1 && idade < 10 ) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }           
        }
        res.style.textAlingn = 'center'
        res.innerHTML = `detectamos que você e ${genero} e tem ${idade} anos`
        res.appendChild(img)

    }
}

