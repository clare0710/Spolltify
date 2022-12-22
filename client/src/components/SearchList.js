import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./SearchList.css";
import axios from 'axios';
import Cookies from 'js-cookie'



function SearchList() {
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [tracks, setTracks] = useState([])

    const searchTracks = async (e) => {
        e.preventDefault()
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${Cookies.get('access_token')}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })

        setTracks(data.tracks.items)
    }

    const renderTracks = () => {
        return tracks.map(track => (
            <div key={track.id}>
                {track.name}
            </div>
        ))
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const { data } = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${Cookies.get('access_token')}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.name}
            </div>
        ))
    }

    return (
        <div >
            <Form className="search-form">
                <Form.Group>
                    <Form.Control className="search-box" placeholder="Search by song or artist..." onChange={e => setSearchKey(e.target.value)} />
                </Form.Group>
                <Button type="submit" className="search-song-button" onClick={searchTracks}>Songs</Button>
                <Button type="submit" className="search-artist-button" onClick={searchArtists}>Artists</Button>
            </Form>
            {renderArtists()}
            {renderTracks()}
        </div>
    );
}

export default SearchList;