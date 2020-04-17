import React,{Component} from 'react';
import {Link} from  'react-router-dom';
import './L1.css';
class L1 extends Component {
	constructor(){
		super()
		this.state={
			vl:true,
			im: "dr",
			ac: true,
			ro:false,
			msg:null,
			nt:null,
			l1: require('./images/door.jpg'),
			l2: require('./images/door.jpg')
		}
		this.onClick=this.onClick.bind(this);
	}
	onClick(e){
		let ans=null;
		var c=Math.random();
		if(c>0.5){
			ans='2';
		}
		else{
			ans='1';
		}
		console.log(c);
		if(this.state.ac===false){
			return;
		}
		this.setState({ac:false});
		if(e==='1'){
			if(e===ans){
				this.setState({l1:require('./images/AC.jpg')});
			}
			else{
				this.setState({l1:require('./images/WA.jpg')});
			}
		}
		else{
			if(e===ans){
				this.setState({l2:require('./images/AC.jpg')});
			}
			else{
				this.setState({l2:require('./images/WA.jpg')});
			}
		}	
		if(e===ans){
			this.setState({
				msg:'Move to next Level',
				nt:'/l2'
			});
			localStorage.setItem('level','2');
			localStorage.setItem('l2','0');
		}
		else{
			this.setState({
				msg:'Go to start menu',
				nt:'/'
			});
		}
		this.setState({ro:true});
	}
	render() {
		return(
			<div id='l1main'>
				<div id='l1tp'>
					<div id='l1tl'>
						<Link 
							to='/'
							id='l1b1'
						>
							Save and exit
						</Link>
					</div>
					<h2>
						First level, if failed you will end up here 
						only so no hints. Lets see how well you can 
						guess. Select the actual door to enter the house.
					</h2>
				</div>
				<div id='l1tr'>
						{this.state.ro?
						<Link 
							to={this.state.nt}
							id='l1b2'
						>
							{this.state.msg}
						</Link>
						:
						<div/>
						}
				</div>
				<div id='l1btm'>
					<img id='l1dl' src={this.state.l1} onClick={() => this.onClick('1')} alt='door'/>
					<img id='l1dr' src={this.state.l2} onClick={() => this.onClick('2')} alt='door'/>
				</div>
			</div>
		)
	}
}

export default L1;