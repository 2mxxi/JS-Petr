"use strict";

window.addEventListener("DOMContentLoaded", () => {

  // Tabs

  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((el) => {
      el.classList.add('hide');
      el.classList.remove('show', 'fade');
    });

    tabs.forEach((el) => {
      el.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(ind = 0) {
    tabsContent[ind].classList.add('show', 'fade');
    tabsContent[ind].classList.remove('hide');
    tabs[ind].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i)=>{
        if(target == item){
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })

  // Timer

  const deadline = '2022-07-10';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),         //От дедлайна отнимаем текущую дату и вр. получаем к-во времени в миллисек.
          days = Math.floor( t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(( t / (1000 * 60 * 60) % 24)),           //Общее к-во часов делим на 24 и получаем остаток от деления(остаток, которого не хватает до полных суток) - т.к. к-во часов может быть больше 24, -> нужно считать уже за 1 день.
          minutes = Math.floor(( t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);
    return {                                                         //Возвращаем объект
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function getZero(num) {                                            //Проверка значений в таймере и подстановка "0" спереди, если число меньше 10.
    if (num >= 0 && num <10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {                         //selector - будем передавать форму таймера со страницы
    const timer = document.querySelector(selector),              //создаем переменные, в которые будем помещать элементы со страницы
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updatedClock, 1000);         //Обновление функции updatedClock() каждую секунду

    updatedClock();                                               //Запускаем функцию updatedClock(), чтобы не ждать первую секунду до обновления

    function updatedClock() {
      const t = getTimeRemaining(endtime);                       //Расчет времени на текущую секунду

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if(t.total <= 0) {                                         //Если количество оставшихся миллисекунд до акции 0 или меньше 0, остановить обновление ф-ии и сбросит значения по 0
        clearInterval(timeInterval);
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
      }
    };

  };

  setClock('.timer', deadline);

  //Modal

  const trigger = document.getElementsByClassName('open'),
        close = document.querySelector('.modal__close'),
        modal = document.querySelector('.modal');

  function openModal(){
    modal.style.display = 'block';
    modal.classList.add('fade');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }

  [...trigger].forEach(el => {
    el.addEventListener('click', openModal);
  })

  function closeModal(){
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  close.addEventListener('click', closeModal)

  modal.addEventListener('click', (event)=>{                 //Если клик по затемненноый области, закрыть окно
    if(event.target === modal){
      closeModal();
    }
  })

  document.addEventListener('keydown', (event)=>{                        //Закрытие по нажати Esc 
    if(event.code === 'Escape' && modal.style.display === 'block'){     //Проверяем, нажат ли esc и откыто ли сейчас окно
      closeModal()
    }
  })

  const modalTimerId = setTimeout(openModal, 5000)

  // window.pageYOffset + document.documentElement.clientHeight    //Высота прокрученной части и высота клиента(окна)
  // document.documentElement.scrollHeight    //Полная высота

  function shiwModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
      openModal();
      window.removeEventListener('scroll', shiwModalByScroll);
     }
  }


  window.addEventListener('scroll', shiwModalByScroll);

  // Классы для карточек

  const menuWrapper = document.querySelector('.menu__field')
  const menuContainer = menuWrapper.querySelector('.container')

  class Card {
    constructor(img, heading, text, alttext, price){
      this.img = img;
      this.heading = heading;
      this.text = text;
      this.price = price;
      this.alttext = alttext;
      this.usdRurcourse = 60;
      this.currencyConvert();
    }
    addCard(){
      menuContainer.insertAdjacentHTML('afterbegin', `<div class="menu__item"><img src="${this.img}" alt="${this.alttext}"><h3 class="menu__item-subtitle">${this.heading}</h3><div class="menu__item-descr">${this.text}</div><div class="menu__item-divider"></div><div class="menu__item-price"><div class="menu__item-cost">Цена:</div><div class="menu__item-total"><span>${this.price}</span> руб./день</div></div></div>`)
    }
    currencyConvert(){
      this.price = this.price * this.usdRurcourse;
    }
  }


  // const cardMeatless = new Card('img/tabs/post.jpg', 'Меню Постное', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 'Меню Постное', 8)
  // cardMeatless.addCard()
  // const cardPremium = new Card('img/tabs/elite.jpg', 'Меню “Премиум“', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 'Меню Премиум', 10)
  // cardPremium.addCard()
  // const cardFitness = new Card('img/tabs/vegy.jpg', 'Меню “Фитнес“', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!','Меню Фитнес', 6)
  // cardFitness.addCard()

  // или

  new Card('img/tabs/post.jpg', 'Меню Постное', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 'Меню Постное', 8).addCard()
  new Card('img/tabs/elite.jpg', 'Меню “Премиум“', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 'Меню Премиум', 10).addCard()
  new Card('img/tabs/vegy.jpg', 'Меню “Фитнес“', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!','Меню Фитнес', 6).addCard()

});