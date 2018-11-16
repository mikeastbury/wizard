let STATE = {
    playerDetails: [],
    numberOfPlayers: 1,
    currentRound: 0,
    maxRounds: 0
}

function firstLoad() {
    var i = 0;
    for (i = 0; i < 3; i++) {
        drawPlayer();
        createPlayerArray();
    }
}

function createPlayerArray() {
    STATE.numberOfPlayers++;
    const players = STATE.playerDetails;
    const playerNumber = STATE.numberOfPlayers;
    players.push(playerNumber);
    console.log(players);
}

function addPlayer() {
    $('.addPlayer').click(function() {
        drawPlayer();
        createPlayerArray();
        //remove add player button at max
        if (STATE.numberOfPlayers > 6) {
            $('.addPlayer').addClass('hidden');
        }
    });
};

// function addName() {
//     $('.addName').click(function() {
//         let name = "Mike";
//         let players = STATE.playerDetails;
//     })
// }

function drawPlayer(createPlayerArray) {
    const playerNumber = STATE.numberOfPlayers;
    $('.playersAndNames').append(
        `
            <div class="columns">
                <div class="column">
                    <p>Player ${playerNumber}</p>
                </div>
                <div class="column">
                    <input class="input" type="text" placeholder="Name">
                </div>
            </div>
        `
    )
};



$(document).ready(function () {
    firstLoad();
    addPlayer();
    createPlayerArray();
});