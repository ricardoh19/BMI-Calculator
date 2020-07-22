function bmiCalc(){
    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value
    var feedback = document.getElementById("feedback")
    calculated_weight = weight * 703;
    calculated_height = height ** 2;
    var result = calculated_weight / calculated_height;
    feedback.textContent = "Your BMI: " + result.toFixed(1);
}


var submit = document.getElementById("submit")
submit.onclick = bmiCalc;