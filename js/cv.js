async function loadCVData() {
    const response = await fetch("../json/cv.json");

    const data = await response.json();

    function createCard(title, subtitle, date, info) {
        const cardDiv = document.createElement("div");

        cardDiv.classList.add("cv-card");

        const h3 = document.createElement("h3");
        h3.textContent = title;

        const em = document.createElement("em");
        em.textContent = subtitle;

        const pDate = document.createElement("p");
        pDate.textContent = date;

        const pInfo = document.createElement("p");
        pInfo.textContent = info;

        cardDiv.appendChild(h3);
        cardDiv.appendChild(em);
        cardDiv.appendChild(pDate);
        cardDiv.appendChild(pInfo);
        return cardDiv;
    }

    const educationContainer = document.querySelector(".education-container");
    const eduList = data[0].education;
    eduList.forEach((education) => {
        const newCard = createCard(
            education.school,
            education.degree,
            education.date,
            education.info,
        );

        educationContainer.appendChild(newCard);
    });

    const workContainer = document.querySelector(".work-container");
    const workList = data[1].experience;
    workList.forEach((experience) => {
        const newCard = createCard(
            experience.company,
            experience.position,
            experience.date,
            experience.info,
        );

        workContainer.appendChild(newCard);
    });

    const skillsContainer = document.querySelector(".skills-container");
    const skillsList = data[2].skills;
    skillsList.forEach((skill) => {
        const newCard = createCard(skill.title, "", "", skill.info);
        skillsContainer.appendChild(newCard);
    });
}

loadCVData();
