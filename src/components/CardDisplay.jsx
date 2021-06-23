import React from 'react';
import Card from './Card';
function movieCard(obj){
    return(
    <Card 
        key ={obj.id}// key(unique) should always be kept when we use map function
        Link ={obj.Link}
        movieName={obj.movieName}
        movieLink={obj.movieLink}
    />);
}
// send to aapp.js
export default movieCard;