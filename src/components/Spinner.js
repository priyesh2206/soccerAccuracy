import React from 'react';

import BoxLoading from 'react-loadingg/lib/BoxLoading';



export const Spinner =(props) =>{
    console.log(props.isLoading)
    if(props.isLoading){
    return (
       <div>
           <BoxLoading/>
       </div>
    )
    }
    else {
        return(<div></div>)
    }
}