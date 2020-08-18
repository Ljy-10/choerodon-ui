import React, { Component } from 'react';
import Menu from 'choerodon-ui/lib/menu'
import Icon from 'choerodon-ui/lib/icon'
import { withRouter } from 'react-router-dom'
//import {browserHistory} from 'react-router'
// import {BrowserRouter as Router, Route } from 'react-router-dom';
// import Geren from './geren'
// import Home from './home'

const SubMenu = Menu.SubMenu;

class App8 extends Component {
    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.setState = ({
            collapsed: !this.state.collapsed,
        })
    }

    render() {

        return (
            <div style={{ width: 200 }}>
                <Menu
                    onClick={({ key }) => { this.props.history.push({ pathname: `${key}` }) }}  //绑定menu和展示页面的内容
                    selectedKeys={`${this.props.location.pathname}`}    //页面刷新依旧选择的是刷新前的url和刷新前的页面
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="/1" >

                        <Icon type="pie_chart_outlined" />
                        <span>首页</span>
                    </Menu.Item>
                    <Menu.Item key="/2" >
                        <Icon type="desktop_windows" />
                        <span>个人</span>
                    </Menu.Item>
                    <Menu.Item key="/3">
                        <Icon type="inbox" />
                        <span>平台</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail_outline" />
                                <span>产品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="/5">微信</Menu.Item>
                        <Menu.Item key="/6">QQ</Menu.Item>
                        <Menu.Item key="/7">微博</Menu.Item>
                        <Menu.Item key="/8">知乎</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="apps" />
                                <span>商品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="/9">瓜子</Menu.Item>
                        <Menu.Item key="/10">花生</Menu.Item>
                        <SubMenu key="sub3" title="饮料">
                            <Menu.Item key="/11">啤酒</Menu.Item>
                            <Menu.Item key="/12">八宝粥</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default withRouter(App8)  //通过withrouter将组件包裹成可使用路由的路由组件