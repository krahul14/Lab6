// Model
const shoppingList = [];

// View
const render = function () {
    const shoppingListElem = document.getElementById('shoppingList');
    shoppingListElem.innerHTML = '';

    for (const item of shoppingList) {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        shoppingListElem.appendChild(listItem);
    }
};

// Controller
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');

addItemBtn.addEventListener('click', function () {
    const item = itemInput.value;
    shoppingList.push(item);
    itemInput.value = '';

    render();
});
// localstorage server

class LocalStorageSaver {
    constructor() {
        this.storage = window.localStorage;
    }

    save(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    load(key) {
        return JSON.parse(this.storage.getItem(key));
    }
}