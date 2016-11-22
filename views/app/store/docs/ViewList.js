Ext.define('DocViewer.store.docs.ViewList', {
    extend: 'Ext.data.Store',

    alias: 'store.viewlist',

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
