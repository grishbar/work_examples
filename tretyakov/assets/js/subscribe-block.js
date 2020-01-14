export default function() {
  const emailInput = document.querySelector('#email');
  const subscribeButton = document.querySelector('.subscribe-block__subscribe-button');
  const subscribeForm = document.querySelector('#subscribe-form');
  const wrongEmailMessage = document.querySelector('.subscribe-block__wrong-input');
  const agreement = document.querySelector('.subscribe-block__agreement');

  function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  if (subscribeForm) {
    subscribeButton.addEventListener('click', (e) => {
      e.preventDefault();
      agreement.style.visibility = 'hidden';
      if (isEmailValid(emailInput.value)) {
        subscribeForm.submit();
        subscribeForm.classList.add('hidden');
      } else {
        emailInput.addEventListener('keydown', () => {
          if (isEmailValid(emailInput.value)) {
            emailInput.classList.remove('wrong-input');
            wrongEmailMessage.classList.add('hidden');
          }
        });
        emailInput.classList.add('wrong-input');
        wrongEmailMessage.classList.remove('hidden');
      }
    });
  }
}
