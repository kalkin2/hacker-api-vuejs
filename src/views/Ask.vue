<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem'

export default {
  components: {
    ListItem,
  }
  // computed: {
  //   //1
  //   // ask() {
  //   //   return this.$store.state.ask;
  //   // }
  //   //2
  //   // ...mapState({
  //   //   ask: state => state.ask
  //   // })
  //   //3
  //   ...mapGetters([
  //     'getFetchedAsk' 
  //   ]),

  // },
  ,created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>