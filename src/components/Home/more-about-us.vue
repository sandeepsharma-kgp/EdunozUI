<template lang="en">
    <b-container fluid style="background-color:#f9f9f9;">
    <h5 style="font-weight: bold; color: #0e6251; padding: 12px;">More About Us</h5>
        <b-row align-v="center">
            <b-col sm>
                <div>
                    <b-card
                    align="center"
                    style="max-width: 20rem; border: 3px solid #394285; border-radius: 12px;"
                    class="about-us-card"
                    >
                    <b-card-img style="padding: 4px; height: 136px; width: 218px;" :src="require('@/assets/images/great_faculty.jpg')" alt="Image" bottom></b-card-img>

                    <b-card-body>
                    <b-card-title class="more-card-title">Great Faculty</b-card-title>
                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's                        
                    </b-card-text>
                    </b-card-body>
                    </b-card>
                </div>
            </b-col>
            <b-col sm>
                <div>
                    <b-card
                    align="center"
                    style="max-width: 20rem; border: 3px solid #394285; border-radius: 12px;"
                    class="about-us-card"
                    >
                    <b-card-img style="padding: 4px; height: 136px; width: 218px;" :src="require('@/assets/images/get_certified.jpg')" alt="Image" bottom></b-card-img>

                    <b-card-body>
                    <b-card-title class="more-card-title">Get Certified</b-card-title>
                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's
                    </b-card-text>
                    </b-card-body>
                    </b-card>
                </div>
                
            </b-col>
            <b-col sm>
                <div>
                    <b-card
                    align="center"
                    style="max-width: 20rem; border: 3px solid #394285; border-radius: 12px;"
                    class="about-us-card"
                    >
                    <b-card-img style="padding: 4px; height: 136px; width: 218px;" :src="require('@/assets/images/online_tests.jpg')" alt="Image" bottom></b-card-img>

                    <b-card-body>
                    <b-card-title class="more-card-title">Online Tests</b-card-title>
                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's                        
                    </b-card-text>
                    </b-card-body>
                    </b-card>
                </div>
            </b-col>
            <b-col sm>
              <div>
                    <b-card
                    align="center"
                    style="max-width: 20rem; border: 3px solid #394285; border-radius: 12px;"
                    class="about-us-card"
                    >
                    <b-card-img style="padding: 4px; height: 136px; width: 218px;" :src="require('@/assets/images/get_full_support.jpg')" alt="Image" bottom></b-card-img>

                    <b-card-body>
                    <b-card-title class="more-card-title">Get Full Supports</b-card-title>
                    <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's                        
                        Some quick example text to build on
                    </b-card-text>
                    </b-card-body>
                    </b-card>
                </div>
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
.about-us-card {
  margin: 26px;
  background-color: #f9f9f9;
  color: #0e6251;
  font-weight: bold;
  font-size: 14px;
  overflow: auto;
  height: 350px;
}
.more-card-title{
    color: #ff7340;
    font-weight: bold;
    font-size: 16px;
}
</style>
