import './App.css'
import HomeView from "./views/HomeView"
import FileView from "./views/FileView"
import { Route, Switch } from "react-router-dom";

const App = () => {

	return (
		<div className="App">
			<Switch>
				<Route exact path='/' component={HomeView} />
				<Route exact path='/:fileName' component={FileView} />
			</Switch>
		</div>
	)
}

export default App
