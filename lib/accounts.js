AccountsTemplates.configure({
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: true,
    overrideLoginErrors: true,
    sendVerificationEmail: false
});

AccountsTemplates.configureRoute('changePwd', {
	template: 'accountsFormTemplate',
	path: '/admin/change-password',
	layoutTemplate: 'adminLayout',
});

AccountsTemplates.configureRoute('signIn', {
	template: 'adminAccountsLogin',
	path: '/admin/login',
});


if (Meteor.isServer) {
	Meteor.methods({
		accountsNumberIsCero: function() {
			return Meteor.users.find({}, { limit: 1 }).count() == 0
		},
		createFirstUser: function(email, password) {
			if (Meteor.users.find({}, { limit: 1 }).count() != 0) {
				throw new Meteor.Error('account-exists', 'A account already exists');
			}

			return Accounts.createUser({
				email: email,
				password: password
		    });
		}
	});
}