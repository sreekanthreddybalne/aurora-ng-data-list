auroraDataList
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
  <script src="./core/dist/aurora-data-list.js"></script>
  ```

2. Add `auroraDataList` module as a dependency to your application:
   ```javascript
   angular.module('myApp', ['auroraDataList']);
   ```

3. Use directive inside your application:
      ```html
      <aurora-data-list items="ctrl.myItemsList" to-show-property="itemProperty" on-select="doSomething(selectedItem)"></aurora-data-list>
      ```
