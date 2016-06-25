import React from 'react';

export default class Entity extends React.Component {
    componentWillMount() {
        this.props.update();
    }
    render() {
        const { name, entity, update } = this.props;

        if (entity.isFetching || !entity.data) {
            return <div className="loader" />
        }

        return ( <div>
                <h6 style={style}>{ entity.data }</h6>
                <button
                    className="button-primary"
                    onClick={update}>
                    Fetch Fake {name}
                </button>
            </div>
        )
    }
}

const style = {
    fontSize: '110%',
    marginBottom: 10
};