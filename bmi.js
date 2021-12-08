function isBmi() {
	
		let weight = parseFloat(document.querySelector('#weight').value);
		let height = parseFloat(document.getElementById('height').value);
		
		let bmi = weight / (height/100)**2;	 
		bmi = bmi.toFixed(2);
		
		let output = document.getElementById('output');
		
		if (bmi > 0 && bmi <= 15) {
				output.innerText = `Your BMI is: ${bmi} Your weight is Severely	Underweight`;
		} else if (bmi > 15 && bmi <= 18.9) {
				output.innerText = `Your BMI is: ${bmi} Your weight is	Underweight`;
		} else if (bmi > 18.9 && bmi <= 24.9) {
				output.innerText = `Your BMI is: ${bmi} Your weight is Healthy`;
		} else if (bmi > 25 && bmi <= 29.9) {
				output.innerText =  `Your BMI is: ${bmi} Your weight is Overweight`;
		} else if (bmi > 30 && bmi <= 35) {
				output.innerText =  `Your BMI is: ${bmi} Your weight is Overweight`;
		} else if (bmi > 35 && bmi <= 40) {
				output.innerText =  `Your BMI is: ${bmi} Your weight is Overweight "Obese Class I"`;
		} else if (bmi > 40 && bmi <= 45) {
				output.innerText =  `Your BMI is: ${bmi} Your weight is Overweight "Obese Class II"`;
		} else if (bmi > 45 && bmi <= 50) {
				output.innerText =  `Your BMI is: ${bmi} Your weight is Overweight "Obese Class III"`;
		} else if (bmi > 50 && bmi <= 55) {
				output.innerText =  `Your BMI is: ${bmi} Your weight is Overweight "Obese Class IV"`;
		} else if (bmi > 55 && bmi <= 60) {
				output.innerText =  `Your BMI is: ${bmi} Your weight is Overweight "Obese Class V"`;
		} else if (bmi > 60) {
				output.innerText =  `Your BMI is: ${bmi} Your weight is Overweight "Obese Class VI"`;
		} else {
				output.innerHTML = 'Please type valid numbers.'
		}
		
}

let btn = document.querySelector('[data-submit-btn]')

btn.addEventListener('click', isBmi);
