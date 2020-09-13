<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import ListItem from '../components/ListItem'
export default {
  components: {
    ListItem,
  },
  created() {
    //뷰 스토어의 api 호출 함수 호출 
    this.$store.dispatch('FETCH_JOB');
  
  }
}
</script>