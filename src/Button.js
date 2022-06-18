const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
        className = {buttonText === reqType ? "selected" : null} //determines className based on the prop - for CSS etc. class "className" vs null className
        type = "button"
        onClick = {() => setReqType(buttonText)} 
        // Using () = calls this function at the point the code is encountered. Without parentheses you're not actually calling the function. A function name without the parentheses is a reference to the function.
        
        //inline function is a special type of anonymous function which is assigned to a variable, or in other words, an anonymous function defined with a name. Unlike normal function, they are created at runtime - set and forget as run just once (so hence no function name). Can be dropped in and around like a value for a variable /  value for another function.
    >
        {buttonText}
    </button>
  )
}

export default Button