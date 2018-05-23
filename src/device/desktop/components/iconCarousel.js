import React, { Component } from 'react';
import { styles } from './iconCarousel-styles';

export default class DesktopIconCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: this.props.icons,
      maxRender: this.props.maxRender,
      renderFunc: null
    }
  }

  componentDidMount() {
    switch(this.state.maxRender) {
      case 2:
        this.setState({renderFunc: this.renderTwo()});
        break;
      case 3:
        this.setState({renderFunc: this.renderThree()});
        break;
      case 4:
        this.setState({renderFunc: this.renderFour()});
        break;
      case 5:
        this.setState({renderFunc: this.renderFive()});
        break;
      case 6:
        this.setState({renderFunc: this.renderSix()});
        break;
      default:
        this.setState({renderFunc: this.renderSix()});
        break;
    }
  }


  renderTwo() {
    return (
      <p>I am rendering two icons</p>
    );
  }

  renderThree() {
    return (
      <p>I am rendering three icons</p>
    );
  }

  renderFour() {
    return (
      <p>I am rendering four icons</p>
    );
  }

  renderFive() {
    return (
      <p>I am rendering five icons</p>
    );
  }

  renderSix() {
    console.log('were here')
    return (
      <p style={{ color: 'black' }}>I am rendering six icons</p>
    );
  }

  render() {
    return (
      <div>
        <div style={styles.carouselContainer}>
          <p style={styles.title}>My Toolkit</p>
          {this.state.renderFunc}
        </div>
      </div>

    );
  }
};
