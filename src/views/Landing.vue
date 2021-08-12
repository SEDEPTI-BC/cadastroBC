<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title"></h1>
            <h4>
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

              <form class="contact-form" @submit="checkForm" enctype="multipart/form-data" onsubmit="setTimeout(function(){window.location.reload();},10);">
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
                      <label>Seu nome </label>
                      <md-input
                        style="text-transform: capitalize;"
                        class="name"
                        v-model="user_name"
                        id="name"
                        required=""
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
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <label>Seu email</label>
                      <md-input v-model="user_email" required="" name="user_email" type="email"></md-input>
                    </md-field>
                  </div>
                   <div class="md-layout-item md-size-50">
                    <md-field>
                      <label >Informe seu sexo</label>
                      <md-input v-model="sex" required="" name="sex" type="text"></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Endereço completo </label>
                      <md-input v-model="address" name="address" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <label>Número para contato (DDD + número)</label>
                      <md-input
                        v-model="contact"
                        name="contact"
                        type="text"
                        v-mask="'(##)#####-####'"
                      ></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Data de nascimento </label>
                      <md-input
                        v-model="date"
                        name="date"
                        type="text"
                        v-mask="'##/##/####'"
                      ></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <label>CPF  </label>
                      <md-input
                        v-model="CPF"
                        name="CPF"
                        type="text"
                        v-mask="'###.###.###-##'"
                      ></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Nacionalidade </label>
                      <md-input v-model="nationality" name="nationality" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <label>Documentação de identificação com foto  </label>
                      <md-select v-model="doc" name="doc" type="text">
                        <md-option value="Carteira de identidade">Carteira de identidade</md-option>
                        <md-option value="CNH">Carteira Nacional de Habilitação</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
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
                        name="deficiency"
                      />
                      <label for="jack">Deficiência mental</label>
                      <br />
                      <input
                        type="checkbox"
                        id="auditiva"
                        value="Deficiência auditiva"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label for="john">Deficiência auditiva</label>
                      <br />
                      <input
                        type="checkbox"
                        id="fisica"
                        value="Deficiência física"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label for="mike">Deficiência física</label>
                      <br />
                      <input
                        type="checkbox"
                        id="visual"
                        value="Deficiência visual"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label for="mike">Deficiência visual</label>
                      <br />
                      <input
                        type="checkbox"
                        id="multipla"
                        value="Deficiência multipla"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label for="mike">Deficiência múltipla</label>
                      <br />
                      <input
                        type="checkbox"
                        id="dislexia"
                        value="Dislexia"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label for="mike">Dislexia</label>
                      <br />
                      <!-- <span>Nomes assinalados: {{ deficiency }}</span> -->
                    </div>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <br>
                    <label style="
                      width: 130px;
                      margin-top: 100px;
                      text-align: center;
                      box-sizing: border-box;
                      border: 2px solid #ccc;
                      border-radius: 4px;
                      font-size: 13px;
                      background-color: white;
                      background-position: 10px 10px; 
                      background-repeat: no-repeat;
                      padding: 12px 20px 12px 20px;
                      transition: width 0.4s ease-in-out;
                      cursor: pointer;"
                      
                      >Documento de identificação
                      <input
                        style="display: none "
                        required=""
                        type="file"
                        ref="fileID"
                        v-on:change="handleFileUpload('fileID')"
                      />
                    </label>
                      <!-- <p>
                        <i>{{ submitted.user_name }}</i>
                        <b>{{ submitted.user_email }}</b>
                      </p> -->
                    <br />
                    <br />
                    <label style="padding: 10px 20px;
                      width: 300px;
                      background-color:#3CB371;
                      color:#fff;
                      
                      text-align: center;
                      display: inline-block;
                      margin-top: 0px;
                      cursor: pointer;
                      border-radius: 10px;"
                      >Foto de perfil (3x4)
                      <input
                      style="display: ;"
                        type="file"
                        required=""
                        ref="fileProfile"
                        v-on:change="handleFileUpload('fileProfile')"
                      />
                    </label>
                    <br />
                    <br />
                    <label style="padding: 10px 20px;
                      width: 300px;
                      background-color: #3CB371;
                      color: #FFF;
                      text-align: center;
                      display: inline-block;
                      margin-top: 0px;
                      cursor: pointer;
                      border-radius: 10px;"
                      >Atestado de matrícula
                      <input
                        style="display: none;"
                        type="file"
                        required=""
                        ref="fileMat"
                        v-on:change="handleFileUpload('fileMat')"
                      />
                    </label>
                  </div>
                  
                </div>
               
                <br />
                
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <!-- <md-input type="submit" value="enviar"></md-input> -->
                    <md-button class="md-success" @click="sendForm"  value="Send" 
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

const axios = require('axios');
import _ from 'lodash';

export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/cabecalho.png")
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
      enviar:'',
      user_name: '',
      socialName:'',
      address: '',
      user_email: '',
      contact: '',
      CPF: '',
      date: '',
      nationality: '',
      doc: '',
      sex: '',
      deficiency: [],
      files: [],
      uploadFiles: [],
      my_file: [],
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
      if (!this.user_email) {
        this.errors.push("Seu email é obrigatório.");
      }
      e.preventDefault();
    },
    submit: function (event) {
    // @click.prevent="submit" no button
      if (!this.user_name ){
        alert('Por favor, preencha todos os dados obrigatórios')
      }
      const name = this.user_name.split(' ').length >= 2 
      if (!name) {
        alert ('Digite seu nome completo')
      }
      if (form.checkValidity()) {
        alert("Adding Succesful!");
      }
     },
    handleFileUpload(elementRef) {    
      // if elementRef === 'fileID' => fileID_name = this.$refs[elementRef].files.name

      const file = this.$refs[elementRef].files

      this.uploadFiles = [...this.uploadFiles, ...file]

      this.files = [
        ...this.files,
        ..._.map(file, file => ({
          name: file.name,
          size: file.size,
          type: file.type,
          invalidMessage: this.validate(file) //TODO: usar isso pra mostrar msg de erro no form
        }))
      ]
      // console.log(this.files)
      
    },

    validate(file) {
      const MAX_SIZE = 200000;
      const allowedTypes = ["image/png", "image/jpeg", "application/pdf"]

      if (file.size > MAX_SIZE) {
        return `Max size: ${MAX_SIZE/1000}Kb`
      }

      if (!allowedTypes.includes(file.type)) {
        return "File type not allowed"
      }

      return ""
    },
    async sendForm() {
      const formData = new FormData()
      if (form.checkValidity()){
        _.forEach(this.uploadFiles, file => {
          if (this.validate(file) === "") {
          formData.append('files', file) 
          }
        })


      _.forEach(this.uploadFiles, file => {
        if (this.validate(file) === "") {
          console.log(file)
          formData.append('files', file) 
        }
      })
      

      try {
        //TODO: Verificar se o form é valido antes do resto do codigo.
        formData.append("user_name", this.user_name)
        formData.append("socialName", this.socialName)
        formData.append("address", this.address)
        formData.append("user_email", this.user_email)
        formData.append("contact", this.contact)
        formData.append("CPF", this.CPF)
        formData.append("date", this.date)
        formData.append("nationality", this.nationality)
        formData.append("doc", this.doc)
        formData.append("sex", this.sex)
        formData.append("deficiency", this.deficiency)

        console.log(formData);
        await axios.post('http://localhost:3000/upload', formData)
        .then(function (response) {

          // handle success
          console.log('req sent.')
          this.files = [];
          this.uploadFiles = [];
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
      } catch (error) {
        console.log(error)
      }
    }

    // formSubmit: function(event) {
      // @submit.prevent="formSubmit" no form
    //   this.submitted.user_name = this.user_name;
    //   this.submitted.user_email = this.user_email;
      
    //   this.user_name = this.user_email = '';
      
    //   event.target.reset();
    // }
  }}}
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
