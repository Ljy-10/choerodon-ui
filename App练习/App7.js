import React from 'react';
import DataSet from 'choerodon-ui/pro/lib/data-set';
import Pagination from 'choerodon-ui/pro/lib/pagination';
import Form from 'choerodon-ui/pro/lib/form';
import NumberField from 'choerodon-ui/pro/lib/number-field';
import Switch from 'choerodon-ui/pro/lib/switch';
import { observer } from 'mobx-react';

//猪齿鱼分页pagination组件练习


function handleChange(page, pageSize) {
  console.log('[pagination]', page, pageSize);
}

@observer
class App7 extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: 'showSizeChanger', type: 'boolean', label: 'showSizeChanger', defaultValue: true },
      { name: 'showTotal', type: 'boolean', label: 'showTotal', defaultValue: true },
      { name: 'showPager', type: 'boolean', label: 'showPager', defaultValue: false },
      { name: 'showQuickJumper', type: 'boolean', label: 'showQuickJumper', defaultValue: false },
      { name: 'hideOnSinglePage', type: 'boolean', label: 'hideOnSinglePage', defaultValue: false },
      { name: 'total', type: 'number', label: 'total', defaultValue: 90 },
    ],
  });

  render() {
    const {
      ds,
      ds: { current },
    } = this;
    return (
      <div>
        <Form columns={4} dataSet={ds} labelWidth={150}>
          <Switch name="showSizeChanger" />
          <Switch name="showTotal" />
          <Switch name="showPager" />
          <Switch name="showQuickJumper" />
          <Switch name="hideOnSinglePage" />
          <NumberField name="total" />
        </Form>
        <Pagination
          showSizeChanger={current.get('showSizeChanger')}
          showTotal={current.get('showTotal')}
          showPager={current.get('showPager')}
          showQuickJumper={current.get('showQuickJumper')}
          total={current.get('total')}
          hideOnSinglePage={current.get('hideOnSinglePage')}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default App7
