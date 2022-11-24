import { useState } from "react";

function App(){
	const [name, setName] = useState("vivek");
	return <React.Fragment>Hello {name}</React.Fragment>
}

export default App;
