import React from 'react';
import './AYATab.css';



class AYATab extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        const name = localStorage.getItem('AYAplayername');
        const matchdate = localStorage.getItem('AYAmatchdate')
        return(
            <div>
        <div>{name}</div>
        <div>{matchdate}</div>
        </div>
        );
    }
}

export default AYATab;