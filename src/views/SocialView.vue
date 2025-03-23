<template>
  <MainLayout>
    <template v-slot:section>
      <article class="max-w-xl mx-auto py-12 px-4">
        <h1
          class="text-center text-4xl font-extrabold text-gray-600 tracking-tight sm:text-5xl"
        >
          SOCIAL AUTH VIEW
        </h1>
        <div className="flex flex-col gap-4 p-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            @click="loginGoogle"
          >
            Login with Google
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            @click="loginFacebook"
          >
            Login with Facebook
          </button>

          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            @click="loginGithub"
          >
            Login with Github
          </button>
        </div>
      </article>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from "@/layouts/MainLayout.vue";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const loginGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then(() => {
      alert("Login exitoso con Google");
    })
    .catch(() => {
      alert("No se ha podido hacer el login con Google");
    });
};
const loginFacebook = () => {
  signInWithPopup(auth, facebookAuthProvider)
    .then(() => {
      alert("Login exitoso con Facebook");
    })
    .catch(() => {
      alert("No se ha podido hacer el login con Facebook");
    });
};

const loginGithub = () => {
  signInWithPopup(auth, githubAuthProvider)
    .then(() => {
      alert("Login exitoso con Github");
    })
    .catch(() => {
      alert("No se ha podido hacer el login con Github");
    });
};
</script>

<style scoped></style>
