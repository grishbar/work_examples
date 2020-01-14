import scrollTo from './common/scroll-to';

export default function() {
  const subscriptionFormContainer = $('#form-container');
  const openPopupButtons = $('.send-full-text-button');
  openPopupButtons.on('click', function(e){
    e.preventDefault();
    ym(55620610, 'reachGoal', 'READ_LATER');
    fbq('track', 'InitiateCheckout');
    if(subscriptionFormContainer.length){
      scrollTo(subscriptionFormContainer, -70);
    }
  });
}
