import { Component } from "react";

class App extends Component {
	state = {
		name: "vivek sundaray"
	};

	name2 = () => {
		this.setState({name: "John Smith"})
	}
	name1 = () => {
		this.setState({name: "Vivek Sundaray"})
	}

	render() {
		const initialName = this.state.name
		<div>
			<span>{initialName}</span>
			<button onClick={this.name2}>name2</button>
			<button onClick={this.name1}>name1</button>
		</div>
	}
}

export default Counter;
