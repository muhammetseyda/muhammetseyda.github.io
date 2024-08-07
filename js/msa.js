const usernames = ['muhammetseyda', 'yazilimcisarman'];

async function fetchRepos() {
    try {
        for (const username of usernames) {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const repos = await response.json();

            const reposContainer = document.getElementById('repos');
            repos.forEach(repo => {
                if (repo.description != null) {
                const repoElement = document.createElement('div');
                repoElement.classList.add('grid-list-items__item', 'list-items__item');
                repoElement.style.marginBottom = '100px'; 
                var reponame = repo.name.toUpperCase();
                repoElement.innerHTML = `
                    <div class="list-items__item-header">
                        <h3 class="list-items__item-title"><a href="${repo.html_url}" style="color:black;" target="_blank">${reponame}</a></h3>
                    </div>
                    <div class="list-items__item-text">
                        <p>
                        ${repo.description ? repo.description : 'Açıklama yok.'}
                        </p>
                    </div>
                    <a href="${repo.html_url}" target="_blank">Repo Link</a>
                `;
                reposContainer.appendChild(repoElement);}
            });
        }
    } catch (error) {
        console.error('Error fetching repos:', error);
    }
}

fetchRepos();
