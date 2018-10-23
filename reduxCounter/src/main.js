import store from './redux/store';
import {
    incrementCount
} from './redux/modules/counter';
import {
    decrementCount
} from './redux/modules/counter';
import {
    updateCounterName
} from './redux/modules/name';


const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const count = document.getElementById("count");

count.textContent = null;
incrementButton.addEventListener("click", () => {
    store.dispatch(incrementCount());
    count.textContent = store.getState().counter.count;
});
decrementButton.addEventListener("click", () => {
    store.dispatch(decrementCount());
    count.textContent = store.getState().counter.count;
});


const nameInput = document.getElementById("name");
const countedName = document.getElementById("counted-name");

nameInput.addEventListener("input", event => {
    store.dispatch(updateCounterName(event.target.value));
    countedName.textContent = store.getState().counterName.name;
});


// // GET WHOLE STATE FROM OUR REDUX STORE
// console.log(store.getState());

// // DISPATCH AN ACTION
// console.log(store.dispatch(incrementCount()));
// console.log(store.dispatch(decrementCount()));