import React, { Component } from 'react';


// const NarBar = (props) => {
//     return (
//        <nav className="navbar navbar-dark bg-dark">
//             <div className="container-fluid">
//                                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//                                     <span className="navbar-toggler-icon"></span>
//                                 </button>
//                                 <span style={{color: "red"}}>Boxes Count: {props.boxesCount}</span>
//                             </div>
//                         </nav>
//         );

// }

class NarBar extends Component {
    state = {  } 

    // constructor () {
    //     super();
    //     console.log("NavBar - Constructor");
    // }

    // componentDidMount() {
    //     console.log("NavBar - Mount");
    // }

    componentDidUpdate () {
        console.log("Navbar - Updated");
    }

    render() { 
        console.log("NavBar - Rendered");
        return (
            <React.Fragment><nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <span style={{color: "red"}}>Boxes Count: {this.props.boxesCount}</span>
                    </div>
                </nav></React.Fragment>
        );
    }
}
 
export default NarBar;