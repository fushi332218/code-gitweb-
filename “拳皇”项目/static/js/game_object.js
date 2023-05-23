let GAME_OBJECTS = [];

class GameObjects {
    constructor() {
        GAME_OBJECTS.push(this);

        this.timedelta = 0;
    }

    start() {

    }

    update() {

    }

    destroy() {
        for (let i in GAME_OBJECTS) {
            if (GAME_OBJECTS[i] === this) {
                GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp = 0;

let GAME_OBJECTS_FRAME = (timestamp) => {
    for (let obj of GAME_OBJECTS_FRAME) {

    }
}