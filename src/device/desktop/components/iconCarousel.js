import React, { Component } from 'react';
import { styles } from './iconCarousel-styles';
import { leftArrow, rightArrow } from './../../../images';
import ReactTooltip from 'react-tooltip';

export default class DesktopIconCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: this.props.icons,
      maxRender: this.props.maxRender,
      firstIndex: 0,   // for the iterative rendering of icons
      fade: ''
    }
  }

  componentDidMount() {
    if (this.state.firstIndex > this.state.icons.length - 1) {
      this.setState((prevState) => ({
        firstIndex: prevState.firstIndex % this.state.icons.length
      }));
    }
  }

  renderIcons() {
    let iconSelection = [];
    let modifiedIndex = 0;
    let renderCount = 0;

    for (let i = this.state.firstIndex; i < this.state.firstIndex + this.state.icons.length; i++) {
      modifiedIndex = i;
      if (i > this.state.icons.length - 1) {
        modifiedIndex %= this.state.icons.length
      }
      if (renderCount < this.state.maxRender) {
        iconSelection.push(this.state.icons[modifiedIndex]);
        renderCount++;
      }
    }

    return iconSelection.map((icon, index) => (
      <div style={styles.icon} key={ Math.random() * Math.random() }>
        <img src={icon.imgPath} alt={icon.name} style={styles.icon} className={`animated ${this.state.fade}`}
          data-tip={icon.name} />
        <ReactTooltip place="top" type="dark" effect="solid"/>
      </div>
    ));
  }

  shiftLeftByMaxRender() {
    this.setState({ fade: 'fadeOutLeft' });
    let tempIndex = this.state.firstIndex;
    if (this.state.firstIndex < this.state.maxRender) {
      this.setState({
        firstIndex: tempIndex - this.state.maxRender + this.state.icons.length
      });
    } else {
      this.setState({
        firstIndex: tempIndex - this.state.maxRender
      });
    }
    this.setState({ fade: 'fadeInRight' });
  }

  shiftRightByMaxRender() {
    this.setState({ fade: 'fadeOutRight' });
    let tempIndex = this.state.firstIndex;
    this.setState({
      firstIndex: (tempIndex + this.state.maxRender) % this.state.icons.length
    });
    this.setState({ fade: 'fadeInLeft' });
  }

  render() {
    return (
      <div>
        <div style={styles.titleContainer}>
          <p style={styles.title}>My Toolkit</p>
        </div>
        <div style={styles.carouselContainer}>
          <div style={styles.leftArrowContainer}>
            <img src={leftArrow} alt="Left Arrow" style={styles.leftArrow}
              onClick={() => this.shiftLeftByMaxRender()} />
          </div>
          <div style={styles.iconsContainer}>
            {this.renderIcons()}
          </div>
          <div style={styles.rightArrowContainer}>
            <img src={rightArrow} alt="Right Arrow" style={styles.rightArrow}
              onClick={() => this.shiftRightByMaxRender()} />
          </div>
        </div>
      </div>
    );
  }
};
