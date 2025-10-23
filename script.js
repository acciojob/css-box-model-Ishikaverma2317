// main.js - small helper script for demonstration (not required by tests)
document.addEventListener('DOMContentLoaded', function () {
  const box = document.getElementById('box');
  // log computed values to console so you can verify them quickly
  const style = window.getComputedStyle(box);
  console.log('width (content-box):', style.width);
  console.log('background-color:', style.backgroundColor);
  console.log('border-width:', style.borderWidth);
  console.log('padding:', style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft);
  console.log('margin:', style.marginTop, style.marginRight, style.marginBottom, style.marginLeft);
});
