import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit{

  skills = "technical";
  className = "custom-bg";
  isTechnical = true;

  cards = [
    {
      image: "../assets/letter-blocks-247819.jpg",
      heading: "Fast Learner",
      desc:
        "Wisdom is not a product of schooling but of the lifelong attempt to acquire it",
      owner: "- Mahatma Gandhi"
    },
    {
      image: "../assets/man-in-suit.jpg",
      heading: "Receptive",
      desc:
        "I am willing to sit down with anybody and have constructive criticism",
      owner: "- Charles Barkley"
    },
    {
      image: "../assets/chessboard-game.jpg",
      heading: "Decision Maker",
      desc:
        "Whenever you see a successful business, someone once made a courageous decision.",
      owner: "- Peter F. Drucker"
    },
    {
      image: "../assets/comm.jpg",
      heading: "Good Listener",
      desc: "The most important thing in communication is to hear what isn’t being said.",
      owner: "- Peter F. Drucker"
    },
    {
      image: "../assets/happy.jpg",
      heading: "Emotional Intelligent",
      desc:
        "I don't want to be at the mercy of my emotions. I want to use them, to enjoy them.",
      owner: "- Oscar Wilde"
    },
    {
      image: "../assets/curious.jpg",
      heading: "Curious",
      desc: "I have no special talents. I am only passionately curious.",
      owner: "- Albert Einstein"
    }
  ];
  frontendLang = [
    {
      name: "html",
      experience: 100
    },
    {
      name: "typescript",
      experience: 75
    },
    {
      name: "css",
      experience: 90
    },
    {
      name: "javascript",
      experience: 75
    }
  ];
  frontendFrame = [
    {
      name: "bootstrap 4",
      experience: 100
    },
    {
      name: "angular",
      experience: 75
    },
    {
      name: "jquery",
      experience: 50
    }
  ];
  pgLang = [
    {
      name: "c",
      experience: 50
    },
    {
      name: "c++",
      experience: 60
    },
    {
      name: "java",
      experience: 100
    },
    {
      name: "sql",
      experience: 90
    }
  ];
  devFrame = [
    {
      name: "springboot",
      experience: 75
    },
    {
      name: "nodejs",
      experience: 70
    },
    {
      name: "android",
      experience: 25
    },
    {
      name: "express",
      experience: 60
    },
    {
      name: "hibernate",
      experience: 75
    },
    {
      name: "electron",
      experience: 30
    }
  ];
  databases = [
    {
      name: "oracle",
      experience: 90
    },
    {
      name: "mysql",
      experience: 100
    },
    {
      name: "mongodb",
      experience: 50
    },
    {
      name: "sqlite",
      experience: 30
    }
  ];
  concepts = [
    {
      name: "operating systems",
      experience: 75
    },
    {
      name: "dbms",
      experience: 80
    },
    {
      name: "data structures",
      experience: 90
    },
    {
      name: "software engineering",
      experience: 100
    }
  ];

  constructor() {}

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.showTechSkills();
  }

  showTechSkills() {
    for (let i = 0; i < this.frontendLang.length; i++) {
      let object = this.frontendLang[i];
      this.displaySkills(object);
    }

    for (let i = 0; i < this.frontendFrame.length; i++) {
      this.displaySkills(this.frontendFrame[i]);
    }

    for (let i = 0; i < this.pgLang.length; i++) {
      this.displaySkills(this.pgLang[i]);
    }

    for (let i = 0; i < this.devFrame.length; i++) {
      this.displaySkills(this.devFrame[i]);
    }

    for (let i = 0; i < this.databases.length; i++) {
      this.displaySkills(this.databases[i]);
    }

    for (let i = 0; i < this.concepts.length; i++) {
      this.displaySkills(this.concepts[i]);
    }
  }
  displaySkills(lang) {
    let item = document.getElementById(lang.name);

    let width = 0;
    let interval = setInterval(() => {
      width += 1;
      item.style.width = width + "%";

      if (width == lang.experience) {
        clearInterval(interval);
        item.innerHTML = lang.name;
      }
    }, 20);
  }

  showSkills(skill) {
    let button = document.getElementById(skill);

    if (skill != this.skills) {
      document.getElementById(this.skills).classList.remove(this.className);
      this.skills = skill;
      document.getElementById(skill).classList.add(this.className);
    }

    if (skill == "behavioral") {
      this.isTechnical = false;
    } else {
      this.isTechnical = true;

      let timeout = setTimeout(() => {
        this.showTechSkills();
      }, 1000);
    }
  }
}
