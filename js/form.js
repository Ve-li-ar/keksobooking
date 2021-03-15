import { sendData } from './data-server.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { resetMainMarker } from './map.js';

const form = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

//неактивность карты
const deactivateForm = () => {
  form.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled')
  form.querySelector('fieldset').setAttribute('disabled', 'disabled');
};

//активность карты
const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled')
  form.querySelector('fieldset').removeAttribute('disabled', 'disabled');
}

const adFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        showSuccessMessage();
        form.reset();

      },
      () =>
        showErrorMessage(),
      form.reset(),
      new FormData(evt.target),
    );
  });
};

const adFormReset = () => {
  form.addEventListener('reset', (evt) => {
    evt.preventDefault();
    form.reset();
    resetMainMarker();
  });
};

export { deactivateForm, activateForm, adFormSubmit, adFormReset }