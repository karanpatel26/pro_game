import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Info from './components/Info';
import L1 from './components/L1';
import L2 from './components/L2';
import L3 from './components/L3';
import L4 from './components/L4';
import L5 from './components/L5';
import Nf from './components/Nf';
//import PR from './components/PR';

class App extends Component {
	render() {
		if(localStorage.getItem('level')===null){
			localStorage.setItem('level','1');
		}
		return(
			<BrowserRouter>
				<Switch>
				<Route exact path='/' component={Info}/>
				<Route exact path='/l1' component={L1}/>
				<Route exact path='/l2' component={L2}/>
				<Route exact path='/l3' component={L3}/>
				<Route exact path='/l4' component={L4}/>
				<Route exact path='/l5' component={L5}/>
				<Route  component={Nf}/>
				</Switch>
      		</BrowserRouter>
		);
	}
}

export default App;
