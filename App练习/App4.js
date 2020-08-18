import React from 'react';
import DataSet from 'choerodon-ui/pro/lib/data-set';
import Form from 'choerodon-ui/pro/lib/form';
import TextField from 'choerodon-ui/pro/lib/text-field';
import SelectBox from 'choerodon-ui/pro/lib/select-box';
import NumberField from 'choerodon-ui/pro/lib/number-field';
import Button from 'choerodon-ui/pro/lib/button';
import Switch from 'choerodon-ui/pro/lib/switch';
import Spin from 'choerodon-ui/pro/lib/spin';
//猪齿鱼加载中spin组件练习

const { Option } = SelectBox;

class App4 extends React.Component {
    ds = new DataSet({
        primaryKey: 'userid',
        name: 'user',
        autoQuery: true,
        pageSize: 5,
        fields: [
            {
                name: 'userid',
                type: 'string',
                label: '编号',
                required: true,
            },
            {
                name: 'name',
                type: 'intl',
                label: '姓名',
            },
            {
                name: 'age',
                type: 'number',
                label: '年龄',
                max: 100,
                step: 1,
            },
            {
                name: 'sex',
                type: 'string',
                label: '性别',
                lookupCode: 'HR.EMPLOYEE_GENDER',
                required: true,
            },
            { name: 'enable', type: 'boolean', label: '是否开启' },
        ],
    });


    render() {
        return (
            <Spin dataSet={this.ds}>
                <Form header="刷新表单" dataSet={this.ds}>
                    <TextField name="userid" />
                    <TextField name="name" />
                    <NumberField name="age" />
                    <SelectBox name="sex">
                        <Option value="M">男</Option>
                        <Option value="F">女</Option>
                    </SelectBox>
                    <Switch name="enable" />
                </Form>
                <div >
                    <Button style = {{margin:"0 0 0 200px"}} onClick={() => this.ds.query()} >
                        查询
           </Button>
                </div>
            </Spin>
        );
    }
}

export default App4