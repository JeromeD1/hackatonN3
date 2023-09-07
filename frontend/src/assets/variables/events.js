/* global L */

import tornade from "../images/tornade.png"
import meteorite from "../images/meteorite.png"
import volcan from "../images/volcan.png"
import incendie from "../images/incendie.png"
import tsunami from "../images/tsunami.png"
import radioactivite from "../images/radioactivite.png"

const iconTornade = L.icon({
  iconUrl: tornade,
  iconSize: [80, 120],
})

const iconMeteorite = L.icon({
  iconUrl: meteorite,
  iconSize: [120, 120],
})

const iconVolcan = L.icon({
  iconUrl: volcan,
  iconSize: [80, 120],
})

const iconIncendie = L.icon({
  iconUrl: incendie,
  iconSize: [80, 100],
})

const iconTsunami = L.icon({
  iconUrl: tsunami,
  iconSize: [100, 100],
})

const iconRadioactivite = L.icon({
  iconUrl: radioactivite,
  iconSize: [80, 80],
})

const events = [
  {
    type: "tornade",
    icone: iconTornade,
    lat: 48.8566,
    lng: 2.35,
    info: "At 3.00 PM the 08/09/2023",
  },
  {
    type: "meteorite",
    icone: iconMeteorite,
    lat: 49.0,
    lng: 2.0,
    info: "At 7.00 PM the 09/09/2023",
  },
  {
    type: "volcan",
    icone: iconVolcan,
    lat: 48.5,
    lng: 1.5,
    info: "Since wednesday 06/09/2023",
  },
  {
    type: "incendie",
    icone: iconIncendie,
    lat: 49.1,
    lng: 2.45,
    info: "At 8.24 AM the 10/09/2023",
  },
  {
    type: "tsunami",
    icone: iconTsunami,
    lat: 48.5,
    lng: 2.5,
    info: "At 8.24 AM the 10/09/2023",
  },
  { type: "radioactivite", icone: iconRadioactivite, lat: 48.75, lng: 1.9 },
  { type: "tornade", icone: iconTornade, lat: 43.2965, lng: 5.3698 },
  { type: "meteorite", icone: iconMeteorite, lat: 45.764, lng: 4.8357 },
  { type: "volcan", icone: iconVolcan, lat: 44.8378, lng: -0.5792 },
  { type: "incendie", icone: iconIncendie, lat: 43.6047, lng: 1.4442 },
  { type: "tsunami", icone: iconTsunami, lat: 47.2184, lng: -1.5536 },
  {
    type: "radioactivite",
    icone: iconRadioactivite,
    lat: 48.1173,
    lng: -1.6778,
  },
  { type: "tornade", icone: iconTornade, lat: 49.4944, lng: 0.1079 },
  { type: "meteorite", icone: iconMeteorite, lat: 50.9513, lng: 1.8587 },
  { type: "tornade", icone: iconTornade, lat: 45.1885, lng: 5.7245 },
  { type: "meteorite", icone: iconMeteorite, lat: 47.3216, lng: 5.0415 },
  { type: "volcan", icone: iconVolcan, lat: 43.6108, lng: 3.8767 },
  { type: "incendie", icone: iconIncendie, lat: 43.1242, lng: 6.1286 },
  { type: "tsunami", icone: iconTsunami, lat: 43.7009, lng: 7.2684 },
  {
    type: "radioactivite",
    icone: iconRadioactivite,
    lat: 49.2583,
    lng: 4.0317,
  },
  { type: "tornade", icone: iconTornade, lat: 47.7508, lng: 7.3359 },
  { type: "meteorite", icone: iconMeteorite, lat: 48.6921, lng: 6.1844 },
  { type: "volcan", icone: iconVolcan, lat: 49.1193, lng: 6.1757 },
  { type: "incendie", icone: iconIncendie, lat: 48.5839, lng: 7.7455 },
  { type: "tornade", icone: iconTornade, lat: 48.3904, lng: -4.4861 },
  { type: "meteorite", icone: iconMeteorite, lat: 47.9029, lng: 1.909 },
  { type: "volcan", icone: iconVolcan, lat: 48.1173, lng: -1.6778 },
  { type: "incendie", icone: iconIncendie, lat: 49.4944, lng: 0.1079 },
  { type: "tsunami", icone: iconTsunami, lat: 50.9513, lng: 1.8587 },
  {
    type: "radioactivite",
    icone: iconRadioactivite,
    lat: 43.8374,
    lng: -2.2192,
  },
  { type: "tornade", icone: iconTornade, lat: 43.2965, lng: 5.3698 },
  { type: "meteorite", icone: iconMeteorite, lat: 43.1242, lng: 6.1286 },
  { type: "volcan", icone: iconVolcan, lat: 43.7009, lng: 7.2684 },
  { type: "incendie", icone: iconIncendie, lat: 43.6108, lng: 3.8767 },
]

export {
  events,
  iconIncendie,
  iconMeteorite,
  iconRadioactivite,
  iconTornade,
  iconTsunami,
  iconVolcan,
}
