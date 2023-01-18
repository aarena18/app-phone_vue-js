<template>
    <div>
        <h2>{{contact.name}}</h2>
        <span>numéro: +{{contact.tel}}</span>
        <button>Appeler</button>
    </div>
</template>
<script>
export default {
    name: "CardContact",
    props:[
        "contact"
    ]
}
</script>
<style scoped> 
    div {
    width: 200px;
    margin: 0 auto;
    height: 200px;
    background-color: #42b983;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px; 
}
button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: #2c3e50;
    color: white;
    font-weight: bold;
  }
</style>