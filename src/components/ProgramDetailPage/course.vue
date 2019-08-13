<template>
  <div class="course">
    <div>
      <b-card>
        <b-tabs style="background: #2A326D;">

          <b-tab  title="Course Syllabus" style="border:none;border-radius:0px;border-style:none;">
            <b-card style="background:#f0f5f5;min-height:465px;border:none;border-radius:0px;">
              <Course_syllabus/>
            </b-card>
          </b-tab>

          <b-tab title="Instructors" style="border:none;border-radius:0px;">
            <b-card style="background:#f0f5f5;min-height:465px;border:none;border-radius:0px;">
              <Instructors/>
            </b-card>
          </b-tab>

          <b-tab title="FAQs" style="border:none;border-radius:0px;">
            <b-card style="background:#f0f5f5;min-height:465px;border:none;border-radius:0px;">
              <FAQ />
            </b-card>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<style scoped>

</style>
>

<script>
import FAQ from "../ProgramDetailPage/FAQ.vue";
import Instructors from "../ProgramDetailPage/Instructors.vue";
import Course_syllabus from "../ProgramDetailPage/Course_syllabus";
export default {
  name: "course",
  components: {
    FAQ,
    Instructors,
    Course_syllabus
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
