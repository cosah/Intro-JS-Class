var rl = document.getElementById("random_link"),
    urls = ["https://www.google.com",
            "http://www.atom.io",
            "http://www.github.com",
            "http://www.duckduckgo.com",
            "https://www.wolframalpha.com/"];
    rand = Math.floor(Math.random() * 5);

rl.innerHTML = "<a href=" + urls[rand] + ">Random Site!</a>";
