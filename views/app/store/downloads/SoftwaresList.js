Ext.define('DocViewer.store.downloads.SoftwaresList', {
    extend: 'Ext.data.Store',

    alias: 'store.softwareslist',

    fields: [
        'name'
    ],

    data: [
        { name: 'Jean Luc' },
        { name: 'Worf' },
        { name: 'Deanna' },
        { name: 'Data' }
    ],

    autoLoad:true,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});
