<!-- 好货推荐 -->
<template>
  <panel title="In货推荐" :class="$style.panel">
      <section :class="$style.content">
          <div :class="$style.block" v-for="(item,index) in items" :key="index">
              <!-- 第一行 -->
              <img :src="item.titleImg" alt="">
              <!-- 第二行 -->
              <div :class='$style.goodshow'>
                  <div :class="$style.goods">
                      <img :src="item.goodsList[0].img" alt="">
                      <p :class="$style.goodsname">{{ item.goodsList[0].name }}</p>
                      <p :class='$style.goodsprice'><em>{{ item.goodsList[0].price }}</em>起</p>
                      <article>
                          <div :class="$style.progress"><div :class="$style.innerprogress"></div></div>
                          <span :class="$style.rate">{{ item.goodsList[0].rate }}</span>
                      </article>
                      <span :class="$style.tips">{{ item.goodsList[0].tips }}</span>
                  </div>
                  <div :class="$style.goods">
                      <img :src="item.goodsList[1].img" alt="">
                      <p :class="$style.goodsname">{{ item.goodsList[1].name }}</p>
                      <p :class='$style.goodsprice'><em>{{ item.goodsList[1].price }}</em>起</p>
                      <article>
                          <div :class="$style.progress"><div :class="$style.innerprogress"></div></div>
                          <span :class="$style.rate">{{ item.goodsList[1].rate }}</span>
                      </article>
                      <span :class="$style.tips">{{ item.goodsList[1].tips }}</span>
                  </div>
              </div>
          </div>
      </section>
  </panel>
</template>

<script>
import panel from '../core/panel';
export default {
  data () {
    return {
        items:[
            {
                titleImg:'//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
                goodsList:[
                    {
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
                        name:'双响炮蓝牙音箱',
                        price:'29.00',
                        rate:'172%',
                        tips:'精选'
                    },
                    {
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
                        name:'脑波相机',
                        price:'998.00',
                        rate:'259%',
                        tips:'精选'
                    }
                ]
            },
            {
                titleImg:'//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
                goodsList:[
                    {
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
                        name:'智能电动牙刷',
                        price:'19.00',
                        rate:'481%',
                        tips:'精选'
                    },
                    {
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
                        name:'烟草加热电子烟',
                        price:'258.00',
                        rate:'105%',
                        tips:'精选'
                    }
                ]
            },
            {
                titleImg:'//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
                goodsList:[
                    {
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
                        name:'赖公高淮封藏老酒',
                        price:'99.00',
                        rate:'199%',
                        tips:'精选'
                    },
                    {
                        img:'https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
                        name:'泗洪花雕醉蟹',
                        price:'58.00',
                        rate:'222%',
                        tips:'精选'
                    }
                ]
            }
        ]
    };
  },

  components: {
      panel
  },

  computed: {},

  methods: {},

  mounted() {}
}

</script>
<style lang='scss' module>
@import '../../css/element.scss';
.panel{
    .content{
        .block{
            margin-bottom: 40px;
            >img{
                width: 640px;
                height: 170px;
            }
            &:nth-child(3){
                margin-bottom: 0;
                padding-bottom: 40px;
            }
            .goodshow{
                @include list(row);
                background-color: rgb(250, 250, 250);
                height: 396px;
                box-sizing: border-box;
                .goods{
                    width: 50%;
                    box-sizing: border-box;
                    position: relative;
                    text-align: center;
                    img{
                        width: 180px;
                        height: 180px;
                        margin-top: 44px;
                        margin-bottom: 20px;
                    }
                    .goodsname{
                        color: #444;
                        font-size: 28px;
                    }
                    .goodsprice{
                        color: #999;
                        font-size: 20px;
                        height: 48px;
                        line-height: 48px;
                        &::before{
                            content:'￥';
                            display:inline-block;
                            color:#FF3232;
                            font-size: 28px;
                        }
                        em{
                          font-size: 36px;
                          color: #FF3232;
                          margin-right: 4px;
                        }
                        
                    }
                    article{
                        @include list(row);
                        align-items: center;
                        justify-content: center;
                        margin-top: 16px;

                        .progress{
                            position: relative;
                            width: 100px;
                            height: 8px;
                            background-color: #ddd;
                            margin-right: 15px;
                            top: 2px;
                            .innerprogress{
                                height: 100% !important;
                                width: 50%;
                                background-image: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
                                z-index: 999;
                            }
                        }

                        .rate{
                            color: #999;
                            font-size: 24px;
                        }

                    }
                    
                    .tips{
                        background-color: #ACACAC;
                        color:#ff0000;
                        padding: 4px 8px;
                        text-align: center;
                        font-size: 20px;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }

                }
            }
            
        }
    }
}
</style>