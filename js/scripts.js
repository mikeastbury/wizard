let STATE = {
    playerDetails: [{
        name: 'Player 1',
        id: 1,
        bet: 0,
        tricks: 0,
        totalScore: 0
    }, {
        name: 'Player 2',
        id: 2,
        bet: 0,
        tricks: 0,
        totalScore: 0
    }, {
        name: 'Player 3',
        id: 3,
        bet: 0,
        tricks: 0,
        totalScore: 0
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
    $('.testButton').click(function () {
        STATE.playerDetails.forEach(player => {
            player.name = $('#nameField-' + player.id).val();
            $('#name-'+player.id).text(player.name);

        });
        
        console.log(STATE);
    })
};

function addPlayer() {
    const numberOfPlayers = STATE.playerDetails.length + 1;
    const newPlayer = {
        name: 'Player ' + numberOfPlayers,
        id: numberOfPlayers,
        bet: 0,
        tricks: 0,
        totalScore: 0
    };
    STATE.playerDetails.push(newPlayer);
    drawPlayer(newPlayer);
}

// function givePlayersNames() {

// }

function drawTitle() {
    $('h2.title').append(
        `How many players?`
    )
}

function drawPlayer(player) {
    $('.playersAndNames').append(
        `
        <div class="columns">
        <div class="column">
        <p id="name-${player.id}">${player.name}</p>
        </div>
        <div class="column">
        <input class="input nameField" id="nameField-${player.id}" type="text" placeholder="Name">
        </div>
        </div>
        `
    )
};

function getBets() {
    $('.nextRound').html(
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