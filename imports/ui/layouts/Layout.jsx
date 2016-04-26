import React from 'react';
import { Grid } from 'react-bootstrap';
import Navigation from '../components/Navigation.jsx';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Grid>
          { this.props.content }
        </Grid>
      </div>
    );
  }
}

Layout.propTypes = { content: React.PropTypes.element.isRequired };

export default Layout;
