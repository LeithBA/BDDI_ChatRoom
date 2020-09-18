<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
HTML,
BODY {
  padding: 0;
  margin: 0;
}

ul {
  list-style-type: none;
}

h2 {
  text-align: center;
  font-family: "Sue Ellen Francisco", cursive;
}
h1 {
  text-align: center;
}

#app {
  width: 100%;
  height: 100vh;

  font-family: "Sue Ellen Francisco", cursive;
  font-size: 1.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
