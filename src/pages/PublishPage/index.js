import React from 'react'
import MobileView from '../MobileView';
import * as api from '../../axios/api'

import './PublishPage.less'

export default class PublishPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null
        }
    }

    componentDidMount() {
        const path = this.props.location.pathname
        const uuid = path.split("publish/mobile/")[1]

        api.share(uuid).then((response) => {
            let data = response.data
            this.setState({data:data["sharedData"]})
        })
    }

    render() {

        return (
            <div className='publish-page-wrapper'>
                <MobileView data={this.state.data} isPublish={true} />
            </div>
        )
    }
}