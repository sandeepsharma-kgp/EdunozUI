<template>
    <div >
        <b-modal id="bv-modal-enquire"  hide-footer   modal-class="enq" size="sm" body-bg-variant="dark" header-bg-variant="dark" class="float-right"> 
            <div class="en" >
        
        <div class="form-group">
			
            <input type="text" class="form-control" name="password" required="required" placeholder="Full Name">
        </div>
	
		<div class="form-group">
			
            <input type="text" class="form-control" name="password" required="required" placeholder="Email">
        </div>
		
        <div class="form-group">
			
            <input type="password" class="form-control" name="confirm_password" required="required" placeholder="Phone Number">
        </div>        
        
        <div style="padding-bottom:15px">
            <b-dropdown id="dropdown-1" text="Select Courses"  variant="light" style=" width:100%;">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
        </div>

        <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"

        ></b-form-textarea>
        <div class="form-group" style="padding:5px;text-align:center">
			<b-button  style="background-color : #FF7340;" required="required" @click="$bvModal.show('bv-modal-signup'); $bvModal.hide('bv-modal-signin')" > Enter Query</b-button>
		</div>
    </div>
        </b-modal>
    </div>
</template>

<style scoped>
  .enq{
  background-color:#455674;
  opacity:0.5;

}

</style>
