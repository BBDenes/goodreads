const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get('page');

const dir = `../src/pics/${page}/`;
const numberOfPics = {
    'becs': 22,
    'balaton': 7,
    'valentin': 2,
    'margit': 3,
    'sopron': 20,
    'karneval': 3,
    'folly': 11

};
const picType = '.jpg'; 

const coverImg = document.getElementById('travel-cover');
coverImg.src = dir + '0' + picType;

const photoGrid = document.getElementsByClassName('photo-grid')[0];

for (let i = 1; i <= numberOfPics[page]; i++) {
    const kep = document.createElement('img');
    
    kep.src = dir + i + picType;
    
    kep.alt = 'Utazási kép ' + i;

    photoGrid.appendChild(kep);
}