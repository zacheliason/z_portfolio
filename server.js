const express = require('express');
const bodyParser = require("body-parser");
var data = require('./currentday.json');
let lastbook = require("./lastbook.json")
const https = require('https');
var SpotifyWebApi = require('spotify-web-api-node');
const fs = require('fs')
const mongoose = require('mongoose');
const letterboxd = require('letterboxd')
// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'e386402f0f8347b0b1bdb21b19ee0792',
  clientSecret: 'efa2b04ba9994958b3c15c76c86851a6',
  redirectUri: 'https://www.zacheliason.com/'
});
async function initSpotify() {
  await spotifyApi.setAccessToken('BQAW5x4SPUEcCVt_TmvQUwpScWeExHKD_x3nvrgBeVJGd81HLCZ0huwdW34NDN_07SOpiN6TAv6W_tBqcpb728SMFaVOK9QVXitRtezhH66A4gbNrDu4Qz_VIeJ70nq-oZ7cJfG4rb4yuHSlebIIXSZTL27m3fgB1_0');
  await spotifyApi.setRefreshToken('AQAT7F-7nME_bzheBEys5iY4nGvKJOZjQV2DnVwVqrGuseQVuyBK9I_9G6JC0wbydHuuMmgvT7sesGEHd_0cTPAqfbyfKhZU3cNHoepBpyhnMO7WaW28iARegFXzaXtpf9M');
  let data = await spotifyApi.refreshAccessToken()
  try {
    console.log('The access token has been refreshed!');
    spotifyApi.setAccessToken(data.body['access_token']);
  }
  catch(err) {
    console.log('Could not refresh access token', err);
  }
}

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the database
mongoose.connect('mongodb://localhost:27017/zach', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const newDay = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  outfit: {
    shirt: String,
    pants: String,
    shoes: String,
    watch: String
  },
  food: String,
  memory: String,
  recentMedia:
  {
    recentSong: {
      title: String,
      artist: String,
      albumcoverURL: String,
    },
    recentMovie: {
      title: String,
      rating: Number,
      year: String,
      review: String,
      watched_date: Date,
      imageURL: String
    },
    recentBook: String,
  },
  dailyPhoto: {
    data: Buffer,
    contentType: String,
  },
  goals:[
    {
      goal: String,
      completed: { type: Boolean, default: false },
    },
    {
      goal: String,
      completed: { type: Boolean, default: false },
    }
  ],
});

newDay.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });

newDay.set('toJSON', {
  virtuals: true
});

const Day = mongoose.model('Day', newDay);

const day = new Day();

//
let song = {title: "", artist: "", albumcoverURL: ""}
let spfSong = {}

let movie = {title: "", rating: 0, year: 0, review: "", watched_date: Date(), imageURL: ""}

async function seq() {
  await initSpotify()
  let data = await spotifyApi.getMyRecentlyPlayedTracks({limit : 20})
  try {
  // Output items
  spfSong = data.body.items[0].track
  song.artist = spfSong.artists[0].name
  song.albumcoverURL = spfSong.album.images[0].url
  song.title = spfSong.name
  day.recentMedia.recentSong = song
  }
  catch (err) {
    console.log('Something went wrong!', err);
  }
  let items = await letterboxd("zacheliason")
  let last = items[0]

  movie.title = last.film.title
  movie.rating = last.rating.score
  movie.year = last.film.year
  movie.review = last.review
  movie.watched_date = last.date.watched
  movie.imageURL = last.film.image.medium
  await updateDay(movie)
  let content = await work();
  // delete memory from web side
  content.forEach(x => x.memory = "")
  let content1 = content[content.length - 1]
  let datar = JSON.stringify(content1,undefined,2)
  let datal = JSON.stringify(content,undefined,2)
  fs.writeFile('./currentday.json', datar, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
  fs.writeFile('./days.json', datal, err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })
}






async function getMovies() {
let items = await letterboxd("zacheliason")
let last = items[0]

movie.title = last.film.title
movie.rating = last.rating.score
movie.year = last.film.year
movie.review = last.review
movie.watched_date = last.date.watched
movie.imageURL = last.film.image.medium
}

async function updateDay(movie1) {
day.outfit.shirt = data.outfit.shirt
day.outfit.pants = data.outfit.pants
day.outfit.shoes = data.outfit.shoes
day.outfit.watch = data.outfit.watch
day.food = data.food
day.memory = data.memory
if(data.recentmedia != undefined) {
  day.recentMedia.recentBook = data.recentmedia.recentbook
}
else {
  day.recentMedia.recentBook =  lastbook.recentbook
}
day.recentMedia.recentMovie = movie1
}


async function work() {
  await day.save();
  let tempgoal = {goal: "", completed: false}
  for(goal of data.goals) {
    tempgoal.goal = goal.goal
    if(goal.completed == "t") {
      tempgoal.completed = true;
    }
    await day.goals.push(tempgoal);
    await day.save();
    tempgoal = {goal: "", completed: false}
  }
  let days = await Day.find();
  console.log(days[days.length - 1]);
  return days
}

seq()

app.get('/api/days', async (req, res) => {
  try {
    let days = await Day.find();
    res.send({days: days});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server listening on port 8888!'));
