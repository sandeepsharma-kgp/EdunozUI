<template>
  <div id="app">
    
    <ContactUs/>
    <Signup/>
    <SignIn/>
  </div>
</template>

<script>
import Signup from './components/Signup'
import SignIn from './components/SignIn.vue'
import ContactUs from './components/CantactUs.vue'

export default {
  name: 'app',
  components: {
    Signup,
    SignIn,
    ContactUs
  
  }
  
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding : 0px;
}
</style>