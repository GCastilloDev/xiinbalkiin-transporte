<template>
  <div>
    <BarraNavegacion />
    <Mapa />
    <SeccionPrincipal />
  </div>
</template>

<script>
import BarraNavegacion from "../components/BarraNavegacion";
import Mapa from "../components/Mapa";
import SeccionPrincipal from "../components/SeccionPrincipal";

export default {
  name: "Home",
  components: {
    BarraNavegacion,
    Mapa,
    SeccionPrincipal,
  },
};
</script>
