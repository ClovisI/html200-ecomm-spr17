function capture () {

	event.preventDefault();
	console.log(document.mailingList.name.value);
	var email = document.mailingList.name.value;
	if(email !== null && document.mailingList.name.value.match("@"+".")){
		console.log("Thanks for signing up for our mailing list, " + email + "!");
	}
	else
		console.log("Please enter your email.");

}
