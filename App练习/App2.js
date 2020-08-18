import React from 'react';
import Tooltip from 'choerodon-ui/pro/lib/tooltip';
//猪齿鱼鼠标悬停提示组件练习


class App2 extends React.Component {
    render() {
        return (
            <>
            <Tooltip placement="topLeft" title="你有什么事么" theme="light" >
                <span>Tooltip will show when mouse enter.</span>
            </Tooltip>
            <br/>
            <Tooltip placement="topLeft" title="你有什么事么" theme="dark" arrowPointAtCenter mouseEnterDelay="3000" mouseLeaveDelay="5000">
                <span>Tooltip will show when mouse enter.</span>
            </Tooltip>
            </>
        )
    }
}

export default App2
