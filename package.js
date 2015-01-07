Package.describe({
	name: 'orionjs:admin',
	summary: 'Simple and powerful admin generator',
	version: '0.5.1',
	git: 'https://github.com/orionjs/admin'
});

Npm.depends({
	"spin.js": "2.0.1"
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'orionjs:core@0.1.0',
		'meteor-platform',
		'less',
		'iron:router@1.0.1', 
		'zimme:iron-router-active@1.0.0', 
		'aldeed:delete-button@1.0.0', 
		'useraccounts:bootstrap@1.2.3',
		'manuelschoebel:ms-seo@0.4.1',
		]);

	api.imply([
		'accounts-password',
		'iron:router',
		'useraccounts:bootstrap',
		'less',
		'manuelschoebel:ms-seo'
		]);

	api.addFiles([
		'lib/api/main.js',
		'lib/api/add-sidebar-tab.js',
		'lib/api/add-admin-subscription.js',
		'lib/routes.js',
		'lib/accounts.js',
		]);

	api.addFiles([
		'.npm/package/node_modules/spin.js/spin.js',

		'lib/views/base/footer/footer.html',
		'lib/views/base/header/header.html',
		'lib/views/base/layouts/admin/layout.html',
		'lib/views/base/layouts/admin/layout.js',
		'lib/views/base/layouts/admin/layout.less',
		'lib/views/base/layouts/out-admin/layout.html',
		'lib/views/base/layouts/out-admin/layout.js',
		'lib/views/base/loading/loading.html',
		'lib/views/base/loading/loading.js',
		'lib/views/base/loading/loading.less',
		'lib/views/base/sidebar/sidebar.html',
		'lib/views/base/sidebar/sidebar.js',
		'lib/views/base/sidebar/sidebar.less',
		'lib/views/dictionary/update/update.html',
		'lib/views/dictionary/update/update.js',
		'lib/views/dictionary/update/update.less',
		'lib/views/config/password/password.html',
		'lib/views/config/password/password.js',
		'lib/views/config/password/password.less',
		'lib/views/config/update/update.html',
		'lib/views/config/update/update.js',
		'lib/views/config/update/update.less',
		'lib/views/entities/create/create.html',
		'lib/views/entities/create/create.js',
		'lib/views/entities/delete/delete.html',
		'lib/views/entities/delete/delete.js',
		'lib/views/entities/index/index.html',
		'lib/views/entities/index/index.js',
		'lib/views/entities/index/index.less',
		'lib/views/entities/update/update.html',
		'lib/views/entities/update/update.js',
		'lib/views/accounts/setup/setup.html',
		'lib/views/accounts/setup/setup.js',
		'lib/views/accounts/login/login.html',
		'lib/views/accounts/login/login.js',

		], 'client');

	api.export('orion');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('orionjs:admin');
	api.addFiles('orionjs:admin-tests.js');
});
