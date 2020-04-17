import React,{Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

class PR extends Component {
	render() {
        var t='/l'+localStorage.getItem('level');
        if(this.props.path===t){
            return(
                <Route exact path={this.props.path} component={this.props.component}/>
            )
        }
        else{
            return(<Redirect to='/'/>);
        }
	}
}

export default PR;
