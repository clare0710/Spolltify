import React from 'react';
import Appbar from "../components/Appbar.js";
import SearchList from "../components/SearchList.js"

class Search extends React.Component {
    render() {
        return (<div>
            <header>
                <div>
                    <Appbar />
                </div>
            </header>
            <div>
                <SearchList />
            </div>
        </div >);
    };
}

export default Search;