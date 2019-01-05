import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBox extends Component {
    render() {
        return(
            <Input size='massive' icon='search' placeholder='Search...' />
        )
    }
}

export default SearchBox;
