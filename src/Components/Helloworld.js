import React from "react";

// function Helloworld(props){
//     return (
//         <p>Hello {props.name} </p>        
//     )
// }

class Helloworld extends React.Component{
   render(){
    return (
        <h1>Hello {this.props.name}</h1>
    )
   } 
}

export default Helloworld;