<template>
    <div class="web_main">
        <Navbar/>
        <Carousel/>
        <web_main/>
        <Enquiry/>
        <FloatContactUs/>
        <upcoming_webinar/>
        
    </div>
</template>

<script>
import Navbar from "../components/Navbar" ;
import Carousel from "../components/ProgramDetailPage/Carousel";
import Enquiry from "../components/Enquire";
import FloatContactUs from "../components/FloatContactUs";
import footer from "../components/footer";
import web_main from "../components/Webinar/web_main";
import upcoming_webinar from "../components/Webinar/upcoming_webinar";

export default {
     components:{
    Navbar,
    Carousel,
    Enquiry,
    FloatContactUs,
    footer,
    web_main,
    upcoming_webinar,
    }
}
</script>
>
