<template>
  <h2>menu</h2>
</template>

<script>
import ProductoService from '@/servicios/ProductoService.js'

export default {
name: 'menu',
created: async function () {
    console.log('texto')
    try {
      const rta = await ProductoService.getProductos()
      console.log(rta.data)
    } catch (error) {
      alert("Se produjo un error");
    }
},


}
</script>

<style>

</style>