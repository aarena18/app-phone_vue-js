<template>
  <div class="home">
    <h1>Votre historique d'appels</h1>

    <div class="journalAppels" v-for="contact in journalAppels" :key="contact.id">
      <h2>{{ contact.name }}</h2>
      <span>{{ contact.tel }}</span>
      <button class="test" @click="addCall(contact.name, contact.tel)">appler</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data(){
    return{
      name: "",
      tel: "",
    }
  },
  computed: {
    journalAppels() {
      return this.$store.state.journalAppels;
    },
  },
  methods: {
    addCall(name, tel) {
      this.$store.commit("call", { name, tel });
    },
    
  },

};
</script>

<style scoped>


.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.journalAppels {
  margin: 20px 0;
  padding: 20px;
  background-color: #2c2c2d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.journalAppels h2 {
  margin: 0 0 10px 0;
}

.journalAppels span {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.test {
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #2c56c9;
  color: white;
  font-weight: bold;
}

.test:hover {
  background-color: #3e71fd;
}

</style>
