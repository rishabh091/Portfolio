import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  skills = "technical";
  className = "custom-bg";
  isTechnical=true;

  cards=[
    {
      image: "../assets/letter-blocks-247819.jpg",
      heading: "Fast Learner",
      desc: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it",
      owner: "- Mahatma Gandhi"
    },
    {
      image: "../assets/man-in-suit.jpg",
      heading: "Receptive",
      desc: "I am willing to sit down with anybody and have constructive criticism",
      owner: "- Charles Barkley"
    },
    {
      image: "../assets/chessboard-game.jpg",
      heading: "Decision Maker",
      desc: "Whenever you see a successful business, someone once made a courageous decision.",
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
      desc: "I don't want to be at the mercy of my emotions. I want to use them, to enjoy them.",
      owner: "- Oscar Wilde"
    },
    {
      image: "../assets/curious.jpg",
      heading: "Curious",
      desc: "I have no special talents. I am only passionately curious.",
      owner: "- Albert Einstein"
    }
  ];

  ngOnInit() {
  }


  showSkills(skill) {
    let button = document.getElementById(skill);

    if (skill != this.skills) {
      document.getElementById(this.skills).classList.remove(this.className);
      this.skills = skill;
      document.getElementById(skill).classList.add(this.className);
    }

    if(skill == "behavioral"){
      this.isTechnical=false;
    }
    else{
      this.isTechnical=true;
    }
  }
}
