import React, { Component } from 'react'
// import OperationType from '@/constant/OperationType'

// import UploadPannel from '@/components/Upload/UploadPannel'
// import GeneratePannel from '@/components/Generate/GeneratePannel'
import OperationType from '../../../constant/OperationType'

import UploadPannel from '../../../components/Upload/UploadPannel'
import GeneratePannel from '../../../components/Generate/GeneratePannel'
import './PannelView.less'

/***上传与生成组件****/
export default class PannelView extends Component {
    handleGetDataIndex = (index) => {
        console.log("PannelView uuid index")
        console.log(index)
        // this.setState({
        //     dataIndex : index
        // })
    }

    render() {
        const { intl, initDone, operateState } = this.props;
        let PannelView;
        switch (operateState) {
            //upload module
            case OperationType.BEFORE_UPLOAD:
            case OperationType.UPLOADIND:
            case OperationType.FAILED:
            case OperationType.FILE_LARGE:
            case OperationType.JSONUPLOADED:
                PannelView = <UploadPannel getDataIndex={this.handleGetDataIndex} operateState={operateState} {...this.props} />
                // console.log("this.state.dataIndex")
                // console.log(this.state.dataIndex)
                break;
            //generate module
            case OperationType.UPLOADED:
            case OperationType.GENERATING:
            case OperationType.PUBLISHED:
                PannelView = <GeneratePannel operateState={operateState} {...this.props} />
                break;
            default:
                break;
        }

        return <div>
            {
                PannelView
            }
        </div>
    }
}
