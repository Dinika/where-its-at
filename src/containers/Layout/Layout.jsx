import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Aux from '../../HOC/Aux/Aux';
import TopMenu from '../../components/TopMenu/TopMenu';
import SearchBox from '../../components/SearchBox/SearchBox';
import SocialAccountCards from '../../components/SocialAccountCards/SocialAccountCards';
import ResultTable from '../../components/ResultTable/ResultTable';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <TopMenu />
                    <Grid container>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <SocialAccountCards />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center' stretched>
                                <SearchBox />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <ResultTable />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Aux>
        )
    }
}

export default Layout;
