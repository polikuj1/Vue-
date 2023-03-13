<template>
  <div class="container mt-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" href="#" :class="{ active: isActive[0]}"
        @click.prevent="changeProductType(null, 0)">全部</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" :class="{ active: isActive[1]}"
        @click.prevent="changeProductType('傳統文化', 1)">傳統文化</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" :class="{ active: isActive[2]}"
        @click.prevent="changeProductType('季節性活動', 2)">季節性活動</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: [false, false, false],
    };
  },
  methods: {
    changeProductType(type, order) {
      this.isActive[order] = true;
      console.log(type);
      this.$emit('changeType', type);
    },
  },
};
</script>
