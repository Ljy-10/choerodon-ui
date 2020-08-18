import React, { Component } from 'react';
import Menu from 'choerodon-ui/lib/menu';
import Dropdown from 'choerodon-ui/pro/lib/dropdown';
import Button from 'choerodon-ui/pro/lib/button';

const SubMenu = Menu.SubMenu

//猪齿鱼下拉菜单Dropdown组件练习

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://choerodon.io">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://choerodon.io">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://choerodon.io" >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

const menu1 = (
    <Menu mode="vertical">
        <SubMenu title="巴萨" style = {{width:'100px'}}>
            <SubMenu title = "前锋">
              <Menu.Item>Messi</Menu.Item>
            </SubMenu>
            <Menu.Item>中场</Menu.Item>
            <Menu.Item>后卫</Menu.Item>
        </SubMenu>
        <SubMenu title="皇马" disabled>
            <Menu.Item>前锋</Menu.Item>
            <Menu.Item>中场</Menu.Item>
            <Menu.Item>后卫</Menu.Item>
        </SubMenu>
        <SubMenu title="曼城">
            <Menu.Item>前锋</Menu.Item>
            <Menu.Item>中场</Menu.Item>
            <Menu.Item>后卫</Menu.Item>
        </SubMenu>
    </Menu>
)


class App9 extends Component {
    render() {
        return (
            <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
            <Dropdown overlay={menu1  } placement="bottomLeft">
              <Button>查看球队详情</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>bottomCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>bottomRight</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topLeft">
              <Button>topLeft</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topCenter" trigger={['contextMenu']}>
              <Button>topCenter</Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight">
              <Button>topRight</Button>
            </Dropdown>
          </div>
          </div>
        );
    }
}

export default App9;