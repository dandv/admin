Router.map(function() {

	/**
	 * The home route for the admin, redirects to dictionaryUpdate
	 */
	this.route('admin', {
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		waitOn: function () {
			return orion.admin.adminSubscriptions;
		},
		action: function() {
			var self = this;
			Meteor.call('accountsNumberIsCero', function(error, response){
				if (response) {
					self.redirect('adminAccountsSetup');
				} else {
					self.redirect('adminDictionaryUpdate');
				}
			})
		}
	});

	/**
	 * Setup, create the first account
	 */
	this.route('adminAccountsSetup', {
		layoutTemplate: 'outAdminLayout',
		loadingTemplate: 'adminLoading',
		path: 'admin/setup',
	});

	/**
	 * Update the dictionary
	 * if category is not specified uses the first
	 */
	this.route('adminDictionaryUpdate', {
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		path: '/admin/dictionary/:category?',
		waitOn: function () {
			return orion.admin.adminSubscriptions;
		},
		data: function() {
			if (this.params.category) {
				return {
					category: this.params.category,
					fields: orion.dictionary.categories[this.params.category]
				}
			} else {
				return {
					category: orion.dictionary.getDefaultCategory(),
					fields: orion.dictionary.categories[orion.dictionary.getDefaultCategory()]
				}
			}
		}
	});


	/**
	 * Shows all the entity items
	 */
	this.route('adminEntitiesIndex', {
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		path: '/admin/e/:entity/',
		waitOn: function () {
			return orion.admin.adminSubscriptions;
		},
		data: function() {
			var entity = _.findWhere(orion.entities, {name: this.params.entity});
			return {
				entity: entity,
			}
		}
	})

	/**
	 * Shows the form to create a new item in the entity
	 */
	this.route('adminEntitiesCreate', {
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		path: '/admin/e/:entity/create',
		data: function() {
			return {
				entity: orion.entities[this.params.entity]
			}
		}
	})

	/**
	 * Shows the form to update a item
	 */
	this.route('adminEntitiesUpdate', {
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		path: '/admin/e/:entity/:_id/update',
		waitOn: function () {
			return _.union(orion.subs.subscribe('entity', this.params.entity, { _id: this.params._id }), orion.admin.adminSubscriptions);
		},
		data: function() {
			var entity = _.findWhere(orion.entities, {name: this.params.entity});
			return {
				entity: entity,
				item: entity.collection.findOne(this.params._id)
			}
		}
	})

	/**
	 * Shows the confirm button to delete a item
	 */
	this.route('adminEntitiesDelete', {
		layoutTemplate: 'adminLayout',
		loadingTemplate: 'adminLoading',
		path: '/admin/e/:entity/:_id/delete',
		waitOn: function () {
			return _.union(orion.subs.subscribe('entity', this.params.entity, { _id: this.params._id }), orion.admin.adminSubscriptions);
		},
		data: function() {
			var entity = _.findWhere(orion.entities, {name: this.params.entity});
			return {
				entity: entity,
				item: entity.collection.findOne(this.params._id)
			}
		}
	})

});

/**
 * Set the orion favico
 */
var setFavIco = function() {
	if (!Meteor.isClient) {
		return;
	}
	SEO.set({
		title: orion.dictionary.get('siteName') + ' Admin Panel',
		link: {
			icon: 'https://s3.amazonaws.com/meteor-cms-default/orionjs/favicon.ico',
		}
	});
}
Router.onAfterAction(setFavIco, {
    only: ['admin', 'adminDictionaryUpdate', 'adminEntitiesIndex', 'adminEntitiesCreate', 'adminEntitiesUpdate', 'adminEntitiesDelete']
})

/**
 * Ensure the user is signed in before he can view the admin
 */
Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    only: ['adminDictionaryUpdate', 'adminEntitiesIndex', 'adminEntitiesCreate', 'adminEntitiesUpdate', 'adminEntitiesDelete']
});