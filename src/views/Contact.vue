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
                  <label class="contact-labels">Nome</label>
                  <md-input v-model="$v.form.name.$model" required></md-input>
                </md-field>
                <div class="error" v-if="!$v.form.name.required && errors">
                  Campo obrigatório
                </div>
                <md-field>
                  <label class="contact-labels">E-mail</label>
                  <md-input v-model="$v.form.email.$model" required></md-input>
                </md-field>
                <div class="error" v-if="!$v.form.email.required && errors">
                  Campo obrigatório
                </div>
                <md-field>
                  <label class="contact-labels">Mensagem</label>
                  <md-textarea
                    v-model="$v.form.message.$model"
                    required
                  ></md-textarea>
                </md-field>
                <div class="error" v-if="!$v.form.message.required && errors">
                  Campo obrigatório
                </div>

                <div class="contact-btn">
                  <vue-recaptcha :sitekey="recaptchaSitekey">
                    <md-button
                      type="submit"
                      @click.prevent="submit"
                      class="md-round md-success"
                      >Fale conosco</md-button
                    >
                  </vue-recaptcha>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
import VueRecaptcha from 'vue-recaptcha'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  components: { VueRecaptcha },
  data() {
    return {
      recaptchaSitekey: process.env.VUE_APP_RECAPTCHA_SITEKEY,
      errors: false,
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        email,
      },
      message: {
        required,
        minLength: minLength(24),
      },
    },
  },
  methods: {
    submit() {
      if (this.$v.$invalid) {
        this.errors = true
        alert('Formulário inválido, verifique suas informações')
      } else {
        this.errors = false
        this.sendForm()
      }
    },
    async sendForm() {
      // const formData = new FormData()

      // formData.append('name', this.form.name)
      // formData.append('email', this.form.email)
      // formData.append('message', this.form.message)

      console.log(this.form)

      await axios
        .post(
          `http://${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/fale-conosco`,
          this.form
        )
        .then(function(response) {
          alert(
            'Sua mensagem foi enviada com sucesso. Aguarde o retorno da nossa equipe no seu endereço de e-mail informado!'
          )
          document.Location.reload(true)
        })
        .catch(function(error) {
          // handle error
          console.log(error)
        })
    },
  },
}
</script>
<style scoped>
.space {
  position: relative;
  height: 16vh;
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

.description {
  color: #272f3a;
}

.contact-labels {
  font-weight: bold;
  color: #272f3a !important;
}
.testee {
  position: relative;
}

.contact-btn {
  text-align: center;
  margin-top: 20px;
}
</style>
