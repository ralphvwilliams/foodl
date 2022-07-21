<template>
  <div class="bg">
    <img src="@/assets/search-bg.png" alt="" />
  </div>
  <div class="search-info">
    <h2>What ingredients do you have?</h2>
    <form @submit.prevent="search">
      <input type="text" v-model="searchText" />
    </form>
  </div>
  <div class="cards">
    <div
      class="card"
      v-for="meal in meals"
      @click="this.$router.push({ name: 'view', params: { id: meal.idMeal } })"
    >
      <img :src="meal.strMealThumb" alt="" />
      <p>{{ meal.strMeal }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'SearchView',
  // async created() {
  //   await this.fetchByIngredient(this.searchText);
  // },
  data() {
    return {
      searchText: '',
      meals: null,
    };
  },
  methods: {
    ...mapActions({
      fetchByIngredient: 'fetchByIngredient',
    }),

    async search() {
      await this.fetchByIngredient(this.searchText);
      this.meals = this.getByIngredient;
      this.searchText = '';
    },
  },
  computed: {
    ...mapGetters({
      getByIngredient: 'getByIngredient',
    }),
  },
};
</script>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

.bg img {
  width: 100%;
}

.search-info {
  margin-top: 120px;
  text-align: center;
}

h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  /* identical to box height, or 32px */
  letter-spacing: -0.04em;

  color: #000000;
}

input {
  width: 576px;
  height: 52px;
  margin-top: 30px;
  background: #ffffff;
  box-shadow: 0px 14px 24px -8px rgba(182, 84, 14, 0.11);
  border-radius: 11px;
  border: none;
  background-image: url('@/assets/search.png');
  background-repeat: no-repeat;
  background-position-x: 20px;
  background-position-y: 20px;
  padding-left: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  /* identical to box height, or 24px */

  color: #000000;
}

.cards {
  margin-top: 300px;
  margin-left: 120px;
  margin-right: 120px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 200px;
}

.card {
  background: #ffffff;
  box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  width: 300px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 60px;
  /* text-align: center; */
}

.card img {
  margin-top: -25px;
  width: 248px;
  height: 229px;

  box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.card p {
  margin-top: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  /* identical to box height, or 18px */

  color: #000000;
}
</style>
