const menuSection = document.getElementsByClassName("menu-section")[0];
const settingsSection = document.getElementsByClassName("settings-section")[0];
const homeButton = document.getElementsByClassName('home')[0];
const tittle = document.getElementsByClassName('tittle')[0];

let link = document.querySelectorAll('link[rel="import"]');
let importConent= link[0].import;
const menuContent = importConent.getElementsByClassName('content')[0];
importConent = link[1].import;
const settingsContent = importConent.getElementsByClassName('content')[0];

menuSection.appendChild(menuContent);
settingsSection.appendChild(settingsContent);

menuSection.hidden = false;
settingsSection.hidden = true;
homeButton.hidden = true;

const settingsButton = document.getElementsByClassName('settings-button')[0];

homeButton.addEventListener('click', () => {
  homeButton.hidden = true;
  menuSection.hidden = false;
  settingsSection.hidden = true;
  tittle.innerHTML = "Cath the Alian!";
});

settingsButton.addEventListener('click', () => {
  homeButton.hidden = false;
  menuSection.hidden = true;
  settingsSection.hidden = false;
  tittle.innerHTML = "Settings";
});