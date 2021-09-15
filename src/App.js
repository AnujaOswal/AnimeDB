import { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';
import Footer from './components/Footer';

function App() {
	const [animeList, SetAnimeList] = useState([]);
	const [search, SetSearch] = useState("");

// Function to get the details about the anime charcter from the anime API
	const HandleSearch = e => {
		e.preventDefault();

		FetchAnime(search);
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());
      

		SetAnimeList(temp.results);
	}


	
	return (
		<div className="App">
          <Header />
           <div className="content-wrap">
              {/* Form to search the name of the anime char */}
                {/* Displaying the details of the anime char which was retrieved */}
              <MainContent
                HandleSearch={HandleSearch}
                search={search}
                SetSearch={SetSearch}
                animeList={animeList} />
                
          </div> 
          <Footer/>
		</div>
	);
}

export default App;
