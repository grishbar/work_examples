export default  function (){
  const wrapper = document.querySelector('.about__title-wrapper');
  const aboutContent = document.querySelector('.about__container');
  const headerButton = document.querySelector('.hamburger-menu__btn');
  const text = document.querySelector('.about__title-text');
  const textCont = text.textContent;

  if (wrapper) {
    headerButton.classList.add('dissappear');
    for (let i = 0; i < textCont.length; i += 1) {
      (function (i) {
        setTimeout(() => {
          let textLetter = document.createTextNode(textCont[i]);
          let spanElement = document.createElement('span');
          if (i === textCont.length - 1) {
            spanElement.classList.add('important-text');
          }
          spanElement.appendChild(textLetter);
          wrapper.appendChild(spanElement);
          if (i === 6) {
            wrapper.appendChild(document.createElement('br'));
          }
        }, 75 * i);
        setTimeout(() => {
          aboutContent.classList.add('appear');
          headerButton.classList.remove('dissappear');
        }, 75 * textCont.length);
      }(i));;
    }
  }
}
