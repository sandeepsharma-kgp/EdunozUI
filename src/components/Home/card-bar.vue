<template lang="en">
    <b-container fluid style="background-color:#2A326D;">
        <b-row align-v="center">
            <b-col  class="card-container" lg>
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <div>
                    {{text}}     
                </div>
            </b-col>
            <b-col class="card-container" lg>
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <p>
                    {{text}}     
                </p>
                
            </b-col>
            <b-col class="card-container" lg>
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <p>
                    {{text}}     
                </p>
            </b-col>
            <b-col class="card-container" lg>
               <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <p>
                    {{text}}     
                </p>
            </b-col>
            <b-col class="card-container" lg>
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <p>
                    {{text}}     
                </p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "card-bar",
  data() {
    return {
      mainProps: {
        center: true,
        rounded: "circle",
        fluidGrow: false,
        blank: true,
        blankColor: "#bbb",
        alt: "Profile Picture"
      },
      text:
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams. You only live once, but if you do it right, once is enough."
    };
  },
  methods: {}
};
</script>

<style scoped>
.card-container {
  background-color: #eceef8;
  margin: 26px;
  border: #eceef8;
  border-radius: 12px;
  padding: 8px;
  color: #0e6251;
  font-weight: bold;
}
.card-container-img {
  top: 0;
  width: 68px;
  height: 66px;
}
</style>
