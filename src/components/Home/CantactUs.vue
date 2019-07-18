<template>
    <div>
        <div :class="{whatsapp: visible, nvisible: !visible}">
            <a href="https://www.whatsapp.com">
        <b-img :src="require('@/assets/icons/Watsapp.png')" style="width: 60px"></b-img>
            </a>
        </div><div :class="{messenger: visible, nvisible: !visible}">
            <a href="https://www.fb.com">
        <b-img :src="require('@/assets/icons/messenger.png')" style="width: 60px;"></b-img>
            </a>
        </div>
        <div class="speech" @click="visible=!visible">
        <b-img :src="require('@/assets/icons/speech-bubbles-comment-option@2x.png')" style="width: 48px;"></b-img>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contact-us',
    data(){
        return{
            visible: false
        }
    }
}
</script>

<style scoped>
div.speech{
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 2;
}
div.whatsapp{
    position: fixed;
    bottom: 30px;
    right: 65px;
    cursor: pointer;
    z-index: 2;
}
div.messenger{
    position: fixed;
    bottom: 70px;
    right: 20px;
    cursor: pointer;
    z-index: 2;
}
.nvisible{
    display: none;
}
</style>
