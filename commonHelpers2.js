import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function n(t="empty",e=""){const o=JSON.stringify(e);localStorage.setItem(t,o)}function s(t="empty"){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}const r="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",t=>{const e=a.elements.email.value,o=a.elements.text.value;n(r,{email:e,input:o})});a.addEventListener("submit",t=>{t.preventDefault();const e=s(r)||{};console.log(e),localStorage.removeItem(r),a.reset()});
//# sourceMappingURL=commonHelpers2.js.map