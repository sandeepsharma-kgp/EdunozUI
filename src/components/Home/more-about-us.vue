<template lang="en">
    <b-container fluid style="background-color:#eceef8;">
        <b-row align-v="center">
            <b-col  class="card-container" md>
                <div>
                    <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    img-height="136px"
                    img-width="218px"
                    align="center"
                    tag="article"
                    style="max-width: 20rem; padding: 12px; border: 2px solid #060E47"
                    class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                    </b-card>
                </div>
            </b-col>
            <b-col class="card-container" md>
                <div>
                    <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    img-height="136px"
                    img-width="218px"
                    align="center"
                    tag="article"
                    style="max-width: 20rem; padding: 12px; border: 2px solid #060E47"
                    class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                    </b-card>
                </div>
                
            </b-col>
            <b-col class="card-container" md>
                <div>
                    <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    img-height="136px"
                    img-width="218px"
                    align="center"
                    tag="article"
                    style="max-width: 20rem; padding: 12px; border: 2px solid #060E47"
                    class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                    </b-card>
                </div>
            </b-col>
            <b-col class="card-container" md>
              <div>
                    <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    img-height="136px"
                    img-width="218px"
                    align="center"
                    tag="article"
                    style="max-width: 20rem; padding: 12px; border: 2px solid #060E47"
                    class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
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
