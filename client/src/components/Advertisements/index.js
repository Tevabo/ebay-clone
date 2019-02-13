import React from 'react'
import Advertisements from './Advertisements'
import { loadAdvertisements } from '../../actions/advertisements'
import { connect } from 'react-redux'


class AdvertisementContainer extends React.Component {
    // all kinds of extra stuff
    componentDidMount() {
        this.props.loadAdvertisements()
    }


    render() {
        return <Advertisements advertisements={this.props.advertisements} />
    }
}

const mapStateToProps = state => {
    return {
        advertisements: state.advertisements
    }
}

export default connect(mapStateToProps, { loadAdvertisements })(AdvertisementContainer)