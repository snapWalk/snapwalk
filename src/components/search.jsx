import React from "react";
import RouteView from "./routeView";
import LocationMap from "./locationMap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
require("../scss/flippy.scss");

class SearchView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: [],
      place: undefined,
      error: false,
      visible: false,
      featured: 0,
      routeView: false
    };
  }

  componentDidMount () {
    fetch("http://localhost:3060/api/v1/routes")
      .then(res => res.json())
      .then(json => {
        this.setState({
          routes: json.body
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  showPlace (key, routeId) {
    fetch(`http://localhost:3060/api/v1/places/${routeId}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          place: json.body,
          featured: key,
          visible: true });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  goRoute (e) {
    e.preventDefault();
    this.setState({ routeView: true });
  }

  render () {
    let routes = this.state.routes;
    let routesArr = [];
    let featured;

    for (let key in routes) {
      routesArr.push(
        <div>
          <div>
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              //   ref={(r) => this.flippy = r }
              style={{ width: "200px", height: "200px" }}
            >
              <FrontSide>
                <div className="route" key={key} onClick={() => this.showPlace(key, routes[key].id)}>
                  <p>{routes[key].name}</p>
                  <p>{routes[key].description}</p>
                </div>
              </FrontSide>
              <BackSide>
          Backside! Map here!
              </BackSide>
            </Flippy>
          </div>
        </div>);
    }

    if (!this.state.visible) {
      featured = <div></div>;
    } else {
      featured = <div>
        <h3>{routes[this.state.featured].name}</h3>
        <p>{routes[this.state.featured].description}</p>
        <h4>placename: {this.state.place[0].name}</h4>
        <p>placedes: {this.state.place[0].description}</p>
        <p>placeitem: {this.state.place[0].item}</p>
        <div className="mapp">
          <LocationMap latitude={Number(this.state.place[0].latitude)} longitude={Number(this.state.place[0].longitude)} />
        </div>
        <button onClick={(e) => this.goRoute(e)}>Do this route</button>
      </div>;
    }

    if (this.state.routeView) {
      return <RouteView/>;
    }

    return (
      <div>
        <h2>Search for a route</h2>
        <div>{featured}</div>
        <div>{routesArr}</div>
      </div>
    );
  }
}

export default SearchView;
