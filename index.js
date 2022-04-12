// import { convertAstToHtmlString } from './convertAstToHtmlString';
import { astObject } from './astObject.js';
import { convertAstToHtmlString } from './convertAstToHtmlString.js';

const body = document.getElementsByTagName('BODY')[0];

window.onload = () => {
  try {
    body.innerHTML = convertAstToHtmlString(astObject);
  } catch (error) {
    body.innerHTML = error;
  }
};
