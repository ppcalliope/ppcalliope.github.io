import React from 'react';
import { Upload } from 'antd';
// import ProgressBarView from '@/components/ProgressBar/ProgressBarView'
// import OperationType from '@/constant/OperationType'
// import config from '@/axios/config';
// import * as api from '@/axios/api';
import ProgressBarView from '../../components/ProgressBar/ProgressBarView'
import OperationType from '../../constant/OperationType'
import config from '../../axios/config';
import * as api from '../../axios/api';
import * as d3 from 'd3';

import "./UploadPannel.less";

const { Dragger } = Upload;

export default class UploadPannel extends React.Component {
    state = {
        originFileOb: {},
        dataIndex: 0,
        operateState: this.props.operateState,
        errorMessage: this.props.initDone && this.props.intl.get("upload failed")
    }
    

    uploadDataToCloud = (formData) => {
        return new Promise((reslove, reject) => {
            api.uploadData(formData, config.url.uploadData).then((response) => {
                // this.setState({ operateState: OperationType.GENERATING }); //加快页面交互的响应
                this.setState({ operateState: OperationType.JSONUPLOADED }); //加快页面交互的响应
                const { operateState } = this.state;
                this.setState({ dataIndex: response.uuid})
                this.props.getDataIndex(response.uuid)
                if (response.status === 'error') {
                    let { intl } = this.props
                    this.setState({
                        operateState: OperationType.FAILED,
                        errorMessage: intl.options.currentLocale === 'zh-CN' ? response.message_zh : response.message_en
                    })
                    reject();
                    return null;
                }
                reslove(response);
            }, fail => {
                this.setState({
                    operateState: OperationType.FAILED,
                    errorMessage: this.props.initDone && this.props.intl.get("upload failed")
                })
                reject();
            })
        })
    }

    uploadVideoToCloud = (formData) => {
        return new Promise((reslove, reject) => {
            api.uploadVideo(formData, config.url.uploadVideo).then((response) => {
                // this.setState({ operateState: OperationType.GENERATING }); //加快页面交互的响应
                const { dataIndex } = this.state;
                // this.props.history.push('/show')
                this.props.history.push({
                    pathname: '/show',
                    dataIndex: dataIndex
                })
                if (response.status === 'error') {
                    let { intl } = this.props
                    this.setState({
                        operateState: OperationType.FAILED,
                        errorMessage: intl.options.currentLocale === 'zh-CN' ? response.message_zh : response.message_en
                    })
                    reject();
                    return null;
                }
                reslove(response);
            }, fail => {
                this.setState({
                    operateState: OperationType.FAILED,
                    errorMessage: this.props.initDone && this.props.intl.get("upload failed")
                })
                reject();
            })
        })
    }

    processData = (response) => {
        if (!response.schema || !response.file_url || !response.file_name) {
            // this.props.updateOperation(OperationType.UPLOADED)//更新UI
            const { operateState } = this.state;
            if(operateState === OperationType.JSONUPLOADED){
                this.props.updateOperation(OperationType.JSONUPLOADED)//更新UI
                this.setState({
                    operateState: OperationType.JSONUPLOADED,
                })
            }
            else{
                // this.props.updateOperation(OperationType.UPLOADED)//更新UI
                // this.setState({
                //     operateState: OperationType.UPLOADED,
                // })
                // this.props.updateOperation(OperationType.GENERATING)//更新UI
                // this.setState({
                //     operateState: OperationType.GENERATING,
                // })
                this.props.history.push('/show')
            }
            // this.props.updateOperation(OperationType.JSONUPLOADED)//更新UI
            return
        }
        let schema = response.schema.fields
        let fileURL = config.url.uploadDataPrefix + response.file_url
        let fileName = response.file_name
        let numericalFields = []
        let numerical = schema.filter(d => d.type === "numerical")
        numericalFields = numerical.map(d => d.field)
        let _that = this
        d3.csv(fileURL)
            .then(function (data) {
                data.forEach((d, i) => {
                    for (let key in d) {
                        if (numericalFields.indexOf(key) !== -1) {
                            d[key] = parseFloat(d[key])
                        }
                    }
                })
                _that.props.uploadData(fileName, schema, data); //更新数据到redux中
                // _that.props.updateOperation(OperationType.UPLOADED)//更新UI
                // _that.props.updateOperation(OperationType.GENERATING)//更新UI
                this.props.history.push('/show')
            }).catch(function (error) {
                console.log(error)
            })
    }

    onUploadChange = (info) => {
        /**** update UI ****/
        const { operateState } = this.state;
        if(operateState === OperationType.JSONUPLOADED){
            this.setState({
                operateState: OperationType.UPLOADIND,
            })
        }
        if(operateState === OperationType.BEFORE_UPLOAD){
            this.setState({
                operateState: OperationType.JSONUPLOADING,
            })
        }
        // this.setState({
        //     operateState: OperationType.UPLOADIND,
        //     // operateState: OperationType.JSONUPLOADED,
        // })
        if (info.event) {
            this.props.updateProgress(info.event.total, (info.event.total - info.event.loaded));
        }
        /**** update UI  the end ****/

        const { status } = info.file;
        if (status !== 'uploading') {
            const { dataIndex } = this.state;
            let fileObj = info.file.originFileObj;
            let formData = new FormData();
            formData.append("file", fileObj);
            formData.append("uuid", dataIndex);
            if(operateState === OperationType.JSONUPLOADING){
                //step:1 upload data
                this.uploadDataToCloud(formData)
                    //step 2:process data
                    .then((response) => this.processData(response))
            }
            else if(operateState === OperationType.UPLOADIND){
                //step:1 upload data
                this.uploadVideoToCloud(formData)
                    //step 2:process data
                    .then((response) => this.processData(response))
            }
            else{
                //step:1 upload data
                this.uploadDataToCloud(formData)
                    //step 2:process data
                    .then((response) => this.processData(response))
            }
            // //step:1 upload data
            // this.uploadDataToCloud(formData)
            //     //step 2:process data
            //     .then((response) => this.processData(response))
        }
    }
    beforeUpload = (info) => {
        return new Promise((resolve, reject) => {
            return resolve(true);
            // if (info.size <= 1048576 * 5) {
            //     return resolve(true);
            // } else {
            //     this.setState({
            //         operateState: OperationType.FILE_LARGE
            //     })
            //     reject(false);
            // }
        });
    }

    getPannelClassName = () => {
        const { operateState } = this.state;
        switch (operateState) {
            case OperationType.BEFORE_UPLOAD:
            case OperationType.JSONUPLOADED:
                return "draggerPannelCommon yellowPannel";
            case OperationType.UPLOADED:
                return "pannelWithConvertType whitePannel";

            default:
                return "";
        }
    }

    isShowProgressbar = () => {
        const { operateState } = this.state;
        if (operateState === OperationType.UPLOADIND || operateState === OperationType.GENERATING) {
            return true;
        }
        return false;
    }


    render() {
        const { intl, initDone, generateProgress } = this.props;
        const { operateState } = this.state;

        /***
            上传失败或者文件过大的情况下，点击此按钮可以重新上传
            ***/
        const ClickToUploadView = () => {
            return (
                <div className="ClickToUpload">
                    <div ></div>
                    <p> {initDone && intl.get("Click to upload")}</p>
                </div>
            )
        };

        let PannelContentView;
        let UploadTxtView;
        switch (operateState) {
            case OperationType.BEFORE_UPLOAD:
                UploadTxtView = <div className='UploadTxtDiv'><div></div> <span>上传赛场数据</span></div>
                PannelContentView = <>
                    <div className="JSONFileImage">
                        <div className='jsonIconWhite'></div>
                    </div>
                    <div className="uploadView">
                        <div className="uploadBtn">
                            {/* <div></div> */}
                            上传数据
                        </div>
                    </div>
                </>
                break;
            case OperationType.JSONUPLOADING:
                UploadTxtView = <div className='UploadTxtDiv'><div></div> <span>上传赛场数据</span></div>
                PannelContentView = <div className="uploading">
                    <div className='uploadImage'></div>
                    <span>{initDone && intl.get("Uploading file")}</span>
                    <div className='dot'>...</div>
                </div>
                break;
            case OperationType.UPLOADIND:
                UploadTxtView = <div className='UploadTxtDiv'><div></div> <span>上传赛场视频</span></div>
                PannelContentView = <div className="uploading">
                    <div className='uploadImage'></div>
                    <span>{initDone && intl.get("Uploading file")}</span>
                    <div className='dot'>...</div>
                </div>
                break;
            case OperationType.JSONUPLOADED:
                UploadTxtView = <div className='UploadTxtDiv'><div></div> <span>上传赛场视频</span></div>
                PannelContentView = <>
                    <div className="MP4FileImage">
                        <div className='mp4IconWhite'></div>
                    </div>
                    <div className="uploadView">
                        <div className="uploadBtn">
                            {/* <div></div> */}
                            上传视频
                        </div>
                    </div>
                </>
                break;
            case OperationType.FAILED:
                UploadTxtView = <div className='UploadTxtDiv'><div></div> <span>上传赛场数据</span></div>
                PannelContentView = <>
                    <div className='errorFailImage'>
                        <div className="iconFailed"></div>
                        <p className="hintText">{this.state.errorMessage}</p>
                    </div>
                    <ClickToUploadView />
                </>
                break;
            case OperationType.FILE_LARGE: //large than 5MB
                UploadTxtView = <div className='UploadTxtDiv'><div></div> <span>上传赛场数据</span></div>
                PannelContentView = <>
                    <div className="largeFileView">
                        <div></div>
                        <span>{initDone && intl.get("larger than 5MB")}</span>
                    </div>
                    <ClickToUploadView />
                </>
                break;
            default:
                break;
        }

        return (
            <>
                <div>
                    { UploadTxtView }
                </div>
                <div className={this.getPannelClassName()} style={{ position: 'relative' }}>
                    <ProgressBarView percent={generateProgress} isActive={this.isShowProgressbar()} />
                    <div style={{ height: "340px", flex: 1 }}>
                        <Dragger
                            beforeUpload={this.beforeUpload}
                            onChange={this.onUploadChange}
                            showUploadList={false}
                            accept=".json, .mp4">
                            <div className="pannelContent">
                                {
                                    PannelContentView
                                }
                            </div>
                        </Dragger>
                    </div>
                </div >
            </>
        )
    }
}