<template>
  <div class="wrapper  ">
    <br><br><br><br><br><br><br><br>
    <div class="main main-raised" >
      <div class="section section-contacts"  >
        <!-- <img src="../assets/img/cabecalhoFINAL2.png"> -->
        <!-- <div class="container">
          <div class="md-layout"> -->
            <div class="md-layout-item md-size-100 md-xsmall-size-100 mx-auto" >
              <h2 class="text-center title"><strong>PRÉ-CADASTRO/RECADASTRO</strong></h2>
              <h4 class="text-center description" style="font-size: 19px"> <!-- fonte é de 18 e mudei para 19 -->
                <strong>
                Formulário de solicitação para pré-cadastro/recadastro online.
                Preencher ou marcar principalmente todos os itens obrigatórios.
                <br />
                A efetivação do pré-cadastro/recadastro estará finalizada em até
                24 horas a contar da data de solicitação.
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
                <p class="vermelho">O tamanho dos arquivos não deve ultrapassar 200Kb. São aceitos como arquivos PDF , PNG e JPEG.</p>
              </h4>
              <!-- inicio do formulário -->

              <form class="contact-form"  enctype="multipart/form-data" onsubmit="setTimeout(function(){window.location.reload();},10);" name="formulario">

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

                      <label class="label">Seu nome completo</label>

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
                      <md-input style="text-transform: capitalize;" v-model="socialName" name="socialName" type="text"></md-input>

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
                  
                  <div class="md-layout-item md-size-100 mx-auto mobile">
                    <span class="inputButton label" style="margin-top:10px">Documentos de Identificação necessários.</span>
                    <!-- <md-field maxlength="5">
                      <label class="label">Documentação de identificação com foto  </label>
                      <md-select class="label" v-model="doc" required="" name="doc" type="text">
                        <md-option  value="Carteira de identidade">Carteira de identidade</md-option>
                        <md-option value="CNH">Carteira Nacional de Habilitação</md-option>
                      </md-select>
                    </md-field> -->
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
                  
                  <!-- input files desktop -->
                  <div class="md-layout">
                  <div class="md-layout-item md-size-33">
                    <md-button
                      class="md-primary md-round md-block "
                      @click="classicModal = true"
                      ><md-icon>library_books</md-icon> Envie seus documentos</md-button
                    >
                    <modal v-if="classicModal" @close="classicModalHide">
                      <template slot="header">
                        <h4 class="modal-title"></h4>
                        <md-button
                          class="md-simple md-just-icon md-round modal-default-button"
                          @click="classicModalHide"
                        >
                          <md-icon>clear</md-icon>
                        </md-button>
                      </template>

                    <template slot="body">
                      <label class="label">Documentos de Identificação necessários. </label>
                      <p>
                        <strong>1.</strong> Identidade ou CNH <strong>2.</strong> Comprovante de Matricula<br>
                        <strong>3.</strong> Foto de perfil (3x4) <strong>4.</strong> Comprovante de residência
                      </p>
                        <div class="md-layout-item md-size-100" >
                          <b-field class="campo">
                            <b-upload v-model="dropFiles"
                                multiple
                                expanded
                                drag-drop
                                rounded
                              >
                              <section class="section" style="padding: 30px 50px">
                                <div class="content has-text-centered">
                                  <p><b-icon icon="upload" type="is-primary"></b-icon> </p>
                                  <p>Deixe aqui seus documentos </p>
                                  <p class="vermelho" style="margin-top: -20px">PDF, PNG ou JPEG</p>
                                </div>
                              </section>
                            </b-upload>
                              </b-field>
                              <div class="tags">
                                  <span v-for="(file, index) in dropFiles"
                                      :key="index"
                                      class="tag is-primary" >
                                      {{file.name}}
                                      <button class="delete is-small"
                                          type="button"
                                          @click="deleteDropFile(index)">
                                      </button>
                                  </span>
                              </div> 
                            </div>
                    </template>

                    <template slot="footer">
                      <md-button
                        class="md-danger md-simple"
                        @click="classicModalHide"
                        >Fechar</md-button
                      >
                    </template>
                  </modal>
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
                    <vue-recaptcha sitekey="6LdA_pUbAAAAAPPnRdmSLIphFz4hW1UQ16sFaqqm">
                      <md-button class="md-success" type="submit" :disabled='!isComplete' @click.prevent="sendForm"  value="" 
                        >Enviar cadastro</md-button>
                    </vue-recaptcha>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      <!-- </div>
    </div> -->
  </div>
</template>

<script>

const axios = require('axios');
import _ from 'lodash';
import { sendForm } from 'emailjs-com';
import VueRecaptcha from 'vue-recaptcha';
import { Modal } from "@/components";
// import Modal from "./components/JavascriptComponentsSection";
export default {
  bodyClass: "landing-page",
  components: { VueRecaptcha, Modal  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/cabecalhoFINAL2.png")
    },
  },
  data() {
    return {
      classicModal: false,
      isImageModalActive: false,
      isCardModalActive: false,
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
      dropFiles: []
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
    classicModalHide() {
      this.classicModal = false;
    },
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
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
      const name = this.user_name.trim().split(' ').length >= 2 
      if (!name) {
        this.user_name = ""
        // alert ('Digite seu nome completo')
        this.errors = [];
        
        if (!this.user_name) {
        this.errors.push("Digite seu nome completo.");
        }
        if(!this.user_email){
          this.errors.push("Digite seu email completo")
        }
      return sendForm
      }
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
        await axios.post('upload', formData)
        .then(function (response) {

          // handle success
          console.log('req sent.')
          // this.files = [];
          // this.uploadFiles = [];
          console.log(response);
          alert("Seu formulário foi enviado. Sua senha será disponibilizada na primeira vez que fizer um empréstimo. O prazo é de 24 horas para a conclusão do seu pré cadastro.")
          document.Location.reload(true);
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
.ola{
  display: inline;
}
.campo{
  
  text-align: center;
  position: relative;
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
