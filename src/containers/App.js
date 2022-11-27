import React,{Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots : [],
			searchfield : '',
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots : users}));
	}
	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value});
	}
	render() {
		const { robots, searchfield } = this.state
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ?
		<h2>Loading...</h2> :
		(
			<div className = "tc">
				<h1>RoboFriends</h1>
				<SearchBox searchchange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots = {filteredRobots} />
				</Scroll>
			</div>
		)
	}
}

export default App;