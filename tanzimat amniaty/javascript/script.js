
// date.js
let persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
                      
const getPersianDate = (date) => {
  let newDate = moment(date);
  let year = newDate.jYear();
  let month = persianMonths[newDate.jMonth()];
  let day = newDate.jDate();
                      
  return `${day} ${month} ${year}`;
};
document.getElementById("date_box").innerHTML =
  getPersianDate();
// date.js

// sidebar
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {        
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
});
// /sidebar

// input-country--mbile
$(document).ready(function() {
  $("#phone").intlTelInput({
      //Configuration Options
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
      allowDropdown: true,
      autoPlaceholder: "aggressive",
      initialCountry: "auto",
      separateDialCode: true,
      initialCountry: "us",
  });
});

