<template>
  <nav>
    <div class="left-nav">
      <div class="logo">
        <img src="@/assets/Logo.png" alt="" @click="pushToHome" />
      </div>
    </div>
    <div class="right-nav">
      <p
        @click="pushToHome"
        :style="[
          $route.name == 'home'
            ? { 'font-weight': '700' }
            : { 'font-weight': '400' },
        ]"
      >
        Home
      </p>
      <p
        @click="pushToSearch"
        :style="[
          $route.name == 'search'
            ? { 'font-weight': '700' }
            : { 'font-weight': '400' },
        ]"
      >
        Search
      </p>
    </div>
  </nav>
  <router-view />
</template>

<script>
import router from './router';

export default {
  name: 'App',

  methods: {
    pushToSearch() {
      router.push('/search');
    },
    pushToHome() {
      router.push('/');
    },
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #000000;
}

nav {
  display: flex;
  justify-content: space-between;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 20px;
}

.logo {
  cursor: pointer;
}

.right-nav {
  display: flex;
  justify-content: space-between;
  gap: 72px;
}

.right-nav p {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  /* or 23px */
  letter-spacing: -0.04em;
}

p {
  cursor: pointer;
}
</style>
