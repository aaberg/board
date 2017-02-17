import React from 'react';
import Canvas from '../components/Canvas';
import Draggable from '../components/Draggable';

class MainPage extends React.Component {

  render() {
    return (
      <div id="main">
        <Canvas>
          <Draggable />
        </Canvas>
      </div>
    );
  }

}

export default MainPage;
