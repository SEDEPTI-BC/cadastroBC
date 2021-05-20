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
            <a href="/#">
              Criado por
            </a>
          </li>
          <li>
            <a href="/#">
              Sobre
            </a>
          </li>
          <li>
            <a href="/#">
              Site
            </a>
          </li>
          <li>
            <a href="/#">
              Licenças
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Feito por <md-icon>book</md-icon>
        <a href="https://www.creative-tim.com/" target="_blank">time da Biblioteca Central UFPA.</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
