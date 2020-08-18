import React, { Fragment } from 'react';
import DataSet from 'choerodon-ui/pro/lib/data-set';
import Form from 'choerodon-ui/pro/lib/form';
import Output from 'choerodon-ui/pro/lib/output';
import EmailField from 'choerodon-ui/pro/lib/email-field';
import NumberField from 'choerodon-ui/pro/lib/number-field';
import Button from 'choerodon-ui/pro/lib/button';

//猪齿鱼Table组件练习


class App3 extends React.Component {
    ds = new DataSet({
        autoCreate: true,
        fields: [
            { name: 'phone', defaultValue: '15888888888', type: 'string', label: '手机号' },
            { name: 'age', defaultValue: 18, type: 'number', label: '年龄' },
            { name: 'sex', defaultValue: 'F', type: 'string', label: '性别', lookupCode: 'HR.EMPLOYEE_GENDER' },
            { name: 'language', defaultValue: 'zh-CN', type: 'string', label: '语言' },
            { name: 'email', defaultValue: 'some@example.com', type: 'string', label: '邮箱' },
            { name: 'homepage', defaultValue: 'www.baidu.com', type: 'string', label: '个人主页' },
            { name: 'birth', defaultValue: '2018-12-26', type: 'date', label: '生日' },
        ],
    });

    render() {
        return (
            <Fragment>
                <Form dataSet={this.ds} style={{ width: '3.5rem' }}>
                    <Output name="phone" />
                    <NumberField name="age" />
                    <Output name="sex" />
                    <Output name="language" />
                    <EmailField name="email" />
                    <Output name="homepage" />
                    <Output name="birth" />
                </Form>
                <Button funcType="flat" color="primary" >提交</Button>
            </Fragment>
        );
    }
}

export default App3