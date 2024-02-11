document.getElementById("resume-form").addEventListener("submit", function (e) {
	e.preventDefault();
	// Storing Form Values
	var name = document.getElementById("name").value;
	var role = document.getElementById("role").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var linkedin = document.getElementById("linkedin").value;
	var location = document.getElementById("location").value;
	var skillset = document.getElementById("skillset").value;
	var company = document.getElementById("company").value;
	var workLocation = document.getElementById("work-location").value;
	var title = document.getElementById("title").value;
	var joining = document.getElementById("joining").value;
	var resigning = document.getElementById("resigning").value;
	var company2 = document.getElementById("company-2").value;
	var workLocation2 = document.getElementById("work-location-2").value;
	var title2 = document.getElementById("title-2").value;
	var joining2 = document.getElementById("joining-2").value;
	var resigning2 = document.getElementById("resigning-2").value;
	var school = document.getElementById("school").value;
	var stream = document.getElementById("stream").value;
	var percentage10 = document.getElementById("percentage10").value;
	var percentage12 = document.getElementById("percentage12").value;
	var university = document.getElementById("university").value;
	var degree = document.getElementById("degree").value;
	var cgpa = document.getElementById("cgpa").value;
	var dog = document.getElementById("dog").value;
	var passion = document.getElementById("passion").value;
	// FUNCTION : Capitalize First Letter of Each Word
	function capitalizeWords(input) {
		return input
			.split(" ")
			.map(function (word) {
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			})
			.join(" ");
	}
	/* Fixing Character Casing */
	// Title Case
	name = capitalizeWords(name);
	role = capitalizeWords(role);
	location = capitalizeWords(location);
	stream = capitalizeWords(stream);
	title = capitalizeWords(title);
	title2 = capitalizeWords(title2);
	// lowercase
	email = email.toLowerCase();
	linkedin = linkedin.toLowerCase();
	// UPPERCASE
	company = company.toUpperCase();
	company2 = company2.toUpperCase();
	school = school.toUpperCase();
	university = university.toUpperCase();
	/*
	============================== 
	FIRST TEMPLATE - resume-simple
	==============================
	*/
	var doc1 = new jsPDF();
	// Functions for centered text on the page
	function centerText(text, y) {
		var textWidth =
			(doc1.getStringUnitWidth(text) * doc1.internal.getFontSize()) /
			doc1.internal.scaleFactor;
		var xOffset = (doc1.internal.pageSize.width - textWidth) / 2;
		doc1.text(text, xOffset, y);
	}
	function centerTextMultiple(textArray, y) {
		var text = textArray.join(" • ");
		var textWidth =
			(doc1.getStringUnitWidth(text) * doc1.internal.getFontSize()) /
			doc1.internal.scaleFactor;
		var xOffset = (doc1.internal.pageSize.width - textWidth) / 2;
		doc1.text(text, xOffset, y);
	}
	// Personal Information
	doc1.setFontSize(24);
	doc1.setFont("arial", "bold");
	centerText(name, 15);
	doc1.setFontSize(18);
	doc1.setFont("arial", "normal");
	centerText(role, 25);
	doc1.setTextColor(90, 90, 90);
	doc1.setFontSize(12);
	centerTextMultiple([phone, email, linkedin, location], 35);
	// Skills
	doc1.setFontSize(18);
	doc1.setFont("arial", "bold");
	doc1.setTextColor(0, 0, 0);
	centerText("SKILLS", 45);
	doc1.setFontSize(16);
	doc1.setFont("arial", "normal");
	doc1.setTextColor(90, 90, 90);
	doc1.line(10, 47.5, 200, 47.5);
	doc1.text(skillset, 10, 55);
	// Experience
	doc1.setFontSize(18);
	doc1.setFont("arial", "bold");
	doc1.setTextColor(0, 0, 0);
	centerText("EXPERIENCE", 65);
	doc1.line(10, 67.5, 200, 67.5);
	doc1.setFontSize(17);
	doc1.text(company, 10, 75);
	doc1.setFontSize(12);
	doc1.setFont("arial", "normal");
	doc1.setTextColor(90, 90, 90);
	doc1.text("Role: " + title, 10, 80);
	doc1.text("Location: " + workLocation, 10, 85);
	doc1.text("Employment Duration: " + joining + " to " + resigning, 10, 90);
	doc1.setFontSize(17);
	doc1.setFont("arial", "bold");
	doc1.setTextColor(0, 0, 0);
	doc1.text(company2, 10, 100);
	doc1.setFontSize(12);
	doc1.setFont("arial", "normal");
	doc1.setTextColor(90, 90, 90);
	doc1.text("Role: " + title2, 10, 105);
	doc1.text("Location: " + workLocation2, 10, 110);
	doc1.text("Employment Duration: " + joining2 + " to " + resigning2, 10, 115);
	// Education
	doc1.setFontSize(18);
	doc1.setFont("arial", "bold");
	doc1.setTextColor(0, 0, 0);
	centerText("EDUCATION", 125);
	doc1.line(10, 127.5, 200, 127.5);
	doc1.setFontSize(17);
	doc1.setFont("arial", "bold");
	doc1.text("School: " + school, 10, 135);
	doc1.setTextColor(90, 90, 90);
	doc1.setFontSize(12);
	doc1.setFont("arial", "normal");
	doc1.text("Stream: " + stream, 10, 140);
	doc1.text("10th: " + percentage10 + "%", 10, 145);
	doc1.text("12th: " + percentage12 + "%", 10, 150);
	doc1.setFontSize(17);
	doc1.setFont("arial", "bold");
	doc1.setTextColor(0, 0, 0);
	doc1.text("University: " + university, 10, 160);
	doc1.setFontSize(12);
	doc1.setFont("arial", "normal");
	doc1.setTextColor(90, 90, 90);
	doc1.text(degree, 10, 165);
	doc1.setFontSize(12);
	doc1.text("CGPA (8 Semesters): " + cgpa, 10, 170);
	doc1.text("Graduated on: " + dog, 10, 175);
	// Interests
	doc1.setFontSize(18);
	doc1.setFont("arial", "bold");
	doc1.setTextColor(0, 0, 0);
	centerText("INTERESTS", 185);
	doc1.line(10, 187.5, 200, 187.5);
	doc1.setFontSize(12);
	doc1.setFont("arial", "normal");
	doc1.setTextColor(90, 90, 90);
	doc1.text(passion, 10, 195);
	doc1.save("resume-simple.pdf");
	/*
	===============================
	SECOND TEMPLATE - resume-column
	===============================
	*/
	var doc2 = new jsPDF();
	// Personal Information
	doc2.setFontSize(28);
	doc2.setFont("arial", "bold");
	doc2.text(name, 10, 20);
	doc2.setFontSize(24);
	doc2.setFont("arial", "normal");
	doc2.text(role, 10, 30);
	doc2.setTextColor(90, 90, 90);
	doc2.setFontSize(12);
	doc2.text(phone, 110, 15);
	doc2.text(email, 110, 20);
	doc2.text(location, 110, 25);
	doc2.text(linkedin, 110, 30);
	/* LEFT COLUMN */
	// Education
	doc2.setFontSize(24);
	doc2.setFont("arial", "bold");
	doc2.setTextColor(0, 0, 0);
	doc2.text("EDUCATION", 10, 45);
	doc2.line(10, 47.5, 100, 47.5);
	doc2.setFontSize(18);
	doc2.text("School: " + school, 10, 55);
	doc2.setFont("arial", "bold");
	doc2.setTextColor(90, 90, 90);
	doc2.setFontSize(16);
	doc2.setFont("arial", "normal");
	doc2.text("Stream: " + stream, 10, 62.5);
	doc2.text("10th: " + percentage10 + "%", 10, 70);
	doc2.text("12th: " + percentage12 + "%", 10, 77.5);
	doc2.setFontSize(18);
	doc2.setFont("arial", "bold");
	doc2.setTextColor(0, 0, 0);
	doc2.text("University: " + university, 10, 121);
	doc2.setTextColor(90, 90, 90);
	doc2.setFont("arial", "normal");
	doc2.text(degree, 10, 128.5);
	doc2.setFontSize(16);
	doc2.text("CGPA (8 Semesters): " + cgpa, 10, 136);
	doc2.text("Graduated on: " + dog, 10, 143.5);
	// Skills
	doc2.setFontSize(24);
	doc2.setFont("arial", "bold");
	doc2.setTextColor(0, 0, 0);
	doc2.text("SKILLS", 10, 157.5);
	doc2.line(10, 160, 100, 160);
	doc2.setFontSize(16);
	doc2.setFont("arial", "normal");
	doc2.setTextColor(90, 90, 90);
	const skillsetTextLines = doc2.splitTextToSize(skillset, 90);
	doc2.text(skillsetTextLines, 10, 167.5);
	/* RIGHT COLUMN */
	// Experience
	doc2.setFontSize(24);
	doc2.setFont("arial", "bold");
	doc2.setTextColor(0, 0, 0);
	doc2.text("EXPERIENCE", 110, 45);
	doc2.line(110, 47.5, 200, 47.5);
	doc2.setFontSize(18);
	doc2.setFont("arial", "bold");
	doc2.text(company, 110, 55);
	doc2.setFontSize(16);
	doc2.setFont("arial", "normal");
	doc2.setTextColor(90, 90, 90);
	doc2.text("Role: " + title, 110, 62.5);
	doc2.text("Location: " + workLocation, 110, 70);
	doc2.text(joining + " to " + resigning, 110, 77.5);
	doc2.setFontSize(18);
	doc2.setFont("arial", "bold");
	doc2.setTextColor(0, 0, 0);
	doc2.text(company2, 110, 121);
	doc2.setFontSize(16);
	doc2.setFont("arial", "normal");
	doc2.setTextColor(90, 90, 90);
	doc2.text("Role: " + title2, 110, 128.5);
	doc2.text("Location: " + workLocation2, 110, 136);
	doc2.text(joining2 + " to " + resigning2, 110, 143.5);
	// Interests
	doc2.setFontSize(24);
	doc2.setFont("arial", "bold");
	doc2.setTextColor(0, 0, 0);
	doc2.text("INTERESTS", 110, 157.5);
	doc2.line(110, 160, 200, 160);
	doc2.setFontSize(16);
	doc2.setFont("arial", "normal");
	doc2.setTextColor(90, 90, 90);
	const passionTextLines = doc2.splitTextToSize(passion, 90);
	doc2.text(passionTextLines, 110, 167.5);
	doc2.save("resume-column.pdf");
	/*
	==============================
	THIRD TEMPLATE - resume-colour
	==============================
	*/
	var doc3 = new jsPDF();
	doc3.setFillColor(173, 216, 230);
	// Functions for coloured column on the left
	doc3.rect(
		0,
		0,
		doc3.internal.pageSize.getWidth() / 3,
		doc3.internal.pageSize.getHeight(),
		"F"
	);
	/* LEFT COLUMN */
	// Personal Information
	doc3.setFontSize(20);
	doc3.setFont("arial", "bold");
	doc3.text(name, 5, 20);
	doc3.setFontSize(16);
	doc3.setFont("arial", "normal");
	doc3.text(role, 5, 30);
	doc3.setTextColor(90, 90, 90);
	doc3.setFontSize(12);
	doc3.text(phone, 5, 37.5);
	doc3.text(email, 5, 42.5);
	doc3.text(location, 5, 47.5);
	doc3.text(linkedin, 5, 52.5);
	// Education
	doc3.setFontSize(20);
	doc3.setFont("arial", "bold");
	doc3.setTextColor(0, 0, 0);
	doc3.text("EDUCATION", 5, 62.5);
	doc3.setFontSize(16);
	doc3.text(school, 5, 72.5 + 7.5);
	doc3.setFontSize(12);
	doc3.setTextColor(90, 90, 90);
	doc3.setFont("arial", "normal");
	doc3.text(stream, 5, 87.5);
	doc3.text("10th: " + percentage10 + "%", 5, 95);
	doc3.text("12th: " + percentage12 + "%", 5, 102.5);
	doc3.setFont("arial", "bold");
	doc3.setTextColor(0, 0, 0);
	doc3.setFontSize(16);
	doc3.text(university, 5, 120);
	doc3.setFontSize(12);
	doc3.setTextColor(90, 90, 90);
	doc3.setFont("arial", "normal");
	doc3.text(degree, 5, 127.5);
	doc3.text(cgpa + " CGPA", 5, 135);
	doc3.text("Graduated: " + dog, 5, 142.5);
	doc3.setFontSize(20);
	doc3.setFont("arial", "bold");
	doc3.setTextColor(0, 0, 0);
	doc3.text("SKILLS", 5, 160.5);
	doc3.setFontSize(16);
	doc3.setFont("arial", "normal");
	doc3.setTextColor(90, 90, 90);
	const skillsetTextLines2 = doc3.splitTextToSize(skillset, 40);
	doc3.text(skillsetTextLines2, 5, 167.5);
	// Experience
	doc3.setFontSize(20);
	doc3.setFont("arial", "bold");
	doc3.setTextColor(0, 0, 0);
	doc3.text("EXPERIENCE", 75, 62.5);
	doc3.setFontSize(16);
	doc3.text(company, 75, 80);
	doc3.setFontSize(12);
	doc3.setFont("arial", "normal");
	doc3.setTextColor(90, 90, 90);
	doc3.text(title, 75, 87.5);
	doc3.text(workLocation, 75, 95);
	doc3.text("Duration: " + joining + " to " + resigning, 75, 102.5);
	doc3.setFontSize(16);
	doc3.setFont("arial", "bold");
	doc3.setTextColor(0, 0, 0);
	doc3.text(company2, 75, 120);
	doc3.setFontSize(12);
	doc3.setFont("arial", "normal");
	doc3.setTextColor(90, 90, 90);
	doc3.text(title2, 75, 127.5);
	doc3.text(workLocation2, 75, 135);
	doc3.text("Duration: " + joining2 + " to " + resigning2, 75, 142.5);
	doc3.setFontSize(20);
	doc3.setFont("arial", "bold");
	doc3.setTextColor(0, 0, 0);
	// Interests
	doc3.text("INTERESTS", 75, 160.5);
	doc3.setFontSize(16);
	doc3.setFont("arial", "normal");
	doc3.setTextColor(90, 90, 90);
	const passionTextLines2 = doc3.splitTextToSize(passion, 40);
	doc3.text(passionTextLines2, 75, 167.5);
	doc3.save("resume-colour.pdf");
});
