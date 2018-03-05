import React, { Component } from 'react';
import lodash from 'lodash';
import rafSchedule from 'raf-schd';
import SpriteAnimator from 'react-sprite-animator'

import GameDesign from './Game.css'

import gardenBG from './locations/garden.jpg'

import finalWaveHUD from './HUD/finalWave.png'
import comingZombiesHUD from './HUD/comingZombies.png'
import sunIndicatorHUD from './HUD/sunIndicator.png'
import sunFlower from './weaponry/sunFlower.png'
import peaShooter from './weaponry/peaShooter.png'
import wallnut from './weaponry/wallnut.png'

import lawnMower from './lawnMower/lawnMower.png'

import sunFlower_idle from './weaponry/sunFlower_idle.gif'

class Game extends Component {

  constructor(props) {
    super(props);
    this.createSprite = this.createSprite.bind(this);
    this.state = {
      date: new Date(),
      plants: ["sunFlower", "peaShooter", "wallnut"],
      selectedPlant: null,
      plantIsSelected: false,
      plantIsPlaced: false,
    };
  }

  render() {
    return (
      <div className="Game">
        <header className="Game-header">
        </header>
        <div className="Game-intro" onClick={this.placePlant.bind(this)}>
          <img id="map" src={gardenBG} alt="garden" width = '1900px' height='800px' />
          <table id="weaponry" onClick={this.addPlant.bind(this)}>
            <tr>
              <th>
                <p>50</p>
                <img id={this.state.plants[0]} src={sunFlower} alt="sunFlower"/>
              </th>
              <th>
                <p>100</p>
                <img id={this.state.plants[1]} src={peaShooter} alt="peaShooter"/>
              </th>
            </tr>
            <tr>
              <th>
                <p>50</p>
                <img id={this.state.plants[2]} src={wallnut} alt="wallnut"/>
              </th>
              <th>
                {/*<img src={peaShooter} alt="peaShooter"/>*/}
              </th>
            </tr>
          </table>
          <div id="sunCounterTableHUD">
            <img src={sunIndicatorHUD} alt="sunIndicator" width="65px" height="65px"/>
            <div>50</div>
          </div>
          <div id="zombieArrivalIndicator">
            <div id="zombiesUnreachedAreaIndicator">
              <div id="zombiesReachedAreaIndicator"></div> {/*Width is currently 0px, which shows that zombies are about to come*/}
              <img id="finalWaveHUD" src={finalWaveHUD} alt="finalWave" width="38px" height="34px" />
              <img id="comingZombiesHUD" src={comingZombiesHUD} alt="comingZombies" width="51px" height="55px" />
            </div>
          </div>
          <div id="menuBtn">Menu</div>
          <div id="gameplayArea"></div>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      </div>
    );
  }

  componentDidMount() {
    var gameplayArea = document.getElementById('gameplayArea');
    for (var i=0;i<5*9;i++) {
      var div = document.createElement('div');
      div.id = 'grid-item';  
      gameplayArea.appendChild(div);
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    var gamePlayground = document.getElementsByClassName("Game-intro")[0];
    var lawnMowers = document.createElement('div');
    lawnMowers.className = 'lawnMowers';
    for (var i = 0; i < 5; i++) {
      this.createSprite('lawnMower', lawnMower, 85, 61, lawnMowers)
    };
    gamePlayground.appendChild(lawnMowers);
  }

  //<SpriteAnimator sprite={sunFlower_idle} width={70} height={70} />

  tick() {
    this.setState({
      date: new Date()
    });
  }

  createSprite(id, src, width, height, parent) {
    var sprite = document.createElement('img');
    sprite.id = id;
    sprite.src = src;
    sprite.width = width;
    sprite.height = height;
    parent.appendChild(sprite);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  addPlant(e) {
    var id = e.target.id;
    var plant = document.getElementById(id);
    this.setState({plantIsSelected: true});
    this.setState({selectedPlant: id});
    document.getElementById('gameplayArea').style.opacity = '0.6';
  }

  placePlant() {
    if (this.state.plantIsSelected) {
      this.setState({plantIsSelected: false});
      // console.log(this.state.selectedPlant);
      document.getElementById('gameplayArea').style.opacity = '0';
      document.addEventListener("click", function(e) {
        console.log(e.pageX);
        console.log(e.pageY);
      });
    }
  }

}

export default Game;
