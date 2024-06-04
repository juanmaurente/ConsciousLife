import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar/Navbar';

function App() {
	return (
		<>
			<Navbar
				onNavigate={function (sectionId: string): void {
					throw new Error('Function not implemented.');
				}}
			/>
			<Hero />
		</>
	);
}

export default App;
