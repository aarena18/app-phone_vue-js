<template>
  <div>
    <div class="bg">
      <h2>{{ contact.name }}</h2>

      <p>
        📞 <span>{{ contact.tel }}</span>
      </p>
    </div>
    <button class="appeler" @click="addCall(contact.name, contact.tel)">
      Appeler
    </button>
  </div>
</template>

<script>
export default {
  name: "CardContact",
  props: ["contact"],
  methods: {
    addCall(name, tel) {
      this.$store.commit("call", { name, tel });
    },
  },
};
</script>

<style scoped>
div {
  width: 300px;
  margin: 0 auto;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  background-color: #2c2c2d;
}

.bg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 80px;
  gap: 0;
}

p {
  margin: 0;
  padding: 0;
  height: auto;
}

h2 {
  margin: 0;
  padding: 0;
  height: auto;
}
button {
  padding: 10px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #2c56c9;
  color: white;
  font-weight: bold;
}
button:hover {
  background-color: #3e71fd;
}

p {
  color: #eeeeee;
  font-weight: bolder;
}
span {
  color: #eeeeee;
  font-weight: 400;
}
h2 {
  color: white;
  font-weight: bolder;
  margin: 0;
  padding: 0;
}
</style>
