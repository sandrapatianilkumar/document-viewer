Ext.define('DocViewer.store.docs.ViewList', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.viewlist',

    fields: [
        'name', 'type', 'path'
    ],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '/viewlist',
        reader: {
            type: 'json'
        }
    },

    root: {
        text: 'PDFs',
        expanded: true
    },

    folderSort: true,

    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]

});
