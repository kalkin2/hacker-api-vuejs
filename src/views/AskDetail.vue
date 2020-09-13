<template>
  <div>
      <section>
        <!--질문 상세 정보 -->
        <user-profile :info="getFetchAskDetail">
            <!--slot 이용하여 분기처리 없어짐 --> 
           <router-link slot="userName" :to="`/user/${getFetchAskDetail.by}`">
           {{ getFetchAskDetail.by }}
           </router-link>
           <template slot="time">{{ 'Posted : '+ getFetchAskDetail.time }} </template>
        </user-profile>
      </section>
      <section>
          <h2>{{ getFetchAskDetail.title }}</h2>
      </section>
      <section>
        <!-- 질문 댓글 -->
        <div v-html="getFetchAskDetail.text"></div>
      </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile'
import { mapGetters } from 'vuex'
export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapGetters(['getFetchAskDetail'])

    },
    created() {
        const detailSeq =  this.$route.params.id;
        console.log('computed', detailSeq)
        //api호출 하기 
        this.$store.dispatch('FETCH_ASK_DETAIL',detailSeq)

    }

}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}

</style>