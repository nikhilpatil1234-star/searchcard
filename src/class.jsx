// import React from "react"
// console.log('hi')

// let Print=()=>{
//     return (
//         <>
//     <h1> heloo this </h1>
//     </>
//     )

// }
// export default Print;
import React from "react";
import { Component } from "react";
import "./class.css"

class Pp extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "rakesh", lastName: "patil" },
      company: "civil",
    };
  }

  render() {
    let Change = () => {
      this.setState({
        name: { firstName: "kousik", lastName: "niyogi" },
        company: "javascript",
      });
    };
    return (
      <>
        <h1 className="heading">
          Hi {this.state.name.firstName} {this.state.name.lastName} and my
          strength is {this.state.company}
        </h1>
        <button className="button" onClick={Change}> click here</button>
      </>
    );
  }
}
export default Pp;
