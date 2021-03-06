// pages/content/content.js
import { AppBase } from "../../app/AppBase";
import { ApiConfig } from "../../apis/apiconfig";
import { ServiceApi } from '../../apis/service.api';

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
  }
  onShow() {
    var that = this;
    if (super.onShow() == true) {
      var serviceapi = new ServiceApi();
      serviceapi.list({},(list)=>{
        that.Base.setMyData({list});
      });
    }
  }

}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onShow = content.onShow;
Page(body)