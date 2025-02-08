// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Fetching blog posts...");

//     fetch("blog-data/posts.json")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(posts => {
//             console.log("Blog posts fetched successfully:", posts);
//             let blogList = document.getElementById("blog-list");

//             if (!blogList) {
//                 console.error("Error: blog-list div not found!");
//                 return;
//             }

//             posts.forEach(post => {
//                 let blogItem = document.createElement("div");
//                 blogItem.classList.add("blog-post");
//                 blogItem.innerHTML = `
//                     <img src="${post.image}" alt="${post.title}">
//                     <h2>${post.title}</h2>
//                     <p><strong>${post.date}</strong></p>
//                     <p>${post.excerpt}</p>
//                     <a href="${post.url}">Read More →</a>
//                 `;
//                 blogList.appendChild(blogItem);
//             });
//         })
//         .catch(error => console.error("Error loading blog posts:", error));
// });
document.addEventListener("DOMContentLoaded", function () {
    console.log("Fetching blog posts...");

    fetch("blog-data/posts.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            console.log("Blog posts fetched successfully:", posts);
            let blogList = document.getElementById("blog-list");

            if (!blogList) {
                console.error("Error: blog-list div not found!");
                return;
            }

            posts.forEach(post => {
                let blogItem = document.createElement("div");
                blogItem.classList.add("blog-post");

                // Corrected structure for Flexbox alignment
                blogItem.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <div class="blog-content">
                        <h2>${post.title}</h2>
                        <p><strong>${post.date}</strong></p>
                        <p>${post.excerpt}</p>
                        <a href="${post.url}">Read More →</a>
                    </div>
                `;

                blogList.appendChild(blogItem);
            });
        })
        .catch(error => console.error("Error loading blog posts:", error));
});
