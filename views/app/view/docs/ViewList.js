
Ext.define('DocViewer.view.docs.ViewList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.viewlist',

    requires: [
        'DocViewer.view.docs.ViewListController',
        'DocViewer.view.docs.ViewListModel'
    ],

    controller: 'viewlist',
    viewModel: {
        type: 'viewlist'
    },

    title: 'ViewList',
    hideHeaders: true,
    
    columns: [{
        dataIndex: 'name',
        flex: 1
    }]
});
