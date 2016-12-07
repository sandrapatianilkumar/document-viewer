/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('DocViewer.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'DocViewer',
        pdfFileName: "resources/test.html"
    }

    //TODO - add data, formulas and/or methods to support your view
});
