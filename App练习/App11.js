import React, { Component } from 'react';
import Transfer from 'choerodon-ui/pro/lib/transfer'
import Switch from 'choerodon-ui/pro/lib/switch'

//猪齿鱼穿梭框Transfer组件练习

const {Option} = Transfer;

class App11 extends Component {
    state = {
            disabled :false,
            
        }
    

    handleChange = (value, newValue) => {
        console.log('[basic new]', value, '[basic old]', newValue);
    };

    handleDisableChange = () => {
        this.setState({disabled : !this.state.disabled});
    };

    render() {
        return (
            <div>
                是<Switch onChange = {this.handleDisableChange}>是否可以穿梭</Switch>否
                <br/>
                <Transfer onChange = {this.handleChange} disabled={this.state.disabled} title ={['始发地', '目的地']} >
                    <Option value = "shanghai" >shanghai</Option>
                    <Option value = "chengdu" >chengdu</Option>
                    <Option value = "xinjiang" >xinjiang</Option>
                    <Option value = "chongqing" >chongqing</Option>
                </Transfer>
            </div>
        );
    }
}

export default App11;