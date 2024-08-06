class Project {
  title;
  time;
  used;
  info;
  field;
  url;
  desc;
  feat;
  prev;
  ext;
  totalPrev;
  imgWidth;

  constructor(title, time, used, info, field, url, desc, feat, prev, ext, totalPrev, imgWidth) {
    this.title = title;
    this.time = time;
    this.used = used;
    this.info = info;
    this.field = field;
    this.url = url;
    this.desc = desc;
    this.feat = feat;
    this.prev = prev;
    this.ext = ext;
    this.totalPrev = totalPrev;
    this.imgWidth = imgWidth;
  }
}

export const projects = [
  new Project(
    "betterU",
    "july 2024",
    "flutter, dart",
    "group project",
    "front end mobile development",
    "https://github.com/naomehmi/betterU-flutter-assignment",
    "a fitness app with many workout programs to choose from and keep track of user progress",
    [
      "users are able to track their weight progress through line graphs and level up as they complete more workouts in the app",
      "users can share their thoughts and interact with other posts through liking and replying",
      "dark mode is available, and the app keeps of track of which theme each user is currently using",
      "data is stored using a Provider"
    ],
    "/betterU/bu_",
    "jpeg",
    12,
    250
  ),
  new Project(
    "minimarket simulator",
    "january 2024",
    "python",
    "group project",
    "object oriented programming",
    "https://github.com/naomehmi/oop_minimarket_simulator",
    "a fun and simple minimarket simulator where the player can control stock items and process customer payment. In this game, the player can learn how to manage money and inventory, and try their best to be the best employee without getting fired.",
    [
      "implemented inheritance, abstract classes, iterator patterns, various design patterns, and SOLID principles",
      "products can expire over time, and have a 1 in 9 chance to be in bad condition when added",
      "cashier system and receipts",
      "player stats when the game ends",
    ],
    "/minimarket_simulator/ms_",
    "png",
    12,
    750
  ),
  new Project(
    "fruit bliss",
    "january 2024",
    "vuejs, nodejs, tailwind css, mySQL",
    "group project",
    "backend web development",
    "https://github.com/naomehmi/tugas-akhir-backend",
    "a simple food and beverages website that implements authentication, authorization, and CRUD operations",
    [
      "client and server communication",
      "users can update their personal data and profile picture",
      "admin can edit, add, and delete items from the website",
      "state management using pinia"
    ],
    "/fruit_bliss/fb_",
    "png",
    12,
    750
  ),
  new Project(
    "to do list",
    "october 2023",
    "vanilla js, css",
    "individual project",
    "frontend web development",
    "https://github.com/naomehmi/to_do_list",
    "a simple and easy to-do list website to note down your tasks for the day. Add, update, and delete tasks on the go.",
    [
      "html dom manipulation",
      "uses device local storage to store tasks",
      "users can add, edit, and delete tasks",
    ],
    "/todo_list/td_",
    "png",
    4,
    750
  ),
  new Project(
    "blackjack game",
    "february 2023",
    "python",
    "group project",
    "recursive functions, data structures [set]",
    "https://github.com/naomehmi/blackjack_game_sem1",
    "basic console single player game where users can play blackjack against a dealer",
    [
      "implements recursive functions and the set data structure",
      "players can bid chips",
    ],
    "/blackjack/bljk_",
    "png",
    6,
    750
  )
]