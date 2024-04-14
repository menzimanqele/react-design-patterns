import React  from "react";
export function UncontrolledForm(){
    const nameRef = React.createRef;
    const ageReg = React.createRef;
    function handleSubmit (e){
        console.log(nameRef.current.value);
        console.log(ageReg.current.value);
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" ref={nameRef}/>
            <input name="age" type="number" placeholder="age" ref={ageReg}/>
            <intput type="submit" value="submit"/>
        </form>
    )
}