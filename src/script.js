import { redirectToAuthCodeFlow, getAccessToken } from './authCodeWithPkce';
const clientId = 'b16fb2a8cf5049cfad1d8fbae4b59287';
const params = new URLSearchParams(window.location.search);
const code = params.get('code');

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    console.log(profile);
    populateUI(profile);
}

async function fetchProfile(token) {
    const result = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET', headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

function populateUI(profile) {
    document.getElementById("displayName").innerText = profile.display_name;
    if (profile.images[0]) {
        const profileImage = new Image(200, 200);
        profileImage.src = profile.images[0].url;
        document.getElementById("avatar").appendChild(profileImage);
    }
}
