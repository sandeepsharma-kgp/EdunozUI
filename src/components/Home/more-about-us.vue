<template>
            <v-container fluid grid-list-xl style="background-color:#f9f9f9;">
    <h5 style="font-weight: bold; color: #0e6251; padding: 12px; text-align: center;">More About Us</h5>

                <v-layout justify-center row wrap child-flex>
                    <v-flex md6 lg3>
                        <v-card height="calc(100% - 5px)" 
                        style=" 
                        border: 3px solid #394285; 
                        border-radius: 12px; 
                        padding: 5px; 
                        color: #0e6251; 
                        text-align: center;
                        background-color: #f9f9f9;">
                        <br>
                        <v-img style="height: 130px; width: 180px; margin-left: auto; margin-right: auto; padding: 4px;" :src="require('@/assets/images/great_faculty.jpg')" alt="Image"></v-img>
                        <h2 class="more-card-title">Great Faculty</h2>
                        <v-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's                        
                        </v-card-text> 
                        </v-card>
                    </v-flex>
                    <v-flex md6 lg3>
                        <v-card height="100%" 
                        style=" 
                        border: 3px solid #394285; 
                        border-radius: 12px; 
                        padding: 5px; 
                        color: #0e6251; 
                        text-align: center;
                        background-color: #f9f9f9;">
                        <br>
                        <v-img style="height: 130px; width: 180px; margin-left: auto; margin-right: auto; padding: 4px;" :src="require('@/assets/images/get_certified.jpg')" alt="Image"></v-img>
                        <h2 class="more-card-title">Get Certified</h2>
                        <v-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's                        
                        </v-card-text> 
                        </v-card>
                    </v-flex>
                    <v-flex md6 lg3>
                        <v-card height="100%" 
                        style=" 
                        border: 3px solid #394285; 
                        border-radius: 12px; 
                        padding: 5px; 
                        color: #0e6251; 
                        text-align: center;
                        background-color: #f9f9f9;">
                        <br>
                        <v-img style="height: 130px; width: 180px; margin-left: auto; margin-right: auto; padding: 4px;" :src="require('@/assets/images/online_tests.jpg')" alt="Image"></v-img>
                        <h2 class="more-card-title">Online Tests</h2>
                        <v-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's                        
                        </v-card-text> 
                        </v-card>
                    </v-flex>
                    <v-flex md6 lg3>
                        <v-card height="100%" 
                        style=" 
                        border: 3px solid #394285; 
                        border-radius: 12px; 
                        padding: 5px; 
                        color: #0e6251; 
                        text-align: center;
                        background-color: #f9f9f9;">
                        <br>
                        <v-img style="height: 130px; width: 180px; margin-left: auto; margin-right: auto; padding: 4px;" :src="require('@/assets/images/get_full_support.jpg')" alt="Image"></v-img>
                        <h2 class="more-card-title">Get Full Supports</h2>
                        <v-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's                        
                        Some quick example text to build on the card title and make up the bulk of the card's                        
                        Some quick example text to build on the card title and make up the bulk of the card's                        

                        </v-card-text> 
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
</template>
<style scoped>

.more-card-title{
    color: #ff7340;
    font-weight: bold;
    font-size: 16px;
    text-align: center !important;
    padding: 6px;
}
</style>
