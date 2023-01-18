// import React from "react";
// import { Component } from "react";
// class Arraymap extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Monsters: [{ name: "rakesh" }, { name: "koushik" }, { name: "nikhil" }],
//     };
//   }

//   render() {
//     return (
//       <>
//         {" "}
//         <div>
//           {this.state.Monsters.map((Monst) => {
//             return <h1> {Monst.name}</h1>;
//           })}
//         </div>
//       </>
//     );
//   }
// }

// export default Arraymap;
// by functions method
// import React from "react";

// let Arraymap = () => {
//   let tiger = {
//     Monsters: [
//       { name: "rakesh", id: "1d" },
//       { name: "koushik", id: "2d" },
//       { name: "nikhil", id: "3d" },
//     ],
//   };
//   return (
//     <div key={tiger.Monsters.id}>
//       {tiger.Monsters.map((hello) => {
//         return <h1>{hello.name}</h1>;
//       })}
//     </div>
//   );
// };
// export default Arraymap;
// adding key to the our array
// import React from "react";
// import { Component } from "react";
// class Arraymap extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Monsters: [{ name: "rakesh",id:'1d' }, { name: "koushik",id:'2d' }, { name: "nikhil" ,id:'3d'}],
//     };
//   }

//   render() {
//     return (
//       <>

//         <div >
//           {this.state.Monsters.map((Monst) => {
//             return <h1 key={Monst.id}> {Monst.name}</h1>;
//           })}
//         </div>
//       </>
//     );
//   }
// }

// export default Arraymap;
// get the details from the api and map and use lifeCyles in the form of object
// import React from "react";
// import { Component } from "react";
// class Arraymap extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Monsters: [{ name: "rakesh",id:'1d' }, { name: "koushik",id:'2d' }, { name: "nikhil" ,id:'3d'}],
//     };
//   }

//   render() {
//     return (
//       <>

//         <div >
//           {this.state.Monsters.map((Monst) => {
//             return <h1 key={Monst.id}> {Monst.name}</h1>;
//           })}
//         </div>
//       </>
//     );
//   }
// }

// export default Arraymap;
// import React from "react";
// import { Component } from "react";

// class Arraymap extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Data:[],
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { Data: users };
//           },
//           () => {}
//         )
//       );
//   }
//   render() {
    
//     return (
//       <div>
//              <input
//                   className="search"
//                   type="search"
//                   placeholder="search Name"
//                   onChange={(event) => {
//                     let searchString = event.target.value.toLocaleLowerCase();
//                     let filterData = this.state.Data.filter((store2) => {
//                       return store2.name
//                         .toLocaleLowerCase()
//                         .includes(searchString);
//                     });
//                     this.setState(() => {
//                       return { Data:filterData };
//                     });
//                   }}
//                 />
//         {this.state.Data.map((store) => {
//           return (
//             <>
//               <div key={store.id}>
//                 <h1> {store.name}</h1>
//                 {/* <p> {store.address.street}</p>
//           <p> {store.address.geo.lat}</p> 
//            {store.email}*/}
//               </div>
//             </>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Arraymap;

// import React from "react";
// import { Component } from "react";

// class Arraymap extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Data:[],
//       searchField:''
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { Data: users };
//           },
//           () => {}
//         )
//       );
//   }
//   render() {
//     let filterData = this.state.Data.filter((store2) => {
//       return store2.name
//         .toLocaleLowerCase()
//         .includes(this.state.searchField);
//     });
    
//     return (
//       <div>
//              <input
//                   className="search"
//                   type="search"
//                   placeholder="search Name"
//                   onChange={(event) => {
//                     let searchField = event.target.value.toLocaleLowerCase();

//                     this.setState(() => {
//                       return { searchField };
//                     });
//                   }}
//                 />
//         {filterData.map((store) => {
//           return (
//             <>
//               <div key={store.id}>
//                 <h1> {store.name}</h1>
         
//               </div>
//             </>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Arraymap;
// code optimization
// import React from "react";
// import { Component } from "react";
// import CardList from "./component/cardlist-component";

// class Arraymap extends Component {
//   constructor() {
//     super();
//     this.state = {
//       Data:[],
//       searchField:''
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { Data: users };
//           },
//           () => {}
//         )
//       );
//   }
//   onSearchChange=(event)=> {
//     let searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {
    
//     let {Data,searchField}=this.state
//     let {onSearchChange}=this
   
//     let filterData = Data.filter((store2) => {
//       return store2.name
//         .toLocaleLowerCase()
//         .includes(searchField);
//     });

//     return (

//       <div>
//              <input
//                   className="search"
//                   type="search"
//                   placeholder="search Name"
//                   onChange={onSearchChange}
//                 />
//          {filterData.map((store) => {
//           return (
//             <>
//               <div key={store.id}>
//                 <h1> {store.name}</h1>
         
//               </div>
//             </>
//           );
//         })}
//         <CardList/>
//       </div>
//     );
//   }
// }

// export default Arraymap;
// using card component 
import React from "react";
import { Component } from "react";
import CardList from "./component/cardlist-component";
import SearchBox from "./component/Search-Box";

class Arraymap extends Component {
  constructor() {
    super();
    this.state = {
      Data:[],
      searchField:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { Data: users };
          },
          // () => {}
        )
      );
  }
  onSearchChange=(event)=> {
    let searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    
    let {Data,searchField}=this.state
    let {onSearchChange}=this
   
    let filterData = Data.filter((store2) => {
      return store2.name
        .toLocaleLowerCase()
        .includes(searchField);
    });

    return (

      <div className="App">
             {/* <input
                  className="search"
                  type="search"
                  placeholder="search Name"
                  onChange={onSearchChange}
                /> */}
                <SearchBox
                className=" second-search-box"
                 placeholder="search Name"
                 onChangeHandler={onSearchChange}/>
       
        <CardList Data={filterData}/>
      </div>
    );
  }
}

export default Arraymap;
