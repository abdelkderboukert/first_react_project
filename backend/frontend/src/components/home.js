import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "abdelkader",
      prename: "boukert",
      age: "20",
    };
    this.nmcode = null;
  }

  componentDidMount() {
    this.nmcode = this.props.match.params.nmcode;
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.nmcode !== prevProps.match.params.nmcode) {
      this.nmcode = this.props.match.params.nmcode;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.nmcode}</h1>npm install react-dom@^18.0.0
        <p>name:{this.state.name}</p><br />
        <p>prename:{this.state.prename}</p><br />
        <p>age:{this.state.age}</p><br />
        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: 90,
          }}
          className="bg-neutral-50
        h-24 w-24
        rounded-3xl
        cursor-pointer">
        </motion.div>
      </div>
    );
  }
}