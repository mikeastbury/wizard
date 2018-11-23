let STATE = {
    playerDetails: [{
        name: 'Player 1',
        bet: '',
        tricks: '',
        totalScore: ''
    }, {
        name: 'Player 2',
        bet: '',
        tricks: '',
        totalScore: ''
    }, {
        name: 'Player 3',
        bet: '',
        tricks: '',
        totalScore: ''
    }], 
    currentRound: 0,
    maxPlayers: 5,
    maxRounds: 0
}

function init() {
    drawTitle();
    attachEventHandlers();
    STATE.playerDetails.forEach(player => {
        drawPlayer(player);
    });
}


function attachEventHandlers() {
    $('.resetStart').click(function () {
        $('.playersAndNames').html("");
        init();
    });
    $('.addPlayer').click(function () {
        addPlayer();
        //remove add player button at max
        if (STATE.playerDetails.length > STATE.maxPlayers) {
            $('.addPlayer').addClass('hidden');
        }
    });
    $('.nextRound').click(function () {
        getBets();
    });
    $('.testButton').click(function() {
        let enteredName = $('.nameField').val();
        let userName = {name: enteredName};
        STATE.playerDetails.push(userName);
        console.log(STATE);
    })
};

function addPlayer() {
    const numberOfPlayers = STATE.playerDetails.length + 1;
    const newPlayer = {name: 'Player '+ numberOfPlayers};
    STATE.playerDetails.push(newPlayer);
    drawPlayer(newPlayer);
}

// function givePlayersNames() {

// }

function drawTitle(){
    $('h2.title').append (
        `How many players?`
    )
}

function drawPlayer(player) {
    $('.playersAndNames').append(
        `
        <div class="columns">
        <div class="column">
        <p>${player.name}</p>
        </div>
        <div class="column">
        <input class="input nameField" type="text" placeholder="Name">
        </div>
        </div>
        `
    )
};

function getBets() {
    $('.nextRound').html (
`<div class="columns">
<div class="tile">
    <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
            <p class="title">Player 1</p>
            <div class="columns betSection">
                <div class="column">
                    <p class="bet">Bet: 3</p>
                </div>
                <div class="column">
                    <img src="img/arrow.png" class="arrow betIncrease">
                    <img src="img/arrow.png" class="arrow betDecrease">
                </div>
            </div>
            <div class="columns trickSection">
                    <div class="column">
                        <p class="bet">Tricks: 3</p>
                    </div>
                    <div class="column">
                        <img src="img/arrow.png" class="arrow betIncrease">
                        <img src="img/arrow.png" class="arrow betDecrease">
                    </div>
                </div>
        </article>
    </div>
</div>
</div>`
    )
};


$(document).ready(function () {
    init();
});