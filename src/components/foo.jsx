import React from 'react';
import { connect } from 'react-redux';

const Foo = (props) => (
    <div>You are at the Foo route ('/foo')</div>
)

export default connect()(Foo);
