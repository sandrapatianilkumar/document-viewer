
Ext.define('DocViewer.view.downloads.SoftwaresList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sofwareslist',

    requires: [
        'DocViewer.view.downloads.SoftwaresListController',
        'DocViewer.view.downloads.SoftwaresListModel'
    ],

    controller: 'softwareslist',
    viewModel: {
        type: 'softwareslist'
    },
    title: 'Softwares download List',
    hideHeaders: true,
    emptyText: 'List is empty',
    columns: [{
        xtype: 'treecolumn',
        dataIndex: 'name',
        flex: 1
    }]
});
