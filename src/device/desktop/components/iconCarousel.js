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
      iconAnimation: 'zoomInUp',
      leftArrowButtonClick: '',
      rightArrowButtonClick: '',
      lastClick: ''   // 'left', 'right', or ''
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
        <img src={icon.imgPath} alt={icon.name} style={styles.icon} className={`animated ${this.state.iconAnimation}`}
          data-tip={icon.name} />
        <ReactTooltip place="top" type="dark" effect="solid"/>
      </div>
    ));
  }

  shiftLeftByMaxRender() {
    this.setState({ leftArrowButtonClick: 'bounceIn' });
    if (this.state.lastClick === 'right') {
      this.setState({ leftArrowButtonClick: 'bounceIn' });
      this.setState({ rightArrowButtonClick: '' });
    }
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
    this.setState({ iconAnimation: 'fadeInRight' });
    this.setState({ lastClick: 'left' });
  }

  shiftRightByMaxRender() {
    this.setState({ rightArrowButtonClick: 'bounceIn' });
    if (this.state.lastClick === 'left') {
      this.setState({ leftArrowButtonClick: '' });
      this.setState({ rightArrowButtonClick: 'bounceIn' });
    }
    let tempIndex = this.state.firstIndex;
    this.setState({
      firstIndex: (tempIndex + this.state.maxRender) % this.state.icons.length
    });
    this.setState({ iconAnimation: 'fadeInLeft' });
    this.setState({ lastClick: 'right' });
  }

  render() {
    return (
      <div>
        <div style={styles.titleContainer}>
          <p style={styles.title}>My Toolkit</p>
        </div>
        <div style={styles.carouselContainer}>
          <div style={styles.leftArrowContainer} key={ Math.random() } className={`animated ${this.state.leftArrowButtonClick}`}>
            <img src={leftArrow} alt="Left Arrow" style={styles.leftArrow}
              onClick={() => this.shiftLeftByMaxRender()} />
          </div>
          <div style={styles.iconsContainer}>
            {this.renderIcons()}
          </div>
          <div style={styles.rightArrowContainer} key={ Math.random() } className={`animated ${this.state.rightArrowButtonClick}`}>
            <img src={rightArrow} alt="Right Arrow" style={styles.rightArrow}
              onClick={() => this.shiftRightByMaxRender()} />
          </div>
        </div>
      </div>
    );
  }
};
