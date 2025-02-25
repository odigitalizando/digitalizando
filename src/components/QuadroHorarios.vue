<template>
  <v-app class="mb-0 pb-0">
    <v-container class="text-center">
      <v-row>
        <v-col cols="12">
          <!-- Botão com cor de fundo -->
          <v-btn color="amber" block large class="mb-4">
            Quadro de Horários de Musculação
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col v-for="(item, index) in horarios" :key="index" cols="12" md="6">
          <!-- Cartões sem cor de fundo -->
          <v-card class="pa-4">
            <v-card-title class="text-center">
              <v-avatar size="40" class="mr-3">
                <v-icon>mdi-weight-lifter</v-icon>
              </v-avatar>
              <div>
                <div class="headline">{{ item.dia }}</div>
                <div class="subtitle-1">{{ item.horario }}</div>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      horarios: [
        { dia: "Segunda", horario: "05:00 - 22:00" },
        { dia: "Terça", horario: "05:00 - 22:00" },
        { dia: "Quarta", horario: "05:00 - 22:00" },
        { dia: "Quinta", horario: "05:00 - 22:00" },
        { dia: "Sexta", horario: "05:00 - 22:00" },
        { dia: "Sábado", horario: "06:00 - 12:00" },
      ],
    };
  },
};
</script>

<style scoped>
/* Removendo a cor de fundo do v-app */
.v-application {
  background-color: transparent !important;
}

/* Caso você queira um fundo específico, substitua 'transparent' por qualquer cor */
</style>
