function footer(selector) {
  document.querySelector(selector).innerHTML = new Date().getFullYear();
}

export default footer;
