import React from 'react';
import UrlField from 'choerodon-ui/pro/lib/url-field';
import DataSet from 'choerodon-ui/pro/lib/data-set';
import EmailField from 'choerodon-ui/pro/lib/email-field'
import TextField from 'choerodon-ui/pro/lib/text-field'
import Row from 'choerodon-ui/pro/lib/row'
import Col from 'choerodon-ui/pro/lib/col'
import Icon from 'choerodon-ui/pro/lib/icon'
import TextArea from 'choerodon-ui/pro/lib/text-area'
import Switch from 'choerodon-ui/pro/lib/switch'
import Password from 'choerodon-ui/pro/lib/password'
import NumberField from 'choerodon-ui/pro/lib/number-field'


//猪齿鱼url输入框及email输入框组件练习
//猪齿鱼textarea输入区域组件练习
//猪齿鱼密码password组件练习
//猪齿鱼number数字输入框组件练习


class App10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '请输入正确的网址！',
        };
    }

    handleChange1(value, oldValue) {
        console.log('[multiple]', value, '[oldValue]', oldValue);
    }

    handleDataSetChange2 = ({ record, name, value, oldValue }) => {
        console.log('[dataset multiple]', value, '[oldValue]', oldValue, `[record.get('${name}')]`, record.get(name));
    };


    handleDataSetChange1 = ({ record, name, value, oldValue }) => {
        console.log(
            '[dataset newValue]',
            value,
            '[oldValue]',
            oldValue,
            `[record.get('${name}')]`,
            record.get(name),
        );
    }

    handleDataSetChange = ({ record, name, value, oldValue }) => {
        console.log(
            '[dataset newValue]',
            value,
            '[oldValue]',
            oldValue,
            `[record.get('${name}')]`,
            record.get(name));
    }

    ds = new DataSet({
        autoCreate: true,
        fields: [
            { name: 'url', type: 'url', defaultValue: 'https://choerodon.io', required: true },
            { name: 'email', type: 'email', defaultValue: '752220917@qq.com', required: true }
        ],
        events: {
            update: this.handleDataSetChange,
        },
    })

    handleChange = (value, oldValue) => {
        console.log('[newValue]', value, '[oldValue]', oldValue);
        this.setState({
            value,
        })
    }

    handleInput = (e) => {
        console.log('[input]', e.target.value);
    }

    ds1 = new DataSet({
        autoCreate: true,
        fields: [{
            name: 'first-name',
            type: 'string',
            defaultValue: 'AAAA',
            required: true,
            format: 'uppercase',
        }],
        events: {
            update: this.handleDataSetChange1,
        },
    })

    ds2 = new DataSet({
        autoCreate: true,
        fields: [{
            name: 'user',
            type: 'string',
            label: '用户',
            required: true,
            multiple: ',',
        }],
        event: {
            update: this.handleDataSetChange2
        }
    })

    render() {
        return (
            <div>
                <UrlField value={this.state.value} onChange={this.handleChange} clearButton onInput={this.handleInput} />
                <br />
                <br />
                <UrlField dataSet={this.ds} name="url" clearButton />
                <br />
                <br />
                <EmailField placeholder='后缀' dataSet={this.ds} name="email" suffix={<Icon type="person" />} clearButton />
                <br />
                <br />
                <Row>
                    <Col span={8}>
                        <TextField dataSet={this.ds1} name="first-name" clearButton />
                        <TextField placeholder="不用区分大小写" readOnly />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={10}>
                        <TextField dataSet={this.ds2} name='user' />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={10}>
                        <TextField onChange={this.handleChange1} multiple />
                    </Col>
                </Row>
                <br />
                <TextField restrict="a-z" />
                <br />
                <br />
                <Row gutter={10}>
                    <Col span={8}>
                        <TextArea resize="both" cols={20} autoSize={{ minRows: 2, maxRows: 8 }} />
                    </Col>
                </Row>
                <br />
                <Switch unCheckedChildren={<Icon type="close" />} size='small'><Icon type="check" /></Switch>
                <br />
                <br />
                <Row gutter={10}>
                    <Col span={12}>
                        <Password placeholder="请输入密码" />
                    </Col>
                </Row>
                <br />
                <br />
                <Row style={{ marginBottom: 10 }} gutter={10}>
                    <Col span={12}>
                        <NumberField placeholder="请输入整数" step={1}  />
                    </Col>
                    <Col span={12}>
                        <NumberField placeholder="精确两位小数" step={0.01} min={0} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App10;