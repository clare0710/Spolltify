import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FaPlus } from 'react-icons/fa';

function AddTrackButton() {
    const buttonStyle = {
        margin: {
            marginLeft: 50,
            marginTop: 50
        }
    }

    return (
        <Button variant="outline-dark" style={buttonStyle.margin} href='/Search'>
            <FaPlus /> <b>Add Track</b>
        </Button>
    );
}

export default AddTrackButton;