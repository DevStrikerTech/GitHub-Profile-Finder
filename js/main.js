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
							<img class="thumbnail avatar" src="${user.avatar_url}">
						</div>
						<div class="col-md-9">
						</div>
					</div>
				</div>
			</div>
			`);
		});
	});
});