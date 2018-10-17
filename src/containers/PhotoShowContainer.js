
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';

import PhotoShow from '../components/PhotoShow'


class PhotoShowContainer extends Component {

  render() {
      return (

        <PhotoShow
        currentPhoto={this.props.currentPhoto}
        />
      )
  }
}

const mapStateToProps = state => {
  return {
    currentPhoto: state.photos.currentPhoto
  }
}

export default withRouter(connect(mapStateToProps)(PhotoShowContainer));
