async function getGitHubProjects() {
    const response = await fetch(
        "https://api.github.com/users/viktorandersson-Git/repos",
    );
    
    const projects = await response.json();
   
    const loadingMsg = document.querySelector(".loading-msg");
    loadingMsg.style.display = "none";

    const projectListContainer = document.querySelector(".project-list");
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("card");

        const projectName = document.createElement("h3");
        projectName.textContent = project.name;

        const projectDesc = document.createElement("p");
        projectDesc.textContent =
            project.description || "Ingen beskrivning tillgänglig.";

        const projectLink = document.createElement("a");
        projectLink.classList.add("cta-button");
        projectLink.href = project.html_url;
        projectLink.textContent = "Se på GitHub";
        projectLink.target = "_blank";
        projectCard.appendChild(projectName);
        projectCard.appendChild(projectDesc);
        projectCard.appendChild(projectLink);
        projectListContainer.appendChild(projectCard);
    });

}
getGitHubProjects();
