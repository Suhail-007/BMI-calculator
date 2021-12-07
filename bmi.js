function isBmi() {
		let weight = parseFloat(document.querySelector('#weight').value);
		let height = parseFloat(document.getElementById('height').value);
			
		let imu = weight / (height/100)**2;
		 		 
		let p = document.getElementById('txt');
		p.innerHTML = imu.toFixed(2)
		
}

let btn = document.querySelector('[data-submit-btn]')

btn.addEventListener('click', isBmi);
