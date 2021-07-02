<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Faça seu cadastro/pré-cadastro.</h1>
            <h4>
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTexto
              TextoTextoTextoTextoTextoTextoTextoTextoTextoTexto TextoTextoTexto
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container"></div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Pré-cadastro/Cadastro</h2>
              <h4 class="text-center description">
                Formulário de solicitação para pré-cadastro/recadastro online.
                Preencher ou marcar principalmente todos os itens obrigatórios.
                <br />
                A efetivação do cadastro/recadastro estará finalizado em até
                dois dias úteis a contar da data de solicitação.
                <br />
                A renovação de cadastro para alunos de graduação é semestral e
                para alunos de pós-graduação, técnicos administrativos e
                docentes da UFPA é anual.
                <br />
                <strong>Observações sobre os anexos:</strong>
                Discentes: Atestado de matrícula atual (SIGAA)<br />
                Servidores: Declaração de vínculo funcional (SAGITTA) ou
                carteira funcional (SIGEPE)<br />
                O nome e a foto associados à sua Conta do Google serão
                registrados quando você fizer upload de arquivos e enviar este
                formulário.
              </h4>
              
              <!-- Inicio do formulário -->
              <form class="contact-form" @submit="checkForm" @submit.prevent="sendEmail">
                <p v-if="errors.length">
                  <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                  <ul>
                    <li v-for="error in errors" :key="error.id">
                      {{ error }}
                    </li>
                  </ul>
                </p>

                

                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Seu nome *</label>
                      <md-input
                        v-model="user_name"
                        id="name"
                        name="user_name"
                        type="text"
                      ></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label >Seu nome social</label>
                      <md-input v-model="socialName" name="socialName" type="text"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Seu email *</label>
                  <md-input v-model="user_email" name="user_email" type="email"></md-input>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Endereço completo *</label>
                      <md-input v-model="address" name="address" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <label>Número para contato (DDD + número)* </label>
                      <md-input
                        v-model="contact"
                        type="text"
                        v-mask="'(##)#####-####'"
                      ></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Data de nascimento *</label>
                      <md-input
                        v-model="date"
                        type="text"
                        v-mask="'##/##/####'"
                      ></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <label>CPF * </label>
                      <md-input
                        v-model="CPF"
                        type="text"
                        v-mask="'###.###.###-##'"
                      ></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Nacionalidade *</label>
                      <md-input v-model="nationality" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <label>Documentação de identificação * </label>
                      <md-input v-model="doc" type="text"></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <br />
                    <label>Sexo *</label>
                    <br />
                    <input
                      type="radio"
                      id="one"
                      value="feminino"
                      v-model="sex"
                    />
                    <label for="one">Feminino</label>
                    <br />
                    <input
                      type="radio"
                      id="two"
                      value="masculino"
                      v-model="sex"
                    />
                    <label for="two">Masculino</label>
                    <br />
                    <input
                      type="radio"
                      id="three"
                      value="outros"
                      v-model="sex"
                    />
                    <label for="three">Outros</label>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <br />
                    <label>Deficiência</label>
                    <br />
                    <div id="example-3">
                      <input
                        type="checkbox"
                        id="mental"
                        value="Deficiência mental"
                        v-model="deficiency"
                      />
                      <label for="jack">Deficiência mental</label>
                      <br />
                      <input
                        type="checkbox"
                        id="auditiva"
                        value="Deficiência auditiva"
                        v-model="deficiency"
                      />
                      <label for="john">Deficiência auditiva</label>
                      <br />
                      <input
                        type="checkbox"
                        id="fisica"
                        value="Deficiência física"
                        v-model="deficiency"
                      />
                      <label for="mike">Deficiência física</label>
                      <br />
                      <input
                        type="checkbox"
                        id="visual"
                        value="Deficiência visual"
                        v-model="deficiency"
                      />
                      <label for="mike">Deficiência visual</label>
                      <br />
                      <input
                        type="checkbox"
                        id="multipla"
                        value="Deficiência multipla"
                        v-model="deficiency"
                      />
                      <label for="mike">Deficiência múltipla</label>
                      <br />
                      <input
                        type="checkbox"
                        id="dislexia"
                        value="Dislexia"
                        v-model="deficiency"
                      />
                      <label for="mike">Dislexia</label>
                      <br />
                      <!-- <span>Nomes assinalados: {{ my_file }}</span> -->
                    </div>
                  </div>
                </div>
                <br />
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <label
                      >Documento de identificação*
                      <input
                        type="file"
                        id="file"
                        ref="file"
                        v-on:change="handleFileUpload()"
                      />
                    </label>
                    <br />
                    <br />
                    <label
                      >Foto de perfil (3x4)*
                      <input
                        type="file"
                        id="file"
                        ref="file"
                        v-on:change="handleFileUpload()"
                      />
                    </label>
                    <br />
                    <br />
                    <label
                      >Atestado de matrícula*
                      <input type="file" name="my_file">
                    </label>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <!-- <md-input type="submit" value="enviar"></md-input> -->
                    <md-button class="md-success" type="submit" v-on:click="submit" value="Send"
                      >Enviar cadastro</md-button
                    >
                  </div>
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
import emailjs from 'emailjs-com';

export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data() {
    return {
      errors: [],
      user_name: '',
      socialName:'',
      address: '',
      user_email: '',
      contact: null,
      CPF: null,
      date: null,
      nationality: null,
      doc: null,
      sex: '',
      deficiency: [],
      my_file:''
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    checkForm: function(e) {
      if (this.user_name && this.address && this.date && this.CPF && this.nationality && this.contact && this.user_email && this.doc && this.sex) {
        return true;
      }

      this.errors = [];

      if (!this.user_name) {
        this.errors.push("O nome é obrigatório.");

      }
      // if (!this.email) {
      //   this.errors.push("Seu email é obrigatório.");
      // }
      // if (!this.address) {
      //   this.errors.push("Seu endereço é obrigatório.");
      // }
      // if (!this.contact) {
      //   this.errors.push("Seu contato é obrigatório.");
      // }
      // if (!this.date) {
      //   this.errors.push("A data de nascimento é obrigatória.");
      // }
      // if (!this.CPF) {
      //   this.errors.push("CPF é obrigatório.");
      // }
      // if (!this.nationality) {
      //   this.errors.push("Sua nacionalidade é obrigatória.");
      // }
      // if (!this.doc) {
      //   this.errors.push("Seu documento de identificação é obrigatório.");
      // }
      // if (!this.sex) {
      //   this.errors.push("Informe o seu sexo");
      // }
      
      
      
      

      e.preventDefault();
    },
    submit: function (event) {
      if (!this.user_name ){
        alert('Por favor, preencha todos os dados obrigatórios')
      }
      // if (!this.date){
      //   alert('Por favor, digite a data de seu nascimento')
      // }
      // if (!this.email){
      //   alert('Por favor, digite seu email')
      // }
      // alert('Olá ' + this.name + '!')
      // // `event` é o evento DOM nativo
      // if (event) {
      //   alert(event.target.tagName)
      // }
    },
    sendEmail: (e) => {
      emailjs.sendForm('service_3wgqo1u', 'template_qbu2dki', e.target, 'user_uI2VrpmyHFQH8YA5BPEko')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }

  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
