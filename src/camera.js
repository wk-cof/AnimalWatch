import React from 'react';
// import Webcam from 'react-webcam';
// import Webcam from "react-user-media";

class Camera extends React.Component {
  render() {
  // return <Webcam/>;
  return <input type="file" accept="image/*" capture="camera" />
  }
}

export default Camera;
