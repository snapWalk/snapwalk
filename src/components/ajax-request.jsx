import React from 'react';
import { connect } from 'react-redux';
import { fetchFakeData } from '../redux/actions/thunk-action-creators';

class AjaxRequest extends React.Component {

    componentDidMount() {
        this.props.fetchFakeData();
    }

    render() {
        const { fooEntity, fetchFakeData } = this.props;

        return fooEntity.isFetching || !fooEntity.data
            ? <div className="loader" />
            : (
                <section>
                    <h6 style={style}>{ fooEntity.data.message }</h6>
                    <button
                        className="button-primary"
                        onClick={fetchFakeData}>
                        Fetch Fake Foo
                    </button>
                </section>
            )
    }
}

export default connect(
    (state) => ({ fooEntity : _getFooEntity(state)}),
    { fetchFakeData }

)(AjaxRequest);

function _getFooEntity(state) {
    return state.model.fooEntity;
}

const style = {
    fontSize: '110%',
    marginBottom: 10
};