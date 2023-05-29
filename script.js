const contentPage = document.querySelector(".content");
const projectPage = document.querySelector(".project-page");
const projectModal = document.querySelector("#project-task");
const addProjectModal = document.querySelector(".add");
const project = document.querySelector(".project");
const addProject = document.querySelector(".modal-add-button");
const closeProject = document.querySelector(".modal-cancel-button");
const projectInput = document.querySelector(".add-projects");
const projectContent = document.querySelector(".project-contents");
const openTodayModal = document.querySelector(".today-image-add");
const todayModal = document.querySelector("#today-task");
const closeTodayModal = document.querySelector(".today-modal-cancel-button");
const todayInput = document.querySelector(".add-todays-tasks");
const theToday = document.querySelector(".the-today");
const todayDivs = document.querySelector(".contents-today");
const addToTodayTask = document.querySelector(".today-modal-add-button");
const openWeeklyModal = document.querySelector(".weekly-image-add");
const weeklyModal = document.querySelector("#weekly-task");
const closeWeeklyModal = document.querySelector(".weekly-modal-cancel-button");
const weeklyInput = document.querySelector(".add-weekly-tasks");
const weeklyDivs = document.querySelector(".contents-weekly");
const addToWeeklyTask = document.querySelector(".weekly-modal-add-button");
const todayButton = document.querySelector(".day");
const weeklyButton = document.querySelector(".week");
const todayPage = document.querySelector(".today-page");
const weeklyPage = document.querySelector(".weekly-page");
const newModal = document.querySelector("#new-task");
const newInput = document.querySelector(".add-new-tasks");
const closeNewModal = document.querySelector(".new-modal-cancel-button");
const addToNewTasks = document.querySelector(".new-modal-add-button");

function openProjectModal(modal) {
  modal.style.display = "flex";

  modal.classList.add("fade-in");
}

function closeProjectModal(modal) {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(function () {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 300);
  projectInput.value = "";
  todayInput.value = "";
}

addProjectModal.addEventListener("click", function () {
  openProjectModal(projectModal);
});
closeProject.addEventListener("click", function () {
  closeProjectModal(projectModal);
});
closeNewModal.addEventListener("click", () => {
  newInput.value = "";
  closeProjectModal(newModal);
});

function addToProjectDivs() {
  const newProjectDiv = document.createElement("div");
  const projectImage = document.createElement("img");
  projectImage.src = "images/list-box.svg";
  const newProjectText = document.createElement("div");
  newProjectText.style.display = "flex";
  newProjectText.classList.add("project-text");
  const projectImageTwo = document.createElement("img");
  projectImageTwo.src = "images/delete.svg";
  projectImageTwo.classList.add("img-filter");
  newProjectDiv.classList.add("add2");
  newProjectText.textContent = projectInput.value;

  if (newProjectText.textContent != "") {
    newProjectDiv.appendChild(projectImage);
    newProjectDiv.appendChild(newProjectText);
    newProjectDiv.appendChild(projectImageTwo);
    projectContent.appendChild(newProjectDiv);

    localStorage.setItem("projectContent", projectContent.innerHTML);
  } else {
    alert("Enter Project");
  }
  projectImageTwo.addEventListener("click", function () {
    projectContent.removeChild(newProjectDiv);
    localStorage.setItem("projectContent", projectContent.innerHTML);
    clearProjectPage();
    todayPage.style.display = "block";
  });

  const newDivs = document.querySelectorAll(".project-text");
  newDivs.forEach((button) => {
    let buttonText = button.textContent;
    button.addEventListener("click", () => {
      clearProjectPage();

      const projectPage = document.createElement("div");
      projectPage.classList.add("project-page");
      const theProject = document.createElement("div");
      theProject.classList.add("the-project");
      const projectHeading = document.createElement("span");
      const headingText = document.createElement("h1");
      headingText.textContent = buttonText;
      projectHeading.appendChild(headingText);
      const projectAdd = document.createElement("div");
      projectAdd.classList.add("project-add");
      const addImage = document.createElement("img");
      addImage.src = "images/plus.svg";
      addImage.classList.add("img-filter");
      addImage.addEventListener("click", () => {
        openProjectModal(newModal);
      });
      const divText = document.createElement("div");
      divText.textContent = "Add Tasks";
      projectAdd.appendChild(addImage);
      projectAdd.appendChild(divText);
      const contentsProject = document.createElement("div");
      contentsProject.classList.add(".contents-project");

      addToNewTasks.addEventListener("click", () => {
        const newNewDivs = document.createElement("div");
        const newNewImage = document.createElement("img");
        newNewImage.src = "images/format-list-bulleted.svg";
        const newNewText = document.createElement("div");
        newNewText.style.display = "flex";
        const newNewImageTwo = document.createElement("img");
        newNewImageTwo.src = "images/delete.svg";
        newNewImageTwo.classList.add("project-filter");
        newNewDivs.classList.add("add3");
        newNewText.textContent = newInput.value;

        if (newNewText.textContent != "") {
          newNewDivs.appendChild(newNewImage);
          newNewDivs.appendChild(newNewText);
          newNewDivs.appendChild(newNewImageTwo);
          contentsProject.appendChild(newNewDivs);

          localStorage.setItem("contentsProject", contentsProject.innerHTML);
        }
        else{
          alert("Enter tasks")
        }
        const newDelete = document.querySelectorAll('.project-filter')
        newDelete.forEach((newDel) =>{
          newDel.addEventListener('click', () =>{
            const newToRemove = newDel.parentNode;
            contentsProject.removeChild(newToRemove)
          })
        })
      });

      function clearProjectPage() {
        const projectPage = document.querySelector(".project-page");
        if (projectPage) {
          projectPage.remove();
        }
      }

      theProject.appendChild(projectHeading);
      theProject.appendChild(projectAdd);
      theProject.appendChild(contentsProject);

      projectPage.appendChild(theProject);

      todayPage.style.display = "none";
      weeklyPage.style.display = "none";

      contentPage.appendChild(projectPage);
    });
    localStorage.setItem("newDivs", newDivs.innerHTML);
  });
}

addProject.addEventListener("click", function () {
  addToProjectDivs();

  projectInput.value = "";
  closeProjectModal(projectModal);
});
openTodayModal.addEventListener("click", function () {
  openProjectModal(todayModal);
});

closeTodayModal.addEventListener("click", function () {
  closeProjectModal(todayModal);
});

function addToTodaysDivs() {
  const newTodayDivs = document.createElement("div");
  const todayImage = document.createElement("img");
  todayImage.src = "images/format-list-bulleted.svg";
  const newTodayText = document.createElement("div");
  newTodayText.style.display = "flex";
  const todayImageTwo = document.createElement("img");
  todayImageTwo.src = "images/delete.svg";
  todayImageTwo.classList.add("img-filter");
  newTodayDivs.classList.add("add3");
  newTodayText.textContent = todayInput.value;

  if (newTodayText.textContent != "") {
    newTodayDivs.appendChild(todayImage);
    newTodayDivs.appendChild(newTodayText);
    newTodayDivs.appendChild(todayImageTwo);
    todayDivs.appendChild(newTodayDivs);

    localStorage.setItem("todayDivs", todayDivs.innerHTML);
  } else {
    alert("Enter today's Task");
  }
  todayImageTwo.addEventListener("click", () => {
    todayDivs.removeChild(newTodayDivs);
    localStorage.setItem("todayDivs,", todayDivs.innerHTML);
  });
}

addToTodayTask.addEventListener("click", function () {
  addToTodaysDivs();
  closeProjectModal(todayModal);
});

closeWeeklyModal.addEventListener("click", () => {
  closeProjectModal(weeklyModal);
});

openWeeklyModal.addEventListener("click", () => {
  openProjectModal(weeklyModal);
});

function addToWeeklyDivs() {
  const newWeeklyDivs = document.createElement("div");
  const weeklyImage = document.createElement("img");
  weeklyImage.src = "images/format-list-bulleted.svg";
  const newWeeklyText = document.createElement("div");
  const weeklyImageTwo = document.createElement("img");
  weeklyImageTwo.src = "images/delete.svg";
  weeklyImageTwo.classList.add("img-filter");
  newWeeklyDivs.classList.add("add4");

  if (weeklyInput.value != "") {
    newWeeklyText.textContent = weeklyInput.value;
    newWeeklyDivs.appendChild(weeklyImage);
    newWeeklyDivs.appendChild(newWeeklyText);
    newWeeklyDivs.appendChild(weeklyImageTwo);

    weeklyDivs.appendChild(newWeeklyDivs);

    localStorage.setItem("weeklyDivs", weeklyDivs.innerHTML);
  } else {
    alert("Enter weekly Tasks");
  }

  const deleteButtons = weeklyDivs.querySelectorAll(".img-filter");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const divToRemove = button.parentNode;
      weeklyDivs.removeChild(divToRemove);
      // Update the stored weeklyDivs HTML in localStorage after removing the element
      localStorage.setItem("weeklyDivs", weeklyDivs.innerHTML);
    });
  });
}

addToWeeklyTask.addEventListener("click", function () {
  addToWeeklyDivs();
  closeProjectModal(weeklyModal);
  weeklyInput.value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("projectContent")) {
    const storedProjectContent = localStorage.getItem("projectContent");
    projectContent.innerHTML = storedProjectContent;

    // Attach event listeners to the delete buttons
    const deleteButtons = projectContent.querySelectorAll(".img-filter");
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const divToRemove = button.parentNode;
        projectContent.removeChild(divToRemove);
        clearProjectPage();
        todayPage.style.display = "block";
        // Update the stored projectContent HTML in localStorage after removing the element
        setTimeout(function () {
          localStorage.setItem("projectContent", projectContent.innerHTML);
        }, 0);
      });
    });

    const readd = projectContent.querySelector(".add");
    readd.addEventListener("click", function () {
      openProjectModal(projectModal);
    });

    const newDivs = document.querySelectorAll(".project-text");
    newDivs.forEach((button) => {
      let buttonText = button.textContent;
      button.addEventListener("click", () => {
        clearProjectPage();

        const projectPage = document.createElement("div");
        projectPage.classList.add("project-page");
        const theProject = document.createElement("div");
        theProject.classList.add("the-project");
        const projectHeading = document.createElement("span");
        const headingText = document.createElement("h1");
        headingText.textContent = buttonText;
        projectHeading.appendChild(headingText);
        const projectAdd = document.createElement("div");
        projectAdd.classList.add("project-add");
        const addImage = document.createElement("img");
        addImage.src = "images/plus.svg";
        addImage.classList.add("img-filter");
        addImage.classList.add("img-filter");
        addImage.addEventListener("click", () => {
          openProjectModal(newModal);
        });
        const divText = document.createElement("div");
        divText.textContent = "Add Tasks";
        projectAdd.appendChild(addImage);
        projectAdd.appendChild(divText);
        const contentsProject = document.createElement("div");
        contentsProject.classList.add(".contents-project");

        addToNewTasks.addEventListener("click", () => {
          const newNewDivs = document.createElement("div");
          const newNewImage = document.createElement("img");
          newNewImage.src = "images/format-list-bulleted.svg";
          const newNewText = document.createElement("div");
          newNewText.style.display = "flex";
          const newNewImageTwo = document.createElement("img");
          newNewImageTwo.src = "images/delete.svg";
          newNewImageTwo.classList.add("project-filter");
          newNewDivs.classList.add("add3");
          newNewText.textContent = newInput.value;
  
          if (newNewText.textContent != "") {
            newNewDivs.appendChild(newNewImage);
            newNewDivs.appendChild(newNewText);
            newNewDivs.appendChild(newNewImageTwo);
            contentsProject.appendChild(newNewDivs);
  
            localStorage.setItem("contentsProject", contentsProject.innerHTML);
          }
          else{
            alert("Enter tasks")
          }
          const newDelete = document.querySelectorAll('.project-filter')
          newDelete.forEach((newDel) =>{
            newDel.addEventListener('click', () =>{
              const newToRemove = newDel.parentNode;
              contentsProject.removeChild(newToRemove)
            })
          })
        });

        function clearProjectPage() {
          const projectPage = document.querySelector(".project-page");
          if (projectPage) {
            projectPage.remove();
          }
        }

        theProject.appendChild(projectHeading);
        theProject.appendChild(projectAdd);
        theProject.appendChild(contentsProject);

        projectPage.appendChild(theProject);

        todayPage.style.display = "none";
        weeklyPage.style.display = "none";

        contentPage.appendChild(projectPage);
      });
    });
  }
  if (localStorage.getItem("todayDivs")) {
    const storedTodayContents = localStorage.getItem("todayDivs");
    todayDivs.innerHTML = storedTodayContents;

    // Attach event listeners to the delete buttons
    const deleteButtons = todayDivs.querySelectorAll(".img-filter");
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const divToRemove = button.parentNode;
        todayDivs.removeChild(divToRemove);
        // Update the stored todayDivs HTML in localStorage after removing the element
        localStorage.setItem("todayDivs", todayDivs.innerHTML);
      });
    });
  }
  if (localStorage.getItem("weeklyDivs")) {
    const storedWeeklyItems = localStorage.getItem("weeklyDivs");
    weeklyDivs.innerHTML = storedWeeklyItems;

    //attach event handlers to the buttons on load
    const deleteButtons = weeklyDivs.querySelectorAll(".img-filter");
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const divToRemove = button.parentNode;
        weeklyDivs.removeChild(divToRemove);
        // Update the stored todayDivs HTML in localStorage after removing the element
        localStorage.setItem("weeklyDivs", weeklyDivs.innerHTML);
      });
    });
  }
});

function clearProjectPage() {
  const projectPage = document.querySelector(".project-page");
  if (projectPage) {
    projectPage.remove();
  }
}

todayButton.addEventListener("click", () => {
  clearProjectPage();
  weeklyPage.style.display = "none";
  todayPage.style.display = "block";
});

weeklyButton.addEventListener("click", () => {
  clearProjectPage();
  todayPage.style.display = "none";
  weeklyPage.style.display = "block";
});
