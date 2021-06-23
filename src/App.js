import React from 'react';
import Header from './components/Header';
import movieData from './components/MovieData';
import movieCard from './components/CardDisplay'

function App(){
    return(
        <>
            <Header/>
            <div id="box">         
                {movieData.map(movieCard)};
            </div>
        </>

    );

}
export default App;