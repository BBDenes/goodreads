
let destinations = [
    "subpages/gumibogyo.html",
    "subpages/becs.html",
    "subpages/valentines.html",
    "subpages/margit-sziget.html",
    "subpages/sopron.html"
];

document.getElementById("home").addEventListener("click", (e)=>{
    document.getElementsByClassName("feed-container")[0].innerHTML = "";
    for (const element of destinations) {
        document.getElementsByClassName("feed-container")[0].innerHTML += new Event().toString();
    }
});

let items = document.getElementsByClassName("feed-item");

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    const btn = element.getElementsByClassName("gr-button")[0];
    btn.addEventListener("click", (e)=>{
        console.log(`Clicked: ${i}. button`);
        // switch to becs.html
        window.location.href = "subpages/becs.html";
    });
}

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
                    <span class="action-text">érdeklődik az esemény iránt</span>
                </div>
                <small class="timestamp">20 órája</small>

                <div class="event-card">
                    <div class="event-poster">
                        <a href="#">
                            <img src="https://drive.google.com/file/d/1IO1wyHM1C4XjfyzikPStG7oEzwRy1vwS/view?usp=sharing" alt="Koncert plakát">
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
                        <img src="https://i.pravatar.cc/150?img=11" alt="Én">
                    </div>
                    <input type="text" class="comment-input" placeholder="Write a comment...">
                </div>

            </div>
        </div>`;
    }
}



        