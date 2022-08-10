// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import InternalSpinner from '../spinner/internal';
import styles from './styles.css.js';
export default (function (props) { return (React.createElement("div", { className: styles['loading-screen'] },
    React.createElement(InternalSpinner, { size: "normal", variant: "normal" }),
    "\u00A0",
    props.children)); });
//# sourceMappingURL=loading-screen.js.map