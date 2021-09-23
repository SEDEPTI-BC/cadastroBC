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
            <div class="md-layout-item md-size-100 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Pré-cadastro/Cadastro</h2>
              <h4 class="text-center description" style="font-size: 19px"> <!-- fonte é de 18 e mudei para 19 -->
                <strong>
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
                <u>Observações sobre os anexos:</u>
                Discentes: Atestado de matrícula atual (SIGAA)<br />
                Servidores: Declaração de vínculo funcional (SAGITTA) ou
                carteira funcional (SIGEPE)<br />
                O nome e a foto associados à sua Conta do Google serão
                registrados quando você fizer upload de arquivos e enviar este
                formulário.
                </strong>
                <p class="vermelho">O tamanho dos arquivos não deve ultrapassar 200Kb.</p>
              </h4>
              <!-- inicio do formulário -->
              <form class="contact-form" @submit="checkForm"  enctype="multipart/form-data" onsubmit="setTimeout(function(){window.location.reload();},10);" name="formulario">
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
                      <label class="label">Seu nome</label>
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
                      <label class="label" >Seu nome social</label>
                      <md-input v-model="socialName" name="socialName" type="text"></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <label class="label">Seu email</label>
                      <md-input v-model="user_email" required="" name="user_email" type="email"></md-input>
                    </md-field>
                  </div>
                   <div class="md-layout-item md-size-50">
                    <md-field>
                      <label class="label">Informe seu sexo</label>
                      <md-input v-model="sex" required="" name="sex" type="text"></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label class="label">Endereço completo </label>
                      <md-input v-model="address" required="" name="address" type="text"></md-input>
                    </md-field>
                  </div>
                  <!-- campo numero de contato mobile e desktop -->
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <p><label class="desktop label">Número para contato(DDD + número)</label>
                      <label class="mobile label">Número para contato</label></p>
                      <md-input
                        v-model="contact"
                        name="contact"
                        required=""
                        type="text"
                      
                        v-mask="'(##)#####-####'"
                      ></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label class="label">Data de nascimento </label>
                      <md-input
                        v-model="date"
                        name="date"
                        required=""
                        type="text"
                        v-mask="'##/##/####'"
                      ></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field maxlength="5">
                      <label class="label">CPF  </label>
                      <md-input
                        v-model="CPF"
                        name="CPF"
                        required=""
                        type="text"
                        
                        v-mask="'###.###.###-##'"
                      ></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label class="label">Nacionalidade </label>
                      <md-input v-model="nationality" required="" name="nationality" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50 mx-auto desktop">
                    <md-field maxlength="5">
                      <label class="label">Documentação de identificação com foto  </label>
                      <md-select class="label" v-model="doc" required="" name="doc" type="text">
                        <md-option  value="Carteira de identidade">Carteira de identidade</md-option>
                        <md-option value="CNH">Carteira Nacional de Habilitação</md-option>
                      </md-select>
                    </md-field>
                  </div>
                </div>
                <br>
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 md-small-size-100 desktop">
                    
                    <label class="desktop roxo label">Deficiência</label>
                    <br />
                    <div id="example-3">
                      <input
                        type="checkbox"
                        id="mental"
                        value="Deficiência mental"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="color: #000; font-weight: bold; margin-left: 4px" for="jack">Deficiência mental</label>
                      <br />
                      <input
                        type="checkbox"
                        id="auditiva"
                        value="Deficiência auditiva"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="color: #000; font-weight: bold; margin-left: 4px" for="john">Deficiência auditiva</label>
                      <br />
                      <input
                        type="checkbox"
                        id="fisica"
                        value="Deficiência física"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="color: #000; font-weight: bold; margin-left: 4px" for="mike">Deficiência física</label>
                      <br />
                      <input
                        type="checkbox"
                        id="visual"
                        value="Deficiência visual"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="color: #000; font-weight: bold; margin-left: 4px" for="mike">Deficiência visual</label>
                      <br />
                      <input
                        type="checkbox"
                        id="multipla"
                        value="Deficiência multipla"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="color: #000; font-weight: bold; margin-left: 4px" for="mike">Deficiência múltipla</label>
                      <br />
                      <input
                        type="checkbox"
                        id="dislexia"
                        value="Dislexia"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="color: #000; font-weight: bold; margin-left: 4px" for="mike">Dislexia</label>
                      <br />
                      
                    </div>
                  </div>
                  
                  <!-- Doumento mobile -->
                  <div class="md-layout-item mobile" >
                    <md-field maxlength="5">
                      <label class="label">Documentação de identificação com foto</label>
                      <md-select v-model="doc" required="" name="doc" type="text">
                        <md-option value="Carteira de identidade">Carteira de identidade</md-option>
                        <md-option value="CNH">Carteira Nacional de Habilitação</md-option>
                      </md-select>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50 md-small-size-100">
                    <span class="inputButton label">Documentos de identificação</span>
                    <div class="md-layout-item md-size-100">
                      
                      <br>
                      <label class="label-file" 
                        >{{doc}} <span :class="vazio ? 'verde' : 'vermelho'">{{fileName}}</span>
                        <input
                          style="display: none "
                          required=""
                          @change="onFileChange"
                          type="file"
                          ref="fileID"
                          v-on:change="handleFileUpload('fileID')"
                        />
                      </label>
                      <!-- <span>{{fileName}}</span> -->
                    </div>
                    <br>
                    <div class="md-layout-item md-size-100">
                      <label class="label-file"
                        >Foto de perfil(3x4) <span :class="vazio1 ? 'verde' : 'vermelho'">{{fileName1}}</span> 
                        <input
                        style="display: none"
                          type="file"
                          @change="onFileChange1"
                          required=""
                          ref="fileProfile"
                          v-on:change="handleFileUpload('fileProfile')"
                        />
                      </label>
                    </div>
                    <br>
                    <div class="md-layout-item md-size-100">
                      <label class="label-file md-size-200"
                        >Atestado de matrícula <span :class="vazio2 ? 'verde' : 'vermelho'">{{fileName2}}</span>
                        <input
                          style="display: none;"
                          type="file"
                          @change="onFileChange2" 
                          required=""
                          ref="fileMat"
                          v-on:change="handleFileUpload('fileMat')"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <br>

                <!-- Checkbox mobile -->

                <h4 class="mobile label">Deficiência</h4>
                <div class="md-layout-item md-size-100 mobile">
                    <br>
                    <li id="example-3" style="list-style: none">
                      <input
                        type="checkbox"
                        id="mental"
                        value="Deficiência mental"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="font-weight: bold; color: #000 !important;" for="mental">Mental</label>
                    </li>
                    <li class="li-defi">
                      <input
                        type="checkbox"
                        id="auditiva"
                        value="Deficiência auditiva"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="font-weight: bold; color: #000 !important;" for="auditiva">Auditiva</label>
                    </li>
                    <li class="li-defi">
                      <input
                        type="checkbox"
                        id="fisica"
                        value="Deficiência física"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="font-weight: bold; color: #000 !important;" for="fisica">Física</label>
                    </li>
                </div>
                <div class="md-layout-item md-size-100 mobile">
                  <li style="list-style:none">
                    <input
                        type="checkbox"
                        id="visual"
                        value="Deficiência visual"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="font-weight: bold; color: #000 !important;" for="visual">Visual</label>
                  </li> 
                  <li class="li-defi">
                    <input
                        type="checkbox"
                        id="multipla"
                        value="Deficiência multipla"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="font-weight: bold; color: #000 !important;" for="multipla">Múltipla</label>
                  </li>
                  <li class="li-defi">
                    <input
                        type="checkbox"
                        id="dislexia"
                        value="Dislexia"
                        v-model="deficiency"
                        name="deficiency"
                      />
                      <label style="font-weight: bold; color: #000 !important;" for="dislexia">Dislexia</label>
                  </li>
                </div>    
                
                
               
                <br />
                <!-- botão de enviar -->
                <div class="md-layout">
                  <div class="md-layout-item md-size-50 mx-auto text-center">
                    <!-- <md-input type="submit" value="enviar"></md-input> -->
                    <md-button class="md-success" type="submit" :disabled='!isComplete' @click.prevent="sendForm"  value="" 
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
      default: require("@/assets/img/cabeccalho.png")
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
      doc: 'Identificação',
      sex: '',
      okay:'',
      deficiency: [],
      fileName:'',
      fileName1:'',
      fileName2:'',
      files: [],
      uploadFiles: [],
      my_file: [],
      fileLetras: '',
      vazio:'',
      vazio1:'',
      vazio2:'',
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    isComplete () {
    return this.user_name && this.user_email && this.address && this.contact && this.CPF && this.date && this.nationality && this.sex && this.doc && this.files && this.fileName && this.uploadFiles && this.my_file && this.vazio && this.vazio1 && this.vazio2;
  }
  },
  methods: {
    checkForm: function(e) {
      
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
      _.forEach(this.uploadFiles, file => {
        if (this.validate(file) === "") {
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
        await axios.post('http://localhost:8080/upload', formData)
        .then(function (response) {

          // handle success
          console.log('req sent.')
          // this.files = [];
          // this.uploadFiles = [];
          console.log(response);
          alert("Seu formulário foi enviado. Sua senha será disponibilizada na primeira vez que fizer um empréstimo. O prazo é de 24 horas para a conclusão do seu pré cadastro.")
          document.location.reload(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
        } catch (error) {
          console.log(error)
        }
      },
      onFileChange(event){
      var vazio1, vazio2 = '';
      var fileData =  event.target.files[0];
      this.fileName=fileData.name;
      this.fileTamanho = fileData.size;
      this.fileLetras = fileData.length;
      if (this.fileTamanho>200000) {
        this.fileName = 'Máximo de 200kb ultrapassado';
        this.vazio = ''
      }else{
        this.vazio = true
        
      }
      if (this.fileLetras>1) {
        this.fileName = 'muitas letras'
      }
      
      },
      
      onFileChange1(event){
      var fileData = event.target.files[0];
      this.fileName1 = fileData.name;
      this.fileTamanho1 = fileData.size;
      if (this.fileTamanho1>=200000) {
        this.fileName1 = 'Máximo de 200kb ultrapassado';
        this.vazio1 = ''
      }else{
        this.vazio1 = true
      }
      },
      onFileChange2(event){
        var fileData = event.target.files[0];
        this.fileName2 = fileData.name;
        this.fileTamanho2 = fileData.size;
      if (this.fileTamanho1>=200000) {
        this.fileName2 = 'Máximo de 200kb ultrapassado';
        this.vazio2 = ''
      }else{
        this.vazio2 = true
      }
      }
    }
  }
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

.label-file{
  width: 100px;
  color: #9c27b0;
  // margin-top: 150px;
  text-align: center;
  // box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 13px;
  background-color: white;
  background-position: 10px 10px; 
  // background-repeat: no-repeat;
  padding: 12px 10px 12px 10px;
  cursor: pointer;
  font-weight: 800;
}
.label{
  font-weight: bold;
  color: #000 !important;
  font-size: 16px;
}
.desktop{
  display: inline-block;
}
.mobile{
  display: none;
}
.li-defi{
  list-style: none; 
  margin-left: 20px;
}
.vermelho{
  color: #ff0000;
  font-weight: 600;
}
.verde{
  color: #008000;
  font-weight: 600;
}


@media screen and (max-width: 500px) {
  .md-layout{
    display: flex;
  }
  .md-size-50{
    width: 100;
  }
  .desktop{
    display: none;
  }
  .mobile{
    display: flex;
    
  }
}



</style>
