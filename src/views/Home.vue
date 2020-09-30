<template>
  <div class="home">    
    <BarraNavegacion />
    <Mapa />
  </div>
</template>

<script>
import BarraNavegacion from "../components/BarraNavegacion";
import Mapa from "../components/Mapa";

export default {
  name: "Home",
  components: {
    BarraNavegacion,
    Mapa
  },
};
</script>
