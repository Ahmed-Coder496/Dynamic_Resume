const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Get values from form inputs
    const name = (document.getElementById('Name') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    const phoneNumber = (document.getElementById('PhoneNumber') as HTMLInputElement).value;
    const projects = (document.getElementById('Projects') as HTMLInputElement).value;
    const skills = (document.getElementById('Skills') as HTMLInputElement).value;
    const youtubeChannel = (document.getElementById('YoutubeChannel') as HTMLInputElement).value;
    const instagramChannel = (document.getElementById('InstagramChannel') as HTMLInputElement)?.value;
    const linkedinProfile = (document.getElementById('LikedinProfile') as HTMLInputElement).value;
    const githubProfile = (document.getElementById('GitHubprofile') as HTMLInputElement).value;

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
    } else {
        console.error('Something went wrong');
    }
});