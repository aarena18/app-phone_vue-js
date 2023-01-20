<template>
  <div>
    <button class="open" @click="open = true">+</button>
    <div v-if="open" class="modal">
      <form @submit.prevent="addContact">
        <input
          type="text"
          placeholder="Nom et prénom..."
          v-model="CardAdd.name"
        />

        <input type="number" placeholder="numéro... " v-model="CardAdd.tel" />

        <button type="submit">Ajouter un contact</button>
      </form>
      <button class="close" @click="open = false">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAdd",

  data() {
    return {
      open: false,
      error: false,
      CardAdd: {
        name: "",
        tel: null,
      },
    };
  },
  methods: {
    addContact() {
      if (this.CardAdd.name == "" || this.CardAdd.tel == null) return;
      if (
        this.$store.state.contacts.find(
          (contact) => contact.name == this.CardAdd.name
        )
      )
        return;
      this.$store.commit("addContact", this.CardAdd);
      this.error = false;
      this.CardAdd = {
        name: "",
        tel: null,
      };
    },
  },
};
</script>

<style scoped>
form {
  background-color: #ebebeb;
  width: 300px;

  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
}

input {
  padding: 10px;
  border-radius: 10px;
  border: none;
}

button {
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #2c56c9;
  color: white;
  font-weight: bold;
}
button:hover {
  background-color: #3e71fd;
}

.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.open{
  margin-bottom: 10px;
  margin-left: 280px;
}
</style>
