<template>
    <div >
        <b-modal id="bv-modal-enquire" hide-footer hide-header size="md"> 
            <div >
        
        <div class="form-group">
			
            <input type="text" class="form-control" name="password" required="required" placeholder="Full Name">
        </div>
	
		<div class="form-group">
			
            <input type="text" class="form-control" name="password" required="required" placeholder="Email">
        </div>
		
        <div class="form-group">
			
            <input type="password" class="form-control" name="confirm_password" required="required" placeholder="Phone Number">
        </div>        
        
        <div>
            <b-dropdown id="dropdown-1" text="Select Courses"  variant="outline" style="border-style: solid; width:100%;">
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
        <div class="form-group" style="padding:5px; ">
			<b-button  style="background-color : #FF7340;" required="required" @click="$bvModal.show('bv-modal-signup'); $bvModal.hide('bv-modal-signin')" > Enter Query</b-button>
		</div>
    </div>
        </b-modal>
    </div>
</template>
