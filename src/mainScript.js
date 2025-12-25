let items = document.getElementsByClassName("feed-item");

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    const btn = element.getElementsByClassName("gr-button")[0];
    btn.addEventListener("click", (e)=>{
        console.log(`Clicked: ${i}. button`);
    });
}