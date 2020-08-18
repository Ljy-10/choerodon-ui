import React from 'react';
import DataSet from 'choerodon-ui/pro/lib/data-set';
import Transfer from 'choerodon-ui/pro/lib/transfer';


//猪齿鱼穿梭框加搜索功能绑定数据源组件练习

function handleDataSetChange({ record, name, value, oldValue }) {
    console.log('[dataset newValue]', value, '[oldValue]', oldValue, '[record.get(name)]', record.get(name));
}

const { Option } = Transfer;

const optionData = [
    { text: 'Jack', value: 'jack' },
    { text: 'Huazhen', value: 'huazhen' },
    { text: 'Lucy', value: 'lucy' },
    { text: 'Niu', value: 'jiaqin' },
    { text: 'Shao', value: 'shao' },
];

const data = [{
    'first-name': 'huazhen',
    'last-name': 'wu',
}];

class App13 extends React.Component {
    optionDs = new DataSet({
        data: optionData,
        selection: 'single',
    });

    ds = new DataSet({
        data,
        fields: [
            { name: 'first-name', type: 'string', label: '名', textField: 'text', valueField: 'value', options: this.optionDs },
            { name: 'last-name', type: 'string', label: '姓' },
        ],
        events: {
            update: handleDataSetChange,
        },
    });

    handleDataSetChange = ({ record, name, value, oldValue }) => {
        console.log('[searchable]', value, '[oldValue]', oldValue, `[record.get('${name}')]`, record.get(name));
    };



    render() {
        return (
            <div>
                <Transfer dataSet={this.ds} name="first-name" searchable />
                <br />
                <Transfer dataSet={this.ds} name="last-name" searchable>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="wu">Wu</Option>
                </Transfer>
            </div>
        );
    }
}

export default App13