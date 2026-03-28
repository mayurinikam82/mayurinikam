function openSkill(skill) {

  document.getElementById("detailSection").classList.remove("hidden");

  let title = document.getElementById("title");
  let desc = document.getElementById("desc");
  let people = document.getElementById("people");
  let courses = document.getElementById("courses");

  // Reset tabs
  showTab('people');

  if (skill === "python") {
    title.innerText = "Python Data Science";
    desc.innerText = "Learn Python with real experts";

    people.innerHTML = `
      👤 Dr. Aris <br>
      👤 John Data Analyst
    `;

    courses.innerHTML = `
      📚 NumPy Basics <br>
      📚 Pandas Mastery
    `;
  }

  else if (skill === "cyber") {
    title.innerText = "Cybersecurity";
    desc.innerText = "Protect systems & networks";

    people.innerHTML = `
      👤 Zack Hacker <br>
      👤 Security Expert
    `;

    courses.innerHTML = `
      📚 Ethical Hacking <br>
      📚 Network Security
    `;
  }

  else if (skill === "figma") {
    title.innerText = "Figma UI Design";
    desc.innerText = "Design modern UI/UX";

    people.innerHTML = `
      👤 Luna Designer <br>
      👤 UI Expert
    `;

    courses.innerHTML = `
      📚 Figma Basics <br>
      📚 UI Kit Design
    `;
    if (skill === "leadership") {
  title.innerText = "Leadership";
  desc.innerText = "Learn team management & leadership skills";

  document.getElementById("people").innerHTML = `
    👤 Kevin Leader <br>
    👤 Team Manager
  `;

  document.getElementById("courses").innerHTML = `
    📚 Leadership Basics <br>
    📚 Team Building Skills
  `;
}
  }
}


/* Tab switch */
function showTab(tab) {

  document.getElementById("people").classList.add("hidden");
  document.getElementById("courses").classList.add("hidden");

  document.getElementById(tab).classList.remove("hidden");

  // Active button
  let buttons = document.querySelectorAll(".tab");
  buttons.forEach(btn => btn.classList.remove("active"));

  if (tab === "people") buttons[0].classList.add("active");
  else buttons[1].classList.add("active");
}
