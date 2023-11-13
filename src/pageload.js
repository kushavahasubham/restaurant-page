export function navBar(content) {
  const header = document.createElement('header');
  header.classList.add('header');

  header.innerHTML = `
    <nav>
      <h2>KCFOOD</h2>
      <ul class="tab-link">
        <li class="tab home-tab">Home</li>
        <li class="tab menu-tab">menu</li>
        <li class="tab contact-tab">contact</li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  `;
  content.appendChild(header);
}

export function footerSection(content) {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © Ravikant Singh`;

  const githubLink = document.createElement('a');
  githubLink.href = "https://github.com/Ravikant711";

  const githubIcon = document.createElement('i');
  githubIcon.classList.add("fa-brands");
  githubIcon.classList.add("fa-github");
  githubIcon.classList.add("github-icon");

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
  content.appendChild(footer);
}

export function hamburgerTab() {
  const hamburger = document.querySelector(".hamburger");
  const tabLink = document.querySelector(".tab-link");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    tabLink.classList.toggle("active");
  }

  const navTab = document.querySelectorAll(".tab");
  navTab.forEach(n => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    tabLink.classList.remove("active");
  }
}
