<template>
  <div id="nav">
    <router-link to="/" class="nav-item">React</router-link>
    <router-link to="/react-native" class="nav-item">React Native</router-link>
  </div>
  <router-view/>
</template>

<style>
#nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 150px;
  background-color: silver;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 10px;
}
</style>
