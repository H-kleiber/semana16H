<script setup>
import axios from 'axios';
import { ref } from 'vue';

const arraycards= ref([]);
const getData = async () => {
	const response = await axios.get(`https://rickandmortyapi.com/api/character`);
  arraycards.value = response.data.results;
};
console.log(arraycards)
getData()
</script>

<template>
  <main>
    <div class="container">
        <div class='card' v-for="element in arraycards">
            <h2 class='item-title'>{{ element.name }}</h2>
            <img class='item-title' :src=element.image alt="">
        </div>
    </div>
  </main>
</template>
<style>
.container{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
 .card{
  margin: 2px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  height: 400px;
  border: 1px solid rgb(225, 222, 222);
  border-radius: 5px;
 }
 .item-title{
  align-self: center;
 }
</style>
