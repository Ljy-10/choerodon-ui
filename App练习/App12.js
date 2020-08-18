import React from 'react'
import Transfer from 'choerodon-ui/pro/lib/transfer'
import Switch from 'choerodon-ui/pro/lib/switch'

//猪齿鱼受控穿梭框组件练习

const { Option } = Transfer;


class App12 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ['shanghai', 'xinjiang'],
            disabled: false
        }
    }

    handleDisableChange = () => {
        this.setState({ disabled: !this.state.disabled });
    };

    handleChange = (value, oldValue) => {
        console.log('[constrolled]', 'newValue', value, '[oldValue]', oldValue);
        this.setState({
            value,
        })
    }

    render() {
        return (
            <div>
                <span style={{ marginLeft: '115px' }}>
                    是<Switch onChange={this.handleDisableChange}>是否可以穿梭</Switch>否
                </span>
                <br />
                <Transfer onChange={this.handleChange} disabled={this.state.disabled} value={this.state.value} >
                    <Option value="shanghai" >shanghai</Option>
                    <Option value="chengdu" >chengdu</Option>
                    <Option value="xinjiang" >xinjiang</Option>
                    <Option value="chongqing" >chongqing</Option>
                </Transfer>
            </div>
        );
    }
}

export default App12;