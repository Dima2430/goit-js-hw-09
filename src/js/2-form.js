function saveToLS(key="empty",value="") {
    const data = JSON.stringify(value);
    localStorage.setItem(key,data)
}
function loadFromLS(key="empty") {
    const data = localStorage.getItem(key);
    try {
        const result = JSON.parse(data);
        return result;
    } catch (error) {
         return data;
    }
}
function restoreFromLS() {
    const data = loadFromLS(STORAGE_KEY) || {};
    form.elements.email.value = data.email;
    form.elements.message.value = data.input;
}
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', (e) => {
    const userEmail = form.elements.email.value;
    const userText = form.elements.text.value;
    const data = {
        email: userEmail,
        input: userText,
    };
    saveToLS(STORAGE_KEY, data);
})

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = loadFromLS(STORAGE_KEY) || {};
console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
})
