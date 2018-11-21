let STATE = {
    playerDetails: [{
        name: 'Player 1'
    }, {
        name: 'Player 2'
    }, {
        name: 'Player 3'
    }],
    currentRound: 0,
    maxPlayers: 5,
    maxRounds: 0
}

function init() {
    attachEventHandlers();
    STATE.playerDetails.forEach(player => {
        drawPlayer(player);
    });
}

function createPlayerArray() {
    STATE.numberOfPlayers++;
    const players = STATE.playerDetails;
    const playerNumber = STATE.numberOfPlayers;
    players.push(playerNumber);
    console.log(players);
}

function addPlayer() {
    const newPlayer = {name: 'Mike'};
    STATE.playerDetails.push(newPlayer);
    drawPlayer(newPlayer);
}

function attachEventHandlers() {
    $('.addPlayer').click(function () {
        addPlayer();
        //remove add player button at max
        if (STATE.playerDetails.length > STATE.maxPlayers) {
            $('.addPlayer').addClass('hidden');
        }
    });
};


function drawPlayer(player) {
    $('.playersAndNames').append(
        `
        <div class="columns">
        <div class="column">
        <p>${player.name}</p>
        </div>
        <div class="column">
        <input class="input" type="text" placeholder="Name">
        </div>
        </div>
        `
    )
};


// function testButton() {
//     $('.testButton').click(function() {

//     })
// }

$(document).ready(function () {
    // firstLoad();
    // addPlayer();
    // addPlayerButton();
    // createPlayerArray();
    init();
});