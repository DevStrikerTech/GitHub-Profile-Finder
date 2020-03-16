$(document).ready(function () {
	$('#searchUser').on('keyup', function (e) {
		let username = e.target.value;

		// Make request to GitHub
		$.ajax({
			url: 'https://api.github.com/users/' + username
		}).done(function (user) {
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
			`);
		});
	});
});