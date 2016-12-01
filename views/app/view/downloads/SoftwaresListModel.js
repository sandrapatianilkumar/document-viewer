Ext.define('DocViewer.view.downloads.SoftwaresListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.softwareslist',
    data: {
        name: 'DocViewer'
    },

   stores: {
        softwareslist: {
            type: 'softwareslist'
        }
    }

});
