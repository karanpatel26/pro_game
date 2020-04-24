import React,{Component} from 'react';
import {Link} from  'react-router-dom';
import './L6.css';
class L6 extends Component {
    constructor(){
        super()
        this.state={
            ch: null,
            dis: "",
            st:0,
            va:null,
            re:1,
            ro:false,
            ans:117,
            nt:null,
            msg:null
        }
        this.onClick=this.onClick.bind(this);
    }
    async onClick(val){
        if(this.state.ro){
            return;
        }
        if(val==='submit'){
            this.setState({ro:true});
            var el=document.getElementById('l6cald');
            if(this.state.st!==1){
                el.innerHTML='Wrong Answer';
                this.setState({
                    nt: '/',
                    msg: 'Go to start menu'
                });
                return;
            }
            var eo=document.getElementById('l6obj0');
            var de=eo.innerHTML;
            var an=this.state.va.get(de);
            if(an===this.state.ans){
                el.innerHTML='Correct Answer';
                this.setState({
                    nt: '/l7',
                    msg: 'Move to next Level'
                });
                return;
            }
            else{
                el.innerHTML='Wrong Answer';
                this.setState({
                    nt: '/',
                    msg: 'Go to start menu'
                });
                return;
            }
        }
        if(val==='clear'){
            var di="";
            this.setState({dis:di});
            var e=document.getElementById('l6cald');
            e.innerHTML=di;
            return;
        }
        if(val==='enter'){
            di=this.state.dis;
            if(this.state.va.has(di)){
                e=document.getElementById('l6cald');
                e.innerHTML="";
                this.setState({dis:""});
                var ne=document.createElement('div');
                var t=document.getElementById('l6obj');
                t.appendChild(ne);
                var d=this.state.st;
                ne.id='l6obj'+d;
                ne.style.textAlign='center';
                ne.style.fontSize='20pt';
                ne.innerHTML=this.state.dis;
                var cl=document.getElementById('l6sth');
                var clc=cl.getBoundingClientRect();
                ne.style.display='';
                ne.style.position='absolute';
                ne.style.left=clc.left-40+'px';
                ne.style.top=clc.top+5+'px';
                ne.style.height='40px';
                ne.style.width='40px';
                ne.style.backgroundColor='blue';
                ne.style.transition='transform 1s  ease-in-out';
                var mv="translate3d("+75+"px,"+0+"px,0)";
                ne.style.transform=mv;
                this.setState({st:d+1});
                await new Promise(r => setTimeout(r, 1000));
                mv="translate3d("+75+"px,"+(290-d*40)+"px,0)";
                ne.style.transform=mv;
                return;
            }
            else if(this.state.st>1 && (di==='+' || di==='-' || di==='*' || di==='/')){
                d=this.state.st;
                e=document.getElementById('l6cald');
                e.innerHTML="";
                this.setState({dis:""});
                var ne1=document.getElementById('l6obj'+(d-1).toString());
                var ne2=document.getElementById('l6obj'+(d-2).toString());
                var c1=""+ne1.innerHTML;
                var c2=""+ne2.innerHTML;
                var c3=0;
                var re=this.state.re;
                this.setState({re:re+1});
                if(di==='+'){
                    c3=this.state.va.get(c2)+this.state.va.get(c1);
                }
                else if(di==='-'){
                    c3=this.state.va.get(c2)-this.state.va.get(c1);
                }
                else if(di==='*'){
                    c3=this.state.va.get(c2)*this.state.va.get(c1);
                }
                else{
                    c3=this.state.va.get(c2)/this.state.va.get(c1);
                }
                var mp=this.state.va;
                mp.set("r"+re,c3);
                this.setState({va:mp});
                ne1.style.transition='transform 0.5s  ease-in-out';
                mv="translate3d("+75+"px,"+0+"px,0)";
                ne1.style.transform=mv;
                ne2.style.transform=mv;
                await new Promise(r => setTimeout(r, 500));
                mv="translate3d("+0+"px,"+0+"px,0)";
                ne1.style.transform=mv;
                await new Promise(r => setTimeout(r, 500));
                ne2.style.transform=mv;
                this.setState({st:d-1});
                ne1.parentNode.removeChild(ne1);
                await new Promise(r => setTimeout(r, 1000));
                ne2.innerHTML="r"+re;
                mv="translate3d("+75+"px,"+0+"px,0)";
                ne2.style.transform=mv;
                await new Promise(r => setTimeout(r, 1000));
                mv="translate3d("+75+"px,"+(290-(d-2)*40)+"px,0)";
                ne2.style.transform=mv;
                return;
            }
            else{
                e=document.getElementById('l6cald');
                e.innerHTML="Invalid";
                e=document.getElementById('l6cald');
                e.innerHTML="";
                this.setState({dis:""});
                return;
            }
        }
        e=document.getElementById('l6cald');
        di=this.state.dis;
        di=di+val;
        this.setState({dis:di});
        e.innerHTML=di;
    }
    componentDidMount(){
        var te=new Map();
        te.set('a',45);
        te.set('b',60);
        te.set('c',12);
        this.setState({va:te});
        var cha=[];
        for(var i=97;i<=122;i++){
            cha.push(String.fromCharCode(i));
        }
        this.setState({ch:cha});
        var e=document.getElementById('l6calb');
        var ex=e.getBoundingClientRect();
        e.style.display='';
        e.style.position='absolute';
        e.style.left=ex.left-ex.width*0.5+'px';
        e=document.getElementById('l6sth');
        var ec=e.getBoundingClientRect();
        e.style.display='';
        e.style.position='absolute';
        e.style.left=ec.left+ex.width*0.5+'px';
        e.style.bottom='310px';
        e.style.width='80px';
        e.style.height='50px';
        e.style.borderRadius='0 20px 0 0';
        e=document.getElementById('l6stv');
        ec=e.getBoundingClientRect();
        e.style.display='';
        e.style.position='absolute';
        e.style.left=ec.left+ex.width*0.5+29+'px';
        e.style.bottom='20px';
        e.style.width='50px';
        e.style.height='290px';
    }
	render() {
		return(
			<div id='l6main'>
                <Link 
                    to='/'
                    id='l6b1'
                >
                    Save and exit
                </Link>
                {this.state.ro?
                    <Link 
                        to={this.state.nt}
                        id='l6b2'
                    >
                        {this.state.msg}
                    </Link>
                :
                    <div/>
                }
                <h3 id='l6if'>
                    To pass the level you have to find the value of the below expression. For that you can use
                    the calculator given below. Also the value of variable like a is stored in the calculator so
                    if you enter a it will use the number mapped to a automatically. Also the calculator is not a
                    normal one. It is a special(or dumb) calculator. It operates like this: 
                        <br/>1) If you enter a number(variable name here) it will store the number in the memory.
                        <br/>2) If you enter a operator it will fetch two latest number from the memory operate the number
                        with the operator and pushes the result into the memory.(It takes latest number
                        as the right operand and second latest as left operand.)
                        <br/>3) Press submit button at the end to complete the level.(There should be
                        just one element(the final answer to the expression) residing in the memory at the
                        time of submission).
                </h3>
                <h2 id='l6ext'>Expression:</h2>
                <h2 id='l6ex'>a+b+c</h2>
                <div id='l6sth'/>
                <div id='l6stv'/>
                <div id='l6obj'/>
                <div id='l6calb'>
                    <div id='l6cald'>
                    </div>
                    <div id='l6calop'>
                        <button className='l6op' onClick={()=>this.onClick('+')}>+</button>
                        <button className='l6op' onClick={()=>this.onClick('-')}>-</button>
                        <button className='l6op' onClick={()=>this.onClick('*')}>x</button>
                        <button className='l6op' onClick={()=>this.onClick('/')}>/</button>
                    </div>
                    {this.state.ch ?
                        <div id='l6calch'>
                            {this.state.ch.map((val,key)=>
                                <button key={key} onClick={()=>this.onClick(val)} className='l6ch'>{val}</button>
                            )}
                        </div>
                    :
                        <div/>
                    }
                    <div id='l6calsu'>
                        <button className='l6calsub' onClick={()=>this.onClick('enter')}>Enter</button>
                        <button className='l6calsub' onClick={()=>this.onClick('clear')}>Clear</button>
                        <button className='l6calsub' onClick={()=>this.onClick('submit')}>Submit</button>
                    </div>
                </div>
            </div>
		)
	}
}

export default L6;