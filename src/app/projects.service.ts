import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public projects = [
    {
      title: "GeekyStore",
      subHeading: "An Ecommerce Website",
      desc:
        "It is a complete dynamic website I made when I was in my early days,I was learning Angular and Springboot back then, This website is a skeletal frame for a full fledge website and have features like secure login, signup, products previews, category and price filters, search functionality to search your favorite product, cart, order history, ability to distinguish between the administrator and buyer giving adminstrator right to edit and add his products. User can change their data too if entered wrong. Technologies used were Angular7, Springboot, MySQL. This project lit a spark inside me and from here initialited my love for webapps.",
      links: [
        "https://github.com/rishabh091/Ecommerce-website-frontend",
        "https://github.com/rishabh091/Ecommerce-website-backend"
      ],
      images: [
        "../../assets/ss/ecommerce/ecommerce1.PNG",
        "../../assets/ss/ecommerce/ecommerce2.PNG",
        "../../assets/ss/ecommerce/ecommerce3.PNG",
        "../../assets/ss/ecommerce/ecommerce4.PNG",
        "../../assets/ss/ecommerce/ecommerce5.PNG"
      ]
    },
    {
      title: "SkyLine",
      subHeading: "A Blog website",
      desc:
        "A complete dynamic website I made after the Geekystore webapp. This webapp made me learn both frontend design and important backend features like email verification system. The website is completey made by using Angular 8, Springboot and MySQL and have features like login, signup, an otp verification system for enter mail during signup, home page where new trending blogs will pop up, blog creation, user followers and following system, blogs of users whom you followed will be also displayed on homepage as well as in their profile. Abiliy to make blogs private so their only your followers can see your blogs, blog editing, user detail editing, custom categories, ability to like and comment blogs.",
      links: [
        "https://github.com/rishabh091/Blog-Website-Frontend",
        "https://github.com/rishabh091/Blog-Wesite-Backend"
      ],
      images: [
        "../../assets/ss/blog/blog1.PNG",
        "../../assets/ss/blog/blog2.PNG",
        "../../assets/ss/blog/blog3.PNG",
        "../../assets/ss/blog/blog4.PNG",
        "../../assets/ss/blog/blog5.PNG",
        "../../assets/ss/blog/blog6.PNG"
      ]
    },
    {
      title: "Orange",
      subHeading: "Cross platform music player",
      desc:
        "Someone rightly said 'Necessity is mother of invention', I am a huge music head I listen to music all day, it is such a sweet thing but the absence of a simple music player always bugged me so I created this offline music player that can play music present in my computer, having functionalities like playlist creation and song skips and previous songs. The design is quite simple because it was my first time creating a desktop application. Being a web developer I thought to use javascript in this webapp and used Angular 8 and Electron to convert it into .exe file. The electron made it possible to use this application on Mac as well as Linux. Thats the beauty of being a programmer right, We can create any technology we want.",
      links: ["https://github.com/rishabh091/Orange-Music-Player"],
      images: [
        "../../assets/ss/music player/music1.PNG",
        "../../assets/ss/music player/music2.PNG",
        "../../assets/ss/music player/music3.PNG",
        "../../assets/ss/music player/music4.PNG"
      ]
    },
    {
      title: "Globe",
      subHeading: "News Application",
      desc:
        "It was my first time learning android, it was quite fun I made this simple yet sophisticated application in native android using a news api, The app is low on features not gonna lie but I am still proud of it, Thats the kind of quality I admire and work on that is learning new things, There is no age or limit to educate yoursel",
      links: ["https://github.com/rishabh091/Globe---My-own-news-app"],
      images: [
        "../../assets/ss/globe/globe1.png",
        "../../assets/ss/globe/globe2.png",
        "../../assets/ss/globe/globe3.png",
        "../../assets/ss/globe/globe4.png"
      ]
    }
  ];

  constructor() { }
}
