/* FIRST TEMPLATE */
document.getElementById("resume-form").addEventListener("submit", function (e) {
	e.preventDefault();

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
	var doc = new jsPDF();

	function centerText(text, y) {
		var textWidth =
			(doc.getStringUnitWidth(text) * doc.internal.getFontSize()) /
			doc.internal.scaleFactor;
		var xOffset = (doc.internal.pageSize.width - textWidth) / 2;
		doc.text(text, xOffset, y);
	}
	function centerTextMultiple(textArray, y) {
		var text = textArray.join(" • ");
		var textWidth =
			(doc.getStringUnitWidth(text) * doc.internal.getFontSize()) /
			doc.internal.scaleFactor;
		var xOffset = (doc.internal.pageSize.width - textWidth) / 2;
		doc.text(text, xOffset, y);
	}
	doc.setFontSize(24);
	doc.setFont("arial", "bold");
	centerText(name, 15);
	doc.setFontSize(18);
	doc.setFont("arial", "normal");
	centerText(role, 25);
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(12);
	centerTextMultiple([phone, email, linkedin, location], 35);

	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("SKILLS", 45);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.line(10, 47.5, 200, 47.5);
	doc.text(skillset, 10, 55);

	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("EXPERIENCE", 65);
	doc.line(10, 67.5, 200, 67.5);
	doc.setFontSize(17);
	doc.text(company, 10, 75);
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text("Role: " + title, 10, 80);
	doc.text("Location: " + workLocation, 10, 85);
	doc.text("Employment Duration: " + joining + " to " + resigning, 10, 90);
	doc.setFontSize(17);
	doc.setFont("arial", "bold");
	doc.text(company2, 10, 100);
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text("Role: " + title2, 10, 105);
	doc.text("Location: " + workLocation2, 10, 110);
	doc.text("Employment Duration: " + joining2 + " to " + resigning2, 10, 115);

	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	centerText("EDUCATION", 125);
	doc.line(10, 127.5, 200, 127.5);
	doc.setFontSize(17);
	doc.setFont("arial", "bold");
	doc.text("School: " + school, 10, 135);
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.text("Stream: " + stream, 10, 140);
	doc.text("10th: " + percentage10 + "%", 10, 145);
	doc.text("12th: " + percentage12 + "%", 10, 150);
	doc.setTextColor(0, 0, 0);
	doc.setFontSize(17);
	doc.setFont("arial", "bold");
	doc.text("University: " + university, 10, 160);
	doc.setFontSize(12);
	doc.setTextColor(90, 90, 90);
	doc.setFont("arial", "normal");
	doc.text(degree, 10, 165);
	doc.setFontSize(12);
	doc.text("CGPA (8 Semesters): " + cgpa, 10, 170);
	doc.text("Graduated on: " + dog, 10, 175);

	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("INTERESTS", 185);
	doc.line(10, 187.5, 200, 187.5);
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text(passion, 10, 195);
	var img = new Image();
	img.src = "/src/images/logo-red.png";
	doc.addImage(img, "png", 40, 250);

	doc.save("resume.pdf");
});

/* SECOND TEMPLATE */

document.getElementById("resume-form").addEventListener("submit", function (e) {
	e.preventDefault();

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
	var doc = new jsPDF();

	function centerText(text, y) {
		var textWidth =
			(doc.getStringUnitWidth(text) * doc.internal.getFontSize()) /
			doc.internal.scaleFactor;
		var xOffset = (doc.internal.pageSize.width - textWidth) / 2;
		doc.text(text, xOffset, y);
	}
	function centerTextMultiple(textArray, y) {
		var text = textArray.join(" • ");
		var textWidth =
			(doc.getStringUnitWidth(text) * doc.internal.getFontSize()) /
			doc.internal.scaleFactor;
		var xOffset = (doc.internal.pageSize.width - textWidth) / 2;
		doc.text(text, xOffset, y);
	}

	doc.setFontSize(28);
	doc.setFont("arial", "bold");
	doc.text(name, 10, 20);
	doc.setFontSize(24);
	doc.setFont("arial", "normal");
	doc.text(role, 10, 30);
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(12);
	doc.text(phone, 110, 15);
	doc.text(email, 110, 20);
	doc.text(location, 110, 25);
	doc.text(linkedin, 110, 30);

	doc.setFontSize(24);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	doc.text("EDUCATION", 10, 45);
	doc.line(10, 47.5, 100, 47.5);
	doc.setFontSize(18);
	doc.text("School: " + school, 10, 55);
	doc.setFont("arial", "bold");
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.text("Stream: " + stream, 10, 62.5);
	doc.text("10th: " + percentage10 + "%", 10, 70);
	doc.text("12th: " + percentage12 + "%", 10, 77.5);
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	doc.text("University: " + university, 10, 121);
	doc.setTextColor(90, 90, 90);
	doc.setFont("arial", "normal");
	doc.text(degree, 10, 128.5);
	doc.setFontSize(16);
	doc.text("CGPA (80 Semesters): " + cgpa, 10, 136);
	doc.text("Graduated on: " + dog, 10, 143.5);

	doc.setFontSize(24);
	doc.setFont("arial", "bold");
	doc.text("SKILLS", 10, 157.5);
	doc.line(10, 160, 100, 160);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	const skillsetTextLines = doc.splitTextToSize(skillset, 90);
	doc.text(skillsetTextLines, 10, 167.5);

	doc.setFontSize(24);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	doc.text("EXPERIENCE", 110, 45);
	doc.line(110, 47.5, 200, 47.5);
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	doc.text(company, 110, 55);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text("Role: " + title, 110, 62.5);
	doc.text("Location: " + workLocation, 110, 70);
	doc.text(joining + " to " + resigning, 110, 77.5);
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	doc.text(company2, 110, 121);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text("Role: " + title2, 110, 128.5);
	doc.text("Location: " + workLocation2, 110, 136);
	doc.text(joining2 + " to " + resigning2, 110, 143.5);

	doc.setFontSize(24);
	doc.setFont("arial", "bold");
	doc.text("INTERESTS", 110, 157.5);
	doc.line(110, 160, 200, 160);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	const passionTextLines = doc.splitTextToSize(passion, 90);
	doc.text(passionTextLines, 110, 167.5);
	var img = new Image();
	img.src = "/src/images/logo-red.png";
	doc.addImage(img, "png", 40, 250);
	// Save the PDF
	doc.save("resume2.pdf");
});

/* Third Template */
document.getElementById("resume-form").addEventListener("submit", function (e) {
	e.preventDefault();

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
	var doc = new jsPDF();
	doc.setFillColor(173, 216, 230);

	doc.rect(
		0,
		0,
		doc.internal.pageSize.getWidth() / 3,
		doc.internal.pageSize.getHeight(),
		"F"
	);
	doc.setFontSize(20);
	doc.setFont("arial", "bold");
	doc.text(name, 5, 20);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.text(role, 5, 30);
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(12);
	doc.text(phone, 5, 37.5);
	doc.text(email, 5, 42.5);
	doc.text(location, 5, 47.5);
	doc.text(linkedin, 5, 52.5);
	// Education
	doc.setFontSize(20);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	doc.text("EDUCATION", 5, 62.5);
	doc.setFontSize(16);
	doc.text(school, 5, 72.5 + 7.5);
	doc.setFontSize(12);
	doc.setTextColor(90, 90, 90);
	doc.setFont("arial", "normal");
	doc.text(stream, 5, 87.5);
	doc.text("10th: " + percentage10 + "%", 5, 95);
	doc.text("12th: " + percentage12 + "%", 5, 102.5);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	doc.setFontSize(16);
	doc.text(university, 5, 120);
	doc.setFontSize(12);
	doc.setTextColor(90, 90, 90);
	doc.setFont("arial", "normal");
	doc.text(degree, 5, 127.5);
	doc.text(cgpa + " CGPA", 5, 135);
	doc.text("Graduated: " + dog, 5, 142.5);
	doc.setFontSize(20);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	doc.text("SKILLS", 5, 160.5);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	const skillsetTextLines = doc.splitTextToSize(skillset, 40);
	doc.text(skillsetTextLines, 5, 167.5);

	// Right
	doc.setFontSize(20);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	doc.text("EXPERIENCE", 75, 62.5);
	doc.setFontSize(16);
	doc.text(company, 75, 80);
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text(title, 75, 87.5);
	doc.text(workLocation, 75, 95);
	doc.text("Duration: " + joining + " to " + resigning, 75, 102.5);
	doc.setFontSize(16);
	doc.setFont("arial", "bold");
	doc.text(company, 75, 120);
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text(title, 75, 127.5);
	doc.text(workLocation, 75, 135);
	doc.text("Duration: " + joining + " to " + resigning, 75, 142.5);
	doc.setFontSize(20);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	doc.text("INTERESTS", 75, 160.5);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	const passionTextLines = doc.splitTextToSize(passion, 40);
	doc.text(passionTextLines, 75, 167.5);
	var img = new Image();
	img.src = "/src/images/logo-red.png";
	doc.addImage(img, "png", 72.5, 250);
	doc.save("resume3.pdf");
});
