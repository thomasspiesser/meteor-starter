import React from 'react'

import Header from '../components/Header.jsx'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.content}
      </div>
    )
  }
}

export default Layout;