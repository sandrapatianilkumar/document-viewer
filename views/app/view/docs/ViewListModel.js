Ext.define('DocViewer.view.docs.ViewListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.viewlist',

    stores: {
        docviewlist: {
            type: 'viewlist'
        }
    }

});
