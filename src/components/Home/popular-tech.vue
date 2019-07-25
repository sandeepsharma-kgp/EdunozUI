<template>
    <v-container fluid grid-list-xl style="background-color:#f9f9f9;">
    <h5 style="font-weight: bold; color: #0e6251; padding: 12px; text-align: center;">More About Us</h5>
                <v-layout row wrap child-flex>
                    <v-flex lg3>
                        <v-img class="hello" style="height: 100px; width: 250px; padding: 4px; border-radius: 5px;" 
                        :src="require('@/assets/images/bitcoin-blockchain-coins.jpg')" alt="Image"></v-img>
                    </v-flex>
                    <v-flex lg3>
                        <v-img class="hello" style="height: 100px; width: 250px; padding: 4px; border-radius: 5px;" 
                        :src="require('@/assets/images/python.jpg')" alt="Image"></v-img>
                    </v-flex>
                    <v-flex lg3>
                        <v-img class="hello" style="height: 100px; width: 250px; padding: 4px; border-radius: 5px;" 
                       :src="require('@/assets/images/shutterstock.jpg')" alt="Image"></v-img>
                    </v-flex>
                    <v-flex lg3>
                        <v-img class="hello" style="height: 100px; width: 250px; padding: 4px; border-radius: 5px;" 
                         :src="require('@/assets/images/Software-Testing.png')" alt="Image"></v-img>
                    </v-flex>
                    <v-flex lg4>
                        <v-img class="hello" style="height: 100px; width: 250px; padding: 4px; border-radius: 5px;" 
                       :src="require('@/assets/images/angular.png')" alt="Image"></v-img>
                    </v-flex>
                    <v-flex lg4>
                        <v-img class="hello" style="height: 100px; width: 250px; padding: 4px; border-radius: 5px;"  
                        :src="require('@/assets/images/information.jpeg')" alt="Image"></v-img>
                    </v-flex>
                    <v-flex lg4>
                        <v-img class="hello" style="height: 100px; width: 250px; padding: 4px; border-radius: 5px;" 
                        :src="require('@/assets/images/development-cycle.png')" alt="Image"></v-img>
                    </v-flex>
                    
                </v-layout>
            </v-container>
</template>
<style scoped>
.hello{
    margin-left: auto;
    margin-right: auto;
}
@media only screen and (max-width: 1121px){
    .hello{
        margin-left: 0;
        margin-right: 0;
    }
}
</style>
