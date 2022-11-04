import { useState } from "react";
import "./App.css";
import Pitch from "./components/Pitch";
import pitchInit from "./setup/pitchInit";

function App() {
	const [pitch, setPitch] = useState(pitchInit);
	return (
		<div className="App">
			<Pitch pitch={pitch} setPitch={setPitch} />
		</div>
	);
}

export default App;
