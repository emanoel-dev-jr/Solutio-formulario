const secoesLabels = document.querySelectorAll("input[name='secoes'] + label");
const formulario = document.querySelector("form");
const continueButton = document.querySelector(".continue-button");
let currentSecao = 1;

for (let secaoLabel of secoesLabels) {
    secaoLabel.addEventListener("mousedown", () => {
        const secaoLabelNumber = secaoLabel.id;

        switch (secaoLabelNumber) {
            case "for-secao-1":
                currentSecao = 1
                break;
                
            case "for-secao-2":
                currentSecao = 2
                break;

            case "for-secao-3":
                currentSecao = 3
                break;

            case "for-secao-4":
                currentSecao = 4
                break;

            case "for-secao-5":
                currentSecao = 5
                break;

            case "for-secao-6":
                currentSecao = 6
                break;

            case "for-secao-7":
                currentSecao = 7
                break;

            case "for-secao-8":
                currentSecao = 8
                break;
                
            case "for-secao-9":
                currentSecao = 9
                break;

            default:
                alert("Perdão pelo inconveniente, parece que detectamos mum erro, tente reiniciar a página.")
                
        }

        if (currentSecao < 9) {
            continueButton.innerText = "Continuar";
            continueButton.style.backgroundColor = "var(--primary-color)";
        } else if (currentSecao == 9) {
            continueButton.innerText = "Enviar";
            continueButton.style.backgroundColor = "var(--terciary-color)";
        }
    })
}

continueButton.addEventListener("mousedown", () => {
    if (currentSecao == 8) {
        continueButton.innerText = "Enviar";
        continueButton.style.backgroundColor = "var(--terciary-color)";
    } else if (currentSecao == 9) {
        const camposInvalidos = formulario.querySelectorAll(":invalid");

        if (camposInvalidos.length > 0) {
            const campo = camposInvalidos[0];
            const fieldset = campo.closest("fieldset");
            const secaoInvalida = fieldset.className.match(/part-(\d+)/)[1];

            currentSecao = Number(secaoInvalida);
            document.getElementById(`for-secao-${currentSecao}`).click();

            requestAnimationFrame(() => {
                campo.focus();
                campo.reportValidity();
            });

            return;
        }

        formulario.requestSubmit();
        return;
    }

    currentSecao = currentSecao < 9 ? currentSecao + 1 : 9;
    document.getElementById(`for-secao-${currentSecao}`).click();
})