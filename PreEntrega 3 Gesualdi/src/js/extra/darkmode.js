/**
 * The darkmdoe switcher
 * @type {HTMLElement}
 */
const checkbox = document.getElementById("switch");

/**
 * Applay the darkmode or lightmode effect
 */
const applicator = () => {
  if (localStorage.getItem("theme") === "DarkMode") {
    darkModeOn();
  } else {
    lightModeOn();
  }
};

/**
 * Check the  state of the switch button
 */
const checker = () => {
  let checked = checkbox.checked;
  if (checked) {
    localStorage.setItem("theme", "DarkMode");
  } else {
    localStorage.setItem("theme", "WhiteMode");
  }
};

/**
 * Definition and applaier of the darkmode
 */
const darkModeOn = () => {
  checkbox.checked = true;
  document.body.classList.add("darkmode");
  document.getElementById("isotype-header-logo").src =
    "../img/logo/Isotype.png";
};

/**
 * Definition and applaier of the lightmode
 */
const lightModeOn = () => {
  document.body.classList.remove("darkmode");
  document.getElementById("isotype-header-logo").src =
    "../img/logo/Black Logo.png";
};

applicator();

checkbox.addEventListener(
  "change",
  () => {
    checker();
    applicator();
  },
  false
);

