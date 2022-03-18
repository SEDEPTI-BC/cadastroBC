<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="/"> Criado por </a>
          </li>
          <li>
            <a href="http://bc.ufpa.br/sistema-de-bibliotecas/"> Sobre </a>
          </li>
          <li>
            <a href="http://bc.ufpa.br/"> Site </a>
          </li>
          <!-- <li>
            <a href="/#">
              Licenças
            </a>
          </li> -->
        </ul>
      </nav>
      <div class="copyright">
        Desenvolvido pelo
        <a href="http://bc.ufpa.br/creditos/" target="_blank"
          >time da Biblioteca Central UFPA </a
        >&copy; {{ year }}
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
<style></style>
