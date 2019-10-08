<template>
  <div id="app">
    <header>
      <img src="https://www.dhresource.com/0x0s/f2-albu-g2-M00-EC-50-rBVaGlonsYKABJKmAAC9bQAfgVA050.jpg/lovely-dog-puppy-paw-heart-design-vinyl-decal.jpg">
      <h1>Barkwire</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
#app {
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: hsl(250, 30%, 80%);
    img {
      width: 150px;
    }
  }
}
</style>