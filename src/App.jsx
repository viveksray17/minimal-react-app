import { Component } from "react";

class App extends Component {
	state = {
		name: "Vivek",
	};

	name2 = () => {
		this.setState({ name: "John Smith" });
	};
	name1 = () => {
		this.setState({ name: "Vivek Sundaray" });
	};

	render() {
		const initialName = this.state.name;
		return (
			<div>
				<span>{initialName}</span>
				<button onClick={this.name1}>name1</button>
				<button onClick={this.name2}>name2</button>
			</div>
		);
	}
}

export default App;
