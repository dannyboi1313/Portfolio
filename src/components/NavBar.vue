<template>
    <div>
      <header class="py-6">
        <div  class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div class="text-lg font-bold">Daniel.Blanchard</div>
            <div id="navBar" class="md:flex space-x-12 items-center">
                <a class="text-selected-text"><router-link to="/">Home</router-link></a>
                <a href="#work">Projects</a>
                <a href="Daniel Blanchard Resume 08-24-22.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                <a href="#hire"><button class="px-6 py-2 bg-theme text-white font-bold">Hire me</button></a>
            </div>
            <div class="md:hidden">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="Black"/></svg>
            </div>
        </div>
      </header>
    </div>
    
</template>

<style scoped>
     /* Mobile Styles */
  @media only screen and (max-width: 768px){
   #navBar{
     visibility: hidden;
   }
  }
</style>

<script>
export default {
  name: "NavBar",
};
</script>