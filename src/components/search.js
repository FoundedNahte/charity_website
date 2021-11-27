import React, { useEffect, useState, Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: null,
			data: null
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const data = this.state
		axios.get("http://localhost:5000/search?search_term={this.state}").then(response => this.setState({ data: response.data.total }))
	}

	handleInputChange = (event) => {
		event.preventDefault()
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	render() {
		const {data} = this.state
		const {searchTerm} = this.state
		if (data) {
			return (
				<div>
					<p style={ {color: "white", fontWeight: "bold", padding: "5px", border: "0px", margin: "0px"} }> Search Term is: {searchTerm} </p>
					<form onSubmit={this.handleSubmit}>
						<InputGroup className="col-lg-4 col-lg-offset-4" style={ {textAlign: "center" }}>
							<FormControl
								size="lg"
								placeholder="Search Term"
								type="text"
								name="searchTerm"
								onChange={this.handleInputChange}
							/>
							<Button variant="warning" type="submit"> Find </Button>
						</InputGroup>
					</form>
				</div>
	  		)
		} else {
			return (
				<div>
					<p style={ {color: "white", fontWeight: "bold", padding: "5px", border: "0[x", margin: "0px"} }> Search Term is: {searchTerm} </p>
					<form onSubmit={this.handleSubmit}>
						<InputGroup className="col-lg-4 col-lg-offset-4" style={ {textAlign: "center"}}>
							<FormControl
								size="lg"
								placeholder="Search Term"
								type="text"
								name="searchTerm"
								onChange={this.handleInputChange}
							/>
							<Button variant="warning" type='submit'> Find </Button>
						</InputGroup>
					</form>
				</div>
			)
		}
	}
}

export default search
