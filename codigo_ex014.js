var anoSistema = new Date()
var anoAtual = anoSistema.getFullYear()
// variáveis de data
var txtAnoNascimento = document.querySelector("input#txt_ano_nascimento")
var selecionadoSexoMasculino = document.querySelector("input#sexo_masculino")
var selecionadoSexoFeminino = document.querySelector("input#sexo_feminino")
// variáveis input
var idade = document.querySelector("p#idade")
// variável que retornará a frase contendo a idade
var botaoVerificar = document.querySelector("input#botao_verificar")
botaoVerificar.addEventListener("click", verificar)
// botão
var imagemBebeHomem = document.querySelector("img#imagem_bebe_homem")
var imagemBebeMulher = document.querySelector("img#imagem_bebe_mulher")
var imagemHomemAdolescente = document.querySelector("img#imagem_homem_adolescente")
var imagemMulherAdolescente = document.querySelector("img#imagem_mulher_adolescente")
var imagemHomemAdulto = document.querySelector("img#imagem_homem_adulto")
var imagemMulherAdulta = document.querySelector("img#imagem_mulher_adulta")
var imagemHomemIdoso = document.querySelector("img#imagem_homem_idoso")
var imagemMulherIdosa = document.querySelector("img#imagem_mulher_idosa")

function verificar() {
    var anoNascimento = Number(txtAnoNascimento.value)
    var sexoMasculino = selecionadoSexoMasculino.checked
    var sexoFeminino = selecionadoSexoFeminino.checked
    // variáveis que recebem valores dos inputs
    var calculoIdade = anoAtual - anoNascimento

    if (anoNascimento > anoAtual || calculoIdade > 125) {
        idade.innerHTML = `[ERRO!] Informação inválida. Ano acima do atual ou idade acima de 125 anos. Por favor verifique!`
        imagemBebeHomem.style.display = "none"
        imagemBebeMulher.style.display = "none"
        imagemHomemAdolescente.style.display = "none"
        imagemMulherAdolescente.style.display = "none"
        imagemHomemAdulto.style.display = "none"
        imagemMulherAdulta.style.display = "none"
        imagemHomemIdoso.style.display = "none"
        imagemMulherIdosa.style.display = "none"
    }
    else {
        if (calculoIdade > 0 && calculoIdade < 14 && sexoMasculino == true) {
        idade.innerHTML = `Sua idade é: ${calculoIdade} anos`
        imagemBebeHomem.style.display = "block"
        imagemBebeMulher.style.display = "none"
        imagemHomemAdolescente.style.display = "none"
        imagemMulherAdolescente.style.display = "none"
        imagemHomemAdulto.style.display = "none"
        imagemMulherAdulta.style.display = "none"
        imagemHomemIdoso.style.display = "none"
        imagemMulherIdosa.style.display = "none"
    }
    else {
        if (calculoIdade > 0 && calculoIdade < 14 && sexoFeminino == true) {
            idade.innerHTML = `Sua idade é: ${calculoIdade} anos`
            imagemBebeHomem.style.display = "none"
            imagemBebeMulher.style.display = "block"
            imagemHomemAdolescente.style.display = "none"
            imagemMulherAdolescente.style.display = "none"
            imagemHomemAdulto.style.display = "none"
            imagemMulherAdulta.style.display = "none"
            imagemHomemIdoso.style.display = "none"
            imagemMulherIdosa.style.display = "none"
        }
        else {
            if (calculoIdade >= 14 && calculoIdade < 23 && sexoMasculino == true) {
                idade.innerHTML = `Sua idade é: ${calculoIdade} anos`
                imagemBebeHomem.style.display = "none"
                imagemBebeMulher.style.display = "none"
                imagemHomemAdolescente.style.display = "block"
                imagemMulherAdolescente.style.display = "none"
                imagemHomemAdulto.style.display = "none"
                imagemMulherAdulta.style.display = "none"
                imagemHomemIdoso.style.display = "none"
                imagemMulherIdosa.style.display = "none"
            }
            else {
                if (calculoIdade >= 14 && calculoIdade < 23 && sexoFeminino == true) {
                    imagemBebeHomem.style.display = "none"
                    imagemBebeMulher.style.display = "none"
                    imagemHomemAdolescente.style.display = "none"
                    imagemMulherAdolescente.style.display = "block"
                    imagemHomemAdulto.style.display = "none"
                    imagemMulherAdulta.style.display = "none"
                    imagemHomemIdoso.style.display = "none"
                    imagemMulherIdosa.style.display = "none"
                }
                else {
                    if (calculoIdade >= 23 && calculoIdade < 60 && sexoMasculino == true) {
                        idade.innerHTML = `Sua idade é: ${calculoIdade} anos`
                        imagemBebeHomem.style.display = "none"
                        imagemBebeMulher.style.display = "none"
                        imagemHomemAdolescente.style.display = "none"
                        imagemMulherAdolescente.style.display = "none"
                        imagemHomemAdulto.style.display = "block"
                        imagemMulherAdulta.style.display = "none"
                        imagemHomemIdoso.style.display = "none"
                        imagemMulherIdosa.style.display = "none"
                    }
                    else {
                        if (calculoIdade >= 23 && calculoIdade < 60 && sexoFeminino == true) {
                            imagemBebeHomem.style.display = "none"
                            imagemBebeMulher.style.display = "none"
                            imagemHomemAdolescente.style.display = "none"
                            imagemMulherAdolescente.style.display = "none"
                            imagemHomemAdulto.style.display = "none"
                            imagemMulherAdulta.style.display = "block"
                            imagemHomemIdoso.style.display = "none"
                            imagemMulherIdosa.style.display = "none"
                        }
                        else {
                            if (calculoIdade >= 60 && sexoMasculino == true) {
                                idade.innerHTML = `Sua idade é: ${calculoIdade} anos`
                                imagemBebeHomem.style.display = "none"
                                imagemBebeMulher.style.display = "none"
                                imagemHomemAdolescente.style.display = "none"
                                imagemMulherAdolescente.style.display = "none"
                                imagemHomemAdulto.style.display = "none"
                                imagemMulherAdulta.style.display = "none"
                                imagemHomemIdoso.style.display = "block"
                                imagemMulherIdosa.style.display = "none"
                            }
                            else {
                                idade.innerHTML = `Sua idade é: ${calculoIdade} anos`
                                imagemBebeHomem.style.display = "none"
                                imagemBebeMulher.style.display = "none"
                                imagemHomemAdolescente.style.display = "none"
                                imagemMulherAdolescente.style.display = "none"
                                imagemHomemAdulto.style.display = "none"
                                imagemMulherAdulta.style.display = "none"
                                imagemHomemIdoso.style.display = "none"
                                imagemMulherIdosa.style.display = "block"
                            }
                        }
                    }
                }
            }
        }
    }
    }
}