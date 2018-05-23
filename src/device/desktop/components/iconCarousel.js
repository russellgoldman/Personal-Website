import React, { Component } from 'react';
import { styles } from './iconCarousel-styles';
import { leftArrow, rightArrow } from './../../../images';

export default class DesktopIconCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: this.props.icons,
      maxRender: this.props.maxRender,
      renderFunc: null,
      firstIndex: 0,   // for the iterative rendering of icons
      conditionalStyle: {
        carouselContainer: styles.carouselContainerSix
      }
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
    let iconSelection = [];
    for (let i = 0; i < this.state.icons.length; i++) {
      if (i < this.state.maxRender) {
        iconSelection.push(this.state.icons[i]);
      }
    }

    return iconSelection.map((icon, index) => (
      <div style={styles.icon} key={index}>
        <img src={icon.imgPath} alt={icon.name} style={styles.icon}/>
      </div>
    ));
  }

  shiftLeft() {
    if (this.state.firstIndex === 0) {
      // the first index will now be the last index
    }
  }

  shiftRight() {
    console.log('You shifted right');
  }

  render() {
    return (
      <div>
        <div style={styles.titleContainer}>
          <p style={styles.title}>My Toolkit</p>
        </div>
        <div style={this.state.conditionalStyle.carouselContainer}>
          <div style={styles.leftArrowContainer}>
            <img src={leftArrow} alt="Left Arrow" style={styles.leftArrow}
              onClick={() => this.shiftLeft()} />
          </div>
          <div style={styles.iconsContainer}>
            {this.state.renderFunc}
          </div>
          <div style={styles.rightArrowContainer}>
            <img src={rightArrow} alt="Right Arrow" style={styles.rightArrow}
              onClick={() => this.shiftRight()} />
          </div>
        </div>
      </div>
    );
  }
};
