/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import printTime from './printTime.js';

export default class BotChat {
  constructor(parentEl) {
    this.weather = [
      'солнце',
      'дождь',
      'ветер',
      'снег',
      'штормит',
    ];
    this.traffic = [
      'пробок нет',
      'движение плотное',
      'город стоит',
      'даже пешеходы толпятся',
    ];
    this.toGo = [
      'Кавказ',
      'Алтай',
      'Хибины',
      'Камчатка',
      'Урал',
      'Альпы',
    ];
    this.whatSing = [
      'колыбельную',
      'что такое осень',
      'Перевал',
      'песенка мамонтенка',
      'что-нибудь',
      'лучше помолчи',
    ];
    this.toDo = [
      'играть на гитаре',
      'есть халву',
      'сходить в горы',
      'сделай уже что-нибудь, например поработай',
      'спи',
    ];
    this.parentEl = parentEl;
  }

  funcBot(msg) {
    let msgHtml = '';
    let itemMsg = document.createElement('div');
    itemMsg.className = 'item-message no-favorit';
    itemMsg.innerHTML = `
    ${msg}
    <div class="footer-msg">
      <div class="date-time">${printTime(new Date())}</div>
    </div>
    `;
    this.parentEl.appendChild(itemMsg);

    const question = msg.replace(/^. /, '');

    switch (question) {
      case 'погода':
        msgHtml = this.randomMsg(this.weather);
        break;
      case 'пробки':
        msgHtml = this.randomMsg(this.traffic);
        break;
      case 'где отдохнуть?':
        msgHtml = this.randomMsg(this.toGo);
        break;
      case 'что спеть?':
        msgHtml = this.randomMsg(this.whatSing);
        break;
      case 'что делать?':
        msgHtml = this.randomMsg(this.toDo);
        break;
      default:
        msgHtml = 'Вы отправили пустое сообщение, либо ваш вопрос некорректен. Пожалуйста, уточните ваш вопрос.';
        break;
    }

    itemMsg = document.createElement('div');
    itemMsg.className = 'item-message no-favorit bot';
    itemMsg.innerHTML = `
    ${msgHtml}
    <div class="footer-msg">
      <div class="date-time">${printTime(new Date())}</div>
    </div>
    `;
    this.parentEl.appendChild(itemMsg);
  }

  randomMsg(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
}
