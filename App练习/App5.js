import React, { Component, Fragment } from 'react';
import Progress from 'choerodon-ui/pro/lib/progress'
//猪齿鱼进度条progress组件练习


class App5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: 0,
            status: 'active'
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => { this.progress(5) }, 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    progress(completed) {
        if (completed > 100) {
            this.setState({
                completed: 100,
                status: "success"
            })
        }
        else {
            this.setState({
                completed
            })
        }
        const diff = Math.round(Math.random() * 10);
        this.timer = setTimeout(() => { this.progress(completed + diff) }, 1000)
    }



    render() {
        return (
            <Fragment>
                <Progress value={this.state.completed} status={this.state.status} 	strokeColor="#FF0066" ></Progress>
                <Progress style={{ margin: '10px' }} type="circle" value={this.state.completed} status={this.state.status} />
                <Progress style={{ margin: '10px' }} type="dashboard" value={this.state.completed} status={this.state.status} />
                <Progress type="circle" value={10} size="small" />
                <Progress value={50} type="dashboard" status="exception" size="large" />
                <br /> 
                <Progress type="loading" size="large"/>
                <Progress type = "line" strokeWidth = "20px" value={this.state.completed} strokeColor = "#FFFF00" />
            </Fragment>
        );
    }
}

export default App5;