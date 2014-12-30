Template.adminEntitiesIndex.helpers({
	table: function() {
		if (this.entity) {
			return this.entity.table;
		}
		return null;
	}
});

Template.adminEntitiesIndexTableActions.helpers({
	getEntity: function () {
		if (this.entity) {
			return this.entity.name;
		}
		return '';
	}
});