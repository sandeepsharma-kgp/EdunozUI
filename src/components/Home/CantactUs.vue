<template>
    <div class="fixed-bottom" style="text-align:right;padding:20px 40px;">
        <b-button style="background-color:#063b6c; border-color:#063b6c; border-radius:8px;" @click="$bvModal.show('bv-modal-signin')">
            <b-img :src="require('../../assets/icons/speech-bubbles-comment-option@2x.png')" style="padding: 0px 0px 0px 0px;" width=50px height=40px></b-img>
        </b-button>

        <b-modal id="bv-modal-signin" hide-footer hide-header> 
    <form>
		<div class="form-header">
			 <p class="text-white" style="font-weight: bold; padding:0px; color:#000000; font-size: 35px;">Sign In</p>
			
		</div >
		<div class="form-group">
        <div class="btn-group" id="corner">
		
		<div><button type="button" class=" text-white btn-primary" style="width: 145px; height: 55px;">Sing in with facebook</button></div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<div><button type="button" class="btn-danger text-white" style="width: 145px; height: 55px">Sing in with gmail</button></div>
        </div>
		</div>

		<div class="form-group">
			
            <input type="text" class="form-control" name="password" required="required" placeholder="Mobile/Email">
        </div>
		
        <div class="form-group">
			
            <input type="password" class="form-control" name="confirm_password" required="required" placeholder="Password">
        </div>        
        
		<div class="form-group">
        <div class="btn-group">
		
		<div><button type="button" class=" text-white btn-black button button1" id="button1" style="width: 200px; height: 50px;">Cancel</button></div>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<div><button type="submit" class="btn-warning text-white" style="width: 200px; height: 50px">Sing In</button></div>
        </div>
		</div>
        <div class="form-group">
			<b-button  required="required"  @click="$bvModal.show('bv-modal-signup'); $bvModal.hide('bv-modal-signin')" > Don't have account?</b-button>
		</div>
		<div class="form-group">
			<a href="Signup.vue">SIGN UP NOW</a>
		</div>	
    </form>

        </b-modal>

        
    </div>
</template>

<script>
export default {
    name: 'contact-us'
}
</script>

<style>

</style>
