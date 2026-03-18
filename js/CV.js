async function loadCVData() {
    const response = await fetch("../json/cv.json");

    const data = await response.json();

    const educationContainer = document.querySelector(".education-container");
    const eduList = data[0].education;
    eduList.forEach((education) => {
        const eduDiv = document.createElement("div");

        eduDiv.classList.add("cv-card");

        const schoolHeading = document.createElement("h3");
        schoolHeading.textContent = education.school;

        const degreeCursive = document.createElement("em");
        degreeCursive.textContent = education.degree;

        const dateText = document.createElement("p");
        dateText.textContent = education.date;

        const infoText = document.createElement("p");
        infoText.textContent = education.info;

        eduDiv.appendChild(schoolHeading);
        eduDiv.appendChild(degreeCursive);
        eduDiv.appendChild(dateText);
        eduDiv.appendChild(infoText);

        educationContainer.appendChild(eduDiv);
    });

    const workContainer = document.querySelector(".work-container");
    const workList = data[1].experience;
    workList.forEach((experience) => {
        const workdDiv = document.createElement("div");
        workdDiv.classList.add("cv-card");

        const companyHeading = document.createElement("h3");
        companyHeading.textContent = experience.company;

        const positionCursive = document.createElement("em");
        positionCursive.textContent = experience.position;

        const dateText = document.createElement("p");
        dateText.textContent = experience.date;

        const infoText = document.createElement("p");
        infoText.textContent = experience.info;

        workdDiv.appendChild(companyHeading);
        workdDiv.appendChild(positionCursive);
        workdDiv.appendChild(dateText);
        workdDiv.appendChild(infoText);

        workContainer.appendChild(workdDiv);
    });

    const skillsContainer = document.querySelector(".skills-container");
    const skillsList = data[2].skills;
    skillsList.forEach((skills) => {
        const skillDiv = document.createElement("div");
        skillDiv.classList.add("cv-card");

        const skillsHeading = document.createElement("h3");
        skillsHeading.textContent = skills.titel;

        const skillsInfo = document.createElement("p");
        skillsInfo.textContent = skills.info;

        skillDiv.appendChild(skillsHeading);
        skillDiv.appendChild(skillsInfo);

        skillsContainer.appendChild(skillDiv);
    });
}


loadCVData();
