<template>
    <div class="login">
		<b-modal id="bv-modal-signin" hide-footer hide-header size="md"> 
    <div>
		<div class="form-header">
					<p class="text-white" style="font-weight: bold; padding: 10px 10px 10px; border-radius: 5px; margin: -15px -15px 25px; color:#000000; font-size: 35px;background:#2A326d; text-align: center;font-family: 'Pacifico', sans-serif;" >Sign In</p>
					
				</div >
		<div class="form-group">
        <div class="btn-group">
		
		<div><button type="button" class=" text-white btn-primary" style="width: 225px; height: 55px;border-radius: 5px;">Sign in with facebook</button></div>
		<div style="margin-left:20px;"><button type="button" class="btn-danger text-white"  style="border-radius: 5px; width: 225px; height: 55px">Sign in with gmail</button></div>
        </div>
		</div>

		<div class="form-group">
			
            <input type="text"  style="background: #ECEEF8;margin-bottom: 20px;" class="form-control" name="password" required="required" placeholder="Mobile/Email">
        </div>
		
        <div class="form-group">
			
            <input type="password"  style="background: #ECEEF8;margin-bottom: 20px;" class="form-control" name="confirm_password" required="required" placeholder="Password">
        </div>        
        
		<div class="form-group">
        <div class="btn-group">
		
		<div style="margin-right:20px; margin-left:20px; "><button type="submit" class="btn-secondary text-white" style="width: 200px; height: 50px;border-radius: 5px;" >Cancel</button></div>
		<div><button type="submit" class="btn-warning text-white" style="width: 200px; height: 50px;border-radius: 5px;" @click="login">Sing In</button></div>
        </div>
		</div>
        <div class="form-group" align="center">
			<b-button  required="required" @click="$bvModal.show('bv-modal-signup'); $bvModal.hide('bv-modal-signin')" variant="outline"> Don't have account?</b-button>
		</div>
		<div class="form-group" align="center">
			<a href="">SIGN UP NOW</a>
		</div>	
    </div>
</b-modal>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data: function() {
    return {
	  email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>