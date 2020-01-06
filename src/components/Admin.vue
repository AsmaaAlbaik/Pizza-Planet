<template>
<div>
  <hidden-admin  v-if="currentUser"></hidden-admin>
  <div class="row">
    <div class="col-sm-12 col-lg-6">
      <app-login></app-login>
    </div>
  </div>
</div>

</template>
<script>
import AppLogin from './login';
import { mapGetters } from 'vuex';

const HiddenAdmin = () => import('./AdminHidden.vue')

export default {
  components: {
    AppLogin,
    HiddenAdmin
  },
  computed: {
    ...mapGetters ([
      'currentUser'
    ])
  },
}
</script>

