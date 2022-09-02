import React from 'react';
import { Layout, Divider } from "antd";
import HeadBarView from "../../components/HeadBar/index";
import ContentView from "./Content/ContentView";
import PannelView from "./PannelView/index";
import "./Homepage.less";

const { Header, Footer, Content } = Layout;

export default class Homepage extends React.Component {

    render() {
        return (
            <Layout >
                <Header style={{ height: "50px" }}>
                    <HeadBarView isLogIn={false} {...this.props} />
                </Header>
                <Divider className="customDivider" />
                <Content className="pageWrapper">
                    <ContentView {...this.props}>
                        <PannelView {...this.props}></PannelView>
                    </ContentView>
                </Content>
            </Layout >
        )
    }
}