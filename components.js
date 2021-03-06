angular.module('demoApp')
.value('components', [
    {
        "name": "configs",
        "moduleName": "'encore.ui.configs'",
        "displayName": "Configs",
        "srcFiles": [
            "src/configs/configs.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/stable.svg\" alt=\"stable\" title=\"\" /></a></p>\n\n<p>Common configs used throughout Encore.</p>\n\n<p>Unit tests for this only need to check for the existence of the config data, just to confirm that they're being loaded correctly. Anything more is just overkill.</p>",
            "js": "",
            "html": ""
        }
    },
    {
        "name": "rxActiveUrl",
        "moduleName": "'encore.ui.rxActiveUrl'",
        "displayName": "Rx Active Url",
        "srcFiles": [
            "src/rxActiveUrl/rxActiveUrl.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxActiveUrl/templates/rxActiveUrl.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/hughsk/stability-badges\"><img src=\"http://hughsk.github.io/stability-badges/dist/experimental.svg\" alt=\"experimental\" title=\"\" /></a></p>\n\n<p>Adds a class name of 'selected' to an LI if the current url matches a pre-defined value</p>",
            "js": "",
            "html": "<ul>\n    <rx-active-url url=\"/servers\">\n        <a href=\"/servers\">Servers</a>\n    </rx-active-url>\n    <rx-active-url url=\"/cbs\">\n        <a href=\"/cbs\">Storage</a>\n        <ul>\n            <rx-active-url url=\"/cbs/volumes\">\n                <a href=\"/cbs/volumes/\">Volumes</a>\n            </rx-active-url>\n            <rx-active-url url=\"/cbs/snapshots\">\n                <a href=\"/cbs/snapshots/\">Snapshots</a>\n            </rx-active-url>\n        </ul>\n    </rx-active-url>\n</ul>"
        }
    },
    {
        "name": "rxAge",
        "moduleName": "'encore.ui.rxAge'",
        "displayName": "Rx Age",
        "srcFiles": [
            "src/rxAge/rxAge.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/stable.svg\" alt=\"stable\" title=\"\" /></a></p>\n\n<p>Filter to parse an age based on a date in the past.</p>\n\n<p><strong>Note: This component requires <a href=\"http://momentjs.com/\">moment.js</a> be loaded.</strong></p>\n\n<p>This function has several different ways you can use it:</p>\n\n<ol>\n<li>You can just have it use the default abbreviated method and it truncates it\nto the two largest units.</li>\n<li>You can also pass in a second value of <code>true</code> and have it expand the units\nfrom the first letter to their full word representation.</li>\n<li>Or you can pass in a number from <code>1</code> to <code>3</code> as the second value to allow for\ndifferent amounts of units.</li>\n<li><strong>OR</strong> you can pass in a number as the second argument and <code>true</code> as the\nthird argument to combine these two effects.</li>\n</ol>",
            "js": "/*jshint unused:false*/\n\n// This file is used to help build the 'demo' documentation page and should be updated with example code\nfunction rxAgeCtrl ($scope) {\n    var day = 86400000;\n    $scope.ageHours = new Date((Date.now() - (day / 2.3)));\n    $scope.ageDays = new Date((Date.now() - (day * 1.5)));\n    $scope.ageMonths = new Date((Date.now() - (day * 40.2)));\n    $scope.ageYears = new Date((Date.now() - (day * 380.1)));\n}",
            "html": "<div ng-controller=\"rxAgeCtrl\">\n    <ul>\n        <li>{{ageHours}} &rarr; {{ageHours | rxAge}}</li>\n        <li>{{ageDays}} &rarr; {{ageDays | rxAge}}</li>\n        <li>{{ageMonths}} &rarr; {{ageMonths | rxAge}}</li>\n        <li>{{ageYears}} &rarr; {{ageYears | rxAge}}</li>\n        <li>{{ageHours}} &rarr; {{ageHours | rxAge:true}}</li>\n        <li>{{ageDays}} &rarr; {{ageDays | rxAge:true}}</li>\n        <li>{{ageMonths}} &rarr; {{ageMonths | rxAge:true}}</li>\n        <li>{{ageYears}} &rarr; {{ageYears | rxAge:true}}</li>\n        <li>{{ageHours}} &rarr; {{ageHours | rxAge:1:true}}</li>\n        <li>{{ageDays}} &rarr; {{ageDays | rxAge:2:true}}</li>\n        <li>{{ageMonths}} &rarr; {{ageMonths | rxAge:3:true}}</li>\n        <li>{{ageYears}} &rarr; {{ageYears | rxAge:3}}</li>\n    </ul>\n</div>\n"
        }
    },
    {
        "name": "rxApp",
        "moduleName": "'encore.ui.rxApp'",
        "displayName": "Rx App",
        "srcFiles": [
            "src/rxApp/rxApp.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxApp/templates/rxAccountSearch.html",
            "templates/rxApp/templates/rxApp.html",
            "templates/rxApp/templates/rxAppNav.html",
            "templates/rxApp/templates/rxAppNavItem.html",
            "templates/rxApp/templates/rxAppSearch.html",
            "templates/rxApp/templates/rxPage.html"
        ],
        "dependencies": [
            "rxEnvironment"
        ],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<h1>Description</h1>\n\n<p>This component is responsible for creating the HTML necessary for a common Encore layout. It builds out the main navigation, plus breadcrumbs and page titles.</p>\n\n<h1>Usage</h1>\n\n<p>For apps that want to use the default Encore navigation, usage is pretty simple. In your index.html file, add the <code>rx-app</code> directive inside your app:</p>\n\n<pre><code>&lt;body ng-app=\"myApp\"&gt;\n    &lt;rx-app&gt;\n        &lt;ng-view&gt;&lt;/ng-view&gt;\n    &lt;/rx-app&gt;\n&lt;/body&gt;\n</code></pre>\n\n<p>By including <code>ng-view</code>, your view content will be added inside the directive. This makes setting up views for each page much simpler, since you don't have to include <code>rx-app</code> in each view.</p>\n\n<p>Inside your view, you'll likely want to use <code>rx-page</code> to wrap your content. See the <code>rx-page</code> docs for more information on this.</p>\n\n<h1>rxApp Navigation</h1>\n\n<p>Left-hand navigation is included as part of the app template. There are many options to control the navigation from an app level, as outlined with the following.</p>\n\n<p>Note: With the current set up, some app-specific menu items are defined in Encore-UI. While it's preferred to keep app-specific details outside of Encore-UI, because some top-level navigation is accessible from any app, it's important to store that information in a common location inside Encore-UI.</p>\n\n<h2>Accessing route information</h2>\n\n<p>Sometimes it's helpful to have the current route information available for menu items. For example, re-using the current params for path building.</p>\n\n<p>To help with this, $route is exposed on the scope of all menu items. <a href=\"http://devdocs.io/angular/ngroute.$route\"><code>$route</code> provides many details on the current view</a>, including the ability to access the current controller and scope for the view.</p>\n\n<p>To see this in action, check out the 'childVisibility' property for Account-level Tool in <code>encoreNav</code>.</p>\n\n<h2>Accessing properties on $rootScope</h2>\n\n<p>If you have a property available on the <code>$rootScope</code> of your app that the menu data needs to access, <a href=\"http://stackoverflow.com/questions/22216441/what-is-the-difference-between-scope-root-and-rootscope-angular-js\">you can reference <code>$rootScope</code> via <code>$root</code></a>. See the demo for an example of this.</p>\n\n<h2>Dynamically updating the menu</h2>\n\n<p>By default, rxApp will create the navigation menu based on the routes defined in the 'encoreNav' value. This menu is built using the rxAppRoutes service.</p>\n\n<p>To update a route, use the <code>setRouteByKey</code> function on the rxAppRoutes service:</p>\n\n<pre><code>rxAppRoutes.setRouteByKey('myKey', {\n    linkText: 'myUpdatedRoute'\n})\n</code></pre>\n\n<p>You would normally either set this in your app's <code>.run</code> function, or in a specific controller.</p>\n\n<h2>Custom Menus</h2>\n\n<p>If you'd like to create an entirely custom menu, you can pass that data in to the <code>rx-app</code> directive via the <code>menu</code> attribute. View the demo for an example of this.</p>\n\n<h1>Sub-directives</h1>\n\n<h2>rx-page</h2>\n\n<p>You'll likely want to use <code>rx-page</code> inside your template view. For example, inside a 'myView.html' file:</p>\n\n<pre><code>&lt;rx-page title=\"'Example Page'\"&gt;\n    Here is my content\n&lt;/rx-page&gt;\n</code></pre>\n\n<p><code>rx-page</code> is used to create a common wrapper for specific page views. It automatically adds the breadcrumbs and page title/subtitle (if specified), along with the correct styling.</p>\n\n<p>Both the <code>title</code> and <code>subtitle</code> attributes accept an Angular expression, which can be a string (shown in the previous example) or a scope property. This string/property can accept other expressions, enabling you to build custom titles. The demo has an example of this usage.</p>\n\n<h3>.page-actions</h3>\n\n<p>A <code>page-actions</code> class is provided by rx-app to easily add custom page actions to the top right of a page. For example:</p>\n\n<pre><code>&lt;rx-page title=\"'Servers Overview'\"&gt;\n    &lt;div class=\"page-actions\"&gt;\n        &lt;a href=\"/create\" class=\"link-action msg-action\"&gt;Create New Server&lt;/a&gt;\n    &lt;/div&gt;\n    &lt;img src=\"http://cdn.memegenerator.net/instances/500x/48669250.jpg\" alt=\"Look at all these servers there are so many\"\n&lt;/rx-page&gt;\n</code></pre>\n\n<h2>rx-app-nav and rx-app-nav-item</h2>\n\n<p>These two directives are responsible for creating the menu in the left sidebar. They're not intended for use outside of the rx-app template code.</p>",
            "js": "/*jshint unused:false*/\nfunction rxAppCtrl ($scope, $location, $rootScope, $window, rxAppRoutes) {\n    $scope.subtitle = 'With a subtitle';\n\n    $scope.changeSubtitle = function () {\n        $scope.subtitle = 'With a new subtitle at ' + Date.now();\n    };\n\n    $scope.changeRoutes = function () {\n        var newRoute = {\n            linkText: 'Updated Route',\n            childVisibility: 'true',\n            children: [\n                {\n                    linkText: 'New child route'\n                }\n            ]\n        };\n\n        rxAppRoutes.setRouteByKey('accountLvlTools', newRoute);\n    };\n\n    // Fake navigation\n    var customApp = document.getElementById('custom-rxApp');\n    customApp.addEventListener('click', function (ev) {\n        var target = ev.target;\n\n        if (target.className.indexOf('item-link') > -1) {\n            // prevent the default jump to top\n            ev.preventDefault();\n\n            var href = target.getAttribute('href');\n\n            // update angular location (if href has a value)\n            if (!_.isEmpty(href)) {\n                // we need to prevent the window from scrolling (the demo does this)\n                // so we get the current scrollTop position\n                // and set it after the demo page has run '$routeChangeSuccess'\n                var currentScollTop = document.body.scrollTop;\n\n                $location.hash(href);\n\n                $rootScope.$apply();\n\n                $window.scrollTo(0, currentScollTop);\n            }\n        }\n    });\n\n    var searchDirective = 'rx-app-search placeholder=\"Enter User\" model=\"$root.user\"';\n\n    $scope.customMenu = [{\n        title: 'Example Menu',\n        children: [\n            {\n                href: 'Lvl1-1',\n                linkText: '1st Order Item'\n            },\n            {\n                linkText: '1st Order Item (w/o href) w/ Children',\n                childVisibility: function isUserDefined () {\n                    return !_.isEmpty($rootScope.user);\n                },\n                childHeader: '<strong class=\"current-search\">Current User:</strong>' +\n                             '<span class=\"current-result\">{{$root.user}}</span>',\n                directive: searchDirective,\n                children: [\n                    {\n                        href: 'Lvl1-2-Lvl2-1',\n                        linkText: '2nd Order Item w/ Children',\n                        children: [{\n                            href: 'Lvl1-2-Lvl2-1-Lvl3-1',\n                            linkText: '3rd Order Item'\n                        }]\n                    },\n                    {\n                        href: 'Lvl1-2-Lvl2-2',\n                        linkText: '2nd Order Item w/ Children',\n                        children: [\n                            {\n                                href: 'Lvl1-2-Lvl2-2-Lvl3-1',\n                                linkText: '3rd Order Item'\n                            },\n                            {\n                                href: 'Lvl1-2-Lvl2-2-Lvl3-2',\n                                linkText: '3rd Order Item'\n                            },\n                            {\n                                href: 'Lvl1-2-Lvl2-2-Lvl3-3',\n                                linkText: '3rd Order Item'\n                            },\n                            {\n                                href: 'Lvl1-2-Lvl2-2-Lvl3-4',\n                                linkText: '3rd Order Item'\n                            }\n                        ]\n                    },\n                    {\n                        href: 'Lvl1-2-Lvl2-3',\n                        linkText: '2nd Order Item'\n                    }\n                ]\n            },\n            {\n                href: 'Lvl1-3',\n                linkText: '1st Order Item w/ Children',\n                children: [\n                    {\n                        href: 'Lvl1-3-Lvl2-1',\n                        linkText: '2nd Order Item'\n                    }\n                ]\n            }\n        ]\n    }];\n}",
            "html": "<div ng-controller=\"rxAppCtrl\">\n    <h3>Standard rxApp</h3>\n    <rx-app id=\"standard-rxApp\">\n        <rx-page title=\"'Standard Page Title'\">\n            <p class=\"clear\">This is my page content</p>\n            <button ng-click=\"changeRoutes()\">Change Routes</button>\n        </rx-page>\n    </rx-app>\n\n    <h3>Customized rxApp (collapsible)</h3>\n    <rx-app collapsible-nav=\"true\" site-title=\"My App\" id=\"custom-rxApp\" menu=\"customMenu\" new-instance=\"true\">\n        <rx-page title=\"'Customized Page Title'\" subtitle=\"subtitle\">\n            <p class=\"clear\">Click a link in the menu to see the active state change</p>\n            <p>Click the toggle to hide the menu</p>\n            <button ng-click=\"changeSubtitle()\" class=\"changeSubtitle\">Change Subtitle</button>\n        </rx-page>\n    </rx-app>\n\n</div>\n\n<!--\nYou'll likely want to implement your HTML in your index.html file as:\n<div ng-app=\"sampleApp\">\n    <rx-app ng-view></rx-app>\n</div>\n\nAnd the template for each view/page will be something like:\n<rx-page title=\"'Example Page'\">\n    Example content\n</rx-page>\n-->\n"
        }
    },
    {
        "name": "rxAttributes",
        "moduleName": "'encore.ui.rxAttributes'",
        "displayName": "Rx Attributes",
        "srcFiles": [
            "src/rxAttributes/rxAttributes.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>This component allows you to add attributes based on a value in scope being defined or not.</p>\n\n<h2>Example</h2>\n\n<pre><code>&lt;div rx-attributes=\"{'my-custom-attr': customAttrVal, 'ng-click': noFunc}\" ng-controller=\"myCtrl\"&gt;&lt;/div&gt;\n\n&lt;script&gt;\nfunction myCtrl (scope) {\n    scope.customAttrVal = 'some value';\n}\n&lt;/script&gt;\n</code></pre>\n\n<p>Given this code, if the scope only had <code>scope.customAttrVal</code> set, only <code>my-custom-attr</code> would be added to the component. Since noFunc was never defined, <code>ng-click</code> isn't added.</p>\n\n<p>The output of the above code is:</p>\n\n<pre><code>&lt;div my-custom-attr=\"some value\" ng-controller=\"myCtrl\"&gt;&lt;/div&gt;\n</code></pre>\n\n<h2>Value Format</h2>\n\n<p>The value of <code>rx-attributes</code> follows the same object convention as <code>ng-class</code>, in that it takes in an object to parse through. The object follows this pattern:</p>\n\n<pre><code>{\n    'attribute-name': scopeValue,\n    'another-attribute-name': anotherScopeValue,\n}\n</code></pre>",
            "js": "/*jshint unused:false*/\nfunction rxAttributesCtrl ($scope) {\n    $scope.customStyles = 'color: red; font-weight: bold;';\n    $scope.customContent = '\"Custom Content\"';\n}",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxAttributesCtrl\">\n    <p><strong>The following content gets replaced by the value of ng-bind. It also gets some styles applied to it:</strong></p>\n    <p rx-attributes=\"{'ng-bind': customContent, 'style': customStyles}\">Content that's replaced</p>\n\n    <p><strong>The following content doesn't get replaced, since 'nothing' isn't a property on the scope:</strong></p>\n    <p rx-attributes=\"{'ng-bind': nothing}\">Non-replaced content</p>\n\n    <p><strong>The following content (you can't see it) does get replaced, but by nothing, since 'nothing' isn't a property on the scope. This is what rx-attributes avoids</strong></p>\n    <p ng-bind=\"nothing\">Content that's unintentionally replaced</p>\n</div>"
        }
    },
    {
        "name": "rxAuth",
        "moduleName": "'encore.ui.rxAuth'",
        "displayName": "Rx Auth",
        "srcFiles": [
            "src/rxAuth/rxAuth.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [
            "rxIdentity",
            "rxSession",
            "rxLocalStorage",
            "rxPermission",
            "rxSession",
            "rxLocalStorage"
        ],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Auth service which provides a common mechanism authenticating, validating permissions and managing sessions.</p>",
            "js": "function rxAuthCtrl ($scope, Auth) {\n    $scope.hasRole = function () {\n        alert('Has \"superhero\" Role? : ' + Auth.hasRole('superhero'));\n    };\n\n    $scope.isAuthenticated = function () {\n        alert('Is Authenticated? : ' + Auth.isAuthenticated());\n    };\n}\n",
            "html": "<div ng-controller=\"rxAuthCtrl\">\n    <button ng-click=\"hasRole()\">Is a Superhero?</button>\n    <button ng-click=\"isAuthenticated()\">Is Authenticatd?</button>\n</div>\n"
        }
    },
    {
        "name": "rxBreadcrumbs",
        "moduleName": "'encore.ui.rxBreadcrumbs'",
        "displayName": "Rx Breadcrumbs",
        "srcFiles": [
            "src/rxBreadcrumbs/rxBreadcrumbs.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxBreadcrumbs/templates/rxBreadcrumbs.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Service/Directive to add/update breadcrumbs on a page</p>",
            "js": "/*jshint unused:false*/\nfunction rxBreadcrumbsCtrl ($scope, rxBreadcrumbsSvc) {\n    rxBreadcrumbsSvc.set([{\n        path: '/',\n        name: 'Components'\n    }, {\n        name: 'All Components'\n    }]);\n}",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxBreadcrumbsCtrl\">\n    <nav class=\"site-breadcrumbs\">\n        <rx-breadcrumbs></rx-breadcrumbs>\n    </nav>\n</div>"
        }
    },
    {
        "name": "rxButton",
        "moduleName": "'encore.ui.rxButton'",
        "displayName": "Rx Button",
        "srcFiles": [
            "src/rxButton/rxButton.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxButton/templates/rxButton.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Button for handling async operations.</p>",
            "js": "/*jshint unused:false*/\nfunction rxButtonCtrl ($scope, $timeout) {\n    $scope.status = {\n        loading: false\n    };\n\n    $scope.login = function () {\n        $scope.status.loading = true;\n\n        $timeout(function () {\n            $scope.status.loading = false;\n        }, 4000);\n    };\n}",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxButtonCtrl\">\n    <rx-button toggle-msg=\"Authenticating\" default-msg=\"Login\"\n        toggle=\"status.loading\" ng-click=\"login()\">\n    </rx-button>\n</div>"
        }
    },
    {
        "name": "rxCapitalize",
        "moduleName": "'encore.ui.rxCapitalize'",
        "displayName": "Rx Capitalize",
        "srcFiles": [
            "src/rxCapitalize/rxCapitalize.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/stable.svg\" alt=\"stable\" title=\"\" /></a></p>\n\n<p>Capitalizes the first word in a string.</p>",
            "js": "/*jshint unused:false*/\n\nfunction rxCapitalizeCtrl ($scope) {\n    $scope.hello = 'hello world. this is my text';\n}",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxCapitalizeCtrl\">\n    {{hello | rxCapitalize}}\n</div>"
        }
    },
    {
        "name": "rxCompile",
        "moduleName": "'encore.ui.rxCompile'",
        "displayName": "Rx Compile",
        "srcFiles": [
            "src/rxCompile/rxCompile.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Allows compilation of expressions inside of other expressions.</p>",
            "js": "/*jshint unused:false*/\n\n// This file is used to help build the 'demo' documentation page and should be updated with example code\nfunction rxCompileCtrl ($scope) {\n    $scope.world = 'wrrrld';\n    $scope.myExpression = 'Hello {{world}}';\n}",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxCompileCtrl\">\n    <input type=\"text\" ng-model=\"world\">\n    <div rx-compile=\"myExpression\"></div>\n    <div>{{myExpression}}</div>\n</div>"
        }
    },
    {
        "name": "rxDiskSize",
        "moduleName": "'encore.ui.rxDiskSize'",
        "displayName": "Rx Disk Size",
        "srcFiles": [
            "src/rxDiskSize/rxDiskSize.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/stable.svg\" alt=\"stable\" title=\"\" /></a></p>\n\n<p>Converts GB disk size into a more readable format (e.g. GBs, TBs)</p>",
            "js": "/*jshint unused:false*/\n\n// This file is used to help build the 'demo' documentation page and should be updated with example code\nfunction rxDiskSizeCtrl ($scope) {\n    $scope.sizeGB = 420;\n    $scope.sizeTB = 125000;\n    $scope.sizePB = 171337000;\n}",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxDiskSizeCtrl\">\n    <ul>\n        <li>{{sizeGB}} &rarr; {{sizeGB | rxDiskSize}}</li>\n        <li>{{sizeTB}} &rarr; {{sizeTB | rxDiskSize}}</li>\n        <li>{{sizePB}} &rarr; {{sizePB | rxDiskSize}}</li>\n    </ul>\n</div>"
        }
    },
    {
        "name": "rxDropdown",
        "moduleName": "'encore.ui.rxDropdown'",
        "displayName": "Rx Dropdown",
        "srcFiles": [
            "src/rxDropdown/rxDropdown.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxDropdown/templates/rxDropdown.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/deprecated.svg\" alt=\"deprecated\" title=\"\" /></a></p>",
            "js": "",
            "html": ""
        }
    },
    {
        "name": "rxEnvironment",
        "moduleName": "'encore.ui.rxEnvironment'",
        "displayName": "Rx Environment",
        "srcFiles": [
            "src/rxEnvironment/rxEnvironment.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Component built to detect and provide the current environment (e.g. dev, staging, prod)</p>",
            "js": "/*jshint unused:false*/\nfunction rxEnvironmentCtrl ($scope, Environment) {\n    $scope.Environment = Environment;\n\n    Environment.add({\n        name: 'ghPages',\n        pattern: '//rackerlabs.github.io/encore-ui',\n        url: '//rackerlabs.github.io/encore-ui/{{path}}'\n    });\n}",
            "html": "<div ng-controller=\"rxEnvironmentCtrl\">\n    <p>Current Environment: {{Environment.get().name}}</p>\n\n    <p>Url built from Environment data: {{ { tld: 'cloudatlas', path: 'some/path' } | rxEnvironmentUrl }}</p>\n\n    <p>Content shows if on GitHub demo page:\n        <span rx-if-environment=\"ghPages\">\n            You're on the GitHub demo page\n        </span>\n    </p>\n\n    <p>Content shows if not on GitHub demo page:\n        <span rx-if-environment=\"!ghPages\">\n            You're not on the GitHub demo page\n        </span>\n    </p>\n</div>"
        }
    },
    {
        "name": "rxForm",
        "moduleName": "'encore.ui.rxForm'",
        "displayName": "Rx Form",
        "srcFiles": [
            "src/rxForm/rxForm.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxForm/templates/rxFormFieldset.html",
            "templates/rxForm/templates/rxFormInput.html",
            "templates/rxForm/templates/rxFormItem.html",
            "templates/rxForm/templates/rxFormOptionTable.html",
            "templates/rxForm/templates/rxFormRadio.html",
            "templates/rxForm/templates/rxFormSelect.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>The rxForm component is a set of directives used to create forms throughout Encore. These directives provide a common HTML layout and style for all form elements, which helps ensure form accessibility and makes creating new forms easier.</p>\n\n<p><strong>NOTE</strong>: <code>rxFormInput</code>, <code>rxFormRadio</code> and <code>rxFormSelect</code> are deprecated and will be removed in a future version. Please use rxFormItem for all your form input needs!</p>\n\n<h1>Directives</h1>\n\n<h2>rxFormItem</h2>\n\n<p>Creates a field row wrapped in a label. Used for fields which include a single input/field.</p>\n\n<h2>rxFormFieldset</h2>\n\n<p>Creates a field row wrapped in a fieldset. Used for fields which include multiple inputs (e.g. rxFormOptionTable).</p>",
            "js": "function rxFormDemoCtrl ($scope) {\n    $scope.types = [\n        {\n            'value': 'SATA',\n            'label': 'SATA'\n        },\n        {\n            'value': 'SSD',\n            'label': 'SSD'\n        }\n    ];\n\n    $scope.volume = {\n        name: 'Volume-1',\n        type: _.first($scope.types).value, // select the first type by default\n        checked: [true, 'unchecked'] //example with first checkbox automatically checked\n    };\n\n    $scope.yesOptionDescription = '<b>This</b> is HTML that included in the JS';\n\n    $scope.optionTableData = [\n        {\n            'name': 'Option #1',\n            'value': 0,\n            'obj': {\n                'name': 'Nested Name 1'\n            }\n        }, {\n            'name': 'Option #2',\n            'value': 1,\n            'obj': {\n                'name': 'Nested Name 2'\n            }\n        }, {\n            'name': 'Option #3',\n            'value': 2,\n            'obj': {\n                'name': 'Nested Name 3'\n            }\n        }\n    ];\n\n    $scope.optionTableColumns = [{\n        'label': 'Name',\n        'key': 'name',\n        'selectedLabel': '(Already saved data)'\n    }, {\n        'label': 'Static Content',\n        'key': 'Some <strong>Text &</strong> HTML'\n    }, {\n        'label': 'Expression 2',\n        'key': '{{ value * 100 | number:2 }}'\n    }, {\n        'label': 'Expression 3',\n        'key': '{{ obj.name | uppercase }}'\n    }, {\n        'label': 'Expression 4',\n        'key': '{{ value | currency }}'\n    }];\n\n    $scope.optionTableCheckboxData = [{\n        'name': 'Item 1'\n    }, {\n        'name': 'Item 2',\n        'value': 'checked',\n        'falseValue': 'unchecked'\n    }];\n}",
            "html": "<div class=\"forms\" ng-controller=\"rxFormDemoCtrl\">\n    <h3>Example of simple text input</h3>\n    <rx-form-item label=\"Display Name\" description=\"<a href='#'>Here</a> is my <b>HTML</b>\" prefix=\"$\" suffix=\"GB\">\n        <input type=\"text\" ng-model=\"volume.name\" ng-required=\"true\" />\n    </rx-form-item>\n    <p>Bound Value: {{volume.name}}</p>\n\n    <h3>Select Box</h3>\n    <rx-form-item label=\"Type\" prefix=\"$\" description=\"Bound Value: {{volume.type}}\">\n        <span class=\"field-select\">\n            <select ng-model=\"volume.type\" ng-required=\"true\">\n                <option\n                    ng-repeat=\"type in types\"\n                    value=\"{{type.value}}\"\n                    ng-selected=\"{{type.value == model}}\"\n                    >{{type.label}}</option>\n            </select>\n        </span>\n    </rx-form-item>\n\n    <rx-form-fieldset legend=\"Option Table (radio)\">\n        <rx-form-option-table\n            data=\"optionTableData\"\n            columns=\"optionTableColumns\"\n            type=\"radio\"\n            model=\"volume.data\"\n            field-id=\"optionTable\"\n            selected=\"0\"\n            ></rx-form-option-table>\n        <p>Bound Value: {{volume.data}}</p>\n    </rx-form-fieldset>\n\n    <rx-form-fieldset legend=\"Option Table (checkboxes)\">\n        <rx-form-option-table\n            columns=\"optionTableColumns\"\n            type=\"checkbox\"\n            model=\"volume.checked\"\n            field-id=\"optionCheckboxTable\"\n            data=\"optionTableCheckboxData\"\n            ></rx-form-option-table>\n        <p>Item 1 Value: {{volume.checked[0]}}</p>\n        <p>Item 2 Value: {{volume.checked[1]}}</p>\n    </rx-form-fieldset>\n</div>"
        }
    },
    {
        "name": "rxIdentity",
        "moduleName": "'encore.ui.rxIdentity'",
        "displayName": "Rx Identity",
        "srcFiles": [
            "src/rxIdentity/rxIdentity.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Service for authenticating with Rackspaces' Identity service</p>",
            "js": "/*jshint unused:false*/\nfunction rxIdentityCtrl ($scope, Identity) {\n    $scope.user = {};\n    $scope.login = function () {\n        $scope.toggle = true;\n        Identity.login($scope.user,\n            function (authToken) {\n                $scope.toggle = false;\n                alert('Congrats! Logged In');\n            },\n            function (error) {\n                $scope.toggle = false;\n                alert('Login attempt failed.');\n            });\n    };\n}\n",
            "html": "<!-- Example only works when running locally since rxIdentity requires a proxy -->\n<div ng-controller=\"rxIdentityCtrl\">\n    <form>\n        <label>Username:</label>\n        <input type=\"text\" name=\"username\" ng-model=\"user.username\" />\n        <label>Password:</label>\n        <input type=\"password\" name=\"password\" ng-model=\"user.password\" />\n        <rx-button toggle-msg=\"Authenticating\" default-msg=\"Login\"\n            toggle=\"toggle\" ng-click=\"login()\"></rx-button>\n    </form>\n</div>\n"
        }
    },
    {
        "name": "rxLocalStorage",
        "moduleName": "'encore.ui.rxLocalStorage'",
        "displayName": "Rx Local Storage",
        "srcFiles": [
            "src/rxLocalStorage/rxLocalStorage.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Simple wrapper of the global session localStorage object for interacting with local storage.</p>",
            "js": "function rxLocalStorageCtrl ($scope, LocalStorage) {\n    $scope.setSideKick = function () {\n        LocalStorage.setObject('joker', { name: 'Harley Quinn' });\n    };\n\n    $scope.getSideKick = function () {\n        var sidekick = LocalStorage.getObject('joker');\n        alert(sidekick.name);\n    };\n}\n",
            "html": "<div ng-controller=\"rxLocalStorageCtrl\">\n    <label>Who is the Joker's side kick?</label>\n    <button ng-click=\"setSideKick()\">Store Answer</button>\n    <button ng-click=\"getSideKick()\">Answer?</button>\n</div>\n"
        }
    },
    {
        "name": "rxLogout",
        "moduleName": "'encore.ui.rxLogout'",
        "displayName": "Rx Logout",
        "srcFiles": [
            "src/rxLogout/rxLogout.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/deprecated.svg\" alt=\"deprecated\" title=\"\" /></a></p>\n\n<p>Attribute directive to add logout functionality to a link.</p>",
            "js": "",
            "html": "<div>\n    <a href=\"#\" rx-logout>Logout</a>\n</div>"
        }
    },
    {
        "name": "rxModalAction",
        "moduleName": "'encore.ui.rxModalAction'",
        "displayName": "Rx Modal Action",
        "srcFiles": [
            "src/rxModalAction/rxModalAction.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxModalAction/templates/rxModalAction.html",
            "templates/rxModalAction/templates/rxModalActionForm.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/stable.svg\" alt=\"stable\" title=\"\" /></a></p>\n\n<p>Hook into Angular-UI Bootstrap's modal directive. Used as a link to open a modal window.</p>\n\n<p>This module has a dependency on <a href=\"http://angular-ui.github.io/bootstrap/\">Angular-UI Bootstrap</a>, so if it's going to be used, bootstrap needs to be included in your webpage.</p>",
            "js": "/*jshint unused:false*/\nfunction rxModalActionCtrl ($scope) {\n    $scope.password = 'guest';\n\n    $scope.populate = function (modalScope) {\n        modalScope.user = 'hey_dude';\n    };\n\n    $scope.changePass = function (fields) {\n        $scope.password = fields.password;\n    };\n}",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxModalActionCtrl\">\n    <p>Password: {{password}}</p>\n    <rx-modal-action\n        pre-hook=\"populate(this)\"\n        post-hook=\"changePass(fields)\"\n        template-url=\"changePassword.html\">\n        Change Password\n    </rx-modal-action>\n    <script type=\"text/ng-template\" id=\"changePassword.html\">\n        <rx-modal-form title=\"Change Admin Password\">\n            <p>Change {{user}} password?</p>\n            <rx-form-input\n                type=\"text\"\n                required=\"true\"\n                label=\"New Password\"\n                field-id=\"server_password\"\n                model=\"fields.password\"></rx-form-input>\n        </rx-modal-form>\n    </script>\n</div>"
        }
    },
    {
        "name": "rxNav",
        "moduleName": "'encore.ui.rxNav'",
        "displayName": "Rx Nav",
        "srcFiles": [
            "src/rxNav/rxNav.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxNav/templates/rxNav.html"
        ],
        "dependencies": [
            "rxDropdown"
        ],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/deprecated.svg\" alt=\"deprecated\" title=\"\" /></a></p>\n\n<p>Builds top-level navigation. Will be replaced by rxApp.</p>",
            "js": "",
            "html": ""
        }
    },
    {
        "name": "rxNotify",
        "moduleName": "'encore.ui.rxNotify'",
        "displayName": "Rx Notify",
        "srcFiles": [
            "src/rxNotify/rxNotify.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxNotify/templates/rxNotification.html",
            "templates/rxNotify/templates/rxNotifications.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/stable.svg\" alt=\"stable\" title=\"\" /></a></p>\n\n<p>Service (rxNotify) and Directives (rxNotification and rxNotifications) for displaying status messages on a page.</p>\n\n<h2>Using rxNotification as a State Message</h2>\n\n<p>There may be situations where you will need to use the styling/markup of rxNotify's messaging queue in status messages of your own - for example, a modal window which asks if you want to delete an object, with the appropriate warning or error flags. If this is the case, we recommend using the <code>rx-notification</code> directive in your views (note difference of <code>rx-notifications</code>.</p>\n\n<blockquote>\n  <p><code>&lt;rx-notification type=\"warn\"&gt;This is warning message!&lt;/rx-notification&gt;</code></p>\n</blockquote>\n\n<p>For all values of warn, please look below under Message options, under <code>type</code>.</p>\n\n<h2>Adding a New Message Queue via rxNotify</h2>\n\n<p>To add a new message to a stack, inject 'rxNotify' into your function and run:</p>\n\n<blockquote>\n  <p><code>rxNotify.add('My Message Text');</code></p>\n</blockquote>\n\n<p>This will add a new message to the default stack ('page') with all default options set. To customize options, pass in an object as the second argument with you specific options set:</p>\n\n<blockquote>\n  <p><code>rxNotify.add('My Message Text', {</code></p>\n  \n  <blockquote>\n    <p><code>stack: 'custom',</code></p>\n    \n    <p><code>type: 'warning'</code></p>\n  </blockquote>\n  \n  <p><code>});</code></p>\n</blockquote>\n\n<h2>Message options</h2>\n\n<hr />\n\n<ul>\n<li><p><strong><code>type</code></strong>: <em>Message type.</em></p>\n\n<blockquote>\n  <p>Default: <code>'info'</code></p>\n</blockquote>\n\n<p><em>Other values</em>: <code>'warn'</code>, <code>'error'</code>, <code>'success'</code></p></li>\n</ul>\n\n<hr />\n\n<ul>\n<li><p><strong><code>timeout</code></strong>: <em>Time (in seconds) for message to appear.</em></p>\n\n<blockquote>\n  <p>Default: <code>-1</code> (Message displays indefinitely)</p>\n</blockquote>\n\n<p><em>Other values</em>: Any positive integer</p></li>\n</ul>\n\n<hr />\n\n<ul>\n<li><p><strong><code>dismissable</code></strong>: <em>Whether a user can dismiss the message via an 'x' icon.</em></p>\n\n<blockquote>\n  <p>Default: <code>true</code></p>\n</blockquote>\n\n<p><em>Other values</em>: <code>false</code></p></li>\n</ul>\n\n<hr />\n\n<ul>\n<li><p><strong><code>loading</code></strong> <em>Replaces type icon with spinner. Removes option for use to dismiss message.</em></p>\n\n<blockquote>\n  <p>Default: <code>false</code></p>\n</blockquote>\n\n<p><em>Other values</em>: <code>true</code></p>\n\n<p>You usually want to associate this with a 'dismiss' property.</p>\n\n<p><strong>Example</strong>:</p>\n\n<blockquote>\n  <p><code>rxNotify.add('Loading', {</code></p>\n  \n  <blockquote>\n    <p><code>loading: true,</code></p>\n    \n    <p><code>dismiss: [$scope, 'loaded']</code></p>\n  </blockquote>\n  \n  <p><code>});</code></p>\n  \n  <p><code>var apiCallback = function (data) {</code></p>\n  \n  <blockquote>\n    <p><code>$scope.loaded = true;</code></p>\n    \n    <p><code>// do something with the data</code></p>\n  </blockquote>\n  \n  <p><code>}</code></p>\n  \n  <p><code>myApiCall(apiCallback);</code></p>\n</blockquote></li>\n</ul>\n\n<hr />\n\n<ul>\n<li><p><strong><code>show</code></strong>: <em>When to have the message appear.</em></p>\n\n<blockquote>\n  <p>Default: <code>'immediately'</code></p>\n</blockquote>\n\n<p><em>Other values:</em></p>\n\n<blockquote>\n  <p><code>'next'</code>: Show message after the next route change</p>\n  \n  <p><code>[scope, 'property']</code>:</p>\n  \n  <blockquote>\n    <p>Pass in a property on a scope to watch for a change. When the property value equals true, the message is shown.</p>\n  </blockquote>\n</blockquote>\n\n<p><strong>Example</strong>:</p>\n\n<blockquote>\n  <p><code>$scope.loaded = false;</code></p>\n  \n  <p><code>rxNotify.add('Content loaded!', {</code></p>\n  \n  <blockquote>\n    <p><code>show: [$scope, 'loaded']</code></p>\n  </blockquote>\n  \n  <p><code>});</code></p>\n  \n  <p><code>$timeout(function () {</code></p>\n  \n  <blockquote>\n    <p><code>$scope.loaded = true;</code></p>\n  </blockquote>\n  \n  <p><code>}, 1500);</code></p>\n</blockquote></li>\n</ul>\n\n<hr />\n\n<ul>\n<li><p><strong><code>dismiss</code></strong>: <em>When to have the message disappear.</em></p>\n\n<blockquote>\n  <p>Default: <code>'next'</code> (Dismiss message after the next route change)</p>\n</blockquote>\n\n<p><em>Other values:</em></p>\n\n<blockquote>\n  <p><code>[scope, 'property']</code>:</p>\n  \n  <blockquote>\n    <p>Pass in a property on a scope to watch for a change. When the property value equals true, the message is dismissed.</p>\n  </blockquote>\n</blockquote>\n\n<p><strong>Example</strong>:</p>\n\n<blockquote>\n  <p><code>$scope.loaded = false;</code></p>\n  \n  <p><code>rxNotify.add('Loading Content', {</code></p>\n  \n  <blockquote>\n    <p><code>dismiss: [$scope, 'loaded']</code></p>\n  </blockquote>\n  \n  <p><code>});</code></p>\n  \n  <p><code>$timeout(function () {</code></p>\n  \n  <blockquote>\n    <p><code>$scope.loaded = true;</code></p>\n  </blockquote>\n  \n  <p><code>}, 1500);</code></p>\n</blockquote></li>\n</ul>\n\n<hr />\n\n<ul>\n<li><p><strong><code>stack</code></strong>: <em>Which message stack the message gets added to.</em></p>\n\n<blockquote>\n  <p>Default: <code>'page'</code></p>\n  \n  <p><em>Other values:</em> Any string</p>\n</blockquote>\n\n<p><strong>Example</strong>:</p>\n\n<blockquote>\n  <p><code>rxNotify.add('Username required', {</code></p>\n  \n  <blockquote>\n    <p><code>type: 'error',</code></p>\n    \n    <p><code>stack: 'loginForm'</code></p>\n  </blockquote>\n  \n  <p><code>});</code></p>\n  \n  <p><code>&lt;rx-notifications stack=\"loginForm\"&gt;&lt;/rx-notifications&gt;</code></p>\n</blockquote></li>\n</ul>\n\n<hr />\n\n<h2>Dismissing a message programatically</h2>\n\n<p>Most messages are dismissed either by the user, a route change or using the custom 'dismiss' property.</p>\n\n<p>If you need to dismiss a message programmaticaly, you can run <strong><code>rxNotify.dismiss(message)</code></strong>, where message is the message object to dismiss.</p>\n\n<p>If you don't have the full message object, passing in the Message ID (which is returned from <strong><code>rxNotify.add</code></strong>) and the stack the message is in: <strong><code>rxNotify.dismiss('42', 'page')</code></strong>.</p>\n\n<h2>Stacks</h2>\n\n<p>Stacks are just separate notification areas. Normally, all messages created will go to the 'page' stack, which should be displayed at the top of the page. It's used for page-level messages.</p>\n\n<p>You can also create custom stacks for speficic notification areas. Say you have a form on your page that you want to add error messages to. You can create a custom stack for this form and send form-specific messages to it.</p>\n\n<h2>Using the Page Stack</h2>\n\n<p>The default notification stack is added by default to the page template, so it should be ready to use without any work (unless the app uses a custom template). The HTML to add the default stack to the page is:</p>\n\n<blockquote>\n  <p><code>&lt;rx-notifications&gt;&lt;/rx-notifications&gt;</code></p>\n</blockquote>\n\n<p>Note that a 'stack' attribute does not need to be defined.</p>\n\n<h2>Creating a Custom Stack</h2>\n\n<p>See 'stack' under 'Message options'</p>\n\n<h2>Clearing all messages in a stack</h2>\n\n<p>You can clear all messages in a specific stack programmatically via the <strong><code>rxNotify.clear</code></strong> function. Simply pass in the name of the stack to clear: <strong><code>rxNotify.clear('page')</code></strong>.</p>\n\n<h2>rxPromiseNotifications</h2>\n\n<p>It's a common pattern with API requests that you'll show a loading message, followed by either a success or failure message depending on the result of the call. rxPromiseNotifications is the service created for this pattern. See the API docs for more information on how to call/use rxPromiseNotifications.</p>",
            "js": "/*jshint unused:false*/\n\nfunction rxNotifyCtrl ($rootScope, $scope, rxNotify, rxPromiseNotifications, $q) {\n    $scope.message = 'My message';\n\n    $scope.options = {\n        type: 'info',\n        timeout: -1,\n        dismissable: true,\n        show: 'immediate'\n    };\n\n    $scope.routeChange = function (stack) {\n        $rootScope.$broadcast('$routeChangeStart', {});\n        $rootScope.$broadcast('$routeChangeSuccess', {});\n    };\n\n    $scope.add = function (stack) {\n        var messageOptions = _.clone($scope.options);\n        messageOptions.stack = stack;\n\n        rxNotify.add($scope.message, messageOptions);\n    };\n\n    // add a default messages (to custom stack so they don't show on the main page)\n    rxNotify.add('Helpful Information', {\n        stack: 'demo'\n    });\n    rxNotify.add('Loading', {\n        loading: true,\n        stack: 'demo'\n    });\n    rxNotify.add('You did it!', {\n        type: 'success',\n        stack: 'demo'\n    });\n    rxNotify.add('Careful now...', {\n        type: 'warning',\n        stack: 'demo'\n    });\n    rxNotify.add('Under Attack by Aliens', {\n        type: 'error',\n        stack: 'custom'\n    });\n\n    // stuff for rxPromiseNotifications\n    $scope.addPromise = function () {\n        $scope.deferred = $q.defer();\n\n        var promiseScope = rxPromiseNotifications.add($scope.deferred.promise, {\n            loading: 'Loading Message',\n            success: 'Success Message',\n            error: 'Error Message'\n        }, 'demo');\n    };\n}",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxNotifyCtrl\">\n    <div class=\"form-item\">\n        <label>Message text: <input type=\"text\" ng-model=\"message\" /></label>\n    </div>\n\n    <div class=\"form-item\">\n        <label>Timeout (in seconds): <input type=\"text\" ng-model=\"options.timeout\" /></label>\n    </div>\n\n    <div class=\"form-item\">\n        <fieldset>\n            <legend>Type:</legend>\n            <label><input type=\"radio\" name=\"notify-type\" ng-model=\"options.type\" value=\"info\" /> Info</label>\n            <label><input type=\"radio\" name=\"notify-type\" ng-model=\"options.type\" value=\"success\" /> Success</label>\n            <label><input type=\"radio\" name=\"notify-type\" ng-model=\"options.type\" value=\"warning\" /> Warning</label>\n            <label><input type=\"radio\" name=\"notify-type\" ng-model=\"options.type\" value=\"error\" /> Error</label>\n        </fieldset>\n    </div>\n\n    <div class=\"form-item\">\n        <fieldset>\n            <legend>Show:</legend>\n            <label><input type=\"radio\" name=\"notify-show\" ng-model=\"options.show\" value=\"immediate\" /> Immediately</label>\n            <label><input type=\"radio\" name=\"notify-show\" ng-model=\"options.show\" value=\"next\" /> Next</label>\n        </fieldset>\n    </div>\n\n    <div class=\"form-item\">\n        <label>Dismissable (by user): <input type=\"checkbox\" ng-model=\"options.dismissable\" /></label>\n    </div>\n\n    <div class=\"form-item\">\n        <label>Loading? (shows spinner): <input type=\"checkbox\" ng-model=\"options.loading\" /></label>\n    </div>\n\n    <div>\n        <button ng-click=\"add('demo')\">Add to Demo Stack</button>\n        <button ng-click=\"add('custom')\">Add to Custom Stack</button>\n    </div>\n\n    <div>\n        <h3>rxPromiseNotifications</h3>\n        <button ng-click=\"addPromise()\">Create messages</button>\n        <button ng-click=\"deferred.resolve();\">Resolve Promise</button>\n        <button ng-click=\"deferred.reject();\">Reject Promise</button>\n    </div>\n\n    <div>\n        <button ng-click=\"routeChange()\">Simulate Route Change</button>\n    </div>\n\n    <div class=\"pure-g\">\n        <div class=\"pure-u-1-2\">\n            <h2>Demo Stack</h2>\n            <rx-notifications stack=\"demo\"></rx-notifications>\n        </div>\n\n        <div class=\"pure-u-1-2\">\n            <h2>Custom Stack</h2>\n            <rx-notifications stack=\"custom\"></rx-notifications>\n        </div>\n    </div>\n\n    <p>Using rx-notification</p>\n\n    <rx-notification type=\"error\">Hello, world!</rx-notification>\n    <rx-notification type=\"warning\">Hello, world!</rx-notification>\n    <rx-notification type=\"info\">Hello, world!</rx-notification>\n</div>"
        }
    },
    {
        "name": "rxPageTitle",
        "moduleName": "'encore.ui.rxPageTitle'",
        "displayName": "Rx Page Title",
        "srcFiles": [
            "src/rxPageTitle/rxPageTitle.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/stable.svg\" alt=\"stable\" title=\"\" /></a></p>\n\n<p>Service for managing the page titles.</p>",
            "js": "/*jshint unused:false*/\n\n// This file is used to help build the 'demo' documentation page and should be updated with example code\nfunction rxPageTitleCtrl ($scope, rxPageTitle) {\n    $scope.changeTitle = function () {\n        rxPageTitle.setTitle($scope.newTitle);\n    };\n\n    $scope.refreshTitle = function () {\n        $scope.pageTitle = rxPageTitle.getTitle();\n    };\n\n    $scope.refreshTitle();\n}",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxPageTitleCtrl\">\n    Current Title: {{pageTitle}} <button ng-click=\"refreshTitle()\">Get Updated Title</button><br />\n\n    <input type=\"text\" ng-change=\"changeTitle()\" ng-model=\"newTitle\" placeholder=\"New Title\" />\n</div>"
        }
    },
    {
        "name": "rxPaginate",
        "moduleName": "'encore.ui.rxPaginate'",
        "displayName": "Rx Paginate",
        "srcFiles": [
            "src/rxPaginate/rxPaginate.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxPaginate/templates/rxItemsPerPage.html",
            "templates/rxPaginate/templates/rxPaginate.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Used for adding pagination around a data object.</p>\n\n<h1>Hiding the pagination</h1>\n\n<p>In some instances, the pagination should be hidden if there isn't enough data to require it. For example, if you have <code>itemsPerPage</code> set to 10, but only have 7 items of data (so only one page). Hiding the pagination is pretty simple:</p>\n\n<pre><code>&lt;rx-paginate page-tracking=\"pager\" ng-hide=\"pager.totalPages === 1\"&gt;&lt;/rx-paginate&gt;\n</code></pre>\n\n<p>You can use this code on any part of your view. For example, if you have pagination in your table footer, it's a good idea to hide the entire footer:</p>\n\n<pre><code>&lt;tfoot ng-hide=\"pager.totalPages === 1\"&gt;\n    &lt;tr class=\"paginate-area\"&gt;\n        &lt;td colspan=\"12\"&gt;\n            &lt;rx-paginate page-tracking=\"pager\"&gt;&lt;/rx-paginate&gt;\n        &lt;/td&gt;\n    &lt;/tr&gt;\n&lt;/tfoot&gt;\n</code></pre>\n\n<p>See the demo page for more examples of this.</p>",
            "js": "/*jshint unused:false*/\n\n// This file is used to help build the 'demo' documentation page and should be updated with example code\nfunction rxPaginateCtrl ($scope, PageTracking) {\n    $scope.sorter = {\n        predicate: 'id',\n        reverse: false\n    };\n    $scope.pager = PageTracking.createInstance();\n    $scope.pager.itemsPerPage = 3;\n\n    var makeServers = function (serverCount) {\n        var servers = [];\n        var os = ['Ubuntu 12.04', 'Red Hat Enterprise Linux 6.4', 'CentOS 6.4', 'Ubuntu 13.04'];\n        for (var i = 1; i < serverCount + 1; i++) {\n            var server = {\n                id: i,\n                name: 'Server ' + i,\n                os: os[i % os.length]\n            };\n            servers.push(server);\n        }\n        return servers;\n    };\n\n    $scope.servers = makeServers(21);\n\n    $scope.removeServers = function () {\n        if ($scope.servers.length > 2) {\n            $scope.servers = $scope.servers.splice(2);\n        }\n    };\n\n    $scope.addServers = function () {\n        $scope.servers = $scope.servers.concat(makeServers(2));\n    };\n}",
            "html": "<div ng-controller=\"rxPaginateCtrl\">\n    <table class=\"table-striped\">\n        <thead>\n            <tr>\n                <th class=\"column-title\" style=\"width:10em;\">Name</th>\n                <th class=\"column-title\">OS</a>\n            </tr>\n        </thead>\n        <tbody>\n            <tr ng-repeat=\"server in servers | orderBy: sorter.predicate:sorter.reverse | Paginate:pager \">\n                <td>\n                    {{server.name}}\n                </td>\n                <td>{{server.os}}</td>\n            </tr>\n        </tbody>\n        <tfoot ng-hide=\"pager.totalPages === 1\">\n            <tr class=\"paginate-area\">\n                <td colspan=\"12\">\n                    <rx-paginate page-tracking=\"pager\"></rx-paginate>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n\n    <p>Use these buttons to adjust the number of pages displayed. The pagination will hide when there is only one page available.</p>\n    <p>\n        <button ng-click=\"removeServers()\" class=\"button button-small\">Remove first 2 servers</button>\n        <button ng-click=\"addServers()\" class=\"button button-small\">Add 2 servers</button>\n    </p>\n</div>\n"
        }
    },
    {
        "name": "rxPermission",
        "moduleName": "'encore.ui.rxPermission'",
        "displayName": "Rx Permission",
        "srcFiles": [
            "src/rxPermission/rxPermission.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxPermission/templates/rxPermission.html"
        ],
        "dependencies": [
            "rxSession",
            "rxLocalStorage"
        ],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Service and directive for mananging permissions in EncoreUI</p>",
            "js": "function rxPermissionCtrl ($scope, Session, rxNotify) {\n    rxNotify.add('Respect My Authority!!', {\n        stack: 'permission',\n        type: 'warning'\n    });\n\n    $scope.storeToken = function () {\n        Session.storeToken({ access: { user: { roles: [{ name: 'test' } ] }}});\n    }\n\n    $scope.clearToken = function () {\n        Session.logout();\n    };\n}\n",
            "html": "<!-- Sample HTML goes here as a live example of how to the component can be used -->\n<div ng-controller=\"rxPermissionCtrl\">\n    <button class=\"storeToken\" name=\"button\" ng-click=\"storeToken()\">Store Token</button>\n    <button class=\"clearToken\" name=\"button\" ng-click=\"clearToken()\">Clear Token</button>\n\n    <rx-permission role=\"test\">\n        <rx-notifications stack=\"permission\"></rx-notifications>\n    </rx-permission>\n</div>\n"
        }
    },
    {
        "name": "rxProductResources",
        "moduleName": "'encore.ui.rxProductResources'",
        "displayName": "Rx Product Resources",
        "srcFiles": [
            "src/rxProductResources/rxProductResources.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxProductResources/templates/rxProductResources.html"
        ],
        "dependencies": [
            "rxActiveUrl",
            "rxRelatedMenu"
        ],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/deprecated.svg\" alt=\"deprecated\" title=\"\" /></a></p>",
            "js": "",
            "html": ""
        }
    },
    {
        "name": "rxRelatedMenu",
        "moduleName": "'encore.ui.rxRelatedMenu'",
        "displayName": "Rx Related Menu",
        "srcFiles": [
            "src/rxRelatedMenu/rxRelatedMenu.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxRelatedMenu/templates/rxRelatedMenu.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/deprecated.svg\" alt=\"deprecated\" title=\"\" /></a></p>",
            "js": "",
            "html": ""
        }
    },
    {
        "name": "rxSession",
        "moduleName": "'encore.ui.rxSession'",
        "displayName": "Rx Session",
        "srcFiles": [
            "src/rxSession/rxSession.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [
            "rxLocalStorage"
        ],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Service for managing user session in encore-ui.</p>",
            "js": "function rxSessionCtrl ($scope, Session) {\n\n    $scope.isAuthenticated = function () {\n        alert(Session.isAuthenticated());\n    };\n}\n",
            "html": "<div ng-controller=\"rxSessionCtrl\">\n    <button ng-click=\"isAuthenticated()\">Is Authenticated</button>\n</div>\n"
        }
    },
    {
        "name": "rxSessionStorage",
        "moduleName": "'encore.ui.rxSessionStorage'",
        "displayName": "Rx Session Storage",
        "srcFiles": [
            "src/rxSessionStorage/rxSessionStorage.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>A simple wrapper of the global sessionStorage object for interacting with session storage.\nThis service is similar to angular's $window and $document services.  The API is exactly the\nsame as the W3C's specification provided at: http://dev.w3.org/html5/webstorage/#storage-0</p>",
            "js": "function rxSessionStorageCtrl ($scope, SessionStorage) {\n    $scope.setSideKick = function () {\n        SessionStorage.setItem('Batman', 'Robin');\n    };\n\n    $scope.getSideKick = function () {\n        alert(SessionStorage.getItem('Batman'));\n    };\n}\n",
            "html": "<div ng-controller=\"rxSessionStorageCtrl\">\n    <label>Who is Batman's side kick?</label>\n    <button ng-click=\"setSideKick()\">Store Answer</button>\n    <button ng-click=\"getSideKick()\">Answer?</button>\n</div>\n"
        }
    },
    {
        "name": "rxSortableColumn",
        "moduleName": "'encore.ui.rxSortableColumn'",
        "displayName": "Rx Sortable Column",
        "srcFiles": [
            "src/rxSortableColumn/rxSortableColumn.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [
            "templates/rxSortableColumn/templates/rxSortableColumn.html"
        ],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>A clickable link in a table heading which will sort the table by the referenced property in ascending or descending order.</p>",
            "js": "/*jshint unused:false*/\n\n// This file is used to help build the 'demo' documentation page and should be updated with example code\nfunction rxSortableColumnCtrl ($scope, PageTracking, rxSortUtil) {\n    $scope.sort = rxSortUtil.getDefault();\n    $scope.pager = PageTracking.createInstance();\n\n    $scope.sortCol = function (predicate) {\n        return rxSortUtil.sortCol($scope, predicate);\n    };\n\n    $scope.talentPool = [\n        {\n            name: 'Andrew Yurisich',\n            jobTitle: 'Mailroom Associate IV'\n        },\n        {\n            name: 'Patrick Deuley',\n            jobTitle: 'Design Chaplain'\n        },\n        {\n            name: 'Hussam Dawood',\n            jobTitle: 'Evangelist of Roger Enriquez'\n        },\n        {\n            name: 'Kerry Bowley',\n            jobTitle: 'Dev Mom'\n        },\n    ];\n}",
            "html": "<div ng-controller=\"rxSortableColumnCtrl\">\n    <table>\n        <thead>\n            <tr>\n                <th scope=\"col\">\n                    <rx-sortable-column\n                        sort-method=\"sortCol(property)\"\n                        sort-property=\"name\"\n                        predicate=\"sort.predicate\"\n                        reverse=\"sort.reverse\">\n                        Name\n                    </rx-sortable-column>\n                </th>\n                <th scope=\"col\">\n                    <rx-sortable-column\n                        sort-method=\"sortCol(property)\"\n                        sort-property=\"jobTitle\"\n                        predicate=\"sort.predicate\"\n                        reverse=\"sort.reverse\">\n                        Occupation\n                    </rx-sortable-column>\n                </th>\n            </tr>\n        </thead>\n        <tbody id=\"talentPoolData\">\n            <tr ng-repeat=\"resource in talentPool | orderBy:sort.predicate:sort.reverse\">\n                <th scope=\"row\" class=\"talent-name\">\n                    {{resource.name}}\n                </th>\n                <td class=\"talent-job\">\n                    {{resource.jobTitle}}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n"
        }
    },
    {
        "name": "rxSpinner",
        "moduleName": "'encore.ui.rxSpinner'",
        "displayName": "Rx Spinner",
        "srcFiles": [
            "src/rxSpinner/rxSpinner.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/stable.svg\" alt=\"stable\" title=\"\" /></a></p>\n\n<p>Add a spinner icon to any element</p>",
            "js": "/*jshint unused:false*/\nfunction rxSpinnerCtrl ($scope) {\n    $scope.loading = true;\n}",
            "html": "<div ng-controller=\"rxSpinnerCtrl\">\n    <div rx-spinner toggle=\"loading\" class=\"rxSpinnerExample\">Spinning = {{loading}}</div>\n    <button rx-toggle=\"loading\">Toggle Loading</button>\n</div>\n<style type=\"text/css\">\n.rxSpinnerExample {\n    background: #00ac31;\n    padding: 20px;\n    color: white;\n    line-height: 20px;\n}\n</style>\n"
        }
    },
    {
        "name": "rxToggle",
        "moduleName": "'encore.ui.rxToggle'",
        "displayName": "Rx Toggle",
        "srcFiles": [
            "src/rxToggle/rxToggle.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/experimental.svg\" alt=\"experimental\" title=\"\" /></a></p>\n\n<p>This component provides and attribute to handle toggling a boolean scope property for hide/show purposes. Normally used in conjunction with ng-show to toggle hidden content. See the collapse functionality in 'rxApp' for a real-world use.</p>\n\n<h2>Future plans</h2>\n\n<p>In conjunction with rxToggle, it would be helpful to have an attribute that binds the visibility state of an element with an event, so that when an event is fired from a component of the same type, it hides all other components of that time. For example, if a pop-up menu appears on click of a 'gear' component, it should hide any other existing pop-up menus currently showing.</p>",
            "js": "",
            "html": "<div>\n    <button rx-toggle=\"visible\" id=\"vacillator\">Toggle Div</button>\n\n    <p>Current state: {{visible}}</p>\n\n    <div ng-show=\"visible\" id=\"vacillated\">Shows when $scope.visibile == true</div>\n</div>"
        }
    },
    {
        "name": "rxTokenInterceptor",
        "moduleName": "'encore.ui.rxTokenInterceptor'",
        "displayName": "Rx Token Interceptor",
        "srcFiles": [
            "src/rxTokenInterceptor/rxTokenInterceptor.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [
            "rxSession",
            "rxLocalStorage"
        ],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Simple $http interceptor which adds auth token id to http requests.</p>",
            "js": "",
            "html": "<pre>\n    <code>\n        angular.module('encoreApp', ['encore.ui'])\n            .config(function ($httpProvider) {\n                $httpProvider.interceptors.push('TokenInterceptor');\n            });\n    </code>\n</pre>\n"
        }
    },
    {
        "name": "rxUnauthorizedInterceptor",
        "moduleName": "'encore.ui.rxUnauthorizedInterceptor'",
        "displayName": "Rx Unauthorized Interceptor",
        "srcFiles": [
            "src/rxUnauthorizedInterceptor/rxUnauthorizedInterceptor.js"
        ],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [
            "rxSession",
            "rxLocalStorage"
        ],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/unstable.svg\" alt=\"unstable\" title=\"\" /></a></p>\n\n<p>Simple $http interceptor which will redirect users back to login on 401.</p>",
            "js": "",
            "html": "<pre>\n    <code>\n        angular.module('encoreApp', ['encore.ui'])\n            .config(function ($httpProvider) {\n                $httpProvider.interceptors.push('UnauthorizedInterceptor');\n            });\n    </code>\n</pre>\n"
        }
    },
    {
        "name": "typeahead",
        "moduleName": "'encore.ui.typeahead'",
        "displayName": "Typeahead",
        "srcFiles": [],
        "tplFiles": [],
        "tplJsFiles": [],
        "dependencies": [],
        "docs": {
            "md": "<p><a href=\"http://github.com/badges/stability-badges\"><img src=\"http://badges.github.io/stability-badges/dist/experimental.svg\" alt=\"experimental\" title=\"\" /></a></p>\n\n<p>This component provides styles and a demo for the <a href=\"https://github.com/angular-ui/bootstrap/tree/master/src/typeahead\">the Angular-UI Bootstrap Typeahead plugin</a>, which is included as a dependency for Encore-UI.</p>\n\n<h2>Usage</h2>\n\n<p>Usage is the exact same as demoed on the Angular-UI Bootstrap site. See <a href=\"http://angular-ui.github.io/bootstrap/\">the Angular-UI Bootstrap Docs</a> for further guidance on usage and configuration of this component.</p>",
            "js": "/*jshint unused:false*/\nfunction typeaheadCtrl ($scope) {\n    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',\n        'Delaware', 'Dawood', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',\n        'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',\n        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',\n        'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',\n        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',\n        'West Virginia', 'Wisconsin', 'Wyoming'];\n}",
            "html": "<div ng-controller=\"typeaheadCtrl\">\n    <rx-form-item label=\"States\">\n        <input type=\"text\" ng-model=\"selected\" typeahead=\"state for state in states | filter:$viewValue | limitTo:8\" class=\"form-input\" id=\"typeahead\">\n    </rx-form-item>\n</div>"
        }
    }
]);