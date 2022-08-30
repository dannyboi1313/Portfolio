<template>
<div class="wrapper">
      <div class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div class="flex flex-wrap md:flex-nowrap">

            <nav class="inline-block lg:mr-24 lg:w-4 fixed left-percentage xl:block">
                <div class="absolute right-0 transform -translate-x-1/2 space-y-6 my-10">
                    <a href="#" class="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-body px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                    </a>
                    <a href="#work" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-body px-2 py-1 rounded-md ml-10 opacity-0">Projects</span>
                    </a>
                    <a href="#clients" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-body px-2 py-1 rounded-md ml-10 opacity-0">About</span>
                    </a>
                    <a href="#hire" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                        <span class="bg-body px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                    </a>
                </div>
            </nav>

            <div class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-30">
                <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">Solving problems<br>with beautiful code.</h1>
                <div class="w-full flex justify-center md:justify-start">
                    <a href="#work" id="view-button" class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                        <div>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                            </svg>								
                        </div>
                        <span>View my work.</span>
                    </a>
                </div>
            </div>
            <img src="../../public/Images/computer.png" alt="Computer" class="w-1/3 mt-150 md:absolute md:mt-50 right-10 -z-1">
        </div>
        
    </div>
    <div class="container mt-64 flex-col justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full w-full">
			<h2 id="work" class="secondary-title">Projects</h2>
      <p class="section-paragraph">Click on each project to see more pictures and learn more about my experience with each one.</p>
      <ProjectsView/>
    </div>
		
    
    <!-- Clients -->
		<div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section class="w-full">
				<h2 id="clients" class="secondary-title">About</h2>
				<!-- Clients -->
				<div class="my-16">
					<div class="w-full border border-nav p-16 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
						
						<!-- Client logo -->
						<div class="portrait-container lg:w-600">
							
						</div>

						<!-- Client info -->
						<div class="flex flex-wrap justify-center text-center lg:text-left lg:block">
							<h3 class="text-3xl font-semibold">Daniel Blanchard</h3>

							<div class="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
								<div class="badge text-white">Aspiring Software Engineer</div>
								
							</div>

							<p class="text-secondary">I am currently a junior at Brigham Young University in Provo, Utah, studying computer science with a minor in manufacturing engineering. I have completed 3 internships and am currently seeking a fourth. My interests lie in fullstack development, deep learning, and mixed reality in manufacturing systems. </p>
						</div>

					</div>
				</div>

			</section>
		</div>


		<!-- Hire me -->
		<div class="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
			<section class="w-full">
				<h2 id="hire" class="secondary-title">Hire me</h2>
				<p class="section-paragraph">Feel free to to contact me any time, through any method below.</p>

				<div class="w-full grid lg:grid-cols-2 gap-6 lg:gap-24 mt-12">
					<form id="form" ref="form" class="space-y-4" @submit.prevent="sendEmail">
						<div>
							<label class=" block mb-6 text-xl font-bold">Name</label>
							<input class="w-full border border-input-border px-4 py-4" name="user_name">
						</div>
						<div>
							<label class="block mb-6 text-xl font-bold">Email</label>
							<input type="email" class="w-full border border-input-border px-4 py-4" name="user_email">
						</div>
						<div>
							<label class="block mb-6 text-xl font-bold">Message</label>
							<textarea class="w-full border border-input-border px-4 py-4 h-56 resize-none" name="message"></textarea>
						</div>
						<input type="submit" value="Send it!" class="px-6 py-2 bg-theme text-white font-bold">
					</form>

					<div class="mt-12">
						<!-- Contact info -->
						<p class="text-secondary">801-232-3445</p>
						<a href="mailto:daniel.s.blanchard97@gmail.com" class="text-secondary underline mt-3 block">daniel.s.blanchard97@gmail.com</a>

						<!-- Socials -->
						<div class="flex mt-20 space-x-6" >
							<!-- LinkdIn -->
							<a href="https://www.linkedin.com/in/danielblanchard97/">
								<font-awesome-icon icon="fa-brands fa-linkedin" size="5x"/>
							</a>
							<!-- Git -->
							<a href="https://github.com/dannyboi1313">
								<font-awesome-icon icon="fa-brands fa-github" size="5x" />
              </a>
						</div>
					</div>
					
				</div>

			</section>
		</div>
    </div>
</template>

<style scoped>
.portrait-container{
   width: 150px;
   height: 150px;
   min-width: 150px;
   margin-right: 50px;
   border-radius: 50%;
  border-color: gray;
  border-width: 1px;
  background-image: url(../../public/Images/Portrait.JPG);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#view-button:hover{
  box-shadow: 2px 2px 1px #7e7d7d;
  transform: scale(1.01); 
  background-color: salmon;
}
     /* Mobile Styles */
  @media only screen and (max-width: 768px){
   nav{
     visibility: hidden;
    
   }
  }
</style>

<script>
// @ is an alias to /src
import ProjectsView from "@/components/ProjectsView.vue";
import emailjs from '@emailjs/browser';
export default {
  name: 'HomeView',
  created() {
    window.addEventListener("scroll", this.updateList);
  },
  destroyed() {
    window.removeEventListener("scroll", this.updateList);
  },
  methods: {
    updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
},
    sendEmail() {
      emailjs.sendForm('service_uxgt6rc', 'template_oce65hl', this.$refs.form, 'KmBW9hQ4n9G2KK9js')
        .then((result) => {
            alert("Email Sent.");
            document.getElementById("form").reset();
            console.log('SUCCESS!', result.text);
        }, (error) => {
          alert("Oops.. Something went wrong on our end. Try manually sending an email.");
            console.log('FAILED...', error.text);
        });
    }
  },
  components: {
    ProjectsView,
  },
  
}

</script>
