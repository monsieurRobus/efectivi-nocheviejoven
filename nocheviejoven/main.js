import './style.css'
import { frasesCompra, frases } from './utils';
import efectivis from '/efectivis.webp'
import logoEW from '/logoEW.png'
import 'material-icons/iconfont/material-icons.css';

document.querySelector('#app').innerHTML = `
  <div class="bg-black flex flex-col justify-center ">
    <div class="flex flex-col items-center  h-auto pt-12 md:pt-0">
      <img id="logo" class="md:w-1/3 opacity-0 transition-opacity ease-in-out delay-150" duration-300 src="${logoEW}" alt="logo">  
      <div class="relative w-full flex h-1/2 md:h-auto justify-center items-center">
        <img id="mochachos" class="md:w-1/3 transition-opacity ease-in-out delay-500 opacity-0 duration-500 md:-m-24 -m-12 asbolute z-0" src="${efectivis}" alt="efectivis">
        <div id="content" class="absolute flex flex-col justify-center text-center text-9xl opacity-0 transition-opacity ease-in-out delay-700 duration-700 drop-shadow-[0_35px_35px_rgba(100,100,100,1)] z-24">
          <span class="text-white text-lg">${frases()}</span>
        </div>
      </div>
      
    </div>
      <div id="buttons" class="z-50 mt-32 md:mb-20 mb-56 flex flex-col justify-center items-center"></div>
      <div id="footer" class="flex flex-col justify-center w-screen bg-black text-white fixed bottom-0 text-center text-sm">
        <div class="flex justify-center text-xs"><span class="px-4">¿Quieres contratarnos?</span><a href=""></a><a class="flex justify-center" href="tel://663779386"><span class="material-icons-round text-[4px] w-12">phone_enabled</span>Llámanos</a><a class="flex justify-center" href="tel://663779386"><span class="material-icons-round text-[4px] w-12">mail</span>Escribenos</a></div>
        <div>© 2024 Efectiviwonders. Todos los derechos reservados.</div>
      </div>
  </div>
`

window.addEventListener("load", function (event) {
  fadeIn();
  countDown();
  addButton();
});

function fadeIn(){
  const logo = document.getElementById('logo');
  const mochachos = document.getElementById('mochachos');
  const content = document.getElementById('content');

  logo.classList.remove('opacity-0');
  logo.classList.add('opacity-100');
  mochachos.classList.remove('opacity-0');
  mochachos.classList.add('opacity-45');
  content.classList.remove('opacity-0');
  content.classList.add('opacity-100');
  
}

function countDown(){
  let countDownDate = new Date("Dec 28, 2024 19:00:00").getTime();
  const content = document.getElementById('content');
  const countDown = document.createElement('div');
  countDown.classList.add('text-white', 'md:text-9xl', 'text-6xl', 'text-center', 'z-50');

  content.appendChild(countDown);
  let time;
  setInterval(() => {

    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    time = `${days}:${hours}:${minutes}:${seconds}`;
    countDown.innerHTML = time;
    content.appendChild(countDown);
    


  }, 1000);
}

function addButton(){
  const content = document.getElementById('buttons');
  const button = document.createElement('a');
  button.classList.add('bg-blue-400', 'text-black', 'text-lg','text-center', 'p-2', 'w-64', 'z-50','rounded-lg', 'hover:bg-black', 'hover:text-white');
  button.innerHTML = frasesCompra();
  button.href="https://www.google.com"
  content.appendChild(button);
}