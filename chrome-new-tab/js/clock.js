class Clock {
    constructor(options) {
        this._el = $.el('#clock');
        this._delimiter = options.delimiter;
        this._twentyFourHourClock = options.twentyFourHourClock;
        this._setTime = this._setTime.bind(this);
        this._el.addEventListener('click', options.toggleHelp);
        this._start();
    }

    _setTime() {
        const date = new Date();
        let hours = $.pad(date.getHours());
        let amPm = '';
        let month = $.pad(date.getMonth());
        let day = $.pad(date.getDay());
        let year = $.pad(date.getFullYear());
        let morn = `&nbsp;<span class="morning">` +
            `${date.getHours() >= 12 && date.getHours() <= 5 ? 'Good Morning, Benny' : 'Hello, Benny'}</span>`;

        if (!this._twentyFourHourClock) {
            hours = date.getHours();
            if (hours > 12) hours -= 12;
            else if (hours === 0) hours = 12;

            morn =
                `&nbsp;<span class="morning">` +
                `${date.getHours() >= 12 && date.getHours() <= 5 ? 'Good Morning, Benny' : 'Hello, Benny'}</span>`;

            amPm =
                `&nbsp;<span class="am-pm">` +
                `${date.getHours() >= 12 ? 'PM' : 'AM'}</span>`;

            month = date.getMonth

            day = date.getDay

            year = date.getFullYear
        }

        const minutes = $.pad(date.getMinutes());
        this._el.innerHTML = `${morn}<br>${hours} : ${minutes}${amPm}`;
        this._el.setAttribute('datetime', date.toTimeString());
    }

    _start() {
        this._setTime();
        setInterval(this._setTime, 1000);
    }
}