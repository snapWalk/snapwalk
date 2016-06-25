import React from 'react';
import { connect } from 'react-redux';
import { fetchFakeData } from '../redux/actions/thunk-action-creators';

class AjaxRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const { dispatch } = this.props;
        dispatch(fetchFakeData());
    }

    render() {
        const { fooEntity } = this.props;
        return fooEntity.isFetching
            ? <div className="loader" />
            : (
                <section>
                    <h6 style={style}>{ fooEntity.data }</h6>
                    <button
                        className="button-primary"
                        onClick={this.fetchData}>
                        Fetch Fake Data
                    </button>
                </section>
            )
    }
}

export default connect(
    (state) => ({ fooEntity : _getFooEntity(state)})
)(AjaxRequest);

function _getFooEntity(state) {
    return state.model.fooEntity;
}

const style = {
    fontSize: '110%',
    marginBottom: 10
};