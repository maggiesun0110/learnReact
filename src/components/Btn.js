// function Btn(){
//     const clickHandler = 
//         () => console.log("clicked");

//     return(
//         <button onClick = {clickHandler}>
//             Click me
//         </button>
//     );
// }

// export default Btn;
function Btn(props){
    const clickHandler = 
        () => console.log("mouse over");
    
    return(
        <button onMouseOver = {clickHandler}>
            {props.text}
        </button>
    );
}

export default Btn;