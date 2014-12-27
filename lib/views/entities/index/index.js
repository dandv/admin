Template.adminEntitiesIndex.helpers({
	table: function() {
		return Router.current().data().entity.table;
	}
});

Template.adminEntitiesIndexTableActions.helpers({
	getEntity: function () {
		return Router.current().data().entity.name;
	}
});