import { useEffect, useState } from "react";
export function ControlledForm(){
    const [inputErrors, setInputErrors] = useState('');
    const [name, setName] = useState('');
    const [hairColor,setHairColor] = useState('');
    
    useEffect(()=>{
if(name.length<2){
    console.log('Name must be more than 2 characters long');
    setInputErrors('Name must be more than 2 characters long');
}else {
    setInputErrors('');
}
    },[name])

    return(
        <form>
            {inputErrors && <p>{inputErrors} </p>}
            <input name="name" type="text" placeholder="Name" value={name} onChange={e=> setName(e.target.value)}/>
            <input name="hairColor" type="text" placeholder="Hair Color" value={name} onChange={e=> setHairColor(e.target.value)}/>
            <button>submit</button>
        </form>
    )
}