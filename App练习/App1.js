import React from 'react';
import  Button  from 'choerodon-ui/pro/lib/button';
//猪齿鱼按钮组件练习
class App1 extends React.PureComponent {
  render() {
    return (
      <div>
        <Button>默认raised按钮</Button>
        <Button funcType="flat">flat按钮</Button>
        <Button funcType="raised">raised按钮</Button>
        <br></br>
        <br></br>
        <Button color="primary" disabled>Blue</Button>
        <Button funcType="flat" color="primary">Blue</Button>
        <br></br>
        <Button funcType="flat" icon="sync" />
        <Button funcType="flat" icon="search" color="primary" />
      </div>
    );
  }
}

export default App1


