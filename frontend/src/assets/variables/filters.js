import tornade from "../images/tornade.png"
import meteorite from "../images/meteorite.png"
import volcan from "../images/volcan.png"
import incendie from "../images/incendie.png"
import tsunami from "../images/tsunami.png"
import radioactivite from "../images/radioactivite.png"

const filters = [
  {
    id: 1,
    type: "tornade",
    image: tornade,
    selected: false,
  },
  {
    id: 2,
    type: "meteorite",
    image: meteorite,
    selected: false,
  },
  {
    id: 3,
    type: "volcan",
    image: volcan,
    selected: false,
  },
  {
    id: 4,
    type: "incendie",
    image: incendie,
    selected: false,
  },
  {
    id: 5,
    type: "tsunami",
    image: tsunami,
    selected: false,
  },
  {
    id: 6,
    type: "radioactivite",
    image: radioactivite,
    selected: false,
  },
]

export { filters }
