import React, { Component } from 'react';
import { styles } from './projectCarousel-styles';
import { leftArrow, rightArrow } from './../../../images';
import { defaultBanner } from './../../../images/projects';

export default class DesktopProjectCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callbackFromParent: this.props.callbackFromParent,
      banners: this.props.banners,
      projectNames: this.props.projectNames,
      maxRender: this.props.maxRender,
      selectedIndex: 0,     // 0 --> (maxRender - 1)
      firstIndex: 0,   // for the iterative rendering of banners
    }
  }

  componentDidMount() {
    if (this.state.firstIndex > this.state.banners.length - 1) {
      this.setState((prevState) => ({
        firstIndex: prevState.firstIndex % this.state.banners.length
      }));
    }
  }

  selectProject(index, desc) {
    if (desc === 'arrowClick') {
      this.state.callbackFromParent(index);
    } else {
      this.setState({ selectedIndex: index });
      this.state.callbackFromParent(this.state.firstIndex + index);
    }
  }

  renderSelectedBanner(index) {
    if (index === this.state.selectedIndex) {
      return (
        <div style={styles.bannerContainer} key={index}>
          <div style={styles.bannerSelected} onClick={() => this.selectProject(index, '')}>
            <p style={styles.bannerText}>
              {this.state.projectNames[this.state.firstIndex + index].toUpperCase()}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={styles.bannerContainer} key={index}>
          <div style={styles.banner} onClick={() => this.selectProject(index, '')}>
            <p style={styles.bannerText}>
              {this.state.projectNames[this.state.firstIndex + index].toUpperCase()}
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

    return bannerSelection.map((_, index) => (
      <div key={index}>
        {this.renderSelectedBanner(index)}
      </div>
    ));
  }

  shiftLeftByMaxRender() {
    if (this.state.firstIndex - this.state.maxRender < 0) {
      this.setState({ selectedIndex: (this.state.banners.length - this.state.maxRender) % this.state.maxRender });
      this.selectProject(this.state.banners.length - this.state.maxRender, 'arrowClick');
    } else {
      this.setState({ selectedIndex: (this.state.firstIndex - this.state.maxRender) % this.state.maxRender });
      this.selectProject(this.state.firstIndex - this.state.maxRender, 'arrowClick');
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
  }

  shiftRightByMaxRender() {
    if (this.state.firstIndex + this.state.maxRender >= this.state.banners.length) {
      this.setState({ selectedIndex: 0 });
      this.selectProject(0, 'arrowClick');
    } else {
      this.setState({ selectedIndex: (this.state.firstIndex + this.state.maxRender) % this.state.maxRender })
      this.selectProject(this.state.firstIndex + this.state.maxRender, 'arrowClick');
    }
    let tempIndex = this.state.firstIndex;
    this.setState({
      firstIndex: (tempIndex + this.state.maxRender) % this.state.banners.length
    });
    this.setState({ bannerAnimation: 'fadeIn' });
  }

  render() {
    return (
      <div>
        {/* <div style={styles.titleContainer}>
          <p style={styles.title}>My Projects</p>
        </div> */}
        <div style={styles.carouselContainer}>
          <div style={styles.leftArrowContainer} key={ Math.random() }>
            <img src={leftArrow} style={styles.leftArrow}
              onClick={() => this.shiftLeftByMaxRender()} />
          </div>
          <div style={styles.bannersContainer}>
            {this.renderBanners()}
          </div>
          <div style={styles.rightArrowContainer} key={ Math.random() }>
            <img src={rightArrow} style={styles.rightArrow}
              onClick={() => this.shiftRightByMaxRender()} />
          </div>
        </div>
      </div>
    );
  }
};
