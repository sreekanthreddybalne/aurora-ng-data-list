auroraNgDataList
================

An AngularJS directive providing HTML like <datalist></datalist> functionality.

## Features
- works similar to `<datalist></datalist>` of HTML.
- an input text field to search dropdown list.
- easily configurable styles.


## Getting started

1. Add a `<script>` tag just after AngularJS framework.
    ```html
    <script src="./angular.min.js"></script>
    <script src="./core/dist/aurora-ng-data-list.js"></script>
    ```

2. Add `auroraNgDataList` module as a dependency to your application:
   ```javascript
   angular.module('myApp', ['auroraNgDataList']);
   ```

3. Use directive inside your application:
      ```html
      <aurora-ng-data-list
         items="myItemsList"
         to-show-property="itemProperty"
         on-select="doSomething(selectedItem)">
      </aurora-ng-data-list>
      ```
