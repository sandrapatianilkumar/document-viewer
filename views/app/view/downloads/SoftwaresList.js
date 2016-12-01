
Ext.define('DocViewer.view.downloads.SoftwaresList',{
    extend: 'Ext.grid.Panel',
    alias:'widget.sofwareslist',

    requires: [
        'DocViewer.view.downloads.SoftwaresListController',
        'DocViewer.view.downloads.SoftwaresListModel'
    ],

    controller: 'softwareslist',
    viewModel: {
        type: 'softwareslist'
    },
    title: 'Software List',
    hideHeaders: true,
    
    columns: [{
        dataIndex: 'name',
        flex: 1
    }]
});
