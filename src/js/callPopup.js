/* eslint-disable linebreak-style */
export default function callPopup(msg, popup) {
  const title = 'Ошибка';
  popup.showPopup('get', title, msg);
}
