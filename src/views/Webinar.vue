<template>
    <div class="web_main">
        <Navbar/>
        <Carousel/>
        <web_main/>
        <Enquiry/>
        <FloatContactUs/>
        <footer/>
    </div>
</template>

<script>
import Navbar from "../components/Navbar" ;
import Carousel from "../components/ProgramDetailPage/Carousel";
import Enquiry from "../components/Enquire";
import FloatContactUs from "../components/FloatContactUs";
import footer from "../components/footer";
import web_main from "../components/Webinar/web_main";

export default {
     components:{
    Navbar,
    Carousel,
    Enquiry,
    FloatContactUs,
    footer,
    web_main,
    }
}
</script>
>
