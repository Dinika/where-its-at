import React, { Component } from 'react';
import Aux from '../../HOC/Aux/Aux';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <div>Header</div>
                <div>SearchBox</div>
                <ul>
                    <li>Account 1</li>
                    <li>Account 2</li>
                </ul>
                <div>table</div>
            </Aux>
        )
    }
}

export default Layout;
