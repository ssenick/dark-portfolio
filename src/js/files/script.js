// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const lines = document.querySelectorAll('.line');
const opacityText = document.querySelectorAll('[data-opacity-text]');
const wrapperBlock = document.querySelector('.wrapper');
if (wrapperBlock && wrapperBlock.classList.contains('wrapper_full')) {
  if (lines.length != 0) {
    let delay = 0;
    lines.forEach((line) => {
      line.style.transitionDelay = delay + 0.1 + 's';
      delay += 0.05;
    });
  }
  //  if (opacityText.length != 0) {
  //    let delay = 0.5;
  //    opacityText.forEach((line) => {
  //      line.style.transitionDelay = delay + 0.1 + 's';
  //      delay += 0.05;
  //    });
  //  }
}
const dataOpacityText = document.querySelectorAll('[data-opacity-text]');

if (dataOpacityText.length > 0 && dataOpacityText) {
  let delay = 0.3;

  dataOpacityText.forEach((el) => {
    let dd = Number(delay.toFixed(1));
    const content = el.textContent;
    el.innerHTML = `<span class="animation"><span style="transition-delay:${dd + 0.1}s;">${content}</span></span>`;
    delay += 0.1;
  });
}

//=================================

// const dataHoveParents = document.querySelectorAll('[data-hover-parent]');
// dataHoveParents.length ? menuEffect() : null;

// function menuEffect() {
//   dataHoveParents.forEach((dataHoveParent) => {
//     const dataHoverTarget = dataHoveParent.querySelectorAll('[data-hover-target]');
//     const effectSpeed = dataHoveParent.dataset.hoverParent ? dataHoveParent.dataset.hoverParent : 500;

//     dataHoverTarget.length ? menuEffectItem(effectSpeed, dataHoverTarget) : null;

//     function menuEffectItem(effectSpeed, dataHoverTarget) {
//       const effectTransition = `transition: all ${effectSpeed}ms ease ;`,
//         effectDelay = `transition: all 0s ease ${effectSpeed}ms;`,
//         effectHover = `transition: translate3d(0px, 0px, 0px);`,
//         effectTop = `transform: translate3d(0px, -105%, 0px);`,
//         effectBottom = `transform: translate3d(0px, 105%, 0px);`,
//         effectLeft = `transform: translate3d(105%, 0px, 0px);`,
//         effectRight = `transform: translate3d(-105%, 0px, 0px);`,
//         colorTextDark = `color:#1e1e1d;transition: all 0.2s ease 0s;position:relative;z-index:1;`,
//         colorTextInherit = `color:inherit;transition: all 0.2s ease 0s;`;

//       dataHoveParent.hasAttribute('data-hover-horizon') ? menuEffectHorizont() : menuEffectVertical();

//       // Horizont
//       function menuEffectHorizont() {
//         setFirstStyle(dataHoverTarget, effectLeft, effectRight);

//         const leftTracking = function (link, top, bottom) {
//           link.onmouseenter = function (mouse) {
//             const edge = closestEdgeLeftRight(mouse, this);
//             bottom.style.cssText = effectHover + effectTransition;
//             top.style.cssText = effectHover + effectDelay;
//             const content = link.querySelector('[data-hover-content]');
// 				content.style.cssText = colorTextDark;
//             link.onmouseleave = function (mouse) {
//               const edge = closestEdgeLeftRight(mouse, this);
//               if (edge === 'Лево') {
//                 setFirstStyle(dataHoverTarget, effectLeft, effectRight, rightTracking, content);
//                 mouse.fromElement.querySelector('._hover_bottom').style.cssText = effectRight + effectTransition;
//               } else {
//                 top.style.cssText = effectRight;
//                 bottom.style.cssText = effectLeft + effectTransition;
//                 content.style.cssText = colorTextInherit;
//               }
//             };
//           };
//         };
//         const rightTracking = function (link, top, bottom) {
//           link.onmouseenter = function (mouse) {
//             const edge = closestEdgeLeftRight(mouse, this);
//             bottom.style.cssText = effectHover + effectDelay;
//             top.style.cssText = effectHover + effectTransition;
//             const content = link.querySelector('[data-hover-content]');
//             content.style.cssText = colorTextDark;
//             link.onmouseleave = function (mouse) {
//               const edge = closestEdgeLeftRight(mouse, this);
//               if (edge === 'Лево') {
//                 top.style.cssText = effectRight + effectTransition;
//                 bottom.style.cssText = effectLeft;
//                 content.style.cssText = colorTextInherit;
//               } else {
//                 setFirstStyle(dataHoverTarget, effectLeft, effectRight, leftTracking, content);
//                 mouse.fromElement.querySelector('._hover_top').style.cssText = effectLeft + effectTransition;
//               }
//             };
//           };
//         };
//         dataHoveParent.onmouseenter = function (mouse) {
//           const edge = closestEdgeLeftRight(mouse, this);
//           if (edge === 'Лево') {
//             setFirstStyle(dataHoverTarget, effectLeft, effectRight, leftTracking);
//           } else {
//             setFirstStyle(dataHoverTarget, effectLeft, effectRight, rightTracking);
//           }
//         };
//       }
//       // Vertical
//       function menuEffectVertical() {
//         setFirstStyle(dataHoverTarget, effectBottom, effectTop);

//         const topTracking = function (link, top, bottom) {
//           link.onmouseenter = function (mouse) {
//             const edge = closestEdgeTopBottom(mouse, this);
//             bottom.style.cssText = effectHover + effectTransition;
//             top.style.cssText = effectHover + effectDelay;
//             const content = link.querySelector('[data-hover-content]');
//             content.style.cssText = colorTextDark;

//             link.onmouseleave = function (mouse) {
//               const edge = closestEdgeTopBottom(mouse, this);
//               if (edge === 'Верх') {
//                 setFirstStyle(dataHoverTarget, effectBottom, effectTop, bottomTracking, content);
//                 mouse.fromElement.querySelector('._hover_bottom').style.cssText = effectTop + effectTransition;
//               } else {
//                 top.style.cssText = effectTop;
//                 bottom.style.cssText = effectBottom + effectTransition;
//                 content.style.cssText = colorTextInherit;
//               }
//             };
//           };
//         };

//         const bottomTracking = function (link, top, bottom) {
//           link.onmouseenter = function (mouse) {
//             const edge = closestEdgeTopBottom(mouse, this);
//             bottom.style.cssText = effectHover + effectDelay;
//             top.style.cssText = effectHover + effectTransition;
//             const content = link.querySelector('[data-hover-content]');
//             content.style.cssText = colorTextDark;
//             link.onmouseleave = function (mouse) {
//               const edge = closestEdgeTopBottom(mouse, this);
//               if (edge === 'Верх' || edge === 'Лево' || edge === 'Право') {
//                 top.style.cssText = effectTop + effectTransition;
//                 bottom.style.cssText = effectBottom;
//                 content.style.cssText = colorTextInherit;
//               } else {
//                 setFirstStyle(dataHoverTarget, effectBottom, effectTop, topTracking, content);
//                 mouse.fromElement.querySelector('._hover_top').style.cssText = effectBottom + effectTransition;
//               }
//             };
//           };
//         };

//         dataHoveParent.onmouseenter = function (mouse) {
//           const edge = closestEdgeTopBottom(mouse, this);
//           if (edge === 'Верх') {
//             setFirstStyle(dataHoverTarget, effectBottom, effectTop, topTracking);
//           } else {
//             setFirstStyle(dataHoverTarget, effectBottom, effectTop, bottomTracking);
//           }
//         };
//       }

//       //================================= additional functions
//       function setFirstStyle(liks, parameterA, parameterB, parameterFunction = null, contentStyle = null) {
//         liks.forEach((i) => {
//           i.style.cssText = `position:relative;overflow:hidden`;
//           const a = i.querySelector('._hover_top');
//           const b = i.querySelector('._hover_bottom');
//           a.style.cssText = parameterA;
//           b.style.cssText = parameterB;
//           parameterFunction !== null ? parameterFunction(i, a, b) : null;
//           contentStyle !== null ? (contentStyle.style.cssText = `color:inherit;transition: all 0.2s ease 0s`) : null;
//         });
//       }

//       function closestEdgeTopBottom(mouse, elem) {
//         const elemBounding = elem.getBoundingClientRect(),
//           elementTopEdge = elemBounding.top,
//           elementBottomEdge = elemBounding.bottom,
//           mouseY = mouse.pageY,
//           topEdgeDist = Math.abs(elementTopEdge - mouseY),
//           bottomEdgeDist = Math.abs(elementBottomEdge - mouseY),
//           min = Math.min(topEdgeDist, bottomEdgeDist);

//         switch (min) {
//           case topEdgeDist:
//             return 'Верх';
//           case bottomEdgeDist:
//             return 'Низ';
//         }
//       }
//       function closestEdgeLeftRight(mouse, elem) {
//         const elemBounding = elem.getBoundingClientRect(),
//           elementLeftEdge = elemBounding.left,
//           elementRightEdge = elemBounding.right,
//           mouseX = mouse.pageX,
//           leftEdgeDist = Math.abs(elementLeftEdge - mouseX),
//           rightEdgeDist = Math.abs(elementRightEdge - mouseX),
//           min = Math.min(leftEdgeDist, rightEdgeDist);

//         switch (min) {
//           case leftEdgeDist:
//             return 'Лево';
//           case rightEdgeDist:
//             return 'Право';
//         }
//       }
//     }
//   });
// }
//=================================
// Отримуємо масив елементів
const menuLinksWrappers = document.querySelectorAll('[data-hover-parent]');
// Якщо є елементи, запускаємо функцію
menuLinksWrappers.length ? menuEffect() : null;

// Основна функція
function menuEffect() {
  // Перебір елементів та пошук пунктів меню
  menuLinksWrappers.forEach((menuLinksWrapper) => {
    // Отримуємо швидкість ефекту (ms)
    const effectSpeed = menuLinksWrapper.dataset.lineEffect ? menuLinksWrapper.dataset.lineEffect : 500;
    menuLinksWrapper.hasAttribute('data-hover-horizon') ? horizonLinks() : normalLinks();

    function normalLinks() {
      const menuLinks = menuLinksWrapper.querySelectorAll('[data-hover-target]');
      // Якщо є пункти меню, запускаємо функцію
      menuLinks.length ? menuEffectItem(menuLinks, effectSpeed) : null;
    }
    function horizonLinks() {
      const menuLinks = menuLinksWrapper.querySelectorAll('[data-hover-target]');
      menuLinks.length ? menuEffectItemHorizont(menuLinks, effectSpeed) : null;
    }
  });
  function menuEffectItemHorizont(menuLinks, effectSpeed) {
    // Перелік констант зі стилями різних станів
    const effectTransition = `transition: transform ${effectSpeed}ms ease;`;
    const effectHover = `transform: translate3d(0px, 0%, 0px);`;
    const effectLeft = `transform: translate3d( -105%,0px, 0px);`;
    const effectRight = `transform: translate3d(105%, 0px, 0px);`;
    // Перебір елементів та додавання HTML-коду для роботи ефекту
    menuLinks.forEach((menuLink) => {
      menuLink.style.cssText = `overflow: hidden;position: relative;`;
      if (!menuLink.classList.contains('_active')) {
        menuLink.insertAdjacentHTML(
          'beforeend',
          `
				<span style="transform: translate3d(105%,0px,0px);" class="_hover">
					<span style="transform: translate3d(-105%,0px,0px);" class="_hover__text">${menuLink.textContent}</span>
				</span>
			`
        );

        // При виникнені подій наведення та переведення курсору
        // викликаємо функцію menuLinkActions()
        menuLink.onmouseenter = menuLink.onmouseleave = menuLinkActions;
        if (menuLink.classList.contains('_active')) {
          menuLink.querySelector('._hover__text').style.cssText = effectHover;
        }
        // Функція подій курсору
        function menuLinkActions(e) {
          // Константи елементів
          const menuLink = e.target;
          const menuLinkItem = menuLink.querySelector('._hover');
          const menuLinkText = menuLink.querySelector('._hover__text');

          // Отримання половини висоти елементу
          const menuLinkHeight = menuLink.offsetWidth / 2;
          // Отримання позиції курсору при зваємодії з елементом
          const menuLinkPos = e.pageX - (menuLink.getBoundingClientRect().left + scrollX);

          // При наведенні курсору
          if (e.type === 'mouseenter') {
            // В залежності від позиції курсору додаємо певні стилі
            menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectRight : effectLeft;
            menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectLeft : effectRight;
            // З певною затримкою змінюємо стилі та відображаємо ефект
            setTimeout(() => {
              menuLinkItem.style.cssText = effectHover + effectTransition;
              menuLinkText.style.cssText = effectHover + effectTransition;
            }, 5);
          }
          // При переведенні курсору
          if (e.type === 'mouseleave') {
            // В залежності від позиції курсору додаємо певні стилі
            menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectRight + effectTransition : effectLeft + effectTransition;
            menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectLeft + effectTransition : effectRight + effectTransition;
          }
        }
      }
    });
  }
  function menuEffectItem(menuLinks, effectSpeed) {
    // Перелік констант зі стилями різних станів
    const effectTransition = `transition: transform ${effectSpeed}ms ease;`;
    const effectHover = `transform: translate3d(0px, 0%, 0px);`;
    const effectTop = `transform: translate3d(0px, -105%, 0px);`;
    const effectBottom = `transform: translate3d(0px, 105%, 0px);`;

    // Перебір елементів та додавання HTML-коду для роботи ефекту
    menuLinks.forEach((menuLink) => {
      menuLink.style.cssText = `overflow: hidden;position: relative;`;
      if (!menuLink.classList.contains('_active')) {
        menuLink.insertAdjacentHTML(
          'beforeend',
          `
				<span style="transform: translate3d(0px,105%,0px);" class="_hover">
					<span style="transform: translate3d(0px,-105%,0px);" class="_hover__text">${menuLink.textContent}</span>
				</span>
			`
        );

        // При виникнені подій наведення та переведення курсору
        // викликаємо функцію menuLinkActions()
        menuLink.onmouseenter = menuLink.onmouseleave = menuLinkActions;
        if (menuLink.classList.contains('_active')) {
          menuLink.querySelector('._hover__text').style.cssText = effectHover;
        }
      }
    });

    // Функція подій курсору
    function menuLinkActions(e) {
      // Константи елементів
      const menuLink = e.target;
      const menuLinkItem = menuLink.querySelector('._hover');
      const menuLinkText = menuLink.querySelector('._hover__text');

      // Отримання половини висоти елементу
      const menuLinkHeight = menuLink.offsetHeight / 2;
      // Отримання позиції курсору при зваємодії з елементом
      const menuLinkPos = e.pageY - (menuLink.getBoundingClientRect().top + scrollY);

      // При наведенні курсору
      if (e.type === 'mouseenter') {
        // В залежності від позиції курсору додаємо певні стилі
        menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectBottom : effectTop;
        menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectTop : effectBottom;
        // З певною затримкою змінюємо стилі та відображаємо ефект
        setTimeout(() => {
          menuLinkItem.style.cssText = effectHover + effectTransition;
          menuLinkText.style.cssText = effectHover + effectTransition;
        }, 5);
      }
      // При переведенні курсору
      if (e.type === 'mouseleave') {
        // В залежності від позиції курсору додаємо певні стилі
        menuLinkItem.style.cssText = menuLinkPos > menuLinkHeight ? effectBottom + effectTransition : effectTop + effectTransition;
        menuLinkText.style.cssText = menuLinkPos > menuLinkHeight ? effectTop + effectTransition : effectBottom + effectTransition;
      }
    }
  }
}
//=================================
//img
const casesList = document.querySelector('.cases-list');
if (casesList && !isMobile.any()) {
  const contentBlock = casesList.closest('.content-block');
  const imageblock = contentBlock.querySelector('.content-block__image');
  const casesListLinks = casesList.querySelectorAll('.cases-list__link ');
  if (casesListLinks.length > 0) {
    casesListLinks.forEach((link) => {
      link.addEventListener('mouseenter', function (e) {
        const srcImage = link.querySelector('img').src;
        addImageBlock(srcImage, imageblock);
      });
      link.addEventListener('mouseleave', function (e) {
        removeImageBlock(imageblock);
      });
    });
    function addImageBlock(src, block) {
      const imageClone = new Image();
      imageClone.style.cssText = `opacity:1;`;
      imageClone.src = src;
      block.prepend(imageClone);
    }
    function removeImageBlock(block) {
      const img = block.querySelector('img');
      img.style.cssText = `opacity:0;`;
      img.remove();
    }
  }
}

//=================================
