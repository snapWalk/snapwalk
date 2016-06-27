import React from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from '../common/loading-indicator';
import { resetEntity, deleteEntity } from '../../redux/actions/action-creators';
import moment from 'moment';
import { isEmpty } from 'lodash';

class Entity extends React.Component {
    componentWillMount() {
        this.props.update();
        this.reset = this.reset.bind(this);
        this.delete = this.delete.bind(this);
    }

    delete() {
        const { name, deleteEntity } = this.props;
        deleteEntity(name);
    }

    reset() {
        const { name, resetEntity } = this.props;
        resetEntity(name);
    }

    _renderButton(label, onClick) {
        return (
            <button
                className="button-primary"
                onClick={onClick}>
                { label }
            </button>
        );
    }

    _renderFetch() {
        return this._renderButton(
            "Fetch",
            this.props.update
        );
    }

    _renderReset() {
        return this._renderButton(
            "Reset",
            this.reset
        );
    }

    _renderDelete() {
        return this._renderButton(
            "Delete",
            this.delete
        );
    }

    _renderEmptyEntity(name) {
        return (
            <div style={style.container}>
                <div>
                    Entity <code>{name}</code> doesn't&nbsp;
                    exist on <code>model</code>
                </div>
                { this._renderFetch() }
            </div>
        )
    }

    _renderButtons(isFetching, data) {
        if (isFetching) {
            return <span />
        }
        if (!isEmpty(data)) {
            return [
                this._renderFetch(),
                this._renderReset(),
                this._renderDelete()
            ].map(button => (
                <span>{button}</span>
            ))
        } else {
            return this._renderFetch();
        }
    }

    render() {

        const { name, entity } = this.props;

        if (isEmpty(entity)) {
            return this._renderEmptyEntity(name);
        }

        const { isFetching, data, lastUpdated } = entity;

        let loading, content;
        if (isFetching) {
            loading = <LoadingIndicator />;
        }

        if (!isEmpty(data)) {
            content = (
                <div style={isFetching ? style.fetching : {}}>
                    Fake call for <code>{ name }</code>&nbsp;
                    took <code>{ data.delay }</code> sec&nbsp;
                    @ { moment(lastUpdated).format('LTS') }
                </div>
            )
        } else {
            content = (
                <div style={isFetching ? style.fetching : {}}>
                    {
                        isFetching
                            ? <span />
                            : <span>Entity <code>{name}</code> is clear.</span>
                    }
                </div>
            )
        }

        return (
            <div style={style.container}>
                { content }
                { loading }
                { this._renderButtons(isFetching, data) }
            </div>
        );
    }
}

const style = {
    container: {
        marginBottom: 10
    },
    fetching: {
        color: '#BDBDBD',
        fontStyle: 'italic'
    }
};

export default connect (null, {
    resetEntity, deleteEntity
})(Entity);