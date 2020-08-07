import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {withRouter, BrowserRouter} from "react-router-dom";

import PorSmamoCommon from './kits/porSmamoCommon'
import {getSmamoLocalMenu} from '@pui/core'


class Welcome extends Component {
  render() {
		console.log('getSmamoLocalMenu',  getSmamoLocalMenu())
		const basename = 'pc';
		const assetName = [{"path":"/commodityCenter/category/add","name":"新建商品类别"},{"path":"/commodityCenter/commodity/add","name":"新建商品"},{"path":"/commodityCenter/commodity/edit","name":"编辑商品"},{"path":"/commodityCenter/commodity/relevancy","name":"关联商品类别"},{"path":"/commodityCenter/commodity/detail","name":"商品详情"},{"path":"/publicCharging/serviceUnit/add","name":"新建充电服务点数"},{"path":"/publicCharging/serviceUnit/detail","name":"充电服务点数详情"},{"path":"/publicCharging/servicePackage/add","name":"新建充电服务包"},{"path":"/publicCharging/servicePackage/detail","name":"充电服务包详情"},{"path":"/orderCenter/chargingOrder/detail","name":"充电订单管理详情"},{"path":"/orderCenter/packageOrder/detail","name":"商品订单详情"},{"path":"/information/add","name":"新建保时捷资讯"},{"path":"/information/edit","name":"编辑保时捷资讯"},{"path":"/information/detail","name":"保时捷资讯详情"},{"path":"/orderCenter/failureReporting/detail","name":"故障上报订单详情"},{"path":"/customerAccount/detail","name":"账户中心详情"},{"path":"/payCenter/payment/detail","name":"支付管理详情"},{"path":"/payCenter/receipt/detail","name":"发票管理详情"},{"path":"/payCenter/merchant/add","name":"新增商户管理"},{"path":"/payCenter/merchant/edit","name":"编辑商户管理"},{"path":"/payCenter/merchant/detail","name":"商户管理详情"}];
		const breadCrumbImg = '/static/media/pic-big.dd6054ca.jpg';

    return (
      <div>
        <h2>Welcome to Porsche UI : others </h2>
				<PorSmamoCommon {...this.props} basename={basename} path={assetName} breadCrumbImg={breadCrumbImg}>

				</PorSmamoCommon>
      </div>
    )
  }
}

const Tst = withRouter(Welcome)

ReactDOM.render(<BrowserRouter basename={`/${'pc'}`}>
	<Tst />
</BrowserRouter>, document.getElementById('box'))
