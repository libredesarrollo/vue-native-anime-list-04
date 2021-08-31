<template>
  <view :style="style.container">
    <text :style="style.h1">
      {{ anime.title }}
    </text>

    <view :style="style.hr"></view>

    <image class="image" :source="{ uri: anime.image }" />

    <view :style="style.hr"></view>

    <scroll-view>
      <text>
        {{ anime.description }}
      </text>
    </scroll-view>
  </view>
</template>
<script>

import { style } from "../helpers/style";

export default {
  props: {
    navigation: {
      Object,
    },
  },
  data() {
    return {
      anime: this.navigation.state.params,
      style
    };
  },
};
</script>
<style>
.image {
  width: 100%;
  height: 200px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>