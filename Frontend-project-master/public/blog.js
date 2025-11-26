function addComment() {
    window.event.preventDefault();

    var name = document.getElementById("userName").value;
    var userComm = document.getElementById("userComment").value;
    console.log("Name: ", name, "comment ", userComm);

    var data = { 'name': name, "comment": userComm };
    axios.post('/blog/comment', data);
    renderComments();
}

function renderComments() {
    axios.get("/blog/comment").then(function(response) {
        var comments = response.data;
        console.log(comments);

        var commentsContainer = document.getElementById("commentsContainer");
        commentsContainer.innerHTML = '';

        for (index = 0; index < comments.length; index++) {
            var comment = comments[index];
            var container = document.createElement("div");
            container.className = "ownComments";
            var heading = document.createElement("h5");
            heading.className = "ownHeading";
            heading.innerHTML = comment.name;
            var p = document.createElement("p");
            p.innerHTML = comment.comment;
            container.appendChild(heading);
            container.appendChild(p);
            commentsContainer.appendChild(container);
        }
    });
}