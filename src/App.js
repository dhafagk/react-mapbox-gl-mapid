import React from "react";
import { Helmet } from "react-helmet";
import Map from "./components/Map";

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>dhafagk - MAPID</title>
          <link rel="icon" type="image/x-icon" href="/favicon.png" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <Map />
      </>
    );
  }
}

export default App;
