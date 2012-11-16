var ep = document.getElementById('emailpara');
var sp = document.getElementById('subscribe');
var hpc = document.getElementById('homepostalcheck');
var pds = document.getElementById('personalDetailsSubmit');

function init() {
	sp.addEventListener('click',showEmail,false);
	hpc.addEventListener('click',setHomeAddress,false);
	pds.addEventListener('click',personalForm,false);
}
function showEmail() {
	if (sp.checked) {
		ep.style.visibility = "visible";
	} else {
		ep.style.visibility = "hidden";
	}
}
function setHomeAddress() {
	var ha = document.getElementById('homeaddress');
	ha.value = document.getElementById('postaladdress').value;
	if (hpc.checked) { 
		ha.disabled = true;
	} else {
		ha.disabled = false;
	}
}
function numberForm() {
	var numBox = document.getElementById('numBox').value;
	if (numBox==="") {
		alert('You cannot leave this field blank');
		return false;
	} else if (isNaN(numBox)) {
		alert('Please enter a number!');
		return false;
	} else if (numBox.length!=5) {
		alert('Your Zip Code must be 5 characters long.');
		return false;
	} else {
		return true;
	}
}

function personalForm() {
	var fullname = document.getElementById('fullname').value;
	var streetaddr = document.getElementById('streetaddr').value;
	if (fullname!="" && streetaddr!="") {
		return true;
	} else {
		if (fullname==="") {
			document.getElementById('nameerrormsg').style.visibility = "visible";
		}
		if (streetaddr==="") {
					document.getElementById('addrerrormsg').style.visibility = "visible";
		}
		return false;
	} 
}
function berryForm() {
  var straw = document.getElementById('optstraw');
  var blue = document.getElementById('optblue');
  if (straw.checked == false && blue.checked == false) {
    window.alert("Please select your favorite berry!");
    return false;
  }
  return true;
}