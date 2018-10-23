import store from './redux/store';
import {
    incrementCount
} from './redux/modules/counter';
import {
    decrementCount
} from './redux/modules/counter';


const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const count = document.getElementById("count");

// How will we initially populate this span with content?
count.textContent = null;
incrementButton.addEventListener("click", () => {
    store.dispatch(incrementCount());
    count.textContent = store.getState().counter.count;
});
decrementButton.addEventListener("click", () => {
    store.dispatch(decrementCount());
    count.textContent = store.getState().counter.count;
});



// // GET WHOLE STATE FROM OUR REDUX STORE
// console.log(store.getState());

// // DISPATCH AN ACTION
// console.log(store.dispatch(incrementCount()));
// console.log(store.dispatch(decrementCount()));