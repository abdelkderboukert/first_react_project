import React , {Component} from "react";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            prename:"",
            age:"",
        };
        this.nm = this.props.match.params.nm;
    }
    render() {
        return (
            <div>
                <p>name:{this.state.name}</p><br/>
                <p>prename:{this.state.prename}</p><br/>
                <p>age:{this.state.age}</p><br/>
            </div>
        );
    }
}