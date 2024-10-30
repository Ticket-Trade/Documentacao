function toggleDarkMode() {
    bodyVar = document.getElementsByTagName("body");
    bodyVar[0].classList.toggle('dark-mode');
}

let imgs = document.querySelectorAll('.imgProfile');

let idsArr = ["Lallindo", "marcelodepauladev", "lianzito", "Fujimiya"];
let data = [];

import {
    Octokit
} from "https://esm.sh/octokit";

const octokit = new Octokit({
    auth: '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'
});

async function getUserProfile(username) {
    try {
        const response = await octokit.rest.users.getByUsername({
            username: username,
        });
        data.unshift(response.data.avatar_url);
    } catch (error) {
        console.error(`Erro: ${error.message}`);
    }
}

getUserProfile('Lallindo');