Package.describe({
	name: 'orionjs:admin',
	summary: 'Simple and powerful admin generator',
	version: '0.3.0',
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
		'orionjs:styles@0.0.2',
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

		'lib/views/base/accounts/formTemplate.html',
		'lib/views/base/accounts/formTemplate.js',
		'lib/views/base/accounts/formTemplate.less',
		'lib/views/base/footer/footer.html',
		'lib/views/base/header/header.html',
		'lib/views/base/layout/layout.html',
		'lib/views/base/layout/layout.js',
		'lib/views/base/layout/layout.less',
		'lib/views/base/loading/loading.html',
		'lib/views/base/loading/loading.js',
		'lib/views/base/loading/loading.less',
		'lib/views/base/sidebar/sidebar.html',
		'lib/views/base/sidebar/sidebar.js',
		'lib/views/base/sidebar/sidebar.less',
		'lib/views/dictionary/update/update.html',
		'lib/views/dictionary/update/update.js',
		'lib/views/dictionary/update/update.less',
		'lib/views/entities/create/create.html',
		'lib/views/entities/create/create.js',
		'lib/views/entities/delete/delete.html',
		'lib/views/entities/delete/delete.js',
		'lib/views/entities/index/index.html',
		'lib/views/entities/index/index.js',
		'lib/views/entities/index/index.less',
		'lib/views/entities/update/update.html',
		'lib/views/entities/update/update.js',

		], 'client');

	api.export('orion');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('orionjs:admin');
	api.addFiles('orionjs:admin-tests.js');
});
