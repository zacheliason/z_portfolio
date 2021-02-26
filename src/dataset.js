const options = {month: 'long', day: 'numeric', year: 'numeric'};
let dataset = [
  {
    id: 1,
    name: 'Iceberg',
    category: ['design', '2020', 'digital'],
    image: ['iceberg.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 1)),
    description:
      'Promo imagery I designed for the Ballard Brief Summit at the Ballard Center.',
  },
  {
    id: 2,
    name: 'Bambina Poster',
    category: ['art', 'digital', '2019'],
    image: ['Jacob+Elise.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2019, 12)),
    description: 'Personal project I made for my brother last Christmas.',
  },
  {
    id: 3,
    name: 'Kiev88 Black & White Roll 1',
    category: ['photo', 'film', 'b&w', 'kiev88', '2020'],
    image: [
      'Kiev079.jpg',
      'Kiev080.jpg',
      'Kiev081.jpg',
      'Kiev084.jpg',
      'Kiev085.jpg',
      'Kiev088.jpg',
    ],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date("2020-5-2")),
    description:
      'The first roll I shot on my Kiev88. There were some pretty bad light leaks and a sticky focus ring but I still think they were fun.',
  },
  {
    id: 4,
    name: 'Kiev88 Black & White Roll 2',
    category: ['photo', 'film', 'b&w', 'kiev88', '2020'],
    image: ['Kiev3110.jpg', 'Kiev3112.jpg', 'Kiev3115.jpg', 'Kiev3119.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date("2020-6-5")),
    description:
      "I was able to seal the light leaks I'd seen in previous rolls so we thankfully saw fewer of those in these pictures.",
  },
  {
    id: 5,
    name: 'Kiev88 Color Roll 1',
    category: ['photo', 'film', 'color', 'kiev88', '2020'],
    image: [
      'Kiev3122.jpg',
      'Kiev3121.jpg',
      'Kiev3123.jpg',
      'Kiev3125.jpg',
      'Kiev3127.jpg',
      'Kiev3128.jpg',
      'Kiev3129.jpg',
    ],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 6)),
    description: 'Pictures from trips I took in summer of 2020.',
  },
  {
    id: 6,
    name: 'Linocut Tree',
    category: ['art', 'printmaking', '2017'],
    image: ['Print2.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2017, 7)),
    description:
      'This was the last piece of art I made before leaving for Ukraine in 2017.',
  },
  {
    id: 7,
    name: 'Isolation Illo',
    category: ['design', 'digital', 'illustration', '2020'],
    image: ['Isolation1-01.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 6)),
    description:
      'This was an illustration I did for a Ballard Center brief on the effects of isolation on mental health.',
  },
  {
    id: 8,
    name: 'Lincoln Center',
    category: ['photo', 'film', 'b&w', '2015'],
    image: ['Photo1.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2015, 7)),
    description: 'Taken in DC.',
  },
  {
    id: 9,
    name: 'Postal Office',
    category: ['photo', 'film', 'color', '2015'],
    image: ['Photo2.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2015, 7)),
    description: 'Postal Office in DC.',
  },
  {
    id: 10,
    name: 'Linocut Peasant',
    category: ['art', 'printmaking', '2016'],
    image: ['Print1.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(
      new Date(2016, 1, 20)
    ),
    description: 'Linocut from high school.',
  },
  {
    id: 11,
    name: 'Music Journal',
    category: ['design', 'data vis', '2020'],
    image: ['Jan-May_Music-04.jpg', 'Jan-May_Music-02.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(
      new Date(2020, 5, 4)
    ),
    description:
      'Streamgraph showing my top 20 artists I listened to on Spotify during the first half of 2020, interpolated with some life events that happened along the way.',
  },
  {
    id: 13,
    name: 'Fashion Gif',
    category: ['design', 'digital', 'animated', '2020'],
    image: ['Final-Animation.gif'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 5)),
    description:
      "Small animation made for the Ballard Center's social media. They wanted to depict certain coping mechanisms during quarantine. This one was 'taking fashion shots of my sister's outfits every day.'",
  },
  {
    id: 14,
    name: 'Creative Exercise',
    category: ['design', '2020'],
    image: ['CreativeExercises1.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 4)),
    description:
      'This was my creative exercise for entrance into the BYU graphic design pre-program. We were given a sheet of abstract shapes (outlined in cyan dots) and free reign for how we chose to use them in our design. I went with a theme of dancers.',
  },
  {
    id: 15,
    name: 'Color Studies',
    category: ['art', '2020'],
    image: ['Color1.jpg', 'Color2.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 2)),
    description: 'Color studies done for my DSGN class.',
  },
  {
    id: 16,
    name: 'Collages',
    category: ['art', '2020'],
    image: [
      'CollageYellow.jpg',
      'CollageOrange.jpg',
      'B&W.JPG',
      'CollageBlue.jpg',
    ],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 2)),
    description: 'Collage pieces done for my DSGN class.',
  },
  {
    id: 17,
    name: 'Overalls Illo',
    category: ['design', 'digital', 'illustration', '2020'],
    image: ['Butterfly-01.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 5)),
    description:
      "Small illustration I did for the Ballard Center's Social Media. This was to depict a quote about happiness.",
  } /*
  {
    id: 18,
    name: "Battle of the Bands",
    category: ["design","2020", ],
    image: ["BOTB2020-01.jpg","AllStarBOTB1-01.jpg","AllStarBOTB.jpg", ],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 1)),
    description: "Various designs I did for Battle of the Bands at The Wall."
  },*/,
  {
    id: 19,
    name: 'Law Report Timeline',
    category: ['design', '2015'],
    image: ['1.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2015, 6)),
    description:
      'This is a page I worked on for the BYU 2015 Annual Law Report while I was interning at BYU Publications & Graphics.',
  } /*
  {
    id: 20,
    name: "Holy Trinity - Pattern Copy",
    category: ["art", "2020"],
    image: ["3.jpg", ],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 3)),
    description: "This is a copy of the icon 'Holy Trinity' I did for my DSGN class, subbing in my own colors and patterns."
  },*/,
  {
    id: 21,
    name: 'Revolution 1905, 1917',
    category: ['design', '2020'],
    image: ['21.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 3)),
    description:
      'This is a paper cutout I designed depicting the events of the Russian Revolutions of 1905 and 1917 in silhouette.',
  },
  {
    id: 22,
    name: 'Blue Man',
    category: ['art', '2016', 'painting'],
    image: ['BlueMan.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(
      new Date(2016, 4, 16)
    ),
    description: 'Inexplicably blue man I painted in my high school art class.',
  },
  {
    id: 23,
    name: 'Memory Collage',
    category: ['art', '2020', 'painting', 'collage'],
    image: ['DSGN_Final.jpeg'],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 4)),
    description:
      'This was one of the projects I did for my DSGN class. The theme of this collage was memory crossed with time, combining details from the home I grew up in, such as the outline of a chair, the curve of a music stand, or an old family photo, with elements from watches and other timepieces.',
  },
  {
    id: 24,
    name: 'Sketchbook Process',
    category: ['art', '2020', 'sketchbook'],
    image: [
      'Sketchbook-2.jpg',
      'Sketchbook-3.jpg',
      'Sketchbook-4.jpg',
      'Sketchbook-5.jpg',
      'Sketchbook-6.jpg',
      'Sketchbook-7.jpg',
      'Sketchbook-8.jpg',
    ],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2020, 4)),
    description:
      'These are some sketches from my latest sketchbook to show process.',
  },
  {
    id: 25,
    name: 'Kiev88 Color Roll 2',
    category: ['photo', 'film', 'color', 'kiev88', '2020'],
    image: [
      'Kiev4_1.jpg',
      'Kiev4_2.jpg',
      'Kiev4_3.jpg',
      'Kiev4_4.jpg',
      'Kiev4_5.jpg',
    ],
    date: new Intl.DateTimeFormat('en-US', options).format(
      new Date(2020, 9, 6)
    ),
    description: 'Photos from a roadtrip to Leavenworth, WA I took last fall.',
  } /*
  {
    id: 26,
    name: "Tiny Linocuts",
    category: ["art", "printmaking", "2021"],
    image: ["linoTiny.jpg" ],
    date: new Intl.DateTimeFormat('en-US', options).format(new Date(2021,2,11)),
    description: "Couple of tiny linocuts! Western tanager on the right."
  },*/,
  {
    id: 27,
    name: 'Parents Linocut',
    category: ['art', 'printmaking', '2020'],
    image: ['linoParents.jpg'],
    date: new Intl.DateTimeFormat('en-US', options).format(
      new Date('2020-12-26')
    ),
    description:
      'Linocut of my parents that I designed for a joint Christmas gift with my brother.',
  },
];

export default dataset;
