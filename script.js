let info = {
    browser: navigator.userAgent,
    platform: navigator.platform
};

localStorage.setItem("info", JSON.stringify(info));

let data = JSON.parse(localStorage.getItem("info"));

document.getElementById("footer").innerHTML =
    "<strong>Browser:</strong> " + data.browser + "<br>" +
    "<strong>Platform:</strong> " + data.platform;


fetch("https://jsonplaceholder.typicode.com/posts/19/comments")
    .then(response => response.json())
    .then(data => {
        const commentsDiv = document.getElementById("comments");

        data.slice(0, 5).forEach(comment => {
            const div = document.createElement("div");
            div.classList.add("comment-card");

            div.innerHTML = `
                <h4>${comment.name}</h4>
                <p>${comment.body}</p>
                <span>${comment.email}</span>
            `;

            commentsDiv.appendChild(div);
        });
    });


setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 60000);


document.getElementById("closeBtn").onclick = () => {
    document.getElementById("modal").style.display = "none";
};


setInterval(() => {
    const hour = new Date().getHours();

    if (hour >= 7 && hour < 21) {
        document.body.classList.remove("dark");
    } else {
        document.body.classList.add("dark");
    }
}, 60000); 

document.getElementById("themeBtn").onclick = () => {
    document.body.classList.toggle("dark");
};