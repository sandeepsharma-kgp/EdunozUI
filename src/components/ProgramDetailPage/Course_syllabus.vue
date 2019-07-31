<template>
  <div>
    <div >
      <b-img id="img1"
        :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
        class="img-fluid"
        fluid
        alt="responsive image"
        style="max-width:731px;"
        align="right"
      ></b-img>
    </div>
    <b-card-text>
      <strong>
        <p style=" font-size:24px">Overview</p>
      </strong>
      <ul align:left class="text-dark">
        <li>SAP Overview</li>
        <li>ERP Overview</li>
        <li>Architecture</li>
        <li>Usecase & Implementation</li>
        <li>Life cycle</li>
      </ul>
    </b-card-text>
    <b-card-text>
      <strong>
        <p style="font-weight: bold; font-size:24px">Intro to ABAP</p>
      </strong>
      <ul align:left class="text-dark">
        <li>Characteristics of ABAP and workbench Architecture</li>
        <li>Intruduction to data Dictionary</li>
        <li>Repository information</li>
        <li>ABAP statements,Creating programs and changing programs</li>
        <li>Data Dictionary</li>
      </ul>
    </b-card-text>
    <b-card-text>
      <strong>
        <p style="font-weight:bold;font-size:24px">Components of ABAP Dictionary</p>
      </strong>
      <ul align:left class>
        <li>Data Elements and Domains</li>
        <li>Intruductions</li>
      </ul>
    </b-card-text>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
ul li::before {
  content: "\2022";
  color: red;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.tab-title-class {
  color: #ff0000 !important;
}

@media only screen and (max-width: 770px) {
  #img1{
    width: 340px;
    align-content: left;
  }
}
@media only screen and (max-width: 385px) {
  #img1{
    width: 300px;
    align-content: left;
  }
}
@media only screen and (max-width: 320px) {
  #img1{
    width: 250px;
    align-content: left;
  }
}


</style>
