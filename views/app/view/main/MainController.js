/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DocViewer.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // pfd viewers on row click functionality 
    onRowClickPdfs: function(grid, record, tr, rowIndex, e, eOpts) {
        this.getViewModel().set('pdfFileName', record.get('path'));
    },

    // downloadsoftwares  on row click functionality 
    onRowClickSoftwares: function(grid, record, tr, rowIndex, e, eOpts) {
        
        var me, path, name;
        me = this;
        path = record.get('path');
        name = record.get('name');
        // if user select yes, downloads the selected software
        Ext.Msg.show({
            scope: 'me',
            title: 'Confirmation?',
            message: 'Would you like to download ' + name + ' ?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    me.getViewModel().set('pdfFileName', record.get('path'));
                } else if (btn === 'no') {
                    // nothing do
                }
            }
        });
    }
});
