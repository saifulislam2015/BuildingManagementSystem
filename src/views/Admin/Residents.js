import React,{ Component } from "react";

class Residents extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //Call Necessary APIs for getting residents
    }

    render(){
        return (
            <div>
                <h2>
                    A Residents Lists arranged by Blocks and buildings.
                </h2>
            </div>
        )
    }
}

export default Residents;