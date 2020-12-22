
    <template>
  <div>
    <Header></Header>
    <div class="stats-wrapper">
      <stats-container></stats-container>
      <CircleStat></CircleStat>
    </div>
    <AddBong></AddBong>
    <br>
    <Footer></Footer>
  </div>
</template>


<script>
import StatsContainer from "../components/StatsContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CircleStat from "../components/DougnutStat.vue";
import AddBong from "../components/AddBong.vue";

export default {
  components: {
    StatsContainer,
    Header,
    Footer,
    CircleStat,
    AddBong,
  },
  props: {
    propName: {
      type: [],
      //   default:
    },
  },
};
</script>

<style scoped>
.stats-wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr;
  border: 3px solid black;
  border-radius: 10px;
}

#stat-box-1 {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
#line-chart-render-monitor {
  height: 300px;
  width: 100%;
}
</style>