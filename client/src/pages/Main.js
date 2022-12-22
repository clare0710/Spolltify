import React from 'react';
import Appbar from "../components/Appbar.js";
import AddTrackButton from '../components/AddTrackButton.js';
import './Main.css';


class Main extends React.Component {
    render() {
        return (<div>
            <header>
                <div>
                    <Appbar />
                </div>
            </header>
            <AddTrackButton />
        </div >);
    };
}

export default Main;