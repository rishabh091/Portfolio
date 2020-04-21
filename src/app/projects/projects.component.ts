import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: "GeekyStore",
      subHeading: "An Ecommerce Website",
      desc:
        "It is a complete dynamic website I made when I was in my early days,I was learning Angular and Springboot back then, This website is a skeletal frame for a full fledge website and have features like secure login, signup, products previews, category and price filters, search functionality to search your favorite product, cart, order history, ability to distinguish between the administrator and buyer giving adminstrator right to edit and add his products. User can change their data too if entered wrong. Technologies used were Angular7, Springboot, MySQL. This project lit a spark inside me and from here initialited my love for webapps.",
      link1: "https://github.com/rishabh091/Ecommerce-website-frontend",
      link2: "https://github.com/rishabh091/Ecommerce-website-backend",
      image1: "../../assets/ss/ecommerce/ecommerce1.PNG",
      image2: "../../assets/ss/ecommerce/ecommerce2.PNG",
      image3: "../../assets/ss/ecommerce/ecommerce3.PNG"
    },
    {
      title: "SkyLine",
      subHeading: "A Blog website",
      desc:
        "A complete dynamic website I made after the Geekystore webapp. This webapp made me learn both frontend design and important backend features like email verification system. The website is completey made by using Angular 8, Springboot and MySQL and have features like login, signup, an otp verification system for enter mail during signup, home page where new trending blogs will pop up, blog creation, user followers and following system, blogs of users whom you followed will be also displayed on homepage as well as in their profile. Abiliy to make blogs private so their only your followers can see your blogs, blog editing, user detail editing, custom categories, ability to like and comment blogs.",
      link1: "https://github.com/rishabh091/Blog-Website-Frontend",
      link2: "https://github.com/rishabh091/Blog-Wesite-Backend",
      image1: "../../assets/ss/blog/blog1.PNG",
      image2: "../../assets/ss/blog/blog2.PNG",
      image3: "../../assets/ss/blog/blog3.PNG"
    },
    {
      title: "Orange",
      subHeading: "Cross platform music player",
      desc:
        "Someone rightly said 'Necessity is mother of invention', I am a huge music head I listen to music all day, it is such a sweet thing but the absence of a simple music player always bugged me so I created this offline music player that can play music present in my computer, having functionalities like playlist creation and song skips and previous songs. The design is quite simple because it was my first time creating a desktop application. Being a web developer I thought to use javascript in this webapp and used Angular 8 and Electron to convert it into .exe file. The electron made it possible to use this application on Mac as well as Linux. Thats the beauty of being a programmer right, We can create any technology we want.",
      link1: "https://github.com/rishabh091/Orange-Music-Player",
      link2: "",
      image1: "../../assets/ss/music player/music1.PNG",
      image2: "../../assets/ss/music player/music2.PNG",
      image3: "../../assets/ss/music player/music3.PNG"
    }
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.changeOdd();
  }

  changeOdd() {
    for (let i = 1; i < 10; i = i + 2) {
      let element = document.getElementById(i + "");

      element.classList.remove("bg-primary-light");
      element.classList.remove("text-right");
      element.style.flexDirection = "row-reverse";

      let link2 = document.getElementById(this.projects[2].link2 + "");
      link2.style.display = "none";
    }
  }
}
