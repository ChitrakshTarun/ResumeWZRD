document.getElementById("myForm").addEventListener("submit", function (e) {
	e.preventDefault();

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;

	var doc = new jsPDF();
	doc.text("Name: " + name, 10, 10);
	doc.text("Email: " + email, 10, 20);
	doc.save("form.pdf");
});
