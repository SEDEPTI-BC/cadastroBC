<template>
  <div class="wrapper">
    <div class="space"></div>
    <div class="teste main main-raised">
      <div class="section-contact">
        <div class="container">
          <div class="md-layout contact-form">
            <div class="md-layout-item ml-auto">
              <h2 class="title mt-0">Fale conosco</h2>
              <p class="description">
                Você possui alguma dúvida ou sugestão? fala com a gente!
              </p>
              <form action="">
                <md-field>
                  <label>Nome</label>
                  <md-input></md-input>
                </md-field>
                <md-field>
                  <label>E-mail</label>
                  <md-input></md-input>
                </md-field>
                <md-field>
                  <label>Mensagem</label>
                  <md-textarea></md-textarea>
                </md-field>
                <md-button class="md-round">Fale conosco</md-button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.space {
  position: relative;
  height: 18vh;
}

.contact-form {
  margin: 0 auto;
}

.teste {
  margin-top: 0px;
}

.section-contact {
  padding: 70px 0;
}
</style>
