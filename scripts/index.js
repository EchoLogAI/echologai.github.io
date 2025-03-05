
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


// Function to handle the loading of Privacy Policy
function loadPrivacyPolicy() {
    const mainContent = document.querySelector("main");

    // Replace main content with the Privacy Policy section
    mainContent.innerHTML = `
    <div class="privacy-container">
        <h1>Privacy Policy for Chrome Extension: EchoLog AI Voice Assistant</h1>

        <p><strong>Last Updated: March 5, 2025</strong></p>

        <section>
            <h2>1. Introduction</h2>
            <p>EchoLog AI Voice Assistant Chrome Extension is committed to protecting your privacy. This Privacy Policy explains how our extension handles data, ensuring transparency and security for all users.</p>
        </section>

        <section>
            <h2>2. Data Collection</h2>
            <p>We do not collect, store, or share any personal or sensitive user data. EchoLog operates primarily on your local device, and no data is transmitted to external servers unless explicitly required for intent understanding. For this purpose, we use Gemini APIs, which are large language models (LLMs) that help us process and understand voice commands. However, these APIs do not store or retain any personal data; they only process the data locally and are used solely to enhance the functionality of the voice assistant.</p>
        </section>

        <section>
            <h2>3. Permissions</h2>
            <p>The Chrome extension requests microphone access solely for processing voice commands locally. The voice data is sent to Gemini APIs for intent understanding via "gemini-2.0-flash". No voice data is recorded, stored, or shared with any third party, and the data is processed temporarily to ensure accurate responses to your commands.</p>
        </section>

        <section>
            <h2>4. Third-Party Services</h2>
            <p>EchoLog does not use third-party tracking, analytics, or data-sharing services. Your activity within the extension remains private.</p>
        </section>

        <section>
            <h2>5. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Any changes will be reflected on this page, and we encourage users to review the policy from time to time.</p>
        </section>

        <section>
            <h2>6. Contact Us</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:[echolog07@gmail.com]">echolog07@gmail.com</a>.</p>
        </section>
    </div>
    <div style="height: 4em;"></div>
    `;

    // Remove the demo section if it exists
    const demoSection = document.querySelector(".demo-section");
    if (demoSection) {
        demoSection.remove();
    }
}

// Event listener for the Privacy button
document.getElementById("privacy-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    loadPrivacyPolicy();
});

