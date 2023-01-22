<template>
  <div class="input-display">
    <div class="inp">{{ inputValue }}</div>
  </div>
  <div class="keyboard">
    <div
      v-for="key in row1"
      v-bind:key="key.id"
      @click="input(key)"
      id="btn"
      class="key"
    >
      <span>{{ key }}</span>
    </div>
    <div
      v-for="key in row2"
      v-bind:key="key.id"
      @click="input(key)"
      id="btn"
      class="key"
    >
      <span>{{ key }}</span>
    </div>
    <div
      v-for="key in row3"
      v-bind:key="key.id"
      @click="input(key)"
      id="btn"
      class="key"
    >
      <span>{{ key }}</span>
    </div>
    <div
      v-for="key in row4"
      v-bind:key="key.id"
      @click="input(key)"
      id="btn"
      class="key"
    >
      <span>{{ key }}</span>
    </div>
    <button type="submit" @click="addCall" id="call" class="key">
      Appeler
    </button>
  </div>
</template>
<script>
export default {
  name: "KeysCall",
  data() {
    return {
      inputValue: "",
      row1: ["1", "2", "3"],
      row2: ["4", "5", "6"],
      row3: ["7", "8", "9"],
      row4: ["*", "0", "#"],
    };
  },
  computed: {
    inputValues() {
      return this.$store.state.inputValues;
    },
  },
  methods: {
    input(key) {
      this.inputValue += key;
    },
    addCall() {
      this.$store.commit("call", this.inputValue, {
        name: this.inputValue,
        tel: this.inputValue,
      });
      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
.inp {
  text-align: center;
  padding: 10px;
  margin: 20px;
  font-size: 21px;
  border-radius: 10px;
  font-weight: bold;
  color: #eeeeee;
}
.keyboard {
  width: 250px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
}
#call {
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  font-weight: bold;
  color: white;
  background-color: #2c56c9;
}

#call:hover {
  background-color: #3e71fd;
  color: white;
}

#btn {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  background-color: #2c2c2d;
  font-size: 16px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

#btn:hover {
  background-color: #4e4e4e;
}
</style>
