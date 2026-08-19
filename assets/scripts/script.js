const secoesLabels = document.querySelectorAll("input[name='secoes'] + label");
const formContainer = document.querySelector(".form");
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
        const invalidQuestions = formulario.querySelectorAll("fieldset .question:has(input:invalid)");

        if (invalidQuestions.length > 0) {
            const firstInvalidQuestion = invalidQuestions[0];
            console.log(firstInvalidQuestion)

            const fieldset = firstInvalidQuestion.closest("fieldset");
            const invalidSecao = fieldset.className.match(/part-(\d+)/)[1];

            currentSecao = +invalidSecao;
            document.getElementById(`for-secao-${currentSecao}`).click();

            formContainer.scrollTo({
                top: firstInvalidQuestion.offsetTop,
                behavior: "smooth"
            });

            return;
        }

        formulario.requestSubmit();
        return;
    }

    currentSecao = currentSecao < 9 ? currentSecao + 1 : 9;
    document.getElementById(`for-secao-${currentSecao}`).click();
})