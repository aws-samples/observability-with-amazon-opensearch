import type { Module } from '@swc/core';
/**
 * Extracts the value of an exported const variable named `exportedName`
 * (e.g. "export const config = { runtime: 'experimental-edge' }") from swc's AST.
 * The value must be one of (or throws UnsupportedValueError):
 *   - string
 *   - boolean
 *   - number
 *   - null
 *   - undefined
 *   - array containing values listed in this list
 *   - object containing values listed in this list
 *
 * Throws NoSuchDeclarationError if the declaration is not found.
 */
export declare function extractExportedConstValue(module: Module, exportedName: string): any;
export declare class UnsupportedValueError extends Error {
}
export declare class NoSuchDeclarationError extends Error {
}
