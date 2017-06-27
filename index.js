(function () {
  'use strict';

  const $button = document.getElementById("submit");
  const $input = document.getElementById("name");

  const onclickButton = (e) => {
    alert($input.value);
  };

  $button.onclick = onclickButton;

  const $otherbutton = document.getElementById("submitQuest");
  const $otherinput = document.getElementById("questName");

  const onclickOtherButton = (e) => {
    alert($otherinput.value);
  };

  $otherbutton.onclick = onclickOtherButton;

  const $colorbutton = document.getElementById("submitColor");
  const $colorinput = document.getElementById("colorName");

  const onclickColorButton = (e) => {
    alert($colorinput.value);
  };

  $colorbutton.onclick = onclickColorButton;
  
})();
