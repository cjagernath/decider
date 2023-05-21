document.addEventListener("DOMContentLoaded", function () {
  var previousStates = [];
  var currentState = {};
  var content = document.getElementById("content");
  var coinflipButton = document.getElementById("coinflip");
  var rngButton = document.getElementById("rng");
  var diceButton = document.getElementById("dice");
  var eightballButton = document.getElementById("eightball");
  attachEventListeners();

  function attachEventListeners() {
    coinflipButton = document.getElementById("coinflip");
    rngButton = document.getElementById("rng");
    diceButton = document.getElementById("dice");
    eightballButton = document.getElementById("eightball");

    coinflipButton.addEventListener("click", function () {
      saveState();
      content.innerHTML = ``;

      var coinImage = document.createElement("img");
      coinImage.src = "assets/blank.PNG";
      coinImage.id = "coinImage";
      coinImage.className = "coin-image";
      content.appendChild(coinImage);

      var flipagainbutton = document.createElement("button");
      flipagainbutton.textContent = "Flip a coin";
      flipagainbutton.className = "actionbtn";
      content.appendChild(flipagainbutton);

      var backbutton = document.createElement("button");
      backbutton.textContent = "Back";
      backbutton.className = "backbtn";
      content.appendChild(backbutton);

      flipagainbutton.addEventListener("click", function () {
        var value = Math.floor(Math.random() * 2);
        if (value === 1) {
          coinImage.src = "assets/heads.gif";
        } else {
          coinImage.src = "assets/tails.gif";
        }
      });

      backbutton.addEventListener("click", function () {
        restoreState();
      });
    });

    rngButton.addEventListener("click", function () {
      saveState();
      content.innerHTML = ``;

      var randElement = document.createElement("h2");
      randElement.className = "randElement";
      content.appendChild(randElement);

      var input1 = document.createElement("input");
      input1.placeholder = "Min";
      content.appendChild(input1);

      var input2 = document.createElement("input");
      input2.placeholder = "Max";
      content.appendChild(input2);

      var randagainbutton = document.createElement("button");
      randagainbutton.textContent = "Generate!";
      randagainbutton.className = "actionbtn";
      content.appendChild(randagainbutton);

      var backbutton = document.createElement("button");
      backbutton.textContent = "Back";
      backbutton.className = "backbtn";
      content.appendChild(backbutton);

      randagainbutton.addEventListener("click", function () {
        var value =
          Math.floor(
            Math.random() *
              (parseInt(input2.value) - parseInt(input1.value) + 1)
          ) + parseInt(input1.value);

        if (input1.value && input2.value) {
          randElement.textContent = value;
        }
      });

      backbutton.addEventListener("click", function () {
        restoreState();
      });
    });

    diceButton.addEventListener("click", function () {
      saveState();
      content.innerHTML = ``;

      var showDice = document.createElement("img");
      showDice.src = "assets/blank.PNG";
      showDice.id = "diceimg";
      content.appendChild(showDice);

      var showDice2 = document.createElement("img");
      showDice2.src = "assets/blank.PNG";
      showDice2.id = "diceimg";
      content.appendChild(showDice2);

      var showDice3 = document.createElement("img");
      showDice3.src = "assets/blank.PNG";
      showDice3.id = "diceimg";
      content.appendChild(showDice3);

      var resultElement = document.createElement("h2");
      resultElement.className = "resultDice";
      content.appendChild(resultElement);

      var rollOnceButton = document.createElement("button");
      rollOnceButton.textContent = "Roll 1 Dice";
      rollOnceButton.className = "actionbtn";
      content.appendChild(rollOnceButton);

      var rollTwiceButton = document.createElement("button");
      rollTwiceButton.textContent = "Roll 2 Dice";
      rollTwiceButton.className = "actionbtn";
      content.appendChild(rollTwiceButton);

      var rollThriceButton = document.createElement("button");
      rollThriceButton.textContent = "Roll 3 Dice";
      rollThriceButton.className = "actionbtn";
      content.appendChild(rollThriceButton);

      var backbutton = document.createElement("button");
      backbutton.textContent = "Back";
      backbutton.className = "backbtn";
      content.appendChild(backbutton);

      rollOnceButton.addEventListener("click", function () {
        var d1 = rollDice();
        showDice.src = "assets/blank.PNG";
        showDice2.src = displayDice(d1);
        showDice3.src = "assets/blank.PNG";
        resultElement.textContent = d1;
      });

      rollTwiceButton.addEventListener("click", function () {
        var d1 = rollDice();
        var d2 = rollDice();
        var sum = d1 + d2;
        showDice.src = displayDice(d1);
        showDice2.src = "assets/blank.PNG";
        showDice3.src = displayDice(d2);
        resultElement.textContent = sum;
      });

      rollThriceButton.addEventListener("click", function () {
        var d1 = rollDice();
        var d2 = rollDice();
        var d3 = rollDice();
        var sum = d1 + d2 + d3;
        showDice.src = displayDice(d1);
        showDice2.src = displayDice(d2);
        showDice3.src = displayDice(d3);
        resultElement.textContent = sum;
      });

      backbutton.addEventListener("click", function () {
        restoreState();
      });
    });

    function rollDice() {
      var dice = Math.floor(Math.random() * 6 + 1);
      return dice;
    }

    function displayDice(dice) {
      return `assets/${dice}.png`;
    }

    eightballButton.addEventListener("click", function () {
      saveState();
      content.innerHTML = ``;

      var resultElement = document.createElement("h2");
      resultElement.className = "resulteightball";
      content.appendChild(resultElement);

      var readagainbutton = document.createElement("button");
      readagainbutton.textContent = "Ask the Magic 8 Ball";
      readagainbutton.className = "actionbtn";
      content.appendChild(readagainbutton);

      var backbutton = document.createElement("button");
      backbutton.textContent = "Back";
      backbutton.className = "backbtn";
      content.appendChild(backbutton);

      readagainbutton.addEventListener("click", function () {
        var value = Math.floor(Math.random() * 20);
        var magic8BallResponses = [
          "It is certain.",
          "It is decidedly so.",
          "Without a doubt.",
          "Yes, definitely.",
          "You may rely on it.",
          "As I see it, yes.",
          "Most likely.",
          "Outlook good.",
          "Yes.",
          "Signs point to yes.",
          "Reply hazy, try again.",
          "Ask again later.",
          "Better not tell you now.",
          "Cannot predict now.",
          "Concentrate and ask again.",
          "Don't count on it.",
          "My reply is no.",
          "My sources say no.",
          "Outlook not so good.",
          "Very doubtful.",
        ];
        var result = magic8BallResponses[value];
        resultElement.textContent = result;
      });

      backbutton.addEventListener("click", function () {
        restoreState();
      });
    });
  }

  function saveState() {
    currentState.content = content.innerHTML;
    previousStates.push(currentState);
    currentState = {};
  }

  function restoreState() {
    if (previousStates.length > 0) {
      currentState = previousStates.pop();
      content.innerHTML = currentState.content;
      attachEventListeners();
    }
  }
});
