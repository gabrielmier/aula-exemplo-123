// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'foto-bebe_m.png')
            }else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem_m.png')
            }else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'foto-adulto_m.png')
            }else {
                // IDOSO
                img.setAttribute('src', 'foto-idoso_m.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'foto-bebe_f.png')
            }else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem_f.png')
            }else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'foto-adulta_f.png')
            }else {
                // IDOSO
                img.setAttribute('src', 'foto-idoso_f.png')
            }
        }
        res.style.textAlign = 'center' //deixa o res centralizado
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //joga na tela todas as fotos
    }
}