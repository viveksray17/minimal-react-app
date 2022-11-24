import { useState } from "react";

function App(){
	const [name, setName] = useState("vivek");
	return <div>Hello {name}</div>
}

export default App;
