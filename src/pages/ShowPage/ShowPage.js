import React from 'react'
import { Layout, message, Button } from "antd"
import HeadBarView from "@/components/HeadBar/index"
import OperationType from '@/constant/OperationType'
import MobileView from '../MobileView'
import LayoutType from '../../constant/LayoutType'
import { getPublishLink } from '../../tool/publish'
import moment from "moment";
import * as api from '../../axios/api'
import './ShowPage.less'
const { Header, Content } = Layout;

export default class ShowPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataIndex: "",
            data:null
        }
    }

    publish = () => {
        this.props.updateOperation(OperationType.PUBLISHED)
        this.props.history.push('/')
    }

    getPublishShareLink = (uuid) => {
        let sharePublishUrl = getPublishLink(LayoutType.SLIDER_MOBILE) + uuid
        console.log('get',getPublishLink(LayoutType.SLIDER_MOBILE),uuid)
        console.log("getPublishShareLink")
        console.log(sharePublishUrl)

        return sharePublishUrl
    }
   


    copyLink = () => { 
        var copyDOM = document.querySelector(".inputBox input");  //需要复制文字的节点
        var range = document.createRange(); //创建一个range
        window.getSelection().removeAllRanges();   //清楚页面中已有的selection
        range.selectNode(copyDOM);    // 选中需要复制的节点    
        window.getSelection().addRange(range);   // 执行选中元素
        var successful = document.execCommand('copy');    // 执行 copy 操作  
        if(successful){
            message.success('复制成功！')
        }else{
            message.warning('复制失败，请手动复制！')
        }
        // 移除选中的元素  
        window.getSelection().removeAllRanges(); 
    }

    openSharelink = (sharedlink) => {
        window.open(sharedlink, '_blank')
    }

    componentDidMount() {
        let dataIndex
        if(this.props.location.dataIndex){
            dataIndex = this.props.location.dataIndex
            sessionStorage.setItem("dataIndex", dataIndex)
        }
        else{
            dataIndex = sessionStorage.getItem('dataIndex')
        }
        this.setState({dataIndex: dataIndex})
        api.share(dataIndex).then((response) => {
            let data = response.data
            this.setState({data:data["sharedData"]})
        })
    }


    render() {
        let sharedLink = this.getPublishShareLink(this.state.dataIndex)

        return (<Layout >
            <Header className='header' style={{ height: "50px" }}>
                <HeadBarView isLogIn={false} {...this.props} />
            </Header>

            <div className='middleContent'>
                <div className='bannerContainer'>
                    <div className='banner'>
                        <div className='platformTitle'>
                            国家乒乓球大数据平台
                        </div>
                        <div className='createdInfo'>
                            <span className='createdOn'>创建时间：</span>
                            <span className='createdTime'> {moment().format("YYYY-MM-DD HH:mm")}</span>
                        </div>
                        <div className='divider'></div>
                    </div>
                    <Button className='shareButton' onClick={() => {
                        this.copyLink
                        this.openSharelink(sharedLink)
                    }}>
                        <div className='shareIcon'></div>
                        <span className='shareText'>分享</span>
                    </Button>
                </div>

                <div className='pagePreview'>
                    <div id='mobile-view' style={{ height: 642, width: 362 }}>
                        <MobileView data={this.state.data} isPublish={false} />
                    </div>
                </div>

            </div>
        </Layout >)
    }
}