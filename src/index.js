import {createHomePage} from './home';
import {menuItems} from './menu';
import {navBar, footerSection} from './pageload';
import { contactPage } from './contact';
import { hamburgerTab } from './pageload';
const contentDiv = document.querySelector('#content');

navBar(contentDiv);
function removeChild(parent) {
  while(parent.children[1]) {
    parent.removeChild(parent.children[1]);
  };
}

function laodHomePage() {
  removeChild(contentDiv);
  createHomePage(contentDiv);
  setActiveTab(homeTab);
}
function laodMenuPage() {
  removeChild(contentDiv);
  menuItems(contentDiv);
  setActiveTab(menuTab);
}

function loadContactPage() {
  removeChild(contentDiv);
  contactPage(contentDiv);
  setActiveTab(contactTab);
}

function setActiveTab(tab) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((t) => {
    return t.classList.remove('active');
  });
  tab.classList.add('active');
}

const homeTab = document.querySelector('.home-tab');
homeTab.classList.add('active');
homeTab.addEventListener('click', function() {
  laodHomePage();
  footerSection(contentDiv);
});

const menuTab = document.querySelector('.menu-tab');
menuTab.addEventListener('click', function() {
  laodMenuPage();
  footerSection(contentDiv);
});

const contactTab = document.querySelector('.contact-tab');
contactTab.addEventListener('click', function() {
  loadContactPage();
  footerSection(contentDiv);
});
  
laodHomePage();
footerSection(contentDiv);
hamburgerTab();