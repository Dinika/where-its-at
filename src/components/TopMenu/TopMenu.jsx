import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class TopMenu extends Component {
    render() {
        return(
            <Menu>
                <Menu.Item
                    name='editorials'>
                    Where It's At
                </Menu.Item>
                <Menu.Item name='reviews'>
                    Home
                </Menu.Item>
                <Menu.Item
                    name='upcomingEvents'>
                    Login
                </Menu.Item>
            </Menu>
        )
    }
}

export default TopMenu;