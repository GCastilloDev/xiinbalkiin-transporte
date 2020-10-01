<template>
  <div ref="contenedorMapa" class="mapa"></div>
</template>

<script>
import L from "leaflet";
import { db } from "../common/Firebase";

export default {
  name: "MapaComponent",
  mounted() {
    this.init();
  },
  data: () => ({
    mapa: null,
  }),
  methods: {
    async init() {
      await this.pintarMapa();
      await this.obtenerMarcadores();
    },
    pintarMapa() {
      const contenedorMapa = this.$refs.contenedorMapa;

      // instanciamos el mapa
      this.mapa = L.map(contenedorMapa, {
        center: [18.048627, -94.401241],
        zoom: 18,
      });

      // le agregamos la capa de personalizacion
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(this.mapa);
    },
    async obtenerMarcadores() {
      try {
        const response = await db.collection("estaciones").get();

        response.docs.forEach((e) => {
          let latitud = e.data().coordenadas.latitude;
          let longitud = e.data().coordenadas.longitude;

          this.pintarMarcador([latitud, longitud]);
        });
      } catch (error) {
        console.warn(error);
      }
    },
    pintarMarcador(coordenadas) {
      console.log(coordenadas);
      L.marker(coordenadas).addTo(this.mapa);
    },
  },
};
</script>

<style lang="scss" scoped>
.mapa {
  width: 100%;
  height: 90vh;
  z-index: 1;
}
</style>