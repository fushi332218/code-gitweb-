import React from 'react';
import Box from './box.jsx'


const Boxes =({boxes,onClickLeft,onClickRight,onDelete, onReset}) => {
    return (
        <React.Fragment>
            <button onClick={onReset} style={{marginBottom: "15px"}}className="btn btn-info">Reset</button>
            {boxes.map(box => (
                <Box 
                key = {box.id}
                // x = {box.x}
                // id = {box.id}
                box={box}
                onClickLeft = {() => onClickLeft(box)}
                onClickRight = {() => onClickRight(box)}
                onDelete={onDelete}
                />
            ))}
        </React.Fragment>
    )
}

// class Boxes extends Component {
//     render() { 
//         return (
//             <React.Fragment>
//                 <button onClick={this.props.onReset} style={{marginBottom: "15px"}}className="btn btn-info">Reset</button>
                
//                 {this.props.boxes.map(box => (
//                     <Box 
//                     key = {box.id}
//                     // x = {box.x}
//                     // id = {box.id}
//                     box={box}
//                     onClickLeft = {() => this.props.onClickLeft(box)}
//                     onClickRight = {() => this.props.onClickRight(box)}
//                     onDelete={this.props.onDelete}
//                     />
//                 ))}
//             </React.Fragment>
//         );
//     }
// }
 
export default Boxes;