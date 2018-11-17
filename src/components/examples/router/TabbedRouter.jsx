import React from 'react';
import PropTypes from 'prop-types';
import RouteContent from './RouteContent';
import { Tab, Tabs } from 'react-tabify';
import { Route } from 'react-router-dom';

const TabbedRouter = ({
  location,
  history
}) => {
  return (
    <div className="notification m-top--small">
      <Tabs
        id="router-example-tabs"
        activeKey={location.pathname}
        onSelect={(eventKey) => history.push(eventKey)}>
        <Tab eventKey="/" label="Increment">
          <Route exact path="/" component={RouteContent}/>
        </Tab>
        <Tab eventKey="/decrement" label="Decrement">
          <Route path="/decrement" component={RouteContent}/>
        </Tab>
        <Tab eventKey="/reset" label="Reset">
          <Route path="/reset" component={RouteContent}/>
        </Tab>
      </Tabs>
    </div>

  );
};

TabbedRouter.propTypes = {
  location: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object)
};

export default TabbedRouter;
