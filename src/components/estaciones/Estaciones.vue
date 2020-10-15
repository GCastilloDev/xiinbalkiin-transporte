<template>
  <v-container>
    <v-card>
      <v-card-title>
        Estaciones
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn
          @click="dialog = true"
          color="deep-purple darken-1"
          dark
          depressed
          >Agregar estación<v-icon right>mdi-map-marker-plus</v-icon></v-btn
        >
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="estaciones"
        :search="search"
      ></v-data-table>
    </v-card>
    <NuevaEstacion :dialog="dialog" @cancel="dialog = false" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import NuevaEstacion from "../estaciones/NuevaEstacion";

export default {
  name: "EstacionesComponent",
  components: {
    NuevaEstacion,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nombre",
          align: "start",
          value: "nombre",
        },
        { text: "Latitud", value: "latitud" },
        { text: "Longitud", value: "longitud" },
        { text: "Detalles", value: "carbs" },
      ],
      dialog: false,
    };
  },
  computed: {
    ...mapState(["estaciones"]),
  },
};
</script>

<style lang="scss" scoped>
</style>