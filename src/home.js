export function createHomePage(container) {
  const content = document.createElement('div');
  content.classList.add('home-page');

  const headingDescription = document.createElement('div');
  headingDescription.classList.add('heading-para');
  
  const heading = document.createElement('h2');
  heading.classList.add("heading");

  const para = document.createElement('p');
  para.classList.add("para");
  
  const imageSection = document.createElement('div');
  imageSection.classList.add('image-section');
  

  const image = document.createElement('img');
  image.src = "images/paneer.jpg";
  image.alt = "paneer";

  heading.textContent = "The Best restaurant for Healthy food in your area"

  para.textContent = "Here you can find variety of food in menu";

  headingDescription.appendChild(heading);
  headingDescription.appendChild(para);
  imageSection.appendChild(image);
  content.appendChild(headingDescription);
  content.appendChild(imageSection);

  container.appendChild(content);
}
