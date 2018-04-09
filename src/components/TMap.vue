<template>
  <div :style="{width: width + 'px'}">
    <el-input v-model="valueCopy" @keydown.enter.native="toSearch">
      <el-button slot="append"  icon="el-icon-search" @click="toSearch"></el-button>
    </el-input>
    <div id="bp-map" style="width: 100%;" :style="{height: height + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: "bp-TMap",
  props: {
    lat: {
      type: [Number, String],
      required: true 
    },
    lng: {
      type: [Number, String],
      required: true 
    },
    value: {
      type: String,
      required: true 
    },
    width: {
      type:Number,
      default: 600
    },
    height: {
      type:Number,
      default: 400
    }
  },
  data() {
    return {
      region: "",
      map: {},
      searchService: {},
      qq: {},
      markersArray: []
    };
  },
  computed: {
    valueCopy: {
      get(){
        return this.value
      },
      set(value){
        this.$emit('input', value);
      }
    }
  },
  created() {
    this.mapInit();
  },
  methods: {
    importTMap(key) {
      return new Promise(function(resolve, reject) {
        window.init = function() {
          resolve(qq);
        };
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "http://map.qq.com/api/js?v=2.exp&callback=init&key=" + key;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    },
    mapInit() {
      let vm = this;
      this.importTMap("CMFBZ-CCFCX-MXH4L-ZKHCK-DKMSV-7WFCL")
      .then(qq => {
        vm.qq =qq;
        vm.map = new qq.maps.Map(document.querySelector("#bp-map"), {
          center: new qq.maps.LatLng(vm.lat, vm.lng),
          zoom: 11,
          disableDefaultUI: true
        });
        if (!vm.lat || !vm.lng) {
          let citylocation = new qq.maps.CityService({
            complete: function(result) {
              vm.map.setCenter(result.detail.latLng);
            }
          });
          citylocation.searchLocalCity();
        }
        //点击
        var geocoder = new qq.maps.Geocoder();
        var listener = qq.maps.event.addListener(vm.map, "click", function(e) {
          vm.$emit('update:lat', e.latLng.lat);
          vm.$emit('update:lng', e.latLng.lng);
          geocoder.getAddress(e.latLng);
          geocoder.setComplete(resp => {
            vm.setMarker(e.latLng);
            let data = resp.detail;
            vm.valueCopy = data.address;
            vm.region = data.addressComponents.city;
          });
          geocoder.setError(err => {
            console.log("geocoder err", err);
          });
        });
        //查询
        vm.searchService = new qq.maps.SearchService({
          complete(results) {
            if(results.detail.pois && results.detail.pois.length > 0){
              var poi = results.detail.pois[0];
              vm.$emit('update:lat', poi.latLng.lat);
              vm.$emit('update:lng', poi.latLng.lng);
              vm.setMarker(poi.latLng);
              vm.map.setCenter(poi.latLng);
              vm.map.setZoom(13);
            }else{
              vm.$message.warning('暂无结果');
            }
          }
        });
      });
    },
    toSearch() {
      let vm = this;
      vm.searchService.setLocation(vm.region);
      vm.searchService.setPageIndex(0);         //设置检索的特定页数。
      vm.searchService.setPageCapacity(1);   //设置每页返回的结果数量。
      vm.searchService.search(vm.valueCopy);  //开始查询
    },
    setMarker(latLng){
      let vm = this;
      if(vm.markersArray.length > 0){
        vm.markersArray[0].setMap(null);
        vm.markersArray.length = 0;
      }
      var marker = new vm.qq.maps.Marker({
        map: vm.map,
        position:latLng
      });
      vm.markersArray.push(marker);
    }
  }
};
</script>