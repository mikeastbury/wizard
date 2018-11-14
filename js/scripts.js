let STATE = {
    playerNames: [],
    playerNumber: [],
    numberOfPlayers: 0,
    currentRound: 0,
    maxRounds: 0
}

function firstLoad() {
    var i = 1;
    for (i = 1; i < 4; i++ ) {
        
        drawPlayer();
    }
}

function addPlayer() {
    $('.addPlayer').click(function () {
        STATE.numberOfPlayers++;
        drawPlayer();
    });
};

function drawPlayer() {
    $('.playersAndNames').append(
        `
            <div class="columns">
                <div class="column">
                    <p>Player 1</p>
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
});