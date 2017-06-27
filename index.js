(function () {
  'use strict';

  const $button = document.getElementById("submit");
  const $input = document.getElementById("name");

  const onclickButton = (e) => {
    alert($input.value);
  };

  $button.onclick = onclickButton;

})();
