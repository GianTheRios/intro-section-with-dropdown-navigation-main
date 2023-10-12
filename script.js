const features = document.querySelector('#features')
const company = document.querySelector('#company')
const dropdownMenu = document.getElementById('dropdown-menu')
const dropdownCompany = document.getElementById('dropdown-company')



// when the user clicks on the features button, the dropdown should appear
// when the user clicks on the company button, the dropdown should appear

features.addEventListener('click', () => {
  if (dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'flex';
      dropdownCompany.style.display = 'none'; // Hide the other dropdown
  } else {
      dropdownMenu.style.display = 'none';
  }
  console.log('features clicked');
});

company.addEventListener('click', () => {
  if (dropdownCompany.style.display === 'none') {
      dropdownCompany.style.display = 'flex';
      dropdownMenu.style.display = 'none'; // Hide the other dropdown
  } else {
      dropdownCompany.style.display = 'none';
  }
  
  console.log('company clicked');
});


// navbar mobile

const hamburger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', mobileMenu)

function mobileMenu() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}

  

