
import React,{ useState, useEffect } from "react";
import axious from 'axios';
export function CurrentUserLoader({children}){
    const [user,setUser] = useState(null);
    useEffect(()=>{
        (async()=>{
            var response = await axious.get('/current-user');
            setUser(response.data);
        })();
    },[])
return (
    <>
    {React.Children.map(children, child=>{
        if(React.isValidElement(child)){
          return React.cloneElement(child,{child}) ; 
        }
        return child;
    })}
    </>
)
}