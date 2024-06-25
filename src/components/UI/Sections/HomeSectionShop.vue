<script>
</script>

<template>
  <section class="section-51">
    <div class="block-container container-62 w-container">
      <div class="layout-hflex flex-block-91">
        <div class="text-block">hronix x puma</div>
        <h1 class="header">Новая коллекция 2024/2025</h1>
      </div>
      <div id="posts" class="w-layout-layout quick-stack wf-layout-layout">
        <div id="posts" class="w-layout-cell">
            <div class="block-250">
              <div class="text-block-160">ОФИЦИАЛЬНЫЙ МАГАЗИН МЕРЧА</div>
              <h1 class="heading">HRONIX X PUMA</h1>
              <a href="#/shop" class="button-44 w-button">Купить лимитированную коллекцию</a>
            </div>
        </div>

        <div id="posts" class="w-layout-cell">
          <div class="block-249">
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped>
#posts {
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
}

* {
  background-color: var(--sauna);
}
section {
  display: block;
}

.section-51 {
  border-top: 5px solid var(--gold);
  border-bottom: 5px solid var(--gold);
}

.container-62 {
  width: 80vw;
  max-width: none;
  height: 100%;
}

.block-container {
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.layout-hflex {
  display: flex;
}

.flex-block-91 {
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 10px;
}

.text-block {
  color: var(--gold);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
}

.header {
  color: var(--gold);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;
  line-height: 125%;
}

h1 {
  margin-top: 0;
  font-family: Roboto, Arial, sans-serif;
}

.quick-stack {
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 20px;
  margin-bottom: 80px;
  padding-top: 0;
  padding-bottom: 0;
}

.w-layout-layout {
  grid-auto-columns: 1fr;
  justify-content: center;
  padding: 20px;
}

.wf-layout-layout {
  display: grid;
}

.w-layout-cell {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
}

.block-250 {
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
}

.block-249 {
  background-image: linear-gradient(to bottom,var(--opacity-25),var(--opacity-25)),url(https://cdn.prod.website-files.com/5f9bee46b9797ea7bdf87204/66548eaf16665f6402cdee46_12.png);
  background-position: 0 0,50% 30%;
  background-size: auto,cover;
  border-radius: 5px;
  width: 100%;
  height: 35vh;
  position: static;
  box-shadow: 5px 5px 10px 5px rgba(0,0,0,.2);
}

.text-block-160 {
  color: var(--gold);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
}

.heading {
  color: var(--gold);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  line-height: 125%;
}

.button-44 {
  background-color: var(--gold);
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 0;
  padding: 10px 15px;
  width: 50%;
  font-size: 12px;

  transition: 0.3s ease all;
}

.w-button {
  line-height: inherit;
  cursor: pointer;
  border: 0;
  text-decoration: none;
  display: inline-block;
}

.button-44:hover {
  background-color: var(--sauna);
}
</style>