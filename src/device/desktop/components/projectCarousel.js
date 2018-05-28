import React, { Component } from 'react';
import { styles } from './projectCarousel-styles';
import { leftArrow, rightArrow } from './../../../images';
import ReactTooltip from 'react-tooltip';

export default class DesktopProjectCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callbackFromParent: this.props.callbackFromParent,
      banners: this.props.banners,
      projectNames: this.props.projectNames,
      maxRender: this.props.maxRender,
      selectedIndex: 0,
      firstIndex: 0,   // for the iterative rendering of banners
      bannerAnimation: 'zoomInUp',
      leftArrowButtonClick: '',
      rightArrowButtonClick: '',
      lastClick: ''   // 'left', 'right', or ''
    }
  }

  componentDidMount() {
    if (this.state.firstIndex > this.state.banners.length - 1) {
      this.setState((prevState) => ({
        firstIndex: prevState.firstIndex % this.state.banners.length
      }));
    }
  }

  renderSelectedBanner(banner, index) {
    if (index === this.state.selectedIndex) {
      return (
        <div style={styles.bannerContainer}>
          <img src={banner} alt={banner.name} style={styles.bannerSelected}
            className={`animated ${this.state.bannerAnimation}`} />
          <div style={styles.bannerTextContainer}>
            <p style={styles.bannerText}>
              {this.state.projectNames[index].toUpperCase()}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={styles.bannerContainer}>
          <img src={banner} alt={banner.name} style={styles.banner}
            className={`animated ${this.state.bannerAnimation}`} />
          <div style={styles.bannerTextContainer}>
            <p style={styles.bannerText}>
              {this.state.projectNames[index].toUpperCase()}
            </p>
          </div>
        </div>
      );
    }
  }

  renderBanners() {
    let bannerSelection = [];
    let modifiedIndex = 0;
    let renderCount = 0;

    for (let i = this.state.firstIndex; i < this.state.firstIndex + this.state.banners.length; i++) {
      modifiedIndex = i;
      if (i > this.state.banners.length - 1) {
        modifiedIndex %= this.state.banners.length
      }
      if (renderCount < this.state.maxRender) {
        bannerSelection.push(this.state.banners[modifiedIndex]);
        renderCount++;
      }
    }

    return bannerSelection.map((banner, index) => (
      <div key={ Math.random() * Math.random() }>
        {this.renderSelectedBanner(banner, index)}
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
        firstIndex: tempIndex - this.state.maxRender + this.state.banners.length
      });
    } else {
      this.setState({
        firstIndex: tempIndex - this.state.maxRender
      });
    }
    this.setState({ bannerAnimation: 'fadeIn' });
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
      firstIndex: (tempIndex + this.state.maxRender) % this.state.banners.length
    });
    this.setState({ bannerAnimation: 'fadeIn' });
    this.setState({ lastClick: 'right' });
  }

  render() {
    return (
      <div>
        <div style={styles.titleContainer}>
          <p style={styles.title}>My Projects</p>
        </div>
        <div style={styles.carouselContainer}>
          <div style={styles.leftArrowContainer} key={ Math.random() } className={`animated ${this.state.leftArrowButtonClick}`}>
            <img src={leftArrow} alt="Left Arrow" style={styles.leftArrow}
              onClick={() => this.shiftLeftByMaxRender()} />
          </div>
          <div style={styles.bannersContainer}>
            {this.renderBanners()}
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
