/* global L */

import batiment from "../images/batiment.png"
import bunker from "../images/bunker.png"
import building from "../images/building.png"
import grotte from "../images/grotte.png"
import metro from "../images/metro.png"
import montagne from "../images/montagne.png"
import parking from "../images/parking.png"

const iconBatiment = L.icon({
  iconUrl: batiment,
  iconSize: [30, 45],
})

const iconParking = L.icon({
  iconUrl: parking,
  iconSize: [30, 45],
})

const iconMontagne = L.icon({
  iconUrl: montagne,
  iconSize: [80, 120],
})

const iconGrotte = L.icon({
  iconUrl: grotte,
  iconSize: [30, 45],
})

const iconBuilding = L.icon({
  iconUrl: building,
  iconSize: [30, 45],
})

const iconBunker = L.icon({
  iconUrl: bunker,
  iconSize: [30, 45],
})

const iconMetro = L.icon({
  iconUrl: metro,
  iconSize: [30, 45],
})

const getRandomInRange = (min, max) => {
  return Math.random() * (max - min) + min
}

const batiments = []
for (let i = 0; i < 700; i++) {
  batiments.push({
    type: "batiment",
    icone: iconBatiment,
    lat: getRandomInRange(42.5, 51.1),
    lng: getRandomInRange(-4.8, 8.2),
    events: ["tsunami", "volcan"],
  })
}

const parkings = []
for (let i = 0; i < 700; i++) {
  parkings.push({
    type: "parking",
    icone: iconParking,
    lat: getRandomInRange(42.5, 51.1),
    lng: getRandomInRange(-4.8, 8.2),
    events: ["meteorite", "tornade", "volcan", "radioactivite"],
  })
}

const metros = []
for (let i = 0; i < 300; i++) {
  metros.push({
    type: "metro",
    icone: iconMetro,
    lat: getRandomInRange(42.5, 51.1),
    lng: getRandomInRange(-4.8, 8.2),
    events: ["meteorite", "tornade", "incendie", "volcan", "radioactivite"],
  })
}

const montagnes = []
for (let i = 0; i < 10; i++) {
  montagnes.push({
    type: "montagne",
    icone: iconMontagne,
    lat: getRandomInRange(42.5, 51.1),
    lng: getRandomInRange(-4.8, 8.2),
    events: ["tsunami"],
  })
}

const buildings = []
for (let i = 0; i < 700; i++) {
  buildings.push({
    type: "building",
    icone: iconBuilding,
    lat: getRandomInRange(42.5, 51.1),
    lng: getRandomInRange(-4.8, 8.2),
    events: ["tsunami"],
  })
}

const grottes = []
for (let i = 0; i < 100; i++) {
  grottes.push({
    type: "grotte",
    icone: iconGrotte,
    lat: getRandomInRange(42.5, 51.1),
    lng: getRandomInRange(-4.8, 8.2),
    events: ["tornade", "meteorite", "radioactivite"],
  })
}

const bunkers = []
for (let i = 0; i < 500; i++) {
  bunkers.push({
    type: "bunker",
    icone: iconBunker,
    lat: getRandomInRange(42.5, 51.1),
    lng: getRandomInRange(-4.8, 8.2),
    events: [
      "volcan",
      "tornade",
      "meteorite",
      "incendie",
      "tsunami",
      "radioactivite",
    ],
  })
}

const shelters = [
  ...batiments,
  ...parkings,
  ...metros,
  ...bunkers,
  ...montagnes,
  ...grottes,
  ...buildings,
]

export {
  shelters,
  iconBatiment,
  iconBuilding,
  iconBunker,
  iconGrotte,
  iconMetro,
  iconMontagne,
  iconParking,
}
