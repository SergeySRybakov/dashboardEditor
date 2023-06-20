/* import { createRoot } from 'react-dom/client'; */
import Editor from './components/editor';
import ReactDOM from 'react-dom/client';
import {
	sources
} from 'webpack';
import App from "./components/dashElements/chart";
import App2 from "./components/dashElements/array";
import App3 from "./components/dashElements/ui";

let board = document.querySelectorAll(".board");

board.forEach(function (e, i) {
	e.addEventListener('click', addBoard());
});

function addBoard() {
	let box = ReactDOM.createRoot(
		board[i]
	);
	if (radio[0].checked) {
		box.render( < App / > );
	} else if (radio[1].checked) {
		box.render( < App2 / > );
	} else if (radio[2].checked) {
		box.render( < App3 / > );
	} else {
		console.log("erorr");
	}
}

let radio = document.querySelectorAll("#radio"),
	sub = document.getElementById("sub-rad");


/* root.render( < Editor / > ); */
/* box1.render( < App / > );
box2.render( < App2 / > );
box3.render( < App3 / > ); */
