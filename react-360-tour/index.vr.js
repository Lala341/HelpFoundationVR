import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import {LiveTour} from 'live-tour-lab';

export default class react_360_tour extends React.Component {
  render() {
    return (
      <LiveTour tourURI='hello-world.json' />
    );
  }
};

AppRegistry.registerComponent('react_360_tour', () => react_360_tour);
