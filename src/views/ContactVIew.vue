<script setup>
  import { ref } from 'vue'
  import emailjs from 'emailjs-com'

  import TextArea from '../components/TextArea.vue'
  import Toaster from "../components/ToastComponent.vue";
  import useToasterStore from "../store/useToasterStore";

  const name = ref('')
  const email = ref('')
  const message = ref('')

  const infos = [
    {
      title: 'Email',
      text: 'ferrier.sammy@gmail.com',
    },
    {
      title: 'Phone',
      text: '+33 6 95 52 35 84',
    },
    {
      title: 'Address',
      text: 'Paris, France',
    },
  ]

  const toasterStore = useToasterStore();

  const sendToast = (message) => toasterStore.addToast({ message: message });

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name.value || !email.value || !message.value) {
      sendToast('Please fill all fields')
      return
    }
    try {
      emailjs.sendForm('vue_portfolio', 'default_template', e.target, 'nn440ZpSh-kfgyIX6', {
        name: name,
        email: email,
        message: message,
      })
    } catch (error) {
      sendToast('Error sending email')
    }
    sendToast('Email sent')
    name.value = ''
    email.value = ''
    message.value = ''
  }
</script>

<template>
  <Toaster />
  <div class="contact-wrapper">
    <div class="title">
      <h1>Contact</h1>
    </div>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2208.106821192802!2d2.4217424820284204!3d48.84111587381549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673bcde27dc83%3A0x6f45cb47abc9667d!2sLac%20de%20Saint-Mand%C3%A9!5e0!3m2!1sfr!2sfr!4v1700929792521!5m2!1sfr!2sfr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="content-wrapper">
      <div class="text-wrapper">
        <TextArea v-for="info in infos" :key="info.title" :title="info.title" :text="info.text" />
      </div>
      <div class="contact-field-wrapper">
        <form class="contact-form" @submit="e => sendEmail(e)">
          <div class="contact-field">
            <input type="text" v-model="name" id="name" name="name" class="input" placeholder="Name"/>
          </div>
          <div class="contact-field">
            <input type="email" v-model="email" id="email" name="email" class="input" placeholder="Email"/>
          </div>
          <div class="contact-field">
            <textarea id="message" v-model="message" name="message" class="input" placeholder="Message"></textarea>
          </div>
          <div class="contact-field">
            <input type="submit" class="contact-field-submit" value="Send"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contact-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-wrapper h1 {
    color: var(--color-text-white);
  }

  .title {
    padding: 1rem;
    height: 200px;
    max-height: 20vh;
    width: 100%;
    background-color: #252525;
    border-bottom: 1px solid var(--color-text);
    border-top: 1px solid var(--color-text);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map {
    margin-top: 1rem;
    width: 80%;
  }

  .content-wrapper {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  } 

  .contact-field-wrapper {
    width: 100%;
    height: 100%;
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .contact-field {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
  }

  .contact-form {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .input{
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    background-color: transparent;
    color: var(--color-text-white);
    border: 1px solid var(--color-text);
    padding: 0.5rem;
  }

  .contact-field textarea {
    height: 10vh;
    max-height: 10rem;
  }

  .contact-field-submit {
    background-color: var(--color-background-mute);
    color: var(--color-text);
    border: 2px solid var(--color-primary);
    border-radius: 30px;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
    width: 150px;
  }
</style>
