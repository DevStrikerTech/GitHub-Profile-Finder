$(document).ready(function () {
	$('#searchUser').on('keyup', function (e) {
		let username = e.target.value;

		// Make request to GitHub
		$.ajax({
			url: 'https://api.github.com/users/' + username
		}).done(function (user) {
			$.ajax({
				url: 'https://api.github.com/users/' + username + '/repos',
				data: {
					sort: 'created: asc',
					per_page: 5
				}
			}).done(function (repos) {
				$.each(repos, function (index, repo) {
					$('#repos').append(`
						<div class="card card-body">
							<div class="row">
								<div class="col-md-7">
									<strong>${repo.name}</strong>: ${repo.description}
								</div>
								<div class="col-md-3">
									<span class="badge badge-pill badge-info">Forks: ${repo.forks_count}</span>
									<span class="badge badge-pill badge-light">Watchers: ${repo.watchers_count}</span>
									<span class="badge badge-pill badge-dark">Stars: ${repo.stargazers_count}</span>
								</div>
								<div class="col-md-2">
									<a href="${repo.html_url}" target="_blank" class="btn btn-outline-light">View Repo</a>
								</div>
							</div>
						</div>
					`);
				});
			});
			$('#profile').html(`
				<div class="card">
					<div class="card-header">
						${user.name}
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-3">
								<img class="thumbnail avatar" src="${user.avatar_url}"><br><br>
								<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
							</div>
							<div class="col-md-9">
								<span class="badge badge-pill badge-secondary">Public Repos: ${user.public_repos}</span>
								<span class="badge badge-pill badge-success">Public Gists: ${user.public_gists}</span>
								<span class="badge badge-pill badge-danger">Followers: ${user.followers}</span>
								<span class="badge badge-pill badge-warning">Following: ${user.following}</span>
								<br><br>
								<ul class="list-group list-group-flush">
									<li class="list-group-item">Company: ${user.company}</li>
									<li class="list-group-item">Website/Blog: ${user.blog}</li>
									<li class="list-group-item">Location: ${user.location}</li>
									<li class="list-group-item">Member Since: ${user.created_at}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<br><br>
				<nav>
					<div class="nav nav-tabs" id="nav-tab" role="tablist">
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Latest Repos</a>
					</div>
				</nav>
				<br>
				<div class="tab-content" id="nav-tabContent">
					<div id="repos"></div>
				</div>
			`);
		});
	});
});