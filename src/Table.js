import React from 'react';
import TableDS from './dataset';
import Table from 'choerodon-ui/pro/lib/table';
import DataSet from 'choerodon-ui/pro/lib/data-set';

const { Column } = Table;

class App extends React.Component {
    constructor() {
        super();
        this.tableDataSet = new DataSet(TableDS);
    }

    render() {
        return (
            <Table dataSet={this.tableDataSet}
            autoMaxWidth>
                <Column name="issueId" />
                <Column name="issueNum" />
                <Column name="typeCode" />
                <Column name="summary" />
            </Table>
        )
    }
}

export default App