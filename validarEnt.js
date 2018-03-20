

function validarEnt() {
	return Cinema_test() && Viatges_test() && Cuina_test()
		&& Esports_test() && Lectura_test() && musica_test()
		&& hobbies_test() && AsignaturaPref_test() && satisdis_test()
		&& satisus_test() && satiscom_test()
		&& satisper_test() && satisserv_test() && satistrac_test();
}



function Cinema_test() {
	var elements = document.querySelectorAll("input[name='Cinema']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_Cinema").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}

function Viatges_test() {
	var elements = document.querySelectorAll("input[name='viatges']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_Viatges").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}
function Cuina_test() {
	var elements = document.querySelectorAll("input[name='cuina']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_cuina").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}

function Esports_test() {
	var elements = document.querySelectorAll("input[name='esports']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_Esports").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}

function Lectura_test() {
	var elements = document.querySelectorAll("input[name='lectura']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_Lectura").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}

function musica_test() {
	var elements = document.querySelectorAll("input[name='musica']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_musica").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}
function hobbies_test() {
	var elements = document.querySelectorAll("input[name='hobbies']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_hobbies").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}

function AsignaturaPref_test() {
	var elements = document.querySelectorAll("input[name='AsignaturaPref']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_AsignaturaPref").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}
function satisdis_test() {
	var elements = document.querySelectorAll("input[name='satisdis']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_satisdis").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}

function satisus_test() {
	var elements = document.querySelectorAll("input[name='satisus']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_satisus").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}
function satiscom_test() {
	var elements = document.querySelectorAll("input[name='satiscom']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_satiscom").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}

function satisper_test() {
	var elements = document.querySelectorAll("input[name='satisper']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_satisper").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}

function satisserv_test() {
	var elements = document.querySelectorAll("input[name='satisserv']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_satisserv").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}

function satistrac_test() {
	var elements = document.querySelectorAll("input[name='satistrac']");
	var contador = 0;
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].checked) {
			contador++;
		}
	}
	if (contador < 1) {
		document.querySelector("#error_satistrac").innerHTML = " s'ha d'escollir, al menys una opció de cada";
		return false;
	}
	return true;
}
