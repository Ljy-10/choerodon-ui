import React from 'react';
import Layout from 'choerodon-ui/lib/layout';
import App8 from './menu'
import ContentRoute from './route'
import { BrowserRouter as Router } from 'react-router-dom';



const { Sider, Content } = Layout;


class Layouts extends React.Component {

    render() {
        return (
            <div>
                <Layout>
                    <Layout>
                        <Router>
                            <Sider style={{
                                background: '#FFFFFF',
                                height: document.body.scrollHeight
                            }}>
                                <App8 />
                            </Sider>

                            <Content style = {{
                                height:document.body.scrollHeight
                            }}>
                                <ContentRoute />
                            </Content>
                        </Router>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default Layouts;
