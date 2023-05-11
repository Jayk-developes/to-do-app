<template>
  <ul class="navbar-outside">
    <li>
      <router-link :to="{name: 'homepage'}">
        comNET {}
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'settings'}">
        Einstellungen
      </router-link>
    </li>
    <li style="margin-left: auto">
      <router-link :to="{name: 'all_tasks'}">
        Alle Aufgaben
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'my_tasks'}">
        Meine Aufgaben
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'past_tasks'}">
        Vergangene Aufgaben
      </router-link>
    </li>
    <li style="margin-left: auto">
      <router-link :to="{name: 'add_task', params: {id: 0, edit: 'create'}}">
        Aufgabe Hinzufügen
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'login'}">
        Login
      </router-link>
    </li>
  </ul>

</template>

<script setup lang="ts">
</script>

<style scoped>
.navbar-outside {
  display: flex;
  position: fixed;
  flex-flow: row;
  top: 0;
  left: 0;
  right: 0;
  background-color: #404046;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 0;
  margin: 0;
  overflow: hidden;
  list-style-type: none;
}

li a, li div, li router-link {
  display: block;
  color: white;
  text-align: center;
  padding: 20px;
  text-decoration: none;

}

li a:hover, li div:hover, li router-link:hover {
  background-color: #505056;
  color: #ffffff;
}

li a:active, li div:active, li router-link:active {
  background-color: #505056;
  color: #ffffff;
}

.list-item {
  height: 2rem;
}

a.router-link-active {
  background-color: #303035
}
</style>
