import {createStore} from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        default :
            return state;
    }
}

const store = createStore(counter);

function render() {
    const state = store.getState();
    document.querySelector('#app').innerHTML = 'Counter : ${state}';
}

const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');

incrementButton.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});
decrementButton.addEventListener('click', () =>{
    store.dispatch({ type: 'DECREMENT'});
});

store.subscribe(() =>{
    render();
});

render();
