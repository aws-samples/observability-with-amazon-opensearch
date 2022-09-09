// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Whether the bundle is a development bundle.
 * Only use this in an if condition and on its own! This will help bundlers find
 * and remove the conditional statement for production bundles.
 */
export var isDevelopment = process.env.NODE_ENV !== 'production';
//# sourceMappingURL=is-development.js.map