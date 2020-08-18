import React from 'react';
//import ModalProvider from 'choerodon-ui/pro/lib/modal-provider';
import Modal from 'choerodon-ui/pro/lib/modal';
import Button from 'choerodon-ui/pro/lib/button';
//import { resolve } from '../node_modules/jest-config/build/utils';
//import { resolve } from 'upath';
//猪齿鱼模态modal组件练习


// const Context = React.createContext('');

// const { injectModal, useModal } = ModalProvider;

// const ModalContent = () => {
//     const context = React.useContext(Context);
//     return context ? `Modal with context<${context}>` : 'Modal without context';
// };

// const openModal = (modal, title, context) => {
//     modal.open({
//         title,
//         children: <ModalContent />,
//         onOk: () => Modal.confirm('This is normal Modal confirm'),
//     });
// };

// const InnerModal = () => {
//     const modal = useModal();
//     const handleClick = React.useCallback(() => openModal(modal, 'Inner'), []);
//     return <Button onClick={handleClick}>Open inner modal</Button>;
// };

// @injectModal
// class App6 extends React.Component {
//     handleClick = () => {
//         const { Modal: modal } = this.props;
//         openModal(modal, 'Outer');
//     };

//     render() {
//         return (
//             <React.Fragment>
//                 <Button onClick={this.handleClick}>Open outer modal</Button>
//                 <Context.Provider value="provider">
//                     <ModalProvider>
//                         <InnerModal />
//                     </ModalProvider>
//                 </Context.Provider>
//             </React.Fragment>
//         );
//     }
// }

// export default App6;


const modalKey = Modal.key();
const modalKey01 = Modal.key();
const modalKey02 = Modal.key();
const modalKey1 = Modal.key();

async function openSubModal() {
    return await Modal.confirm('确认退出？') === 'ok';
}

function openModal1() {
    Modal.open({
        key: modalKey1,
        title: 'lalala',
        maskClosable: true,
        destroyOnClose: true,
        mask: true,
        maskStyle: {
            background: 'yellow',
            opacity: '0.5'
        },
        children: (
            <div>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        ),
        style: {
            left: 100,
            top: 100
        },
    })
}

function warning() {
    Modal.warning('不要随意修改密码！！！')
}

function openModal02() {
    return new Promise(resolve => {
        Modal.open({
            key: modalKey02,
            title: 'Sub Mode 2',
            closable: true,
            style: {
                width: 600,
            },
            mask: true,
            maskStyle: {
                background: '#FFC0CB',
                opacity: '0.3'
            },
            drawer: true,
            maskClosable: true,
            destroyOnClose: true,
            drawerTransitionName: 'slide-left',
            children: (
                <div>
                    {/* <Button onClick = {destroyAll}>关闭所有页面</Button> */}
                    <p>Open Sub Modal2...</p>
                    <p>Open Sub Modal2...</p>
                </div>
            ),
            onOk: resolve,
        });
    });


}

function openModal01() {
    return new Promise(resolve => {
        Modal.open({
            key: modalKey01,
            title: 'Sub Mode 1',
            drawer: true,
            closable: true,
            maskClosable: true,
            destroyOnClose: true,
            mask: true,
            maskStyle: {
                background: '#00FF7F',
                opacity: '0.7'
            },
            style: {
                width: 600,
            },
            children: (
                <div>
                    <Button onClick={openModal02}>Open Sub Modal2...</Button>
                    <p>Open Sub Modal1...</p>
                    <p>Open Sub Modal1...</p>
                </div>
            ),
            onOk: resolve,
            onCancel: resolve,
        })
    })
}




function openModal() {
    
    Modal.open({
        key: modalKey,
        title: 'Synchronize',
        okText: "提交",
        maskClosable: true,
        destroyOnClose: true,
        closable: true,
        drawer: true,
        mask: true,
        maskStyle: {
            background: 'yellow',
            opacity: '0.5'
        },
        style: {
            width: 600,
        },
        children: (
            <div>
                <Button onClick={openModal01}>Open Sub Modal1...</Button>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        ),
        // style:{
        //     left:500,
        //     top:500
        // },
        footer: (okBtn, cancelBtn) => (
            <div>
                {okBtn}
                <Button color="primary" onClick={openModal1}>跳转</Button>
                <Button color="yellow" onClick={warning}>提示</Button>
                {cancelBtn}
            </div>
        ),
        onOk: () => new Promise((resolve) => {
            setTimeout(() => { resolve(); }, 3000);
        }),
        onClose: openSubModal,
        onCancel: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('error'));
            }, 1000);
        }),
    })
}



//export default App6;
export default openModal