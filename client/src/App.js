import HomeView from "./views/HomeView"
import FileView from "./views/FileView"
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomeView} />
				<Route exact path='/:fileName' component={FileView} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
