// ===== QUIZ SYSTEM =====
document.getElementById("quizForm").addEventListener("submit", function(e){
    e.preventDefault();

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    
    if(!q1 || !q2){
        document.getElementById("quizResult").innerText = "Please answer all questions!";
        document.getElementById("quizResult").style.color = "red";
        return;
    }

    let score = parseInt(q1.value) + parseInt(q2.value);
    document.getElementById("quizResult").style.color = "green";
    document.getElementById("quizResult").innerText = "Your Score: " + score + "/2";
});

// ===== COMMENT SECTION =====
document.getElementById("postComment").addEventListener("click", function() {
    let comment = document.getElementById("commentInput").value.trim();

    if(comment === ""){
        alert("Comment cannot be empty!");
        return;
    }

    let commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-box");
    commentDiv.textContent = comment;

    document.getElementById("commentList").appendChild(commentDiv);
    document.getElementById("commentInput").value = "";
});
