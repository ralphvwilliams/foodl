<template>
  <div class="bg-img">
    <img src="@/assets/bg-img.png" alt="" />
  </div>
  <div class="hero-info">
    <div class="hero-text">
      <h2>Find the recipes for the ingredients you have on hand</h2>
      <button @click="pushToSearch">Search Now</button>
    </div>
    <div class="hero-img">
      <img class="bar" src="@/assets/hero-img.png" />
      <!-- <img class="main-img" :src="getRandom.strMealThumb" alt="" /> -->
      <img src="@/assets/main.png" class="main-img" alt="" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  // async created() {
  //   await this.fetchRandom();
  //   console.log(this.getRandom);
  // },
  components: {},
  methods: {
    ...mapActions({
      fetchRandom: 'fetchRandom',
    }),
    pushToSearch() {
      this.$router.push('/search');
    },
  },
  computed: {
    ...mapGetters({
      getRandom: 'getRandom',
    }),
  },
};
</script>

<style scoped>
.bg-img {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  z-index: -1;
}

.bg-img img {
  width: 100%;
}
.hero-info {
  /* margin-top: 160px; */
  margin-left: 120px;
  /* margin-right: 120px; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 130%;
  /* or 62px */
  letter-spacing: -0.04em;
  width: 442px;
  color: #000000;
  margin-top: 250px;
}

button {
  background: #000000;
  box-shadow: 0px 16px 40px rgba(192, 86, 10, 0.4);
  border-radius: 8px;
  width: 224px;
  height: 60px;
  color: #ffffff;
  margin-top: 52px;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  /* or 31px */
  letter-spacing: -0.04em;
  border: none;
  cursor: pointer;
}

.bar {
  position: absolute;
  top: 40%;
  right: 0;
  z-index: -1;
}

.main-img {
  /* width: 500px;
  height: 640px; */
  margin-right: 120px;
  margin-top: 160px;
  /* padding-bottom: 223px; */
}
</style>
