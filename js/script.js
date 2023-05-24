class Mode {
    constructor(dark) {
        this.dark = dark;
    }

    moveElement (icon1, icon2) {
        icon1.style.position="absolute"
        icon1.style.top = "-30px"
        icon1.style.fontSize = "15px"

        icon2.style.position="relative"
        icon2.style.fontSize = "40px"
        icon2.style.top = "0px"
    }
    switchMode() {
        this.dark = !this.dark

        var sunnyIcon = document.getElementById("switch-mode-sun")
        var darkIcon = document.getElementById("switch-mode-moon")

        if (this.dark) {
            darkIcon.style.left="0px"

            this.moveElement(sunnyIcon, darkIcon)
            sunnyIcon.style.left = "40%"
        } else {
            sunnyIcon.style.left = "0px"

            this.moveElement(darkIcon, sunnyIcon)
            darkIcon.style.left="40%"
        }

    }
}

var modo = new Mode(false)