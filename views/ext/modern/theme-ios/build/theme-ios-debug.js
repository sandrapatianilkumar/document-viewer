Ext.define('Ext.theme.neptune.Component', {
    override: 'Ext.Component'
}, function() {
    Ext.namespace('Ext.theme.is').Neptune = true;
    Ext.theme.name = 'Neptune';
    Ext.theme.getDocCls = function() {
        return Ext.platformTags.desktop ? '' : 'x-big';
    };
});

Ext.define('Ext.theme.triton.Component', {
    override: 'Ext.Component'
}, function() {
    Ext.namespace('Ext.theme.is').Triton = true;
    Ext.theme.name = 'Triton';
    Ext.theme.getDocCls = function() {
        return Ext.platformTags.phone ? 'x-big' : '';
    };
});

Ext.define('Ext.theme.neptune.Toolbar', {
    override: 'Ext.Toolbar',
    config: {
        defaultButtonUI: 'action'
    }
});

Ext.define('Ext.theme.triton.Toolbar', {
    override: 'Ext.Toolbar',
    config: {
        defaultButtonUI: null
    }
});

Ext.define('Ext.theme.neptune.tip.ToolTip', {
    override: 'Ext.tip.ToolTip',
    bodyBorder: false
});

Ext.define('Ext.theme.ios.field.Checkbox', {
    override: 'Ext.field.Checkbox',
    config: {
        bodyAlign: 'end'
    }
});

Ext.define('Ext.theme.ios.form.FieldContainer', {
    override: 'Ext.form.FieldContainer',
    config: {
        fieldSeparators: true,
        inputBorders: false
    }
});

Ext.namespace('Ext.theme.is').iOS = true;
Ext.theme.name = 'iOS';
Ext.theme.getDocCls = function() {
    return 'x-big';
};

