
document.getElementById("blogs-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the main content area
    const mainContent = document.querySelector("main");

    // Replace main content with the blog section
    mainContent.innerHTML = `
        <h3>EchoLog Blogs</h3>
        <div id="blog-list"></div>
    `;

    // Remove the demo section if it exists
    const demoSection = document.querySelector(".demo-section");
    if (demoSection) {
        demoSection.remove();
    }

    // Fetch and display blog posts after switching to the blog section
    fetchBlogPosts();
});

function fetchBlogPosts() {
    console.log("Loading blog posts...");

    let blogList = document.getElementById("blog-list");

    if (!blogList) {
        console.error("Error: blog-list div not found!");
        return;
    }

    blogList.innerHTML = ""; // Clear any existing content

    let count = 0;
    blogPosts.forEach(post => {
        let blogItem = document.createElement("div");
        count++;
        let id = "post" + count;
        blogItem.classList.add("blog-post");

        blogItem.innerHTML = `
            <img src="${post.image}" alt="${post.title}" style="width: 10%; radius: 50%;">
            <div class="blog-content">
                <h2>${post.title}</h2>
                <p><strong>${post.date}</strong></p>
                <p>${post.excerpt}</p>
                <a id="${id}" href="#" onclick="onClickPost('${id}'); return false;" style="cursor: pointer;">
                    Read More.. →
                </a>
            </div>
        `;

        blogList.appendChild(blogItem);
    });

    // in the end add empty div to create space between the blog posts and footer
    blogList.innerHTML += `<div style="height: 4em;"></div>`;
    console.log("Blog posts loaded successfully!");
}

// Function to handle blog post click, it takes id as a parameter and injects the blog content into the main content area
function onClickPost(id) {
    // Get the main content area
    const mainContent = document.querySelector("main");

    // Get the blog post content
    const postContent = blogContent[id];

    if (!postContent) {
        console.error("Error: Blog post not found!");
        return;
    }

    // Replace main content with the blog post content
    mainContent.innerHTML = postContent;
}


