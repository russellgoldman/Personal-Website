import React, { Component } from 'react';
import { styles } from './iconView-styles';
import ReactTooltip from 'react-tooltip';

export default class DesktopIconView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: this.props.icons,
      maxRender: this.props.maxRender,
    }
  }

  renderIcons() {
    return this.state.icons.map((icon, index) => (
      <div style={styles.icon} key={ Math.random() * Math.random() }>
        <img src={icon.imgPath} alt={icon.name} style={styles.icon}
          data-tip={icon.name} />
        <ReactTooltip place="top" type="dark" effect="solid"/>
      </div>
    ));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.icons !== nextProps.icons || prevState.icons !== prevState.maxRender) {
      return {
        icons: nextProps.icons,
        maxRender: nextProps.maxRender
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <div style={styles.titleContainer}>
          <p style={styles.title}>What I Used</p>
        </div>
        <div style={styles.viewContainer}>
          <div style={styles.iconsContainer}>
            {this.renderIcons()}
          </div>
        </div>
      </div>
    );
  }
};
