'use strict';
class Robot {
  // implement your solution here!
  constructor(bearing, coordinates=[0,0]){
    this.bearing = bearing
    this.coordinates = coordinates
  }
  orient(direction) {
    if(direction === "east") {
      this.bearing = direction
    }
    else if (direction === "west") {
      this.bearing = direction
    }
    else if (direction === "north") {
      this.bearing = direction
    }
    else if (direction === "south") {
      this.bearing = direction
    }
    else {
      throw new Error("Invalid Robot Bearing")
    }
  }
  turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east"
    }
    else if (this.bearing === "east") {
      this.bearing = "south"
    }
    else if (this.bearing === "south") {
      this.bearing = "west"
    }
    else if (this.bearing === "west") {
      this.bearing = "north"
    }
  }
  turnLeft() {
    if (this.bearing === "north") {
      this.bearing = "west"
    }
    else if (this.bearing === "west") {
      this.bearing = "south"
    }
    else if (this.bearing === "south") {
      this.bearing = "east"
    }
    else if (this.bearing === "east") {
      this.bearing = "north"
    }
  }
  at(x, y) {
    this.coordinates = [x, y]
  }
  advance() {
    if(this.bearing === "north") {
      this.coordinates[1]++
    }
    else if (this.bearing  === "east") {
      this.coordinates[0]++
    }
    else if (this.bearing  === "south") {
      this.coordinates[1]--
    }
    else if (this.bearing  === "west") {
      this.coordinates[0]--
    }
  }
  instructions(dirLets) {
    var dirArray =  dirLets.split("") // ['L','L','R','A']
    var instructionsArray = dirArray.map( function(element) {
      if (element==="L") {
        return "turnLeft"
      }
      else if (element ==="R") {
        return "turnRight"
      }
      else if (element === "A") {
        return "advance"
      }
    })
    return instructionsArray // ["turnLeft", "turnLeft", "turnRight", "advance"]
  }
  place(placeObj){
    this.coordinates[0] = placeObj["x"];
    this.coordinates[1] = placeObj["y"];
    this.bearing = placeObj["direction"];
  }
  evaluate(dirLets) {
    var that = this
    var instructionsArray = this.instructions(dirLets)
    instructionsArray.forEach(function(element) {
      if(element === "turnLeft") {
        that.turnLeft()
      }
      else if(element === "turnRight") {
        that.turnRight()
      }
      else if(element === "advance") {
        that.advance()
      }
    })
  }
}
