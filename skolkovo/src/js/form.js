import scrollTo from './common/scroll-to';

jQuery.extend(jQuery.validator.messages, {
  required: "Поле обязательно",
  remote: "Please fix this field.",
  email: "Email неверен",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Введите число.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Please enter the same value again.",
  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
  minlength: jQuery.validator.format("Please enter at least {0} characters."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

export default function() {
  if(typeof window.crm_url_path === 'undefined'){
    //window.crm_url_path = 'https://skolkovo.bpmonline.com/0/ServiceModel/TsGenerateLeadForm.svc/SaveWebFormLeadData';
    window.crm_url_path = 'https://integration.skolkovo.ru/savelead/';
  }
  const paywallElements = $('.paywall');
  const chapterLinks = $('.chapter-text__chapter');
  const firstChapterAboutDescriptions = $('.first-chapter__chapter');
  const form = document.getElementById('bpmform');
  const subscribeButton = document.getElementById('subscribe-button');
  const isThirdChapterWithForm = document.getElementById('dont-open-with-load');
  const openPopupButtons = $('.send-full-text-button');
  const thanksContainer = $('#thanks-container');
  const formContainer = document.getElementById('form-container');

  //Testing
  //window.addEventListener('scroll', function() {
  //  document.getElementById('showScroll').innerHTML = document.getElementById('thanks-container').classList.contains('no-paywall');
  //});
  //<div id="showScroll" style="top: 100px; right: 100px; position: fixed; width: 140px; height: 40px; background: white; z-index: 10;"></div>

  if(checkForUnlock()) {
    unlock();
  }

  if(!isThirdChapterWithForm) {
    paywallElements.removeClass('paywall');
    chapterLinks.removeClass('chapter-text__inactive-chapter');
    firstChapterAboutDescriptions.removeClass('first-chapter__inactive-chapter');
    openPopupButtons.addClass('hidden');
  }

  Inputmask('datetime', {
    inputFormat: "dd/mm/yyyy",
    min: "01/01/1900",
    max: "01/01/2020",
    clearIncomplete: true
  }).mask(document.getElementById('birthday'));

  Inputmask('+7(999)-999-9999', {
    alias: "phone",
    clearIncomplete: true
  }).mask(document.getElementById('user-phone'));

  try {
    Inputmask({
      alias: "email",
      clearIncomplete: true
    }).mask(document.getElementById('email'));
  }catch(e){
      console.log('Error at email inputmask', e);
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  $("#bpmform").validate({
    rules: {
      'first_name': "required",
      'last_name': "required",
      'company': "required",
      'title': "required",
      'birthday': "required",
      'agree': "required",
      'englang': "required",
      'user-phone': {
        minlength: 16,
      },
      'email': {
        required: true,
        email: true
      }
    },
    submitHandler: function(form) {
      if ($("#bpmform").valid()) {
        createLead();
      }

      return false;
    },
    invalidHandler: function(event, validator) {

    }
  });


  function unlock() {
    paywallElements.removeClass('paywall');
    chapterLinks.removeClass('chapter-text__inactive-chapter');
    firstChapterAboutDescriptions.removeClass('first-chapter__inactive-chapter');
    openPopupButtons.addClass('hidden');
    formContainer.classList.add('hidden');
    thanksContainer.removeClass('hidden');
    if (!document.getElementById('thanks-container').classList.contains('no-paywall')) {
      scrollTo(thanksContainer, -70);
    } 
    

    localStorage.setItem('unlocked', 'true');
  }
  
  function checkForUnlock() {
    return localStorage.getItem('unlocked') === 'true';
  }


  function createLead() {

    function capitalize(s){
      if(typeof s !== 'string') {
        return s;
      }
      return s.charAt(0).toUpperCase() + s.slice(1)

    }

    function getCookie(key) {
      if (!key) {
        return "";
      }
      return document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + key + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || "";
    }

    function getUrlVar(key) {
      var result = new RegExp(key + "=([^&amp;]*)", "i").exec(window.location.search);
      return result && result[1] || "";
    }

    var formData = {
      "landingId": "3f8eaaba-837a-4b5f-875c-04781d841d4a",
      "leadFields": {
        "TsContactGivenName": capitalize(document.getElementById("first_name").value),
        "TsContactSurname": capitalize(document.getElementById("last_name").value),
        "Email": document.getElementById("email").value,
        "MobilePhone": document.getElementById("user-phone").value,
        "Account": capitalize(document.getElementById("company").value),
        "FullJobTitle": capitalize(document.getElementById("title").value),
        "TsBirthDate": document.getElementById("birthday").value,
        "TsEnglishKnowledge": $('.english-level__input:checked').val(),
        "BpmRef": getCookie("bpmRef"),
        "BpmHref": getCookie("bpmHref"),
        "TsUtmSource": getUrlVar('utm_source'),
        "TsUtmMedium": getUrlVar('utm_medium'),
        "TsUtmContent": getUrlVar('utm_content'),
        "TsUtmCampaign": getUrlVar('utm_campaign'),
      }
    };

    if (formData.leadFields != undefined) {
      formData.leadFields.BpmRef = getCookie("bpmRef");
      formData.leadFields.BpmHref = getCookie("bpmHref");
    }

    $.ajax({
      url: window.crm_url_path,
      type: "POST",
      data: JSON.stringify(formData),
      contentType: "application/x-www-form-urlencoded",
      async: true,
      crossDomain: true,
      error: function(jsxhr, status, error) {
        console.log(error);
        alert('Ошибка отправки');
      },
      success: function(response) {
        unlock();

        fbq('track', 'CompleteRegistration');
        ym(55620610, 'reachGoal', 'SUBSCRIBED');

        try{
          gtag('event', 'Submitted', {
            'event_category': 'Form',
            'event_label': 'Subscription_Form'
          });
        }catch(e){
          console.log('No gtag function, event not sent', e);
        }

        //top.location.href = "https://common.skolkovo.ru/static/confirmation/ok-lk-rus.php?openid=" + formData.landingId;
      },
      complete: function(response) {}
    });
  }
}
