
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

    title: "PDFS List",
    hideHeaders: true,
    emptyText: 'List is empty',
    columns: [{
        xtype: 'treecolumn',
        dataIndex: 'name',
        flex: 1
    }]
});
