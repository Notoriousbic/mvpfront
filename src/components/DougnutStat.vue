
  <div class="stats-container">
    <line-chart 
    :chartdata="chartdata" 
    :options="options" />
  
  </div>

  



<script>
import { Doughnut } from "vue-chartjs";


export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  data: () => ({
    chartdata: {
      labels: ["SKU-#1", "SKU-2", "SKU-3,"],
      datasets: [
        {
          label: "Data One",
          backgroundColor:["#6845BA","#A245BA", "#455DBA"] , //green
          data: [44,20,50],
        },
        // {
        //   label: "Data Two",
        //   backgroundColor: "#44C4F3", //yellow
        //   data: [30,40,53,54,34,54,32,34,56,45,57,34,],
        // },

      ],
      options: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: "blue",
        title: {
          display:"SKY quantity"

        }

      },
    },
  }),
}

</script>

<style scoped>
.stats-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 3px solid black;


}
</style>