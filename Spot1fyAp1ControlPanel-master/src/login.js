//https://developer.spotify.com/documentation/general/guides/app-settings/
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI 
export const clientId = "YourClientIDfromSpotifydashboard";
export const redirectUri = "ex. http://localhost:3000/";


//https://developer.spotify.com/documentation/general/guides/scopes/#app-remote-control
export const scopes = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "app-remote-control",
    "user-modify-playback-state"
];