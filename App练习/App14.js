import React, { Component } from 'react';
import Row from 'choerodon-ui/pro/lib/row'
import Col from 'choerodon-ui/pro/lib/col'
import SelectBox from 'choerodon-ui/pro/lib/select-box'
import Range from 'choerodon-ui/pro/lib/range'

//猪齿鱼selectbox选择框组件及range滑块组件练习

const { Option } = SelectBox;

class App14 extends Component {

    handleChange = (value, oldValue) => {
        console.log('[button new]', value, '[button old]', oldValue);
    };

    render() {
        return (
            <div>
                <Row gutter={10}>
                    <Col span={12}>
                        <SelectBox vertical mode="button" onChange={this.handleChange}>
                            <Option value="jack" >Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="wu">Wu</Option>
                        </SelectBox>
                    </Col>
                    <Col span={12}>
                        <SelectBox readOnly mode="button" multiple onChange={this.handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="wu">Wu</Option>
                        </SelectBox>
                    </Col>
                    <Col span={12}>
                        <SelectBox mode="button" multiple onChange={this.handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="wu">Wu</Option>
                        </SelectBox>
                    </Col>
                </Row>
                <br />
                <br />
                <Range  min = {0} max = {1} step = {0.01} />
                <div style = {{height:'100px', marginLeft:'100px', marginTop:'100px'}}>
                <Range vertical value={20} min={0} max={100} step={5} disabled/>
                </div>
            </div>
        );
    }
}

export default App14;