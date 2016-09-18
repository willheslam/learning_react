import React from 'react';
import {render} from 'react-dom';

import TileMap from './component/TileMap.jsx';

class App extends React.Component {
  render () {
    return <div>
        <p>Mosaic - React Edition v0.1</p>
        <TileMap source="http://sensu.priv.future.net.uk/clients" />
      </div>;
  }
}

render(<App/>, document.getElementById('app'));
