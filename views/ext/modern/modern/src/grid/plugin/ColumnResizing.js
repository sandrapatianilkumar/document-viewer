/**
 * @class Ext.grid.plugin.ColumnResizing
 * @extends Ext.Component
 * Description
 */
Ext.define('Ext.grid.plugin.ColumnResizing', {
    extend: 'Ext.Component',

    alias: 'plugin.gridcolumnresizing',

    config: {
        grid: null,

        /**
         * @cfg {Boolean} realtime
         * When true the whole column will resize in real-time as the user drags. When false only the header will resize
         * until the interaction is done.
         */
        realtime: false
    },

    resizerCls: Ext.baseCSSPrefix + 'grid-with-column-resize',

    init: function (grid) {
        this.setGrid(grid);
        this._resizeMarker = grid.resizeMarker;
        this._resizeMarkerParent = this._resizeMarker.parent();
        grid.getHeaderContainer().setTouchAction({ panX: false });
    },

    updateGrid: function (grid, oldGrid) {
        var cls = this.resizerCls,
            headerContainer;

        if (oldGrid) {
            headerContainer = oldGrid.getHeaderContainer();
            headerContainer.renderElement.un({
                touchstart: 'onContainerTouchStart',
                scope: this,
                priority: 100
            });
            headerContainer.removeCls(cls);
        }

        if (grid) {
            headerContainer = grid.getHeaderContainer();
            headerContainer.renderElement.on({
                touchstart: 'onContainerTouchStart',
                scope: this
            });
            headerContainer.addCls(cls);
        }
    },

    onContainerTouchStart: function (e) {
        var me = this,
            target = e.getTarget('.' + Ext.baseCSSPrefix + 'grid-column'),
            resizer = e.getTarget('.' + Ext.baseCSSPrefix + 'grid-column-resizer'),
            column;

        if (resizer && !e.multitouch && target && !me._resizeColumn) {
            column = Ext.Component.fromElement(target);

            if (column && column.getResizable()) {
                me._startColumnWidth = column.getComputedWidth();
                me._minColumnWidth = column.getMinWidth();
                me._maxColumnWidth = column.getMaxWidth();
                me._resizeColumn = column;
                me._startX = e.getX();
                column.renderElement.addCls(Ext.baseCSSPrefix + 'grid-column-resizing');
                // Prevent drag and longpress gestures being triggered by this mousedown
                e.claimGesture();

                if (!this.getRealtime()) {
                    me._resizeMarker.show();
                    me._resizeMarker.setLeft(column.el.getOffsetsTo(me._resizeMarkerParent)[0] + me._startColumnWidth);
                } else {
                    column.setWidth(me._startColumnWidth);
                }
                me.touchListeners = Ext.getBody().on({
                    touchEnd: 'onTouchEnd',
                    touchMove: 'onTouchMove',
                    scope: me,
                    destroyable: true
                });
            }
        } else if (e.multitouch && me._resizeColumn) {
            me.endResize();
        }
    },

    onTouchMove: function (e) {
        // Single touch only
        if (e.isMultitouch) {
            this.endResize();
            return;
        }

        if (this._resizeColumn) {
            var column = this._resizeColumn,
                resizeAmount = e.getX() - this._startX;

            if (column) {
                this.currentColumnWidth = Math.max(Math.ceil(this._startColumnWidth + resizeAmount), this._minColumnWidth);
                if (this._maxColumnWidth) {
                    this.currentColumnWidth = Math.min(this.currentColumnWidth, this._maxColumnWidth);
                }

                if (this.getRealtime()) {
                    column.setWidth(this.currentColumnWidth);
                    column.renderElement.setWidth(this.currentColumnWidth);
                } else {
                    this._resizeMarker.setLeft(column.el.getOffsetsTo(this._resizeMarkerParent)[0] + this.currentColumnWidth);
                }

                e.claimGesture();
            }
        }
    },

    onTouchEnd: function (e) {
        Ext.destroy(this.touchListeners);
        if (this._resizeColumn) {
            this.endResize();
        }
    },

    endResize: function () {
        var column = this._resizeColumn,
            grid = this.getGrid();
        if (column) {
            if (!this.getRealtime()) {
                grid.resizeMarker.hide();
            }
            column.setFlex(null);
            column.setWidth(this.currentColumnWidth);
            column.renderElement.removeCls(Ext.baseCSSPrefix + 'grid-column-resizing');
            this._resizeColumn = null;
        }
    }
});