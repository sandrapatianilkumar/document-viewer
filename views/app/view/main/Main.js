/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DocViewer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'DocViewer.view.main.MainController',
        'DocViewer.view.main.MainModel',
        'DocViewer.view.docs.ViewList'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'container',
        region: 'west',
        width: '20%',
        minWidth: 200,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            flex: 1
        },
        items: [{
            xtype: 'viewlist',
            bind: {
                store: '{docviewlist}'
            }
        }]
    }]
});
