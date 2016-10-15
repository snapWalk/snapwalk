import React from 'react';
import Entity from './Entity';
import Description from './Description';
import LoadEntity from './LoadEntity';
import { Panel } from '../../common';
import { fetchFoo, fetchBar, fetchFail } from '../../../redux/actions/thunk-action-creators';
import { connect } from 'react-redux';

function AjaxExample({
    fooEntity,
    barEntity,
    failEntity,
    fetchBar,
    fetchFoo,
    fetchFail
}) {
    return (
        <div>
            <Description />
            <hr />
            <Panel title="Dispatch Redux actions" faIcon="paper-plane-o">
                <Entity
                    name="fooEntity"
                    runFetchEntityOnMount={true}
                    entity={fooEntity}
                    fetchEntity={fetchFoo} />
                <Entity
                    name="barEntity"
                    entity={barEntity}
                    fetchEntity={fetchBar}/>
                <Entity
                    name="failEntity"
                    entity={failEntity}
                    fetchEntity={fetchFail}/>
            </Panel>
            <hr />
            <LoadEntity />
        </div>
    )
}

AjaxExample.propTypes = {
    fooEntity: React.PropTypes.object,
    barEntity: React.PropTypes.object,
    failEntity: React.PropTypes.object,
    fetchFoo: React.PropTypes.func.isRequired,
    fetchBar: React.PropTypes.func.isRequired,
    fetchFail: React.PropTypes.func.isRequired,
};

export default connect(
    ({ model }) => ({
        fooEntity: model.fooEntity,
        barEntity:  model.barEntity,
        failEntity: model.failEntity,
    }),
    { fetchFoo, fetchBar, fetchFail }
)(AjaxExample);