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
        'DocViewer.view.docs.ViewList',
        'DocViewer.view.downloads.SoftwaresList'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border',
        border: true
    },

    items: [{
        xtype: 'container',
        region: 'west',
        collapsible: true,
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
            },
            listeners: {
                rowclick: 'onRowClickPdfs'
            }
        }, {
            xtype: 'sofwareslist',
            bind: {
                store: '{softwareslist}'
            },
            listeners: {
                rowclick: 'onRowClickSoftwares'
            }
        }]
    }, {
        xtype: 'panel',
        region: 'center',
        title: 'Document - Viewer',
        titleAlign: 'center',
        width: '100%',
        height: '100%',
        bind: {
            data: {
                pdfFileName: '{pdfFileName}'
            }
        },
        tpl: [
            '<tpl if="!Ext.isEmpty(pdfFileName)">',
            '<iframe style="height: 100%; width: 100%; border: none;" src="{pdfFileName}" />',
            '</tpl>',
            '<tpl if={!pdfFileName}>',
            '<div>File Not Found</div>',
            '</tpl>'
        ]
    }]
});
