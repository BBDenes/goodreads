
class Event {
    constructor(title = "teszt", location="Sopron", date="2024.09.30", imgSrc="src/pics/event.jpg", desc= "Teszt leírás") {
        this.title = title;
        this.location = location;
        this.date = date;
        this.imgSrc = imgSrc;
        this.desc = desc;
    }
    toString() {
        return `<div class="feed-item">
            <div class="user-avatar">
                <a href="#">
                    <img src="src/pics/pfp.jpg" alt="Fábián Dóra">
                </a>
            </div>

            <div class="feed-content">
                
                <div class="feed-header">
                    <a href="#" class="user-name">Fábián Dóra</a> 
                    <span class="action-text">itt járt</span>
                </div>
                <small class="timestamp">2 órája</small>

                <div class="event-card">
                    <div class="event-poster">
                        <a href="#">
                            <img src="${this.imgSrc}" alt="Borítókép">
                        </a>
                    </div>

                    <div class="event-details">
                        <a href="#" class="event-title">${this.title}</a>
                        <div class="event-organizer">
                            <span>Helyszín: </span> <a href="#">${this.location}</a>
                        </div>
                        <div class="event-organizer">
                            <span>Időpont: </span> ${this.date}
                        </div>

                        <div class="action-button-wrapper">
                            <button class="gr-button">Want to see</button>
                        </div>

                        <div class="event-description">
                            <a href="#" class="continue-link">Continue reading</a>
                        </div>
                    </div>
                </div>

                <div class="feed-footer">
                    <span>Tetszik</span> · <span>Hozzászólás</span>
                </div>

                <div class="comment-box">
                    <div class="user-avatar" style="transform: scale(0.8);">
                        <img src="src/pics/swan.jpg" alt="Én">
                    </div>
                    <input type="text" class="comment-input" placeholder="Write a comment...">
                </div>

            </div>
        </div>`;
    }
}



let destinations = [
    "becs",
    "balaton",
    "valentin",
    "margit",
    "sopron",
    "folly",
    "karneval"
];

let pages = [
    new Event("Bécsi kirándulás", "Bécs", "2024.12.06", "src/pics/becs/0.jpg", "Gyere velünk egy izgalmas bécsi kirándulásra! Fedezd fel a város nevezetességeit, élvezd a helyi konyhát, és tölts el egy felejthetetlen napot velünk."),
    new Event("Balatoni nyaralás", "Balaton", "2025.07.10", "src/pics/balaton/0.jpg", "Töltsd velünk a nyarat a Balaton partján! Vízparti programok, napozás, vitorlázás és finom ételek várnak rád egy felejthetetlen nyaralás során."),
    new Event("Valentin-napi programok", "Budapest", "2025.02.14", "src/pics/valentin/0.jpg", "Ünnepeld a szerelmet velünk ezen a különleges napon! Romantikus programok, vacsora lehetőségek és meglepetések várnak rád és párodra."),
    new Event("Margitszigeti piknik", "Margitsziget", "2024.04.16", "src/pics/margit/0.jpg", "Csatlakozz hozzánk egy kellemes piknikre a Margitszigeten! Hozd el a barátaidat, élvezzétek a természetet és a finom ételeket egy szép nyári napon."),
    new Event("Soproni városnézés", "Sopron", "2025.06.17-19", "src/pics/sopron/0.jpg", "Fedezd fel Sopron történelmi városát velünk! Látogass el a nevezetességekhez, ismerd meg a helyi kultúrát és élvezd a város hangulatát egy izgalmas nap során."),
    new Event("Balaton 2.0", "Folly Arborétum, Révfülöp", "2025.07.23-24", "src/pics/folly/0.jpg", "Stuff in arborétum"),
    new Event("Karnevál", "Szombathely", "2025.08.23", "src/pics/karneval/0.jpg", "Savaria karnevál")
];

let jelszo = "beby";
let input = "";
while (input !== jelszo) {
    input = prompt("Add meg a jelszót!");
}

document.getElementsByClassName("feed-container")[0].innerHTML = "";
for (const element of pages) {
    document.getElementsByClassName("feed-container")[0].innerHTML += element.toString();
}

let items = document.getElementsByClassName("feed-item");

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    const btn = element.getElementsByClassName("gr-button")[0];
    btn.addEventListener("click", (e)=>{
        console.log(`Clicked: ${i}. button`);
        window.location.href = `subpages/subpage_${destinations[i]}.html?page=${destinations[i]}`;
    });
}








        