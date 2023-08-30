import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import images from '@pui/icons';
import './index.scss';

export default class PorMenu extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    basename:PropTypes.string,
    checkedMenuCode:PropTypes.string
  };

  static defaultProps = {
    onClick: ()=>{}
  };

  constructor(props){
    super(props);
    const methods = ['handleMouseEnter', 'getAllValue', 'handleIMenuMouseEnter', 'getLevelData', 'handleItemClick', 'handleMouseLeave'];
    methods.forEach((item) => this[item] = this[item].bind(this));
    this.state={
      hoverValue: null,
      firstValue: null,
      allValue: [],
      hoverAllValue: []
    };
  }

  handleMouseEnter(item, hoverValue){
    let allValue = this.getAllValue(item, []);
    let firstValue = item.props.children[0].key;
    this.setState({
      firstValue,
      hoverValue,
      allValue
    });
  };

  getAllValue(item, allValue){
    let data=[];
    if(Array.isArray(item.props.children)){
      item.props.children.forEach((child)=>{
        data.push(child.key);
        if(Array.isArray(child.props.children)){
          this.getAllValue(child, allValue);
        }
      });
      allValue.unshift(data);
    }
    return allValue;
  };

  handleIMenuMouseEnter(item){
    const {hoverAllValue}=this.state;
    let value=[...hoverAllValue];
    if(value.length){
      let {level, nextLevel}=this.getLevelData(item);

      value=value.filter((list) => {//去除同级菜单
        let same=false;
        level.forEach((child)=>{
          if(list===child)same=true;
        });
        return !same;
      });

      if(nextLevel.length){
        value=value.filter((list) => {//去除子级菜单
          let same=false;
          nextLevel.forEach((child)=>{
            if(list===child)same=true;
          });
          return !same;
        });
      }
    }

    if(Array.isArray(item.props.children)){
      value=[...value, item.props.children[0].key];
    }

    this.setState({
      hoverAllValue: [...value, item.key]
    });
  };

  getLevelData(item){
    const {allValue}=this.state;
    let level = [];
    let nextLevel=[];
    let k=0;
    for(let data of allValue){
      for(let child of data){
        if(child === item.key){
          level = data;
          nextLevel= allValue.length >= k+2 ? allValue[k+1] : [];
          return {level, nextLevel};
        }
      }
      k+=1;
    }
  }

  handleMouseLeave(){
    this.setState({
      hoverValue: null,
      firstValue: null,
      allValue: [],
      hoverAllValue: []
    });
  }

  handleItemClick(e, item, title) {
    e.stopPropagation();
    if(item.props.title){
      return;
    }
    this.handleMouseLeave();
    let name=title?title.split(','):[];
    this.props.onClick && this.props.onClick(item, [...name, item.props.children]);
  }

  render(){
    const {children, basename, checkedMenuCode}=this.props;
    const {hoverValue, firstValue, hoverAllValue}=this.state;
    return (
      <div className="por-menu">
        {
          React.Children.map(children, (item, index)=>{
            return (
              <div key={item.key || index}>
                {
                  !item.props.title ? (
                    <PorMenu.Item
                      handleItemClick={this.handleItemClick}
                      target={item.props.target}
                      basename={basename}
                      className={item.key===checkedMenuCode && item.key!==hoverValue?'isChecked':''}
                    >
                      {item.props}
                    </PorMenu.Item>
                  ):(
                    <div className="item" onMouseEnter={()=>this.handleMouseEnter(item, item.key)} onMouseLeave={this.handleMouseLeave}>
                      <div className={item.key === hoverValue?'isHover':''}>
                        {item.props.title}
                        <div className={item.key===checkedMenuCode && item.key!==hoverValue?'isChecked':''} />
                      </div>
                      {
                        item.key === hoverValue &&
                        <PorMenu.SubMenu
                          index={0}
                          hoverValue={hoverValue}
                          firstValue={firstValue}
                          hoverAllValue={hoverAllValue}
                          title={item.props.title}
                          handleIMenuMouseEnter={this.handleIMenuMouseEnter}
                          handleItemClick={this.handleItemClick}
                          target={item.props.target}
                          basename={basename}
                        >
                          {item.props.children}
                        </PorMenu.SubMenu>
                      }
                    </div>
                  )
                }
              </div>
            );
          })
        }
      </div>
    )
  }
}

PorMenu.SubMenu= props =>{
  const {index, hoverValue, firstValue, hoverAllValue, title, handleIMenuMouseEnter, handleItemClick, basename, target}=props;
  return (
    <div className="menu-pop-up" style={{top:`${index===0?'56':'-1'}px`,left:`${238*index}px`}}>
      {
        index === 0 &&
        <div className="triangle" >
          <div className={`triangle_inner ${hoverAllValue.some((child)=>child===firstValue)?'isHover_triangle_inner':''}`} />
        </div>
      }
      {
        React.Children.map(props.children, (item, k)=>{
          return (
            <div key={item.key || k} className="menu-content" onMouseEnter={()=>handleIMenuMouseEnter(item)}>
              {
                !item.props.title ?
                  <div className={`${hoverAllValue.some((child)=>child===item.key)?'isSelected':''} menu-item-text`}>
                    <div onClick={(e)=>handleItemClick(e, item, title)} className="nav-content">
                      {
                        target !== basename &&
                        <a href={target === 'hc' ? `/${target}/#${item.props.routePath}` : `/${target}${item.props.routePath}`}>
                          <div className="address">{item.props.children}</div>
                        </a>
                      }
                      {
                        target === basename &&
                        <Link to={`${item.props.routePath}`}>
                          <div className="address">{item.props.children}</div>
                        </Link>
                      }
                    </div>
                  </div> :
                  <Fragment>
                    <div onClick={(e)=>handleItemClick(e, item, title)} className={`${hoverAllValue.some((child)=>child===item.key)?'isSelected':''} menu-item-text text-padding`}>
                      <div className="nav-content nav-text">
                        <span>{item.props.title}</span>
                        <images.SvgSelectRight />
                      </div>
                    </div>
                    {
                      hoverAllValue.some((value)=>value===item.key) &&
                      <PorMenu.SubMenu
                        index={1}
                        hoverValue={hoverValue}
                        firstValue={firstValue}
                        hoverAllValue={hoverAllValue}
                        handleIMenuMouseEnter={handleIMenuMouseEnter}
                        handleItemClick={handleItemClick}
                        title={title?`${title},${item.props.title}`:item.props.title}
                        target={target}
                        basename={basename}
                      >
                        {item.props.children}
                      </PorMenu.SubMenu>
                    }
                  </Fragment>
              }
            </div>
          );
        })
      }
    </div>
  )
};

PorMenu.Item= props =>{
  const {basename, target, className} = props;
  return (
    <div className="item item-parent" onClick={(e)=>props.handleItemClick(e, {props:props.children}, props.children.children)}>
      {
        props.children.blank === 1 ? (
          <div>
            {props.children.children}
            <images.SvgJump className="jump-icon" />
          </div>
        ):(
          <Fragment>
            {
              target !== basename &&
              <a href={target === 'hc' ? `/${target}/#${props.children.routePath}` : `/${target}${props.children.routePath}`}>
                <div>{props.children.children}</div>
                <div className={className} />
              </a>
            }
            {
              target === basename &&
              <Link to={props.children.routePath}>
                <div>{props.children.children}</div>
                <div className={className} />
              </Link>
            }
          </Fragment>
        )
      }
    </div>
  );
};
