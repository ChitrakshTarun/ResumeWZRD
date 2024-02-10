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

	// Set font size and style
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
	// Personal Information
	doc.setFontSize(24); // Increased font size for name
	doc.setFont("arial", "bold");
	centerText(name, 10);
	doc.setFontSize(18); // Increased font size for role
	doc.setFont("arial", "normal");
	centerText(role, 25);
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(12);
	centerTextMultiple([phone, email, linkedin, location], 40);

	// Skills
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("SKILLS", 60);
	doc.setFontSize(12); // Decreased font size for skillset
	doc.line(10, 65, 200, 65);
	doc.setTextColor(90, 90, 90);
	doc.text(skillset, 10, 70);

	// Experience
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("EXPERIENCE", 80);
	doc.line(10, 85, 200, 85);
	doc.setFontSize(14); // Increased font size for company and title
	doc.text(company, 10, 90);
	doc.setFontSize(12); // Decreased font size for title, workLocation, joining, resigning
	doc.setTextColor(90, 90, 90);
	doc.text(title, 10, 95);
	doc.text(workLocation, 10, 100);
	doc.text(joining + " • " + resigning, 10, 105);

	// Education
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	centerText("EDUCATION", 115);
	doc.line(10, 120, 200, 120);
	doc.setFontSize(14); // Increased font size for school, stream, university, degree
	doc.setFont("arial", "normal");
	doc.text(school, 10, 125);
	doc.setTextColor(90, 90, 90);
	doc.text(stream, 10, 130);
	doc.text(percentage10 + " • " + percentage12, 10, 135);
	doc.setTextColor(0, 0, 0);
	doc.text(university, 10, 140);
	doc.text(degree, 10, 145);
	doc.setFontSize(12); // Decreased font size for cgpa
	doc.text(cgpa, 10, 150);

	// Interests
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("INTERESTS", 160);
	doc.line(10, 165, 200, 165);
	doc.setFontSize(14); // Increased font size for dog, passion
	doc.setFont("arial", "normal");
	doc.text(dog, 10, 170);
	doc.setTextColor(90, 90, 90);
	doc.text(passion, 10, 175);

	// Save the PDF

	doc.save("resume.pdf");
});
