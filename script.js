let name = prompt("What is the name of the studant?")

var test = document.getElementById("title")

test.textContent = "Studant name " + name

// document.writeln( "<h1>" + "Studant name " + name + "</h1>")

window.onload = function (x){
    document.getElementById("submit").addEventListener('click', click)

        function click(){
            let enli = document.getElementById("eng").value
            let math = document.getElementById("mat").value
            let biol = document.getElementById("bio").value
            let hist = document.getElementById("his").value
            let phed = document.getElementById("pe").value
            let soma = parseFloat(enli)+parseFloat(math)+parseFloat(biol)+parseFloat(hist)+parseFloat(phed)
            let ave = (soma/5)
            
                if (ave <=100 && ave >= 90){
                var grade = "A+"
            }
                else if (ave <=89.99 && ave >=80){
                var grade = "A-"
            }
                else if (ave <=79.99 && ave >=70){
                var grade = "B"
            }
                else if (ave <=69.99 && ave >=60){
                var grade = "C"
            }
                else if (ave <=59.99 && ave >=50){
                var grade = "D"
            }
                else if (ave <=49.99 && ave >=40){
                var grade = "E"
            }
                else if (ave <=39.99){
                var grade = "F"
            }

            if (ave >= 60){
                document.getElementById("showresult").innerHTML = "Congratulations " + name + "!!!" + " Your grade is " + grade + " you pass with the score of " + ave
            }
                else{
                    document.getElementById("showresult").innerHTML = "Sorry " + name + " your grade is " + grade + " you didn't pass, your score is " + ave 

                }
                
        }


}
 
