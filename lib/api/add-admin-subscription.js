orion.admin.adminSubscriptions = [orion.subs.subscribe('dictionary'), orion.subs.subscribe('config')];

orion.admin.addAdminSubscription = function(func) {
	orion.admin.adminSubscriptions.push(func);
}