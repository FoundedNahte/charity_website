import styles from './App.css'
import Search from './components/search.js';


function App() {
	const SectionStyle = {
		backgroundImage: "url("+ "https://img.huffingtonpost.com/asset/5a0df45d1800003300f6c8ef.jpeg?cache=sRPvJijsNk&ops=1778_1000"+")",
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		wdith: '100vw',
		height: '100vh',
	}

	const h1Style = {
		backgroundColor: "orange",
		padding: "0px",
		border: "0px",
		margin: "0px",
	}
	return (
		<div style={ SectionStyle } className="App">
		  <header style={ SectionStyle }>
		  <div>
		  <em><bold>
			<h1 style={h1Style}><center>Charity Finder: Find charities that you want to support! </center></h1>
			<h2 style={h1Style}><center>By: Vincent Song & Ethan Lau</center></h2>
			<h3 style={h1Style}><center>Special Thanks to Mark Ulrich from Every.org</center></h3>
		  </bold></em>
		  <Search />
		</div>
		</header>
		</div>
	)
}

export default App
