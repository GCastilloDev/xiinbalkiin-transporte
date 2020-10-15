<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <v-card-title class="headline"> Agregar nueva estación </v-card-title>
        <v-card-text>
          <pre>
                {{ estacion }}
            </pre
          >
          <v-col cols="12" class="mb-0 pb-0">
            <v-text-field
              label="Ingresa el nombre de la estación"
              placeholder="Nombre de estación"
              outlined
              dense
              v-model="estacion.nombre"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="mb-0 mt-0 pb-0 pt-0">
            <v-text-field
              label="Ingresa la latitud estación"
              placeholder="Latitud"
              outlined
              dense
              v-model="estacion.latitud"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="mb-0 mt-0 pb-0 pt-0">
            <v-text-field
              label="Ingresa la longitud estación"
              placeholder="Longitud"
              outlined
              dense
              v-model="estacion.longitud"
            ></v-text-field>
          </v-col>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" dark depressed @click="$emit('cancel')">
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            dark
            depressed
            @click="enviarDatosFirebase"
          >
            Guardar estación
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { db } from "../../common/Firebase";
import { firestore } from "firebase/app";

export default {
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    estacion: {
      nombre: "",
      latitud: "",
      longitud: "",
    },
  }),
  methods: {
    enviarDatosFirebase() {
        
      const coordenadas = new firestore.GeoPoint(
        parseFloat(this.estacion.latitud),
        parseFloat(this.estacion.longitud)
      );
      const data = {
        nombre: this.estacion.nombre,
        coordenadas: coordenadas,
      };

      db.collection("estaciones")
        .add(data)
        .then(() => {
          alert("DATOS GUARDADOS CON EXITO");
        });
    },
  },
};
</script>

<style scoped>
</style>