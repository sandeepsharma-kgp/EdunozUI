<template>
	<div>
  		<b-modal id="bv-modal-signup" hide-footer hide-header style="padding:600px" width=5000px>
				<div class="form-header">
					<p class="text-white" style="font-weight: bold; padding: 10px 10px 10px; margin: -15px -15px 25px; color:#000000; font-size:35px; background: #2A326d; text-align: center;font-family: 'Pacifico', sans-serif;" >Sign Up</p>
					
				</div >
				<div class="form-group">
					
					<input type="text" style="background: #ECEEF8;margin-bottom: 20px;" class="form-control" name="username" required="required" placeholder="Full Name">
				</div>
				<div class="form-group">
					
					<input type="email" style="background: #ECEEF8;margin-bottom: 20px;"class="form-control" name="email" required="required" placeholder="Email">
				</div>
				<div class="form-group">
					
					<input type="text" style="background: #ECEEF8; margin-bottom: 20px;" class="form-control" name="password" required="required" placeholder="Phone Number">
				</div>
				<div class="form-group">
					
					<input type="text" style="background: #ECEEF8; margin-bottom: 20px;" class="form-control" name="confirm_password" required="required" placeholder="Location">
				</div>
				<div class="form-group">
					
					<input type="password" style="background: #ECEEF8;margin-bottom: 20px;" class="form-control" name="confirm_password" required="required" placeholder="Password">
				</div>        
				
				<div class="form-group">
					<button type="submit" style="margin-bottom: 20px;background:#FF7340;"class=" text-white btn-block btn-lg">Create Account</button>
				</div>
				<div class="form-group">
					<label class="checkbox-inline"><input type="checkbox" required="required"> I accept all terms and conditions</label>
				</div>	
	  </b-modal>
	</div>
</templete>	  
