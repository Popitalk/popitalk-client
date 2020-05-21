import React, { createRef, Component } from "react";

class StretchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };

    this.ref = createRef();

    this.resize = this.resize.bind(this);
  }

  resize() {
    const height = this.ref.current.clientHeight;
    if (this.state.height !== height) {
      this.setState({
        height: height
      });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  render() {
    const List = this.props.list;

    return (
      <div ref={this.ref} className="flex flex-grow">
        <List height={this.state.height} {...this.props} />
      </div>
    );
  }
}

export default StretchList;
