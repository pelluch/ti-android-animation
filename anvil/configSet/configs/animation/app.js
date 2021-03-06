/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2012 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

// start customization here
var suites = [];

if (Ti.Platform.osname === 'android') {
	suites = suites.concat([
		// These just test the api points, not really functionality
		{name: "top_level_api"},
		{name: "object_animator_api"},
		{name: "animator_set_api"},
		{name: "view_property_animator_api"},
		// Functionality tests (i.e., animations put things in the 
		// right place, etc.)
		{name: "listeners"}
	]);
}


/*
these lines must be present and should not be modified.  "suites" argument to setSuites is 
expected to be an array (should be an empty array at the very least in cases where population of 
the suites argument is based on platform type and may result in no valid suites being added to the 
argument)
*/
var init = require("init");
init.setSuites(suites);
init.start();
