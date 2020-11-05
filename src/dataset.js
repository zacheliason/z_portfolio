let dataset = [{
    id: 1,
    name: "Iceberg",
    category: ["design", "2020", "digital"],
    image: ["iceberg.jpg", ],
    date: new Date(2020, 1),
    description: "Promo poster I designed for the Ballard Brief Summit at the Ballard Center."
  },
  {
    id: 2,
    name: "Bambina Poster",
    category: ["art", "digital", "2019"],
    image: ["Jacob+Elise.jpg", ],
    date: new Date(2019, 12),
    description: "Personal project I made for my brother last Christmas by request of his gf."
  },
  {
    id: 3,
    name: "Kiev B&W Roll 1",
    category: ["photo", "film", "b&w", "kiev88", "2020", ],
    image: ["Kiev079.jpg", "Kiev080.jpg", "Kiev081.jpg", "Kiev084.jpg", "Kiev085.jpg", "Kiev088.jpg", ],
    date: new Date(2020, 5),
    description: "The first roll I shot on my Kiev88. Had some pretty insane light leaks and the turning the focus ring required a few hundred pounds of force but I was able to fix most of those problems after this test roll. There were still some fun shots though."
  },
  {
    id: 4,
    name: "Kiev B&W Roll 2",
    category: ["photo", "film", "b&w", "kiev88", "2020", ],
    image: ["Kiev3110.jpg", "Kiev3112.jpg", "Kiev3115.jpg", "Kiev3119.jpg", ],
    date: new Date(2020, 5),
    description: "I was able to seal the light leaks in the back I used for this roll really well so we saw less of those thankfully in these pictures."
  },
  {
    id: 5,
    name: "Kiev Color Roll 1",
    category: ["photo", "film", "color", "kiev88", "2020", ],
    image: ["Kiev3121.jpg", "Kiev3122.jpg", "Kiev3123.jpg", "Kiev3125.jpg", "Kiev3127.jpg", "Kiev3128.jpg", "Kiev3129.jpg", ],
    date: new Date(2020, 6),
    description: "I used a second back for this roll which was not sealed quite as well as I would've hoped. Luckily I didn't mind the leak effects but I will have to watch this one."
  },
  {
    id: 6,
    name: "Linocut Tree",
    category: ["art", "printmaking", "2017"],
    image: ["Print2.jpg", ],
    date: new Date(2017, 7),
    description: "This was the last piece of art I made before leaving for Ukraine in 2017."
  },
  {
    id: 7,
    name: "Isolation Illo",
    category: ["design", "digital", "illustration", "2020", ],
    image: ["Isolation1-01.jpg", ],
    date: new Date(2020, 6),
    description: "This was a little illustration done for a Ballard Center brief on the effects of isolation on mental health."
  },
  {
    id: 8,
    name: "Lincoln Center",
    category: ["photo", "film", "b&w", "2015", ],
    image: ["Photo1.jpg", ],
    date: new Date(2015),
    description: "Taken in DC."
  },
  {
    id: 9,
    name: "Postal Office",
    category: ["photo", "film", "color", "2015", ],
    image: ["Photo2.jpg", ],
    date: new Date(2015),
    description: "Postal Office in DC."
  },
  {
    id: 10,
    name: "Linocut Peasant",
    category: ["art", "printmaking", "2016", ],
    image: ["Print1.jpg", ],
    date: new Date(2016),
    description: "Linocut from high school days."
  },
  {
    id: 11,
    name: "Music Journal",
    category: ["design", "data vis", "2020", ],
    image: ["Jan-May_Music-04.jpg", "Jan-May_Music-02.jpg", ],
    date: new Date(2020, 5, 4),
    description: "Streamgraph showing my top 20 artists I listened to on Spotify during the first half of 2020, interpolated with some life events that happened along the way. I used @jcbelsn‘s code for this!"
  },
  {
    id: 12,
    name: "Game Night Promo",
    category: ["design", "2020", ],
    image: ["GameNightStory.jpg", ],
    date: new Date(2020, 1),
    description: "Promo design for an event at The Wall. I don't love this sort of layout but it's here in case any potential employers would like to see it."
  },
  {
    id: 13,
    name: "Fashion Gif",
    category: ["design", "digital", "animated", "2020"],
    image: ["Final-Animation.gif", ],
    date: new Date(2020, 5),
    description: "Small Animation made for the Ballard Center's social media. They wanted to depict certain coping mechanisms during quarantine. This one, I believe, was 'taking fashion shots of my sister's outfits every day.'"
  },
  {
    id: 14,
    name: "Creative Exercise",
    category: ["design", "2020", ],
    image: ["CreativeExercises1.jpg", ],
    date: new Date(2020, 4),
    description: "This was the creative exercise for entrance into the BYU graphic design pre-program. We were given a sheet of abstract shapes (outlined in cyan dots) and free reign for how we chose to use them in our design. I went with a theme of dancers."
  },
  {
    id: 15,
    name: "Color Studies",
    category: ["art", "2020", ],
    image: ["Color1.jpg", "Color2.jpg",],
    date: new Date(2020, 2),
    description: "Color studies done for my DSGN class."
  },
  {
    id: 16,
    name: "Collages",
    category: ["art", "2020", ],
    image: ["CollageYellow.jpg","CollageOrange.jpg","B&W.JPG","CollageBlue.jpg",],
    date: new Date(2020, 2),
    description: "Collage pieces done for my DSGN class."
  },
  {
    id: 17,
    name: "Overalls Illo",
    category: ["design","digital","illustration","2020", ],
    image: ["Butterfly-01.jpg", ],
    date: new Date(2020, 5),
    description: "Small illustration I did for the Ballard Center's Social Media. This was to depict a quote about happiness, though I don't remember the specifics."
  },
  {
    id: 18,
    name: "Battle of the Bands",
    category: ["design","2020", ],
    image: ["BOTB2020-01.jpg","AllStarBOTB1-01.jpg","AllStarBOTB.jpg", ],
    date: new Date(2020, 1),
    description: "Various designs I did for Battle of the Bands at The Wall."
  },
  {
    id: 19,
    name: "Law Report Timeline",
    category: ["design", "2015"],
    image: ["1.jpg", ],
    date: new Date(2015),
    description: "This is a page I worked on for the BYU 2015 Annual Law Report."
  },
  {
    id: 20,
    name: "Holy Trinity - Pattern Copy",
    category: ["art", "2020"],
    image: ["3.jpg", ],
    date: new Date(2020, 3),
    description: "This is a copy of the icon 'Святая Троица' I did for my DSGN class, subbing in my own colors and patterns."
  },
  {
    id: 21,
    name: "Revolution 1905, 1917",
    category: ["design", "2020"],
    image: ["21.jpg", ],
    date: new Date(2020, 3),
    description: "This is a paper cutout I designed depicting the events of the Russian Revolutions of 1905 and 1917 in silhouette."
  },
  {
    id: 22,
    name: "Blue Man",
    category: ["art", "2016", "painting"],
    image: ["BlueMan.jpg", ],
    date: new Date(2016),
    description: "Inexplicably blue man I painted in my high school art class."
  },
]

export default dataset;
