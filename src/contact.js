export function contactPage(content) {
  const contact = document.createElement('div');
  contact.classList.add('contact-page');

  const phone = document.createElement('p');
  phone.textContent = '+911234567890';

  const address = document.createElement('p');
  address.textContent = 'XJXF+RR2, St Joseph School Rd, Amraiwadi, Ahmedabad, Gujarat 380026';

  const restaurantAddress= document.createElement('img');
  restaurantAddress.src = 'images/kc-map.jpg';
  restaurantAddress.alt = 'kc-map';

  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(restaurantAddress);

  content.appendChild(contact);
}