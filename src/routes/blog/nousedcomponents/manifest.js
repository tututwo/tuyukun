export default [
  {
    id: "waipoua",
    bg: 0x54a05e,
    pageBg: "#E6754B",
    layers: [
      {
        id: "bg",
        url: require("@/assets/img/select/cards/waipoua/bg.jpg"),
        anchor: {
          x: 0.5,
          y: 0.5,
        },
      },
      {
        id: "explore",
        text: "Visit",
        style: {
          fontFamily: "Fenway Park JF",
          fontSize: 73,
          fill: 0xffffd6,
          padding: 7,
          trim: true,
        },
        x: 466,
        y: 99,
      },
      {
        id: "title",
        text: "WAIPOUA",
        style: {
          fontFamily: "Dirk Black",
          fontSize: 197,
          fill: 0xffffd6,
          trim: true,
          letterSpacing: 2,
        },
        x: 98,
        y: 210,
      },
      {
        id: "subtitle",
        text: "NATIONAL PARK",
        style: {
          fontFamily: "Avenir Black",
          fontSize: 29,
          fill: 0xffffd6,
          trim: true,
        },
        x: 675,
        y: 453,
      },
      {
        id: "char",
        url: require("@/assets/img/select/cards/waipoua/char.png"),
        x: 142,
        y: 264,
      },
      {
        id: "char2",
        url: require("@/assets/img/select/cards/waipoua/char2.png"),
        x: 790,
        y: 130,
      },
    ],
    animations: {
      intro: [
        {
          targets: ["bg:scale"],
          x: [0.55, 0.5],
          y: [0.55, 0.5],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["title"],
          alpha: [0, 1],
          y: [260 / 2, 210 / 2],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["char"],
          y: [500 / 2, 264 / 2],
          angle: [-5, 0],
          easing: "easeInOutCubic",
          offset: 150,
        },
        {
          targets: ["char2"],
          alpha: [0, 1],
          duration: 350,
          y: [100 / 2, 130 / 2],
          easing: "easeInOutCubic",
          offset: 500,
        },
      ],
    },
  },
  {
    id: "the-coast",
    bg: 0x44a1b7,
    pageBg: "#0198BF",
    layers: [
      {
        id: "bg",
        url: require("@/assets/img/select/cards/the-coast/bg.jpg"),
        anchor: {
          x: 0.5,
          y: 0.5,
        },
      },
      {
        id: "explore",
        text: "Discover",
        style: {
          fontFamily: "Fenway Park JF",
          fontSize: 73,
          fill: 0xffffd6,
          padding: 7,
          trim: true,
        },
        x: 401,
        y: 100,
      },
      {
        id: "title",
        text: "ĀPURE MOANA",
        style: {
          fontFamily: "Dirk Black",
          fontSize: 123,
          fill: 0xffffd6,
          trim: true,
          letterSpacing: 3,
        },
        x: 103,
        y: 210,
      },
      {
        id: "subtitle",
        text: "THE MARINE RESERVE",
        style: {
          fontFamily: "Avenir Black",
          fontSize: 29,
          fill: 0xffffd6,
          trim: true,
        },
        x: 591,
        y: 467,
      },
      {
        id: "char",
        url: require("@/assets/img/select/cards/the-coast/char.png"),
        x: 162,
        y: 278,
      },
      {
        id: "char2",
        url: require("@/assets/img/select/cards/the-coast/char2.png"),
        x: 688,
        y: 32,
      },
      {
        id: "char3",
        url: require("@/assets/img/select/cards/the-coast/char3.png"),
        x: 658,
        y: 195,
      },
    ],
    animations: {
      intro: [
        {
          targets: ["bg:scale"],
          x: [0.55, 0.5],
          y: [0.55, 0.5],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["title"],
          alpha: [0, 1],
          y: [260 / 2, 210 / 2],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["char2"],
          easing: "easeInOutCubic",
          alpha: [0, 1],
          y: [0 / 2, 32 / 2],
          offset: 150,
        },
        {
          targets: ["char"],
          easing: "easeInOutCubic",
          alpha: [0, 1],
          y: [328 / 2, 278 / 2],
          offset: 200,
        },
        {
          targets: ["char3"],
          easing: "easeInOutCubic",
          alpha: [0, 1],
          angle: [-5, 0],
          x: [708 / 2, 658 / 2],
          offset: 250,
        },
      ],
    },
  },
  {
    id: "cuba-st",
    bg: 0xf58971,
    pageBg: "#CB904A",
    layers: [
      {
        id: "bg",
        url: require("@/assets/img/select/cards/cuba-st/bg.jpg"),
        anchor: {
          x: 0.5,
          y: 0.5,
        },
      },
      {
        id: "explore",
        text: "Enjoy",
        style: {
          fontFamily: "Fenway Park JF",
          fontSize: 73,
          fill: 0xffffd6,
          padding: 7,
          trim: true,
        },
        x: 442,
        y: 97,
      },
      {
        id: "title",
        text: "PŌNEKE",
        style: {
          fontFamily: "Dirk Black",
          fontSize: 222,
          fill: 0xffffd6,
          trim: true,
          letterSpacing: 2,
        },
        x: 115,
        y: 180,
      },
      {
        id: "subtitle",
        text: "CUBA STREET",
        style: {
          fontFamily: "Avenir Black",
          fontSize: 29,
          fill: 0xffffd6,
          trim: true,
        },
        x: 654,
        y: 467,
      },
      {
        id: "char",
        url: require("@/assets/img/select/cards/cuba-st/char.png"),
        x: 0,
        y: 265,
      },
      {
        id: "char2",
        url: require("@/assets/img/select/cards/cuba-st/char2.png"),
        x: 838,
        y: 112,
      },
    ],
    animations: {
      intro: [
        {
          targets: ["bg:scale"],
          x: [0.55, 0.5],
          y: [0.55, 0.5],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["title"],
          alpha: [0, 1],
          y: [230 / 2, 180 / 2],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["char"],
          easing: "easeInOutCubic",
          alpha: [0, 1],
          angle: [-5, 0],
          x: [-50 / 2, 0 / 2],
          offset: 150,
        },
        {
          targets: ["char2"],
          easing: "easeInOutCubic",
          alpha: [0, 1],
          y: [162 / 2, 112 / 2],
          offset: 200,
        },
      ],
    },
  },
  {
    id: "anp",
    bg: 0xbb9959,
    pageBg: "#70A262",
    layers: [
      {
        id: "bg",
        url: require("@/assets/img/select/cards/anp/bg.jpg"),
        anchor: {
          x: 0.5,
          y: 0.5,
        },
      },
      {
        id: "explore",
        text: "Explore",
        style: {
          fontFamily: "Fenway Park JF",
          fontSize: 73,
          fill: 0xffffd6,
          padding: 7,
          trim: true,
        },
        x: 400,
        y: 97,
      },
      {
        id: "title",
        text: "FIELD DAY",
        style: {
          fontFamily: "Dirk Black",
          fontSize: 175,
          fill: 0xffffd6,
          trim: true,
          letterSpacing: 3,
        },
        x: 102,
        y: 208,
      },
      {
        id: "subtitle",
        text: "CANTERBURY",
        style: {
          fontFamily: "Avenir Black",
          fontSize: 29,
          fill: 0xffffd6,
          trim: true,
        },
        x: 715,
        y: 467,
      },
      {
        id: "char",
        url: require("@/assets/img/select/cards/anp/char.png"),
        x: 127,
        y: 282,
      },
      {
        id: "char2",
        url: require("@/assets/img/select/cards/anp/char2.png"),
        x: 802,
        y: 70,
      },
    ],
    animations: {
      intro: [
        {
          targets: ["bg:scale"],
          x: [0.55, 0.5],
          y: [0.55, 0.5],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["title"],
          alpha: [0, 1],
          y: [258 / 2, 208 / 2],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["char"],
          alpha: [0, 1],
          angle: [-15, 0],
          y: [500 / 2, 282 / 2],
          easing: "easeInOutCubic",
          offset: 150,
        },
        {
          targets: ["char2"],
          alpha: [0, 1],
          y: [20 / 2, 70 / 2],
          easing: "easeInOutElastic",
          offset: 200,
        },
      ],
    },
  },
  {
    id: "rotorua",
    bg: 0x73889c,
    pageBg: "#CA665C",
    layers: [
      {
        id: "bg",
        url: require("@/assets/img/select/cards/rotorua/bg.jpg"),
        anchor: {
          x: 0.5,
          y: 0.5,
        },
      },
      {
        id: "explore",
        text: "Experience",
        style: {
          fontFamily: "Fenway Park JF",
          fontSize: 73,
          fill: 0xffffd6,
          padding: 7,
          trim: true,
        },
        x: 380,
        y: 97,
      },
      {
        id: "title",
        text: "ROTORUA",
        style: {
          fontFamily: "Dirk Black",
          fontSize: 192,
          fill: 0xffffd6,
          trim: true,
          letterSpacing: 3,
        },
        x: 103,
        y: 207,
      },
      {
        id: "subtitle",
        text: "GEOTHERMAL WONDERS",
        style: {
          fontFamily: "Avenir Black",
          fontSize: 29,
          fill: 0xffffd6,
          trim: true,
        },
        x: 544,
        y: 467,
      },
      {
        id: "char",
        url: require("@/assets/img/select/cards/rotorua/char.png"),
        x: 102,
        y: 127,
      },
      {
        id: "char2",
        url: require("@/assets/img/select/cards/rotorua/char2.png"),
        x: 141,
        y: 233,
      },
      {
        id: "char3",
        url: require("@/assets/img/select/cards/rotorua/char3.png"),
        x: 734,
        y: 0,
      },
    ],
    animations: {
      intro: [
        {
          targets: ["bg:scale"],
          x: [0.55, 0.5],
          y: [0.55, 0.5],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["title"],
          alpha: [0, 1],
          y: [257 / 2, 207 / 2],
          easing: "easeInOutCubic",
          offset: 0,
        },
        {
          targets: ["char"],
          alpha: [0, 1],
          y: [77 / 2, 127 / 2],
          easing: "easeInOutElastic",
          offset: 150,
        },
        {
          targets: ["char2"],
          alpha: [0, 1],
          y: [500 / 2, 233 / 2],
          easing: "easeInOutCubic",
          offset: 200,
        },
        {
          targets: ["char3"],
          alpha: [0, 1],
          angle: [15, 0],
          y: [-100 / 2, 0 / 2],
          easing: "easeInOutCubic",
          offset: 250,
        },
      ],
    },
  },
];
