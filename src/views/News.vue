<template>
  <div>
   <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
  components: {
    ListItem,
  },created() {
    //뷰 스토어의 api 호출 함수 호출 
    this.$store.dispatch('FETCH_NEWS');
  
  }
 
}
</script>
