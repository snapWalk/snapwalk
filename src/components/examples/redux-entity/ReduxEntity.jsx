import PropTypes from 'prop-types';
import React from 'react';
import Entity from './Entity';
import { Flexbox } from '../../common';
import { ENTITY_KEY } from '../../../common/app-const';
import { fetchFoo, fetchBar, fetchBaz } from '../../../redux/actions/thunks';
import { connect } from 'react-redux';

function ReduxEntity ({
    entities,
    fetchFoo,
    fetchBar,
    fetchBaz
}) {
    function getLoadEntityThunk (key) {
        switch (key) {
            case ENTITY_KEY.FOO: return fetchFoo;
            case ENTITY_KEY.BAR: return fetchBar;
            case ENTITY_KEY.BAZ: return fetchBaz;
        }
    }

    return (
        <Flexbox column={true}>
            <div>
                <i className="fa fa-angle-right" style={{ fontWeight: 700 }}/>&nbsp;
                Utilizes&nbsp;<a href="https://github.com/mikechabot/redux-entity">redux-entity</a>&nbsp;for domain entity management
            </div>
            <div><hr /></div>
            {
                Object.keys(ENTITY_KEY).map((key, index) => {
                    const entityKey = ENTITY_KEY[key];
                    return (
                        <Entity
                            key={index}
                            name={entityKey}
                            append={entityKey === ENTITY_KEY.BAR}
                            runFetchEntityOnMount={true}
                            entity={entities[entityKey]}
                            fetchEntity={getLoadEntityThunk(entityKey)} />
                    );
                })
            }
        </Flexbox>
    );
}

ReduxEntity.propTypes = {
    entities: PropTypes.object.isRequired,
    fetchFoo: PropTypes.func.isRequired,
    fetchBar: PropTypes.func.isRequired,
    fetchBaz: PropTypes.func.isRequired
};

export default connect(
    (state) => ({
        entities: state.entities
    }),
    { fetchFoo, fetchBar, fetchBaz }
)(ReduxEntity);
