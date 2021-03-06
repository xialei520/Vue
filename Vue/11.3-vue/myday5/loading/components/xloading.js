Vue.component("xloading", {
  template:`
    <div id="loadingToast" v-show="bool">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </div>
  `,
  data:function(){
    return{
      bool:false
    }
  },
  mounted:function(){
    var self = this;
    bus.$on("showLoading", function(status){
      console.log(status);
      self.bool = status;
    })
  }
})
