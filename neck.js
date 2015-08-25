var guitarNeck = [
    ['_', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
    ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'],
    ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#'],
    ['D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F'],
    ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']
]

var ukuleleNeck = [
    ['_', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'],
    ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']
]

var guitarDict = {};
var ukuleleDict = {};
var guitarTable = generateTable(guitarNeck, guitarDict);
var ukuleleTable = generateTable(ukuleleNeck, ukuleleDict);

function generateTable(neckMatrix, dictForFill) {
    var table = document.createElement('table');
    table.style.border = '1px solid black';
    for (var i = 0; i < neckMatrix.length; i++) {
        var tr = table.insertRow();
        for (var j = 0; j < neckMatrix[i].length; j++) {
            var chord = neckMatrix[i][j];
            var td = tr.insertCell();
            td.style.width = '30px';
            td.style.border = '1px solid black';
            td.appendChild(document.createTextNode(chord));
            table.rows[i].cells[j].onclick = function () {
                onCellClick(this);
            };
            if (chord in dictForFill)
                dictForFill[chord].push(td);
            else
                dictForFill[chord] = [td];
        }
    }
    return table;
}

function onCellClick(tableCell){
    var chordName = tableCell.innerHTML;
    highlightChord(chordName, guitarDict);
    highlightChord(chordName, ukuleleDict);
}

function highlightChord(chordName, chordDict) {
    for (chord in chordDict) {
        if (chordDict.hasOwnProperty(chord)) {
            var cells = chordDict[chord];
            for (cell in cells) {
                if (chordName == chord)
                    cells[cell].bgColor = "green";
                else
                    cells[cell].bgColor = "white";
            }
        }
    }
}
