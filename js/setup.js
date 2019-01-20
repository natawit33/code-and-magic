// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var wizards = [];

for (var i = 0; i < 4; i++) {
	var firstRandom = getRandomInt(WIZARD_NAMES.length);
	var twoRandom = getRandomInt(WIZARD_SURNAMES.length);
	var thirtRandom = getRandomInt(WIZARD_COAT_COLORS.length);
	var fourRandom = getRandomInt(WIZARD_EYES_COLORS.length);

 
	wizards.push ({
	name: WIZARD_NAMES[firstRandom] + " " + WIZARD_SURNAMES[twoRandom], 
	coatColor: WIZARD_COAT_COLORS[thirtRandom],
	eyesColor: WIZARD_EYES_COLORS[fourRandom]
})
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

///////////////////////////////////////////////////////////

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var inputUser = setup.querySelector('.setup-user-name');
setup.classList.add('hidden');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var userWizardCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var userWizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];

var setupFireball = setup.querySelector('.setup-fireball-wrap');
var arrSetupFireball = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var fillCoatWizard = function() {
  var randNumColor = getRandomInt(userWizardCoat.length);
  wizardCoat.style.fill = userWizardCoat[randNumColor];
};

wizardCoat.addEventListener('click', function() {
  fillCoatWizard();
});

var fillEyesWizard = function() {
  var randNumColor = getRandomInt(userWizardEyes.length);
  wizardEyes.style.fill = userWizardEyes[randNumColor];
};

wizardEyes.addEventListener('click', function() {
  fillEyesWizard();
});

var backgroundSetupFireball = function() {
  var randNumColor = getRandomInt(arrSetupFireball.length);
  setupFireball.style.background = arrSetupFireball[randNumColor];
}

setupFireball.addEventListener('click', function() {
 backgroundSetupFireball();
});

var onPopupEscPress = function(evt) {
  console.log(evt);
  if ((evt.keyCode === ESC_KEYCODE) && !(evt.path[0] === inputUser)){
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

