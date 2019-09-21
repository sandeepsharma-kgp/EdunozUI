<template>
  <div>
    <v-carousel hide-delimiters height="350">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>

    <div>
      <div class="viscard" style="background-color:#eceef8;">
        <b-modal id="modal-tall" title="Vision & Goals" hide-footer="true">
          <p class="my-4">{{vision}}</p>
          <template v-slot:modal-footer="{ ok, cancel, hide }"></template>
        </b-modal>
        <div>
          <h5 align="center">Vision & Goals</h5>
          <div class="content-of-vision">{{vision}}</div>
        </div>
        <button v-b-modal.modal-tall type="button" aria-label="Read More">
          <span aria-hidden="true">
            <img
              :src="require('@/assets/icons/more.png')"
              alt="Vision and Goals"
              style="height: 32px; width: 32px;"
            />
            <br />More
          </span>
        </button>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>   

<script>
export default {
  data() {
    return {
      isActive: true,
      vision:
        "Edunoz aspires of seeing our country utilize its potential to the best, by not just helping the Next Gen \
realize their worth but also in guiding them to improve their caliber. We are dedicated towards \
providing top quality IT training and hands-on learning experience to students and IT individuals, helping \
them hone their skills to grab new opportunities. We keep them updated with all the newer \
advancements and industry requirements to provide an upper hand in competition. With tireless efforts \
from our side and the support of highly experienced industry professionals, we are sure to impart \
knowledge and empower them with skills set to build their future.",
      items: [
        {
          src: require("../../assets/images/businessman-charts-close-up-1851448.jpg")
        },
        {
          src: require("../../assets/images/code-coding-connection-943096.jpg")
        },
        {
          src: require("../../assets/images/blur-close-up-desk-433604.jpg")
        }
      ]
    };
  }
};
</script>



<style scoped>
div {
  position: relative;
}
.viscard {
  padding-top: 10px;
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  opacity: 0.95;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
}
.bg {
  position: absolute;
  width: 100%;
  background-color: #5d6493;
  top: 100%;
  height: 80px;
  z-index: -1;
}
.content-of-vision {
  padding: 15px;
  height: 80px;
  overflow: hidden;
}
@media only screen and (max-width: 570px) {
  .viscard {
    width: 100%;
  }
}
@media only screen and (max-width: 900px) {
  .viscard {
    width: 95%;
  }
}
</style>
