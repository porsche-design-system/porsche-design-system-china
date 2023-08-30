import React, {Component} from 'react';
import PropTypes from "prop-types";

import './index.scss';

export default class PorBreadCrumb extends Component {
  static propTypes = {
    page: PropTypes.array.isRequired,
    img: PropTypes.any,
    routePath: PropTypes.string,
    listPage: PropTypes.bool,
    noBg: PropTypes.bool
  };
  constructor(props){
    super(props);
    const methods = ['porBreadCrumbItem','handleBack'];
    methods.forEach((item) => this[item] = this[item].bind(this));
  }

  handleBack(index){
    const {page, routePath, listPage}=this.props;
    if(listPage) return;
    if(index!==0 && index===page.length-2)this.props.history.push(routePath);
  }

  porBreadCrumbItem(item,index){
    const {page, listPage}=this.props;
    const itemClassName=index!==0 && index===page.length-2 && !listPage ?'por-breadcrumb-route-item por-breadcrumb-hover':'por-breadcrumb-route-item';
    return (
      <div className={itemClassName}>
        <span>{item}</span>
        {
          index!==page.length-2 && <span className="por-breadcrumb-icon">></span>
        }
      </div>
    );
  }

  render(){
    const {page, img, noBg}=this.props;
    const title = page[page.length-1];
    const rest = page.slice(0, page.length-1);
    return (
      <div className={`por-breadcrumb ${noBg?'':'bg-content'}`} style={{'background': `url(${img}) no-repeat 100%`}}>
        <div className="por-breadcrumb-title">{title}</div>
        <div className="por-breadcrumb-route">
          {
            React.Children.map(rest,(item,index)=>{
              return (
                <div key={index} onClick={()=>this.handleBack(index)}>{this.porBreadCrumbItem(item,index)}</div>
              );
            })
          }
        </div>
      </div>
    )
  }
}
