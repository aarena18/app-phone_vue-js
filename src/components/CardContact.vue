<template>
  <div>
    <h2>{{ contact.name }}</h2>
    <p>numéro: +<span>{{ contact.tel }}</span></p>
    <button>Appeler</button>
  </div>
</template>

<script>
export default {
  name: "CardContact",
  props: ["contact"],
};
</script>

<style scoped>
div {
  width: 300px;
  margin: 0 auto;
  height: 150px;
  background-color: #dde5ef;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}
button {
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #2c3e50;
  color: white;
  font-weight: bold;
  margin-top: 15px;
  
}
button:hover{
  background-color: #2c56c9;
}

p{
  color: #2c3e50;
  font-weight: bolder;
}
span{
  color: #5065a4;
}
h2{
  color: #2c3e50;
  font-weight: bolder;
  margin: 0;
  padding: 0;
}
</style>
