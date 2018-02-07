import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import _isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { resetEntity, deleteEntity } from 'redux-entity';

import Icon from '../../common/Icon';

class Entity extends React.Component {
    componentWillMount () {
        if (this.props.runFetchEntityOnMount) {
            this.props.fetchEntity();
        }
    }

    render () {
        const { name, entity } = this.props;

        if (_isEmpty(entity)) {
            return this._renderEntityDoesNotExist(name);
        }

        const { isFetching, data } = entity;

        return (
            <div className="m-top--large m-bottom--large">
                { this._renderContent(name, entity)}
                <div className="field has-addons">
                    { this._renderButtons(isFetching, data) }
                </div>
            </div>
        );
    }

    _renderEntityDoesNotExist (entityName) {
        return (
            <div className="m-top--large m-bottom--large">
                <div className="m-bottom--small">
                    <Icon icon="exclamation-triangle" className="has-text-danger" />
                    &nbsp;Entity<code>{entityName}</code>doesn't&nbsp;exist on<code>entities</code>
                </div>
                { this._renderFetch() }
            </div>
        );
    }

    _renderContent (name, entity) {
        const { isFetching, data, lastUpdated, error } = entity;

        if (error) {
            return (
                <div className="m-bottom--small">
                    <Icon icon="exclamation-triangle" className="has-text-danger" />
                    &nbsp;Failed to fetch<code>{name}</code>due to<code className="has-text-danger">{ error.toString() }</code>
                </div>
            );
        }

        if (isFetching) {
            return (
                <div className="m-bottom--small">
                    <Icon icon="cog fa-spin" />
                    &nbsp;Fetching fresh data!
                </div>
            );
        }

        if (!_isEmpty(data)) {
            return (
                <div className="m-bottom--small">
                    <Icon icon="check" className="has-text-success" />
                    &nbsp;{ this.props.append ? 'Appending to' : 'Fetch for'}
                    <code>{ name }</code>{ this.props.append ? null : (<span>took<code>{data.delay} sec</code></span>) }@
                    <code>{ moment(lastUpdated).format('LTS') }</code>
                </div>
            );
        } else {
            return (
                <span>Entity <code>{name}</code> is reset.</span>
            );
        }
    }

    _renderButton (label, icon, onClick) {
        return (
            <p key={label} className="control">
                <a className="button" onClick={onClick}>
                    <span className="icon">
                        <Icon icon={icon} />
                    </span>
                    <span>{label}</span>
                </a>
            </p>
        );
    }

    _renderFetch () {
        return this._renderButton('Fetch', 'download', this.props.fetchEntity);
    }

    _renderReset () {
        return this._renderButton('Reset', 'history', this._resetEntity.bind(this));
    }

    _renderDelete () {
        return this._renderButton('Delete', 'trash', this._deleteEntity.bind(this));
    }

    _renderButtons (isFetching, data, error) {
        if (isFetching) {
            return <span />;
        }
        if (!_isEmpty(data) || error) {
            return [
                this._renderFetch(),
                this._renderReset(),
                this._renderDelete()
            ];
        } else {
            return [
                this._renderFetch(),
                this._renderDelete()
            ];
        }
    }

    _deleteEntity () {
        const { name, deleteEntity } = this.props;
        deleteEntity(name);
    }

    _resetEntity () {
        const { name, resetEntity } = this.props;
        resetEntity(name, Date.now());
    }
}

Entity.propTypes = {
    name  : PropTypes.string.isRequired,
    append: PropTypes.bool,
    entity: PropTypes.shape({
        isFetching : PropTypes.bool,
        lastUpdated: PropTypes.number,
        data       : PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
            PropTypes.array
        ]),
        error: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ])
    }),
    runFetchEntityOnMount: PropTypes.bool,
    fetchEntity          : PropTypes.func.isRequired,
    resetEntity          : PropTypes.func.isRequired,
    deleteEntity         : PropTypes.func.isRequired
};

export default connect(null, {
    resetEntity,
    deleteEntity
})(Entity);
