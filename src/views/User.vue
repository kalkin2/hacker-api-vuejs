<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="userName">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joind ' +userInfo.created }},</span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile";
// import { mapGetters } from "vuex";
// import axios from 'axios'

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    console.log("userName", userName);
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style>
</style>