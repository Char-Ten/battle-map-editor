import * as React from 'react';
import ReactDOM from "react-dom";
import {HashRouter} from 'react-router-dom';
import {Provider} from "mobx-react";



import RootStore from "./stores/index";

import Index from "src/pages/Index"
import "src/common/styles/reset.css";
const App=()=>{
	return (
		<Provider {...RootStore}>
			<Index/>
		</Provider>
	)
}
ReactDOM.render(<App/>,document.getElementById("app"))