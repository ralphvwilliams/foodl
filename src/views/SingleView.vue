<template>
  <div class="bg">
    <img src="@/assets/search-bg.png" alt="" />
  </div>
  <div class="meal-info">
    <div class="meal-img">
      <img :src="meal.strMealThumb" alt="" />
    </div>
    <div class="meal-name">
      <h4>{{ meal.strMeal }}</h4>

      <div class="category">
        <div class="category-info">
          <img src="@/assets/category.png" alt="" />
          <span>CATEGORY</span>
          <p>{{ meal.strCategory }}</p>
        </div>
        <div class="category-info">
          <img src="@/assets/area.png" alt="" />
          <span>AREA</span>
          <p>{{ meal.strArea }}</p>
        </div>
        <div class="category-info">
          <img src="@/assets/Tags.png" alt="" />
          <span>TAGS</span>
          <p>{{ meal.strTags }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="ingredients">
    <h3>Ingredients</h3>
    <div class="ings">
      <div class="ing" v-for="ingredient in ingredients">
        <p>{{ ingredient.ingredient }}</p>
        <div class="measure">
          <span>{{ ingredient.measurement }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="instructions">
    <h3>Instructions</h3>
    <div class="inst">
      <div class="instruction" v-for="instruction in instructions">
        <p>{{ (count += 1) }}. {{ instruction }}</p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'SingleView',

  data() {
    return {
      meal: null,
      count: 0,
    };
  },

  async created() {
    await this.fetchById(this.$route.params.id);
    this.setMeal();
  },

  methods: {
    ...mapActions({
      fetchById: 'fetchById',
    }),

    setMeal() {
      this.meal = this.getById;
    },
  },

  computed: {
    ...mapGetters({
      getById: 'getById',
    }),

    ingredients() {
      const ings = [];
      const measurements = [];
      const objs = [];
      Object.entries(this.meal).forEach((keyValuePair) => {
        if (keyValuePair[0].startsWith('strIngre') && keyValuePair[1]) {
          ings.push(keyValuePair[1]);
        }
        if (keyValuePair[0].startsWith('strMeasu') && keyValuePair[1]) {
          measurements.push(keyValuePair[1]);
        }
      });
      for (let i = 0; i < ings.length; i++) {
        let obj = {};
        obj['ingredient'] = ings[i];
        obj['measurement'] = measurements[i];
        objs.push(obj);
      }
      return objs;
    },

    instructions() {
      const arrayOfInstructions = this.meal.strInstructions?.trim().split('.');
      console.log(arrayOfInstructions);
      return arrayOfInstructions.filter((element) => element !== '');
    },
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

.meal-info {
  display: flex;
  margin-left: 22.3%;
  /* margin-right: 300px; */
  gap: 60px;
}

.meal-img {
  box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 300px;
  height: 320px;
  margin-top: 120px;
}

.meal-name {
  margin-top: 180px;
}

.meal-img img {
  width: 99%;
  height: 99%;
  border-radius: 8px;
  box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
}

h4 {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  /* identical to box height, or 40px */
  letter-spacing: -0.02em;

  color: #000000;
}

.category {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}

.category-info {
  min-width: 124px;
  /* height: 68px; */
  padding-left: 26px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: 26px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05),
    inset 1px 1px 2px rgba(255, 255, 255, 0.37);
  backdrop-filter: blur(94px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 4px;
}

.category-info span {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  /* identical to box height, or 10px */
  letter-spacing: 0.09em;
  text-transform: uppercase;
  margin-left: 6px;
  color: #954f1d;
}

.category-info p {
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */
  letter-spacing: -0.02em;
  margin-top: 11px;
  color: #000000;
}

.ingredients {
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1),
    inset 0px 4px 2px rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(24px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 10px;
  margin-top: 122px;
  width: 45%;
  margin-left: 30%;
  padding-left: 32px;
  padding-top: 28px;
  padding-right: 150px;
}

.ingredients h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  /* identical to box height, or 32px */
  letter-spacing: -0.02em;

  color: #000000;
}

.ings {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
  padding-bottom: 40px;
}

.ing {
  border: 1px solid #919191;
  border-radius: 30px;
  padding: 8px 16px;
  align-items: center;
  display: flex;
  gap: 10px;
  cursor: pointer;
}

.ing p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  text-transform: capitalize;

  color: #919191;
}

.ing:hover {
  background: #ff9f59;
  border: none;
}

.ing:hover > p {
  color: #000000;
}

.ing:hover > .measure {
  background-color: #ffffff;
}

.ing:hover > .measure span {
  color: #ff9f59;
}

.measure {
  background: #aaaaaa;
  border-radius: 30px;
  padding: 2px 8px;
}

.measure span {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 105%;
  /* identical to box height, or 13px */
  text-transform: capitalize;

  color: #ffffff;
}

.instructions {
  margin-top: 72px;
  margin-left: 30%;
}

.inst {
  margin-top: 32px;
}

.instructions h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  /* identical to box height, or 32px */
  letter-spacing: -0.02em;

  color: #000000;
}

.instruction p {
  margin-bottom: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 165%;
  /* or 26px */
  text-transform: capitalize;

  color: #000000;
}
</style>
