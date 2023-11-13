const menus = [
  {
    image: "./images/bhindi-fry.jpg",
    title: "Bhindi fry",
    price: 20.34
  },
  {
    image: "./images/chili-chicken.jpg",
    title: "Chili chicken",
    price: 20.34
  },
  {
    image: "./images/curry-chicken.jpg",
    title: "Curry chichen",
    price: 20.34
  },
  {
    image: "./images/full-plate.jpg",
    title: "Full thali",
    price: 20.34
  },
  {
    image: "./images/idli.jpg",
    title: "Idli",
    price: 20.34
  },
  {
    image: "./images/korma.jpg",
    title: "Korma",
    price: 20.34
  },
  {
    image: "./images/tandoori.jpg",
    title: "Tandoori",
    price: 20.34
  },
];

export function menuItems(content) {
  let menuHTML = '';
  
  menus.forEach((menu) => {
    menuHTML += `
      <div class="menu-items">
        <div class="menu-image">
          <img src="${menu.image}" alt="">
        </div>
          <h3 class="menu-title">${menu.title}</h3>
          <p class="menu-price">$${menu.price}</p>
      </div>
    `;
  });
  
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page');
  
  menuPage.innerHTML = menuHTML;
  content.appendChild(menuPage);
}