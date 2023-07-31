import React,{Component} from 'react';
class Kdapp extends Component{
  render(){
  return(
    <div>
    <h1>welcome to Buddy Club</h1>
    <h3>This is about my friends</h3>
    </div>
  );
}
}
class Kdapp1 extends React.Component{
    constructor(){
        super();
        this.state={
           data:[
            {
                "dhivya":"dhirene"
            },
            {
                "irene":"Ira"
            },
            {
                "meborn":"meb"
            }
           ]
        }
    }
    render(){
        return(
            <div>
                <Kdapp/>
                <ul>
                    {this.state.data.map((item)=> <List data={item}/>)}
                </ul>
            </div>
        );
    }
}

class List extends React.Component{
    render(){
        return(
           <ul>
            <li>{this.props.data.dhivya}</li>
             <li>{this.props.data.irene}</li> 
             <li>{this.props.data.meborn}</li> 
           </ul>
        );
    }
}

export default Kdapp1;