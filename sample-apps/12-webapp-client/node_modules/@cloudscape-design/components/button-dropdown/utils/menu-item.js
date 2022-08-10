/**
 * @returns attributes for a menuitem widget given parameters
 */
export var getMenuItemProps = function (_a) {
    var disabled = _a.disabled, parent = _a.parent, expanded = _a.expanded;
    return ({
        role: 'menuitem',
        'aria-disabled': disabled ? 'true' : undefined,
        'aria-haspopup': parent ? 'true' : undefined,
        'aria-expanded': expanded ? 'true' : parent ? 'false' : undefined
    });
};
//# sourceMappingURL=menu-item.js.map