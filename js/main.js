$(document).ready(function(){
	$('#searchUser').on('keyup', function(e){
		let username = e.target.value;
		
		// Make request to GitHub
		$.ajax({
			url:'https://api.github.com/users/'+username
		}).done(function(user){
			$('#profile').html(`
				${user.name}
			`);
		});
	});
});