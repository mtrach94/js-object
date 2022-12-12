const clock = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    display: function() {
        alert (this.hours + ':' + this.minutes + ':' + this.seconds );
    },
    addSeconds: function(sec) {
        this.seconds += sec;
        if (this.seconds >= 60) {
            let addMin = Math.floor(this.seconds / 60);
            this.seconds = this.seconds % 60;
            this.addMinutes(addMin);
        }
    },

    addMinutes: function(min) {
        this.minutes += min;
        if (this.minutes >= 60) {
            let addhr = Math.floor(this.minutes / 60);
            this.minutes = this.minutes % 60;
            this.addHours(addhr);
        }
    },

    addHours: function(hr) {
        this.hours += hr;
        if(this.hours >= 24) {
            this.hours = this.hours % 24;
        }
    },

}

let hours = Number(prompt("what hours?"));
let minutes = Number(prompt("what minutes?"));
let seconds = Number(prompt("what seconds?"));

clock.addHours(hours);
clock.addMinutes(minutes);
clock.addSeconds(seconds);

clock.display();


