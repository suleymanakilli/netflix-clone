import Banner from '../components/Banner'
import React from 'react'
import "./HomeScreen.css"
import Nav from "../components/Nav"
import requests from 'Requests'
import Row from '../components/Row'
function HomeScreen() {
    return (
        <div className="home-screen">
            <Nav />
            <Banner />
            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row 
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
            />
            <Row 
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
            <Row 
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
                title="Documantaries"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
