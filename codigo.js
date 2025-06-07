var anoSistema = new Date()
var anoAtual = anoSistema.getFullYear()
var txtAnoNascimento = document.querySelector("input#txt_ano_nascimento")
var sexo = document.getElementsByName("radsex")
var resultado = document.querySelector("p#resultado")
var imagemResultado = document.querySelector("img#imagem_resultado")
var botaoEnviar = document.querySelector("input#botao_enviar")
botaoEnviar.addEventListener("click", enviar)

function enviar() {
    var anoNascimento = Number(txtAnoNascimento.value)
    var genero = ""
    var tamanhoTela = window.innerWidth
    var calculoIdade = anoAtual - anoNascimento
    var idade = calculoIdade

    if (anoNascimento > anoAtual || idade <= 0 || idade > 125) {
        resultado.innerHTML = `[ERRO!] O ano de nascimento é maior ou igual ao ano atual ou a idade é maior que 125 anos. <br> VERIFIQUE!`
        imagemResultado.style.display = "none"
    }
    else{
        if (sexo[0].checked) {
            imagemResultado.style.display = "block"
            genero = "Homem"
            if (idade > 0 && idade < 14) {
                resultado.innerHTML = `Foi detectado ${genero} com ${idade} ano(s)`
                if (tamanhoTela >= 350) {
                    imagemResultado.setAttribute("src", "imagens/bebe_homem.png")
                }
                else if (tamanhoTela < 350) {
                    imagemResultado.setAttribute("src", "imagens/bebe_homem_pq.png")
                }
            }
            else if (idade >= 14 && idade < 23) {
                resultado.innerHTML = `Foi detectado ${genero} com ${idade} ano(s)`
                if (tamanhoTela >= 350) {
                    imagemResultado.setAttribute("src", "imagens/adolescente_homem.png")
                }
                else if (tamanhoTela < 350) {
                    imagemResultado.setAttribute("src", "imagens/adolescente_homem_pq.png")
                }
            }
            else if(idade >= 23 && idade < 60) {
                resultado.innerHTML = `Foi detectado ${genero} com ${idade} ano(s)`
                if (tamanhoTela >= 350) {
                    imagemResultado.setAttribute("src", "imagens/homem_adulto.png")
                }
                else if (tamanhoTela < 350) {
                    imagemResultado.setAttribute("src", "imagens/homem_adulto_pq.png")
                }
            }
            else {
                resultado.innerHTML = `Foi detectado ${genero} com ${idade} ano(s)`
                if (tamanhoTela >= 350) {
                    imagemResultado.setAttribute("src", "imagens/homem_idoso.png")
                }
                else if (tamanhoTela < 350) {
                    imagemResultado.setAttribute("src", "imagens/homem_idoso_pq.png")
                }
            }
        }
        else {
            genero = "Mulher"
            imagemResultado.style.display = "block"
            if (idade > 0 && idade < 14) {
                resultado.innerHTML = `Foi detectado ${genero} com ${idade} ano(s)`
                if (tamanhoTela >= 350) {
                    imagemResultado.setAttribute("src", "imagens/bebe_mulher.png")
                }
                else if (tamanhoTela < 350) {
                    imagemResultado.setAttribute("src", "imagens/bebe_mulher_pq.png")
                }
            }
            else if(idade >= 14 && idade < 23) {
                resultado.innerHTML = `Foi detectado ${genero} com ${idade} ano(s)`
                if (tamanhoTela >= 350) {
                    imagemResultado.setAttribute("src", "imagens/adolescente_mulher.png")
                }
                else if (tamanhoTela < 350) {
                    imagemResultado.setAttribute("src", "imagens/adolescente_mulher_pq.png")
                }
            }
            else if(idade >= 23 && idade < 60) {
                resultado.innerHTML = `Foi detectado ${genero} com ${idade} ano(s)`
                if (tamanhoTela >= 350) {
                    imagemResultado.setAttribute("src", "imagens/mulher_adulta.png")
                }
                else if (tamanhoTela < 350) {
                    imagemResultado.setAttribute("src", "imagens/mulher_adulta_pq.png")
                }
            }
            else {
                resultado.innerHTML = `Foi detectado ${genero} com ${idade} ano(s)`
                if (tamanhoTela >= 350) {
                    imagemResultado.setAttribute("src", "imagens/mulher_idosa.png")
                }
                else if (tamanhoTela < 350) {
                    imagemResultado.setAttribute("src", "imagens/mulher_idosa_pq.png")
                }
            }
        }
    }
}