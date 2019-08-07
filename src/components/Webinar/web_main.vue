<template>
  <div class="course">
    <div>
      <b-card-group>
        <b-card>
          <b-tabs style="background: #2A326D;">
            <b-tab title="Overview">
              <b-card></b-card>
            </b-tab>

            <b-tab title="About Speaker">
              <b-card></b-card>
            </b-tab>

            <b-tab title="FAQs">
              <b-card></b-card>
            </b-tab>
          </b-tabs>
        </b-card>

        <b-card>
          <div class="reg">
            <h3 align="center">Register Now</h3><br>
            <div class="form-group">
              <input
                type="text"
                style="background: #ECEEF8;margin-bottom: 20px;"
                class="form-control"
                name="username"
                required="required"
                placeholder="Full Name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                style="background: #ECEEF8;margin-bottom: 20px;"
                class="form-control"
                name="email"
                required="required"
                placeholder="Email"
              />
            </div>

            <div class="form-group">
              <input
                type="text"
                style="background: #ECEEF8; margin-bottom: 20px;"
                class="form-control"
                name="ph_no"
                required="required"
                placeholder="Phone Number"
              />
            </div>

            <div class="dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                data-toggle="dropdown"
              >Select Branch</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                <a class="dropdown-item" href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                data-toggle="dropdown"
              >Select City</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                <a class="dropdown-item" href="#">Link 3</a>
              </div>
            </div>
            <div class="dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                data-toggle="dropdown"
              >Select State</button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                <a class="dropdown-item" href="#">Link 3</a>
              </div>
            </div>



            <div class="form-group">
              <button
                type="submit"
                style="margin-bottom: 20px;background:#FF7340;"
                class="text-white btn-block btn-lg"
              >Submit</button>
            </div>
          </div>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<style scoped>
.reg {
  width: 60%;
  border-style: groove;
  align-self: center;
  padding: 5%;
}
.btn{
  width:100%;
  border-style: groove;
  margin-bottom: 5%;
  background-color:grey
}
</style>
>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
