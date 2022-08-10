// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
var defaultContext = {
    getContentForId: function () { return null; },
    registerHotspot: function () { },
    unregisterHotspot: function () { },
    currentStepIndex: 0,
    currentTutorial: null,
    onStartTutorial: function () { },
    onExitTutorial: function () { }
};
export var hotspotContext = React.createContext(defaultContext);
//# sourceMappingURL=context.js.map