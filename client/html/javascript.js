const drx_notifications = new Vue({
    el: '#DRX_NOTIFICATIONS',
    vuetify: new Vuetify(),

    data: () => ({
        ShowSets: false,
        drx_Square: true,
        drx_ButtonClose: true,
        drx_Flat: true,
        drx_Progress: true,
        drx_Position: 'top-right',
        drx_Color: '#FF00FF',
        drx_Border: true,
        drx_BorderColor: '#FF00FF',
        drx_Duration: 5000,
        Positions: ['top-right', 'top-center', 'top-left', 'bottom-left', 'bottom-center', 'bottom-right'],

        notifyColorShow: false,
        notifyBorderColorShow: false,

        notifyBorderText: 'Activated',
    }),

    methods: {
        sendNotify(title, text, icon) {
            let progress = 'auto'
            let border = true
            if (this.drx_Progress) { progress = 'auto' } else { progress = '0' }
            if (this.drx_Border) { border = this.drx_BorderColor } else { border = false }
            this.$vs.notification({
                square: this.drx_Square,
                buttonClose: this.drx_ButtonClose,
                flat: this.drx_Flat,
                progress: progress,
                position: this.drx_Position,
                color: this.drx_Color,
                border: border,
                duration: this.drx_Duration,
                title: title,
                text: text,
                icon: icon,
            })
        },
    },
    watch: {
        drx_Square() { localStorage.setItem('drx_Square', this.drx_Square) },
        drx_ButtonClose() { localStorage.setItem('drx_ButtonClose', this.drx_ButtonClose) },
        drx_Flat() { localStorage.setItem('drx_Flat', this.drx_Flat) },
        drx_Progress() { localStorage.setItem('drx_Progress', this.drx_Progress) },
        drx_Position() { localStorage.setItem('drx_Position', this.drx_Position) },
        drx_Color() { localStorage.setItem('drx_Color', this.drx_Color) },
        drx_Border() {
            if (this.drx_Border) { this.notifyBorderText = 'Activated' } else { this.notifyBorderText = 'Deactived' };
            localStorage.setItem('drx_Border', this.drx_Border)
        },
        drx_BorderColor() { localStorage.setItem('drx_BorderColor', this.drx_BorderColor) },
        drx_Duration() { localStorage.setItem('drx_Duration', this.drx_Duration) },
    },
    mounted() {
        if (localStorage.drx_Square) { this.drx_Square = JSON.parse(localStorage.getItem('drx_Square')) }
        if (localStorage.drx_ButtonClose) { this.drx_ButtonClose = JSON.parse(localStorage.getItem('drx_ButtonClose')) }
        if (localStorage.drx_Flat) { this.drx_Flat = JSON.parse(localStorage.getItem('drx_Flat')) }
        if (localStorage.drx_Progress) { this.drx_Progress = JSON.parse(localStorage.getItem('drx_Progress')) }
        if (localStorage.drx_Color) { this.drx_Color = localStorage.getItem('drx_Color') }
        if (localStorage.drx_Position) { this.drx_Position = localStorage.getItem('drx_Position') }
        if (localStorage.drx_Border) { this.drx_Border = JSON.parse(localStorage.getItem('drx_Border')) }
        if (localStorage.drx_BorderColor) { this.drx_BorderColor = localStorage.getItem('drx_BorderColor') }
        if (localStorage.drx_Duration) { this.drx_Duration = localStorage.getItem('drx_Duration') }
    }
})

document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        window.addEventListener('message', (event) => {
            var drx = event.data;
            if (drx.update == 'ShowSets') {
                drx_notifications.ShowSets = true;
            }
            if (drx.update == 'sendNotify') {
                drx_notifications.sendNotify(drx.title, drx.text, drx.icon)
            }
            document.onkeyup = function(data) {
                if (data.which == 27) {
                    if (drx_notifications.ShowSets) {
                        drx_notifications.ShowSets = false;
                        // $.post('https://drx_mdw/citizenClose');
                        $.post('https://drx_notifications/closeSets')
                    }
                }
            };
        });
    };
};