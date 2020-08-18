
const TableDS = {
    autoQuery: true,
    primaryKey: 'issueId',
    name: 'user',
    fields: [
        { name: 'issueId', type: 'string', label: '任务ID' },
        { name: 'issueNum', type: 'string', label: '任务编号' },
        { name: 'typeCode', type: 'string', label: '任务类型' },
        { name: 'summary', type: 'string', label: '概要' }
    ],
    transport: {
        read: {
            url: 'https://easy-mock.sucaidaohang.com/mock/5f3130eeeeda710d1440d6e0/aaa',
            method: 'post',
        }
    },
    events: {
        load: ({ dataSet }) => {
            console.log('加载完成', dataSet)
        }
    }
}

export default TableDS