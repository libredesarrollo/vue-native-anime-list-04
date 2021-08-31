<template>
  <view :style="style.container">
    <text :style="style.h1">Listado de Anime</text>
    <view :style="style.hr"></view>

    <view v-if="animes.length == 0" :style="{ flex: 1, justifyContent: 'center' }">
      <activity-indicator size="large" color="#8f04a8" />
    </view>

    <scroll-view :style="{ marginBottom: 10 }">
      <touchable-opacity
        v-for="a in animes"
        :key="a.id"
        :on-press="() => goToDetail(a)"
      >
        <text class="item">{{ a.title }}</text>
      </touchable-opacity>
    </scroll-view>
  </view>
</template>

<script>
import { getAnime } from "../helpers/anime";
import { style } from "../helpers/style";

export default {
  /*async*/ created() {
    //this.animes = await getAnime()
    getAnime(50).then((data) => (this.animes = data));
   
    //console.log(this.animes[1].title)
  },

  props: {
    navigation: {
      Object,
    },
  },
  data() {
    return {
      animes: [],
      style,
    };
  },
  methods: {
    goToDetail: function (anime) {
      this.navigation.navigate("Detail", anime);
    },
  },
};
</script>
<style>
.item {
  color: #5d016d;
  border-width: 2px;
  border-color: #5d016d;
  border-radius: 3px;
  padding: 5px;
  font-size: 18px;
  margin-bottom: 5px;
}
</style>