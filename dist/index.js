'use strict';

//import {createStore} from 'redux';
var _Redux = Redux,
    createStore = _Redux.createStore;

function counter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var action = arguments[1];

    switch (action.type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        default:
            return state;
    }
}

var store = createStore(counter);

function render() {
    var state = store.getState();
    document.querySelector('#app').innerHTML = 'Counter : ' + state;
}

var incrementButton = document.querySelector('#increment');
var decrementButton = document.querySelector('#decrement');

incrementButton.addEventListener('click', function () {
    store.dispatch({ type: 'INCREMENT' });
});
decrementButton.addEventListener('click', function () {
    store.dispatch({ type: 'DECREMENT' });
});

store.subscribe(function () {
    render();
});

render();
//# sourceMappingURL=index.js.map