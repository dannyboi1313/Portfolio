<template>
		<div id="p-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					
          <div id="project1" class="item container" @click="enlarge1()" >
            <div class="wrapper"></div>
            <div class="overlayTitle"><h3>Recipe Web App (2022)</h3></div>
            <div class="image" id="p1Pic" >
              <div class="photoContainer" >
                    <img class="photo" src="../../public/Images/listly1.png"/>
              </div>
            </div>
          </div>
        
          <div id="project1Enlarged" v-if="project1Enlarged" class="item-big container" >
            <div class="image"  >
                    <div class="overlay"> 
                        <button id="closeButton" @click="normalize1()"><i class="fa fa-window-close" aria-hidden="true"></i></button>
                    </div>
                    <agile ref="carousel1" :options="myOptions">
                      <div class="slide">
                        <div class="photoContainer">
                          <img class="photo" src="../../public/Images/listly1.png"/>
                        </div>
                      </div>
                      
                      <div class="slide">
                          <div class="photoContainer">
                            <img class="photo" src="../../public/Images/listly2.png"/>
                          </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/listly3.png"/>
                        </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                            <img class="photo" src="../../public/Images/listly4.png"/>
                          </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/listly5.png"/>
                        </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/listly6.png"/>
                        </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/listly7.png"/>
                        </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/listly8.png"/>
                        </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/listly9.png"/>
                        </div>
                      </div>

                      <div class="slide">
                        <div class="photoContainer">
                          <img class="photo" src="../../public/Images/listly10.png"/>
                        </div>
                      </div>

            
                    </agile>
            </div>
            <div class="info">
              <h3>Recipe Web App</h3>
              <div class="description">
                <ul class="list-disc marker:text-blue-500">
                    <LI>Web application built in the vue framework that stores a database of recipes and ingredients that allows a user to select recipes and generate a shopping list of the ingredients. (Personal Project)</LI>
                    <LI>Tools Used: Javascript, HTML/Css, Vue, Node.js, MongoDB</LI>
                    <LI>Lessons Learned: 1. Maintaining a database, 2. </LI>   
                </ul>
              </div>
                 <p class="project-link"><a  href="https://listly.do.danielblanchard.click/">Site</a> <a href="https://listly.do.danielblanchard.click/">Repository</a> </p>

            </div>
          </div>

          <div id="project2" class="item container" @click="enlarge2()">
            <div class="wrapper"></div>
            <div class="overlayTitle"><h3>Family History Android App</h3></div>
            <div class="image"  >
                  <div class="photoContainer">
                      <img class="photo" src="../../public/Images/family1.png"/>
                    </div>
            </div>
          </div>

          <div id="project2Enlarged" v-if="project2Enlarged" class="item-big container" >
            <div class="image"  >
                    <div class="overlay"> 
                        <button id="closeButton" @click="normalize2()"><i class="fa fa-window-close" aria-hidden="true"></i></button>
                    </div>
                    <agile ref="carousel1" :options="myOptions">
                      <div class="slide">
                        <div class="photoContainer">
                          <img class="photo" src="../../public/Images/family1.png"/>
                        </div>
                      </div>
                      
                      <div class="slide">
                          <div class="photoContainer">
                            <img class="photo" src="../../public/Images/family2.png"/>
                          </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/family3.png"/>
                        </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                            <img class="photo" src="../../public/Images/family4.png"/>
                          </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/family5.png"/>
                        </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/family6.png"/>
                        </div>
                      </div>        
                    </agile>
            </div>
            <div class="info">
              <h3>Family History Android App (2022)</h3>
              <div class="description">
                <ul class="list-disc marker:text-blue-500">
                    <LI>Android app client and server that registers a user and creates fake family tree data. This data is stored and then mapped on the Google Maps API with connecting lines (Class Project)</LI>
                    <LI>Tools Used: Java, Android, XML, Sqlite,</LI>
                    <LI>Lessons Learned: 1. Proper software design, 2. API design </LI>   
                </ul>
                <a>Repo not available per class policy</a>    
              </div>
            </div>
          </div>

          <div id="project3" class="item container" @click="enlarge3()">
            <div class="wrapper"></div>
            <div class="overlayTitle"><h3>YHack Hackathon</h3></div>
            <div class="image"  >
                <div class="photoContainer">
                  <img class="photo" src="../../public/Images/analogy1.png"/>
                </div>
            </div>
          </div>

          <div id="project3Enlarged" v-if="project3Enlarged" class="item-big container" >
            <div class="image"  >
                    <div class="overlay"> 
                        <button id="closeButton" @click="normalize3()"><i class="fa fa-window-close" aria-hidden="true"></i></button>
                    </div>
                    <agile ref="carousel3Enlarged" :options="myOptions">
                      <div class="slide">
                        <div class="photoContainer">
                          <img class="photo" src="../../public/Images/analogy2.png"/>
                        </div>
                      </div>
                      
                      <div class="slide">
                          <div class="photoContainer">
                            <img class="photo" src="../../public/Images/analogy1.png"/>
                          </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/analogy3.png"/>
                        </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                            <img class="photo" src="../../public/Images/analogy4.png"/>
                          </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/analogy5.png"/>
                        </div>
                      </div>
      
                    </agile>
            </div>
            <div class="info">
              <h3>YHack Hackathon (2022)</h3>
              <div class="description">
                    <ul class="list-disc marker:text-blue-500">
                        <LI>BYU's official hackathon. The prompt was connection, and my team made a game inspired by "Wordle". In the game you have 5 tries to guess the connection between two objects. (Hackathon Team Project)</LI>
                        <LI>Tools Used: Javascript, HTML/Css, Vue, Node.js</LI>
                        <LI>Takeaways: 1. Efficient teamwork underpressure, 2. Delegating work and version control <a href="https://analogy.do.danielblanchard.click/">URL</a> </LI>   
                    </ul>
              </div>
              <p class="project-link"><a  href="https://listly.do.danielblanchard.click/">Site</a> <a href="https://listly.do.danielblanchard.click/">Repository</a> </p>

            </div>
          </div>

          <div id="project4" class="item container" @click="enlarge4()">
            <div class="wrapper"></div>
            <div class="overlayTitle"><h3>Autoclave Simulator (Capstone)</h3></div>
            <div class="image"  >
                <div class="photoContainer">
                  <img class="photo" src="../../public/Images/sim1.png"/>
                </div>
            </div>
          </div>

          <div id="project4Enlarged" v-if="project4Enlarged" class="item-big container" >
            <div class="image"  >
                    <div class="overlay"> 
                        <button id="closeButton" @click="normalize4()"><i class="fa fa-window-close" aria-hidden="true"></i></button>
                    </div>
                    <agile ref="carousel4Enlarged" :options="myOptions">
                      <div class="slide">
                        <div class="photoContainer">
                          <img class="photo" src="../../public/Images/sim1.png"/>
                        </div>
                      </div>      
                    </agile>
            </div>
            <div class="info">
              <h3>Autoclave Simulator (2022)</h3>
              <div class="description">
                <ul class="list-disc marker:text-blue-500">
                    <LI>Desktop app built for a mining company to simulate and visualize chemical/physical reactions in refining process. I was the team lead. (Capstone Project) No repo and limited pictures per sponsor request</LI>
                    <LI>Tools Used: C#, WPF, XAML, Simulink, MATLAB</LI>
                    <LI>Lessons Learned: 1. Working with multiple disciplines, 2. Building software requirements with clients</LI>   
                </ul> 
              </div>
            </div>
          </div>

          <div id="project5" class="item container" @click="enlarge5()">
            <div class="wrapper"></div>
            <div class="overlayTitle"><h3>Area Calculator</h3></div>
            <div class="image"  >
                <div class="photoContainer">
                  <img class="photo" src="../../public/Images/calc1.png"/>
                </div>
            </div>
          </div>

          <div id="project5Enlarged" v-if="project5Enlarged" class="item-big container" >
            <div class="image"  >
                    <div class="overlay"> 
                        <button id="closeButton" @click="normalize5()"><i class="fa fa-window-close" aria-hidden="true"></i></button>
                    </div>
                    <agile ref="carousel5Enlarged" :options="myOptions">
                      <div class="slide">
                        <div class="photoContainer">
                          <img class="photo" src="../../public/Images/calc1.png"/>
                        </div>
                      </div>
                      
                      <div class="slide">
                          <div class="photoContainer">
                            <img class="photo" src="../../public/Images/calc2.png"/>
                          </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/calc3.png"/>
                        </div>
                      </div>      
                    </agile>
            </div>
            <div class="info">
              <h3>Area Calculator (2020)</h3>
              <div class="description">
                <ul class="list-disc marker:text-blue-500">
                    <LI>Simple application made to aid in a time consuming task in a research project. Project required to get the integral of the area of a cross section of a friction welded tube. (Personal/Work Project)</LI>
                    <LI>Tools Used:Python, Tkinter</LI>
                    <LI>Lessons Learned: 1. Building software to solve problems, 2. Interfacing with a GUI</LI>   
                </ul>  
              </div>
            </div>
          </div>

          <div id="project6" class="item container" @click="enlarge6()">
            <div class="wrapper"></div>
            <div class="overlayTitle"><h3>Various Classic Games</h3></div>
            <div class="image"  >
                <div class="photoContainer">
                  <img class="photo" src="../../public/Images/games1.png"/>
                </div>
            </div>
          </div>

          <div id="project6Enlarged" v-if="project6Enlarged" class="item-big container" >
            <div class="image"  >
                    <div class="overlay"> 
                        <button id="closeButton" @click="normalize6()"><i class="fa fa-window-close" aria-hidden="true"></i></button>
                    </div>
                    <agile ref="carousel6Enlarged" :options="myOptions">
                      <div class="slide">
                        <div class="photoContainer">
                          <img class="photo" src="../../public/Images/games1.png"/>
                        </div>
                      </div>
                      
                      <div class="slide">
                          <div class="photoContainer">
                            <img class="photo" src="../../public/Images/games2.png"/>
                          </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                          <img class="photo" src="../../public/Images/games3.png"/>
                        </div>
                      </div>

                      <div class="slide">
                          <div class="photoContainer">
                            <img class="photo" src="../../public/Images/games4.png"/>
                          </div>
                      </div>    
                    </agile>
            </div>
            <div class="info">
              <h3>Various Classic Games (2020)</h3>
              <div class="description">
                <ul class="list-disc marker:text-blue-500">
                    <LI>Personal project to recreate some classic and modern games. Games include: Flappy Bird, Snake, and Pong(Personal Project)</LI>
                    <LI>Tools Used:Python, Tkinter, Pygames</LI>  
                </ul>     
              </div>
            </div>
          </div>

  

		</div>
</template>

<script>
import { VueAgile } from 'vue-agile'
export default {
  name: "ProjectsView",
  components:{
    agile: VueAgile
  },
  data() {
    return {
      project1Enlarged: false,
      project2Enlarged: false,
      project3Enlarged: false,
      project4Enlarged: false,
      project5Enlarged: false,
      project6Enlarged: false,
      myOptions: {
        navButtons: false,
        infinite:false, 
        autoplay:"false",
        slidesToShow:"1",
        centerMode:true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
              navButtons:false,
              infinite:false, 
              autoplay:"false",
              slidesToShow:"1",
              centerMode:true,
            }
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              autoplay:false,
              infinite: false,
              slidesToShow:"1",
            }
          }
        ]
      },
      myOptionsEnlarged: {
        navButtons: false,
        infinite:false, 
        autoplay:"false",
        slidesToShow:"1",
        centerMode:true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
              navButtons:false,
              infinite:false, 
              autoplay:"false",
              slidesToShow:"1",
              centerMode:true,
            }
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              autoplay:false,
              infinite: false,
              slidesToShow:"1",
            }
          }
        ]
      }

    }
  },
  methods: {
    normalize1(){
        this.project1Enlarged = false;       
    },
    enlarge1(){
     this.project1Enlarged = true;
    },
    normalize2(){
        this.project2Enlarged = false;       
    },
    enlarge2(){
     this.project2Enlarged = true;
    },
    normalize3(){
        this.project3Enlarged = false;       
    },
    enlarge3(){
     this.project3Enlarged = true;
    },
    normalize4(){
        this.project4Enlarged = false;       
    },
    enlarge4(){
     this.project4Enlarged = true;
    },
    normalize5(){
        this.project5Enlarged = false;       
    },
    enlarge5(){
     this.project5Enlarged = true;
    },
    normalize6(){
        this.project6Enlarged = false;       
    },
    enlarge6(){
     this.project6Enlarged = true;
    },
   
  }
};
</script>

<style scoped>
  #work-section{
    background-color: yellow;
  }
	.agile__nav-button{
		background: transparent;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 24px;
		height: 100%;
		position: absolute;
		top: 0;
		transition-duration: .3s;
		width: 80px;
  }
	.agile:hover{
			background-color: rgba(#000, .5);
			opacity: 1
    }
	.agile--prev{
			left: 0
    }
	.agile--next{
			right: 0
  }
	.agile__dots{
		bottom: 500px;
		left: 50%;
		position: absolute;
		transform: translateX(-50%)
   }

	.agile__dot{
		margin: 0 10px
   }

	
.photoContainer{
  height: 215px;
  display: flex;
  justify-content: center;
  object-fit: scale-down;
}
.slide{
	display: block;
	height: 200px;
	width: 100%;
}

.item{
  text-align: center;
  background-color: #F4F4F4;
  box-shadow: 2px 2px 1px #888888;
  transition: all .2s ease-in-out;
  width: 300px;
  height: 250px;
  z-index: 0;
  cursor:pointer;
  padding: 0px;

}
.item h3{
  margin-top: 10px;
}
.item:hover{
  box-shadow: 12px 12px 10px #7e7d7d;
  transform: scale(1.15); 
}

.item-big{
  text-align: center;
  box-shadow: 2px 2px 1px #888888;
  background-color: #F4F4F4;
  transition: all .2s ease-in-out;
  width: 640px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  border-color: #f4a261;
  border-width: 1px;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 12px;
}
.item-big .agile{
  /* margin-left: 80px;
  margin-right: 80px;  */
   margin-left: auto;
  margin-right: auto; 
  width: 80%;
  height: 325px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: lightgray;
}
.item-big .slide{
  height: 325px;
  
}

.item-big .photoContainer{
  width: 100%;
  height:325px;
  display: flex;
  justify-content: center;
  object-fit: scale-down;
}

.project-link{
  color: #f4a261;
  font-weight: bold;
  justify-self: center;
  text-align: center;
  justify-content: center;
  word-spacing: 40px;
  font-size: 30px;
}
.overlay {
  width: 100%;
  z-index: 15;
  position: absolute;
  align-self: flex-end;
  margin: 0;
  padding: 0;
 
}


.info {
  color: #264653;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

.description{
  
  width: 70%;
  margin-left: auto;
  margin-right:auto;
  text-align: left;
}

.info h3 {
  font-size: 18px;
}

.info h3 {
  font-size: 16px;
}

.info p {
  margin: 4px;
  font-size: 12px;
}


.price {
  display: flex;
}

.info button {
  height: 35px;
  border-radius: 5%;
  background: #f4a261;
  color: white;
  border: none;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
}
.buttons{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

#closeButton{
  width: 50px;
  height: 50px;
  color: red;
  position:relative;
  float:right;

}
.wrapper{
  z-index: 11;
  background: #264653;
  opacity: .4;
  position: absolute;
  height: 250px;
  width: 300px;
}
.overlayTitle{
  color: white;
  font-size: 20px;
  z-index: 11;
  position: absolute;
  height: 250px;
  width: 300px;
  display: flex;
  flex-direction: column-reverse;
}


  /* Mobile Styles */
  @media only screen and (max-width: 639px){
   #navBar{
     visibility: hidden;
   }
   #p-grid{
    margin-top: 400px;
    width: 18em;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
   }
   .item-big{
    height: fit-content;
    width: 100%;
   }
  
  }
  /* Mobile Styles */
  @media only screen and (min-width:640px) and (max-width:768px){
   #navBar{
     visibility: hidden;
   }
   #p-grid{
    margin-top: 100px;
    width: 18em;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
   }
   .item{
    transform: scale(1.25); 
   }
   .item:hover{
  box-shadow: 12px 12px 10px #7e7d7d;
  transform: scale(1.35); 
}

  


  }





</style>

