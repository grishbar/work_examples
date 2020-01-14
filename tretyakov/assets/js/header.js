export default function (){
  const openMenuButton = document.querySelector('#hamburger-menu__toggle');
  const menuLinks = document.querySelectorAll('.hamburger-menu__box li');
  openMenuButton.addEventListener('click', () => {
    if (openMenuButton.checked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', () => {
        document.body.style.overflow = 'unset';
        openMenuButton.checked = false;
      }); 
    }
  });
}
