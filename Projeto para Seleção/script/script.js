function studentData() {
    // função criada para pegar os dados digitados e inseri-los via dom logo abaixo do html
    const information = document.querySelector('#information')
    const name = document.querySelector('#name')
    const telephone = document.querySelector('#telephone')
    const birth = document.querySelector('#birth')
    const grade = document.querySelector('#grade')
    const div1 = document.createElement('div')
    const div3 = document.createElement('div')
    div3.classList.add("flex")
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const icon = document.createElement('i')
    icon.classList.add("fas")
    icon.classList.add("fa-user-minus")
    icon.classList.add("icon")
    p1.classList.add("form-control")
    p2.classList.add("form-control")
    p3.classList.add("form-control")
    p4.classList.add("form-control")
    const textoName = document.createTextNode("Aluno: " + name.value) //cria o texto que for adicionado no input.
    const textoTelephone = document.createTextNode("Telefone: " + telephone.value)
    const textoBirth = document.createTextNode("Data de nascimento: " + birth.value)
    const textoGrade = document.createTextNode("Nota final: " + grade.value)
    p1.appendChild(textoName)
    p2.appendChild(textoTelephone)
    p3.appendChild(textoBirth)
    p4.appendChild(textoGrade)
    div1.appendChild(p1)
    div1.appendChild(p2)
    div1.appendChild(p3)
    div1.appendChild(p4)
    div3.appendChild(div1)
    div3.appendChild(icon)
    information.appendChild(div3)
    alert("Aluno cadastrado com sucesso")
    name.value = ""
    telephone.value = ""
    birth.value = ""
    grade.value = ""

}

function save() {
    // função criada para executar a função studentData() - NÃO SENDO USADA
    const register = document.getElementById("register");
    register.addEventListener("click", function(e) {
        e.preventDefault()
        studentData()

    });
}

function validation() {
    // função criada para validar a presença de dados no formulário e após confirmar irá salvar os dados com a função studentData()
    const register = document.getElementById("register");
    register.addEventListener("click", function(e) {
        e.preventDefault()
        const name = document.querySelector('#name')
        const telephone = document.querySelector('#telephone')
        const birth = document.querySelector('#birth')
        const grade = document.querySelector('#grade')

        if (name.value == "") {
            var name1 = document.querySelector("#name")
            name1.style.borderColor = "yellow"
            name1.setAttribute("placeholder", "Favor preencher este campo")
        } else {
            var name1 = document.querySelector("#name")
            name1.style.borderColor = "blue"
        }
        if (telephone.value == "") {
            var tel = document.querySelector("#telephone")
            tel.style.borderColor = "yellow"
            tel.setAttribute("placeholder", "Favor preencher este campo")
        } else {
            var tel = document.querySelector("#telephone")
            tel.style.borderColor = "blue"
        }
        if (birth.value == "") {
            var birth1 = document.querySelector("#birth")
            birth1.style.borderColor = "yellow"
            birth1.setAttribute("placeholder", "Favor preencher este campo")
        } else {
            var birth1 = document.querySelector("#birth")
            birth1.style.borderColor = "blue"
        }
        if (grade.value == "") {
            var grade1 = document.querySelector("#grade")
            grade1.style.borderColor = "yellow"
            grade1.setAttribute("placeholder", "Favor preencher este campo")
        } else {
            var grade1 = document.querySelector("#grade")
            grade1.style.borderColor = "blue"
        }
        if (name.value != "" && telephone.value != "" && birth.value != "" && grade.value != "") {
            studentData()
        }
    })

}

function selectDelete() {
    //função criada para selecionar os ícones dos elementos a serem excluídos - EM DESENVOLVIMENTO
    const register = document.getElementById("register");
    register.addEventListener("click", function() {

        const icon = document.getElementsByTagName("i");
        for (let index = 0; index < icon.length; index++) {
            const element = icon[index];
            element.addEventListener('click', function(event) {
                if (element.classList.contains('red')) {

                }

                event.target.classList.toggle('red'); //toglle verifica se tem ou não a classe. Se tiver ela é removida, se não tiver é adicionada ao disparar o evento.

            });

        }


    })
}

function deleteStudent() {
    // função criada para apagar os dados do aluno de acordo com o ícone seleciondo - EM DESENVOLVIMENTO
    const remover = document.getElementById("delete");
    remover.addEventListener('click', function(e) {
        e.preventDefault()
        const tarefa = document.querySelectorAll('i');
        const div3 = document.getElementsByClassName("flex");
        //const information = document.querySelector('#information')

        for (let index = 0; index < tarefa.length; index += 1) {
            if (tarefa[index].classList.contains('red')) {
                div3[index].parentNode.removeChild(div3[index])

            }
        }

    });
}

validation()