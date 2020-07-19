<template>
  <div class="app-container">
    <el-autocomplete
      v-model="state"
      popper-class="my-autocomplete"
      :fetch-suggestions="querySearch"
      placeholder="请输入酒店名称"
      @select="handleSelect"
    >
      <i
        slot="suffix"
        class="el-icon-edit el-input__icon"
        @click="handleIconClick"
      />
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
        <span class="addr">{{ item.address }}</span>
      </template>
    </el-autocomplete>

    <el-button type="primary" icon="el-icon-search" @click="search()"
      >搜索</el-button
    >

    <el-table
      v-loading="listLoading"
      :data="introduction"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="酒店简介">
        <template slot-scope="scope">
          {{ scope.row.desc }}
        </template>
      </el-table-column>
      <el-table-column label="酒店名称" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="酒店评分" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="酒店星级" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="更新时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
import { getSimilarhotel } from "@/api/table";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      restaurants: [],
      introduction: [],
      state: ""
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.restaurants = this.loadAll();
    this.introduction = this.load();
  },
  methods: {
    search() {
      // getSimilarhotel(this.state).then(res => {
      //   this.introduction = res.data
      // }).catch(error => {
      //   console.log(error)
      // })
      this.listLoading = true;
      getSimilarhotel(this.state)
        .then(res => {
          this.introduction = res.data.data;
          this.listLoading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchData() {
      this.listLoading = false;
      // getList().then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    load() {
      return [
        {
          desc:
            "青岛东方梅地亚酒店是由中冶东方工程技术有限公司投资，委托北京梅地亚电视中心管理的一家商务会议型酒店。酒店坐落于青岛经济技术开发区阿里山路，南邻唐岛湾公园，北邻开发区政府，紧邻中冶东方大厦，酒店地处青岛经济技术开发区政治、行政、金融中心位置，交通便利。酒店提倡低碳环保、绿色出行，为西海岸的蓝天增一份色彩，酒店为住宿客人提供4小时自行车。 青岛东方梅地亚酒店是由中冶东方工程技术有限公司投资，委托北京梅地亚电视中心管理的一家高档商务会议型酒店。酒店坐落于青岛市黄岛区阿里山路，距唐岛湾公园500米，金沙滩景区1.5公里（5分钟车程），酒店地处黄岛区政治、行政、金融中心位置，交通便利。酒店内设有大小会议室14余间和豪华房、行政房、海景房等7种房型共160余间，房间装修高档，舒适，满足不同人士需求，是您出差旅行，居家游玩的必备之选",
          name: "青岛东方梅地亚酒店",
          pageviews: 1,
          status: 1,
          display_time: 1
        },
        {
          desc:
            "青岛栈桥火车站主题海景日租房紧邻火车站栈桥，景色秀丽，交通便利。火车站栈桥豪华装修海景房，在火车站东出站口对面，如意大厦12楼1202A座，大厦配有24小时保安值勤，是高档公寓楼，房间看海，24小时热水，设施齐全，房间整洁干净",
          name: "青岛栈桥火车站主题海景日租房",
          pageviews: 1,
          status: 1,
          display_time: 1
        },
        {
          desc:
            "中航翔通游艇会酒店(青岛奥帆中心五四广场店)坐落于青岛旅游新地标奥帆中心内，与2018上合峰会会址毗邻而居，一步之遥，放眼望去游船、码头、海滨风光、日落美景尽收眼底，从房间内即可轻松观看帆船码头、五四广场、海边灯光秀等景色，令人心境开阔，惬意无比。 酒店拥有各具特色的客房百余间，舒适典雅、设施精良，配有干净卫生的智能马桶，极富现代感的客房内比特电话、可供ipod/iphone充电的收音电子闹钟等高科技无处不在。躺在超大浴缸里，一边放松身心、一边欣赏奥帆中心的海岸线美景。 这里的早餐种类多，营养丰富。餐厅外面就是儿童活动区，让孩子尽情玩闹。酒店内的日昇源中餐、青未了自助餐及稻早日料自助餐可满足您的不同用餐需求 酒店拥有可容纳80人的会议室，以及可容纳300人的宴会厅，设施设备先进，可满足各类商务、宴会活动。还有家庭影院、棋牌室、Spa、Toni&Guy及珠宝商场等。 这里的服务更是超越星级，做到无可挑剔。踏进酒店那一刻起，行李就由门童一路提供至客房；小朋友入住还能得到一份精美礼物。当你游玩一天回到酒店，房内已准备好了泡脚的洗脚盆及烧开的热水，还有专业管家亲笔写的温馨问候，令人感动，优质的服务直暖到心里。 天海一色的风景，现代化的商务区域，便利的交通，造就了酒店得天独厚的地理位置，是中外宾客在青岛旅游、商务、娱乐和食宿的理想下榻之外",
          name: "中航翔通游艇会酒店(青岛奥帆中心五四广场店)",
          pageviews: 1,
          status: 1,
          display_time: 1
        },
        {
          desc:
            "锦江之星品尚(青岛栈桥河南路店)位于河南路27号，与大沽路交界，地处百年风情老街，与中山路商业街、劈柴院相邻，距台东商业圈、五四广场、云霄路美食街乘出租车约10分钟车程，距机场大巴中山路站步行约3分钟。酒店南距栈桥风景区约1.5公里，步行10分钟；距青岛汽车总站约4.5公里，约15分钟车程；距轮渡、海底隧道车程5分钟。 拥有百年历史的青岛中山路迎来了锦江之星酒店青岛市一家升级版4S店--锦江之星品尚(青岛栈桥河南路店)。锦江之星4S升级后，客房采用全系列暖色调和柔和的灯光设计，使客房设计更加温馨和舒适——加厚的席梦思、双层床垫、安睡宝7孔纤维被子和枕头和全棉高支床上用品全面提升舒心睡眠体验；隐秘的保险箱设置提供贵重物品的保存；磨砂玻璃隔断设计的卫生间给人洁净环境；“热带雨林”淋浴装置为和增强的水压，使您放松一天疲劳的状态。 锦江之星品尚(青岛栈桥河南路店)设有多种房型，配有百兆无线网络，能让您无论在何地都能畅游网络，并设有大小会议室，是您出差、旅游、会议、海滨度假的理想选择",
          name: "锦江之星品尚(青岛栈桥河南路店)",
          pageviews: 1,
          status: 1,
          display_time: 1
        },
        {
          desc:
            "青岛海景花园大酒店位于东海中路，与大海隔路相望，沿海岸线220米；步行可达海滨木栈道、银海游艇俱乐部、中国水准零点景区，毗邻青岛海昌极地海洋公园、奥帆中心、海信广场、佳世客购物中心以及道教发源地崂山。 酒店一半以上客房将全海景尽收眼底，让您体验“面朝大海，春暖花开”的诗情画意。拥有“亲子”家庭房30间，包括海底小纵队儿童主题房、极地海洋主题房等。满满一层的儿童游乐场、儿童影院，以及室外儿童泳池、儿童沙滩等区域，为小朋友开启趣味之旅。 酒店配有Technogym器材的健身中心、独立足疗室、男/女分区的桑拿室、蒸汽室、美容美发室等康乐场所。 拥有上万条点评的“海景西餐厅” 汇聚中西美食之精粹，为食客奉上舌尖飨宴。久负盛名的“粤海早茶厅”也是岛城为数不多的粤式餐厅，“白果树餐厅青岛菜”以创意青岛菜著称，以别致素雅的景致、高端优质的服务、实惠接地的价格，为你留下独特的青岛记忆、山东印象。 酒店打造“亲情一家人”的服务品牌，“为顾客创造惊喜和感动”是我们殷切的期待。二十多年来酒店致力于向每位顾客提供管家式、个性化的服务。入选哈佛商学院教学案例的亲情服务理念和管理模式，定能为您留下“可值得传颂的故事”",
          name: "青岛武胜关度假酒店",
          pageviews: 1,
          status: 1,
          display_time: 1
        }
      ];
    },
    loadAll() {
      return [
        {
          value: "青岛东方梅地亚酒店",
          address: "长宁区新渔路144号"
        },

        {
          value: "青岛栈桥火车站主题海景日租房",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        {
          value: "中航翔通游艇会酒店(青岛奥帆中心五四广场店)",
          address: "上海市长宁区天山西路119号"
        },
        {
          value: "锦江之星品尚(青岛栈桥河南路店)",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  }
};
</script>
<style>
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>
