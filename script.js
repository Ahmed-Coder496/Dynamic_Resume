"use strict";
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    event.preventDefault();
    // Get values from form inputs
    const name = ((_a = document.getElementById('Name')) === null || _a === void 0 ? void 0 : _a.value) || '';
    const email = ((_b = document.getElementById('Email')) === null || _b === void 0 ? void 0 : _b.value) || '';
    const phoneNumber = ((_c = document.getElementById('PhoneNumber')) === null || _c === void 0 ? void 0 : _c.value) || '';
    const projects = ((_d = document.getElementById('Projects')) === null || _d === void 0 ? void 0 : _d.value) || '';
    const skills = ((_e = document.getElementById('Skills')) === null || _e === void 0 ? void 0 : _e.value) || '';
    const youtubeChannel = ((_f = document.getElementById('YoutubeChannel')) === null || _f === void 0 ? void 0 : _f.value) || '';
    const instagramChannel = ((_g = document.getElementById('InstagramChannel')) === null || _g === void 0 ? void 0 : _g.value) || '';
    const linkedinProfile = ((_h = document.getElementById('LikedinProfile')) === null || _h === void 0 ? void 0 : _h.value) || '';
    const githubProfile = ((_j = document.getElementById('GitHubprofile')) === null || _j === void 0 ? void 0 : _j.value) || '';
    // Resume HTML content
    const resumeHTML = `
        <h2><b>RESUME</b></h2>

        <h3><b>Information</b></h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone Number:</b> ${phoneNumber}</p>

        <h3><b>Projects:</b></h3>
        <p>${projects}</p>

        <h3><b>Skills:</b></h3>
        <p>${skills}</p>

        <h3><b>YouTube Channel:</b></h3>
        <p>${youtubeChannel}</p>

        <h3><b>Instagram Channel:</b></h3>
        <p>${instagramChannel}</p>

        <h3><b>LinkedIn Profile:</b></h3>
        <p>${linkedinProfile}</p>

        <h3><b>GitHub Profile:</b></h3>
        <p>${githubProfile}</p>
    `;
    // Update the resume display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Something went wrong');
    }
});
