import React,{ Component } from "react";

class Approvals extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //Call Necessary APIs for getting pending approvals
    }

    render(){
        return (
            <div>
                <h2>
                    All requests waiting for approval. Approvals can be denied or accepted.
                </h2>
            </div>
        )
    }
}

export default Approvals;