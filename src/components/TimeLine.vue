<template>
  <section id="timeline" class="py-16">
    <v-container>
      <h2 class="text-h3 text-center font-weight-black mb-8">Our Journey</h2>
      <v-timeline>
        <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              Lorem ipsum
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at.
              Est et nobis iisque percipit, an vim zril disputando
              voluptatibus, vix an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          color: 'cyan',
          year: '1960',
        },
        {
          color: 'green',
          year: '1970',
        },
        {
          color: 'pink',
          year: '1980',
        },
        {
          color: 'amber',
          year: '1990',
        },
        {
          color: 'orange',
          year: '2000',
        },
        {
          color: 'teal',
          year: '2020',
        },
      ],
    }
  },
}
</script>
