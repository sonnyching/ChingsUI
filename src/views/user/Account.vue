<template>
  <div class="layout">
    <div class="content">
      <div class="breadcrumb">
      </div>
      <mu-flexbox class="mt8">
        <mu-flexbox-item class="account-home-left">
          <div class="content">
            相见时难别亦难，东风无力百花残。 春蚕到死丝方尽，蜡炬成灰泪始干。   晓镜但愁云鬓改，夜吟应觉月光寒。 蓬山此去无多路，青鸟殷勤为探看
            <p></p>
            多情却似总无情，唯觉尊前笑不成。
            蜡烛有心还惜别，替人垂泪到天明。


            【注解】：
            １、多情句：意谓多情者满腔情绪，一时无法表达，只能无言相对，倒象彼此无情。
            ２、尊：酒杯。

            【韵译】：
            聚首如胶似漆作别却象无情；
            只觉得酒筵上要笑笑不出声。
            案头蜡烛有心它还依依惜别；
            你看它替我们流泪流到天明。

            【评析】：
            第二首着重写惜别，描绘与她的筵席上难分难舍的情怀。首名写离筵之上压抑无
            语，似乎冷淡无情；次句以“笑不成”点明原非无情，而是郁悒感伤，实乃多情，回
            应首句。
          </div>
        </mu-flexbox-item>
        <mu-flexbox-item class="account-home-right">
          <div class="user_info_container">
            <img :src="userPhotoUrl" />
          </div>
          <div>
            <div class="user_info_name">无言的松松</div>
            <div class="user_info_item">
              <mu-badge :content="messageCount" circle secondary>
                <mu-icon-button icon="notifications"/>
              </mu-badge>
            </div>
          </div>
        </mu-flexbox-item>
      </mu-flexbox>

      <!--<div class="body">-->
        <!--<mu-sub-header>阳光</mu-sub-header>-->
        <!--<mu-content-block>-->
          <!--散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！-->
        <!--</mu-content-block>-->
      <!--</div>-->
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      userPhotoUrl: '/static/images/user_default.jpg',
      activeTab: 'tab1',
      messageCount: 2
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  },
  mounted () {
    this.$http.get('/api/user/test', {})
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
  .layout{
    min-width: 600px;
  }

  .content{
    width: 96%;
    margin: 0 auto;
  }

  .breadcrumb{
    margin: 10px 0;
  }

  .mt8 {
    margin-top: 8px;
  }
  .account-home-left {
    min-width: 400px;
    min-height: 300px;
    width: 70%;
    background-color: #f9f9f9;
    text-align: center;
    line-height: 32px;
    border-radius: 6px;
  }
  .account-home-left .content{
    margin:20px;
    text-align: left;
  }
  .account-home-right {
    min-height: 300px;
    width:300px;
    text-align: center;
    background-color: #f9b6c6;
    border-radius: 6px;
  }

  .user_info_container{
    width:300px;
    height: 200px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .account-home-right img{
    width:150px;
    height: 150px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }

  .user_info_name{
    width:100%;
    line-height: 1.6;
    text-align: center;
    font-size: 1.2rem;
  }

  .user_info_item{

  }

</style>
