import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const o="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",e=>{const t=a.elements.email.value.trim(),s=a.elements.message.value.trim();n(o,{email:t,message:s})});function n(e,t=""){const s=JSON.stringify(t);localStorage.setItem(e,s)}function r(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function m(){const e=r(o)||{};a.elements.email.value=e.email||"",a.elements.message.value=e.message||""}m();a.addEventListener("submit",e=>{e.preventDefault();const t=r(o)||{};console.log(t),localStorage.removeItem(o),a.reset()});
//# sourceMappingURL=commonHelpers2.js.map