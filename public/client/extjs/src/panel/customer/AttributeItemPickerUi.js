/*!
 * @license LGPLv3, http://opensource.org/licenses/LGPL-3.0
 * @copyright Aimeos.org, 2015
 */


Ext.ns('MShop.panel.customer');

// hook attribute picker into the customer ItemUi
Ext.ux.ItemRegistry.registerItem('MShop.panel.customer.ItemUi', 'MShop.panel.customer.AttributeItemPickerUi', {

	xtype : 'MShop.panel.attribute.itempickerui',
    itemConfig : {
        recordName : 'Customer_List',
        idProperty : 'customer.list.id',
        siteidProperty : 'customer.list.siteid',
        listDomain : 'customer',
        listNamePrefix : 'customer.list.',
        listTypeIdProperty : 'customer.list.type.id',
        listTypeLabelProperty : 'customer.list.type.label',
        listTypeControllerName : 'Customer_List_Type',
        listTypeCondition : {
            '&&' : [{
                '==' : {
                    'customer.list.type.domain' : 'attribute'
                }
            }]
        },
        listTypeKey : 'customer/list/type/attribute'
    },
    listConfig : {
        domain : 'customer',
        prefix : 'attribute.'
    }
}, 50);
