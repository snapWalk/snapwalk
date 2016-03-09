import React from 'react';
import { connect } from 'react-redux';

const Index = (props) => (
    <div>You are at the Index route ('/')</div>
)

export default connect()(Index);
