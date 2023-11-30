// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

const postsEl = document.getElementById("posts");

async function getPosts() {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await postsResponse.json();

  const filteredPosts = posts.filter((post) => post.userId == 1);

  filteredPosts.forEach((post) => {
    const div = document.createElement("div");
    div.setAttribute("class", "post");
    div.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
    postsEl.appendChild(div);
  });
}

getPosts();

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

const postsWithCommentsEl = document.getElementById("postsWithComments");

async function getPostsWithComments() {
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await postsResponse.json();

  const commentsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const comments = await commentsResponse.json();

  posts.forEach((post) => {
    const postComments = comments.filter(
      (comment) => comment.postId == post.id
    );

    let allComments = "";
    postComments.forEach((comment) => {
      allComments += `<p>${comment.name}</p>
                  <p>${comment.body}</p>`;
    });

    const div = document.createElement("div");
    div.setAttribute("class", "post");
    div.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p> 
                     <h3>Comments</h3> 
                     <div>${allComments}</div>`;

    postsWithCommentsEl.appendChild(div);
  });
}

getPostsWithComments();
