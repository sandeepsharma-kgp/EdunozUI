<template>
    <div id="mybutton">
        <button class="feedback btn btn-sm pl-5 pr-5"  @click="$bvModal.show('bv-modal-enquire')">Enquiry</button>
    </div>
</template>

<style scoped>
.feedback {
  background-color : #FF7340;
  color: white;
  padding: 10px 8px;
  border-radius: 4px;
  border-color: #46b8da;
}

#mybutton {
  position: fixed;
  bottom: 205px;
  right:-50px;
  -moz-transform:rotate(-90deg);
  -ms-transform:rotate(-90deg);
  -o-transform:rotate(-90deg);
  -webkit-transform:rotate(-90deg);
  z-index: 1;
}
</style>