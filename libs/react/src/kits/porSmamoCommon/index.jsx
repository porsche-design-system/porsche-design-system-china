import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {PorLogo, PorBackdrop, PorMenu, PorBreadCrumb, PorFooter} from '../';
import Account from './account';
import {fetchTokenAndMenu, $USER_TOKEN, $USER_CODE, queryObject, getProjectData, getSmamoLocalMenu} from '@pui/core'
import './index.scss';

export default class PorSmamoCommon extends Component{
  static propTypes = {
    basename: PropTypes.string,
    path: PropTypes.array,
    breadCrumbImg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    history: PropTypes.object,
    hashHistory: PropTypes.object
  };

  static defaultProps = {
    path: []
  };

  constructor(props) {
    super(props);
    // this.getTokenAndMenu = this.getTokenAndMenu.bind(this);
    this.getLocalMenu = this.getLocalMenu.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.getCurrentMenu=this.getCurrentMenu.bind(this);
    this.getBreadCrumbImgValue=this.getBreadCrumbImgValue.bind(this);
    this.assignmentMenu=this.assignmentMenu.bind(this);
    this.state = {
      sessionCode: null,
      account: {},
      roleAssetDigest: [],
      assetCurrentMenu: [],
      assetPermission: [],
      breadCrumbImg: null,
      breadMenu: {}
    }
  }

  componentDidMount = () =>{
    const sessionCode = queryObject().code;
		const userCode = window.localStorage.getItem($USER_CODE);

		if(sessionCode && sessionCode !== userCode){//无code时，通过接口获取数据

      this.getTokenAndMenu();
    }else{//页面刷新时，重新从缓存中获取数据赋值
      this.getLocalMenu();
    }

    this.props.history.listen && this.props.history.listen((route)=>{
      let item = this.getCurrentMenu(route.pathname);
      this.assignmentMenu(item);
    })
  };

  getTokenAndMenu = async () => { //无缓存数据时通过此方法获取token,用户信心，菜单数据
    const sessionCode = queryObject().code;
    const {basename} = this.props;
    const data = await fetchTokenAndMenu({sessionCode, clientId: 'SMM18900'});
    const {userProfile, roleAssetDigest, assetCurrentMenu, assetPermission} = data || {};
    let account = {};
    if(Array.isArray(userProfile)){
      (userProfile || []).forEach((item)=>{
        for(let key in item){
          if(basename === key) account = Object.assign({}, item[key]);
        }
      });
    }else {
      account = userProfile;
    }
    this.setState({
      sessionCode,
      account,
      roleAssetDigest,
      assetCurrentMenu,
      assetPermission
    },()=>{
      let item= this.getCurrentMenu('/');
      this.assignmentMenu(item);
      this.props.history.push(item.routePath);
    });
  };

  getLocalMenu = () =>{//有缓存数据时
    const {basename} = this.props;
    const sessionCode = window.localStorage.getItem($USER_CODE);
    let data = getSmamoLocalMenu();
    const {userProfile, roleAssetDigest, assetCurrentMenu, assetPermission} = data || {};
    let account = {};
    if(Array.isArray(userProfile)){
      userProfile.forEach((item)=>{
        for(let key in item){
          if(basename === key) account = Object.assign({}, item[key]);
        }
      });
    }else {
      account = userProfile;
    }
    this.setState({
      sessionCode,
      account,
      roleAssetDigest,
      assetCurrentMenu,
      assetPermission
    },()=>{
      const {history:{location}} = this.props;
      let item = this.getCurrentMenu(location.pathname);
      this.assignmentMenu(item);
    });
  };

  getCurrentMenu(path){ //从整个项目面包屑菜单数据中查找当前菜单
    const {assetCurrentMenu}=this.state;
    const {basename}=this.props;
    let projectMenu = getProjectData(basename, assetCurrentMenu);
    if(!projectMenu.length) return;
    if(path === '/'){
      return projectMenu[0];
    }else{
      for(let item of projectMenu){
        if(path.indexOf(item.routePath) === 0){
          return item;
        }
      }
    }
    return null;
  }

  getBreadCrumbImgValue(routePath){
    const {breadCrumbImg}=this.props;
    if(Array.isArray(breadCrumbImg)){
      for (let item of breadCrumbImg){
        if(routePath && item.path && routePath.indexOf(item.path)>-1) return item.img;
      }
    }
    return breadCrumbImg;
  }

  assignmentMenu(item){//将面包屑菜单赋值给state
    const {history:{location}, path}=this.props;
    if(!item) item = {assetCode:null, routePath:null, currentMenu:null};
    let routePath = item.routePath;
    let currentMenu = item.currentMenu;
    let listPage= true;
    if(location.pathname.indexOf(routePath)>-1 && location.pathname!==routePath){
      let extra = path.find((data)=>location.pathname.indexOf(data.path)>-1);
      if(extra) {
        currentMenu = [...currentMenu, extra.name];
      }else{
        currentMenu = null;
      }
      listPage= false;
    }
    this.setState({
      breadCrumbImg: this.getBreadCrumbImgValue(routePath),
      breadMenu: {routePath, currentMenu, listPage}
    });
  }

  renderMenu(item, target){
    if(item.children.length===0) return <PorMenu.Item key={item.assetCode} routePath={item.routePath} target={target} blank={item.redirectBlankFlag} isToken={item.redirectTokenFlag}>{item.assetName}</PorMenu.Item>;
    return (
      <PorMenu.SubMenu
        key={item.assetCode}
        target={target}
        routePath={item.routePath}
        title={item.assetName}
        blank={item.redirectBlankFlag}
        isToken={item.redirectTokenFlag}
      >
        {
          item.children.map((child)=>this.renderMenu(child, target))
        }
      </PorMenu.SubMenu>
    );
  }

  handleMenuClick(item, currentMenu, assetCode){
    let token=JSON.stringify(window.localStorage.getItem($USER_TOKEN)).split(' ');
    // let token=JSON.stringify(window.localStorage.getItem(USER_TOKEN)).split(' ');
    let accessToken=token[1].split('"');
    if(item.props.blank===1){
      window.open(`${item.props.routePath}?access_token=${accessToken[0]}`,"_blank");
    }else {
      this.assignmentMenu({
        routePath:item.props.routePath,
        currentMenu,
        assetCode
      });
    }
  }

  render() {
    const {sessionCode, account, roleAssetDigest, breadCrumbImg, breadMenu:{routePath, currentMenu, listPage}} = this.state;
    const {basename} = this.props;
    return (
      <div className="por-smamo-common">
        <div className="page-content">
          <PorBackdrop>
            <PorLogo />
            <div className="menu-content">
              <PorMenu basename={basename} checkedMenuCode={basename} onClick={this.handleMenuClick}>
                {roleAssetDigest.map((item) => {
                  return this.renderMenu(item, item.assetCode)
                })}
              </PorMenu>
              <Account firstName={account.firstName} lastName={account.lastName} roleName={account.roleName} />
            </div>
          </PorBackdrop>
          {
            currentMenu &&
            <PorBackdrop type="dark">
              <PorBreadCrumb {...this.props} page={currentMenu || []} routePath={routePath} listPage={listPage} img={breadCrumbImg} />
            </PorBackdrop>
          }
          {sessionCode && this.props.children}
        </div>
        <PorFooter />
      </div>
    )
  }
}
