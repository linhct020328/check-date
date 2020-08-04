const form = document.getElementById('form');
const thang = document.getElementById('thang');
const nam = document.getElementById('nam');
const ngay = document.getElementById('ngay');

form.addEventListener('submit', e => {
	e.preventDefault();

	ngay.innerHTML = '';
	check();
});

function check() {
	const thangValue = thang.value.trim();

	const namValue = nam.value.trim();
	var D = new Date();
	currentYear = D.getFullYear();

	if(namValue === '') {
		setErrorFor(nam, 'Year cannot be blank');
	}else if(nam.value < 1975 || nam.value > currentYear ){	
		setErrorFor(nam,'retype the year');
	}else{	
		if(thangValue === ''){
			setErrorFor(thang, 'Month cannot be blank');
		}else if(thang.value == 1 || thang.value == 3 || thang.value == 5 || thang.value == 7 || thang.value == 8 || thang.value == 10 || thang.value ==12){
			setSuccessFor(thang);
			ngay.innerHTML += 'Day:	31 days';
		}else if(thang.value == 4 || thang.value == 4 || thang.value == 9 || thang.value == 11){
			setSuccessFor(thang);
			ngay.innerHTML += 'Day:	30 days';
		}else if(thang.value == 2){
			if(nhuan()){
				setSuccessFor(thang);
				ngay.innerHTML += 'Day:	29 days';
			}else{
				setSuccessFor(thang);
				ngay.innerHTML += 'Day:	28 days';
			}
		}else{
			setErrorFor(thang,'retype the month');
		}

		setSuccessFor(nam);
	}
}

function nhuan(){
	return ((nam.value % 4 == 0 && nam.value % 100 != 0) || nam.value % 400 == 0);
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
	//alert("Error");
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	//alert("Success");
}