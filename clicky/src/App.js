import React, { Component } from "react";
import DogCard from "./components/DogCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Dogs from "./dog.json";

// Random shuffle
function randomDog(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    Dogs,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "correct"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 8) {
      this.setState({ correctIncorrect: "Winner" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "incorrect",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledDogs = randomDog(Dogs);
    this.setState({ Dogs: shuffledDogs });
  };

  render() {
    return (

      <Wrapper>
        <Nav
          score={this.state.currentScore}
          topScore={this.state.topScore}
          correctIncorrect={this.state.correctIncorrect}
        />
        <Title>
          you can only click on an image once. If you click on more than one image, game over!
        </Title>

            {this.state.Dogs.map(Dog => (
                <DogCard
                  key={Dog.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={Dog.id}
                  image={Dog.image}
                />
            ))}
      </Wrapper>
    );
  }
}



export default App;
