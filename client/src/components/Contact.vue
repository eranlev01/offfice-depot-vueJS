<template>
  <div class="contact-component">
    <h1>צור קשר</h1>
    <form
      class="form"
      @submit="submit"
    >
      <b-form-group
        id="input-group-1"
        label="שם מלא:"
        label-for="input-1"
        description="לעולם לא נחשוף את השם שלך"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="הכנס שם מלא"
          name="name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="כתובת מייל:"
        label-for="input-1"
        description="לעולם לא נחשוף את כתובת המייל שלך."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          required
          name="email"
          placeholder="הכנס את כתובת המייל"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="טלפון:"
        label-for="input-1"
        description="לעולם לא נחשוף את מספר הטלפון שלך."
      >
        <b-form-input
          id="input-1"
          v-model="form.phone"
          required
          name="phone number"
          placeholder="הכנס את מספר הטלפון"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">שלח</b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        email: "",
        name: "",
        phone: null
      }
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("phone number", this.form.phone);

      fetch("https://webhook.site/5080a16d-b8c3-4b43-ba4e-e7aff5fe220a", {
        body: formData,
        method: "post"
      }).catch(() => {});
    }
  }
};
</script>

<style scoped>
.contact-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
}

h1 {
  margin-bottom: 30px;
}

.form {
  border: 1px solid rgb(228, 225, 225);
  width: 30%;
  height: 70%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  width: 100px;
}

@media screen and (max-width: 1000px) {
  .form {
    border: 1px solid rgb(211, 209, 209);
    width: 70%;
    height: 70%;
  }
}
</style>