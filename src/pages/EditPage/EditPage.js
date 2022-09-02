import React from 'react'
import { Layout, Divider, Button } from "antd"
// import HeadBarView from "@/components/HeadBar/index"
// import OperationType from '@/constant/OperationType'
import HeadBarView from "../../components/HeadBar/index"
import OperationType from '../../constant/OperationType'

import './EditPage.less'
const { Header, Content } = Layout;

export default class EditPage extends React.Component {
    publish = () => {
        this.props.updateOperation(OperationType.PUBLISHED)
        this.props.history.push('/')
    }

    render() {
        const { intl, initDone } = this.props;
        return <Layout >
            <Header style={{ height: "50px" }}>
                <HeadBarView isLogIn={false} {...this.props} />
            </Header>
            <Divider className="customDivider" />
            <Content className="eidt-page-wrapper">
                render your edit page
               <Button className='save-btn' onClick={this.publish}>{initDone && intl.get("publish")}</Button>
            </Content>
        </Layout >
    }
}