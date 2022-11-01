import { writable } from "svelte/store";

export let tokenStore = writable(localStorage.getItem("token"));
tokenStore.subscribe((value) => localStorage.setItem("token", value));

export let userStore = writable(JSON.parse(localStorage.getItem("user")));
userStore.subscribe((value) =>
  localStorage.setItem("user", JSON.stringify(value))
);
