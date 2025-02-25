<template>
  <main class="flex flex-col h-full created">
    <div
      class="fadeElement flex w-full justify-center items-center content-center h-3/8 mb-0"
    >
      <CarouselInit
        class="fadeElement flex w-4/4 justify-center items-center content-center fadeInAnimation"
      />
    </div>

    <div class="fadeElement back sm:justify-center pt-0 lg:text-center h-2/8">
      <div class="w-full flex flex-col">
        <div class="w-full flex flex-col">
          <div class="w-full mx-auto flex flex-row">
            <div class="flex w-2/4 created p-1"></div>
            <div class="flex w-2/4 alternated p-1"></div>
          </div>
          <div class="flex flex-col fadeElement">
            <div class="flex flex-col mt-5 sm:flex-row pt-0">
              <div
                class="flex w-4/8 flex-col content-center justify-center ml-5 sm:ml-10"
              >
                <h1
                  class="colortext2 fadeElement text-3xl pt-10 flex w-full justify-center text-start sm:text-start sm:text-7xl pt-0"
                >
                  Prepare-se para explorar o universo digital
                </h1>
                <h3
                  class="colortext2 fadeElement text-sm flex w-full text-start sm:text-xl"
                >
                  Sua presença online começa aqui.
                </h3>
              </div>
              <div class="flex w-4/8 justify-end flex">
                <img
                  src="/Imgs/Astronauta.png"
                  alt=""
                  class="w-5/5 cursor-pointer md:w-5/5 h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Make sure this div section is closed correctly -->
    <div
      class="flex flex-col pt-5 created2 colortext2 md:flex-row w-full justify-around"
    >
      <div
        class="flex flex-col justify-start items-start content-start p-4 fadeElement"
      >
        <span class="material-symbols-outlined notranslate"> code </span>
        <h3>Criação de Sites</h3>
        <p class="text-start">
          Criamos sites modernos e funcionais, adaptados às necessidades do seu
          negócio. De landing pages a plataformas completas, ajudamos a sua
          marca a ter presença online com soluções personalizadas.
        </p>
      </div>

      <div
        class="flex flex-col justify-start items-start content-start p-3 fadeElement"
      >
        <span class="material-symbols-outlined notranslate"> smart_toy </span>
        <h3>Assistentes de IA</h3>
        <p class="text-start">
          Integre assistentes virtuais inteligentes em sua plataforma.
          Automatize processos, melhore a experiência do usuário e forneça
          respostas rápidas e eficientes com soluções baseadas em inteligência
          artificial.
        </p>
      </div>

      <div
        class="flex flex-col justify-start items-start content-start p-3 fadeElement"
      >
        <span class="material-symbols-outlined notranslate"> bar_chart </span>
        <h3>Gestão de Tráfego</h3>
        <p class="text-start">
          Gerencie e otimize o tráfego do seu site. Oferecemos estratégias de
          marketing digital e campanhas pagas para aumentar sua visibilidade
          online e atrair mais clientes para o seu negócio.
        </p>
      </div>

      <div
        class="flex flex-col justify-start items-start content-start p-3 fadeElement"
      >
        <span class="material-symbols-outlined notranslate"> group </span>
        <h3>Consultoria Digital</h3>
        <p class="text-start">
          Nossos especialistas em tecnologia e marketing digital estão prontos
          para ajudar sua empresa a se destacar no mercado online. Oferecemos
          consultoria personalizada para transformar seus processos e otimizar
          resultados.
        </p>
      </div>
    </div>

    <div
      class="flex w-4/8 p-10 flex-col created content-center justify-center ml-0 sm:flex-row"
    >
      <div class="flex-col w-full sm:w-3/5">
        <h1
          class="colortext2 fadeElement text-3xl w-full pt-10 flex text-center sm:text-left justify-start sm:justify-start sm:text-6xl pt-0"
        >
          Transformamos ideias em<br />
          presença digital
        </h1>
        <div class="flex flex-wrap justify-around p-2">
          <!-- Primeira frase -->
          <div class="flex flex-row-reverse items-center p-1 fadeElement">
            <span class="material-symbols-outlined text-3xl">check</span>
            <h3 class="text-sm sm:text-lg mt-2 colortext2">
              Sites otimizados com SEO para atrair e converter leads.
            </h3>
          </div>

          <!-- Segunda frase -->
          <div class="flex flex-row-reverse items-center p-1 fadeElement">
            <span class="material-symbols-outlined text-3xl">check</span>
            <h3 class="text-sm sm:text-lg mt-2 colortext2">
              Aumente a visibilidade do seu site com estratégias de tráfego
            </h3>
          </div>

          <!-- Terceira frase -->
          <div class="flex flex-row-reverse items-center p-1 fadeElement">
            <span class="material-symbols-outlined text-3xl">check</span>
            <h3 class="text-sm sm:text-lg mt-2 colortext2">
              Estruturamos sua marca no digital com e-mails profissionais.
            </h3>
          </div>

          <!-- Quarta frase -->
          <div class="flex flex-row-reverse items-center p-1 fadeElement">
            <span class="material-symbols-outlined text-3xl">check</span>
            <h3 class="text-sm sm:text-lg mt-2 colortext2">
              Automatize processos com assistentes virtuais
            </h3>
          </div>
        </div>
      </div>
      <div class="flex w-full sm:w-2/5 fadeElement">
        <img
          src="/Imgs/PrintCliente.png"
          class="w-full sm:w-3/5 rounded-md"
          alt=""
        />
      </div>
    </div>
    <div class="created2 pt-10 pb-20">
      <EmailJS class="created2 fadeElement" />
    </div>
  </main>
</template>

<script>
import CarouselInit from "./CarouselInit.vue";
import EmailJS from "./EmailJS.vue";

export default {
  components: {
    CarouselInit,
    EmailJS,
  },
  mounted() {
    this.addFadeInOnScroll();
  },
  methods: {
    addFadeInOnScroll() {
      const elements = document.querySelectorAll(".fadeElement");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      elements.forEach((element) => observer.observe(element));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_mixins.scss";
.fadeElement {
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.back {
  background: url("/home/apascentar/Área de Trabalho /Samuel/Trabalho/Freelancer/Digitalizando /Digitalizando/public/Imgs/Textura.png"),
    /* Textura */ linear-gradient(to bottom, #172243, #000000); /* Gradiente de fundo */
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-blend-mode: multiply; /* Mistura a textura com o gradiente */
}
.back2 {
  background: url("/home/apascentar/Área de Trabalho /Samuel/Trabalho/Freelancer/Digitalizando /Digitalizando/public/Imgs/Textura.png"),
    /* Textura */ linear-gradient(to bottom, #000000, #172243); /* Gradiente de fundo */
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-blend-mode: multiply; /* Mistura a textura com o gradiente */
}
.notranslate {
  unicode-bidi: isolate;
}
.fade-in {
  opacity: 1;
}
.animation {
  animation: bounce 1.2s infinite ease-in-out;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-25px);
  }
}
.created {
  background: linear-gradient(to bottom, #172243, #000000);
}
.created2 {
  background: linear-gradient(to bottom, #000000, #172243);
}
.alternated {
  background: linear-gradient(to bottom, #ece5da, #000000);
}
.fadeInAnimation {
  animation: fadeInAnimation 2s ease forwards;
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.darkmode {
  @include background-color($dark-background-color);
  @include text-color($light-light-gray);
  @include border-color($dark-dark-gray);
}

.colortext {
  color: #ece5da;
}

.colortext2 {
  color: #cfc8bc;
}
.lightmode {
  @include background-color($light-white);
  @include text-color($light-text-color);
  @include border-color($dark-dark-gray);
}
</style>
