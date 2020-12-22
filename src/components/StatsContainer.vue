
  <div class="stats-container">
    <line-chart 
    :chartdata="chartdata" 
    :options="options" />
  
  </div>
  <DoughnutStat></DoughnutStat>


<script>
import { Bar } from "vue-chartjs";
import DoughnutStat from "../components/DougnutStat.vue"


export default {
  components: {
    DoughnutStat,
  },
  extends: Bar,
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  data: () => ({
    chartdata: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Revenue",
          backgroundColor: "#5FA061", //LIGHT
          data: [44,20,50,40,22,35,43,42,23,34,43,54,65],
        },
        {
          label: "Cost",
          backgroundColor: "#3AC936", //DARK
          data: [30,40,53,54,34,54,32,34,56,45,57,34,],
        },

      ],
     
    },
     options: {
        responsive: true,
        maintainAspectRatio: false,
        backgroundColor: "blue",
        title: {
          display: true, 
          text: "margin calculation"
        }
      },
  }),
}

</script>

<style scoped>
.stats-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;

}
</style>