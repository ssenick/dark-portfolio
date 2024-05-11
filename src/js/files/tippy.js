// Подключение функционала "Чертогов Фрилансера"
import { isMobile, FLS } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение cтилей из src/scss/libs
import '../../scss/libs/tippy.scss';
// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy('[data-tippy-content]', {
  placement: 'left-start',
  allowHTML: true,
  interactive: true,
  maxWidth: 'auto',
  offset: [10, 10],
  arrow: false,
  appendTo: () => document.querySelector('.content-block'),
});
