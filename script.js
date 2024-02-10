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
	centerText(name, 15);
	doc.setFontSize(18); // Increased font size for role
	doc.setFont("arial", "normal");
	centerText(role, 25);
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(12);
	centerTextMultiple([phone, email, linkedin, location], 35);

	// Skills
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("SKILLS", 45);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.line(10, 47.5, 200, 47.5);
	doc.text(skillset, 10, 52.5);

	// Experience
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("EXPERIENCE", 62.5);
	doc.line(10, 65, 200, 65);
	doc.setFontSize(17); // Increased font size for company and title
	doc.text(company, 10, 70);
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text("Role: " + title, 10, 75);
	doc.text("Location: " + workLocation, 10, 80);
	doc.text("Employment Duration: " + joining + " to " + resigning, 10, 85);
	doc.setFontSize(17);
	doc.setFont("arial", "bold");
	doc.text(company2, 10, 95); // Adjusted y-offset
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text("Role: " + title2, 10, 100); // Adjusted y-offset
	doc.text("Location: " + workLocation2, 10, 105); // Adjusted y-offset
	doc.text("Employment Duration: " + joining2 + " to " + resigning2, 10, 110); // Adjusted y-offset

	// Education
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	centerText("EDUCATION", 120); // Adjusted y-offset
	doc.line(10, 122.5, 200, 122.5); // Adjusted y-offset
	doc.setFontSize(17);
	doc.setFont("arial", "bold");
	doc.text("School: " + school, 10, 127.5); // Adjusted y-offset
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(12); // Increased font size for school, stream, university, degree
	doc.setFont("arial", "normal");
	doc.text("Stream: " + stream, 10, 132.5); // Adjusted y-offset
	doc.text("10th: " + percentage10 + "%", 10, 137.5); // Adjusted y-offset
	doc.text("12th: " + percentage12 + "%", 10, 142.5); // Adjusted y-offset
	doc.setTextColor(0, 0, 0);
	doc.setFontSize(17);
	doc.setFont("arial", "bold");
	doc.text("University: " + university, 10, 152.5); // Adjusted y-offset
	doc.setFontSize(12); // Increased font size for school, stream, university, degree
	doc.setTextColor(90, 90, 90);
	doc.setFont("arial", "normal");
	doc.text(degree, 10, 157.5); // Adjusted y-offset
	doc.setFontSize(12); // Decreased font size for cgpa
	doc.text("CGPA (8 Semesters): " + cgpa, 10, 162.5); // Adjusted y-offset
	doc.text("Graduated on: " + dog, 10, 167.5); // Adjusted y-offset

	// Interests
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("INTERESTS", 177.5); // Adjusted y-offset
	doc.line(10, 180, 200, 180); // Adjusted y-offset
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text(passion, 10, 185); // Adjusted y-offset

	// Save the PDF
	doc.save("resume.pdf");
});

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
	centerText(name, 15);
	doc.setFontSize(18); // Increased font size for role
	doc.setFont("arial", "normal");
	centerText(role, 25);
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(12);
	centerTextMultiple([phone, email, linkedin, location], 35);

	// Skills
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("SKILLS", 45);
	doc.setFontSize(16);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.line(10, 47.5, 200, 47.5);
	doc.text(skillset, 10, 52.5);

	// Experience
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("EXPERIENCE", 62.5);
	doc.line(10, 65, 200, 65);
	doc.setFontSize(17); // Increased font size for company and title
	doc.text(company, 10, 70);
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text("Role: " + title, 10, 75);
	doc.text("Location: " + workLocation, 10, 80);
	doc.text("Employment Duration: " + joining + " to " + resigning, 10, 85);
	doc.setFontSize(17);
	doc.setFont("arial", "bold");
	doc.text(company2, 10, 95); // Adjusted y-offset
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text("Role: " + title2, 10, 100); // Adjusted y-offset
	doc.text("Location: " + workLocation2, 10, 105); // Adjusted y-offset
	doc.text("Employment Duration: " + joining2 + " to " + resigning2, 10, 110); // Adjusted y-offset

	// Education
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	doc.setTextColor(0, 0, 0);
	centerText("EDUCATION", 120); // Adjusted y-offset
	doc.line(10, 122.5, 200, 122.5); // Adjusted y-offset
	doc.setFontSize(17);
	doc.setFont("arial", "bold");
	doc.text("School: " + school, 10, 127.5); // Adjusted y-offset
	doc.setTextColor(90, 90, 90);
	doc.setFontSize(12); // Increased font size for school, stream, university, degree
	doc.setFont("arial", "normal");
	doc.text("Stream: " + stream, 10, 132.5); // Adjusted y-offset
	doc.text("10th: " + percentage10 + "%", 10, 137.5); // Adjusted y-offset
	doc.text("12th: " + percentage12 + "%", 10, 142.5); // Adjusted y-offset
	doc.setTextColor(0, 0, 0);
	doc.setFontSize(17);
	doc.setFont("arial", "bold");
	doc.text("University: " + university, 10, 152.5); // Adjusted y-offset
	doc.setFontSize(12); // Increased font size for school, stream, university, degree
	doc.setTextColor(90, 90, 90);
	doc.setFont("arial", "normal");
	doc.text(degree, 10, 157.5); // Adjusted y-offset
	doc.setFontSize(12); // Decreased font size for cgpa
	doc.text("CGPA (80 Semesters): " + cgpa, 10, 162.5); // Adjusted y-offset
	doc.text("Graduated on: " + dog, 10, 167.5); // Adjusted y-offset

	// Interests
	doc.setFontSize(18);
	doc.setFont("arial", "bold");
	centerText("INTERESTS", 177.5); // Adjusted y-offset
	doc.line(10, 180, 200, 180); // Adjusted y-offset
	doc.setFontSize(12);
	doc.setFont("arial", "normal");
	doc.setTextColor(90, 90, 90);
	doc.text(passion, 10, 185); // Adjusted y-offset

	// Save the PDF
	doc.save("resume2.pdf");
});
