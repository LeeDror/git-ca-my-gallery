'use strickt'

var gProj = [];

function init() {
    gProj = createProjs();
}

function getProjs() {
    return gProj;
}

function getProjByID(projId) {
    return gProj.find(proj => proj.id === projId);
}

function createProjs() {
    var projs = [{
        id: '1',
        name: 'MineSweeper',
        title: 'MineSweeper game',
        //desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'projs/MineSweeper',
        publishedAt: 'May 2020',
        //labels: [Matrixes, keyboard events],
        client: 'abc',
        category: 'Games'
    },
    {
        id: '2',
        name: 'safe-content',
        title: 'safe-content users & admin',
        //desc: 'lorem ipsum lorem ipsum lorem ipsum',
        url: 'projs/safe-content',
        publishedAt: 'May 2020',
        //labels: [Matrixes, keyboard events],
        client: 'def',
        category: 'XXX'
    }]
    return projs;
}




