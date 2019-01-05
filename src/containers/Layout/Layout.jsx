import React, { Component } from 'react';
import Aux from '../../HOC/Aux/Aux';
import TopMenu from '../../components/TopMenu/TopMenu';
import SearchBox from '../../components/SearchBox/SearchBox';
import SocialAccountCards from '../../components/SocialAccountCards/SocialAccountCards';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <TopMenu />
                <SearchBox />
                <SocialAccountCards />
                <div>table</div>
            </Aux>
        )
    }
}

export default Layout;
