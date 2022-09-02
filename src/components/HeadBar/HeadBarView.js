import React, { Component } from 'react';
import './HeadBarView.less';
import OperationType from '../../constant/OperationType';

export default class HeadBarView extends Component {

    back = () => {
        this.props.updateOperation(OperationType.BEFORE_UPLOAD)
        this.props.history.push("/")
    }
    render() {

        return (
            <div className="headerBarWrapper" >
                <div className="headerBarLeft">
                    <div onClick={this.back}></div>
                    <span>国家乒乓球队大数据平台</span>
                </div>
            </div >
        )
    }
}