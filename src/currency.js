import parentStore from './stores/ParentStore'
/**
 * Utility helper
 */

const formatCurrency = (price) => {
    return new Intl.NumberFormat(parentStore.country, { style: 'currency', currency: parentStore.currency }).format(price || 0)
}

export { formatCurrency }