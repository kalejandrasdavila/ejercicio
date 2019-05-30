import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
Button, Card, CardBody, CardFooter, Label, Alert,
CardHeader, Col, FormGroup, Input, Row,
} from 'reactstrap'

class App extends React.Component{
constructor(props){
super(props);
this.state={
name:'', conver:''
};
this.handleChange = this.handleChange.bind(this);
this.handleSaveClick = this.handleSaveClick.bind(this);
}

// init(){
// this.setState(this.mensaje)
// }
handleChange(e){
const value = e.target.value;

this.setState({
name : value
})
}


handleSaveClick(e){

console.log(this.state.name);
console.log(this.state.name.toUpperCase());
const convert = this.state.name.toUpperCase();


e.preventDefault();   
fetch('http://localhost:3000/api/app.js')
   // .then(response =>  response.json())
    .then(this.setState({conver : convert}) 
         
    )

  


}

render(){
return(
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<div className="animated fadeIn">
<Row>
<Col lg="12">
<Card>
<CardHeader>
<strong>Texto|String a convertir</strong>
</CardHeader>
<CardBody>
<Row>
<Col xs="12" sm="4">
<FormGroup>
<Input type="text" name='name'
value={this.state.name}
onChange={this.handleChange} />
<br></br>
<Button onClick={this.handleSaveClick}  size="sm" color="primary">MAYUS </Button>
<br></br>
<Input type="text" name='conver' value= {this.state.conver} />
        
</FormGroup>
</Col>
</Row>
</CardBody>
</Card>
</Col>
</Row>
</div>
</header>
    </div>
);
}
}

export default App;