import React from 'react';
import { connect } from 'react-redux';
import { fetchFoo, fetchBar } from '../../redux/actions/thunk-action-creators';
import Entity from './entity';

function AjaxExample({
    fooEntity,
    barEntity,
    fetchBar,
    fetchFoo
}) {
    return (
        <section>
            <Entity name="Foo" entity={fooEntity} update={fetchFoo} />
            <Entity name="Bar" entity={barEntity} update={fetchBar} />
        </section>
    )
}

export default connect(
    (state) => ({
        fooEntity : state.model.fooEntity,
        barEntity : state.model.barEntity
    }),
    { fetchFoo, fetchBar }

)(AjaxExample);