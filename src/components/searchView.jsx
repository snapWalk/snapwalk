import React from "react";

class SearchView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      routes: [],
      error: false,
      loading: true
    };
  }

  componentDidMount () {
    fetch("http://localhost:3060/api/v1/routes")
      .then(res => res.json())
      .then(json => {
        this.setState({ 
          routes: json.body,
          loading: false,
          featured: 0
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  showPlace (key, author) {
    this.setState({
      featured: key
    });
  }

  render () {
    let routes = this.state.routes;
    let routesArr = [];
    let showed;
    let featured;

    for (let key in routes) {
      routesArr.push(<div className="route" key={key} onClick={() => this.showPlace(key, routes[key].author)}><p>{routes[key].name}</p><p>{routes[key].description}</p></div>);
    }

    if (this.state.loading) {
      showed = <div></div>;
      featured = <div></div>;
    } else {
      featured = <div><h3>{routes[this.state.featured].name}</h3><p>{routes[this.state.featured].description}</p></div>;
      showed = routesArr;
    }

    return (
      <div>
        <h2>Search for a route</h2>
        <div>{featured}</div>
        <div>{showed}</div>
      </div>
    );
  }
}

export default SearchView;
