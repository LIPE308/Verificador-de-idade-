document.getElementById('verificar').onclick = function() { // chamo o id verificar com o ducument.get
        
            let idade = document.getElementById('idade').value; // mostra a idade com o value 
            document.getElementById("idade").addEventListener("keypress" , function(e){
                if(e.key === "Enter"){
                    document.getElementById("verificar").click();
                }
            });
            let resultado = document.getElementById("resultado")//mostra o resultado
            //converter para numero 

            idade = Number(idade);

            //verificação 

            if(isNaN(idade)){
                alert("Digite uma idade válida"); // verifica se tem algo digitado no display
                return 
            }

            if(idade <= 12){
                resultado.innerText = "É uma criança! 👶";
                  resultado.style.color = "pink"
                resultado.style.fontFamily = "Arial, Helvetica, sans-serif"
                 resultado.style.fontSize = "larger"
            }

             else if(idade <= 17 ){
                resultado.innerText = "É um adolescente! 🧑"
                resultado.style.color = "black" //manipulação de estilo via JS (muito massa kk)
                resultado.style.fontFamily = "Arial, Helvetica, sans-serif"
                resultado.style.fontSize = "larger"
            }

            else if(idade <= 59){
                resultado.innerText = " É um adulto... 🧑"
                resultado.style.color = "green"
                resultado.style.fontFamily = "Arial, Helvetica, sans-serif"
                 resultado.style.fontSize = "larger"

            }

            else if (idade <= 105){
                resultado.innerText = "Idoso 👴"
            }

            else{
                resultado.innerText = " Múmia ⚰️"
                resultado.style.fontFamily = "Arial, Helvetica, sans-serif"
                resultado.style.color = "yellow"
                 resultado.style.fontSize = "larger"
            }
                
        

        }