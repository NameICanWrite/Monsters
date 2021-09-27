import { Component } from 'react'
import axios from 'axios'

import classes from './App.module.sass';
import CardList from './components/Cardlist/CardList';
import SearchBox from './components/searchBox/SearchBox';


class App extends Component {
	constructor() {
		super()

		this.state = {
			monsters: [],
			searchField: ''
		}
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res => this.setState({ monsters: res.data }))
	}

	render() {
		const {monsters, searchField } = this.state
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

		return (
			<div className={classes.App}>
				<h1 className={classes.header}> Monsters Rolodex </h1>
				<SearchBox 
					onChange={(e) => this.setState({searchField: e.target.value})}
					placeholder='search monsters'
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}

}

export default App;