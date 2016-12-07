Ext.define('DocViewer.store.downloads.SoftwaresList', {
    extend: 'Ext.data.TreeStore',

    alias: 'store.softwareslist',

    fields: [
        'name', 'type', 'path'
    ],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '/softwareslist',
        reader: {
            type: 'json'
        }
    },

    root: {
        text: 'Softwares List',
        expanded: true
    },

    folderSort: true,

    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]

});
