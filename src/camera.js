import React from 'react';
import './camera.css'

class Camera extends React.Component {
  render() {
    return <label className="cameraButton">
        <input type="file" accept="image/*;capture=camera" id="camera" />
        Take a picture
      </label>
  }
}

export default Camera;
