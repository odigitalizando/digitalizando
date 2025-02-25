<template>
  <div
    class="w-full max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg"
  >
    <h2 class="text-2xl font-bold text-center text-gray-200">
      Entre em Contato
    </h2>
    <p class="text-sm text-gray-400 text-center mb-4">
      Preencha os campos abaixo e entraremos em contato o mais rápido possível.
    </p>

    <form @submit.prevent="sendEmail" class="space-y-4">
      <div>
        <label class="block text-gray-300">Nome</label>
        <input
          v-model="form.name"
          type="text"
          required
          placeholder="Seu nome"
          class="w-full p-3 border rounded-md bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label class="block text-gray-300">E-mail</label>
        <input
          v-model="form.email"
          type="email"
          required
          placeholder="seuemail@exemplo.com"
          class="w-full p-3 border rounded-md bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label class="block text-gray-300">Mensagem</label>
        <textarea
          v-model="form.message"
          rows="4"
          required
          placeholder="Digite sua mensagem e informe seu WhatsApp para contato..."
          class="w-full p-3 border rounded-md bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
      >
        Enviar Mensagem
      </button>
    </form>

    <p v-if="successMessage" class="mt-4 text-green-400 text-center">
      {{ successMessage }}
    </p>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      successMessage: "",
    };
  },
  methods: {
    sendEmail() {
      const serviceID = "service_m4e2pqj"; // Substitua pelo seu Service ID do EmailJS
      const templateID = "template_91n52wp"; // Substitua pelo seu Template ID
      const userID = "WTC-TTccQKi0CPeDk"; // Substitua pelo seu User ID do EmailJS

      console.log("Enviando email com os seguintes dados:", this.form);

      emailjs
        .send(serviceID, templateID, this.form, userID)
        .then((response) => {
          console.log("Resposta do servidor:", response);
          this.successMessage = "Mensagem enviada com sucesso!";
          this.form = { name: "", email: "", message: "" };
        })
        .catch((error) => {
          console.error("Erro ao enviar email:", error);
          this.successMessage = "Mensagem enviada";
        });
    },
  },
};
</script>

<style scoped>
.fadeElement {
  opacity: 0;
  animation: fadeIn 1.2s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
