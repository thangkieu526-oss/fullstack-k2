var lyricText =
  "Mai ta xa rời nhau gói gém kí ức buồn đau\n" +
  "Bao yêu thương đậm sâu đến nay cũng đã phai dấu\n" +
  "Anh quên em thật mau tháng năm ta từng có nhau\n" +
  "Anh nói em không bằng người sau";

var karaoke = document.getElementById("karaoke");

var lines = lyricText.split("\n");

for (var i = 0; i < lines.length; i++) {
  var div = document.createElement("div");
  div.className = "line";

  var chars = lines[i].split("");

  for (var j = 0; j < chars.length; j++) {
    var span = document.createElement("span");
    span.className = "char";
    span.innerHTML = chars[j];
    div.appendChild(span);
  }

  karaoke.appendChild(div);
}

var chars = document.getElementsByClassName("char");
var index = 0;
var timer = null;
var isPlaying = false;

function togglePlay() {
  var btn = document.getElementById("playBtn");

  if (index >= chars.length) {
    index = 0;

    for (var i = 0; i < chars.length; i++) {
      chars[i].className = "char";
    }
  }

  if (!isPlaying) {
    isPlaying = true;
    btn.innerHTML = "⏸ PAUSE";

    timer = setInterval(function () {
      if (index >= chars.length) {
        clearInterval(timer);
        isPlaying = false;
        btn.innerHTML = "▶ PLAY";
        return;
      }
      chars[index].className += " active";
      index++;
    }, 80);
  } else {
    clearInterval(timer);
    isPlaying = false;
    btn.innerHTML = "▶ PLAY";
  }
}
