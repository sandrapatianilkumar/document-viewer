Ext.define('DocViewer.store.docs.ViewList', {
    extend: 'Ext.data.Store',

    alias: 'store.viewlist',

    fields: [
        'name', 'fileName'
    ],

    // Todo: make rest call to get actual files list
    data: [
        { name: 'First Node App', fileName: 'First-Node-App.pdf' },
        { name: 'UserManual On UAN Functions & Process', fileName: 'UserManual On UAN Functions & Process.pdf'  },
        { name: 'Test', fileName: 'test.pdf'  },
        { name: 'FAQ Member Ver 1.1', fileName: 'FAQ-Member-Ver1.1.pdf'  },
        { name: 'Not Found', fileName: ''  }
    ],

    autoLoad:true,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});
