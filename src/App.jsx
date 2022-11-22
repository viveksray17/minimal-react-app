import { Component } from "react";

class App extends Component {
	state = {
		name: "Vivek",
	};
	changeName = () => {
		if (this.state.name === "Vivek"){
			this.setState({name: "John"})
		}else{
			this.setState({name: "Vivek"})
		}
	}
	render() {
		return (
			<div className="container">
				<div>{this.state.name}</div>
				<button onClick={this.changeName} className="btn btn-primary">ChangeName</button>
			</div>
		);
	}
}

export default App;
