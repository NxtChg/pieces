var css = `/*
 * # Semantic - Breadcrumb
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
           Breadcrumb
*******************************/
.ui.breadcrumb {
  margin: 1em 0em;
  display: inline-block;
  vertical-align: middle;
}
.ui.breadcrumb:first-child {
  margin-top: 0em;
}
.ui.breadcrumb:last-child {
  margin-bottom: 0em;
}
/*******************************
          Content
*******************************/
.ui.breadcrumb .divider {
  display: inline-block;
  opacity: 0.5;
  margin: 0em 0.15em 0em;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.3);
}
.ui.breadcrumb a.section {
  cursor: pointer;
}
.ui.breadcrumb .section {
  display: inline-block;
  margin: 0em;
  padding: 0em;
}
/* Loose Coupling */
.ui.breadcrumb.segment {
  display: inline-block;
  padding: 0.5em 1em;
}
/*******************************
            States
*******************************/
.ui.breadcrumb .active.section {
  font-weight: bold;
}
/*******************************
           Variations
*******************************/
.ui.small.breadcrumb {
  font-size: 0.75em;
}
.ui.large.breadcrumb {
  font-size: 1.1em;
}
.ui.huge.breadcrumb {
  font-size: 1.3em;
}

/*
 * # Semantic - Form
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
           Standard
*******************************/
/*--------------------
        Form
---------------------*/
.ui.form {
  position: relative;
  max-width: 100%;
}
.ui.form :first-child {
  margin-top: 0em;
}
.ui.form :last-child {
  margin-bottom: 0em;
}
/*--------------------
        Content
---------------------*/
.ui.form > p {
  margin: 1em 0;
}
/*--------------------
        Field
---------------------*/
.ui.form .field {
  clear: both;
  margin: 0em 0em 1em;
}
/*--------------------
        Labels
---------------------*/
.ui.form .field > label {
  margin: 0em 0em 0.3em;
  display: block;
  color: #555555;
  font-size: 0.875em;
}
/*--------------------
    Standard Inputs
---------------------*/
.ui.form textarea,
.ui.form input[type="text"],
.ui.form input[type="email"],
.ui.form input[type="date"],
.ui.form input[type="password"],
.ui.form input[type="number"],
.ui.form input[type="url"],
.ui.form input[type="tel"],
.ui.form .ui.input {
  width: 100%;
}
.ui.form textarea,
.ui.form input[type="text"],
.ui.form input[type="email"],
.ui.form input[type="date"],
.ui.form input[type="password"],
.ui.form input[type="number"],
.ui.form input[type="url"],
.ui.form input[type="tel"] {
  margin: 0em;
  padding: 0.65em 1em;
  font-size: 1em;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.15);
  outline: none;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 0.3125em;
  -webkit-transition: background-color 0.3s ease-out, -webkit-box-shadow 0.2s ease, border-color 0.2s ease;
  -moz-transition: background-color 0.3s ease-out, box-shadow 0.2s ease, border-color 0.2s ease;
  transition: background-color 0.3s ease-out, box-shadow 0.2s ease, border-color 0.2s ease;
  -webkit-box-shadow: 0em 0em 0em 0em rgba(0, 0, 0, 0.3) inset;
  box-shadow: 0em 0em 0em 0em rgba(0, 0, 0, 0.3) inset;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.textarea,
.ui.form textarea {
  line-height: 1.33;
  min-height: 8em;
  height: 12em;
  max-height: 24em;
  resize: vertical;
}
.ui.form textarea,
.ui.form input[type="checkbox"] {
  vertical-align: top;
}
/*--------------------
       Dividers
---------------------*/
.ui.form .divider {
  clear: both;
  margin: 1em 0em;
}
/*--------------------
   Types of Messages
---------------------*/
.ui.form .info.message,
.ui.form .warning.message,
.ui.form .error.message {
  display: none;
}
/* Assumptions */
.ui.form .message:first-child {
  margin-top: 0px;
}
/*--------------------
   Validation Prompt
---------------------*/
.ui.form .field .prompt.label {
  white-space: nowrap;
}
.ui.form .inline.field .prompt {
  margin-top: 0em;
  margin-left: 1em;
}
.ui.form .inline.field .prompt:before {
  margin-top: -0.3em;
  bottom: auto;
  right: auto;
  top: 50%;
  left: 0em;
}
/*******************************
            States
*******************************/
/*--------------------
        Focus
---------------------*/
.ui.form input[type="text"]:focus,
.ui.form input[type="email"]:focus,
.ui.form input[type="date"]:focus,
.ui.form input[type="password"]:focus,
.ui.form input[type="number"]:focus,
.ui.form input[type="url"]:focus,
.ui.form input[type="tel"]:focus,
.ui.form textarea:focus {
  color: rgba(0, 0, 0, 0.85);
  border-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  -webkit-appearance: none;
  -webkit-box-shadow: 0.3em 0em 0em 0em rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0.3em 0em 0em 0em rgba(0, 0, 0, 0.2) inset;
}
/*--------------------
        Error
---------------------*/
/* On Form */
.ui.form.warning .warning.message {
  display: block;
}
/*--------------------
        Warning
---------------------*/
/* On Form */
.ui.form.error .error.message {
  display: block;
}
/* On Field(s) */
.ui.form .fields.error .field label,
.ui.form .field.error label,
.ui.form .fields.error .field .input,
.ui.form .field.error .input {
  color: #D95C5C;
}
.ui.form .fields.error .field .corner.label,
.ui.form .field.error .corner.label {
  border-color: #D95C5C;
  color: #FFFFFF;
}
.ui.form .fields.error .field textarea,
.ui.form .fields.error .field input[type="text"],
.ui.form .fields.error .field input[type="email"],
.ui.form .fields.error .field input[type="date"],
.ui.form .fields.error .field input[type="password"],
.ui.form .fields.error .field input[type="number"],
.ui.form .fields.error .field input[type="url"],
.ui.form .fields.error .field input[type="tel"],
.ui.form .field.error textarea,
.ui.form .field.error input[type="text"],
.ui.form .field.error input[type="email"],
.ui.form .field.error input[type="date"],
.ui.form .field.error input[type="password"],
.ui.form .field.error input[type="number"],
.ui.form .field.error input[type="url"],
.ui.form .field.error input[type="tel"] {
  background-color: #FFFAFA;
  border-color: #E7BEBE;
  border-left: none;
  color: #D95C5C;
  padding-left: 1.2em;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  -webkit-box-shadow: 0.3em 0em 0em 0em #D95C5C inset;
  box-shadow: 0.3em 0em 0em 0em #D95C5C inset;
}
.ui.form .field.error textarea:focus,
.ui.form .field.error input[type="text"]:focus,
.ui.form .field.error input[type="email"]:focus,
.ui.form .field.error input[type="date"]:focus,
.ui.form .field.error input[type="password"]:focus,
.ui.form .field.error input[type="number"]:focus,
.ui.form .field.error input[type="url"]:focus,
.ui.form .field.error input[type="tel"]:focus {
  border-color: #ff5050;
  color: #ff5050;
  -webkit-appearance: none;
  -webkit-box-shadow: 0.3em 0em 0em 0em #FF5050 inset;
  box-shadow: 0.3em 0em 0em 0em #FF5050 inset;
}
/*----------------------------
  Dropdown Selection Warning
-----------------------------*/
.ui.form .fields.error .field .ui.dropdown,
.ui.form .fields.error .field .ui.dropdown .item,
.ui.form .field.error .ui.dropdown,
.ui.form .field.error .ui.dropdown .item {
  background-color: #FFFAFA;
  color: #D95C5C;
}
.ui.form .fields.error .field .ui.dropdown,
.ui.form .field.error .ui.dropdown {
  -webkit-box-shadow: 0px 0px 0px 1px #E7BEBE !important;
  box-shadow: 0px 0px 0px 1px #E7BEBE !important;
}
.ui.form .fields.error .field .ui.dropdown:hover,
.ui.form .field.error .ui.dropdown:hover {
  -webkit-box-shadow: 0px 0px 0px 1px #E7BEBE !important;
  box-shadow: 0px 0px 0px 1px #E7BEBE !important;
}
.ui.form .fields.error .field .ui.dropdown:hover .menu,
.ui.form .field.error .ui.dropdown:hover .menu {
  -webkit-box-shadow: 0px 1px 0px 1px #E7BEBE;
  box-shadow: 0px 1px 0px 1px #E7BEBE;
}
.ui.form .fields.error .field .ui.dropdown .menu .item:hover,
.ui.form .field.error .ui.dropdown .menu .item:hover {
  background-color: #FFF2F2;
}
.ui.form .fields.error .field .ui.dropdown .menu .active.item,
.ui.form .field.error .ui.dropdown .menu .active.item {
  background-color: #FDCFCF !important;
}
/*--------------------
  Empty (Placeholder)
---------------------*/
/* browsers require these rules separate */
.ui.form ::-webkit-input-placeholder {
  color: #AAAAAA;
}
.ui.form ::-moz-placeholder {
  color: #AAAAAA;
}
.ui.form :focus::-webkit-input-placeholder {
  color: #999999;
}
.ui.form :focus::-moz-placeholder {
  color: #999999;
}
/* Error Placeholder */
.ui.form .error ::-webkit-input-placeholder {
  color: rgba(255, 80, 80, 0.4);
}
.ui.form .error ::-moz-placeholder {
  color: rgba(255, 80, 80, 0.4);
}
.ui.form .error :focus::-webkit-input-placeholder {
  color: rgba(255, 80, 80, 0.7);
}
.ui.form .error :focus::-moz-placeholder {
  color: rgba(255, 80, 80, 0.7);
}
/*--------------------
       Disabled
---------------------*/
.ui.form .field :disabled,
.ui.form .field.disabled {
  opacity: 0.5;
}
.ui.form .field.disabled label {
  opacity: 0.5;
}
.ui.form .field.disabled :disabled {
  opacity: 1;
}
/*--------------------
     Loading State
---------------------*/
/* On Form */
.ui.form.loading {
  position: relative;
}
.ui.form.loading:after {
  position: absolute;
  top: 0%;
  left: 0%;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8) url(../images/loader-large.gif) no-repeat 50% 50%;
  visibility: visible;
}
/*******************************
           Variations
*******************************/
/*--------------------
      Fluid Width
---------------------*/
.ui.form.fluid {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
/*--------------------------
  Input w/ attached Button
---------------------------*/
.ui.form input.attached {
  width: auto;
}
/*--------------------
      Date Input
---------------------*/
.ui.form .date.field > label {
  position: relative;
}
.ui.form .date.field > label:after {
  position: absolute;
  top: 2em;
  right: 0.5em;
  font-family: 'Icons';
  content: '\\f133';
  font-size: 1.2em;
  font-weight: normal;
  color: #CCCCCC;
}
/*--------------------
    Inverted Colors
---------------------*/
.ui.inverted.form label {
  color: #FFFFFF;
}
.ui.inverted.form .field.error textarea,
.ui.inverted.form .field.error input[type="text"],
.ui.inverted.form .field.error input[type="email"],
.ui.inverted.form .field.error input[type="date"],
.ui.inverted.form .field.error input[type="password"],
.ui.inverted.form .field.error input[type="number"],
.ui.inverted.form .field.error input[type="url"],
.ui.inverted.form .field.error input[type="tel"] {
  background-color: #FFCCCC;
}
.ui.inverted.form .ui.checkbox label {
  color: rgba(255, 255, 255, 0.8);
}
.ui.inverted.form .ui.checkbox label:hover,
.ui.inverted.form .ui.checkbox .box:hover {
  color: #FFFFFF;
}
/*--------------------
     Field Groups
---------------------*/
/* Grouped Vertically */
.ui.form .grouped.fields {
  margin: 0em 0em 1em;
}
.ui.form .grouped.fields .field {
  display: block;
  float: none;
  margin: 0.5em 0em;
  padding: 0em;
}
/*--------------------
          Fields
---------------------*/
/* Split fields */
.ui.form .fields {
  clear: both;
}
.ui.form .fields:after {
  content: ' ';
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}
.ui.form .fields > .field {
  clear: none;
  float: left;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.form .fields > .field:first-child {
  border-left: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/* Other Combinations */
.ui.form .two.fields > .fields,
.ui.form .two.fields > .field {
  width: 50%;
  padding-left: 1%;
  padding-right: 1%;
}
.ui.form .three.fields > .fields,
.ui.form .three.fields > .field {
  width: 33.333%;
  padding-left: 1%;
  padding-right: 1%;
}
.ui.form .four.fields > .fields,
.ui.form .four.fields > .field {
  width: 25%;
  padding-left: 1%;
  padding-right: 1%;
}
.ui.form .five.fields > .fields,
.ui.form .five.fields > .field {
  width: 20%;
  padding-left: 1%;
  padding-right: 1%;
}
.ui.form .fields .field:first-child {
  padding-left: 0%;
}
.ui.form .fields .field:last-child {
  padding-right: 0%;
}
/* Fields grid support */
.ui.form .fields .wide.field {
  width: 6.25%;
  padding-left: 1%;
  padding-right: 1%;
}
.ui.form .fields .wide.field:first-child {
  padding-left: 0%;
}
.ui.form .fields .wide.field:last-child {
  padding-right: 0%;
}
.ui.form .fields > .one.wide.field {
  width: 6.25%;
}
.ui.form .fields > .two.wide.field {
  width: 12.5%;
}
.ui.form .fields > .three.wide.field {
  width: 18.75%;
}
.ui.form .fields > .four.wide.field {
  width: 25%;
}
.ui.form .fields > .five.wide.field {
  width: 31.25%;
}
.ui.form .fields > .six.wide.field {
  width: 37.5%;
}
.ui.form .fields > .seven.wide.field {
  width: 43.75%;
}
.ui.form .fields > .eight.wide.field {
  width: 50%;
}
.ui.form .fields > .nine.wide.field {
  width: 56.25%;
}
.ui.form .fields > .ten.wide.field {
  width: 62.5%;
}
.ui.form .fields > .eleven.wide.field {
  width: 68.75%;
}
.ui.form .fields > .twelve.wide.field {
  width: 75%;
}
.ui.form .fields > .thirteen.wide.field {
  width: 81.25%;
}
.ui.form .fields > .fourteen.wide.field {
  width: 87.5%;
}
.ui.form .fields > .fifteen.wide.field {
  width: 93.75%;
}
.ui.form .fields > .sixteen.wide.field {
  width: 100%;
}
/* Swap to full width on mobile */
@media only screen and (max-width: 767px) {
  .ui.form .two.fields > .fields,
  .ui.form .two.fields > .field,
  .ui.form .three.fields > .fields,
  .ui.form .three.fields > .field,
  .ui.form .four.fields > .fields,
  .ui.form .four.fields > .field,
  .ui.form .five.fields > .fields,
  .ui.form .five.fields > .field,
  .ui.form .fields > .two.wide.field,
  .ui.form .fields > .three.wide.field,
  .ui.form .fields > .four.wide.field,
  .ui.form .fields > .five.wide.field,
  .ui.form .fields > .six.wide.field,
  .ui.form .fields > .seven.wide.field,
  .ui.form .fields > .eight.wide.field,
  .ui.form .fields > .nine.wide.field,
  .ui.form .fields > .ten.wide.field,
  .ui.form .fields > .eleven.wide.field,
  .ui.form .fields > .twelve.wide.field,
  .ui.form .fields > .thirteen.wide.field,
  .ui.form .fields > .fourteen.wide.field,
  .ui.form .fields > .fifteen.wide.field,
  .ui.form .fields > .sixteen.wide.field {
    width: 100%;
    padding-left: 0%;
    padding-right: 0%;
  }
}
/*--------------------
    Inline Fields
---------------------*/
.ui.form .inline.fields .field {
  min-height: 1.3em;
  margin-right: 0.5em;
}
.ui.form .inline.fields .field > label,
.ui.form .inline.fields .field > p,
.ui.form .inline.fields .field > input,
.ui.form .inline.field > label,
.ui.form .inline.field > p,
.ui.form .inline.field > input {
  display: inline-block;
  width: auto;
  margin-top: 0em;
  margin-bottom: 0em;
  vertical-align: middle;
  font-size: 1em;
}
.ui.form .inline.fields .field > input,
.ui.form .inline.field > input {
  font-size: 0.875em;
}
.ui.form .inline.fields .field > :first-child,
.ui.form .inline.field > :first-child {
  margin: 0em 0.5em 0em 0em;
}
.ui.form .inline.fields .field > :only-child,
.ui.form .inline.field > :only-child {
  margin: 0em;
}
/*--------------------
        Sizes
---------------------*/
/* Standard */
.ui.small.form {
  font-size: 0.875em;
}
.ui.small.form textarea,
.ui.small.form input[type="text"],
.ui.small.form input[type="email"],
.ui.small.form input[type="date"],
.ui.small.form input[type="password"],
.ui.small.form input[type="number"],
.ui.small.form input[type="url"],
.ui.small.form input[type="tel"],
.ui.small.form label {
  font-size: 1em;
}
/* Large */
.ui.large.form {
  font-size: 1.125em;
}

/*
 * # Semantic - Grid
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Grid
*******************************/
.ui.grid {
  display: block;
  text-align: left;
  font-size: 0em;
  margin: 0% -1.5%;
  padding: 0%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body > .ui.grid {
  margin-left: 0% !important;
  margin-right: 0% !important;
}
.ui.grid:after,
.ui.row:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
/*-------------------
       Columns
--------------------*/
/* Standard 16 column */
.ui.grid > .column,
.ui.grid > .row > .column {
  display: inline-block;
  text-align: left;
  font-size: 1rem;
  width: 6.25%;
  padding-left: 1.5%;
  padding-right: 1.5%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: top;
}
/* Vertical padding when no rows */
.ui.grid > .column {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
/*-------------------
        Rows
--------------------*/
.ui.grid > .row {
  display: block;
  width: 100% !important;
  margin-top: 1.5%;
  padding: 1rem 0% 0%;
  font-size: 0rem;
}
.ui.grid > .row:first-child {
  padding-top: 0rem;
  margin-top: 0rem;
}
/*-------------------
      Content
--------------------*/
.ui.grid > .row > img,
.ui.grid > .row > .column > img {
  max-width: 100%;
}
.ui.grid .column > .ui.segment:only-child {
  margin: 0em;
}
/*******************************
           Variations
*******************************/
/*-----------------------
  Page Grid (Responsive)
-------------------------*/
.ui.page.grid {
  min-width: 320px;
  margin-left: 0%;
  margin-right: 0%;
}
@media only screen and (max-width: 991px) {
  .ui.page.grid {
    padding: 0% 4%;
  }
}
@media only screen and (min-width: 992px) {
  .ui.page.grid {
    padding: 0% 8%;
  }
}
@media only screen and (min-width: 1500px) {
  .ui.page.grid {
    padding: 0% 13%;
  }
}
@media only screen and (min-width: 1750px) {
  .ui.page.grid {
    padding: 0% 18%;
  }
}
@media only screen and (min-width: 2000px) {
  .ui.page.grid {
    padding: 0% 23%;
  }
}
/*-------------------
    Column Width
--------------------*/
/* Sizing Combinations */
.ui.grid > .row > .one.wide.column,
.ui.grid > .column.row > .one.wide.column,
.ui.grid > .one.wide.column,
.ui.column.grid > .one.wide.column {
  width: 6.25%;
}
.ui.grid > .row > .two.wide.column,
.ui.grid > .column.row > .two.wide.column,
.ui.grid > .two.wide.column,
.ui.column.grid > .two.wide.column {
  width: 12.5%;
}
.ui.grid > .row > .three.wide.column,
.ui.grid > .column.row > .three.wide.column,
.ui.grid > .three.wide.column,
.ui.column.grid > .three.wide.column {
  width: 18.75%;
}
.ui.grid > .row > .four.wide.column,
.ui.grid > .column.row > .four.wide.column,
.ui.grid > .four.wide.column,
.ui.column.grid > .four.wide.column {
  width: 25%;
}
.ui.grid > .row > .five.wide.column,
.ui.grid > .column.row > .five.wide.column,
.ui.grid > .five.wide.column,
.ui.column.grid > .five.wide.column {
  width: 31.25%;
}
.ui.grid > .row > .six.wide.column,
.ui.grid > .column.row > .six.wide.column,
.ui.grid > .six.wide.column,
.ui.column.grid > .six.wide.column {
  width: 37.5%;
}
.ui.grid > .row > .seven.wide.column,
.ui.grid > .column.row > .seven.wide.column,
.ui.grid > .seven.wide.column,
.ui.column.grid > .seven.wide.column {
  width: 43.75%;
}
.ui.grid > .row > .eight.wide.column,
.ui.grid > .column.row > .eight.wide.column,
.ui.grid > .eight.wide.column,
.ui.column.grid > .eight.wide.column {
  width: 50%;
}
.ui.grid > .row > .nine.wide.column,
.ui.grid > .column.row > .nine.wide.column,
.ui.grid > .nine.wide.column,
.ui.column.grid > .nine.wide.column {
  width: 56.25%;
}
.ui.grid > .row > .ten.wide.column,
.ui.grid > .column.row > .ten.wide.column,
.ui.grid > .ten.wide.column,
.ui.column.grid > .ten.wide.column {
  width: 62.5%;
}
.ui.grid > .row > .eleven.wide.column,
.ui.grid > .column.row > .eleven.wide.column,
.ui.grid > .eleven.wide.column,
.ui.column.grid > .eleven.wide.column {
  width: 68.75%;
}
.ui.grid > .row > .twelve.wide.column,
.ui.grid > .column.row > .twelve.wide.column,
.ui.grid > .twelve.wide.column,
.ui.column.grid > .twelve.wide.column {
  width: 75%;
}
.ui.grid > .row > .thirteen.wide.column,
.ui.grid > .column.row > .thirteen.wide.column,
.ui.grid > .thirteen.wide.column,
.ui.column.grid > .thirteen.wide.column {
  width: 81.25%;
}
.ui.grid > .row > .fourteen.wide.column,
.ui.grid > .column.row > .fourteen.wide.column,
.ui.grid > .fourteen.wide.column,
.ui.column.grid > .fourteen.wide.column {
  width: 87.5%;
}
.ui.grid > .row > .fifteen.wide.column,
.ui.grid > .column.row > .fifteen.wide.column,
.ui.grid > .fifteen.wide.column,
.ui.column.grid > .fifteen.wide.column {
  width: 93.75%;
}
.ui.grid > .row > .sixteen.wide.column,
.ui.grid > .column.row > .sixteen.wide.column,
.ui.grid > .sixteen.wide.column,
.ui.column.grid > .sixteen.wide.column {
  width: 100%;
}
/*-------------------
     Column Count
--------------------*/
/* Assume full width with one column */
.ui.one.column.grid > .row > .column,
.ui.one.column.grid > .column,
.ui.grid > .one.column.row > .column {
  width: 100%;
}
.ui.two.column.grid > .row > .column,
.ui.two.column.grid > .column,
.ui.grid > .two.column.row > .column {
  width: 50%;
}
.ui.three.column.grid > .row > .column,
.ui.three.column.grid > .column,
.ui.grid > .three.column.row > .column {
  width: 33.3333%;
}
.ui.four.column.grid > .row > .column,
.ui.four.column.grid > .column,
.ui.grid > .four.column.row > .column {
  width: 25%;
}
.ui.five.column.grid > .row > .column,
.ui.five.column.grid > .column,
.ui.grid > .five.column.row > .column {
  width: 20%;
}
.ui.six.column.grid > .row > .column,
.ui.six.column.grid > .column,
.ui.grid > .six.column.row > .column {
  width: 16.66667%;
}
.ui.seven.column.grid > .row > .column,
.ui.seven.column.grid > .column,
.ui.grid > .seven.column.row > .column {
  width: 14.2857%;
}
.ui.eight.column.grid > .row > .column,
.ui.eight.column.grid > .column,
.ui.grid > .eight.column.row > .column {
  width: 12.5%;
}
.ui.nine.column.grid > .row > .column,
.ui.nine.column.grid > .column,
.ui.grid > .nine.column.row > .column {
  width: 11.1111%;
}
.ui.ten.column.grid > .row > .column,
.ui.ten.column.grid > .column,
.ui.grid > .ten.column.row > .column {
  width: 10%;
}
.ui.eleven.column.grid > .row > .column,
.ui.eleven.column.grid > .column,
.ui.grid > .eleven.column.row > .column {
  width: 9.0909%;
}
.ui.twelve.column.grid > .row > .column,
.ui.twelve.column.grid > .column,
.ui.grid > .twelve.column.row > .column {
  width: 8.3333%;
}
.ui.thirteen.column.grid > .row > .column,
.ui.thirteen.column.grid > .column,
.ui.grid > .thirteen.column.row > .column {
  width: 7.6923%;
}
.ui.fourteen.column.grid > .row > .column,
.ui.fourteen.column.grid > .column,
.ui.grid > .fourteen.column.row > .column {
  width: 7.1428%;
}
.ui.fifteen.column.grid > .row > .column,
.ui.fifteen.column.grid > .column,
.ui.grid > .fifteen.column.row > .column {
  width: 6.6666%;
}
.ui.sixteen.column.grid > .row > .column,
.ui.sixteen.column.grid > .column,
.ui.grid > .sixteen.column.row > .column {
  width: 6.25%;
}
/* Assume full width with one column */
.ui.grid > .column:only-child,
.ui.grid > .row > .column:only-child {
  width: 100%;
}
/*----------------------
        Relaxed
-----------------------*/
.ui.relaxed.grid {
  margin: 0% -2.5%;
}
.ui.relaxed.grid > .column,
.ui.relaxed.grid > .row > .column {
  padding-left: 2.5%;
  padding-right: 2.5%;
}
/*----------------------
       "Floated"
-----------------------*/
.ui.grid .left.floated.column {
  float: left;
}
.ui.grid .right.floated.column {
  float: right;
}
/*----------------------
        Divided
-----------------------*/
.ui.divided.grid,
.ui.divided.grid > .row {
  display: table;
  width: 100%;
  margin-left: 0% !important;
  margin-right: 0% !important;
}
.ui.divided.grid > .column:not(.row),
.ui.divided.grid > .row > .column {
  display: table-cell;
  -webkit-box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.1), -2px 0px 0px 0px rgba(255, 255, 255, 0.8);
  box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.1), -2px 0px 0px 0px rgba(255, 255, 255, 0.8);
}
.ui.divided.grid > .column.row {
  display: table;
}
.ui.divided.grid > .column:first-child,
.ui.divided.grid > .row > .column:first-child {
  -webkit-box-shadow: none;
  box-shadow: none;
}
/* Vertically Divided */
.ui.vertically.divided.grid > .row {
  -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1), 0px -2px 0px 0px rgba(255, 255, 255, 0.8) !important;
  box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1), 0px -2px 0px 0px rgba(255, 255, 255, 0.8) !important;
}
.ui.vertically.divided.grid > .row > .column,
.ui.vertically.divided.grid > .column:not(.row),
.ui.vertically.divided.grid > .row:first-child {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
/*----------------------
         Celled
-----------------------*/
.ui.celled.grid {
  display: table;
  width: 100%;
  margin-left: 0% !important;
  margin-right: 0% !important;
  -webkit-box-shadow: 0px 0px 0px 1px #DFDFDF;
  box-shadow: 0px 0px 0px 1px #DFDFDF;
}
.ui.celled.grid > .row,
.ui.celled.grid > .column.row,
.ui.celled.grid > .column.row:first-child {
  display: table;
  width: 100%;
  margin-top: 0em;
  padding-top: 0em;
  -webkit-box-shadow: 0px -1px 0px 0px #dfdfdf;
  box-shadow: 0px -1px 0px 0px #dfdfdf;
}
.ui.celled.grid > .column:not(.row),
.ui.celled.grid > .row > .column {
  display: table-cell;
  padding: 0.75em;
  -webkit-box-shadow: -1px 0px 0px 0px #dfdfdf;
  box-shadow: -1px 0px 0px 0px #dfdfdf;
}
.ui.celled.grid > .column:first-child,
.ui.celled.grid > .row > .column:first-child {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.celled.page.grid {
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*----------------------
  Horizontally Centered
-----------------------*/
/* Vertical Centered */
.ui.left.aligned.grid,
.ui.left.aligned.grid > .row > .column,
.ui.left.aligned.grid > .column,
.ui.grid .left.aligned.column,
.ui.grid > .left.aligned.row > .column {
  text-align: left;
}
.ui.center.aligned.grid,
.ui.center.aligned.grid > .row > .column,
.ui.center.aligned.grid > .column,
.ui.grid .center.aligned.column,
.ui.grid > .center.aligned.row > .column {
  text-align: center;
}
.ui.right.aligned.grid,
.ui.right.aligned.grid > .row > .column,
.ui.right.aligned.grid > .column,
.ui.grid .right.aligned.column,
.ui.grid > .right.aligned.row > .column {
  text-align: right;
}
.ui.justified.grid,
.ui.justified.grid > .row > .column,
.ui.justified.grid > .column,
.ui.grid .justified.column,
.ui.grid > .justified.row > .column {
  text-align: justify;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
/*----------------------
  Vertically Centered
-----------------------*/
/* Vertical Centered */
.ui.top.aligned.grid,
.ui.top.aligned.grid > .row > .column,
.ui.top.aligned.grid > .column,
.ui.grid .top.aligned.column,
.ui.grid > .top.aligned.row > .column {
  vertical-align: top;
}
.ui.middle.aligned.grid,
.ui.middle.aligned.grid > .row > .column,
.ui.middle.aligned.grid > .column,
.ui.grid .middle.aligned.column,
.ui.grid > .middle.aligned.row > .column {
  vertical-align: middle;
}
.ui.bottom.aligned.grid,
.ui.bottom.aligned.grid > .row > .column,
.ui.bottom.aligned.grid > .column,
.ui.grid .bottom.aligned.column,
.ui.grid > .bottom.aligned.row > .column {
  vertical-align: bottom;
}
/*----------------------
  Equal Height Columns
-----------------------*/
.ui.grid > .equal.height.row {
  display: table;
  width: 100%;
}
.ui.grid > .equal.height.row > .column {
  display: table-cell;
}
/*----------------------
     Only (Device)
-----------------------*/
/* Mobile Only */
@media only screen and (max-width: 767px) {
  .ui.mobile.only.grid,
  .ui.grid > .mobile.only.row {
    display: block !important;
  }
  .ui.grid > .row > .mobile.only.column {
    display: inline-block !important;
  }
  .ui.divided.mobile.only.grid,
  .ui.celled.mobile.only.grid,
  .ui.divided.mobile.only.grid .row,
  .ui.celled.mobile.only.grid .row,
  .ui.divided.grid .mobile.only.row,
  .ui.celled.grid .mobile.only.row,
  .ui.grid .mobile.only.equal.height.row,
  .ui.mobile.only.grid .equal.height.row {
    display: table !important;
  }
  .ui.divided.grid > .row > .mobile.only.column,
  .ui.celled.grid > .row > .mobile.only.column,
  .ui.divided.mobile.only.grid > .row > .column,
  .ui.celled.mobile.only.grid > .row > .column,
  .ui.divided.mobile.only.grid > .column,
  .ui.celled.mobile.only.grid > .column {
    display: table-cell !important;
  }
}
@media only screen and (min-width: 768px) {
  .ui.mobile.only.grid,
  .ui.grid > .mobile.only.row,
  .ui.grid > .mobile.only.column,
  .ui.grid > .row > .mobile.only.column {
    display: none;
  }
}
/* Tablet Only */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.tablet.only.grid,
  .ui.grid > .tablet.only.row {
    display: block !important;
  }
  .ui.grid > .row > .tablet.only.column {
    display: inline-block !important;
  }
  .ui.divided.tablet.only.grid,
  .ui.celled.tablet.only.grid,
  .ui.divided.tablet.only.grid .row,
  .ui.celled.tablet.only.grid .row,
  .ui.divided.grid .tablet.only.row,
  .ui.celled.grid .tablet.only.row,
  .ui.grid .tablet.only.equal.height.row,
  .ui.tablet.only.grid .equal.height.row {
    display: table !important;
  }
  .ui.divided.grid > .row > .tablet.only.column,
  .ui.celled.grid > .row > .tablet.only.column,
  .ui.divided.tablet.only.grid > .row > .column,
  .ui.celled.tablet.only.grid > .row > .column,
  .ui.divided.tablet.only.grid > .column,
  .ui.celled.tablet.only.grid > .column {
    display: table-cell !important;
  }
}
@media only screen and (max-width: 767px), (min-width: 992px) {
  .ui.tablet.only.grid,
  .ui.grid > .tablet.only.row,
  .ui.grid > .tablet.only.column,
  .ui.grid > .row > .tablet.only.column {
    display: none;
  }
}
/* Computer Only */
@media only screen and (min-width: 992px) {
  .ui.computer.only.grid,
  .ui.grid > .computer.only.row {
    display: block !important;
  }
  .ui.grid > .row > .computer.only.column {
    display: inline-block !important;
  }
  .ui.divided.computer.only.grid,
  .ui.celled.computer.only.grid,
  .ui.divided.computer.only.grid .row,
  .ui.celled.computer.only.grid .row,
  .ui.divided.grid .computer.only.row,
  .ui.celled.grid .computer.only.row,
  .ui.grid .computer.only.equal.height.row,
  .ui.computer.only.grid .equal.height.row {
    display: table !important;
  }
  .ui.divided.grid > .row > .computer.only.column,
  .ui.celled.grid > .row > .computer.only.column,
  .ui.divided.computer.only.grid > .row > .column,
  .ui.celled.computer.only.grid > .row > .column,
  .ui.divided.computer.only.grid > .column,
  .ui.celled.computer.only.grid > .column {
    display: table-cell !important;
  }
}
@media only screen and (max-width: 991px) {
  .ui.computer.only.grid,
  .ui.grid > .computer.only.row,
  .ui.grid > .computer.only.column,
  .ui.grid > .row > .computer.only.column {
    display: none;
  }
}
/*-------------------
      Doubling
--------------------*/
/* Mobily Only */
@media only screen and (max-width: 767px) {
  .ui.two.column.doubling.grid > .row > .column,
  .ui.two.column.doubling.grid > .column,
  .ui.grid > .two.column.doubling.row > .column {
    width: 100%;
  }
  .ui.three.column.doubling.grid > .row > .column,
  .ui.three.column.doubling.grid > .column,
  .ui.grid > .three.column.doubling.row > .column {
    width: 100%;
  }
  .ui.four.column.doubling.grid > .row > .column,
  .ui.four.column.doubling.grid > .column,
  .ui.grid > .four.column.doubling.row > .column {
    width: 100%;
  }
  .ui.five.column.doubling.grid > .row > .column,
  .ui.five.column.doubling.grid > .column,
  .ui.grid > .five.column.doubling.row > .column {
    width: 100%;
  }
  .ui.six.column.doubling.grid > .row > .column,
  .ui.six.column.doubling.grid > .column,
  .ui.grid > .six.column.doubling.row > .column {
    width: 50%;
  }
  .ui.seven.column.doubling.grid > .row > .column,
  .ui.seven.column.doubling.grid > .column,
  .ui.grid > .seven.column.doubling.row > .column {
    width: 50%;
  }
  .ui.eight.column.doubling.grid > .row > .column,
  .ui.eight.column.doubling.grid > .column,
  .ui.grid > .eight.column.doubling.row > .column {
    width: 50%;
  }
  .ui.nine.column.doubling.grid > .row > .column,
  .ui.nine.column.doubling.grid > .column,
  .ui.grid > .nine.column.doubling.row > .column {
    width: 50%;
  }
  .ui.ten.column.doubling.grid > .row > .column,
  .ui.ten.column.doubling.grid > .column,
  .ui.grid > .ten.column.doubling.row > .column {
    width: 50%;
  }
  .ui.twelve.column.doubling.grid > .row > .column,
  .ui.twelve.column.doubling.grid > .column,
  .ui.grid > .twelve.column.doubling.row > .column {
    width: 33.3333333333333%;
  }
  .ui.fourteen.column.doubling.grid > .row > .column,
  .ui.fourteen.column.doubling.grid > .column,
  .ui.grid > .fourteen.column.doubling.row > .column {
    width: 33.3333333333333%;
  }
  .ui.sixteen.column.doubling.grid > .row > .column,
  .ui.sixteen.column.doubling.grid > .column,
  .ui.grid > .sixteen.column.doubling.row > .column {
    width: 25%;
  }
}
/* Tablet Only */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.two.column.doubling.grid > .row > .column,
  .ui.two.column.doubling.grid > .column,
  .ui.grid > .two.column.doubling.row > .column {
    width: 100%;
  }
  .ui.three.column.doubling.grid > .row > .column,
  .ui.three.column.doubling.grid > .column,
  .ui.grid > .three.column.doubling.row > .column {
    width: 50%;
  }
  .ui.four.column.doubling.grid > .row > .column,
  .ui.four.column.doubling.grid > .column,
  .ui.grid > .four.column.doubling.row > .column {
    width: 50%;
  }
  .ui.five.column.doubling.grid > .row > .column,
  .ui.five.column.doubling.grid > .column,
  .ui.grid > .five.column.doubling.row > .column {
    width: 33.3333333%;
  }
  .ui.six.column.doubling.grid > .row > .column,
  .ui.six.column.doubling.grid > .column,
  .ui.grid > .six.column.doubling.row > .column {
    width: 33.3333333%;
  }
  .ui.eight.column.doubling.grid > .row > .column,
  .ui.eight.column.doubling.grid > .column,
  .ui.grid > .eight.column.doubling.row > .column {
    width: 33.3333333%;
  }
  .ui.eight.column.doubling.grid > .row > .column,
  .ui.eight.column.doubling.grid > .column,
  .ui.grid > .eight.column.doubling.row > .column {
    width: 25%;
  }
  .ui.nine.column.doubling.grid > .row > .column,
  .ui.nine.column.doubling.grid > .column,
  .ui.grid > .nine.column.doubling.row > .column {
    width: 25%;
  }
  .ui.ten.column.doubling.grid > .row > .column,
  .ui.ten.column.doubling.grid > .column,
  .ui.grid > .ten.column.doubling.row > .column {
    width: 20%;
  }
  .ui.twelve.column.doubling.grid > .row > .column,
  .ui.twelve.column.doubling.grid > .column,
  .ui.grid > .twelve.column.doubling.row > .column {
    width: 16.6666666%;
  }
  .ui.fourteen.column.doubling.grid > .row > .column,
  .ui.fourteen.column.doubling.grid > .column,
  .ui.grid > .fourteen.column.doubling.row > .column {
    width: 14.28571428571429%;
  }
  .ui.sixteen.column.doubling.grid > .row > .column,
  .ui.sixteen.column.doubling.grid > .column,
  .ui.grid > .sixteen.column.doubling.row > .column {
    width: 12.5%;
  }
}
/*-------------------
      Stackable
--------------------*/
@media only screen and (max-width: 767px) {
  .ui.stackable.grid {
    display: block !important;
    padding: 0em;
    margin: 0em;
  }
  .ui.stackable.grid > .row > .column,
  .ui.stackable.grid > .column {
    display: block !important;
    width: auto !important;
    margin: 1em 0em 0em !important;
    padding: 1em 0em 0em !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
  .ui.stackable.divided.grid .column,
  .ui.stackable.celled.grid .column {
    border-top: 1px dotted rgba(0, 0, 0, 0.1);
  }
  .ui.stackable.grid > .row:first-child > .column:first-child,
  .ui.stackable.grid > .column:first-child {
    margin-top: 0em !important;
    padding-top: 0em !important;
  }
  .ui.stackable.divided.grid > .row:first-child > .column:first-child,
  .ui.stackable.celled.grid > .row:first-child > .column:first-child,
  .ui.stackable.divided.grid > .column:first-child,
  .ui.stackable.celled.grid > .column:first-child {
    border-top: none !important;
  }
  .ui.stackable.page.grid > .row > .column,
  .ui.stackable.page.grid > .column {
    padding-left: 1em !important;
    padding-right: 1em !important;
  }
  /* Remove pointers from vertical menus */
  .ui.stackable.grid .vertical.pointing.menu .item:after {
    display: none;
  }
}

/*
 * # Semantic - Menu
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Standard
*******************************/
/*--------------
      Menu
---------------*/
.ui.menu {
  margin: 1rem 0rem;
  background-color: #FFFFFF;
  font-size: 0px;
  font-weight: normal;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.1875rem;
}
.ui.menu:first-child {
  margin-top: 0rem;
}
.ui.menu:last-child {
  margin-bottom: 0rem;
}
.ui.menu:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.ui.menu > .item:first-child {
  border-radius: 0.1875em 0px 0px 0.1875em;
}
.ui.menu > .item:last-child {
  border-radius: 0px 0.1875em 0.1875em 0px;
}
.ui.menu .item {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  vertical-align: middle;
  line-height: 1;
  text-decoration: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: opacity 0.2s ease, background 0.2s ease, -webkit-box-shadow 0.2s ease;
  -moz-transition: opacity 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}
/*--------------
    Colors
---------------*/
/* Text Color */
.ui.menu .item,
.ui.menu .item > a:not(.button) {
  color: rgba(0, 0, 0, 0.75);
}
.ui.menu .item .item,
.ui.menu .item .item > a:not(.button) {
  color: rgba(30, 30, 30, 0.7);
}
.ui.menu .item .item .item,
.ui.menu .item .item .item > a:not(.button) {
  color: rgba(30, 30, 30, 0.6);
}
.ui.menu .dropdown .menu .item,
.ui.menu .dropdown .menu .item a:not(.button) {
  color: rgba(0, 0, 0, 0.75);
}
/* Hover */
.ui.menu .item .menu a.item:hover,
.ui.menu .item .menu .link.item:hover {
  color: rgba(0, 0, 0, 0.85);
}
.ui.menu .dropdown .menu .item a:not(.button):hover {
  color: rgba(0, 0, 0, 0.85);
}
/* Active */
.ui.menu .active.item,
.ui.menu .active.item a:not(.button) {
  color: rgba(0, 0, 0, 0.85);
  border-radius: 0px;
}
/*--------------
      Items
---------------*/
.ui.menu .item {
  position: relative;
  display: inline-block;
  padding: 0.83em 0.95em;
  border-top: 0em solid rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.ui.menu .menu {
  margin: 0em;
}
.ui.menu .item.left,
.ui.menu .menu.left {
  float: left;
}
.ui.menu .item.right,
.ui.menu .menu.right {
  float: right;
}
/*--------------
    Borders
---------------*/
.ui.menu .item:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 0px;
  width: 1px;
  height: 100%;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.05)), color-stop(50%, rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.05)));
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.05) 100%);
  background-image: -moz-linear-gradient(rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.05) 100%);
  background-image: linear-gradient(rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.05) 100%);
}
.ui.menu > .menu:not(.right):first-child > .item:first-child:before,
.ui.menu .item:first-child:before {
  display: none;
}
.ui.menu .menu.right .item:before,
.ui.menu .item.right:before {
  right: auto;
  left: 0px;
}
/*--------------
  Text Content
---------------*/
.ui.menu .text.item > *,
.ui.menu .item > p:only-child {
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  line-height: 1.3;
  color: rgba(0, 0, 0, 0.6);
}
.ui.menu .item > p:first-child {
  margin-top: 0px;
}
.ui.menu .item > p:last-child {
  margin-bottom: 0px;
}
/*--------------
     Button
---------------*/
.ui.menu:not(.vertical) .item > .button {
  position: relative;
  top: -0.05em;
  margin: -0.55em 0;
  padding-bottom: 0.55em;
  padding-top: 0.55em;
  font-size: 0.875em;
}
/*--------------
     Inputs
---------------*/
.ui.menu:not(.vertical) .item > .input {
  margin-top: -0.85em;
  margin-bottom: -0.85em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  width: 100%;
  vertical-align: top;
}
.ui.menu .item > .input input {
  padding-top: 0.35em;
  padding-bottom: 0.35em;
}
.ui.vertical.menu .item > .input input {
  margin: 0em;
  padding-top: 0.63em;
  padding-bottom: 0.63em;
}
/* Action Input */
.ui.menu:not(.vertical) .item > .button.labeled > .icon {
  padding-top: 0.6em;
}
.ui.menu:not(.vertical) .item .action.input > .button {
  font-size: 0.8em;
  padding: 0.55em 0.8em;
}
/* Resizes */
.ui.small.menu:not(.vertical) .item > .input input {
  padding-top: 0.4em;
  padding-bottom: 0.4em;
}
.ui.large.menu:not(.vertical) .item > .input input {
  top: -0.125em;
  padding-bottom: 0.6em;
  padding-top: 0.6em;
}
.ui.large.menu:not(.vertical) .item .action.input > .button {
  font-size: 0.8em;
  padding: 0.9em;
}
.ui.large.menu:not(.vertical) .item .action.input > .button > .icon {
  padding-top: 0.8em;
}
/*--------------
     Header
---------------*/
.ui.menu .header.item {
  background-color: rgba(0, 0, 0, 0.04);
  margin: 0em;
}
.ui.vertical.menu .header.item {
  font-weight: bold;
}
/*--------------
    Dropdowns
---------------*/
.ui.menu .dropdown .menu .item .icon {
  float: none;
  margin: 0em 0.75em 0em 0em;
}
.ui.menu .dropdown.item .menu {
  left: 1px;
  margin: 0px;
  min-width: -webkit-calc(99%);
  min-width: -moz-calc(99%);
  min-width: calc(99%);
  -webkit-box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.ui.secondary.menu .dropdown.item .menu {
  left: 0px;
  min-width: 100%;
}
.ui.menu .pointing.dropdown.item .menu {
  margin-top: 0.75em;
}
.ui.menu .simple.dropdown.item .menu {
  margin: 0px !important;
}
.ui.menu .dropdown.item .menu .item {
  width: 100%;
  color: rgba(0, 0, 0, 0.75);
}
.ui.menu .dropdown.item .menu .active.item {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.ui.menu .ui.dropdown .menu .item:before {
  display: none;
}
/*--------------
     Labels
---------------*/
.ui.menu .item > .label {
  background-color: rgba(0, 0, 0, 0.35);
  color: #FFFFFF;
  margin: -0.15em 0em -0.15em 0.5em;
  padding: 0.3em 0.8em;
  vertical-align: baseline;
}
.ui.menu .item > .floating.label {
  padding: 0.3em 0.8em;
}
/*--------------
      Images
---------------*/
.ui.menu .item > img:only-child {
  display: block;
  max-width: 100%;
  margin: 0em auto;
}
/*******************************
             States
*******************************/
/*--------------
      Hover
---------------*/
.ui.link.menu .item:hover,
.ui.menu .link.item:hover,
.ui.menu a.item:hover,
.ui.menu .ui.dropdown .menu .item:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.02);
}
.ui.menu .ui.dropdown.item.active {
  background-color: rgba(0, 0, 0, 0.02);
  -webkit-box-shadow: none;
  box-shadow: none;
  -moz-border-bottom-right-radius: 0em;
  border-bottom-right-radius: 0em;
  -moz-border-bottom-left-radius: 0em;
  border-bottom-left-radius: 0em;
}
/*--------------
      Down
---------------*/
.ui.link.menu .item:active,
.ui.menu .link.item:active,
.ui.menu a.item:active,
.ui.menu .ui.dropdown .menu .item:active {
  background-color: rgba(0, 0, 0, 0.05);
}
/*--------------
     Active
---------------*/
.ui.menu .active.item {
  background-color: rgba(0, 0, 0, 0.01);
  color: rgba(0, 0, 0, 0.95);
  -webkit-box-shadow: 0em 0.2em 0em inset;
  box-shadow: 0em 0.2em 0em inset;
}
.ui.vertical.menu .active.item {
  border-radius: 0em;
  -webkit-box-shadow: 0.2em 0em 0em inset;
  box-shadow: 0.2em 0em 0em inset;
}
.ui.vertical.menu > .active.item:first-child {
  border-radius: 0em 0.1875em 0em 0em;
}
.ui.vertical.menu > .active.item:last-child {
  border-radius: 0em 0em 0.1875em 0em;
}
.ui.vertical.menu > .active.item:only-child {
  border-radius: 0em 0.1875em 0.1875em 0em;
}
.ui.vertical.menu .active.item .menu .active.item {
  border-left: none;
}
.ui.vertical.menu .active.item .menu .active.item {
  padding-left: 1.5rem;
}
.ui.vertical.menu .item .menu .active.item {
  background-color: rgba(0, 0, 0, 0.03);
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*--------------
     Disabled
---------------*/
.ui.menu .item.disabled,
.ui.menu .item.disabled:hover {
  cursor: default;
  color: rgba(0, 0, 0, 0.2);
  background-color: transparent !important;
}
/*--------------------
     Loading
---------------------*/
/* On Form */
.ui.menu.loading {
  position: relative;
}
.ui.menu.loading:after {
  position: absolute;
  top: 0%;
  left: 0%;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8) url(../images/loader-large.gif) no-repeat 50% 50%;
  visibility: visible;
}
/*******************************
             Types
*******************************/
/*--------------
    Vertical
---------------*/
.ui.vertical.menu .item {
  display: block;
  height: auto !important;
  border-top: none;
  border-left: 0em solid rgba(0, 0, 0, 0);
  border-right: none;
}
.ui.vertical.menu > .item:first-child {
  border-radius: 0.1875em 0.1875em 0px 0px;
}
.ui.vertical.menu > .item:last-child {
  border-radius: 0px 0px 0.1875em 0.1875em;
}
.ui.vertical.menu .item > .label {
  float: right;
  text-align: center;
}
.ui.vertical.menu .item > i.icon {
  float: right;
  width: 1.22em;
  margin: 0em 0em 0em 0.5em;
}
.ui.vertical.menu .item > .label + i.icon {
  float: none;
  margin: 0em 0.25em 0em 0em;
}
/*--- Border ---*/
.ui.vertical.menu .item:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 0px;
  width: 100%;
  height: 1px;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.1) 1.5em, rgba(0, 0, 0, 0.03) 100%);
  background-image: -moz-linear-gradient(left, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.1) 1.5em, rgba(0, 0, 0, 0.03) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.03)), color-stop(1.5em, rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.03)));
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.1) 1.5em, rgba(0, 0, 0, 0.03) 100%);
}
.ui.vertical.menu .item:first-child:before {
  background-image: none !important;
}
/*--- Dropdown ---*/
.ui.vertical.menu .dropdown.item > i {
  float: right;
  content: "\\\f0da";
}
.ui.vertical.menu .dropdown.item .menu {
  top: 0% !important;
  left: 100%;
  margin: 0px 0px 0px 1px;
  -webkit-box-shadow: 0 0px 1px 1px #DDDDDD;
  box-shadow: 0 0px 1px 1px #DDDDDD;
}
.ui.vertical.menu .dropdown.item.active {
  border-top-right-radius: 0em;
  border-bottom-right-radius: 0em;
}
.ui.vertical.menu .dropdown.item .menu .item {
  font-size: 1rem;
}
.ui.vertical.menu .dropdown.item .menu .item i.icon {
  margin-right: 0em;
}
.ui.vertical.menu .dropdown.item.active {
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*--- Sub Menu ---*/
.ui.vertical.menu .item > .menu {
  margin: 0.5em -0.95em 0em;
}
.ui.vertical.menu .item > .menu > .item {
  padding: 0.5rem 1.5rem;
  font-size: 0.875em;
}
.ui.vertical.menu .item > .menu > .item:before {
  display: none;
}
/*--------------
     Tiered
---------------*/
.ui.tiered.menu > .sub.menu > .item {
  color: rgba(0, 0, 0, 0.4);
}
.ui.tiered.menu > .menu > .item:hover {
  color: rgba(0, 0, 0, 0.8);
}
.ui.tiered.menu .item.active {
  color: rgba(0, 0, 0, 0.8);
}
.ui.tiered.menu > .menu .item.active:after {
  position: absolute;
  content: '';
  margin-top: -1px;
  top: 100%;
  left: 0px;
  width: 100%;
  height: 2px;
  background-color: #FBFBFB;
}
.ui.tiered.menu .sub.menu {
  background-color: rgba(0, 0, 0, 0.01);
  border-radius: 0em;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #FFFFFF;
}
.ui.tiered.menu .sub.menu .item {
  font-size: 0.875rem;
}
.ui.tiered.menu .sub.menu .item:before {
  background-image: none;
}
.ui.tiered.menu .sub.menu .active.item {
  padding-top: 0.83em;
  background-color: transparent;
  border-radius: 0 0 0 0;
  border-top: medium none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7) !important;
}
.ui.tiered.menu .sub.menu .active.item:after {
  display: none;
}
/* Inverted */
.ui.inverted.tiered.menu > .menu > .item {
  color: rgba(255, 255, 255, 0.5);
}
.ui.inverted.tiered.menu .sub.menu {
  background-color: rgba(0, 0, 0, 0.2);
}
.ui.inverted.tiered.menu .sub.menu .item {
  color: rgba(255, 255, 255, 0.6);
}
.ui.inverted.tiered.menu > .menu > .item:hover {
  color: rgba(255, 255, 255, 0.9);
}
.ui.inverted.tiered.menu .active.item:after {
  display: none;
}
.ui.inverted.tiered.menu > .sub.menu > .active.item,
.ui.inverted.tiered.menu > .menu > .active.item {
  color: #ffffff !important;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/* Tiered pointing */
.ui.pointing.tiered.menu > .menu > .item:after {
  display: none;
}
.ui.pointing.tiered.menu > .sub.menu > .item:after {
  display: block;
}
/*--------------
     Tabular
---------------*/
.ui.tabular.menu {
  background-color: transparent;
  border-bottom: 1px solid #DCDDDE;
  border-radius: 0em;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.ui.tabular.menu .item {
  background-color: transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  padding-left: 1.4em;
  padding-right: 1.4em;
  color: rgba(0, 0, 0, 0.6);
}
.ui.tabular.menu .item:before {
  display: none;
}
/* Hover */
.ui.tabular.menu .item:hover {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.8);
}
/* Active */
.ui.tabular.menu .active.item {
  position: relative;
  background-color: #FFFFFF;
  color: rgba(0, 0, 0, 0.8);
  border-color: #DCDDDE;
  font-weight: bold;
  margin-bottom: -1px;
  border-bottom: 1px solid #FFFFFF;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 5px 5px 0 0;
}
/* Coupling with segment for attachment */
.ui.attached.tabular.menu {
  position: relative;
  z-index: 2;
}
.ui.tabular.menu ~ .bottom.attached.segment {
  margin: 1px 0px 0px 1px;
}
/*--------------
   Pagination
---------------*/
.ui.pagination.menu {
  margin: 0em;
  display: inline-block;
  vertical-align: middle;
}
.ui.pagination.menu .item {
  min-width: 3em;
  text-align: center;
}
.ui.pagination.menu .icon.item i.icon {
  vertical-align: top;
}
.ui.pagination.menu.floated {
  display: block;
}
/* active */
.ui.pagination.menu .active.item {
  border-top: none;
  padding-top: 0.83em;
  background-color: rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*--------------
   Secondary
---------------*/
.ui.secondary.menu {
  background-color: transparent;
  border-radius: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.secondary.menu > .menu > .item,
.ui.secondary.menu > .item {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none;
  height: auto !important;
  margin: 0em 0.25em;
  padding: 0.5em 1em;
  border-radius: 0.3125em;
}
.ui.secondary.menu > .menu > .item:before,
.ui.secondary.menu > .item:before {
  display: none !important;
}
.ui.secondary.menu .item > .input input {
  background-color: transparent;
  border: none;
}
.ui.secondary.menu .link.item,
.ui.secondary.menu a.item {
  opacity: 0.8;
  -webkit-transition: none;
  -moz-transition: none;
  transition: none;
}
.ui.secondary.menu .header.item {
  border-right: 0.1em solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  border-radius: 0em;
}
/* hover */
.ui.secondary.menu .link.item:hover,
.ui.secondary.menu a.item:hover {
  opacity: 1;
}
/* active */
.ui.secondary.menu > .menu > .active.item,
.ui.secondary.menu > .active.item {
  background-color: rgba(0, 0, 0, 0.08);
  opacity: 1;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.secondary.vertical.menu > .active.item {
  border-radius: 0.3125em;
}
/* inverted */
.ui.secondary.inverted.menu .link.item,
.ui.secondary.inverted.menu a.item {
  color: rgba(255, 255, 255, 0.5);
}
.ui.secondary.inverted.menu .link.item:hover,
.ui.secondary.inverted.menu a.item:hover {
  color: rgba(255, 255, 255, 0.9);
}
.ui.secondary.inverted.menu .active.item {
  background-color: rgba(255, 255, 255, 0.1);
}
/* disable variations */
.ui.secondary.item.menu > .item {
  margin: 0em;
}
.ui.secondary.attached.menu {
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*---------------------
   Secondary Pointing
-----------------------*/
.ui.secondary.pointing.menu {
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}
.ui.secondary.pointing.menu > .menu > .item,
.ui.secondary.pointing.menu > .item {
  margin: 0em 0em -3px;
  padding: 0.6em 0.95em;
  border-bottom: 3px solid rgba(0, 0, 0, 0);
  border-radius: 0em;
  -webkit-transition: color 0.2s
  ;
  -moz-transition: color 0.2s
  ;
  transition: color 0.2s
  ;
}
/* Item Types */
.ui.secondary.pointing.menu .header.item {
  margin-bottom: -3px;
  background-color: transparent !important;
  border-right-width: 0px !important;
  font-weight: bold !important;
  color: rgba(0, 0, 0, 0.8) !important;
}
.ui.secondary.pointing.menu .text.item {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.ui.secondary.pointing.menu > .menu > .item:after,
.ui.secondary.pointing.menu > .item:after {
  display: none;
}
/* Hover */
.ui.secondary.pointing.menu > .menu > .link.item:hover,
.ui.secondary.pointing.menu > .link.item:hover,
.ui.secondary.pointing.menu > .menu > a.item:hover,
.ui.secondary.pointing.menu > a.item:hover {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
/* Down */
.ui.secondary.pointing.menu > .menu > .link.item:active,
.ui.secondary.pointing.menu > .link.item:active,
.ui.secondary.pointing.menu > .menu > a.item:active,
.ui.secondary.pointing.menu > a.item:active {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.2);
}
/* Active */
.ui.secondary.pointing.menu > .menu > .item.active,
.ui.secondary.pointing.menu > .item.active {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*---------------------
   Secondary Vertical
-----------------------*/
.ui.secondary.vertical.pointing.menu {
  border: none;
  border-right: 3px solid rgba(0, 0, 0, 0.1);
}
.ui.secondary.vertical.menu > .item {
  border: none;
  margin: 0em 0em 0.3em;
  padding: 0.6em 0.8em;
  border-radius: 0.1875em;
}
.ui.secondary.vertical.menu > .header.item {
  border-radius: 0em;
}
.ui.secondary.vertical.pointing.menu > .item {
  margin: 0em -3px 0em 0em;
  border-bottom: none;
  border-right: 3px solid transparent;
  border-radius: 0em;
}
/* Hover */
.ui.secondary.vertical.pointing.menu > .item:hover {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
/* Down */
.ui.secondary.vertical.pointing.menu > .item:active {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.2);
}
/* Active */
.ui.secondary.vertical.pointing.menu > .item.active {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.4);
  color: rgba(0, 0, 0, 0.85);
}
/*--------------
    Inverted
---------------*/
.ui.secondary.inverted.menu {
  background-color: transparent;
}
.ui.secondary.inverted.pointing.menu {
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
}
.ui.secondary.inverted.pointing.menu > .item {
  color: rgba(255, 255, 255, 0.7);
}
.ui.secondary.inverted.pointing.menu > .header.item {
  color: #FFFFFF !important;
}
/* Hover */
.ui.secondary.inverted.pointing.menu > .menu > .item:hover,
.ui.secondary.inverted.pointing.menu > .item:hover {
  color: rgba(255, 255, 255, 0.85);
}
/* Down */
.ui.secondary.inverted.pointing.menu > .menu > .item:active,
.ui.secondary.inverted.pointing.menu > .item:active {
  border-color: rgba(255, 255, 255, 0.4);
}
/* Active */
.ui.secondary.inverted.pointing.menu > .menu > .item.active,
.ui.secondary.inverted.pointing.menu > .item.active {
  border-color: rgba(255, 255, 255, 0.8);
  color: #ffffff;
}
/*---------------------
   Inverted Vertical
----------------------*/
.ui.secondary.inverted.vertical.pointing.menu {
  border-right: 3px solid rgba(255, 255, 255, 0.1);
  border-bottom: none;
}
/*--------------
    Text Menu
---------------*/
.ui.text.menu {
  background-color: transparent;
  margin: 1rem -1rem;
  border-radius: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.text.menu > .item {
  opacity: 0.8;
  margin: 0em 1em;
  padding: 0em;
  height: auto !important;
  border-radius: 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: opacity 0.2s ease
  ;
  -moz-transition: opacity 0.2s ease
  ;
  transition: opacity 0.2s ease
  ;
}
.ui.text.menu > .item:before {
  display: none !important;
}
.ui.text.menu .header.item {
  background-color: transparent;
  opacity: 1;
  color: rgba(50, 50, 50, 0.8);
  font-size: 0.875rem;
  padding: 0em;
  text-transform: uppercase;
  font-weight: bold;
}
/*--- fluid text ---*/
.ui.text.item.menu .item {
  margin: 0em;
}
/*--- vertical text ---*/
.ui.vertical.text.menu {
  margin: 1rem 0em;
}
.ui.vertical.text.menu:first-child {
  margin-top: 0rem;
}
.ui.vertical.text.menu:last-child {
  margin-bottom: 0rem;
}
.ui.vertical.text.menu .item {
  float: left;
  clear: left;
  margin: 0.5em 0em;
}
.ui.vertical.text.menu .item > i.icon {
  float: none;
  margin: 0em 0.83em 0em 0em;
}
.ui.vertical.text.menu .header.item {
  margin: 0.8em 0em;
}
/*--- hover ---*/
.ui.text.menu .item:hover {
  opacity: 1;
  background-color: transparent;
}
/*--- active ---*/
.ui.text.menu .active.item {
  background-color: transparent;
  padding: 0em;
  border: none;
  opacity: 1;
  font-weight: bold;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/* disable variations */
.ui.text.pointing.menu .active.item:after {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.text.attached.menu {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.inverted.text.menu,
.ui.inverted.text.menu .item,
.ui.inverted.text.menu .item:hover,
.ui.inverted.text.menu .item.active {
  background-color: transparent;
}
/*--------------
    Icon Only
---------------*/
.ui.icon.menu,
.ui.vertical.icon.menu {
  width: auto;
  display: inline-block;
  height: auto;
}
.ui.icon.menu > .item {
  height: auto;
  text-align: center;
  color: rgba(60, 60, 60, 0.7);
}
.ui.icon.menu > .item > .icon {
  display: block;
  float: none !important;
  opacity: 1;
  margin: 0em auto !important;
}
.ui.icon.menu .icon:before {
  opacity: 1;
}
/* Item Icon Only */
.ui.menu .icon.item .icon {
  margin: 0em;
}
.ui.vertical.icon.menu {
  float: none;
}
/*--- inverted ---*/
.ui.inverted.icon.menu .item {
  color: rgba(255, 255, 255, 0.8);
}
.ui.inverted.icon.menu .icon {
  color: #ffffff;
}
/*--------------
   Labeled Icon
---------------*/
.ui.labeled.icon.menu {
  text-align: center;
}
.ui.labeled.icon.menu > .item > .icon {
  display: block;
  font-size: 1.5em !important;
  margin: 0em auto 0.3em !important;
}
/*******************************
           Variations
*******************************/
/*--------------
    Colors
---------------*/
/*--- Light Colors  ---*/
.ui.menu .green.active.item,
.ui.green.menu .active.item {
  border-color: #A1CF64 !important;
  color: #A1CF64 !important;
}
.ui.menu .red.active.item,
.ui.red.menu .active.item {
  border-color: #D95C5C !important;
  color: #D95C5C !important;
}
.ui.menu .blue.active.item,
.ui.blue.menu .active.item {
  border-color: #6ECFF5 !important;
  color: #6ECFF5 !important;
}
.ui.menu .purple.active.item,
.ui.purple.menu .active.item {
  border-color: #564F8A !important;
  color: #564F8A !important;
}
.ui.menu .orange.active.item,
.ui.orange.menu .active.item {
  border-color: #F05940 !important;
  color: #F05940 !important;
}
.ui.menu .teal.active.item,
.ui.teal.menu .active.item {
  border-color: #00B5AD !important;
  color: #00B5AD !important;
}
/*--------------
    Inverted
---------------*/
.ui.inverted.menu {
  background-color: #333333;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.inverted.menu .header.item {
  margin: 0em;
  background-color: rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.inverted.menu .item,
.ui.inverted.menu .item > a {
  color: #FFFFFF;
}
.ui.inverted.menu .item .item,
.ui.inverted.menu .item .item > a {
  color: rgba(255, 255, 255, 0.8);
}
.ui.inverted.menu .dropdown .menu .item,
.ui.inverted.menu .dropdown .menu .item a {
  color: rgba(0, 0, 0, 0.75) !important;
}
.ui.inverted.menu .item.disabled,
.ui.inverted.menu .item.disabled:hover {
  color: rgba(255, 255, 255, 0.2);
}
/*--- Border ---*/
.ui.inverted.menu .item:before {
  background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.03) 100%);
  background-image: -moz-linear-gradient(rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.03) 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.03)), color-stop(50%, rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0.03)));
  background-image: linear-gradient(rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.03) 100%);
}
.ui.vertical.inverted.menu .item:before {
  background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.03) 100%);
  background-image: -moz-linear-gradient(left, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.03) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.03)), color-stop(50%, rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0.03)));
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.03) 100%);
}
/*--- Hover ---*/
.ui.link.inverted.menu .item:hover,
.ui.inverted.menu .link.item:hover,
.ui.inverted.menu a.item:hover,
.ui.inverted.menu .dropdown.item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.ui.inverted.menu a.item:hover,
.ui.inverted.menu .item > a:hover,
.ui.inverted.menu .item .menu a.item:hover,
.ui.inverted.menu .item .menu .link.item:hover {
  color: #ffffff;
}
/*--- Down ---*/
.ui.inverted.menu a.item:active,
.ui.inverted.menu .dropdown.item:active,
.ui.inverted.menu .link.item:active,
.ui.inverted.menu a.item:active {
  background-color: rgba(255, 255, 255, 0.15);
}
/*--- Active ---*/
.ui.inverted.menu .active.item {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  background-color: rgba(255, 255, 255, 0.2);
}
.ui.inverted.menu .active.item,
.ui.inverted.menu .active.item a {
  color: #ffffff !important;
}
.ui.inverted.vertical.menu .item .menu .active.item {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}
/*--- Pointers ---*/
.ui.inverted.pointing.menu .active.item:after {
  background-color: #5B5B5B;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.inverted.pointing.menu .active.item:hover:after {
  background-color: #4A4A4A;
}
/*--------------
    Selection
---------------*/
.ui.selection.menu > .item {
  color: rgba(0, 0, 0, 0.4);
}
.ui.selection.menu > .item:hover {
  color: rgba(0, 0, 0, 0.6);
}
.ui.selection.menu > .item.active {
  color: rgba(0, 0, 0, 0.85);
}
.ui.inverted.selection.menu > .item {
  color: rgba(255, 255, 255, 0.4);
}
.ui.inverted.selection.menu > .item:hover {
  color: rgba(255, 255, 255, 0.9);
}
.ui.inverted.selection.menu > .item.active {
  color: #FFFFFF;
}
/*--------------
     Floated
---------------*/
.ui.floated.menu {
  float: left;
  margin: 0rem 0.5rem 0rem 0rem;
}
.ui.right.floated.menu {
  float: right;
  margin: 0rem 0rem 0rem 0.5rem;
}
/*--------------
 Inverted Colors
---------------*/
/*--- Light Colors  ---*/
.ui.grey.menu {
  background-color: #F0F0F0;
}
/*--- Inverted Colors  ---*/
.ui.inverted.green.menu {
  background-color: #A1CF64;
}
.ui.inverted.green.pointing.menu .active.item:after {
  background-color: #A1CF64;
}
.ui.inverted.red.menu {
  background-color: #D95C5C;
}
.ui.inverted.red.pointing.menu .active.item:after {
  background-color: #F16883;
}
.ui.inverted.blue.menu {
  background-color: #6ECFF5;
}
.ui.inverted.blue.pointing.menu .active.item:after {
  background-color: #6ECFF5;
}
.ui.inverted.purple.menu {
  background-color: #564F8A;
}
.ui.inverted.purple.pointing.menu .active.item:after {
  background-color: #564F8A;
}
.ui.inverted.orange.menu {
  background-color: #F05940;
}
.ui.inverted.orange.pointing.menu .active.item:after {
  background-color: #F05940;
}
.ui.inverted.teal.menu {
  background-color: #00B5AD;
}
.ui.inverted.teal.pointing.menu .active.item:after {
  background-color: #00B5AD;
}
/*--------------
     Fitted
---------------*/
.ui.fitted.menu .item,
.ui.fitted.menu .item .menu .item,
.ui.menu .fitted.item {
  padding: 0em;
}
.ui.horizontally.fitted.menu .item,
.ui.horizontally.fitted.menu .item .menu .item,
.ui.menu .horizontally.fitted.item {
  padding-top: 0.83em;
  padding-bottom: 0.83em;
}
.ui.vertically.fitted.menu .item,
.ui.vertically.fitted.menu .item .menu .item,
.ui.menu .vertically.fitted.item {
  padding-left: 0.95em;
  padding-right: 0.95em;
}
/*--------------
   Borderless
---------------*/
.ui.borderless.menu .item:before,
.ui.borderless.menu .item .menu .item:before,
.ui.menu .borderless.item:before {
  background-image: none;
}
/*-------------------
       Compact
--------------------*/
.ui.compact.menu {
  display: inline-block;
  margin: 0em;
  vertical-align: middle;
}
.ui.compact.vertical.menu {
  width: auto !important;
}
.ui.compact.vertical.menu .item:last-child::before {
  display: block;
}
/*-------------------
        Fluid
--------------------*/
.ui.menu.fluid,
.ui.vertical.menu.fluid {
  display: block;
  width: 100% !important;
}
/*-------------------
      Evenly Sized
--------------------*/
.ui.item.menu,
.ui.item.menu .item {
  width: 100%;
  padding-left: 0px !important;
  padding-right: 0px !important;
  text-align: center;
}
.ui.menu.two.item .item {
  width: 50%;
}
.ui.menu.three.item .item {
  width: 33.333%;
}
.ui.menu.four.item .item {
  width: 25%;
}
.ui.menu.five.item .item {
  width: 20%;
}
.ui.menu.six.item .item {
  width: 16.666%;
}
.ui.menu.seven.item .item {
  width: 14.285%;
}
.ui.menu.eight.item .item {
  width: 12.500%;
}
.ui.menu.nine.item .item {
  width: 11.11%;
}
.ui.menu.ten.item .item {
  width: 10.0%;
}
.ui.menu.eleven.item .item {
  width: 9.09%;
}
.ui.menu.twelve.item .item {
  width: 8.333%;
}
/*--------------
     Fixed
---------------*/
.ui.menu.fixed {
  position: fixed;
  z-index: 999;
  margin: 0em;
  border: none;
  width: 100%;
}
.ui.menu.fixed,
.ui.menu.fixed .item:first-child,
.ui.menu.fixed .item:last-child {
  border-radius: 0px !important;
}
.ui.menu.fixed.top {
  top: 0px;
  left: 0px;
  right: auto;
  bottom: auto;
}
.ui.menu.fixed.right {
  top: 0px;
  right: 0px;
  left: auto;
  bottom: auto;
  width: auto;
  height: 100%;
}
.ui.menu.fixed.bottom {
  bottom: 0px;
  left: 0px;
  top: auto;
  right: auto;
}
.ui.menu.fixed.left {
  top: 0px;
  left: 0px;
  right: auto;
  bottom: auto;
  width: auto;
  height: 100%;
}
/* Coupling with Grid */
.ui.fixed.menu + .ui.grid {
  padding-top: 2.75rem;
}
/*-------------------
       Pointing
--------------------*/
.ui.pointing.menu .active.item:after {
  position: absolute;
  bottom: -0.3em;
  left: 50%;
  content: "";
  margin-left: -0.3em;
  width: 0.6em;
  height: 0.6em;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background-image: none;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 2;
  -webkit-transition: background 0.2s ease
  ;
  -moz-transition: background 0.2s ease
  ;
  transition: background 0.2s ease
  ;
}
/* Don't double up pointers */
.ui.pointing.menu .active.item .menu .active.item:after {
  display: none;
}
.ui.vertical.pointing.menu .active.item:after {
  position: absolute;
  top: 50%;
  margin-top: -0.3em;
  right: -0.4em;
  bottom: auto;
  left: auto;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
/* Colors */
.ui.pointing.menu .active.item:after {
  background-color: #FCFCFC;
}
.ui.pointing.menu .active.item:hover:after {
  background-color: #FAFAFA;
}
.ui.vertical.pointing.menu .menu .active.item:after {
  background-color: #F4F4F4;
}
.ui.pointing.menu a.active.item:active:after {
  background-color: #F0F0F0;
}
/*--------------
    Attached
---------------*/
.ui.menu.attached {
  margin: 0rem;
  border-radius: 0px;
  /* avoid rgba multiplying */
  -webkit-box-shadow: 0px 0px 0px 1px #DDDDDD;
  box-shadow: 0px 0px 0px 1px #DDDDDD;
}
.ui.top.attached.menu {
  border-radius: 0.1875em 0.1875em 0px 0px;
}
.ui.menu.bottom.attached {
  border-radius: 0px 0px 0.1875em 0.1875em;
}
/*--------------
     Sizes
---------------*/
.ui.small.menu .item {
  font-size: 0.875rem;
}
.ui.small.vertical.menu {
  width: 13rem;
}
.ui.menu .item {
  font-size: 1rem;
}
.ui.vertical.menu {
  width: 15rem;
}
.ui.large.menu .item {
  font-size: 1.125rem;
}
.ui.large.menu .item .item {
  font-size: 0.875rem;
}
.ui.large.menu .dropdown .item {
  font-size: 1rem;
}
.ui.large.vertical.menu {
  width: 18rem;
}

/*
 * # Semantic - Message
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Message
*******************************/
.ui.message {
  position: relative;
  min-height: 18px;
  margin: 1em 0em;
  height: auto;
  background-color: #EFEFEF;
  padding: 1em;
  line-height: 1.33;
  color: rgba(0, 0, 0, 0.6);
  -webkit-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;
  -moz-transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease, box-shadow 0.1s ease;
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease, box-shadow 0.1s ease;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.325em 0.325em 0.325em 0.325em;
}
.ui.message:first-child {
  margin-top: 0em;
}
.ui.message:last-child {
  margin-bottom: 0em;
}
/*--------------
     Content
---------------*/
/* block with headers */
.ui.message .header {
  margin: 0em;
  font-size: 1.33em;
  font-weight: bold;
}
/* block with paragraphs */
.ui.message p {
  opacity: 0.85;
  margin: 1em 0em;
}
.ui.message p:first-child {
  margin-top: 0em;
}
.ui.message p:last-child {
  margin-bottom: 0em;
}
.ui.message .header + p {
  margin-top: 0.3em;
}
.ui.message > :first-child {
  margin-top: 0em;
}
.ui.message > :last-child {
  margin-bottom: 0em;
}
/* block with child list */
.ui.message ul.list {
  opacity: 0.85;
  list-style-position: inside;
  margin: 0.2em 0em;
  padding: 0em;
}
.ui.message ul.list li {
  position: relative;
  list-style-type: none;
  margin: 0em 0em 0.3em 1em;
  padding: 0em;
}
.ui.message ul.list li:before {
  position: absolute;
  content: '\\2022';
  top: -0.05em;
  left: -0.8em;
  height: 100%;
  vertical-align: baseline;
  opacity: 0.5;
}
.ui.message ul.list li:first-child {
  margin-top: 0em;
}
/* dismissable block */
.ui.message > .close.icon {
  cursor: pointer;
  position: absolute;
  right: 0em;
  top: 0em;
  width: 2.5em;
  height: 2.5em;
  opacity: 0.7;
  padding: 0.75em 0em 0em 0.75em;
  z-index: 2;
  -webkit-transition: opacity 0.1s linear
  ;
  -moz-transition: opacity 0.1s linear
  ;
  transition: opacity 0.1s linear
  ;
  z-index: 10;
}
.ui.message > .close.icon:hover {
  opacity: 1;
}
/*******************************
            States
*******************************/
.ui.message.visible {
  display: block !important;
}
.ui.icon.message.animating,
.ui.icon.message.visible {
  display: table !important;
}
.ui.message.hidden {
  display: none !important;
}
/*******************************
            Variations
*******************************/
/*--------------
    Compact
---------------*/
.ui.compact.message {
  display: inline-block;
}
/*--------------
    Attached
---------------*/
.ui.attached.message {
  margin-left: -1px;
  margin-right: -1px;
  margin-bottom: -1px;
  border-radius: 0.325em 0.325em 0em 0em;
  -webkit-box-shadow: 0em 0em 0em 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0em 0em 0em 1px rgba(0, 0, 0, 0.1) inset;
}
.ui.attached + .ui.attached.message:not(.top):not(.bottom) {
  margin-top: -1px;
  border-radius: 0em;
}
.ui.bottom.attached.message {
  margin-top: -1px;
  border-radius: 0em 0em 0.325em 0.325em;
}
.ui.bottom.attached.message:not(:last-child) {
  margin-bottom: 1em;
}
.ui.attached.icon.message {
  display: block;
  width: auto;
}
/*--------------
      Icon
---------------*/
.ui.icon.message {
  display: table;
  width: 100%;
}
.ui.icon.message > .icon:not(.close) {
  display: table-cell;
  vertical-align: middle;
  font-size: 3.8em;
  opacity: 0.5;
}
.ui.icon.message > .icon + .content {
  padding-left: 1em;
}
.ui.icon.message > .content {
  display: table-cell;
  vertical-align: middle;
}
/*--------------
    Inverted
---------------*/
.ui.inverted.message {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.95);
}
/*--------------
    Floating
---------------*/
.ui.floating.message {
  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset;
}
/*--------------
     Colors
---------------*/
.ui.black.message {
  background-color: #333333;
  color: rgba(255, 255, 255, 0.95);
}
/*--------------
     Types
---------------*/
.ui.blue.message,
.ui.info.message {
  background-color: #E6F4F9;
  color: #4D8796;
}
/* Green Text Block */
.ui.green.message {
  background-color: #DEFCD5;
  color: #52A954;
}
/* Yellow Text Block */
.ui.yellow.message,
.ui.warning.message {
  background-color: #F6F3D5;
  color: #96904D;
}
/* Red Text Block */
.ui.red.message {
  background-color: #F1D7D7;
  color: #A95252;
}
/* Success Text Block */
.ui.success.message,
.ui.positive.message {
  background-color: #DEFCD5;
  color: #52A954;
}
/* Error Text Block */
.ui.error.message,
.ui.negative.message {
  background-color: #F1D7D7;
  color: #A95252;
}
/*--------------
     Sizes
---------------*/
.ui.small.message {
  font-size: 0.875em;
}
.ui.message {
  font-size: 1em;
}
.ui.large.message {
  font-size: 1.125em;
}
.ui.huge.message {
  font-size: 1.5em;
}
.ui.massive.message {
  font-size: 2em;
}

/*
 * # Semantic - Table
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
             Table
*******************************/
/* Prototype */
.ui.table {
  width: 100%;
  border-collapse: collapse;
}
/* Table Content */
.ui.table th,
.ui.table tr,
.ui.table td {
  border-collapse: collapse;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.1s ease-out;
  -moz-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}
/* Headers */
.ui.table thead {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.ui.table tfoot th {
  background-color: rgba(0, 0, 0, 0.03);
}
.ui.table th {
  cursor: auto;
  background-color: rgba(0, 0, 0, 0.05);
  text-align: left;
  color: rgba(0, 0, 0, 0.8);
  padding: 0.5em 0.7em;
  vertical-align: middle;
}
.ui.table thead th:first-child {
  border-radius: 5px 0px 0px 0px;
}
.ui.table thead th:last-child {
  border-radius: 0px 5px 0px 0px;
}
.ui.table tfoot th:first-child {
  border-radius: 0px 0px 0px 5px;
}
.ui.table tfoot th:last-child {
  border-radius: 0px 0px 5px 0px;
}
.ui.table tfoot th:only-child {
  border-radius: 0px 0px 5px 5px;
}
/* Table Cells */
.ui.table td {
  padding: 0.40em 0.7em;
  vertical-align: middle;
}
/* Footer */
.ui.table tfoot {
  border-top: 1px solid rgba(0, 0, 0, 0.03);
}
.ui.table tfoot th {
  font-weight: normal;
  font-style: italic;
}
/* Table Striping */
.ui.table tbody tr:nth-child(2n) {
  background-color: rgba(0, 0, 50, 0.02);
}
/* Icons */
.ui.table > .icon {
  vertical-align: baseline;
}
.ui.table > .icon:only-child {
  margin: 0em;
}
/* Table Segment */
.ui.table.segment:after {
  display: none;
}
.ui.table.segment.stacked:after {
  display: block;
}
/* Responsive */
@media only screen and (max-width: 768px) {
  .ui.table {
    display: block;
    padding: 0em;
  }
  .ui.table thead,
  .ui.table tfoot {
    display: none;
  }
  .ui.table tbody {
    display: block;
  }
  .ui.table tr {
    display: block;
  }
  .ui.table tr > td {
    width: 100% !important;
    display: block;
    border: none !important;
    padding: 0.25em 0.75em;
    -webkit-box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05) !important;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05) !important;
  }
  .ui.table td:first-child {
    font-weight: bold;
    padding-top: 1em;
  }
  .ui.table td:last-child {
    -webkit-box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
    box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset !important;
    padding-bottom: 1em;
  }
  /* Clear BG Colors */
  .ui.table tr > td.warning,
  .ui.table tr > td.error,
  .ui.table tr > td.active,
  .ui.table tr > td.positive,
  .ui.table tr > td.negative {
    background-color: transparent !important;
  }
}
/*******************************
             States
*******************************/
/*--------------
      Hover
---------------*/
/* Sortable */
.ui.sortable.table th.disabled:hover {
  cursor: auto;
  text-align: left;
  font-weight: bold;
  color: #333333;
  color: rgba(0, 0, 0, 0.8);
}
.ui.sortable.table thead th:hover {
  background-color: rgba(0, 0, 0, 0.13);
  color: rgba(0, 0, 0, 0.8);
}
/* Inverted Sortable */
.ui.inverted.sortable.table thead th:hover {
  background-color: rgba(255, 255, 255, 0.13);
  color: #ffffff;
}
/*--------------
    Positive
---------------*/
.ui.table tr.positive,
.ui.table td.positive {
  -webkit-box-shadow: 2px 0px 0px #119000 inset;
  box-shadow: 2px 0px 0px #119000 inset;
}
.ui.table tr.positive td,
.ui.table td.positive {
  background-color: #F2F8F0 !important;
  color: #119000 !important;
}
.ui.celled.table tr.positive:hover td,
.ui.celled.table tr:hover td.positive,
.ui.table tr.positive:hover td,
.ui.table td:hover.positive,
.ui.table th:hover.positive {
  background-color: #ECF5E9 !important;
  color: #119000 !important;
}
/*--------------
     Negative
---------------*/
.ui.table tr.negative,
.ui.table td.negative {
  -webkit-box-shadow: 2px 0px 0px #CD2929 inset;
  box-shadow: 2px 0px 0px #CD2929 inset;
}
.ui.table tr.negative td,
.ui.table td.negative {
  background-color: #F9F4F4;
  color: #CD2929 !important;
}
.ui.celled.table tr.negative:hover td,
.ui.celled.table tr:hover td.negative,
.ui.table tr.negative:hover td,
.ui.table td:hover.negative,
.ui.table th:hover.negative {
  background-color: #F2E8E8;
  color: #CD2929;
}
/*--------------
      Error
---------------*/
.ui.table tr.error,
.ui.table td.error {
  -webkit-box-shadow: 2px 0px 0px #CD2929 inset;
  box-shadow: 2px 0px 0px #CD2929 inset;
}
.ui.table tr.error td,
.ui.table td.error,
.ui.table th.error {
  background-color: #F9F4F4;
  color: #CD2929;
}
.ui.celled.table tr.error:hover td,
.ui.celled.table tr:hover td.error,
.ui.table tr.error:hover td,
.ui.table td:hover.error,
.ui.table th:hover.error {
  background-color: #F2E8E8;
  color: #CD2929;
}
/*--------------
     Warning
---------------*/
.ui.table tr.warning,
.ui.table td.warning {
  -webkit-box-shadow: 2px 0px 0px #7D6C00 inset;
  box-shadow: 2px 0px 0px #7D6C00 inset;
}
.ui.table tr.warning td,
.ui.table td.warning,
.ui.table th.warning {
  background-color: #FBF6E9;
  color: #7D6C00;
}
.ui.celled.table tr.warning:hover td,
.ui.celled.table tr:hover td.warning,
.ui.table tr.warning:hover td,
.ui.table td:hover.warning,
.ui.table th:hover.warning {
  background-color: #F3EDDC;
  color: #7D6C00;
}
/*--------------
     Active
---------------*/
.ui.table tr.active,
.ui.table td.active {
  -webkit-box-shadow: 2px 0px 0px rgba(50, 50, 50, 0.9) inset;
  box-shadow: 2px 0px 0px rgba(50, 50, 50, 0.9) inset;
}
.ui.table tr.active td,
.ui.table tr td.active {
  background-color: #E0E0E0;
  color: rgba(50, 50, 50, 0.9);
  /* border-color: rgba(0, 0, 0, 0.15) !important; */
}
/*--------------
     Disabled
---------------*/
.ui.table tr.disabled td,
.ui.table tr td.disabled,
.ui.table tr.disabled:hover td,
.ui.table tr:hover td.disabled {
  color: rgba(150, 150, 150, 0.3);
}
/*******************************
          Variations
*******************************/
/*--------------
  Column Count
---------------*/
.ui.two.column.table td {
  width: 50%;
}
.ui.three.column.table td {
  width: 33.3333%;
}
.ui.four.column.table td {
  width: 25%;
}
.ui.five.column.table td {
  width: 20%;
}
.ui.six.column.table td {
  width: 16.66667%;
}
.ui.seven.column.table td {
  width: 14.2857%;
}
.ui.eight.column.table td {
  width: 12.5%;
}
.ui.nine.column.table td {
  width: 11.1111%;
}
.ui.ten.column.table td {
  width: 10%;
}
.ui.eleven.column.table td {
  width: 9.0909%;
}
.ui.twelve.column.table td {
  width: 8.3333%;
}
.ui.thirteen.column.table td {
  width: 7.6923%;
}
.ui.fourteen.column.table td {
  width: 7.1428%;
}
.ui.fifteen.column.table td {
  width: 6.6666%;
}
.ui.sixteen.column.table td {
  width: 6.25%;
}
/* Column Width */
.ui.table th.one.wide,
.ui.table td.one.wide {
  width: 6.25%;
}
.ui.table th.two.wide,
.ui.table td.two.wide {
  width: 12.5%;
}
.ui.table th.three.wide,
.ui.table td.three.wide {
  width: 18.75%;
}
.ui.table th.four.wide,
.ui.table td.four.wide {
  width: 25%;
}
.ui.table th.five.wide,
.ui.table td.five.wide {
  width: 31.25%;
}
.ui.table th.six.wide,
.ui.table td.six.wide {
  width: 37.5%;
}
.ui.table th.seven.wide,
.ui.table td.seven.wide {
  width: 43.75%;
}
.ui.table th.eight.wide,
.ui.table td.eight.wide {
  width: 50%;
}
.ui.table th.nine.wide,
.ui.table td.nine.wide {
  width: 56.25%;
}
.ui.table th.ten.wide,
.ui.table td.ten.wide {
  width: 62.5%;
}
.ui.table th.eleven.wide,
.ui.table td.eleven.wide {
  width: 68.75%;
}
.ui.table th.twelve.wide,
.ui.table td.twelve.wide {
  width: 75%;
}
.ui.table th.thirteen.wide,
.ui.table td.thirteen.wide {
  width: 81.25%;
}
.ui.table th.fourteen.wide,
.ui.table td.fourteen.wide {
  width: 87.5%;
}
.ui.table th.fifteen.wide,
.ui.table td.fifteen.wide {
  width: 93.75%;
}
.ui.table th.sixteen.wide,
.ui.table td.sixteen.wide {
  width: 100%;
}
/*--------------
     Celled
---------------*/
.ui.celled.table {
  color: rgba(0, 0, 0, 0.8);
}
.ui.celled.table tbody tr,
.ui.celled.table tfoot tr {
  border: none;
}
.ui.celled.table th,
.ui.celled.table td {
  border: 1px solid rgba(0, 0, 0, 0.1);
}
/* Coupling with segment */
.ui.celled.table.segment th:first-child,
.ui.celled.table.segment td:first-child {
  border-left: none;
}
.ui.celled.table.segment th:last-child,
.ui.celled.table.segment td:last-child {
  border-right: none;
}
/*--------------
    Sortable
---------------*/
.ui.sortable.table thead th {
  cursor: pointer;
  white-space: nowrap;
}
.ui.sortable.table thead th.sorted,
.ui.sortable.table thead th.sorted:hover {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.ui.sortable.table thead th:after {
  display: inline-block;
  content: '';
  width: 1em;
  opacity: 0.8;
  margin: 0em 0em 0em 0.5em;
  font-family: 'Icons';
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
}
.ui.sortable.table thead th.ascending:after {
  content: '\\25b4';
}
.ui.sortable.table thead th.descending:after {
  content: '\\25be';
}
/*--------------
    Inverted
---------------*/
/* Text Color */
.ui.inverted.table td {
  color: rgba(255, 255, 255, 0.9);
}
.ui.inverted.table th {
  background-color: rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.9);
}
/* Stripes */
.ui.inverted.table tbody tr:nth-child(2n) {
  background-color: rgba(255, 255, 255, 0.06);
}
/*--------------
   Definition
---------------*/
.ui.definition.table td:first-child {
  font-weight: bold;
}
/*--------------
   Collapsing
---------------*/
.ui.collapsing.table {
  width: auto;
}
/*--------------
      Basic
---------------*/
.ui.basic.table th {
  background-color: transparent;
  padding: 0.5em;
}
.ui.basic.table tbody tr {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.ui.basic.table td {
  padding: 0.8em 0.5em;
}
.ui.basic.table tbody tr:nth-child(2n) {
  background-color: transparent !important;
}
/*--------------
     Padded
---------------*/
.ui.padded.table th,
.ui.padded.table td {
  padding: 0.8em 1em;
}
.ui.compact.table th {
  padding: 0.3em 0.5em;
}
.ui.compact.table td {
  padding: 0.2em 0.5em;
}
/*--------------
      Sizes
---------------*/
/* Small */
.ui.small.table {
  font-size: 0.875em;
}
/* Standard */
.ui.table {
  font-size: 1em;
}
/* Large */
.ui.large.table {
  font-size: 1.1em;
}

/*
 * # Semantic - basic.Icon (Basic)
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
          Basic Icon
*******************************/
@font-face {
  font-family: 'Basic Icons';
  src: url(../fonts/basic.icons.eot);
  src: url(../fonts/basic.icons.eot?#iefix) format('embedded-opentype'), url(../fonts/basic.icons.svg#basic.icons) format('svg'), url(../fonts/basic.icons.woff) format('woff'), url(../fonts/basic.icons.ttf) format('truetype');
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-decoration: inherit;
  text-transform: none;
}
i.basic.icon {
  display: inline-block;
  opacity: 0.75;
  margin: 0em 0.25em 0em 0em;
  width: 1.23em;
  height: 1em;
  font-family: 'Basic Icons';
  font-style: normal;
  line-height: 1;
  font-weight: normal;
  text-decoration: inherit;
  text-align: center;
  speak: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  font-smoothing: antialiased;
}
/* basic.icons available */
i.basic.icon.circle.attention:before {
  content: '\\2757';
}
/* '❗' */
i.basic.icon.circle.help:before {
  content: '\\e704';
}
/* '' */
i.basic.icon.circle.info:before {
  content: '\\e705';
}
/* '' */
i.basic.icon.add:before {
  content: '\\2795';
}
/* '➕' */
i.basic.icon.chart:before {
  content: '📈';
}
/* '\\1f4c8' */
i.basic.icon.chart.bar:before {
  content: '📊';
}
/* '\\1f4ca' */
i.basic.icon.chart.pie:before {
  content: '\\e7a2';
}
/* '' */
i.basic.icon.resize.full:before {
  content: '\\e744';
}
/* '' */
i.basic.icon.resize.horizontal:before {
  content: '\\2b0d';
}
/* '⬍' */
i.basic.icon.resize.small:before {
  content: '\\e746';
}
/* '' */
i.basic.icon.resize.vertical:before {
  content: '\\2b0c';
}
/* '⬌' */
i.basic.icon.down:before {
  content: '\\2193';
}
/* '↓' */
i.basic.icon.down.triangle:before {
  content: '\\25be';
}
/* '▾' */
i.basic.icon.down.arrow:before {
  content: '\\e75c';
}
/* '' */
i.basic.icon.left:before {
  content: '\\2190';
}
/* '←' */
i.basic.icon.left.triangle:before {
  content: '\\25c2';
}
/* '◂' */
i.basic.icon.left.arrow:before {
  content: '\\e75d';
}
/* '' */
i.basic.icon.right:before {
  content: '\\2192';
}
/* '→' */
i.basic.icon.right.triangle:before {
  content: '\\25b8';
}
/* '▸' */
i.basic.icon.right.arrow:before {
  content: '\\e75e';
}
/* '' */
i.basic.icon.up:before {
  content: '\\2191';
}
/* '↑' */
i.basic.icon.up.triangle:before {
  content: '\\25b4';
}
/* '▴' */
i.basic.icon.up.arrow:before {
  content: '\\e75f';
}
/* '' */
i.basic.icon.folder:before {
  content: '\\e810';
}
/* '' */
i.basic.icon.open.folder:before {
  content: '📂';
}
/* '\\1f4c2' */
i.basic.icon.globe:before {
  content: '𝌍';
}
/* '\\1d30d' */
i.basic.icon.desk.globe:before {
  content: '🌐';
}
/* '\\1f310' */
i.basic.icon.star:before {
  content: '\\e801';
}
/* '' */
i.basic.icon.star.empty:before {
  content: '\\e800';
}
/* '' */
i.basic.icon.star.half:before {
  content: '\\e701';
}
/* '' */
i.basic.icon.lock:before {
  content: '🔒';
}
/* '\\1f512' */
i.basic.icon.unlock:before {
  content: '🔓';
}
/* '\\1f513' */
i.basic.icon.layout.grid:before {
  content: '\\e80c';
}
/* '' */
i.basic.icon.layout.block:before {
  content: '\\e708';
}
/* '' */
i.basic.icon.layout.list:before {
  content: '\\e80b';
}
/* '' */
i.basic.icon.heart.empty:before {
  content: '\\2661';
}
/* '♡' */
i.basic.icon.heart:before {
  content: '\\2665';
}
/* '♥' */
i.basic.icon.asterisk:before {
  content: '\\2731';
}
/* '✱' */
i.basic.icon.attachment:before {
  content: '📎';
}
/* '\\1f4ce' */
i.basic.icon.attention:before {
  content: '\\26a0';
}
/* '⚠' */
i.basic.icon.trophy:before {
  content: '🏉';
}
/* '\\1f3c9' */
i.basic.icon.barcode:before {
  content: '\\e792';
}
/* '' */
i.basic.icon.cart:before {
  content: '\\e813';
}
/* '' */
i.basic.icon.block:before {
  content: '🚫';
}
/* '\\1f6ab' */
i.basic.icon.book:before {
  content: '📖';
}
i.basic.icon.bookmark:before {
  content: '🔖';
}
/* '\\1f516' */
i.basic.icon.calendar:before {
  content: '📅';
}
/* '\\1f4c5' */
i.basic.icon.cancel:before {
  content: '\\2716';
}
/* '✖' */
i.basic.icon.close:before {
  content: '\\e80d';
}
/* '' */
i.basic.icon.color:before {
  content: '\\e794';
}
/* '' */
i.basic.icon.chat:before {
  content: '\\e720';
}
/* '' */
i.basic.icon.check:before {
  content: '\\2611';
}
/* '☑' */
i.basic.icon.time:before {
  content: '🕔';
}
/* '\\1f554' */
i.basic.icon.cloud:before {
  content: '\\2601';
}
/* '☁' */
i.basic.icon.code:before {
  content: '\\e714';
}
/* '' */
i.basic.icon.email:before {
  content: '\\40';
}
/* '@' */
i.basic.icon.settings:before {
  content: '\\26ef';
}
/* '⛯' */
i.basic.icon.setting:before {
  content: '\\2699';
}
/* '⚙' */
i.basic.icon.comment:before {
  content: '\\e802';
}
/* '' */
i.basic.icon.clockwise.counter:before {
  content: '\\27f2';
}
/* '⟲' */
i.basic.icon.clockwise:before {
  content: '\\27f3';
}
/* '⟳' */
i.basic.icon.cube:before {
  content: '\\e807';
}
/* '' */
i.basic.icon.direction:before {
  content: '\\27a2';
}
/* '➢' */
i.basic.icon.doc:before {
  content: '📄';
}
/* '\\1f4c4' */
i.basic.icon.docs:before {
  content: '\\e736';
}
/* '' */
i.basic.icon.dollar:before {
  content: '💵';
}
/* '\\1f4b5' */
i.basic.icon.paint:before {
  content: '\\e7b5';
}
/* '' */
i.basic.icon.edit:before {
  content: '\\270d';
}
/* '✍' */
i.basic.icon.eject:before {
  content: '\\2ecf';
}
/* '⻏' */
i.basic.icon.export:before {
  content: '\\e715';
}
/* '' */
i.basic.icon.hide:before {
  content: '\\e70b';
}
/* '' */
i.basic.icon.unhide:before {
  content: '\\e80f';
}
/* '' */
i.basic.icon.facebook:before {
  content: '\\f301';
}
/* '' */
i.basic.icon.fast-forward:before {
  content: '\\e804';
}
/* '' */
i.basic.icon.fire:before {
  content: '🔥';
}
/* '\\1f525' */
i.basic.icon.flag:before {
  content: '\\2691';
}
/* '⚑' */
i.basic.icon.lightning:before {
  content: '\\26a1';
}
/* '⚡' */
i.basic.icon.lab:before {
  content: '\\68';
}
/* 'h' */
i.basic.icon.flight:before {
  content: '\\2708';
}
/* '✈' */
i.basic.icon.forward:before {
  content: '\\27a6';
}
/* '➦' */
i.basic.icon.gift:before {
  content: '🎁';
}
/* '\\1f381' */
i.basic.icon.github:before {
  content: '\\f308';
}
/* '' */
i.basic.icon.globe:before {
  content: '\\e817';
}
/* '' */
i.basic.icon.headphones:before {
  content: '🎧';
}
/* '\\1f3a7' */
i.basic.icon.question:before {
  content: '\\2753';
}
/* '❓' */
i.basic.icon.home:before {
  content: '\\2302';
}
/* '⌂' */
i.basic.icon.i:before {
  content: '\\2139';
}
/* 'ℹ' */
i.basic.icon.idea:before {
  content: '💡';
}
/* '\\1f4a1' */
i.basic.icon.open:before {
  content: '🔗';
}
/* '\\1f517' */
i.basic.icon.content:before {
  content: '\\e782';
}
/* '' */
i.basic.icon.location:before {
  content: '\\e724';
}
/* '' */
i.basic.icon.mail:before {
  content: '\\2709';
}
/* '✉' */
i.basic.icon.mic:before {
  content: '🎤';
}
/* '\\1f3a4' */
i.basic.icon.minus:before {
  content: '\\2d';
}
/* '-' */
i.basic.icon.money:before {
  content: '💰';
}
/* '\\1f4b0' */
i.basic.icon.off:before {
  content: '\\e78e';
}
/* '' */
i.basic.icon.pause:before {
  content: '\\e808';
}
/* '' */
i.basic.icon.photos:before {
  content: '\\e812';
}
/* '' */
i.basic.icon.photo:before {
  content: '🌄';
}
/* '\\1f304' */
i.basic.icon.pin:before {
  content: '📌';
}
/* '\\1f4cc' */
i.basic.icon.play:before {
  content: '\\e809';
}
/* '' */
i.basic.icon.plus:before {
  content: '\\2b';
}
/* '+' */
i.basic.icon.print:before {
  content: '\\e716';
}
/* '' */
i.basic.icon.rss:before {
  content: '\\e73a';
}
/* '' */
i.basic.icon.search:before {
  content: '🔍';
}
/* '\\1f50d' */
i.basic.icon.shuffle:before {
  content: '\\e803';
}
/* '' */
i.basic.icon.tag:before {
  content: '\\e80a';
}
/* '' */
i.basic.icon.tags:before {
  content: '\\e70d';
}
/* '' */
i.basic.icon.terminal:before {
  content: '\\e7ac';
}
/* '' */
i.basic.icon.thumbs.down:before {
  content: '👎';
}
/* '\\1f44e' */
i.basic.icon.thumbs.up:before {
  content: '👍';
}
/* '\\1f44d' */
i.basic.icon.to-end:before {
  content: '\\e806';
}
/* '' */
i.basic.icon.to-start:before {
  content: '\\e805';
}
/* '' */
i.basic.icon.top.list:before {
  content: '🏆';
}
/* '\\1f3c6' */
i.basic.icon.trash:before {
  content: '\\e729';
}
/* '' */
i.basic.icon.twitter:before {
  content: '\\f303';
}
/* '' */
i.basic.icon.upload:before {
  content: '\\e711';
}
/* '' */
i.basic.icon.user.add:before {
  content: '\\e700';
}
/* '' */
i.basic.icon.user:before {
  content: '👤';
}
/* '\\1f464' */
i.basic.icon.community:before {
  content: '\\e814';
}
/* '' */
i.basic.icon.users:before {
  content: '👥';
}
/* '\\1f465' */
i.basic.icon.id:before {
  content: '\\e722';
}
/* '' */
i.basic.icon.url:before {
  content: '🔗';
}
/* '\\1f517' */
i.basic.icon.zoom.in:before {
  content: '\\e750';
}
/* '' */
i.basic.icon.zoom.out:before {
  content: '\\e751';
}
/* '' */
/*--------------
   Spacing Fix
---------------*/
/* dropdown arrows are to the right */
i.dropdown.basic.icon {
  margin: 0em 0em 0em 0.5em;
}
/* stars are usually consecutive */
i.basic.icon.star {
  width: auto;
  margin: 0em;
}
/* left side basic.icons */
i.basic.icon.left,
i.basic.icon.left,
i.basic.icon.left {
  width: auto;
  margin: 0em 0.5em 0em 0em;
}
/* right side basic.icons */
i.basic.icon.search,
i.basic.icon.up,
i.basic.icon.down,
i.basic.icon.right {
  width: auto;
  margin: 0em 0em 0em 0.5em;
}
/*--------------
     Aliases
---------------*/
/* aliases for convenience */
i.basic.icon.delete:before {
  content: '\\e80d';
}
/* '' */
i.basic.icon.dropdown:before {
  content: '\\25be';
}
/* '▾' */
i.basic.icon.help:before {
  content: '\\e704';
}
/* '' */
i.basic.icon.info:before {
  content: '\\e705';
}
/* '' */
i.basic.icon.error:before {
  content: '\\e80d';
}
/* '' */
i.basic.icon.dislike:before {
  content: '\\2661';
}
/* '♡' */
i.basic.icon.like:before {
  content: '\\2665';
}
/* '♥' */
i.basic.icon.eye:before {
  content: '\\e80f';
}
/* '' */
i.basic.icon.eye.hidden:before {
  content: '\\e70b';
}
/* '' */
i.basic.icon.date:before {
  content: '📅';
}
/* '\\1f4c5' */
/*******************************
             States
*******************************/
i.basic.icon.hover {
  opacity: 1;
}
i.basic.icon.active {
  opacity: 1;
}
i.emphasized.basic.icon {
  opacity: 1;
}
i.basic.icon.disabled {
  opacity: 0.3;
}
/*******************************
           Variations
*******************************/
/*-------------------
         Link
--------------------*/
i.link.basic.icon {
  cursor: pointer;
  opacity: 0.7;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}
.link.basic.icon:hover {
  opacity: 1 !important;
}
/*-------------------
      Circular
--------------------*/
i.circular.basic.icon {
  border-radius: 500px !important;
  padding: 0.5em 0em !important;
  -webkit-box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
  line-height: 1 !important;
  width: 2em !important;
  height: 2em !important;
}
i.circular.inverted.basic.icon {
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*-------------------
      Flipped
--------------------*/
i.vertically.flipped.basic.icon {
  -webkit-transform: scale(1, -1);
  -moz-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}
i.horizontally.flipped.basic.icon {
  -webkit-transform: scale(-1, 1);
  -moz-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
/*-------------------
        Rotated
--------------------*/
i.left.rotated.basic.icon {
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
i.right.rotated.basic.icon {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
/*-------------------
        Square
--------------------*/
i.square.basic.icon {
  width: 2em;
  height: 2em;
  padding: 0.5em 0.35em !important;
  -webkit-box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
  vertical-align: baseline;
}
i.square.basic.icon:before {
  vertical-align: middle;
}
i.square.inverted.basic.icon {
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*-------------------
      Inverted
--------------------*/
i.inverted.basic.icon {
  background-color: #222222;
  color: #FFFFFF;
}
/*-------------------
       Colors
--------------------*/
i.blue.basic.icon {
  color: #6ECFF5 !important;
}
i.black.basic.icon {
  color: #5C6166 !important;
}
i.green.basic.icon {
  color: #A1CF64 !important;
}
i.red.basic.icon {
  color: #D95C5C !important;
}
i.purple.basic.icon {
  color: #564F8A !important;
}
i.teal.basic.icon {
  color: #00B5AD !important;
}
/*-------------------
   Inverted Colors
--------------------*/
i.inverted.black.basic.icon {
  background-color: #5C6166 !important;
  color: #FFFFFF !important;
}
i.inverted.blue.basic.icon {
  background-color: #6ECFF5 !important;
  color: #FFFFFF !important;
}
i.inverted.green.basic.icon {
  background-color: #A1CF64 !important;
  color: #FFFFFF !important;
}
i.inverted.red.basic.icon {
  background-color: #D95C5C !important;
  color: #FFFFFF !important;
}
i.inverted.purple.basic.icon {
  background-color: #564F8A !important;
  color: #FFFFFF !important;
}
i.inverted.teal.basic.icon {
  background-color: #00B5AD !important;
  color: #FFFFFF !important;
}
/*-------------------
        Sizes
--------------------*/
i.small.basic.icon {
  font-size: 0.875em;
}
i.basic.icon {
  font-size: 1em;
}
i.large.basic.icon {
  font-size: 1.5em;
  margin-right: 0.2em;
  vertical-align: middle;
}
i.big.basic.icon {
  font-size: 2em;
  margin-right: 0.5em;
  vertical-align: middle;
}
i.huge.basic.icon {
  font-size: 4em;
  margin-right: 0.75em;
  vertical-align: middle;
}
i.massive.basic.icon {
  font-size: 8em;
  margin-right: 1em;
  vertical-align: middle;
}

/*
 * # Semantic - Button
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Button
*******************************/
/* Prototype */
.ui.button {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  min-height: 1em;
  outline: none;
  border: none;
  background-color: #FAFAFA;
  color: #808080;
  margin: 0em;
  padding: 0.8em 1.5em;
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.05)));
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));
  background-image: -moz-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05));
  border-radius: 0.25em;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.08) inset;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-transition: opacity 0.25s ease, background-color 0.25s ease, color 0.25s ease, background 0.25s ease, -webkit-box-shadow 0.25s ease;
  -moz-transition: opacity 0.25s ease, background-color 0.25s ease, color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  transition: opacity 0.25s ease, background-color 0.25s ease, color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}
/*******************************
            States
*******************************/
/*--------------
     Active
---------------*/
.ui.buttons .active.button,
.ui.active.button {
  background-color: #EAEAEA;
  background-image: none;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset !important;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset !important;
  color: rgba(0, 0, 0, 0.7);
}
/*--------------
      Hover
---------------*/
.ui.button:hover {
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.08)));
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.08));
  background-image: -moz-linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.08));
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.08));
  color: rgba(0, 0, 0, 0.7);
}
.ui.button.active:hover {
  background-image: none;
}
.ui.button:hover .icon,
.ui.button.hover .icon {
  opacity: 0.85;
}
/*--------------
      Down
---------------*/
.ui.button:active,
.ui.active.button:active {
  background-color: #F1F1F1;
  color: rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset !important;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset !important;
}
/*--------------
    Loading
---------------*/
.ui.loading.button {
  position: relative;
  cursor: default;
  background-color: #FFFFFF !important;
  color: transparent !important;
  -webkit-transition: all 0s linear;
  -moz-transition: all 0s linear;
  transition: all 0s linear;
}
.ui.loading.button:after {
  position: absolute;
  top: 0em;
  left: 0em;
  width: 100%;
  height: 100%;
  content: '';
  background: transparent url(../images/loader-mini.gif) no-repeat 50% 50%;
}
.ui.labeled.icon.loading.button .icon {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*-------------------
      Disabled
--------------------*/
.ui.disabled.button,
.ui.disabled.button:hover,
.ui.disabled.button.active {
  background-color: #DDDDDD !important;
  cursor: default;
  color: rgba(0, 0, 0, 0.5) !important;
  opacity: 0.3 !important;
  background-image: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
/*******************************
             Types
*******************************/
/*-------------------
       Animated
--------------------*/
.ui.animated.button {
  position: relative;
  overflow: hidden;
}
.ui.animated.button .visible.content {
  position: relative;
}
.ui.animated.button .hidden.content {
  position: absolute;
  width: 100%;
}
/* Horizontal */
.ui.animated.button .visible.content,
.ui.animated.button .hidden.content {
  -webkit-transition: right 0.3s ease 0s;
  -moz-transition: right 0.3s ease 0s;
  transition: right 0.3s ease 0s;
}
.ui.animated.button .visible.content {
  left: auto;
  right: 0%;
}
.ui.animated.button .hidden.content {
  top: 50%;
  left: auto;
  right: -100%;
  margin-top: -0.55em;
}
.ui.animated.button:hover .visible.content {
  left: auto;
  right: 200%;
}
.ui.animated.button:hover .hidden.content {
  left: auto;
  right: 0%;
}
/* Vertical */
.ui.vertical.animated.button .visible.content,
.ui.vertical.animated.button .hidden.content {
  -webkit-transition: top 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
  -moz-transition: top 0.3s ease 0s, -moz-transform 0.3s ease 0s;
  transition: top 0.3s ease 0s, transform 0.3s ease 0s;
}
.ui.vertical.animated.button .visible.content {
  -webkit-transform: translateY(0%);
  -moz-transform: translateY(0%);
  -ms-transform: translateY(0%);
  transform: translateY(0%);
  right: auto;
}
.ui.vertical.animated.button .hidden.content {
  top: -100%;
  left: 0%;
  right: auto;
}
.ui.vertical.animated.button:hover .visible.content {
  -webkit-transform: translateY(200%);
  -moz-transform: translateY(200%);
  -ms-transform: translateY(200%);
  transform: translateY(200%);
  right: auto;
}
.ui.vertical.animated.button:hover .hidden.content {
  top: 50%;
  right: auto;
}
/* Fade */
.ui.fade.animated.button .visible.content,
.ui.fade.animated.button .hidden.content {
  -webkit-transition: opacity 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
  -moz-transition: opacity 0.3s ease 0s, -moz-transform 0.3s ease 0s;
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
}
.ui.fade.animated.button .visible.content {
  left: auto;
  right: auto;
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.ui.fade.animated.button .hidden.content {
  opacity: 0;
  left: 0%;
  right: auto;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
}
.ui.fade.animated.button:hover .visible.content {
  left: auto;
  right: auto;
  opacity: 0;
  -webkit-transform: scale(0.7);
  -moz-transform: scale(0.7);
  -ms-transform: scale(0.7);
  transform: scale(0.7);
}
.ui.fade.animated.button:hover .hidden.content {
  left: 0%;
  right: auto;
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
/*-------------------
       Primary
--------------------*/
.ui.primary.buttons .button,
.ui.primary.button {
  background-color: #D95C5C;
  color: #FFFFFF;
}
.ui.primary.buttons .button:hover,
.ui.primary.button:hover,
.ui.primary.buttons .active.button,
.ui.primary.button.active {
  background-color: #E75859;
  color: #FFFFFF;
}
.ui.primary.buttons .button:active,
.ui.primary.button:active {
  background-color: #D24B4C;
  color: #FFFFFF;
}
/*-------------------
      Secondary
--------------------*/
.ui.secondary.buttons .button,
.ui.secondary.button {
  background-color: #00B5AD;
  color: #FFFFFF;
}
.ui.secondary.buttons .button:hover,
.ui.secondary.button:hover,
.ui.secondary.buttons .active.button,
.ui.secondary.button.active {
  background-color: #009A93;
  color: #FFFFFF;
}
.ui.secondary.buttons .button:active,
.ui.secondary.button:active {
  background-color: #00847E;
  color: #FFFFFF;
}
/*-------------------
       Social
--------------------*/
/* Facebook */
.ui.facebook.button {
  background-color: #3B579D;
  color: #FFFFFF;
}
.ui.facebook.button:hover {
  background-color: #3A59A9;
  color: #FFFFFF;
}
.ui.facebook.button:active {
  background-color: #334F95;
  color: #FFFFFF;
}
/* Twitter */
.ui.twitter.button {
  background-color: #4092CC;
  color: #FFFFFF;
}
.ui.twitter.button:hover {
  background-color: #399ADE;
  color: #FFFFFF;
}
.ui.twitter.button:active {
  background-color: #3283BC;
  color: #FFFFFF;
}
/* Google Plus */
.ui.google.plus.button {
  background-color: #D34836;
  color: #FFFFFF;
}
.ui.google.plus.button:hover {
  background-color: #E3432E;
  color: #FFFFFF;
}
.ui.google.plus.button:active {
  background-color: #CA3A27;
  color: #FFFFFF;
}
/* Linked In */
.ui.linkedin.button {
  background-color: #1F88BE;
  color: #FFFFFF;
}
.ui.linkedin.button:hover {
  background-color: #1394D6;
  color: #FFFFFF;
}
.ui.linkedin.button:active {
  background-color: #1179AE;
  color: #FFFFFF;
}
/* YouTube */
.ui.youtube.button {
  background-color: #CC181E;
  color: #FFFFFF;
}
.ui.youtube.button:hover {
  background-color: #DF0209;
  color: #FFFFFF;
}
.ui.youtube.button:active {
  background-color: #A50006;
  color: #FFFFFF;
}
/* Instagram */
.ui.instagram.button {
  background-color: #49769C;
  color: #FFFFFF;
}
.ui.instagram.button:hover {
  background-color: #4781B1;
  color: #FFFFFF;
}
.ui.instagram.button:active {
  background-color: #38658A;
  color: #FFFFFF;
}
/* Pinterest */
.ui.pinterest.button {
  background-color: #00ACED;
  color: #FFFFFF;
}
.ui.pinterest.button:hover {
  background-color: #00B9FF;
  color: #FFFFFF;
}
.ui.pinterest.button:active {
  background-color: #009EDA;
  color: #FFFFFF;
}
/* vk.com */
.ui.vk.button {
  background-color: #4D7198;
  color: #FFFFFF;
}
.ui.vk.button:hover {
  background-color: #537AA5;
  color: #FFFFFF;
}
.ui.vk.button:active {
  background-color: #405E7E;
  color: #FFFFFF;
}
/*--------------
     Icon
---------------*/
.ui.button > .icon {
  margin-right: 0.6em;
  line-height: 1;
  -webkit-transition: opacity 0.1s ease
  ;
  -moz-transition: opacity 0.1s ease
  ;
  transition: opacity 0.1s ease
  ;
}
/*******************************
           Variations
*******************************/
/*-------------------
       Floated
--------------------*/
.ui.left.floated.buttons,
.ui.left.floated.button {
  float: left;
  margin-right: 0.25em;
}
.ui.right.floated.buttons,
.ui.right.floated.button {
  float: right;
  margin-left: 0.25em;
}
/*-------------------
        Sizes
--------------------*/
.ui.buttons .button,
.ui.button {
  font-size: 1rem;
}
.ui.mini.buttons .button,
.ui.mini.buttons .or,
.ui.mini.button {
  font-size: 0.8rem;
}
.ui.mini.buttons .button,
.ui.mini.button {
  padding: 0.6em 0.8em;
}
.ui.mini.icon.buttons .button,
.ui.mini.buttons .icon.button {
  padding: 0.6em 0.6em;
}
.ui.tiny.buttons .button,
.ui.tiny.buttons .or,
.ui.tiny.button {
  font-size: 0.875em;
}
.ui.tiny.buttons .button,
.ui.tiny.buttons .button,
.ui.tiny.button {
  padding: 0.6em 0.8em;
}
.ui.tiny.icon.buttons .button,
.ui.tiny.buttons .icon.button {
  padding: 0.6em 0.6em;
}
.ui.small.buttons .button,
.ui.small.buttons .or,
.ui.small.button {
  font-size: 0.875rem;
}
.ui.large.buttons .button,
.ui.large.buttons .or,
.ui.large.button {
  font-size: 1.125rem;
}
.ui.big.buttons .button,
.ui.big.buttons .or,
.ui.big.button {
  font-size: 1.25rem;
}
.ui.huge.buttons .button,
.ui.huge.buttons .or,
.ui.huge.button {
  font-size: 1.375rem;
}
.ui.massive.buttons .button,
.ui.massive.buttons .or,
.ui.massive.button {
  font-size: 1.5rem;
  font-weight: bold;
}
/* Or resize */
.ui.tiny.buttons .or:before,
.ui.mini.buttons .or:before {
  width: 1.45em;
  height: 1.55em;
  line-height: 1.4;
  margin-left: -0.725em;
  margin-top: -0.25em;
}
.ui.tiny.buttons .or:after,
.ui.mini.buttons .or:after {
  height: 1.45em;
}
/* loading */
.ui.huge.loading.button:after {
  background-image: url(../images/loader-small.gif);
}
.ui.massive.buttons .loading.button:after,
.ui.gigantic.buttons .loading.button:after,
.ui.massive.loading.button:after,
.ui.gigantic.loading.button:after {
  background-image: url(../images/loader-medium.gif);
}
.ui.huge.loading.button:after,
.ui.huge.loading.button.active:after {
  background-image: url(../images/loader-small.gif);
}
.ui.massive.buttons .loading.button:after,
.ui.gigantic.buttons .loading.button:after,
.ui.massive.loading.button:after,
.ui.gigantic.loading.button:after,
.ui.massive.buttons .loading.button.active:after,
.ui.gigantic.buttons .loading.button.active:after,
.ui.massive.loading.button.active:after,
.ui.gigantic.loading.button.active:after {
  background-image: url(../images/loader-medium.gif);
}
/*--------------
    Icon Only
---------------*/
.ui.icon.buttons .button,
.ui.icon.button {
  padding: 0.8em;
}
.ui.icon.buttons .button > .icon,
.ui.icon.button > .icon {
  opacity: 0.9;
  margin: 0em;
  vertical-align: top;
}
/*-------------------
        Basic
--------------------*/
.ui.basic.buttons .button,
.ui.basic.button {
  background-color: transparent !important;
  background-image: none;
  color: #808080 !important;
  font-weight: normal;
  text-transform: none;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
}
.ui.basic.buttons {
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  border-radius: 0.25em;
}
.ui.basic.buttons .button:hover,
.ui.basic.button:hover {
  background-image: none;
  color: #7F7F7F !important;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.18) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.18) inset;
}
.ui.basic.buttons .button:active,
.ui.basic.button:active {
  background-color: rgba(0, 0, 0, 0.02) !important;
  color: #7F7F7F !important;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
}
.ui.basic.buttons .button.active,
.ui.basic.button.active {
  background-color: rgba(0, 0, 0, 0.05);
  color: #7F7F7F;
  -webkit-box-shadow: 0px 0px 0px 1px #BDBDBD inset;
  box-shadow: 0px 0px 0px 1px #BDBDBD inset;
}
.ui.basic.buttons .button.active:hover,
.ui.basic.button.active:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
/* Inverted */
.ui.basic.inverted.buttons .button,
.ui.basic.inverted.button {
  color: #FAFAFA !important;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.3) inset;
  box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.3) inset;
}
.ui.basic.inverted.buttons .button:hover,
.ui.basic.inverted.button:hover {
  background-image: none;
  color: #FFFFFF !important;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.5) inset;
  box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.5) inset;
}
.ui.basic.inverted.buttons .button:active,
.ui.basic.inverted.button:active {
  background-color: rgba(255, 255, 255, 0.05) !important;
  color: #FFFFFF !important;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.8) inset !important;
  box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.8) inset !important;
}
.ui.basic.inverted.buttons .button.active,
.ui.basic.inverted.button.active {
  background-color: rgba(255, 255, 255, 0.5);
  color: #FFFFFF;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.basic.inverted.buttons .button.active:hover,
.ui.basic.inverted.button.active:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
/* Basic Group */
.ui.basic.buttons .button {
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.basic.buttons .button:hover,
.ui.basic.buttons .button:active {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.basic.buttons .button.active,
.ui.basic.buttons .button.active:hover {
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2) inset;
}
/*--------------
   Labeled Icon
---------------*/
.ui.labeled.icon.buttons .button,
.ui.labeled.icon.button {
  position: relative;
  padding-left: 4em !important;
  padding-right: 1.4em !important;
}
.ui.labeled.icon.buttons > .button > .icon,
.ui.labeled.icon.button > .icon {
  position: absolute;
  top: 0em;
  left: 0em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  width: 2.75em;
  height: 100%;
  padding-top: 0.8em;
  background-color: rgba(0, 0, 0, 0.05);
  text-align: center;
  border-radius: 0.25em 0px 0px 0.25em;
  line-height: 1;
  -webkit-box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.05) inset;
  box-shadow: -1px 0px 0px 0px rgba(0, 0, 0, 0.05) inset;
}
.ui.labeled.icon.buttons .button > .icon {
  border-radius: 0em;
}
.ui.labeled.icon.buttons .button:first-child > .icon {
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
}
.ui.labeled.icon.buttons .button:last-child > .icon {
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
}
.ui.vertical.labeled.icon.buttons .button:first-child > .icon {
  border-radius: 0em;
  border-top-left-radius: 0.25em;
}
.ui.vertical.labeled.icon.buttons .button:last-child > .icon {
  border-radius: 0em;
  border-bottom-left-radius: 0.25em;
}
.ui.right.labeled.icon.button {
  padding-left: 1.4em !important;
  padding-right: 4em !important;
}
.ui.left.fluid.labeled.icon.button,
.ui.right.fluid.labeled.icon.button {
  padding-left: 1.4em !important;
  padding-right: 1.4em !important;
}
.ui.right.labeled.icon.button .icon {
  left: auto;
  right: 0em;
  border-radius: 0em 0.25em 0.25em 0em;
  -webkit-box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.05) inset;
  box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.05) inset;
}
/*--------------
     Toggle
---------------*/
/* Toggle (Modifies active state to give affordances) */
.ui.toggle.buttons .active.button,
.ui.buttons .button.toggle.active,
.ui.button.toggle.active {
  background-color: #5BBD72 !important;
  color: #FFFFFF !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.ui.button.toggle.active:hover {
  background-color: #58CB73 !important;
  color: #FFFFFF !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
/*--------------
    Circular
---------------*/
.ui.circular.button {
  border-radius: 10em;
}
/*--------------
     Attached
---------------*/
.ui.attached.button {
  display: block;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
}
.ui.attached.top.button {
  border-radius: 0.25em 0.25em 0em 0em;
}
.ui.attached.bottom.button {
  border-radius: 0em 0em 0.25em 0.25em;
}
.ui.attached.left.button {
  display: inline-block;
  border-left: none;
  padding-right: 0.75em;
  text-align: right;
  border-radius: 0.25em 0em 0em 0.25em;
}
.ui.attached.right.button {
  display: inline-block;
  padding-left: 0.75em;
  text-align: left;
  border-radius: 0em 0.25em 0.25em 0em;
}
/*-------------------
      Or Buttons
--------------------*/
.ui.buttons .or {
  position: relative;
  float: left;
  width: 0.3em;
  height: 1.1em;
  z-index: 3;
}
.ui.buttons .or:before {
  position: absolute;
  top: 50%;
  left: 50%;
  content: 'or';
  background-color: #FFFFFF;
  margin-top: -0.1em;
  margin-left: -0.9em;
  width: 1.8em;
  height: 1.8em;
  line-height: 1.55;
  color: #AAAAAA;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  border-radius: 500px;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.buttons .or[data-text]:before {
  content: attr(data-text);
}
.ui.buttons .or:after {
  position: absolute;
  top: 0em;
  left: 0em;
  content: ' ';
  width: 0.3em;
  height: 1.7em;
  background-color: transparent;
  border-top: 0.5em solid #FFFFFF;
  border-bottom: 0.5em solid #FFFFFF;
}
/* Fluid Or */
.ui.fluid.buttons .or {
  width: 0em !important;
}
.ui.fluid.buttons .or:after {
  display: none;
}
/*-------------------
       Attached
--------------------*/
/* Plural Attached */
.attached.ui.buttons {
  margin: 0px;
  border-radius: 4px 4px 0px 0px;
}
.attached.ui.buttons .button:first-child {
  border-radius: 4px 0px 0px 0px;
}
.attached.ui.buttons .button:last-child {
  border-radius: 0px 4px 0px 0px;
}
/* Bottom Side */
.bottom.attached.ui.buttons {
  margin-top: -1px;
  border-radius: 0px 0px 4px 4px;
}
.bottom.attached.ui.buttons .button:first-child {
  border-radius: 0px 0px 0px 4px;
}
.bottom.attached.ui.buttons .button:last-child {
  border-radius: 0px 0px 4px 0px;
}
/* Left Side */
.left.attached.ui.buttons {
  margin-left: -1px;
  border-radius: 0px 4px 4px 0px;
}
.left.attached.ui.buttons .button:first-child {
  margin-left: -1px;
  border-radius: 0px 4px 0px 0px;
}
.left.attached.ui.buttons .button:last-child {
  margin-left: -1px;
  border-radius: 0px 0px 4px 0px;
}
/* Right Side */
.right.attached.ui.buttons,
.right.attached.ui.buttons .button {
  margin-right: -1px;
  border-radius: 4px 0px 0px 4px;
}
.right.attached.ui.buttons .button:first-child {
  margin-left: -1px;
  border-radius: 4px 0px 0px 0px;
}
.right.attached.ui.buttons .button:last-child {
  margin-left: -1px;
  border-radius: 0px 0px 0px 4px;
}
/* Fluid */
.ui.fluid.buttons,
.ui.button.fluid,
.ui.fluid.buttons > .button {
  display: block;
  width: 100%;
}
.ui.\\32.buttons > .button,
.ui.two.buttons > .button {
  width: 50%;
}
.ui.\\33.buttons > .button,
.ui.three.buttons > .button {
  width: 33.333%;
}
.ui.\\34.buttons > .button,
.ui.four.buttons > .button {
  width: 25%;
}
.ui.\\35.buttons > .button,
.ui.five.buttons > .button {
  width: 20%;
}
.ui.\\36.buttons > .button,
.ui.six.buttons > .button {
  width: 16.666%;
}
.ui.\\37.buttons > .button,
.ui.seven.buttons > .button {
  width: 14.285%;
}
.ui.\\38.buttons > .button,
.ui.eight.buttons > .button {
  width: 12.500%;
}
.ui.\\39.buttons > .button,
.ui.nine.buttons > .button {
  width: 11.11%;
}
.ui.\\31\\30.buttons > .button,
.ui.ten.buttons > .button {
  width: 10%;
}
.ui.\\31\\31.buttons > .button,
.ui.eleven.buttons > .button {
  width: 9.09%;
}
.ui.\\31\\32.buttons > .button,
.ui.twelve.buttons > .button {
  width: 8.3333%;
}
/* Fluid Vertical Buttons */
.ui.fluid.vertical.buttons,
.ui.fluid.vertical.buttons > .button {
  display: block;
  width: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.\\32.vertical.buttons > .button,
.ui.two.vertical.buttons > .button {
  height: 50%;
}
.ui.\\33.vertical.buttons > .button,
.ui.three.vertical.buttons > .button {
  height: 33.333%;
}
.ui.\\34.vertical.buttons > .button,
.ui.four.vertical.buttons > .button {
  height: 25%;
}
.ui.\\35.vertical.buttons > .button,
.ui.five.vertical.buttons > .button {
  height: 20%;
}
.ui.\\36.vertical.buttons > .button,
.ui.six.vertical.buttons > .button {
  height: 16.666%;
}
.ui.\\37.vertical.buttons > .button,
.ui.seven.vertical.buttons > .button {
  height: 14.285%;
}
.ui.\\38.vertical.buttons > .button,
.ui.eight.vertical.buttons > .button {
  height: 12.500%;
}
.ui.\\39.vertical.buttons > .button,
.ui.nine.vertical.buttons > .button {
  height: 11.11%;
}
.ui.\\31\\30.vertical.buttons > .button,
.ui.ten.vertical.buttons > .button {
  height: 10%;
}
.ui.\\31\\31.vertical.buttons > .button,
.ui.eleven.vertical.buttons > .button {
  height: 9.09%;
}
.ui.\\31\\32.vertical.buttons > .button,
.ui.twelve.vertical.buttons > .button {
  height: 8.3333%;
}
/*-------------------
       Colors
--------------------*/
/*--- Black ---*/
.ui.black.buttons .button,
.ui.black.button {
  background-color: #5C6166;
  color: #FFFFFF;
}
.ui.black.buttons .button:hover,
.ui.black.button:hover {
  background-color: #4C4C4C;
  color: #FFFFFF;
}
.ui.black.buttons .button:active,
.ui.black.button:active {
  background-color: #333333;
  color: #FFFFFF;
}
/*--- Green ---*/
.ui.green.buttons .button,
.ui.green.button {
  background-color: #5BBD72;
  color: #FFFFFF;
}
.ui.green.buttons .button:hover,
.ui.green.button:hover,
.ui.green.buttons .active.button,
.ui.green.button.active {
  background-color: #58cb73;
  color: #FFFFFF;
}
.ui.green.buttons .button:active,
.ui.green.button:active {
  background-color: #4CB164;
  color: #FFFFFF;
}
/*--- Red ---*/
.ui.red.buttons .button,
.ui.red.button {
  background-color: #D95C5C;
  color: #FFFFFF;
}
.ui.red.buttons .button:hover,
.ui.red.button:hover,
.ui.red.buttons .active.button,
.ui.red.button.active {
  background-color: #E75859;
  color: #FFFFFF;
}
.ui.red.buttons .button:active,
.ui.red.button:active {
  background-color: #D24B4C;
  color: #FFFFFF;
}
/*--- Orange ---*/
.ui.orange.buttons .button,
.ui.orange.button {
  background-color: #E96633;
  color: #FFFFFF;
}
.ui.orange.buttons .button:hover,
.ui.orange.button:hover,
.ui.orange.buttons .active.button,
.ui.orange.button.active {
  background-color: #FF7038;
  color: #FFFFFF;
}
.ui.orange.buttons .button:active,
.ui.orange.button:active {
  background-color: #DA683B;
  color: #FFFFFF;
}
/*--- Blue ---*/
.ui.blue.buttons .button,
.ui.blue.button {
  background-color: #6ECFF5;
  color: #FFFFFF;
}
.ui.blue.buttons .button:hover,
.ui.blue.button:hover,
.ui.blue.buttons .active.button,
.ui.blue.button.active {
  background-color: #1AB8F3;
  color: #FFFFFF;
}
.ui.blue.buttons .button:active,
.ui.blue.button:active {
  background-color: #0AA5DF;
  color: #FFFFFF;
}
/*--- Purple ---*/
.ui.purple.buttons .button,
.ui.purple.button {
  background-color: #564F8A;
  color: #FFFFFF;
}
.ui.purple.buttons .button:hover,
.ui.purple.button:hover,
.ui.purple.buttons .active.button,
.ui.purple.button.active {
  background-color: #3E3773;
  color: #FFFFFF;
}
.ui.purple.buttons .button:active,
.ui.purple.button:active {
  background-color: #2E2860;
  color: #FFFFFF;
}
/*--- Teal ---*/
.ui.teal.buttons .button,
.ui.teal.button {
  background-color: #00B5AD;
  color: #FFFFFF;
}
.ui.teal.buttons .button:hover,
.ui.teal.button:hover,
.ui.teal.buttons .active.button,
.ui.teal.button.active {
  background-color: #009A93;
  color: #FFFFFF;
}
.ui.teal.buttons .button:active,
.ui.teal.button:active {
  background-color: #00847E;
  color: #FFFFFF;
}
/*---------------
    Positive
----------------*/
.ui.positive.buttons .button,
.ui.positive.button {
  background-color: #5BBD72 !important;
  color: #FFFFFF;
}
.ui.positive.buttons .button:hover,
.ui.positive.button:hover,
.ui.positive.buttons .active.button,
.ui.positive.button.active {
  background-color: #58CB73 !important;
  color: #FFFFFF;
}
.ui.positive.buttons .button:active,
.ui.positive.button:active {
  background-color: #4CB164 !important;
  color: #FFFFFF;
}
/*---------------
     Negative
----------------*/
.ui.negative.buttons .button,
.ui.negative.button {
  background-color: #D95C5C !important;
  color: #FFFFFF;
}
.ui.negative.buttons .button:hover,
.ui.negative.button:hover,
.ui.negative.buttons .active.button,
.ui.negative.button.active {
  background-color: #E75859 !important;
  color: #FFFFFF;
}
.ui.negative.buttons .button:active,
.ui.negative.button:active {
  background-color: #D24B4C !important;
  color: #FFFFFF;
}
/*******************************
            Groups
*******************************/
.ui.buttons {
  display: inline-block;
  vertical-align: middle;
}
.ui.buttons:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.ui.buttons .button:first-child {
  border-left: none;
}
.ui.buttons .button {
  float: left;
  border-radius: 0em;
}
.ui.buttons .button:first-child {
  margin-left: 0em;
  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
}
.ui.buttons .button:last-child {
  border-top-right-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
}
/* Vertical  Style */
.ui.vertical.buttons {
  display: inline-block;
}
.ui.vertical.buttons .button {
  display: block;
  float: none;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
}
.ui.vertical.buttons .button:first-child,
.ui.vertical.buttons .mini.button:first-child,
.ui.vertical.buttons .tiny.button:first-child,
.ui.vertical.buttons .small.button:first-child,
.ui.vertical.buttons .massive.button:first-child,
.ui.vertical.buttons .huge.button:first-child {
  margin-top: 0px;
  border-radius: 0.25em 0.25em 0px 0px;
}
.ui.vertical.buttons .button:last-child,
.ui.vertical.buttons .mini.button:last-child,
.ui.vertical.buttons .tiny.button:last-child,
.ui.vertical.buttons .small.button:last-child,
.ui.vertical.buttons .massive.button:last-child,
.ui.vertical.buttons .huge.button:last-child,
.ui.vertical.buttons .gigantic.button:last-child {
  border-radius: 0px 0px 0.25em 0.25em;
}

/*
 * # Semantic - Divider
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Divider
*******************************/
.ui.divider {
  margin: 1rem 0rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  line-height: 1;
  height: 0em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.ui.vertical.divider,
.ui.horizontal.divider {
  position: absolute;
  border: none;
  height: 0em;
  margin: 0em;
  background-color: transparent;
  font-size: 0.875rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.8);
}
/*--------------
    Vertical
---------------*/
.ui.vertical.divider {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: 0% 0% 0% -3%;
  width: 6%;
  height: 50%;
  line-height: 0;
  padding: 0em;
}
.ui.vertical.divider:before,
.ui.vertical.divider:after {
  position: absolute;
  left: 50%;
  content: " ";
  z-index: 3;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.8);
  width: 0%;
  height: 80%;
}
.ui.vertical.divider:before {
  top: -100%;
}
.ui.vertical.divider:after {
  top: auto;
  bottom: 0px;
}
/*--------------
    Horizontal
---------------*/
.ui.horizontal.divider {
  position: relative;
  top: 0%;
  left: 0%;
  margin: 1rem 1.5rem;
  height: auto;
  padding: 0em;
  line-height: 1;
}
.ui.horizontal.divider:before,
.ui.horizontal.divider:after {
  position: absolute;
  content: " ";
  z-index: 3;
  width: 50%;
  top: 50%;
  height: 0%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
}
.ui.horizontal.divider:before {
  left: 0%;
  margin-left: -1.5rem;
}
.ui.horizontal.divider:after {
  left: auto;
  right: 0%;
  margin-right: -1.5rem;
}
/*--------------
      Icon
---------------*/
.ui.divider > .icon {
  margin: 0em;
  font-size: 1rem;
  vertical-align: middle;
}
/*******************************
            Variations
*******************************/
/*--------------
    Inverted
---------------*/
.ui.divider.inverted {
  color: #ffffff;
}
.ui.vertical.inverted.divider,
.ui.horizontal.inverted.divider {
  color: rgba(255, 255, 255, 0.9);
}
.ui.divider.inverted,
.ui.divider.inverted:after,
.ui.divider.inverted:before {
  border-top-color: rgba(0, 0, 0, 0.15);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-left-color: rgba(0, 0, 0, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
}
/*--------------
    Fitted
---------------*/
.ui.fitted.divider {
  margin: 0em;
}
/*--------------
    Clearing
---------------*/
.ui.clearing.divider {
  clear: both;
}
/*--------------
    Section
---------------*/
.ui.section.divider {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/*
 * # Semantic - Header
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Header
*******************************/
/* Standard */
.ui.header {
  border: none;
  margin: 1em 0em 1rem;
  padding: 0em;
  font-size: 1.33em;
  font-weight: bold;
  line-height: 1.33;
}
.ui.header .sub.header {
  font-size: 1rem;
  font-weight: normal;
  margin: 0em;
  padding: 0em;
  line-height: 1.2;
  color: rgba(0, 0, 0, 0.5);
}
.ui.header .icon {
  display: table-cell;
  vertical-align: middle;
  padding-right: 0.5em;
}
.ui.header .icon:only-child {
  display: inline-block;
  vertical-align: baseline;
}
.ui.header .content {
  display: inline-block;
  vertical-align: top;
}
.ui.header .icon + .content {
  padding-left: 0.5em;
  display: table-cell;
}
/* Positioning */
.ui.header:first-child {
  margin-top: 0em;
}
.ui.header:last-child {
  margin-bottom: 0em;
}
.ui.header + p {
  margin-top: 0em;
}
/*--------------
  Page Heading
---------------*/
h1.ui.header {
  min-height: 1rem;
  line-height: 1.33;
  font-size: 2rem;
}
h2.ui.header {
  line-height: 1.33;
  font-size: 1.75rem;
}
h3.ui.header {
  line-height: 1.33;
  font-size: 1.33rem;
}
h4.ui.header {
  line-height: 1.33;
  font-size: 1.1rem;
}
h5.ui.header {
  line-height: 1.2;
  font-size: 1rem;
}
/*--------------
 Content Heading
---------------*/
.ui.huge.header {
  min-height: 1em;
  font-size: 2em;
}
.ui.large.header {
  font-size: 1.75em;
}
.ui.medium.header {
  font-size: 1.33em;
}
.ui.small.header {
  font-size: 1.1em;
}
.ui.tiny.header {
  font-size: 1em;
}
/*******************************
            Types
*******************************/
/*-------------------
        Icon
--------------------*/
.ui.icon.header {
  display: inline-block;
  text-align: center;
}
.ui.icon.header .icon {
  float: none;
  display: block;
  font-size: 3em;
  margin: 0em auto 0.2em;
  padding: 0em;
}
.ui.icon.header .content {
  display: block;
}
.ui.icon.header .circular.icon,
.ui.icon.header .square.icon {
  font-size: 2em;
}
.ui.block.icon.header .icon {
  margin-bottom: 0em;
}
.ui.icon.header.aligned {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
/*******************************
            States
*******************************/
.ui.disabled.header {
  opacity: 0.5;
}
/*******************************
           Variations
*******************************/
/*-------------------
       Colors
--------------------*/
.ui.blue.header {
  color: #6ECFF5 !important;
}
.ui.black.header {
  color: #5C6166 !important;
}
.ui.green.header {
  color: #A1CF64 !important;
}
.ui.red.header {
  color: #D95C5C !important;
}
.ui.purple.header {
  color: #564F8A !important;
}
.ui.teal.header {
  color: #00B5AD !important;
}
.ui.blue.dividing.header {
  border-bottom: 3px solid #6ECFF5;
}
.ui.black.dividing.header {
  border-bottom: 3px solid #5C6166;
}
.ui.green.dividing.header {
  border-bottom: 3px solid #A1CF64;
}
.ui.red.dividing.header {
  border-bottom: 3px solid #D95C5C;
}
.ui.purple.dividing.header {
  border-bottom: 3px solid #564F8A;
}
.ui.teal.dividing.header {
  border-bottom: 3px solid #00B5AD;
}
/*-------------------
      Inverted
--------------------*/
.ui.inverted.header {
  color: #FFFFFF;
}
.ui.inverted.header .sub.header {
  color: rgba(255, 255, 255, 0.85);
}
/*-------------------
   Inverted Colors
--------------------*/
.ui.inverted.black.header {
  background-color: #5C6166 !important;
  color: #FFFFFF !important;
}
.ui.inverted.blue.header {
  background-color: #6ECFF5 !important;
  color: #FFFFFF !important;
}
.ui.inverted.green.header {
  background-color: #A1CF64 !important;
  color: #FFFFFF !important;
}
.ui.inverted.red.header {
  background-color: #D95C5C !important;
  color: #FFFFFF !important;
}
.ui.inverted.purple.header {
  background-color: #564F8A !important;
  color: #FFFFFF !important;
}
.ui.inverted.teal.header {
  background-color: #00B5AD !important;
  color: #FFFFFF !important;
}
.ui.inverted.block.header {
  border-bottom: none;
}
/*-------------------
       Aligned
--------------------*/
.ui.left.aligned.header {
  text-align: left;
}
.ui.right.aligned.header {
  text-align: right;
}
.ui.center.aligned.header {
  text-align: center;
}
.ui.justified.header {
  text-align: justify;
}
.ui.justified.header:after {
  display: inline-block;
  content: '';
  width: 100%;
}
/*-------------------
       Floated
--------------------*/
.ui.floated.header,
.ui.left.floated.header {
  float: left;
  margin-top: 0em;
  margin-right: 0.5em;
}
.ui.right.floated.header {
  float: right;
  margin-top: 0em;
  margin-left: 0.5em;
}
/*-------------------
       Fittted
--------------------*/
.ui.fitted.header {
  padding: 0em;
}
/*-------------------
      Dividing
--------------------*/
.ui.dividing.header {
  padding-bottom: 0.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.ui.dividing.header .sub.header {
  padding-bottom: 0.5em;
}
.ui.dividing.header .icon {
  margin-bottom: 0.2em;
}
/*-------------------
        Block
--------------------*/
.ui.block.header {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.5em 1em;
}
/*-------------------
       Attached
--------------------*/
.ui.attached.header {
  background-color: #E0E0E0;
  padding: 0.5em 1rem;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
}
.ui.top.attached.header {
  margin-bottom: 0em;
  border-radius: 0.3125em 0.3125em 0em 0em;
}
.ui.bottom.attached.header {
  margin-top: 0em;
  border-radius: 0em 0em 0.3125em 0.3125em;
}

/*
 * # Semantic - Icon
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*!
 *  Font Awesome 3.2.1
 *  the iconic font designed for Bootstrap
 *  ------------------------------------------------------------------------------
 *  The full suite of pictographic icons, examples, and documentation can be
 *  found at http://fon.io.  Stay up to date on Twitter at
 *  http://twitter.com/fon.
 *
 *  License
 *  ------------------------------------------------------------------------------
 *  - The Font Awesome font is licensed under SIL OFL 1.1 -
 *    http://scripts.sil.org/OFL

/*******************************
             Icon
*******************************/
@font-face {
  font-family: 'Icons';
  src: url(../fonts/icons.eot);
  src: url(../fonts/icons.eot?#iefix) format('embedded-opentype'), url(../fonts/icons.svg#icons) format('svg'), url(../fonts/icons.woff) format('woff'), url(../fonts/icons.ttf) format('truetype');
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-decoration: inherit;
  text-transform: none;
}
i.icon {
  display: inline-block;
  opacity: 0.75;
  margin: 0em 0.25em 0em 0em;
  width: 1.23em;
  height: 1em;
  font-family: 'Icons';
  font-style: normal;
  line-height: 1;
  font-weight: normal;
  text-decoration: inherit;
  text-align: center;
  speak: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
i.icon.left:before {
  content: "\\\f060";
}
i.icon.right:before {
  content: "\\\f061";
}
i.icon.add.sign.box:before {
  content: "\\\f0fe";
}
i.icon.add.sign:before {
  content: "\\\f055";
}
i.icon.add:before {
  content: "\\\f067";
}
i.icon.adjust:before {
  content: "\\\f042";
}
i.icon.adn:before {
  content: "\\\f170";
}
i.icon.align.center:before {
  content: "\\\f037";
}
i.icon.align.justify:before {
  content: "\\\f039";
}
i.icon.align.left:before {
  content: "\\\f036";
}
i.icon.align.right:before {
  content: "\\\f038";
}
i.icon.ambulance:before {
  content: "\\\f0f9";
}
i.icon.anchor:before {
  content: "\\\f13d";
}
i.icon.android:before {
  content: "\\\f17b";
}
i.icon.angle.down:before {
  content: "\\\f107";
}
i.icon.angle.left:before {
  content: "\\\f104";
}
i.icon.angle.right:before {
  content: "\\\f105";
}
i.icon.angle.up:before {
  content: "\\\f106";
}
i.icon.apple:before {
  content: "\\\f179";
}
i.icon.archive:before {
  content: "\\\f187";
}
i.icon.arrow.down:before {
  content: "\\\f078";
}
i.icon.arrow.left:before {
  content: "\\\f053";
}
i.icon.arrow.right:before {
  content: "\\\f054";
}
i.icon.arrow.sign.down:before {
  content: "\\\f13a";
}
i.icon.arrow.sign.left:before {
  content: "\\\f137";
}
i.icon.arrow.sign.right:before {
  content: "\\\f138";
}
i.icon.arrow.sign.up:before {
  content: "\\\f139";
}
i.icon.arrow.up:before {
  content: "\\\f077";
}
i.icon.asterisk:before {
  content: "\\\f069";
}
i.icon.attachment:before {
  content: "\\\f0c6";
}
i.icon.attention:before {
  content: "\\\f06a";
}
i.icon.backward:before {
  content: "\\\f04a";
}
i.icon.ban.circle:before {
  content: "\\\f05e";
}
i.icon.bar.chart:before {
  content: "\\\f080";
}
i.icon.barcode:before {
  content: "\\\f02a";
}
i.icon.beer:before {
  content: "\\\f0fc";
}
i.icon.bell.outline:before {
  content: "\\\f0a2";
}
i.icon.bell:before {
  content: "\\\f0f3";
}
i.icon.bitbucket.sign:before {
  content: "\\\f172";
}
i.icon.bitbucket:before {
  content: "\\\f171";
}
i.icon.bitcoin:before {
  content: "\\\f15a";
}
i.icon.bold:before {
  content: "\\\f032";
}
i.icon.bolt:before {
  content: "\\\f0e7";
}
i.icon.book:before {
  content: "\\\f02d";
}
i.icon.bookmark.empty:before {
  content: "\\\f097";
}
i.icon.bookmark:before {
  content: "\\\f02e";
}
i.icon.box.arrow.down:before {
  content: "\\\f150";
}
/*rtl:ignore*/
i.icon.box.arrow.right:before {
  content: "\\\f152";
}
i.icon.box.arrow.up:before {
  content: "\\\f151";
}
i.icon.briefcase:before {
  content: "\\\f0b1";
}
i.icon.browser:before {
  content: "\\\f022";
}
i.icon.bug:before {
  content: "\\\f188";
}
i.icon.building:before {
  content: "\\\f0f7";
}
i.icon.bullhorn:before {
  content: "\\\f0a1";
}
i.icon.bullseye:before {
  content: "\\\f140";
}
i.icon.calendar.empty:before {
  content: "\\\f133";
}
i.icon.calendar:before {
  content: "\\\f073";
}
i.icon.camera.retro:before {
  content: "\\\f083";
}
i.icon.camera:before {
  content: "\\\f030";
}
i.icon.triangle.down:before {
  content: "\\\f0d7";
}
i.icon.triangle.left:before {
  content: "\\\f0d9";
}
i.icon.triangle.right:before {
  content: "\\\f0da";
}
i.icon.triangle.up:before {
  content: "\\\f0d8";
}
i.icon.cart:before {
  content: "\\\f07a";
}
i.icon.certificate:before {
  content: "\\\f0a3";
}
i.icon.chat.outline:before {
  content: "\\\f0e6";
}
i.icon.chat:before {
  content: "\\\f086";
}
i.icon.checkbox.empty:before {
  content: "\\\f096";
}
i.icon.checkbox.minus:before {
  content: "\\\f147";
}
i.icon.checked.checkbox:before {
  content: "\\\f046";
}
i.icon.checkmark.sign:before {
  content: "\\\f14a";
}
i.icon.checkmark:before {
  content: "\\\f00c";
}
i.icon.circle.blank:before {
  content: "\\\f10c";
}
i.icon.circle.down:before {
  content: "\\\f0ab";
}
i.icon.circle.left:before {
  content: "\\\f0a8";
}
i.icon.circle.right:before {
  content: "\\\f0a9";
}
i.icon.circle.up:before {
  content: "\\\f0aa";
}
i.icon.circle:before {
  content: "\\\f111";
}
i.icon.cloud.download:before {
  content: "\\\f0ed";
}
i.icon.cloud.upload:before {
  content: "\\\f0ee";
}
i.icon.cloud:before {
  content: "\\\f0c2";
}
i.icon.code.fork:before {
  content: "\\\f126";
}
i.icon.code:before {
  content: "\\\f121";
}
i.icon.coffee:before {
  content: "\\\f0f4";
}
i.icon.collapse:before {
  content: "\\\f117";
}
i.icon.comment.outline:before {
  content: "\\\f0e5";
}
i.icon.comment:before {
  content: "\\\f075";
}
i.icon.copy:before {
  content: "\\\f0c5";
}
i.icon.crop:before {
  content: "\\\f125";
}
i.icon.css3:before {
  content: "\\\f13c";
}
i.icon.cut:before {
  content: "\\\f0c4";
}
i.icon.dashboard:before {
  content: "\\\f0e4";
}
i.icon.desktop:before {
  content: "\\\f108";
}
i.icon.doctor:before {
  content: "\\\f0f0";
}
i.icon.dollar:before {
  content: "\\\f155";
}
i.icon.double.angle.down:before {
  content: "\\\f103";
}
i.icon.double.angle.left:before {
  content: "\\\f100";
}
i.icon.double.angle.right:before {
  content: "\\\f101";
}
i.icon.double.angle.up:before {
  content: "\\\f102";
}
i.icon.down:before {
  content: "\\\f063";
}
i.icon.download.disk:before {
  content: "\\\f019";
}
i.icon.download:before {
  content: "\\\f01a";
}
i.icon.dribbble:before {
  content: "\\\f17d";
}
i.icon.dropbox:before {
  content: "\\\f16b";
}
i.icon.edit.sign:before {
  content: "\\\f14b";
}
i.icon.edit:before {
  content: "\\\f044";
}
i.icon.eject:before {
  content: "\\\f052";
}
i.icon.ellipsis.horizontal:before {
  content: "\\\f141";
}
i.icon.ellipsis.vertical:before {
  content: "\\\f142";
}
i.icon.eraser:before {
  content: "\\\f12d";
}
i.icon.euro:before {
  content: "\\\f153";
}
i.icon.exchange:before {
  content: "\\\f0ec";
}
i.icon.exclamation:before {
  content: "\\\f12a";
}
i.icon.expand:before {
  content: "\\\f116";
}
i.icon.external.url.sign:before {
  content: "\\\f14c";
}
i.icon.external.url:before {
  content: "\\\f08e";
}
i.icon.facebook.sign:before {
  content: "\\\f082";
}
i.icon.facebook:before {
  content: "\\\f09a";
}
i.icon.facetime.video:before {
  content: "\\\f03d";
}
i.icon.fast.backward:before {
  content: "\\\f049";
}
i.icon.fast.forward:before {
  content: "\\\f050";
}
i.icon.female:before {
  content: "\\\f182";
}
i.icon.fighter.jet:before {
  content: "\\\f0fb";
}
i.icon.file.outline:before {
  content: "\\\f016";
}
i.icon.file.text.outline:before {
  content: "\\\f0f6";
}
i.icon.file.text:before {
  content: "\\\f15c";
}
i.icon.file:before {
  content: "\\\f15b";
}
i.icon.filter:before {
  content: "\\\f0b0";
}
i.icon.fire.extinguisher:before {
  content: "\\\f134";
}
i.icon.fire:before {
  content: "\\\f06d";
}
i.icon.flag.checkered:before {
  content: "\\\f11e";
}
i.icon.flag.empty:before {
  content: "\\\f11d";
}
i.icon.flag:before {
  content: "\\\f024";
}
i.icon.flickr:before {
  content: "\\\f16e";
}
i.icon.folder.open.outline:before {
  content: "\\\f115";
}
i.icon.folder.open:before {
  content: "\\\f07c";
}
i.icon.folder.outline:before {
  content: "\\\f114";
}
i.icon.folder:before {
  content: "\\\f07b";
}
i.icon.font:before {
  content: "\\\f031";
}
i.icon.food:before {
  content: "\\\f0f5";
}
i.icon.forward.mail:before {
  content: "\\\f064";
}
i.icon.forward:before {
  content: "\\\f04e";
}
i.icon.foursquare:before {
  content: "\\\f180";
}
i.icon.frown:before {
  content: "\\\f119";
}
i.icon.fullscreen:before {
  content: "\\\f0b2";
}
i.icon.gamepad:before {
  content: "\\\f11b";
}
i.icon.gift:before {
  content: "\\\f06b";
}
i.icon.github.alternate:before {
  content: "\\\f09b";
}
i.icon.github.sign:before {
  content: "\\\f092";
}
i.icon.github:before {
  content: "\\\f113";
}
i.icon.gittip:before {
  content: "\\\f184";
}
i.icon.glass:before {
  content: "\\\f000";
}
i.icon.globe:before {
  content: "\\\f0ac";
}
i.icon.google.plus.sign:before {
  content: "\\\f0d4";
}
i.icon.google.plus:before {
  content: "\\\f0d5";
}
i.icon.h.sign:before {
  content: "\\\f0fd";
}
i.icon.hand.down:before {
  content: "\\\f0a7";
}
i.icon.hand.left:before {
  content: "\\\f0a5";
}
i.icon.hand.right:before {
  content: "\\\f0a4";
}
i.icon.hand.up:before {
  content: "\\\f0a6";
}
i.icon.hdd:before {
  content: "\\\f0a0";
}
i.icon.headphones:before {
  content: "\\\f025";
}
i.icon.heart.empty:before {
  content: "\\\f08a";
}
i.icon.heart:before {
  content: "\\\f004";
}
i.icon.help:before {
  content: "\\\f059";
}
i.icon.hide:before {
  content: "\\\f070";
}
i.icon.home:before {
  content: "\\\f015";
}
i.icon.hospital:before {
  content: "\\\f0f8";
}
i.icon.html5:before {
  content: "\\\f13b";
}
i.icon.inbox:before {
  content: "\\\f01c";
}
i.icon.indent.left:before {
  content: "\\\f03b";
}
i.icon.indent.right:before {
  content: "\\\f03c";
}
i.icon.info.letter:before {
  content: "\\\f129";
}
i.icon.info:before {
  content: "\\\f05a";
}
i.icon.instagram:before {
  content: "\\\f16d";
}
i.icon.italic:before {
  content: "\\\f033";
}
i.icon.key:before {
  content: "\\\f084";
}
i.icon.keyboard:before {
  content: "\\\f11c";
}
i.icon.lab:before {
  content: "\\\f0c3";
}
i.icon.laptop:before {
  content: "\\\f109";
}
i.icon.layout.block:before {
  content: "\\\f009";
}
i.icon.layout.column:before {
  content: "\\\f0db";
}
i.icon.layout.grid:before {
  content: "\\\f00a";
}
i.icon.layout.list:before {
  content: "\\\f00b";
}
i.icon.leaf:before {
  content: "\\\f06c";
}
i.icon.legal:before {
  content: "\\\f0e3";
}
i.icon.lemon:before {
  content: "\\\f094";
}
i.icon.level.down:before {
  content: "\\\f149";
}
i.icon.level.up:before {
  content: "\\\f148";
}
i.icon.lightbulb:before {
  content: "\\\f0eb";
}
i.icon.linkedin.sign:before {
  content: "\\\f08c";
}
i.icon.linkedin:before {
  content: "\\\f0e1";
}
i.icon.linux:before {
  content: "\\\f17c";
}
i.icon.list.ordered:before {
  content: "\\\f0cb";
}
i.icon.list.unordered:before {
  content: "\\\f0ca";
}
i.icon.list:before {
  content: "\\\f03a";
}
i.icon.loading:before {
  content: "\\\f110";
}
i.icon.location:before {
  content: "\\\f124";
}
i.icon.lock:before {
  content: "\\\f023";
}
i.icon.long.arrow.down:before {
  content: "\\\f175";
}
i.icon.long.arrow.left:before {
  content: "\\\f177";
}
i.icon.long.arrow.right:before {
  content: "\\\f178";
}
i.icon.long.arrow.up:before {
  content: "\\\f176";
}
i.icon.magic:before {
  content: "\\\f0d0";
}
i.icon.magnet:before {
  content: "\\\f076";
}
i.icon.mail.outline:before {
  content: "\\\f003";
}
i.icon.mail.reply:before {
  content: "\\\f112";
}
i.icon.mail:before {
  content: "\\\f0e0";
}
i.icon.male:before {
  content: "\\\f183";
}
i.icon.map.marker:before {
  content: "\\\f041";
}
i.icon.map:before {
  content: "\\\f14e";
}
i.icon.maxcdn:before {
  content: "\\\f136";
}
i.icon.medkit:before {
  content: "\\\f0fa";
}
i.icon.meh:before {
  content: "\\\f11a";
}
i.icon.minus.sign.alternate:before {
  content: "\\\f146";
}
i.icon.minus.sign:before {
  content: "\\\f056";
}
i.icon.minus:before {
  content: "\\\f068";
}
i.icon.mobile:before {
  content: "\\\f10b";
}
i.icon.money:before {
  content: "\\\f0d6";
}
i.icon.moon:before {
  content: "\\\f186";
}
i.icon.move:before {
  content: "\\\f047";
}
i.icon.music:before {
  content: "\\\f001";
}
i.icon.mute:before {
  content: "\\\f131";
}
i.icon.off:before {
  content: "\\\f011";
}
i.icon.ok.circle:before {
  content: "\\\f05d";
}
i.icon.ok.sign:before {
  content: "\\\f058";
}
i.icon.paste:before {
  content: "\\\f0ea";
}
i.icon.pause:before {
  content: "\\\f04c";
}
i.icon.payment:before {
  content: "\\\f09d";
}
i.icon.pencil:before {
  content: "\\\f040";
}
i.icon.phone.sign:before {
  content: "\\\f098";
}
i.icon.phone:before {
  content: "\\\f095";
}
i.icon.photo:before {
  content: "\\\f03e";
}
i.icon.pin:before {
  content: "\\\f08d";
}
i.icon.pinterest.sign:before {
  content: "\\\f0d3";
}
i.icon.pinterest:before {
  content: "\\\f0d2";
}
i.icon.plane:before {
  content: "\\\f072";
}
i.icon.play.circle:before {
  content: "\\\f01d";
}
i.icon.play.sign:before {
  content: "\\\f144";
}
i.icon.play:before {
  content: "\\\f04b";
}
i.icon.pound:before {
  content: "\\\f154";
}
i.icon.print:before {
  content: "\\\f02f";
}
i.icon.puzzle.piece:before {
  content: "\\\f12e";
}
i.icon.qr.code:before {
  content: "\\\f029";
}
i.icon.question:before {
  content: "\\\f128";
}
i.icon.quote.left:before {
  content: "\\\f10d";
}
i.icon.quote.right:before {
  content: "\\\f10e";
}
i.icon.refresh:before {
  content: "\\\f021";
}
i.icon.remove.circle:before {
  content: "\\\f05c";
}
i.icon.remove.sign:before {
  content: "\\\f057";
}
i.icon.remove:before {
  content: "\\\f00d";
}
i.icon.renren:before {
  content: "\\\f18b";
}
i.icon.reorder:before {
  content: "\\\f0c9";
}
i.icon.repeat:before {
  content: "\\\f01e";
}
i.icon.reply.all.mail:before {
  content: "\\\f122";
}
i.icon.resize.full:before {
  content: "\\\f065";
}
i.icon.resize.horizontal:before {
  content: "\\\f07e";
}
i.icon.resize.small:before {
  content: "\\\f066";
}
i.icon.resize.vertical:before {
  content: "\\\f07d";
}
i.icon.retweet:before {
  content: "\\\f079";
}
i.icon.road:before {
  content: "\\\f018";
}
i.icon.rocket:before {
  content: "\\\f135";
}
i.icon.rss.sign:before {
  content: "\\\f143";
}
i.icon.rss:before {
  content: "\\\f09e";
}
i.icon.rupee:before {
  content: "\\\f156";
}
i.icon.save:before {
  content: "\\\f0c7";
}
i.icon.screenshot:before {
  content: "\\\f05b";
}
i.icon.search:before {
  content: "\\\f002";
}
i.icon.setting:before {
  content: "\\\f013";
}
i.icon.settings:before {
  content: "\\\f085";
}
i.icon.share.sign:before {
  content: "\\\f14d";
}
i.icon.share:before {
  content: "\\\f045";
}
i.icon.shield:before {
  content: "\\\f132";
}
i.icon.shuffle:before {
  content: "\\\f074";
}
i.icon.sign.in:before {
  content: "\\\f090";
}
i.icon.sign.out:before {
  content: "\\\f08b";
}
i.icon.sign:before {
  content: "\\\f0c8";
}
i.icon.signal:before {
  content: "\\\f012";
}
i.icon.sitemap:before {
  content: "\\\f0e8";
}
i.icon.skype:before {
  content: "\\\f17e";
}
i.icon.smile:before {
  content: "\\\f118";
}
i.icon.sort.ascending:before {
  content: "\\\f0de";
}
i.icon.sort.descending:before {
  content: "\\\f0dd";
}
i.icon.sort.alphabet.descending:before {
  content: "\\\f15e";
}
i.icon.sort.alphabet:before {
  content: "\\\f15d";
}
i.icon.sort.attributes.descending:before {
  content: "\\\f161";
}
i.icon.sort.attributes:before {
  content: "\\\f160";
}
i.icon.sort.order.descending:before {
  content: "\\\f163";
}
i.icon.sort.order:before {
  content: "\\\f162";
}
i.icon.sort:before {
  content: "\\\f0dc";
}
i.icon.stackexchange:before {
  content: "\\\f16c";
}
i.icon.star.empty:before {
  content: "\\\f006";
}
i.icon.star.half.empty:before {
  content: "\\\f123";
}
i.icon.star.half.full:before,
i.icon.star.half:before {
  content: "\\\f089";
}
i.icon.star:before {
  content: "\\\f005";
}
i.icon.step.backward:before {
  content: "\\\f048";
}
i.icon.step.forward:before {
  content: "\\\f051";
}
i.icon.stethoscope:before {
  content: "\\\f0f1";
}
i.icon.stop:before {
  content: "\\\f04d";
}
i.icon.strikethrough:before {
  content: "\\\f0cc";
}
i.icon.subscript:before {
  content: "\\\f12c";
}
i.icon.suitcase:before {
  content: "\\\f0f2";
}
i.icon.sun:before {
  content: "\\\f185";
}
i.icon.superscript:before {
  content: "\\\f12b";
}
i.icon.table:before {
  content: "\\\f0ce";
}
i.icon.tablet:before {
  content: "\\\f10a";
}
i.icon.tag:before {
  content: "\\\f02b";
}
i.icon.tags:before {
  content: "\\\f02c";
}
i.icon.tasks:before {
  content: "\\\f0ae";
}
i.icon.terminal:before {
  content: "\\\f120";
}
i.icon.text.height:before {
  content: "\\\f034";
}
i.icon.text.width:before {
  content: "\\\f035";
}
i.icon.thumbs.down.outline:before {
  content: "\\\f088";
}
i.icon.thumbs.down:before {
  content: "\\\f165";
}
i.icon.thumbs.up.outline:before {
  content: "\\\f087";
}
i.icon.thumbs.up:before {
  content: "\\\f164";
}
i.icon.ticket:before {
  content: "\\\f145";
}
i.icon.time:before {
  content: "\\\f017";
}
i.icon.tint:before {
  content: "\\\f043";
}
i.icon.trash:before {
  content: "\\\f014";
}
i.icon.trello:before {
  content: "\\\f181";
}
i.icon.trophy:before {
  content: "\\\f091";
}
i.icon.truck:before {
  content: "\\\f0d1";
}
i.icon.tumblr.sign:before {
  content: "\\\f174";
}
i.icon.tumblr:before {
  content: "\\\f173";
}
i.icon.twitter.sign:before {
  content: "\\\f081";
}
i.icon.twitter:before {
  content: "\\\f099";
}
i.icon.umbrella:before {
  content: "\\\f0e9";
}
i.icon.underline:before {
  content: "\\\f0cd";
}
i.icon.undo:before {
  content: "\\\f0e2";
}
i.icon.unhide:before {
  content: "\\\f06e";
}
i.icon.unlink:before {
  content: "\\\f127";
}
i.icon.unlock.alternate:before {
  content: "\\\f13e";
}
i.icon.unlock:before {
  content: "\\\f09c";
}
i.icon.unmute:before {
  content: "\\\f130";
}
i.icon.up:before {
  content: "\\\f062";
}
i.icon.upload.disk:before {
  content: "\\\f093";
}
i.icon.upload:before {
  content: "\\\f01b";
}
i.icon.url:before {
  content: "\\\f0c1";
}
i.icon.user:before {
  content: "\\\f007";
}
i.icon.users:before {
  content: "\\\f0c0";
}
i.icon.video:before {
  content: "\\\f008";
}
i.icon.vk:before {
  content: "\\\f189";
}
i.icon.volume.down:before {
  content: "\\\f027";
}
i.icon.volume.off:before {
  content: "\\\f026";
}
i.icon.volume.up:before {
  content: "\\\f028";
}
i.icon.warning:before {
  content: "\\\f071";
}
i.icon.weibo:before {
  content: "\\\f18a";
}
i.icon.windows:before {
  content: "\\\f17a";
}
i.icon.won:before {
  content: "\\\f159";
}
i.icon.wrench:before {
  content: "\\\f0ad";
}
i.icon.xing.sign:before {
  content: "\\\f169";
}
i.icon.xing:before {
  content: "\\\f168";
}
i.icon.yen:before {
  content: "\\\f157";
}
i.icon.youtube.play:before {
  content: "\\\f16a";
}
i.icon.youtube.sign:before {
  content: "\\\f166";
}
i.icon.youtube:before {
  content: "\\\f167";
}
i.icon.yuan:before {
  content: "\\\f158";
}
i.icon.zoom.in:before {
  content: "\\\f00e";
}
i.icon.zoom.out:before {
  content: "\\\f010";
}
/*--------------
    Aliases
---------------*/
i.icon.check:before {
  content: "\\\f00c";
}
i.icon.close:before {
  content: "\\\f00d";
}
i.icon.delete:before {
  content: "\\\f00d";
}
i.icon.like:before {
  content: "\\\f004";
}
i.icon.plus:before {
  content: "\\\f067";
}
i.icon.signup:before {
  content: "\\\f044";
}
/*--------------
   Spacing Fix
---------------*/
/* stars are usually consecutive */
i.icon.star {
  width: auto;
  margin: 0em;
}
/* left side icons */
i.icon.left {
  width: auto;
  margin: 0em 0.5em 0em 0em;
}
/* right side icons */
i.icon.search,
i.icon.right {
  width: auto;
  margin: 0em 0em 0em 0.5em;
}
/*******************************
             Types
*******************************/
/*--------------
    Loading
---------------*/
i.icon.loading {
  -webkit-animation: icon-loading 2s linear infinite;
  -moz-animation: icon-loading 2s linear infinite;
  -ms-animation: icon-loading 2s linear infinite;
  animation: icon-loading 2s linear infinite;
}
@keyframes icon-loading {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes icon-loading {
  from {
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes icon-loading {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-ms-keyframes icon-loading {
  from {
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
/*******************************
             States
*******************************/
i.icon.hover {
  opacity: 1;
}
i.icon.active {
  opacity: 1;
}
i.emphasized.icon {
  opacity: 1;
}
i.icon.disabled {
  opacity: 0.3;
}
/*******************************
           Variations
*******************************/
/*-------------------
         Link
--------------------*/
i.link.icon {
  cursor: pointer;
  opacity: 0.7;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}
i.link.icon:hover {
  opacity: 1 !important;
}
/*-------------------
      Circular
--------------------*/
i.circular.icon {
  border-radius: 500em !important;
  padding: 0.5em 0.35em !important;
  -webkit-box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
  line-height: 1 !important;
  width: 2em !important;
  height: 2em !important;
}
i.circular.inverted.icon {
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*-------------------
      Flipped
--------------------*/
i.flipped.icon,
i.horizontally.flipped.icon {
  -webkit-transform: scale(-1, 1);
  -moz-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
i.vertically.flipped.icon {
  -webkit-transform: scale(1, -1);
  -moz-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}
/*-------------------
      Rotated
--------------------*/
i.rotated.icon,
i.right.rotated.icon,
i.clockwise.rotated.icon {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
i.left.rotated.icon,
i.counterclockwise.rotated.icon {
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
/*-------------------
        Square
--------------------*/
i.square.icon {
  width: 2em;
  height: 2em;
  padding: 0.5em 0.35em !important;
  -webkit-box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0em 0em 0em 0.1em rgba(0, 0, 0, 0.1) inset;
  vertical-align: baseline;
}
i.square.inverted.icon {
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*-------------------
      Inverted
--------------------*/
i.inverted.icon {
  background-color: #222222;
  color: #FFFFFF;
  -moz-osx-font-smoothing: grayscale;
}
/*-------------------
       Colors
--------------------*/
i.blue.icon {
  color: #6ECFF5 !important;
}
i.black.icon {
  color: #5C6166 !important;
}
i.green.icon {
  color: #A1CF64 !important;
}
i.red.icon {
  color: #D95C5C !important;
}
i.purple.icon {
  color: #564F8A !important;
}
i.orange.icon {
  color: #F05940 !important;
}
i.teal.icon {
  color: #00B5AD !important;
}
/*-------------------
   Inverted Colors
--------------------*/
i.inverted.black.icon {
  background-color: #5C6166 !important;
  color: #FFFFFF !important;
}
i.inverted.blue.icon {
  background-color: #6ECFF5 !important;
  color: #FFFFFF !important;
}
i.inverted.green.icon {
  background-color: #A1CF64 !important;
  color: #FFFFFF !important;
}
i.inverted.red.icon {
  background-color: #D95C5C !important;
  color: #FFFFFF !important;
}
i.inverted.purple.icon {
  background-color: #564F8A !important;
  color: #FFFFFF !important;
}
i.inverted.orange.icon {
  background-color: #F05940 !important;
  color: #FFFFFF !important;
}
i.inverted.teal.icon {
  background-color: #00B5AD !important;
  color: #FFFFFF !important;
}
/*-------------------
        Sizes
--------------------*/
i.small.icon {
  font-size: 0.875em;
}
i.icon {
  font-size: 1em;
}
i.large.icon {
  font-size: 1.5em;
  vertical-align: middle;
}
i.big.icon {
  font-size: 2em;
  vertical-align: middle;
}
i.huge.icon {
  font-size: 4em;
  vertical-align: middle;
}
i.massive.icon {
  font-size: 8em;
  vertical-align: middle;
}

/*
 * # Semantic - Image
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
             Image
*******************************/
.ui.image {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
}
img.ui.image {
  display: block;
  background: none;
}
.ui.image img {
  display: block;
  max-width: 100%;
  height: auto;
}
/*******************************
            States
*******************************/
.ui.disabled.image {
  cursor: default;
  opacity: 0.3;
}
/*******************************
          Variations
*******************************/
/*--------------
     Rounded
---------------*/
.ui.rounded.images .image,
.ui.rounded.images img,
.ui.rounded.image img,
.ui.rounded.image {
  border-radius: 0.3125em;
}
/*--------------
     Circular
---------------*/
.ui.circular.images .image,
.ui.circular.images img,
.ui.circular.image img,
.ui.circular.image {
  border-radius: 500rem;
}
/*--------------
     Fluid
---------------*/
.ui.fluid.images,
.ui.fluid.image,
.ui.fluid.images img,
.ui.fluid.image img {
  display: block;
  width: 100%;
}
/*--------------
     Avatar
---------------*/
.ui.avatar.images .image,
.ui.avatar.images img,
.ui.avatar.image img,
.ui.avatar.image {
  margin-right: 0.5em;
  display: inline-block;
  width: 2em;
  height: 2em;
  border-radius: 500rem;
}
/*-------------------
       Floated
--------------------*/
.ui.floated.image,
.ui.floated.images {
  float: left;
  margin-right: 1em;
  margin-bottom: 1em;
}
.ui.right.floated.images,
.ui.right.floated.image {
  float: right;
  margin-bottom: 1em;
  margin-left: 1em;
}
/*--------------
     Sizes
---------------*/
.ui.tiny.images .image,
.ui.tiny.images img,
.ui.tiny.image {
  width: 20px;
  font-size: 0.7rem;
}
.ui.mini.images .image,
.ui.mini.images img,
.ui.mini.image {
  width: 35px;
  font-size: 0.8rem;
}
.ui.small.images .image,
.ui.small.images img,
.ui.small.image {
  width: 80px;
  font-size: 0.9rem;
}
.ui.medium.images .image,
.ui.medium.images img,
.ui.medium.image {
  width: 300px;
  font-size: 1rem;
}
.ui.large.images .image,
.ui.large.images img,
.ui.large.image {
  width: 450px;
  font-size: 1.1rem;
}
.ui.huge.images .image,
.ui.huge.images img,
.ui.huge.image {
  width: 600px;
  font-size: 1.2rem;
}
/*******************************
              Groups
*******************************/
.ui.images {
  font-size: 0em;
  margin: 0em -0.25rem 0rem;
}
.ui.images .image,
.ui.images img {
  display: inline-block;
  margin: 0em 0.25em 0.5em;
}

/*
 * # Semantic - Input
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
           Standard
*******************************/
/*--------------------
        Inputs
---------------------*/
.ui.input {
  display: inline-block;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
}
.ui.input input {
  width: 100%;
  font-family: "Helvetica Neue", "Helvetica", Arial;
  margin: 0em;
  padding: 0.65em 1em;
  font-size: 1em;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.15);
  outline: none;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 0.3125em;
  -webkit-transition: background-color 0.3s ease-out, -webkit-box-shadow 0.2s ease, border-color 0.2s ease;
  -moz-transition: background-color 0.3s ease-out, box-shadow 0.2s ease, border-color 0.2s ease;
  transition: background-color 0.3s ease-out, box-shadow 0.2s ease, border-color 0.2s ease;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
/*--------------------
      Placeholder
---------------------*/
/* browsers require these rules separate */
.ui.input::-webkit-input-placeholder {
  color: #BBBBBB;
}
.ui.input::-moz-placeholder {
  color: #BBBBBB;
}
/*******************************
            States
*******************************/
/*--------------------
        Active
---------------------*/
.ui.input input:active,
.ui.input.down input {
  border-color: rgba(0, 0, 0, 0.3);
  background-color: #FAFAFA;
}
/*--------------------
        Loading
---------------------*/
.ui.loading.input > .icon {
  background: url(../images/loader-mini.gif) no-repeat 50% 50%;
}
.ui.loading.input > .icon:before,
.ui.loading.input > .icon:after {
  display: none;
}
/*--------------------
        Focus
---------------------*/
.ui.input.focus input,
.ui.input input:focus {
  border-color: rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.85);
}
.ui.input.focus input input::-webkit-input-placeholder,
.ui.input input:focus input::-webkit-input-placeholder {
  color: #AAAAAA;
}
.ui.input.focus input input::-moz-placeholder,
.ui.input input:focus input::-moz-placeholder {
  color: #AAAAAA;
}
/*--------------------
        Error
---------------------*/
.ui.input.error input {
  background-color: #FFFAFA;
  border-color: #E7BEBE;
  color: #D95C5C;
}
/* Error Placeholder */
.ui.input.error input ::-webkit-input-placeholder {
  color: rgba(255, 80, 80, 0.4);
}
.ui.input.error input ::-moz-placeholder {
  color: rgba(255, 80, 80, 0.4);
}
.ui.input.error input :focus::-webkit-input-placeholder {
  color: rgba(255, 80, 80, 0.7);
}
.ui.input.error input :focus::-moz-placeholder {
  color: rgba(255, 80, 80, 0.7);
}
/*******************************
           Variations
*******************************/
/*--------------------
      Transparent
---------------------*/
.ui.transparent.input input {
  border: none;
  background-color: transparent;
}
/*--------------------
         Icon
---------------------*/
.ui.icon.input > .icon {
  cursor: default;
  position: absolute;
  opacity: 0.5;
  top: 0px;
  right: 0px;
  margin: 0em;
  width: 2.6em;
  height: 100%;
  padding-top: 0.82em;
  text-align: center;
  border-radius: 0em 0.3125em 0.3125em 0em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}
.ui.icon.input > .link.icon {
  cursor: pointer;
}
.ui.icon.input input {
  padding-right: 3em !important;
}
.ui.icon.input > .circular.icon {
  top: 0.35em;
  right: 0.5em;
}
/* Left Side */
.ui.left.icon.input > .icon {
  right: auto;
  left: 1px;
  border-radius: 0.3125em 0em 0em 0.3125em;
}
.ui.left.icon.input > .circular.icon {
  right: auto;
  left: 0.5em;
}
.ui.left.icon.input > input {
  padding-left: 3em !important;
  padding-right: 1.2em !important;
}
/* Focus */
.ui.icon.input > input:focus ~ .icon {
  opacity: 1;
}
/*--------------------
        Labeled
---------------------*/
.ui.labeled.input .corner.label {
  font-size: 0.7em;
  border-radius: 0 0.3125em;
}
.ui.labeled.input .left.corner.label {
  border-radius: 0.3125em 0;
}
.ui.labeled.input input {
  padding-right: 2.5em !important;
}
/* Spacing with corner label */
.ui.labeled.icon.input:not(.left) > input {
  padding-right: 3.25em !important;
}
.ui.labeled.icon.input:not(.left) > .icon {
  margin-right: 1.25em;
}
/*--------------------
        Action
---------------------*/
.ui.action.input {
  display: table;
}
.ui.action.input > input {
  display: table-cell;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  border-right: none;
}
.ui.action.input > .button,
.ui.action.input > .buttons {
  display: table-cell;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  white-space: nowrap;
}
.ui.action.input > .button > .icon,
.ui.action.input > .buttons > .button > .icon {
  display: inline;
  vertical-align: top;
}
.ui.fluid.action.input {
  display: table;
  width: 100%;
}
.ui.fluid.action.input > .button {
  width: 0.01%;
}
/*--------------------
        Fluid
---------------------*/
.ui.fluid.input {
  display: block;
}
/*--------------------
        Size
---------------------*/
.ui.mini.input {
  font-size: 0.8125em;
}
.ui.small.input {
  font-size: 0.875em;
}
.ui.input {
  font-size: 1em;
}
.ui.large.input {
  font-size: 1.125em;
}
.ui.big.input {
  font-size: 1.25em;
}
.ui.huge.input {
  font-size: 1.375em;
}
.ui.massive.input {
  font-size: 1.5em;
}

/*
 * # Semantic - Label
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Label
*******************************/
.ui.label {
  display: inline-block;
  vertical-align: middle;
  margin: -0.25em 0.25em 0em;
  background-color: #E8E8E8;
  border-color: #E8E8E8;
  padding: 0.5em 0.8em;
  color: rgba(0, 0, 0, 0.65);
  text-transform: uppercase;
  font-weight: normal;
  border-radius: 0.325em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: background 0.1s linear
  ;
  -moz-transition: background 0.1s linear
  ;
  transition: background 0.1s linear
  ;
}
.ui.label:first-child {
  margin-left: 0em;
}
.ui.label:last-child {
  margin-right: 0em;
}
/* Link */
a.ui.label {
  cursor: pointer;
}
/* Inside Link */
.ui.label a {
  cursor: pointer;
  color: inherit;
  opacity: 0.8;
  -webkit-transition: 0.2s opacity ease;
  -moz-transition: 0.2s opacity ease;
  transition: 0.2s opacity ease;
}
.ui.label a:hover {
  opacity: 1;
}
/* Detail */
.ui.label .detail {
  display: inline-block;
  margin-left: 0.5em;
  font-weight: bold;
  opacity: 0.8;
}
/* Icon */
.ui.label .icon {
  width: auto;
}
/* Removable label */
.ui.label .delete.icon {
  cursor: pointer;
  margin: 0em 0em 0em 0.5em;
  opacity: 0.7;
  -webkit-transition: background 0.1s linear
  ;
  -moz-transition: background 0.1s linear
  ;
  transition: background 0.1s linear
  ;
}
.ui.label .delete.icon:hover {
  opacity: 0.99;
}
/*-------------------
       Coupling
--------------------*/
/* Padding on next content after a label */
.ui.segment > .attached.label:first-child + * {
  margin-top: 2.5em;
}
.ui.segment > .bottom.attached.label:first-child ~ :last-child {
  margin-top: 0em;
  margin-bottom: 2.5em;
}
/*******************************
             Types
*******************************/
.ui.image.label {
  width: auto !important;
  margin-top: 0em;
  margin-bottom: 0em;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  line-height: 1.5em;
  vertical-align: baseline;
  text-transform: none;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
}
.ui.image.label img {
  display: inline-block;
  height: 2.25em;
  margin: -0.4em 0.8em -0.4em -0.8em;
  vertical-align: top;
  border-radius: 0.325em 0em 0em 0.325em;
}
/*******************************
             States
*******************************/
/*-------------------
      Disabled
--------------------*/
.ui.label.disabled {
  opacity: 0.5;
}
/*-------------------
        Hover
--------------------*/
a.ui.labels .label:hover,
a.ui.label:hover {
  background-color: #E0E0E0;
  border-color: #E0E0E0;
  color: rgba(0, 0, 0, 0.7);
}
.ui.labels a.label:hover:before,
a.ui.label:hover:before {
  background-color: #E0E0E0;
  color: rgba(0, 0, 0, 0.7);
}
/*-------------------
      Visible
--------------------*/
.ui.labels.visible .label,
.ui.label.visible {
  display: inline-block !important;
}
/*-------------------
      Hidden
--------------------*/
.ui.labels.hidden .label,
.ui.label.hidden {
  display: none !important;
}
/*******************************
           Variations
*******************************/
/*-------------------
         Tag
--------------------*/
.ui.tag.labels .label,
.ui.tag.label {
  margin-left: 1em;
  position: relative;
  padding: 0.33em 1.3em 0.33em 1.4em;
  border-radius: 0px 3px 3px 0px;
}
.ui.tag.labels .label:before,
.ui.tag.label:before {
  position: absolute;
  top: 0.3em;
  left: 0.3em;
  content: '';
  margin-left: -1em;
  background-image: none;
  width: 1.5em;
  height: 1.5em;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: background 0.1s linear
    ;
  -moz-transition: background 0.1s linear
    ;
  transition: background 0.1s linear
    ;
}
.ui.tag.labels .label:after,
.ui.tag.label:after {
  position: absolute;
  content: '';
  top: 50%;
  left: -0.25em;
  margin-top: -0.3em;
  background-color: #FFFFFF;
  width: 0.55em;
  height: 0.55em;
  -webkit-box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.3);
  border-radius: 100px 100px 100px 100px;
}
/*-------------------
       Ribbon
--------------------*/
.ui.ribbon.label {
  position: relative;
  margin: 0em 0.2em;
  left: -2rem;
  padding-left: 2rem;
  border-radius: 0px 4px 4px 0px;
  border-color: rgba(0, 0, 0, 0.15);
}
.ui.ribbon.label:after {
  position: absolute;
  content: "";
  top: 100%;
  left: 0%;
  border-top: 0em solid transparent;
  border-right-width: 1em;
  border-right-color: inherit;
  border-right-style: solid;
  border-bottom: 1em solid transparent;
  border-left: 0em solid transparent;
  width: 0em;
  height: 0em;
}
/*-------------------
       Attached
--------------------*/
.ui.top.attached.label,
.ui.attached.label {
  width: 100%;
  position: absolute;
  margin: 0em;
  top: 0em;
  left: 0em;
  padding: 0.75em 1em;
  border-radius: 4px 4px 0em 0em;
}
.ui.bottom.attached.label {
  top: auto;
  bottom: 0em;
  border-radius: 0em 0em 4px 4px;
}
.ui.top.left.attached.label {
  width: auto;
  margin-top: 0em !important;
  border-radius: 4px 0em 4px 0em;
}
.ui.top.right.attached.label {
  width: auto;
  left: auto;
  right: 0em;
  border-radius: 0em 4px 0em 4px;
}
.ui.bottom.left.attached.label {
  width: auto;
  top: auto;
  bottom: 0em;
  border-radius: 4px 0em 0em 4px;
}
.ui.bottom.right.attached.label {
  top: auto;
  bottom: 0em;
  left: auto;
  right: 0em;
  width: auto;
  border-radius: 4px 0em 4px 0em;
}
/*-------------------
    Corner Label
--------------------*/
.ui.corner.label {
  background-color: transparent;
  position: absolute;
  top: 0em;
  right: 0em;
  z-index: 10;
  margin: 0em;
  width: 3em;
  height: 3em;
  padding: 0em;
  text-align: center;
  -webkit-transition: color 0.2s ease;
  -moz-transition: color 0.2s ease;
  transition: color 0.2s ease;
}
.ui.corner.label:after {
  position: absolute;
  content: "";
  right: 0em;
  top: 0em;
  z-index: -1;
  width: 0em;
  height: 0em;
  border-top: 0em solid transparent;
  border-right: 3em solid transparent;
  border-bottom: 3em solid transparent;
  border-left: 0em solid transparent;
  border-right-color: inherit;
  -webkit-transition: border-color 0.2s ease;
  -moz-transition: border-color 0.2s ease;
  transition: border-color 0.2s ease;
}
.ui.corner.label .icon {
  font-size: 0.875em;
  margin: 0.5em 0em 0em 1.25em;
}
.ui.corner.label .text {
  display: inline-block;
  font-weight: bold;
  margin: 0.5em 0em 0em 1em;
  width: 2.5em;
  font-size: 0.875em;
  text-align: center;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Coupling */
.ui.rounded.image > .ui.corner.label,
.ui.input > .ui.corner.label,
.ui.segment > .ui.corner.label {
  overflow: hidden;
}
.ui.segment > .ui.corner.label {
  top: -1px;
  right: -1px;
}
.ui.segment > .ui.left.corner.label {
  right: auto;
  left: -1px;
}
.ui.input > .ui.corner.label {
  top: 1px;
  right: 1px;
}
.ui.input > .ui.right.corner.label {
  right: auto;
  left: 1px;
}
/* Left Corner */
.ui.left.corner.label,
.ui.left.corner.label:after {
  right: auto;
  left: 0em;
}
.ui.left.corner.label:after {
  border-top: 3em solid transparent;
  border-right: 3em solid transparent;
  border-bottom: 0em solid transparent;
  border-left: 0em solid transparent;
  border-top-color: inherit;
}
.ui.left.corner.label .icon {
  margin: 0.5em 0em 0em -1em;
}
.ui.left.corner.label .text {
  margin: 0.5em 0em 0em -1em;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
/* Hover */
.ui.corner.label:hover {
  background-color: transparent;
}
/*-------------------
       Fluid
--------------------*/
.ui.label.fluid,
.ui.fluid.labels > .label {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
/*-------------------
       Inverted
--------------------*/
.ui.inverted.labels .label,
.ui.inverted.label {
  color: #FFFFFF !important;
}
/*-------------------
       Colors
--------------------*/
/*--- Black ---*/
.ui.black.labels .label,
.ui.black.label {
  background-color: #5C6166 !important;
  border-color: #5C6166 !important;
  color: #FFFFFF !important;
}
.ui.labels .black.label:before,
.ui.black.labels .label:before,
.ui.black.label:before {
  background-color: #5C6166 !important;
}
/* Hover */
a.ui.black.labels .label:hover,
a.ui.black.label:hover {
  background-color: #333333 !important;
  border-color: #333333 !important;
}
.ui.labels a.black.label:hover:before,
.ui.black.labels a.label:hover:before,
a.ui.black.label:hover:before {
  background-color: #333333 !important;
}
/* Corner */
.ui.black.corner.label,
.ui.black.corner.label:hover {
  background-color: transparent !important;
}
/* Ribbon */
.ui.black.ribbon.label {
  border-color: #333333 !important;
}
/*--- Green ---*/
.ui.green.labels .label,
.ui.green.label {
  background-color: #A1CF64 !important;
  border-color: #A1CF64 !important;
  color: #FFFFFF !important;
}
.ui.labels .green.label:before,
.ui.green.labels .label:before,
.ui.green.label:before {
  background-color: #A1CF64 !important;
}
/* Hover */
a.ui.green.labels .label:hover,
a.ui.green.label:hover {
  background-color: #89B84C !important;
  border-color: #89B84C !important;
}
.ui.labels a.green.label:hover:before,
.ui.green.labels a.label:hover:before,
a.ui.green.label:hover:before {
  background-color: #89B84C !important;
}
/* Corner */
.ui.green.corner.label,
.ui.green.corner.label:hover {
  background-color: transparent !important;
}
/* Ribbon */
.ui.green.ribbon.label {
  border-color: #89B84C !important;
}
/*--- Red ---*/
.ui.red.labels .label,
.ui.red.label {
  background-color: #D95C5C !important;
  border-color: #D95C5C !important;
  color: #FFFFFF !important;
}
.ui.labels .red.label:before,
.ui.red.labels .label:before,
.ui.red.label:before {
  background-color: #D95C5C !important;
}
/* Corner */
.ui.red.corner.label,
.ui.red.corner.label:hover {
  background-color: transparent !important;
}
/* Hover */
a.ui.red.labels .label:hover,
a.ui.red.label:hover {
  background-color: #DE3859 !important;
  border-color: #DE3859 !important;
  color: #FFFFFF !important;
}
.ui.labels a.red.label:hover:before,
.ui.red.labels a.label:hover:before,
a.ui.red.label:hover:before {
  background-color: #DE3859 !important;
}
/* Ribbon */
.ui.red.ribbon.label {
  border-color: #DE3859 !important;
}
/*--- Blue ---*/
.ui.blue.labels .label,
.ui.blue.label {
  background-color: #6ECFF5 !important;
  border-color: #6ECFF5 !important;
  color: #FFFFFF !important;
}
.ui.labels .blue.label:before,
.ui.blue.labels .label:before,
.ui.blue.label:before {
  background-color: #6ECFF5 !important;
}
/* Hover */
a.ui.blue.labels .label:hover,
.ui.blue.labels a.label:hover,
a.ui.blue.label:hover {
  background-color: #1AB8F3 !important;
  border-color: #1AB8F3 !important;
  color: #FFFFFF !important;
}
.ui.labels a.blue.label:hover:before,
.ui.blue.labels a.label:hover:before,
a.ui.blue.label:hover:before {
  background-color: #1AB8F3 !important;
}
/* Corner */
.ui.blue.corner.label,
.ui.blue.corner.label:hover {
  background-color: transparent !important;
}
/* Ribbon */
.ui.blue.ribbon.label {
  border-color: #1AB8F3 !important;
}
/*--- Purple ---*/
.ui.purple.labels .label,
.ui.purple.label {
  background-color: #564F8A !important;
  border-color: #564F8A !important;
  color: #FFFFFF !important;
}
.ui.labels .purple.label:before,
.ui.purple.labels .label:before,
.ui.purple.label:before {
  background-color: #564F8A !important;
}
/* Hover */
a.ui.purple.labels .label:hover,
.ui.purple.labels a.label:hover,
a.ui.purple.label:hover {
  background-color: #3E3773 !important;
  border-color: #3E3773 !important;
  color: #FFFFFF !important;
}
.ui.labels a.purple.label:hover:before,
.ui.purple.labels a.label:hover:before,
a.ui.purple.label:hover:before {
  background-color: #3E3773 !important;
}
/* Corner */
.ui.purple.corner.label,
.ui.purple.corner.label:hover {
  background-color: transparent !important;
}
/* Ribbon */
.ui.purple.ribbon.label {
  border-color: #3E3773 !important;
}
/*--- Orange ---*/
.ui.orange.labels .label,
.ui.orange.label {
  background-color: #F05940 !important;
  border-color: #F05940 !important;
  color: #FFFFFF !important;
}
.ui.labels .orange.label:before,
.ui.orange.labels .label:before,
.ui.orange.label:before {
  background-color: #F05940 !important;
}
/* Hover */
a.ui.orange.labels .label:hover,
.ui.orange.labels a.label:hover,
a.ui.orange.label:hover {
  background-color: #FF4121 !important;
  border-color: #FF4121 !important;
  color: #FFFFFF !important;
}
.ui.labels a.orange.label:hover:before,
.ui.orange.labels a.label:hover:before,
a.ui.orange.label:hover:before {
  background-color: #FF4121 !important;
}
/* Corner */
.ui.orange.corner.label,
.ui.orange.corner.label:hover {
  background-color: transparent !important;
}
/* Ribbon */
.ui.orange.ribbon.label {
  border-color: #FF4121 !important;
}
/*--- Teal ---*/
.ui.teal.labels .label,
.ui.teal.label {
  background-color: #00B5AD !important;
  border-color: #00B5AD !important;
  color: #FFFFFF !important;
}
.ui.labels .teal.label:before,
.ui.teal.labels .label:before,
.ui.teal.label:before {
  background-color: #00B5AD !important;
}
/* Hover */
a.ui.teal.labels .label:hover,
.ui.teal.labels a.label:hover,
a.ui.teal.label:hover {
  background-color: #009A93 !important;
  border-color: #009A93 !important;
  color: #FFFFFF !important;
}
.ui.labels a.teal.label:hover:before,
.ui.teal.labels a.label:hover:before,
a.ui.teal.label:hover:before {
  background-color: #009A93 !important;
}
/* Corner */
.ui.teal.corner.label,
.ui.teal.corner.label:hover {
  background-color: transparent !important;
}
/* Ribbon */
.ui.teal.ribbon.label {
  border-color: #009A93 !important;
}
/*-------------------
     Horizontal
--------------------*/
.ui.horizontal.labels .label,
.ui.horizontal.label {
  margin: -0.125em 0.5em -0.125em 0em;
  padding: 0.35em 1em;
  min-width: 6em;
  text-align: center;
}
/*-------------------
       Circular
--------------------*/
.ui.circular.labels .label,
.ui.circular.label {
  min-height: 1em;
  max-height: 2em;
  padding: 0.5em !important;
  line-height: 1em;
  text-align: center;
  border-radius: 500rem;
}
/*-------------------
       Pointing
--------------------*/
.ui.pointing.label {
  position: relative;
}
.ui.attached.pointing.label {
  position: absolute;
}
.ui.pointing.label:before {
  position: absolute;
  content: "";
  width: 0.6em;
  height: 0.6em;
  background-image: none;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 2;
  -webkit-transition: background 0.1s linear
  ;
  -moz-transition: background 0.1s linear
  ;
  transition: background 0.1s linear
  ;
}
/*--- Above ---*/
.ui.pointing.label:before {
  background-color: #E8E8E8;
}
.ui.pointing.label,
.ui.pointing.above.label {
  margin-top: 1em;
}
.ui.pointing.label:before,
.ui.pointing.above.label:before {
  margin-left: -0.3em;
  top: -0.3em;
  left: 50%;
}
/*--- Below ---*/
.ui.pointing.below.label {
  margin-top: 0em;
  margin-bottom: 1em;
}
.ui.pointing.below.label:before {
  margin-left: -0.3em;
  top: auto;
  right: auto;
  bottom: -0.3em;
  left: 50%;
}
/*--- Left ---*/
.ui.pointing.left.label {
  margin-top: 0em;
  margin-left: 1em;
}
.ui.pointing.left.label:before {
  margin-top: -0.3em;
  bottom: auto;
  right: auto;
  top: 50%;
  left: 0em;
}
/*--- Right ---*/
.ui.pointing.right.label {
  margin-top: 0em;
  margin-right: 1em;
}
.ui.pointing.right.label:before {
  margin-top: -0.3em;
  right: -0.3em;
  top: 50%;
  bottom: auto;
  left: auto;
}
/*------------------
   Floating Label
-------------------*/
.ui.floating.label {
  position: absolute;
  z-index: 100;
  top: -1em;
  left: 100%;
  margin: 0em 0em 0em -1.5em !important;
}
/*-------------------
        Sizes
--------------------*/
.ui.small.labels .label,
.ui.small.label {
  font-size: 0.75rem;
}
.ui.label {
  font-size: 0.8125rem;
}
.ui.large.labels .label,
.ui.large.label {
  font-size: 0.875rem;
}
.ui.huge.labels .label,
.ui.huge.label {
  font-size: 1rem;
}

/*
 * # Semantic - Loader
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Loader
*******************************/
/* Standard Size */
.ui.loader {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0px;
  z-index: 1000;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.ui.dimmer .loader {
  display: block;
}
/*******************************
             Types
*******************************/
/*-------------------
        Text
--------------------*/
.ui.text.loader {
  width: auto !important;
  height: auto !important;
  text-align: center;
  font-style: normal;
}
.ui.mini.text.loader {
  min-width: 16px;
  padding-top: 2em;
  font-size: 0.875em;
}
.ui.small.text.loader {
  min-width: 24px;
  padding-top: 2.5em;
  font-size: 0.875em;
}
.ui.text.loader {
  min-width: 32px;
  font-size: 1em;
  padding-top: 3em;
}
.ui.large.text.loader {
  min-width: 64px;
  padding-top: 5em;
  font-size: 1.2em;
}
/*******************************
            States
*******************************/
.ui.loader.active,
.ui.loader.visible {
  display: block;
}
.ui.loader.disabled,
.ui.loader.hidden {
  display: none;
}
/*******************************
            Variations
*******************************/
/*-------------------
       Inverted
--------------------*/
.ui.dimmer .ui.text.loader,
.ui.inverted.text.loader {
  color: rgba(255, 255, 255, 0.8);
}
.ui.inverted.dimmer .ui.text.loader {
  color: rgba(0, 0, 0, 0.8);
}
/* Tiny Size */
.ui.dimmer .mini.ui.loader,
.ui.inverted .mini.ui.loader {
  background-image: url(../images/loader-mini-inverted.gif);
}
/* Small Size */
.ui.dimmer .small.ui.loader,
.ui.inverted .small.ui.loader {
  background-image: url(../images/loader-small-inverted.gif);
}
/* Standard Size */
.ui.dimmer .ui.loader,
.ui.inverted.loader {
  background-image: url(../images/loader-medium-inverted.gif);
}
/* Large Size */
.ui.dimmer .large.ui.loader,
.ui.inverted .large.ui.loader {
  background-image: url(../images/loader-large-inverted.gif);
}
/*-------------------
        Sizes
--------------------*/
/* Tiny Size */
.ui.inverted.dimmer .ui.mini.loader,
.ui.mini.loader {
  width: 16px;
  height: 16px;
  background-image: url(../images/loader-mini.gif);
}
/* Small Size */
.ui.inverted.dimmer .ui.small.loader,
.ui.small.loader {
  width: 24px;
  height: 24px;
  background-image: url(../images/loader-small.gif);
}
.ui.inverted.dimmer .ui.loader,
.ui.loader {
  width: 32px;
  height: 32px;
  background: url(../images/loader-medium.gif) no-repeat;
  background-position: 48% 0px;
}
/* Large Size */
.ui.inverted.dimmer .ui.loader.large,
.ui.loader.large {
  width: 64px;
  height: 64px;
  background-image: url(../images/loader-large.gif);
}
/*-------------------
       Inline
--------------------*/
.ui.inline.loader {
  position: static;
  vertical-align: middle;
  margin: 0em;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  transform: none;
}
.ui.inline.loader.active,
.ui.inline.loader.visible {
  display: inline-block;
}

/*
 * # Semantic - Progress Bar
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
         Progress Bar
*******************************/
.ui.progress {
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 35px;
  background-color: #FAFAFA;
  padding: 5px;
  border-radius: 0.3125em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.progress .bar {
  display: inline-block;
  height: 100%;
  background-color: #CCCCCC;
  border-radius: 3px;
  -webkit-transition: width 1s ease-in-out, background-color 1s ease-out;
  -moz-transition: width 1s ease-in-out, background-color 1s ease-out;
  transition: width 1s ease-in-out, background-color 1s ease-out;
}
/*******************************
            States
*******************************/
/*--------------
  Successful
---------------*/
.ui.successful.progress .bar {
  background-color: #73E064 !important;
}
.ui.successful.progress .bar,
.ui.successful.progress .bar::after {
  -webkit-animation: none !important;
  -moz-animation: none !important;
  animation: none !important;
}
.ui.warning.progress .bar {
  background-color: #E96633 !important;
}
.ui.warning.progress .bar,
.ui.warning.progress .bar::after {
  -webkit-animation: none !important;
  -moz-animation: none !important;
  animation: none !important;
}
/*--------------
     Failed
---------------*/
.ui.failed.progress .bar {
  background-color: #DF9BA4 !important;
}
.ui.failed.progress .bar,
.ui.failed.progress .bar::after {
  -webkit-animation: none !important;
  -moz-animation: none !important;
  animation: none !important;
}
/*--------------
     Active
---------------*/
.ui.active.progress .bar {
  position: relative;
}
.ui.active.progress .bar::after {
  content: '';
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #FFFFFF;
  border-radius: 3px;
  -webkit-animation: progress-active 2s ease-out infinite;
  -moz-animation: progress-active 2s ease-out infinite;
  animation: progress-active 2s ease-out infinite;
}
@-webkit-keyframes progress-active {
  0% {
    opacity: 0;
    width: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    width: 95%;
  }
}
@-moz-keyframes progress-active {
  0% {
    opacity: 0;
    width: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    width: 100%;
  }
}
@keyframes progress-active {
  0% {
    opacity: 0;
    width: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    width: 100%;
  }
}
/*--------------
    Disabled
---------------*/
.ui.disabled.progress {
  opacity: 0.35;
}
.ui.disabled.progress .bar,
.ui.disabled.progress .bar::after {
  -webkit-animation: none !important;
  -moz-animation: none !important;
  animation: none !important;
}
/*******************************
           Variations
*******************************/
/*--------------
    Attached
---------------*/
/* bottom attached */
.ui.progress.attached {
  position: relative;
  border: none;
}
.ui.progress.attached,
.ui.progress.attached .bar {
  display: block;
  height: 3px;
  padding: 0px;
  overflow: hidden;
  border-radius: 0em 0em 0.3125em 0.3125em;
}
.ui.progress.attached .bar {
  border-radius: 0em;
}
/* top attached */
.ui.progress.top.attached,
.ui.progress.top.attached .bar {
  top: -2px;
  border-radius: 0.3125em 0.3125em 0em 0em;
}
.ui.progress.top.attached .bar {
  border-radius: 0em;
}
/*--------------
     Colors
---------------*/
.ui.blue.progress .bar {
  background-color: #6ECFF5;
}
.ui.black.progress .bar {
  background-color: #5C6166;
}
.ui.green.progress .bar {
  background-color: #A1CF64;
}
.ui.red.progress .bar {
  background-color: #EF4D6D;
}
.ui.purple.progress .bar {
  background-color: #564F8A;
}
.ui.teal.progress .bar {
  background-color: #00B5AD;
}
/*--------------
    Striped
---------------*/
.ui.progress.striped .bar {
  -webkit-background-size: 30px 30px;
  background-size: 30px 30px;
  background-image: -webkit-gradient(linear, left top, right bottom, color-stop(0.25, rgba(255, 255, 255, 0.15)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.15)), color-stop(0.75, rgba(255, 255, 255, 0.15)), color-stop(0.75, transparent), to(transparent));
  background-image: -webkit-linear-gradient(135deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -moz-linear-gradient(135deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -webkit-linear-gradient(315deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -moz-linear-gradient(315deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.ui.progress.active.striped .bar:after {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  animation: none;
}
.ui.progress.active.striped .bar {
  -webkit-animation: progress-striped 3s linear infinite;
  -moz-animation: progress-striped 3s linear infinite;
  animation: progress-striped 3s linear infinite;
}
@-webkit-keyframes progress-striped {
  0% {
    background-position: 0px 0;
  }
  100% {
    background-position: 60px 0;
  }
}
@-moz-keyframes progress-striped {
  0% {
    background-position: 0px 0;
  }
  100% {
    background-position: 60px 0;
  }
}
@keyframes progress-striped {
  0% {
    background-position: 0px 0;
  }
  100% {
    background-position: 60px 0;
  }
}
/*--------------
     Sizes
---------------*/
.ui.small.progress .bar {
  height: 14px;
}

/*
 * # Semantic - Reveal
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Reveal
*******************************/
.ui.reveal {
  display: inline-block;
  position: relative !important;
  z-index: 2 !important;
  font-size: 0em !important;
}
.ui.reveal > .content {
  font-size: 1rem !important;
}
.ui.reveal > .visible.content {
  -webkit-transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
  -moz-transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
}
.ui.reveal > .visible.content {
  position: absolute !important;
  top: 0em !important;
  left: 0em !important;
  z-index: 4 !important;
  -webkit-transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
  -moz-transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
}
.ui.reveal > .hidden.content {
  position: relative !important;
  z-index: 3 !important;
}
/*------------------
   Loose Coupling
-------------------*/
.ui.reveal.button {
  overflow: hidden;
}
/*******************************
              Types
*******************************/
/*--------------
      Slide
---------------*/
.ui.slide.reveal {
  position: relative !important;
  display: block;
  overflow: hidden !important;
  white-space: nowrap;
}
.ui.slide.reveal > .content {
  display: block;
  float: left;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0em;
  -webkit-transition: top 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s, left 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s, right 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s, bottom 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
  -moz-transition: top 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s, left 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s, right 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s, bottom 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
  transition: top 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s, left 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s, right 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s, bottom 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
}
.ui.slide.reveal > .visible.content {
  position: relative !important;
}
.ui.slide.reveal > .hidden.content {
  position: absolute !important;
  left: 100% !important;
  width: 100% !important;
}
.ui.slide.reveal:hover > .visible.content,
.ui.slide.reveal:focus > .visible.content {
  left: -100% !important;
}
.ui.slide.reveal:hover > .hidden.content,
.ui.slide.reveal:focus > .hidden.content {
  left: 0% !important;
}
.ui.right.slide.reveal > .visible.content {
  left: 0%;
}
.ui.right.slide.reveal > .hidden.content {
  left: auto !important;
  right: 100% !important;
}
.ui.right.slide.reveal:hover > .visible.content,
.ui.right.slide.reveal:focus > .visible.content {
  left: 100% !important;
  right: auto !important;
}
.ui.right.slide.reveal:hover > .hidden.content,
.ui.right.slide.reveal:focus > .hidden.content {
  left: auto !important;
  right: 0% !important;
}
.ui.up.slide.reveal > .visible.content {
  top: 0% !important;
  left: 0% !important;
  right: auto !important;
  bottom: auto !important;
}
.ui.up.slide.reveal > .hidden.content {
  top: 100% !important;
  left: 0% !important;
  right: auto !important;
  bottom: auto !important;
}
.ui.slide.up.reveal:hover > .visible.content,
.ui.slide.up.reveal:focus > .visible.content {
  top: -100% !important;
  left: 0% !important;
}
.ui.slide.up.reveal:hover > .hidden.content,
.ui.slide.up.reveal:focus > .hidden.content {
  top: 0% !important;
  left: 0% !important;
}
.ui.down.slide.reveal > .visible.content {
  top: auto !important;
  right: auto !important;
  bottom: auto !important;
  bottom: 0% !important;
}
.ui.down.slide.reveal > .hidden.content {
  top: auto !important;
  right: auto !important;
  bottom: 100% !important;
  left: 0% !important;
}
.ui.slide.down.reveal:hover > .visible.content,
.ui.slide.down.reveal:focus > .visible.content {
  left: 0% !important;
  bottom: -100% !important;
}
.ui.slide.down.reveal:hover > .hidden.content,
.ui.slide.down.reveal:focus > .hidden.content {
  left: 0% !important;
  bottom: 0% !important;
}
/*--------------
      Fade
---------------*/
.ui.fade.reveal > .hidden.content {
  -webkit-transition: opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
  -moz-transition: opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
  transition: opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1) 0.15s;
}
.ui.fade.reveal > .hidden.content {
  z-index: 5 !important;
  opacity: 0;
}
.ui.fade.reveal:hover > .hidden.content {
  opacity: 1;
}
/*--------------
      Move
---------------*/
.ui.move.reveal > .visible.content,
.ui.move.left.reveal > .visible.content {
  left: auto !important;
  top: auto !important;
  bottom: auto !important;
  right: 0% !important;
}
.ui.move.reveal:hover > .visible.content,
.ui.move.left.reveal:hover > .visible.content,
.ui.move.reveal:focus > .visible.content,
.ui.move.left.reveal:focus > .visible.content {
  right: 100% !important;
}
.ui.move.right.reveal > .visible.content {
  right: auto !important;
  top: auto !important;
  bottom: auto !important;
  left: 0% !important;
}
.ui.move.right.reveal:hover > .visible.content,
.ui.move.right.reveal:focus > .visible.content {
  left: 100% !important;
}
.ui.move.up.reveal > .visible.content {
  right: auto !important;
  left: auto !important;
  top: auto !important;
  bottom: 0% !important;
}
.ui.move.up.reveal:hover > .visible.content,
.ui.move.up.reveal:focus > .visible.content {
  bottom: 100% !important;
}
.ui.move.down.reveal > .visible.content {
  right: auto !important;
  left: auto !important;
  top: 0% !important;
  bottom: auto !important;
}
.ui.move.down.reveal:hover > .visible.content,
.ui.move.down.reveal:focus > .visible.content {
  top: 100% !important;
}
/*--------------
     Rotate
---------------*/
.ui.rotate.reveal > .visible.content {
  -webkit-transition-duration: 0.8s;
  -moz-transition-duration: 0.8s;
  transition-duration: 0.8s;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
}
.ui.rotate.reveal > .visible.content,
.ui.rotate.right.reveal > .visible.content {
  -webkit-transform-origin: bottom right;
  -moz-transform-origin: bottom right;
  -ms-transform-origin: bottom right;
  transform-origin: bottom right;
}
.ui.rotate.reveal:hover > .visible.content,
.ui.rotate.right.reveal:hover > .visible.content,
.ui.rotate.reveal:focus > .visible.content,
.ui.rotate.right.reveal:focus > .visible.content {
  -webkit-transform: rotate(110deg);
  -moz-transform: rotate(110deg);
  -ms-transform: rotate(110deg);
  transform: rotate(110deg);
}
.ui.rotate.left.reveal > .visible.content {
  -webkit-transform-origin: bottom left;
  -moz-transform-origin: bottom left;
  -ms-transform-origin: bottom left;
  transform-origin: bottom left;
}
.ui.rotate.left.reveal:hover > .visible.content,
.ui.rotate.left.reveal:focus > .visible.content {
  -webkit-transform: rotate(-110deg);
  -moz-transform: rotate(-110deg);
  -ms-transform: rotate(-110deg);
  transform: rotate(-110deg);
}
/*******************************
              States
*******************************/
.ui.disabled.reveal {
  opacity: 1 !important;
}
.ui.disabled.reveal > .content {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  transition: none !important;
}
.ui.disabled.reveal:hover > .visible.content,
.ui.disabled.reveal:focus > .visible.content {
  position: static !important;
  display: block !important;
  opacity: 1 !important;
  top: 0 !important;
  left: 0 !important;
  right: auto !important;
  bottom: auto !important;
  -webkit-transform: none !important;
  -moz-transform: none !important;
  -ms-transform: none !important;
  transform: none !important;
}
.ui.disabled.reveal:hover > .hidden.content,
.ui.disabled.reveal:focus > .hidden.content {
  display: none !important;
}
/*******************************
           Variations
*******************************/
/*--------------
     Masked
---------------*/
.ui.masked.reveal {
  overflow: hidden;
}
/*--------------
     Instant
---------------*/
.ui.instant.reveal > .content {
  -webkit-transition-delay: 0s !important;
  -moz-transition-delay: 0s !important;
  transition-delay: 0s !important;
}

/*
 * # Semantic - Segment
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Segment
*******************************/
.ui.segment {
  position: relative;
  background-color: #FFFFFF;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  margin: 1em 0em;
  padding: 1em;
  border-radius: 5px 5px 5px 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.segment:first-child {
  margin-top: 0em;
}
.ui.segment:last-child {
  margin-bottom: 0em;
}
.ui.segment:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.ui.vertical.segment {
  margin: 0em;
  padding-left: 0em;
  padding-right: 0em;
  background-color: transparent;
  border-radius: 0px;
  -webkit-box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
}
.ui.vertical.segment:first-child {
  padding-top: 0em;
}
.ui.horizontal.segment {
  margin: 0em;
  padding-top: 0em;
  padding-bottom: 0em;
  background-color: transparent;
  border-radius: 0px;
  -webkit-box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.1);
}
.ui.horizontal.segment:first-child {
  padding-left: 0em;
}
/*-------------------
    Loose Coupling
--------------------*/
.ui.pointing.menu ~ .ui.attached.segment {
  top: 1px;
}
.ui.page.grid.segment .ui.grid .ui.segment.column {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.ui.grid.segment,
.ui.grid .ui.segment.row,
.ui.grid .ui.segment.column {
  border-radius: 0em;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: none;
}
/* No padding on edge content */
.ui.segment > :first-child {
  margin-top: 0em;
}
.ui.segment > :last-child {
  margin-bottom: 0em;
}
/*******************************
             Types
*******************************/
/*-------------------
        Piled
--------------------*/
.ui.piled.segment {
  margin: 2em 0em;
  -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
  -ms-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
  -o-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
}
.ui.piled.segment:first-child {
  margin-top: 0em;
}
.ui.piled.segment:last-child {
  margin-bottom: 0em;
}
.ui.piled.segment:after,
.ui.piled.segment:before {
  background-color: #FFFFFF;
  visibility: visible;
  content: "";
  display: block;
  height: 100%;
  left: -1px;
  position: absolute;
  width: 100%;
  -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
}
.ui.piled.segment:after {
  -webkit-transform: rotate(1.2deg);
  -moz-transform: rotate(1.2deg);
  -ms-transform: rotate(1.2deg);
  transform: rotate(1.2deg);
  top: 0;
  z-index: -1;
}
.ui.piled.segment:before {
  -webkit-transform: rotate(-1.2deg);
  -moz-transform: rotate(-1.2deg);
  -ms-transform: rotate(-1.2deg);
  transform: rotate(-1.2deg);
  top: 0;
  z-index: -2;
}
/*-------------------
       Stacked
--------------------*/
.ui.stacked.segment {
  padding-bottom: 1.7em;
}
.ui.stacked.segment:after,
.ui.stacked.segment:before {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.02);
  width: 100%;
  height: 5px;
  visibility: visible;
}
.ui.stacked.segment:before {
  bottom: 0px;
}
/* Inverted */
.ui.stacked.inverted.segment:after,
.ui.stacked.inverted.segment:before {
  background-color: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.35);
}
/*-------------------
       Circular
--------------------*/
.ui.circular.segment {
  display: table-cell;
  padding: 2em;
  text-align: center;
  vertical-align: middle;
  border-radius: 500em;
}
/*-------------------
       Raised
--------------------*/
.ui.raised.segment {
  -webkit-box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
}
/*******************************
            States
*******************************/
.ui.disabled.segment {
  opacity: 0.8;
  color: #DDDDDD;
}
/*******************************
           Variations
*******************************/
/*-------------------
       Basic
--------------------*/
.ui.basic.segment {
  position: relative;
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0px;
}
.ui.basic.segment:first-child {
  padding-top: 0em;
}
.ui.basic.segment:last-child {
  padding-bottom: 0em;
}
/*-------------------
       Fittted
--------------------*/
.ui.fitted.segment {
  padding: 0em;
}
/*-------------------
       Colors
--------------------*/
.ui.blue.segment {
  border-top: 0.2em solid #6ECFF5;
}
.ui.green.segment {
  border-top: 0.2em solid #A1CF64;
}
.ui.red.segment {
  border-top: 0.2em solid #D95C5C;
}
.ui.orange.segment {
  border-top: 0.2em solid #F05940;
}
.ui.purple.segment {
  border-top: 0.2em solid #564F8A;
}
.ui.teal.segment {
  border-top: 0.2em solid #00B5AD;
}
/*-------------------
   Inverted Colors
--------------------*/
.ui.inverted.black.segment {
  background-color: #5C6166 !important;
  color: #FFFFFF !important;
}
.ui.inverted.blue.segment {
  background-color: #6ECFF5 !important;
  color: #FFFFFF !important;
}
.ui.inverted.green.segment {
  background-color: #A1CF64 !important;
  color: #FFFFFF !important;
}
.ui.inverted.red.segment {
  background-color: #D95C5C !important;
  color: #FFFFFF !important;
}
.ui.inverted.orange.segment {
  background-color: #F05940 !important;
  color: #FFFFFF !important;
}
.ui.inverted.purple.segment {
  background-color: #564F8A !important;
  color: #FFFFFF !important;
}
.ui.inverted.teal.segment {
  background-color: #00B5AD !important;
  color: #FFFFFF !important;
}
/*-------------------
       Aligned
--------------------*/
.ui.left.aligned.segment {
  text-align: left;
}
.ui.right.aligned.segment {
  text-align: right;
}
.ui.center.aligned.segment {
  text-align: center;
}
.ui.justified.segment {
  text-align: justify;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
/*-------------------
       Floated
--------------------*/
.ui.floated.segment,
.ui.left.floated.segment {
  float: left;
}
.ui.right.floated.segment {
  float: right;
}
/*-------------------
      Inverted
--------------------*/
.ui.inverted.segment {
  border: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.inverted.segment .segment {
  color: rgba(0, 0, 0, 0.7);
}
.ui.inverted.segment .inverted.segment {
  color: #FFFFFF;
}
.ui.inverted.segment,
.ui.primary.inverted.segment {
  background-color: #222222;
  color: #FFFFFF;
}
/*-------------------
     Ordinality
--------------------*/
.ui.primary.segment {
  background-color: #FFFFFF;
  color: #555555;
}
.ui.secondary.segment {
  background-color: #FAF9FA;
  color: #777777;
}
.ui.tertiary.segment {
  background-color: #EBEBEB;
  color: #B0B0B0;
}
.ui.secondary.inverted.segment {
  background-color: #555555;
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(255, 255, 255, 0.3)), to(rgba(255, 255, 255, 0.3)));
  background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%);
  background-image: -moz-linear-gradient(rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.3)), to(rgba(255, 255, 255, 0.3)));
  background-image: linear-gradient(rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%);
  color: #FAFAFA;
}
.ui.tertiary.inverted.segment {
  background-color: #555555;
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(255, 255, 255, 0.6)), to(rgba(255, 255, 255, 0.6)));
  background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%);
  background-image: -moz-linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.6)), to(rgba(255, 255, 255, 0.6)));
  background-image: linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%);
  color: #EEEEEE;
}
/*-------------------
      Attached
--------------------*/
.ui.segment.attached {
  top: -1px;
  bottom: -1px;
  border-radius: 0px;
  margin: 0em;
  -webkit-box-shadow: 0px 0px 0px 1px #DDDDDD;
  box-shadow: 0px 0px 0px 1px #DDDDDD;
}
.ui.top.attached.segment {
  top: 0px;
  bottom: -1px;
  margin-top: 1em;
  margin-bottom: 0em;
  border-radius: 5px 5px 0px 0px;
}
.ui.segment.top.attached:first-child {
  margin-top: 0em;
}
.ui.segment.bottom.attached {
  top: -1px;
  bottom: 0px;
  margin-top: 0em;
  margin-bottom: 1em;
  border-radius: 0px 0px 5px 5px;
}
.ui.segment.bottom.attached:last-child {
  margin-bottom: 0em;
}

/*
 * # Semantic - Steps
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Step
*******************************/
.ui.step,
.ui.steps .step {
  display: inline-block;
  position: relative;
  padding: 1em 2em 1em 3em;
  vertical-align: top;
  background-color: #FFFFFF;
  color: #888888;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.step:after,
.ui.steps .step:after {
  position: absolute;
  z-index: 2;
  content: '';
  top: 0.42em;
  right: -1em;
  border: medium none;
  background-color: #FFFFFF;
  width: 2.2em;
  height: 2.2em;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-box-shadow: -1px -1px 0 0 rgba(0, 0, 0, 0.15) inset;
  box-shadow: -1px -1px 0 0 rgba(0, 0, 0, 0.15) inset;
}
.ui.step,
.ui.steps .step,
.ui.steps .step:after {
  -webkit-transition: background-color 0.1s ease, opacity 0.1s ease, color 0.1s ease, -webkit-box-shadow 0.1s ease;
  -moz-transition: background-color 0.1s ease, opacity 0.1s ease, color 0.1s ease, box-shadow 0.1s ease;
  transition: background-color 0.1s ease, opacity 0.1s ease, color 0.1s ease, box-shadow 0.1s ease;
}
/*******************************
            Types
*******************************/
/* Vertical */
.ui.vertical.steps {
  overflow: visible;
}
.ui.vertical.steps .step {
  display: block;
  border-radius: 0em;
  padding: 1em 2em;
}
.ui.vertical.steps .step:first-child {
  padding: 1em 2em;
  border-radius: 0em;
  border-top-left-radius: 0.3125rem;
  border-top-right-radius: 0.3125rem;
}
.ui.vertical.steps .active.step:first-child {
  border-top-right-radius: 0rem;
}
.ui.vertical.steps .step:last-child {
  border-radius: 0em;
  border-bottom-left-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
}
.ui.vertical.steps .active.step:last-child {
  border-bottom-right-radius: 0rem;
}
/* Arrow */
.ui.vertical.steps .step:after {
  display: none;
}
/* Active Arrow */
.ui.vertical.steps .active.step:after {
  display: block;
}
/* Two Line */
.ui.vertical.steps .two.line.step {
  line-height: 1.3;
}
.ui.vertical.steps .two.line.active.step:after {
  position: absolute;
  z-index: 2;
  content: '';
  top: 0em;
  right: -1.45em;
  background-color: transparent;
  border-bottom: 2.35em solid transparent;
  border-left: 1.55em solid #555555;
  border-top: 2.35em solid transparent;
  width: 0em;
  height: 0em;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  transform: none;
}
/*******************************
            Group
*******************************/
.ui.steps {
  cursor: pointer;
  display: inline-block;
  font-size: 0em;
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  line-height: 1;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.3125rem;
}
.ui.steps .step:first-child {
  padding-left: 1.35em;
  border-radius: 0.3125em 0em 0em 0.3125em;
}
.ui.steps .step:last-child {
  border-radius: 0em 0.3125em 0.3125em 0em;
}
.ui.steps .step:only-child {
  border-radius: 0.3125em;
}
.ui.steps .step:last-child {
  margin-right: 0em;
}
.ui.steps .step:last-child:after {
  display: none;
}
/*******************************
             States
*******************************/
/* Hover */
.ui.step:hover,
.ui.step.hover {
  background-color: #F7F7F7;
  color: rgba(0, 0, 0, 0.8);
}
.ui.steps .step.hover:after,
.ui.steps .step:hover:after,
.ui.step:hover,
.ui.step.hover::after {
  background-color: #F7F7F7;
}
/* Hover */
.ui.steps .step.down,
.ui.steps .step:active,
.ui.step.down,
.ui.step:active {
  background-color: #F0F0F0;
}
.ui.steps .step.down:after,
.ui.steps .step:active:after,
.ui.steps.down::after,
.ui.steps:active::after {
  background-color: #F0F0F0;
}
/* Active */
.ui.steps .step.active,
.ui.active.step {
  cursor: auto;
  background-color: #555555;
  color: #FFFFFF;
  font-weight: bold;
}
.ui.steps .step.active:after,
.ui.active.steps:after {
  background-color: #555555;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/* Disabled */
.ui.steps .disabled.step,
.ui.disabled.step {
  cursor: auto;
  background-color: #FFFFFF;
  color: #CBCBCB;
}
.ui.steps .disabled.step:after,
.ui.disabled.step:after {
  background-color: #FFFFFF;
}
/*******************************
           Variations
*******************************/
/* Attached */
.attached.ui.steps {
  margin: 0em;
  border-radius: 0.3125em 0.3125em 0em 0em;
}
.attached.ui.steps .step:first-child {
  border-radius: 0.3125em 0em 0em 0em;
}
.attached.ui.steps .step:last-child {
  border-radius: 0em 0.3125em 0em 0em;
}
/* Bottom Side */
.bottom.attached.ui.steps {
  margin-top: -1px;
  border-radius: 0em 0em 0.3125em 0.3125em;
}
.bottom.attached.ui.steps .step:first-child {
  border-radius: 0em 0em 0em 0.3125em;
}
.bottom.attached.ui.steps .step:last-child {
  border-radius: 0em 0em 0.3125em 0em;
}
/* Evenly divided  */
.ui.one.steps,
.ui.two.steps,
.ui.three.steps,
.ui.four.steps,
.ui.five.steps,
.ui.six.steps,
.ui.seven.steps,
.ui.eight.steps {
  display: block;
}
.ui.one.steps > .step {
  width: 100%;
}
.ui.two.steps > .step {
  width: 50%;
}
.ui.three.steps > .step {
  width: 33.333%;
}
.ui.four.steps > .step {
  width: 25%;
}
.ui.five.steps > .step {
  width: 20%;
}
.ui.six.steps > .step {
  width: 16.666%;
}
.ui.seven.steps > .step {
  width: 14.285%;
}
.ui.eight.steps > .step {
  width: 12.500%;
}
/*******************************
             Sizes
*******************************/
.ui.small.step,
.ui.small.steps .step {
  font-size: 0.8rem;
}
.ui.step,
.ui.steps .step {
  font-size: 1rem;
}
.ui.large.step,
.ui.large.steps .step {
  font-size: 1.25rem;
}

/*
 * # Semantic - Accordion
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Accordion
*******************************/
.ui.accordion,
.ui.accordion .accordion {
  width: 600px;
  max-width: 100%;
  font-size: 1rem;
  border-radius: 0.3125em;
  background-color: #FFFFFF;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
}
.ui.accordion .title,
.ui.accordion .accordion .title {
  cursor: pointer;
  margin: 0em;
  padding: 0.75em 1em;
  color: rgba(0, 0, 0, 0.6);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-transition: background-color 0.2s ease-out;
  -moz-transition: background-color 0.2s ease-out;
  transition: background-color 0.2s ease-out;
}
.ui.accordion .title:first-child,
.ui.accordion .accordion .title:first-child {
  border-top: none;
}
/* Content */
.ui.accordion .content,
.ui.accordion .accordion .content {
  display: none;
  margin: 0em;
  padding: 1.3em 1em;
}
/* Arrow */
.ui.accordion .title .dropdown.icon,
.ui.accordion .accordion .title .dropdown.icon {
  display: inline-block;
  float: none;
  margin: 0em 0.5em 0em 0em;
  -webkit-transition: -webkit-transform 0.2s ease, opacity 0.2s ease;
  -moz-transition: -moz-transform 0.2s ease, opacity 0.2s ease;
  transition: transform 0.2s ease,
    opacity 0.2s ease
  ;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
}
.ui.accordion .title .dropdown.icon:before,
.ui.accordion .accordion .title .dropdown.icon:before {
  content: '\\f0da' /*rtl:'\f0d9'*/;
}
/*--------------
 Loose Coupling
---------------*/
.ui.basic.accordion.menu {
  background-color: #FFFFFF;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
}
.ui.basic.accordion.menu .title,
.ui.basic.accordion.menu .content {
  padding: 0em;
}
/*******************************
            Types
*******************************/
/*--------------
     Basic
---------------*/
.ui.basic.accordion {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.basic.accordion .title,
.ui.basic.accordion .accordion .title {
  background-color: transparent;
  border-top: none;
  padding-left: 0em;
  padding-right: 0em;
}
.ui.basic.accordion .content,
.ui.basic.accordion .accordion .content {
  padding: 0.5em 0em;
}
.ui.basic.accordion .active.title,
.ui.basic.accordion .accordion .active.title {
  background-color: transparent;
}
/*******************************
            States
*******************************/
/*--------------
      Hover
---------------*/
.ui.accordion .title:hover,
.ui.accordion .active.title,
.ui.accordion .accordion .title:hover,
.ui.accordion .accordion .active.title {
  color: rgba(0, 0, 0, 0.8);
}
/*--------------
     Active
---------------*/
.ui.accordion .active.title,
.ui.accordion .accordion .active.title {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
}
.ui.accordion .active.title .dropdown.icon,
.ui.accordion .accordion .active.title .dropdown.icon {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.ui.accordion .active.content,
.ui.accordion .accordion .active.content {
  display: block;
}
/*******************************
           Variations
*******************************/
/*--------------
     Fluid
---------------*/
.ui.fluid.accordion,
.ui.fluid.accordion .accordion {
  width: 100%;
}

/*
 * # Semantic - Chat Room
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
           Chat Room
*******************************/
.ui.chatroom {
  background-color: #F8F8F8;
  width: 330px;
  height: 370px;
  padding: 0px;
}
.ui.chatroom .room {
  position: relative;
  background-color: #FFFFFF;
  overflow: hidden;
  height: 286px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-bottom: none;
}
.ui.chatroom .room .loader {
  display: none;
  margin: -25px 0px 0px -25px;
}
/* Chat Room Actions */
.ui.chatroom .actions {
  overflow: hidden;
  background-color: #EEEEEE;
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0px 0px;
}
.ui.chatroom .actions .button {
  float: right;
  margin-left: 3px;
}
/* Online User Count */
.ui.chatroom .actions .message {
  float: left;
  margin-left: 6px;
  font-size: 11px;
  color: #AAAAAA;
  text-shadow: 0px -1px 0px rgba(255, 255, 255, 0.8);
  line-height: 28px;
}
.ui.chatroom .actions .message .loader {
  display: inline-block;
  margin-right: 8px;
}
/* Chat Room Text Log */
.ui.chatroom .log {
  float: left;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
.ui.chatroom .log .message {
  padding: 3px 0px;
  border-top: 1px dotted #DADADA;
}
.ui.chatroom .log .message:first-child {
  border-top: none;
}
/* status event */
.ui.chatroom .status {
  padding: 5px 0px;
  color: #AAAAAA;
  font-size: 12px;
  font-style: italic;
  line-height: 1.33;
  border-top: 1px dotted #DADADA;
}
.ui.chatroom .log .status:first-child {
  border-top: none;
}
.ui.chatroom .log .flag {
  float: left;
}
.ui.chatroom .log p {
  margin-left: 0px;
}
.ui.chatroom .log .author {
  font-weight: bold;
  -webkit-transition: color 0.3s ease-out;
  -moz-transition: color 0.3s ease-out;
  transition: color 0.3s ease-out;
}
.ui.chatroom .log a.author:hover {
  opacity: 0.8;
}
.ui.chatroom .log .message.admin p {
  font-weight: bold;
  margin: 1px 0px 0px 23px;
}
.ui.chatroom .log .divider {
  margin: -1px 0px;
  font-size: 11px;
  padding: 10px 0px;
  border-top: 1px solid #F8F8F8;
  border-bottom: 1px solid #F8F8F8;
}
.ui.chatroom .log .divider .rule {
  top: 50%;
  width: 15%;
}
.ui.chatroom .log .divider .label {
  color: #777777;
  margin: 0px;
}
/* Chat Room User List */
.ui.chatroom .room .list {
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
  float: left;
  background-color: #EEEEEE;
  border-left: 1px solid #DDDDDD;
}
.ui.chatroom .room .list .user {
  display: table;
  padding: 3px 7px;
  border-bottom: 1px solid #DDDDDD;
}
.ui.chatroom .room .list .user:hover {
  background-color: #F8F8F8;
}
.ui.chatroom .room .list .image {
  display: table-cell;
  vertical-align: middle;
  width: 20px;
}
.ui.chatroom .room .list .image img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.ui.chatroom .room .list p {
  display: table-cell;
  vertical-align: middle;
  padding-left: 7px;
  padding-right: 14px;
  font-size: 11px;
  line-height: 1.2;
  font-weight: bold;
}
.ui.chatroom .room .list a:hover {
  opacity: 0.8;
}
/* User List Loading */
.ui.chatroom.loading .loader {
  display: block;
}
/* Chat Room Talk Input */
.ui.chatroom .talk {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 0px 0px;
  background-color: #EEEEEE;
  border-radius: 0px 0px 5px 5px;
}
.ui.chatroom .talk .avatar,
.ui.chatroom .talk input,
.ui.chatroom .talk .button {
  float: left;
}
.ui.chatroom .talk .avatar img {
  display: block;
  width: 30px;
  height: 30px;
  margin-right: 4px;
  border-radius: 500rem;
}
.ui.chatroom .talk input {
  border: 1px solid #CCCCCC;
  margin: 0px;
  width: 196px;
  height: 14px;
  padding: 8px 5px;
  font-size: 12px;
  color: #555555;
}
.ui.chatroom .talk input.focus {
  border: 1px solid #AAAAAA;
}
.ui.chatroom .send {
  width: 80px;
  height: 32px;
  margin-left: -1px;
  padding: 4px 12px;
  font-size: 12px;
  line-height: 23px;
  -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  border-radius: 0 5px 5px 0;
}
.ui.chatroom .talk .log-in.button {
  display: block;
  float: none;
  margin-top: -6px;
  height: 22px;
  border-radius: 0px 0px 4px 4px;
}
.ui.chatroom .talk .log-in.button i {
  vertical-align: text-top;
}
/* Quirky Flags */
.ui.chatroom .log .team.flag {
  width: 18px;
}
/* Chat room Loaded */
.ui.chatroom.loading .loader {
  display: block;
}
/* Standard Size */
.ui.chatroom {
  width: 330px;
  height: 370px;
}
.ui.chatroom .room .container {
  width: 3000px;
}
.ui.chatroom .log {
  width: 314px;
  height: 278px;
  padding: 4px 7px;
}
.ui.chatroom .room .list {
  width: 124px;
  height: 278px;
  padding: 4px 0px;
}
.ui.chatroom .room .list .user {
  width: 110px;
}
.ui.chatroom .talk {
  height: 40px;
}

/*
 * # Semantic - Checkbox
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
           Checkbox
*******************************/
/*--------------
    Standard
---------------*/
/*--- Content ---*/
.ui.checkbox {
  position: relative;
  display: inline-block;
  min-width: 1em;
  min-height: 1.25em;
  line-height: 1em;
  outline: none;
  vertical-align: middle;
}
.ui.checkbox input {
  position: absolute;
  top: 0px;
  left: 0px;
  opacity: 0;
  outline: none;
}
/*--- Box ---*/
.ui.checkbox .box,
.ui.checkbox label {
  cursor: pointer;
  padding-left: 2em;
  outline: none;
}
.ui.checkbox .box:before,
.ui.checkbox label:before {
  position: absolute;
  top: 0em;
  line-height: 1;
  width: 1em;
  height: 1em;
  left: 0em;
  content: '';
  border-radius: 4px;
  background: #FFFFFF;
  -webkit-transition: background-color 0.3s ease, -webkit-box-shadow 0.3s ease;
  -moz-transition: background-color 0.3s ease, box-shadow 0.3s ease;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  -webkit-box-shadow: 0em 0em 0em 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0em 0em 0em 1px rgba(0, 0, 0, 0.2);
}
/*--- Checkbox ---*/
.ui.checkbox .box:after,
.ui.checkbox label:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  opacity: 0;
  content: '';
  position: absolute;
  background: transparent;
  border: 0.2em solid #333333;
  border-top: none;
  border-right: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.ui.checkbox .box:after,
.ui.checkbox label:after {
  top: 0.275em;
  left: 0.2em;
  width: 0.45em;
  height: 0.15em;
}
/*--- Inside Label ---*/
.ui.checkbox label {
  display: block;
  color: rgba(0, 0, 0, 0.6);
  -webkit-transition: color 0.2s ease;
  -moz-transition: color 0.2s ease;
  transition: color 0.2s ease;
}
.ui.checkbox label:hover {
  color: rgba(0, 0, 0, 0.8);
}
.ui.checkbox input:focus ~ label {
  color: rgba(0, 0, 0, 0.8);
}
/*--- Outside Label  ---*/
.ui.checkbox ~ label {
  cursor: pointer;
  opacity: 0.85;
  vertical-align: middle;
}
.ui.checkbox ~ label:hover {
  opacity: 1;
}
/*******************************
           States
*******************************/
/*--- Hover ---*/
.ui.checkbox .box:hover::before,
.ui.checkbox label:hover::before {
  -webkit-box-shadow: 0em 0em 0em 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0em 0em 0em 1px rgba(0, 0, 0, 0.3);
}
/*--- Down ---*/
.ui.checkbox .box:active::before,
.ui.checkbox label:active::before {
  background-color: #F5F5F5;
}
/*--- Focus ---*/
.ui.checkbox input:focus ~ .box:before,
.ui.checkbox input:focus ~ label:before {
  -webkit-box-shadow: 0em 0em 0em 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0em 0em 0em 1px rgba(0, 0, 0, 0.3);
}
/*--- Active ---*/
.ui.checkbox input:checked ~ .box:after,
.ui.checkbox input:checked ~ label:after {
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  opacity: 1;
}
/*--- Disabled ---*/
.ui.disabled.checkbox ~ .box:after,
.ui.checkbox input[disabled] ~ .box:after,
.ui.disabled.checkbox label,
.ui.checkbox input[disabled] ~ label {
  opacity: 0.4;
  color: rgba(0, 0, 0, 0.3);
}
/*******************************
          Variations
*******************************/
/*--------------
     Radio
---------------*/
.ui.radio.checkbox .box:before,
.ui.radio.checkbox label:before {
  min-width: 1em;
  height: 1em;
  border-radius: 500px;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  transform: none;
}
.ui.radio.checkbox .box:after,
.ui.radio.checkbox label:after {
  border: none;
  top: 0.2em;
  left: 0.2em;
  width: 0.6em;
  height: 0.6em;
  background-color: #555555;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  transform: none;
  border-radius: 500px;
}
/*--------------
     Slider
---------------*/
.ui.slider.checkbox {
  cursor: pointer;
  min-width: 3em;
}
/* Line */
.ui.slider.checkbox:after {
  position: absolute;
  top: 0.5em;
  left: 0em;
  content: '';
  width: 3em;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.1);
}
/* Button */
.ui.slider.checkbox .box,
.ui.slider.checkbox label {
  padding-left: 4em;
}
.ui.slider.checkbox .box:before,
.ui.slider.checkbox label:before {
  cursor: pointer;
  display: block;
  position: absolute;
  top: -0.25em;
  left: 0em;
  z-index: 1;
  width: 1.5em;
  height: 1.5em;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  transform: none;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  border-radius: 50rem;
  -webkit-transition: left 0.3s ease 0s;
  -moz-transition: left 0.3s ease 0s;
  transition: left 0.3s ease 0s;
}
/* Button Activation Light */
.ui.slider.checkbox .box:after,
.ui.slider.checkbox label:after {
  opacity: 1;
  position: absolute;
  content: '';
  top: 0.15em;
  left: 0em;
  z-index: 2;
  margin-left: 0.375em;
  border: none;
  width: 0.75em;
  height: 0.75em;
  border-radius: 50rem;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  transform: none;
  -webkit-transition: background 0.3s ease 0s,
    left 0.3s ease 0s
  ;
  -moz-transition: background 0.3s ease 0s,
    left 0.3s ease 0s
  ;
  transition: background 0.3s ease 0s,
    left 0.3s ease 0s
  ;
}
/* Selected Slider Toggle */
.ui.slider.checkbox input:checked ~ .box:before,
.ui.slider.checkbox input:checked ~ label:before,
.ui.slider.checkbox input:checked ~ .box:after,
.ui.slider.checkbox input:checked ~ label:after {
  left: 1.75em;
}
/* Off Color */
.ui.slider.checkbox .box:after,
.ui.slider.checkbox label:after {
  background-color: #D95C5C;
}
/* On Color */
.ui.slider.checkbox input:checked ~ .box:after,
.ui.slider.checkbox input:checked ~ label:after {
  background-color: #89B84C;
}
/*--------------
     Toggle
---------------*/
.ui.toggle.checkbox {
  cursor: pointer;
}
.ui.toggle.checkbox .box,
.ui.toggle.checkbox label {
  padding-left: 4em;
}
/* Switch */
.ui.toggle.checkbox .box:before,
.ui.toggle.checkbox label:before {
  cursor: pointer;
  display: block;
  position: absolute;
  content: '';
  top: -0.25em;
  left: 0em;
  z-index: 1;
  background-color: #FFFFFF;
  width: 3em;
  height: 1.5em;
  -webkit-transform: none;
  -moz-transform: none;
  -ms-transform: none;
  transform: none;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset;
  border-radius: 50rem;
}
/* Activation Light */
.ui.toggle.checkbox .box:after,
.ui.toggle.checkbox label:after {
  opacity: 1;
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  content: '';
  position: absolute;
  top: 0.15em;
  left: 0.5em;
  z-index: 2;
  border: none;
  width: 0.75em;
  height: 0.75em;
  background-color: #D95C5C;
  border-radius: 50rem;
  -webkit-transition: background 0.3s ease 0s,
    left 0.3s ease 0s
  ;
  -moz-transition: background 0.3s ease 0s,
    left 0.3s ease 0s
  ;
  transition: background 0.3s ease 0s,
    left 0.3s ease 0s
  ;
}
/* Active */
.ui.toggle.checkbox:active .box:before,
.ui.toggle.checkbox:active label:before {
  background-color: #F5F5F5;
}
/* Active */
.ui.toggle.checkbox input:checked ~ .box:after,
.ui.toggle.checkbox input:checked ~ label:after {
  left: 1.75em;
  background-color: #89B84C;
}
/*--------------
     Sizes
---------------*/
.ui.checkbox {
  font-size: 1em;
}
.ui.large.checkbox {
  font-size: 1.25em;
}
.ui.huge.checkbox {
  font-size: 1.5em;
}

/*
 * # Semantic - Dimmer
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Dimmer
*******************************/
.ui.dimmable {
  position: relative;
}
.ui.dimmer {
  display: none;
  position: absolute;
  top: 0em !important;
  left: 0em !important;
  width: 0%;
  height: 0%;
  text-align: center;
  vertical-align: middle;
  background-color: rgba(0, 0, 0, 0.85);
  opacity: 0;
  line-height: 1;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 0.5s;
  -moz-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-transition: background-color 0.5s linear;
  -moz-transition: background-color 0.5s linear;
  transition: background-color 0.5s linear;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 1000;
}
/* Dimmer Content */
.ui.dimmer > .content {
  width: 100%;
  height: 100%;
  display: table;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
.ui.dimmer > .content > div {
  display: table-cell;
  vertical-align: middle;
  color: #FFFFFF;
}
/* Loose Coupling */
.ui.segment > .ui.dimmer {
  border-radius: 5px;
}
.ui.horizontal.segment > .ui.dimmer,
.ui.vertical.segment > .ui.dimmer {
  border-radius: 5px;
}
/*******************************
            States
*******************************/
.ui.dimmed.dimmable:not(body) {
  overflow: hidden;
}
.ui.dimmed.dimmable > .ui.animating.dimmer,
.ui.dimmed.dimmable > .ui.visible.dimmer,
.ui.active.dimmer {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 1;
}
.ui.disabled.dimmer {
  width: 0em !important;
  height: 0em !important;
}
/*******************************
           Variations
*******************************/
/*--------------
      Page
---------------*/
.ui.page.dimmer {
  position: fixed;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 2000px;
  -moz-perspective: 2000px;
  -ms-perspective: 2000px;
  perspective: 2000px;
  -webkit-transform-origin: center center;
  -moz-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
}
.ui.scrolling.dimmable > .dimmer,
.ui.scrolling.page.dimmer {
  position: absolute;
}
/* Blurred Background
body.ui.dimmed.dimmable > :not(.dimmer){
  filter: ~"blur(15px) grayscale(0.7)";
}
*/
/*--------------
    Aligned
---------------*/
.ui.dimmer > .top.aligned.content > * {
  vertical-align: top;
}
.ui.dimmer > .bottom.aligned.content > * {
  vertical-align: bottom;
}
/*--------------
    Inverted
---------------*/
.ui.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0.85);
}
.ui.inverted.dimmer > .content > * {
  color: rgba(0, 0, 0, 0.8);
}
/*--------------
     Simple
---------------*/
/* Displays without javascript */
.ui.simple.dimmer {
  display: block;
  overflow: hidden;
  opacity: 1;
  z-index: -100;
  background-color: rgba(0, 0, 0, 0);
}
.ui.dimmed.dimmable > .ui.simple.dimmer {
  overflow: visible;
  opacity: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;
}
.ui.simple.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0);
}
.ui.dimmed.dimmable > .ui.simple.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0.85);
}

/*
 * # Semantic - Dropdown
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Dropdown
*******************************/
.ui.dropdown {
  cursor: pointer;
  position: relative;
  display: inline-block;
  line-height: 1;
  -webkit-transition: border-radius 0.1s ease, width 0.2s ease;
  -moz-transition: border-radius 0.1s ease, width 0.2s ease;
  transition: border-radius 0.1s ease, width 0.2s ease;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
}
/*******************************
            Content
*******************************/
/*--------------
     Menu
---------------*/
.ui.dropdown .menu {
  cursor: auto;
  position: absolute;
  display: none;
  top: 100%;
  margin: 0em;
  background-color: #FFFFFF;
  min-width: 100%;
  white-space: nowrap;
  font-size: 0.875em;
  text-shadow: none;
  -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 0.325em 0.325em;
  -webkit-transition: opacity 0.2s ease;
  -moz-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease;
  z-index: 11;
}
/*--------------
      Icon
---------------*/
.ui.dropdown > .dropdown.icon {
  width: auto;
  margin: 0em 0em 0em 1em;
}
.ui.dropdown > .dropdown.icon:before {
  content: "\\\f0d7";
}
.ui.dropdown .menu .item .dropdown.icon {
  width: auto;
  float: right;
  margin: 0em 0em 0em 0.5em;
}
.ui.dropdown .menu .item .dropdown.icon:before {
  content: "\\\f0da" /*rtl:"\f0d9"*/;
}
/*--------------
      Text
---------------*/
.ui.dropdown > .text {
  display: inline-block;
  -webkit-transition: color 0.2s ease;
  -moz-transition: color 0.2s ease;
  transition: color 0.2s ease;
}
/* Flyout Direction */
.ui.dropdown .menu {
  left: 0px;
}
/*--------------
    Sub Menu
---------------*/
.ui.dropdown .menu .menu {
  top: 0% !important;
  left: 100% !important;
  margin: 0em !important;
  border-radius: 0 0.325em 0.325em 0em !important;
}
.ui.dropdown .menu .menu:after {
  display: none;
}
.ui.dropdown .menu .item {
  cursor: pointer;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  height: auto;
  font-size: 0.875em;
  display: block;
  color: rgba(0, 0, 0, 0.75);
  padding: 0.85em 1em !important;
  font-size: 0.875rem;
  text-transform: none;
  font-weight: normal;
  text-align: left;
  -webkit-touch-callout: none;
}
.ui.dropdown .menu .item:before {
  display: none;
}
.ui.dropdown .menu .item .icon {
  margin-right: 0.75em;
}
.ui.dropdown .menu .item:first-child {
  border-top: none;
}
/*******************************
            Coupling
*******************************/
/* Opposite on last menu on right */
.ui.menu .right.menu .dropdown:last-child .menu,
.ui.buttons > .ui.dropdown:last-child .menu {
  left: auto;
  right: 0px;
}
.ui.vertical.menu .dropdown.item > .dropdown.icon:before {
  content: "\\\f0da" /*rtl:"\f0d9"*/;
}
.ui.dropdown.icon.button > .dropdown.icon {
  margin: 0em;
}
/*******************************
            States
*******************************/
/* Dropdown Visible */
.ui.visible.dropdown > .menu {
  display: block;
}
/*--------------------
        Hover
----------------------*/
/* Menu Item Hover */
.ui.dropdown .menu .item:hover {
  background-color: rgba(0, 0, 0, 0.02);
  z-index: 12;
}
/*--------------------
        Active
----------------------*/
/* Menu Item Active */
.ui.dropdown .menu .active.item {
  background-color: rgba(0, 0, 0, 0.06) !important;
  border-left: none;
  border-color: transparent !important;
  -webkit-box-shadow: none;
  -moz-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  z-index: 12;
}
/*--------------------
     Default Text
----------------------*/
.ui.dropdown > .default.text,
.ui.default.dropdown > .text {
  color: rgba(0, 0, 0, 0.5);
}
.ui.dropdown:hover > .default.text,
.ui.default.dropdown:hover > .text {
  color: rgba(0, 0, 0, 0.8);
}
/*--------------------
        Error
----------------------*/
.ui.dropdown.error,
.ui.dropdown.error > .text,
.ui.dropdown.error > .default.text {
  color: #D95C5C !important;
}
.ui.selection.dropdown.error {
  background-color: #FFFAFA;
  -webkit-box-shadow: 0px 0px 0px 1px #e7bebe !important;
  box-shadow: 0px 0px 0px 1px #e7bebe !important;
}
.ui.selection.dropdown.error:hover {
  -webkit-box-shadow: 0px 0px 0px 1px #e7bebe !important;
  box-shadow: 0px 0px 0px 1px #e7bebe !important;
}
.ui.dropdown.error > .menu,
.ui.dropdown.error > .menu .menu {
  -webkit-box-shadow: 0px 0px 1px 1px #E7BEBE !important;
  box-shadow: 0px 0px 1px 1px #E7BEBE !important;
}
.ui.dropdown.error > .menu .item {
  color: #D95C5C !important;
}
/* Item Hover */
.ui.dropdown.error > .menu .item:hover {
  background-color: #FFF2F2 !important;
}
/* Item Active */
.ui.dropdown.error > .menu .active.item {
  background-color: #FDCFCF !important;
}
/*******************************
           Variations
*******************************/
/*--------------
     Simple
---------------*/
/* Displays without javascript */
.ui.simple.dropdown .menu:before,
.ui.simple.dropdown .menu:after {
  display: none;
}
.ui.simple.dropdown .menu {
  display: block;
  overflow: hidden;
  top: -9999px !important;
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  -webkit-transition: opacity 0.2s ease-out;
  -moz-transition: opacity 0.2s ease-out;
  transition: opacity 0.2s ease-out;
}
.ui.simple.active.dropdown,
.ui.simple.dropdown:hover {
  border-bottom-left-radius: 0em !important;
  border-bottom-right-radius: 0em !important;
}
.ui.simple.active.dropdown > .menu,
.ui.simple.dropdown:hover > .menu {
  overflow: visible;
  width: auto;
  height: auto;
  top: 100% !important;
  opacity: 1;
}
.ui.simple.dropdown > .menu .item:active > .menu,
.ui.simple.dropdown:hover > .menu .item:hover > .menu {
  overflow: visible;
  width: auto;
  height: auto;
  top: 0% !important;
  left: 100% !important;
  opacity: 1;
}
.ui.simple.disabled.dropdown:hover .menu {
  display: none;
  height: 0px;
  width: 0px;
  overflow: hidden;
}
/*--------------
    Selection
---------------*/
/* Displays like a select box */
.ui.selection.dropdown {
  cursor: pointer;
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  background-color: #FFFFFF;
  padding: 0.65em 1em;
  line-height: 1.33;
  color: rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1) !important;
  border-radius: 0.3125em !important;
}
.ui.selection.dropdown select {
  display: none;
}
.ui.selection.dropdown > .dropdown.icon {
  opacity: 0.7;
  margin: 0.2em 0em 0.2em 1.25em;
  -webkit-transition: opacity 0.2s ease-out;
  -moz-transition: opacity 0.2s ease-out;
  transition: opacity 0.2s ease-out;
}
.ui.selection.dropdown,
.ui.selection.dropdown .menu {
  -webkit-transition: -webkit-box-shadow 0.2s ease-out;
  -moz-transition: box-shadow 0.2s ease-out;
  transition: box-shadow 0.2s ease-out;
}
.ui.selection.dropdown .menu {
  top: 100%;
  max-height: 312px;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-box-shadow: 0px 1px 0px 1px #E0E0E0;
  box-shadow: 0px 1px 0px 1px #E0E0E0;
  border-radius: 0px 0px 0.325em 0.325em;
}
.ui.selection.dropdown .menu:after,
.ui.selection.dropdown .menu:before {
  display: none;
}
.ui.selection.dropdown .menu img {
  height: 2.5em;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5em;
}
/* Visible */
.ui.visible.selection.dropdown {
  border-bottom-left-radius: 0em !important;
  border-bottom-right-radius: 0em !important;
}
/* Active */
.ui.active.selection.dropdown {
  border-radius: 0.3125em 0.3125em 0em 0em !important;
}
.ui.active.selection.dropdown > .dropdown.icon {
  opacity: 1;
}
/*--------------
      Fluid
---------------*/
.ui.fluid.dropdown {
  display: block;
}
.ui.fluid.dropdown > .dropdown.icon {
  float: right;
}
/*--------------
     Inline
---------------*/
.ui.inline.dropdown {
  cursor: pointer;
  display: inline-block;
  color: inherit;
}
.ui.inline.dropdown .dropdown.icon {
  margin: 0em 0.5em 0em 0.25em;
}
.ui.inline.dropdown .text {
  font-weight: bold;
}
.ui.inline.dropdown .menu {
  cursor: auto;
  margin-top: 0.25em;
  border-radius: 0.325em;
}
/*--------------
    Floating
---------------*/
.ui.floating.dropdown .menu {
  left: 0;
  right: auto;
  margin-top: 0.5em !important;
  border-radius: 0.325em;
}
/*--------------
     Pointing
---------------*/
.ui.pointing.dropdown .menu {
  top: 100%;
  margin-top: 0.75em;
  border-radius: 0.325em;
}
.ui.pointing.dropdown .menu:after {
  display: block;
  position: absolute;
  pointer-events: none;
  content: " ";
  visibility: visible;
  width: 0.5em;
  height: 0.5em;
  -webkit-box-shadow: -1px -1px 0px 1px rgba(0, 0, 0, 0.05);
  box-shadow: -1px -1px 0px 1px rgba(0, 0, 0, 0.05);
  background-image: none;
  background-color: #FFFFFF;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 2;
}
.ui.pointing.dropdown .menu .active.item:first-child {
  background: transparent -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.03));
  background: transparent -moz-linear-gradient(transparent, rgba(0, 0, 0, 0.03));
  background: transparent linear-gradient(transparent, rgba(0, 0, 0, 0.03));
}
/* Directions */
.ui.pointing.dropdown .menu:after {
  top: -0.25em;
  left: 50%;
  margin: 0em 0em 0em -0.25em;
}
.ui.top.left.pointing.dropdown .menu {
  top: 100%;
  bottom: auto;
  left: 0%;
  right: auto;
  margin: 0.75em 0em 0em;
}
.ui.top.left.pointing.dropdown .menu:after {
  top: -0.25em;
  left: 1.25em;
  right: auto;
  margin: 0em;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.ui.top.right.pointing.dropdown .menu {
  top: 100%;
  bottom: auto;
  right: 0%;
  left: auto;
  margin: 0.75em 0em 0em;
}
.ui.top.right.pointing.dropdown .menu:after {
  top: -0.25em;
  left: auto;
  right: 1.25em;
  margin: 0em;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.ui.left.pointing.dropdown .menu {
  top: 0%;
  left: 100%;
  right: auto;
  margin: 0em 0em 0em 0.75em;
}
.ui.left.pointing.dropdown .menu:after {
  top: 1em;
  left: -0.25em;
  margin: 0em 0em 0em 0em;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.ui.right.pointing.dropdown .menu {
  top: 0%;
  left: auto;
  right: 100%;
  margin: 0em 0.75em 0em 0em;
}
.ui.right.pointing.dropdown .menu:after {
  top: 1em;
  left: auto;
  right: -0.25em;
  margin: 0em 0em 0em 0em;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
}

/*
 * # Semantic - Modal
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
             Modal
*******************************/
.ui.modal {
  display: none;
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  text-align: left;
  width: 90%;
  margin-left: -45%;
  background-color: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 5px;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
/*******************************
            Content
*******************************/
/*--------------
     Close
---------------*/
.ui.modal > .close {
  cursor: pointer;
  position: absolute;
  z-index: 1;
  opacity: 0.8;
  font-size: 1.25em;
  top: -1.75em;
  right: -1.75em;
  color: #FFFFFF;
}
.ui.modal > .close:hover {
  opacity: 1;
}
/*--------------
     Header
---------------*/
.ui.modal > .header {
  margin: 0em;
  padding: 1.5rem 2rem;
  font-size: 1.6em;
  font-weight: bold;
  border-radius: 0.325em 0.325em 0px 0px;
}
/*--------------
     Content
---------------*/
.ui.modal > .content {
  display: table;
  width: 100%;
  position: relative;
  padding: 2em;
  background-color: #F4F4F4;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.modal > .content > .left:not(.ui) {
  display: table-cell;
  padding-right: 1.5%;
  min-width: 25%;
}
.ui.modal > .content > .right:not(.ui) {
  display: table-cell;
  padding-left: 1.5%;
  vertical-align: top;
}
/*rtl:ignore*/
.ui.modal > .content > .left:not(.ui) > i.icon {
  font-size: 8em;
  margin: 0em;
}
.ui.modal > .content p {
  line-height: 1.6;
}
/*--------------
     Actions
---------------*/
.ui.modal .actions {
  padding: 1rem 2rem;
  text-align: right;
}
.ui.modal .actions > .button {
  margin-left: 0.75em;
}
/*-------------------
       Sizing
--------------------*/
/* Mobile Only */
@media only screen and (max-width: 768px) {
  /*rtl:ignore*/
  .ui.modal .content > .left:not(.ui) {
    display: block;
    padding: 0em 0em 1em;
  }
  /*rtl:ignore*/
  .ui.modal .content > .right:not(.ui) {
    display: block;
    padding: 1em 0em 0em;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ui.modal .content .image {
    width: auto !important;
    max-width: 100%;
  }
  .ui.modal .actions {
    padding-bottom: 0em;
  }
  .ui.modal .actions > .buttons,
  .ui.modal .actions > .button {
    margin-bottom: 1em;
  }
}
/* Tablet and Mobile */
@media only screen and (max-width: 998px) {
  .ui.modal {
    width: 92%;
    margin-left: -46%;
  }
  .ui.modal > .close {
    color: rgba(0, 0, 0, 0.8);
    top: 1.5rem;
    right: 1rem;
  }
}
/* Computer / Responsive */
@media only screen and (min-width: 998px) {
  .ui.modal {
    width: 74%;
    margin-left: -37%;
  }
}
@media only screen and (min-width: 1500px) {
  .ui.modal {
    width: 56%;
    margin-left: -28%;
  }
}
@media only screen and (min-width: 1750px) {
  .ui.modal {
    width: 42%;
    margin-left: -21%;
  }
}
@media only screen and (min-width: 2000px) {
  .ui.modal {
    width: 36%;
    margin-left: -18%;
  }
}
/*******************************
             Types
*******************************/
.ui.basic.modal {
  background-color: transparent;
  border: none;
  color: #FFFFFF;
}
.ui.basic.modal > .close {
  top: 1.5rem;
  right: 1rem;
}
.ui.basic.modal .content {
  background-color: transparent;
}
/*******************************
            Variations
*******************************/
/* A modal that cannot fit on the page */
.ui.modal.scrolling {
  position: absolute;
  margin-top: 10px;
}
/*******************************
              States
*******************************/
.ui.active.modal {
  display: block;
}
/*--------------
      Size
---------------*/
/* Small */
.ui.small.modal > .header {
  font-size: 1.3em;
}
@media only screen and (min-width: 998px) {
  .ui.small.modal {
    width: 58%;
    margin-left: -29%;
  }
}
@media only screen and (min-width: 1500px) {
  .ui.small.modal {
    width: 40%;
    margin-left: -20%;
  }
}
@media only screen and (min-width: 1750px) {
  .ui.small.modal {
    width: 26%;
    margin-left: -13%;
  }
}
@media only screen and (min-width: 2000px) {
  .ui.small.modal {
    width: 20%;
    margin-left: -10%;
  }
}
/* Large */
@media only screen and (min-width: 998px) {
  .ui.large.modal {
    width: 74%;
    margin-left: -37%;
  }
}
@media only screen and (min-width: 1500px) {
  .ui.large.modal {
    width: 64%;
    margin-left: -32%;
  }
}
@media only screen and (min-width: 1750px) {
  .ui.large.modal {
    width: 54%;
    margin-left: -27%;
  }
}
@media only screen and (min-width: 2000px) {
  .ui.large.modal {
    width: 44%;
    margin-left: -22%;
  }
}

/*
 * # Semantic - Nag
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
             Nag
*******************************/
.ui.nag {
  display: none;
  opacity: 0.95;
  position: relative;
  top: 0px;
  left: 0%;
  z-index: 101;
  min-height: 0;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0em;
  line-height: 3em;
  padding: 0em 1em;
  background-color: #555555;
  -webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  font-size: 1em;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 0px 0px 5px 5px;
  -webkit-transition: 0.2s background;
  -moz-transition: 0.2s background;
  transition: 0.2s background;
}
a.ui.nag {
  cursor: pointer;
}
.ui.nag > .title {
  display: inline-block;
  margin: 0em 0.5em;
  color: #FFFFFF;
}
.ui.nag > .close.icon {
  cursor: pointer;
  opacity: 0.4;
  position: absolute;
  top: 50%;
  right: 1em;
  margin-top: -0.5em;
  color: #FFFFFF;
  -webkit-transition: 0.1s opacity;
  -moz-transition: 0.1s opacity;
  transition: 0.1s opacity;
}
/*******************************
             States
*******************************/
/* Hover */
.ui.nag:hover {
  opacity: 1;
}
.ui.nag .close:hover {
  opacity: 1;
}
/*******************************
           Variations
*******************************/
/*--------------
     Static
---------------*/
.ui.overlay.nag {
  position: absolute;
  display: block;
}
/*--------------
     Fixed
---------------*/
.ui.fixed.nag {
  position: fixed;
}
/*--------------
     Bottom
---------------*/
.ui.bottom.nag {
  border-radius: 5px 5px 0px 0px;
}
.ui.fixed.bottom.nags,
.ui.fixed.bottom.nag {
  top: auto;
  bottom: 0px;
}
/*--------------
     White
---------------*/
.ui.white.nags .nag,
.ui.white.nag {
  background-color: #F1F1F1;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8);
  color: #ACACAC;
}
.ui.white.nags .nag .close,
.ui.white.nags .nag .title,
.ui.white.nag .close,
.ui.white.nag .title {
  color: #333333;
}
/*******************************
           Groups
*******************************/
.ui.nags .nag {
  border-radius: 0px;
}

/*
 * # Semantic - Popup
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Popup
*******************************/
.ui.popup {
  display: none;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 900;
  border: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 250px;
  background-color: #FFFFFF;
  padding: 0.8em 1.2em;
  font-size: 0.875rem;
  font-weight: normal;
  font-style: normal;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 0.2em;
  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
}
.ui.popup .header {
  padding: 0em 0em 0.5em;
  font-size: 1.125em;
  line-height: 1.2;
  font-weight: bold;
}
.ui.popup:before {
  position: absolute;
  content: "";
  width: 0.75em;
  height: 0.75rem;
  background-image: none;
  background-color: #FFFFFF;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 2;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
}
.ui.popup .ui.button {
  width: 100%;
}
/*******************************
            Types
*******************************/
/*--------------
     Spacing
---------------*/
.ui.popup {
  margin: 0em;
}
.ui.popup.bottom {
  margin: 0.75em 0em 0em;
}
.ui.popup.top {
  margin: 0em 0em 0.75em;
}
.ui.popup.left.center {
  margin: 0em 0.75em 0em 0em;
}
.ui.popup.right.center {
  margin: 0em 0em 0em 0.75em;
}
.ui.popup.center {
  margin-left: -1.25em;
}
/*--------------
     Pointer
---------------*/
/*--- Below ---*/
.ui.bottom.center.popup:before {
  margin-left: -0.4em;
  top: -0.4em;
  left: 50%;
  right: auto;
  bottom: auto;
  -webkit-box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2);
}
.ui.bottom.left.popup {
  margin-right: -2em;
}
.ui.bottom.left.popup:before {
  top: -0.4em;
  right: 1em;
  bottom: auto;
  left: auto;
  margin-left: 0em;
  -webkit-box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2);
}
.ui.bottom.right.popup {
  margin-left: -2em;
}
.ui.bottom.right.popup:before {
  top: -0.4em;
  left: 1em;
  right: auto;
  bottom: auto;
  margin-left: 0em;
  -webkit-box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.2);
}
/*--- Above ---*/
.ui.top.center.popup:before {
  top: auto;
  right: auto;
  bottom: -0.4em;
  left: 50%;
  margin-left: -0.4em;
}
.ui.top.left.popup {
  margin-right: -2em;
}
.ui.top.left.popup:before {
  bottom: -0.4em;
  right: 1em;
  top: auto;
  left: auto;
  margin-left: 0em;
}
.ui.top.right.popup {
  margin-left: -2em;
}
.ui.top.right.popup:before {
  bottom: -0.4em;
  left: 1em;
  top: auto;
  right: auto;
  margin-left: 0em;
}
/*--- Left Center ---*/
.ui.left.center.popup:before {
  top: 50%;
  right: -0.35em;
  bottom: auto;
  left: auto;
  margin-top: -0.4em;
  -webkit-box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
}
/*--- Right Center  ---*/
.ui.right.center.popup:before {
  top: 50%;
  left: -0.35em;
  bottom: auto;
  right: auto;
  margin-top: -0.4em;
  -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
}
/*******************************
            States
*******************************/
.ui.loading.popup {
  display: block;
  visibility: hidden;
}
.ui.animating.popup,
.ui.visible.popup {
  display: block;
}
/*******************************
            Variations
*******************************/
/*--------------
      Size
---------------*/
.ui.small.popup {
  font-size: 0.75rem;
}
.ui.large.popup {
  font-size: 1rem;
}
/*--------------
     Colors
---------------*/
/* Inverted colors  */
.ui.inverted.popup {
  background-color: #333333;
  border: none;
  color: #FFFFFF;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.ui.inverted.popup .header {
  background-color: rgba(0, 0, 0, 0.2);
  color: #FFFFFF;
}
.ui.inverted.popup:before {
  background-color: #333333;
  -webkit-box-shadow: none;
  box-shadow: none;
}

/*
 * # Semantic - Rating
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
           Rating
*******************************/
.ui.rating {
  display: inline-block;
  font-size: 0em;
  vertical-align: middle;
  margin: 0em 0.5rem 0em 0em;
}
.ui.rating:last-child {
  margin-right: 0em;
}
.ui.rating:before {
  display: block;
  content: '';
  visibility: hidden;
  clear: both;
  height: 0;
}
/* Icon */
.ui.rating .icon {
  cursor: pointer;
  margin: 0em;
  width: 1em;
  height: auto;
  padding: 0em;
  color: rgba(0, 0, 0, 0.15);
  font-weight: normal;
  font-style: normal;
}
.ui.rating .icon:before {
  content: "\\2605";
}
/*******************************
             Types
*******************************/
/*-------------------
        Star
--------------------*/
.ui.star.rating .icon {
  width: 1.2em;
}
/* Star */
.ui.star.rating .icon:before {
  content: '\\f006';
  font-family: 'Icons';
}
/* Active Star */
.ui.star.rating .active.icon:before {
  content: '\\f005';
  font-family: 'Icons';
}
/*-------------------
        Heart
--------------------*/
.ui.heart.rating .icon {
  width: 1.2em;
}
.ui.heart.rating .icon:before {
  content: '\\f08a';
  font-family: 'Icons';
}
/* Active */
.ui.heart.rating .active.icon:before {
  content: '\\f004';
  font-family: 'Icons';
}
.ui.heart.rating .active.icon {
  color: #EF404A !important;
}
/* Hovered */
.ui.heart.rating .hover.icon,
.ui.heart.rating .active.hover.icon {
  color: #FF2733 !important;
}
/*******************************
             States
*******************************/
/*-------------------
        Active
--------------------*/
/* disabled rating */
.ui.disabled.rating .icon {
  cursor: default;
}
/* active icons */
.ui.rating .active.icon {
  color: #FFCB08 !important;
}
/*-------------------
        Hover
--------------------*/
/* rating */
.ui.rating.hover .active.icon {
  opacity: 0.5;
}
/* icon */
.ui.rating .icon.hover,
.ui.rating .icon.hover.active {
  opacity: 1;
  color: #FFB70A !important;
}
/*******************************
          Variations
*******************************/
.ui.small.rating .icon {
  font-size: 0.75rem;
}
.ui.rating .icon {
  font-size: 1rem;
}
.ui.large.rating .icon {
  font-size: 1.5rem;
  vertical-align: middle;
}
.ui.huge.rating .icon {
  font-size: 2rem;
  vertical-align: middle;
}

/*
 * # Semantic - Search
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
             Search
*******************************/
.ui.search {
  position: relative;
  text-shadow: none;
  font-style: normal;
  font-weight: normal;
}
.ui.search input {
  border-radius: 500rem;
}
/*--------------
     Button
---------------*/
.ui.search > .button {
  position: relative;
  z-index: 2;
  float: right;
  margin: 0px 0px 0px -15px;
  padding: 6px 15px 7px;
  border-radius: 0px 15px 15px 0px;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*--------------
    Results
---------------*/
.ui.search .results {
  display: none;
  position: absolute;
  z-index: 999;
  top: 100%;
  left: 0px;
  overflow: hidden;
  background-color: #FFFFFF;
  margin-top: 0.5em;
  width: 380px;
  font-size: 0.875em;
  line-height: 1.2;
  color: #555555;
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1), 0px -2px 0px 0px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1), 0px -2px 0px 0px rgba(0, 0, 0, 0.1) inset;
}
.ui.search .result {
  cursor: pointer;
  overflow: hidden;
  padding: 0.5em 1em;
}
.ui.search .result:first-child {
  border-top: none;
}
.ui.search .result .image {
  background: #F0F0F0;
  margin-right: 10px;
  float: left;
  overflow: hidden;
  border-radius: 3px;
  width: 38px;
  height: 38px;
}
.ui.search .result .image img {
  display: block;
  width: 38px;
  height: 38px;
}
.ui.search .result .image ~ .info {
  float: none;
  margin-left: 50px;
}
.ui.search .result .info {
  float: left;
}
.ui.search .result .title {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
}
.ui.search .result .description {
  color: rgba(0, 0, 0, 0.6);
}
.ui.search .result .price {
  float: right;
  color: #5BBD72;
  font-weight: bold;
}
/*--------------
    Message
---------------*/
.ui.search .message {
  padding: 1em;
}
.ui.search .message .text .title {
  margin: 0em 0em 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
}
.ui.search .message .text .description {
  margin: 0em;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);
}
/*--------------
    Categories
---------------*/
.ui.search .results .category {
  background-color: #FAFAFA;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-transition: background 0.2s ease-in;
  -moz-transition: background 0.2s ease-in;
  transition: background 0.2s ease-in;
}
.ui.search .results .category:first-child {
  border-top: none;
}
.ui.search .results .category > .name {
  float: left;
  padding: 12px 0px 0px 8px;
  font-weight: bold;
  color: #777777;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.8);
}
.ui.search .results .category .result {
  background-color: #FFFFFF;
  margin-left: 80px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
}
/* View All Results */
.ui.search .all {
  display: block;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #FAFAFA;
  height: 2em;
  line-height: 2em;
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  text-align: center;
}
/*******************************
            States
*******************************/
/*--------------
      Hover
---------------*/
.ui.search .result:hover,
.ui.search .category .result:hover {
  background-color: #F8F8F8;
}
.ui.search .all:hover {
  background-color: #F0F0F0;
}
/*--------------
     Loading
---------------*/
.ui.search.loading .input .icon {
  background: url(../images/loader-mini.gif) no-repeat 50% 50%;
}
.ui.search.loading .input .icon:before,
.ui.search.loading .input .icon:after {
  display: none;
}
/*--------------
      Active
---------------*/
.ui.search .results .category.active {
  background-color: #F1F1F1;
}
.ui.search .results .category.active > .name {
  color: #333333;
}
.ui.search .result.active,
.ui.search .category .result.active {
  background-color: #FBFBFB;
}
.ui.search .result.active .title {
  color: #000000;
}
.ui.search .result.active .description {
  color: #555555;
}
/*******************************
           Variations
*******************************/
/* Large */
.ui.search .large.result .image,
.ui.search .large.result .image img {
  width: 50px;
  height: 50px;
}
.ui.search .large.results .indented.info {
  margin-left: 65px;
}
.ui.search .large.results .info .title {
  font-size: 16px;
}
.ui.search .large.results .info .description {
  font-size: 11px;
}

/*
 * # Semantic - Shape
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
              Shape
*******************************/
.ui.shape {
  display: inline-block;
  position: relative;
  -webkit-perspective: 2000px;
  -moz-perspective: 2000px;
  -ms-perspective: 2000px;
  perspective: 2000px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.shape .sides {
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.ui.shape .side {
  opacity: 1;
  width: 100%;
  margin: 0em !important;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
.ui.shape .side {
  display: none;
}
/*******************************
             Types
*******************************/
.ui.cube.shape .side {
  min-width: 15em;
  height: 15em;
  padding: 2em;
  background-color: #E6E6E6;
  color: rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
}
.ui.cube.shape .side > .content {
  width: 100%;
  height: 100%;
  display: table;
  text-align: center;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
.ui.cube.shape .side > .content > div {
  display: table-cell;
  vertical-align: middle;
  font-size: 2em;
}
/*******************************
          Variations
*******************************/
.ui.text.shape.animating .sides {
  position: static;
}
.ui.text.shape .side {
  white-space: nowrap;
}
.ui.text.shape .side > * {
  white-space: normal;
}
/*******************************
             States
*******************************/
/*--------------
    Loading
---------------*/
.ui.loading.shape {
  position: absolute;
  top: -9999px;
  left: -9999px;
}
/*--------------
    Animating
---------------*/
.ui.shape .animating.side {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 100;
}
.ui.shape .hidden.side {
  opacity: 0.4;
}
/*--------------
      CSS
---------------*/
.ui.shape.animating {
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}
.ui.shape.animating .sides {
  position: absolute;
}
.ui.shape.animating .sides {
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}
.ui.shape.animating .side {
  -webkit-transition: opacity 0.6s ease-in-out;
  -moz-transition: opacity 0.6s ease-in-out;
  transition: opacity 0.6s ease-in-out;
}
/*--------------
     Active
---------------*/
.ui.shape .active.side {
  display: block;
}

/*
 * # Semantic - Sidebar
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Sidebar
*******************************/
body {
  -webkit-transition: margin 0.3s ease, -webkit-transform 0.3s ease /*rtl:append:,
    padding 0.3s ease*/;
  -moz-transition: margin 0.3s ease, -moz-transform 0.3s ease /*rtl:append:,
    padding 0.3s ease*/;
  transition: margin 0.3s ease, transform 0.3s ease /*rtl:append:,
    padding 0.3s ease*/;
}
.ui.sidebar {
  position: fixed;
  margin: 0 !important;
  height: 100% !important;
  border-radius: 0px !important;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -ms-overflow-y: auto;
  overflow-y: auto;
  top: 0px;
  left: 0px;
  z-index: 999;
  -webkit-transition: margin-left 0.3s ease, margin-top 0.3s ease;
  -moz-transition: margin-left 0.3s ease, margin-top 0.3s ease;
  transition: margin-left 0.3s ease, margin-top 0.3s ease;
}
/*-------------------
      Coupling
--------------------*/
body.pushed.scrolling.ui.dimmable {
  position: static;
}
/*******************************
             Types
*******************************/
/*-------------------
       Direction
--------------------*/
.ui.right.very.thin.sidebar,
.ui.right.thin.sidebar,
.ui.right.sidebar,
.ui.right.wide.sidebar,
.ui.right.very.wide.sidebar {
  left: 100%;
  margin: 0px !important;
}
.ui.top.sidebar {
  width: 100% !important;
}
.ui.bottom.sidebar {
  width: 100% !important;
  top: 100%;
  margin: 0px !important;
}
/*******************************
            States
*******************************/
.ui.active.sidebar {
  margin-left: 0px !important;
}
.ui.active.top.sidebar,
.ui.active.bottom.sidebar {
  margin-top: 0px !important;
}
/*******************************
           Variations
*******************************/
/*-------------------
      Formatted
--------------------*/
.ui.styled.sidebar {
  padding: 1em 1.5em;
  background-color: #FFFFFF;
  -webkit-box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.1);
}
.ui.styled.very.thin.sidebar {
  padding: 0.5em;
}
.ui.styled.thin.sidebar {
  padding: 1em;
}
/*-------------------
       Floating
--------------------*/
.ui.floating.sidebar {
  -webkit-box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.2);
}
.ui.right.floating.sidebar {
  -webkit-box-shadow: -2px 0px 2px rgba(0, 0, 0, 0.2);
  box-shadow: -2px 0px 2px rgba(0, 0, 0, 0.2);
}
.ui.top.floating.sidebar {
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}
.ui.bottom.floating.sidebar {
  -webkit-box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.2);
}
/*-------------------
        Width
--------------------*/
/* Very Thin */
.ui.very.thin.sidebar {
  width: 60px !important;
  margin-left: -60px !important;
}
.ui.active.very.thin.sidebar {
  margin-left: 0px !important;
}
.ui.active.right.very.thin.sidebar {
  margin-left: -60px !important;
}
/* Thin */
.ui.thin.sidebar {
  width: 200px !important;
  margin-left: -200px !important;
}
.ui.active.thin.sidebar {
  margin-left: 0px !important;
}
.ui.active.right.thin.sidebar {
  margin-left: -200px !important;
}
/* Standard */
.ui.sidebar {
  width: 275px !important;
  margin-left: -275px !important;
}
.ui.active.sidebar {
  margin-left: 0px !important;
}
.ui.active.right.sidebar {
  margin-left: -275px !important;
}
/* Wide */
.ui.wide.sidebar {
  width: 350px !important;
  margin-left: -350px !important;
}
.ui.active.wide.sidebar {
  margin-left: 0px !important;
}
.ui.active.right.wide.sidebar {
  margin-left: -350px !important;
}
/* Very Wide */
.ui.very.wide.sidebar {
  width: 475px !important;
  margin-left: -475px !important;
}
.ui.active.very.wide.sidebar {
  margin-left: 0px !important;
}
.ui.active.right.very.wide.sidebar {
  margin-left: -475px !important;
}
/*-------------------
       Height
--------------------*/
/* Standard */
.ui.top.sidebar {
  margin: -40px 0px 0px 0px !important;
}
.ui.top.sidebar,
.ui.bottom.sidebar {
  height: 40px !important;
}
.ui.active.bottom.sidebar {
  margin-top: -40px !important;
}

/*
 * # Semantic - Tab
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
           UI Tabs
*******************************/
.ui.tab {
  display: none;
}
/*******************************
             States
*******************************/
/*--------------------
       Active
---------------------*/
.ui.tab.active,
.ui.tab.open {
  display: block;
}
/*--------------------
       Loading
---------------------*/
.ui.tab.loading {
  position: relative;
  overflow: hidden;
  display: block;
  min-height: 250px;
  text-indent: -10000px;
}
.ui.tab.loading * {
  position: relative !important;
  left: -10000px !important;
}
.ui.tab.loading:after {
  position: absolute;
  top: 50px;
  left: 50%;
  content: 'Loading...';
  margin-left: -32px;
  text-indent: 5px;
  color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  padding-top: 75px;
  background: url(../images/loader-large.gif) no-repeat 0px 0px;
  visibility: visible;
}

/*******************************
  Semantic - Transition
  Author: Jack Lukic

  CSS animation definitions for
  transition module

*******************************/
/*
  Some transitions adapted from Animate CSS
  https://github.com/daneden/animate.css
*/
.ui.transition {
  -webkit-animation-iteration-count: 1;
  -moz-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease;
  -moz-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  animation-fill-mode: both;
}
/*******************************
            States
*******************************/
.ui.animating.transition {
  display: block;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
/* Loading */
.ui.loading.transition {
  position: absolute;
  top: -999999px;
  left: -99999px;
}
/* Hidden */
.ui.hidden.transition {
  display: none !important;
}
/* Visible */
.ui.visible.transition {
  display: block;
  visibility: visible;
}
/* Disabled */
.ui.disabled.transition {
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  animation-play-state: paused;
}
/*******************************
          Variations
*******************************/
.ui.looping.transition {
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
/*******************************
             Types
*******************************/
/*--------------
    Emphasis
---------------*/
.ui.flash.transition {
  -webkit-animation-name: flash;
  -moz-animation-name: flash;
  animation-name: flash;
}
.ui.shake.transition {
  -webkit-animation-name: shake;
  -moz-animation-name: shake;
  animation-name: shake;
}
.ui.bounce.transition {
  -webkit-animation-name: bounce;
  -moz-animation-name: bounce;
  animation-name: bounce;
}
.ui.tada.transition {
  -webkit-animation-name: tada;
  -moz-animation-name: tada;
  animation-name: tada;
}
/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */
.ui.pulse.transition {
  -webkit-animation-name: pulse;
  -moz-animation-name: pulse;
  animation-name: pulse;
}
/*--------------
     Flips
---------------*/
.ui.flip.transition.in,
.ui.flip.transition.out {
  -webkit-perspective: 2000px;
  -moz-perspective: 2000px;
  -ms-perspective: 2000px;
  perspective: 2000px;
}
.ui.horizontal.flip.transition.in,
.ui.horizontal.flip.transition.out {
  -webkit-animation-name: horizontalFlip;
  -moz-animation-name: horizontalFlip;
  animation-name: horizontalFlip;
}
.ui.horizontal.flip.transition.out {
  -webkit-animation-name: horizontalFlipOut;
  -moz-animation-name: horizontalFlipOut;
  animation-name: horizontalFlipOut;
}
.ui.vertical.flip.transition.in,
.ui.vertical.flip.transition.out {
  -webkit-animation-name: verticalFlip;
  -moz-animation-name: verticalFlip;
  animation-name: verticalFlip;
}
.ui.vertical.flip.transition.out {
  -webkit-animation-name: verticalFlipOut;
  -moz-animation-name: verticalFlipOut;
  animation-name: verticalFlipOut;
}
/*--------------
      Fades
---------------*/
.ui.fade.transition.in {
  -webkit-animation-name: fade;
  -moz-animation-name: fade;
  animation-name: fade;
}
.ui.fade.transition.out {
  -webkit-animation-name: fadeOut;
  -moz-animation-name: fadeOut;
  animation-name: fadeOut;
}
.ui.fade.up.transition.in {
  -webkit-animation-name: fadeUp;
  -moz-animation-name: fadeUp;
  animation-name: fadeUp;
}
.ui.fade.up.transition.out {
  -webkit-animation-name: fadeUpOut;
  -moz-animation-name: fadeUpOut;
  animation-name: fadeUpOut;
}
.ui.fade.down.transition.in {
  -webkit-animation-name: fadeDown;
  -moz-animation-name: fadeDown;
  animation-name: fadeDown;
}
.ui.fade.down.transition.out {
  -webkit-animation-name: fadeDownOut;
  -moz-animation-name: fadeDownOut;
  animation-name: fadeDownOut;
}
/*--------------
      Scale
---------------*/
.ui.scale.transition.in {
  -webkit-animation-name: scale;
  -moz-animation-name: scale;
  animation-name: scale;
}
.ui.scale.transition.out {
  -webkit-animation-name: scaleOut;
  -moz-animation-name: scaleOut;
  animation-name: scaleOut;
}
/*--------------
     Slide
---------------*/
.ui.slide.down.transition.in {
  -webkit-animation-name: slide;
  -moz-animation-name: slide;
  animation-name: slide;
  -moz-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
  -ms-transform-origin: 50% 0%;
  -webkit-transform-origin: 50% 0%;
}
.ui.slide.down.transition.out {
  -webkit-animation-name: slideOut;
  -moz-animation-name: slideOut;
  animation-name: slideOut;
  -webkit-transform-origin: 50% 0%;
  -moz-transform-origin: 50% 0%;
  -ms-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}
.ui.slide.up.transition.in {
  -webkit-animation-name: slide;
  -moz-animation-name: slide;
  animation-name: slide;
  -webkit-transform-origin: 50% 100%;
  -moz-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
.ui.slide.up.transition.out {
  -webkit-animation-name: slideOut;
  -moz-animation-name: slideOut;
  animation-name: slideOut;
  -webkit-transform-origin: 50% 100%;
  -moz-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
@-webkit-keyframes slide {
  0% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}
@-moz-keyframes slide {
  0% {
    opacity: 0;
    -moz-transform: scaleY(0);
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    -moz-transform: scaleY(1);
    transform: scaleY(1);
  }
}
@keyframes slide {
  0% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    -moz-transform: scaleY(0);
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    -moz-transform: scaleY(1);
    transform: scaleY(1);
  }
}
@-webkit-keyframes slideOut {
  0% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
}
@-moz-keyframes slideOut {
  0% {
    opacity: 1;
    -moz-transform: scaleY(1);
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    -moz-transform: scaleY(0);
    transform: scaleY(0);
  }
}
@keyframes slideOut {
  0% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    -moz-transform: scaleY(1);
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    -moz-transform: scaleY(0);
    transform: scaleY(0);
  }
}
/*******************************
       Animations
*******************************/
/*--------------
    Emphasis
---------------*/
/* Flash */
@-webkit-keyframes flash {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
@-moz-keyframes flash {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
@keyframes flash {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
/* Shake */
@-webkit-keyframes shake {
  0%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}
@-moz-keyframes shake {
  0%,
  100% {
    -moz-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    -moz-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    -moz-transform: translateX(10px);
    transform: translateX(10px);
  }
}
@keyframes shake {
  0%,
  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    transform: translateX(10px);
  }
}
/* Bounce */
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-moz-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
/* Tada */
@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  10%,
  20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }
  40%,
  60%,
  80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}
@-moz-keyframes tada {
  0% {
    -moz-transform: scale(1);
    transform: scale(1);
  }
  10%,
  20% {
    -moz-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -moz-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }
  40%,
  60%,
  80% {
    -moz-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    -moz-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}
@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
  }
  10%,
  20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    -moz-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    -moz-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }
  40%,
  60%,
  80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    -moz-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
    -moz-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}
/* Pulse */
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.7;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@-moz-keyframes pulse {
  0% {
    -moz-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  50% {
    -moz-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.7;
  }
  100% {
    -moz-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
  50% {
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.7;
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
/*--------------
     Flips
---------------*/
/* Horizontal */
@-webkit-keyframes horizontalFlip {
  0% {
    -webkit-transform: rotateY(-90deg);
    transform: rotateY(-90deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
  }
}
@-moz-keyframes horizontalFlip {
  0% {
    -moz-transform: rotateY(-90deg);
    transform: rotateY(-90deg);
    opacity: 0;
  }
  100% {
    -moz-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
  }
}
@keyframes horizontalFlip {
  0% {
    -webkit-transform: rotateY(-90deg);
    -moz-transform: rotateY(-90deg);
    transform: rotateY(-90deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
  }
}
/* Horizontal */
@-webkit-keyframes horizontalFlipOut {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
  }
}
@-moz-keyframes horizontalFlipOut {
  0% {
    -moz-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
  }
  100% {
    -moz-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
  }
}
@keyframes horizontalFlipOut {
  0% {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    transform: rotateY(0deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateY(90deg);
    -moz-transform: rotateY(90deg);
    transform: rotateY(90deg);
    opacity: 0;
  }
}
/* Vertical */
@-webkit-keyframes verticalFlip {
  0% {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
  }
}
@-moz-keyframes verticalFlip {
  0% {
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
  100% {
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
  }
}
@keyframes verticalFlip {
  0% {
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
  }
}
@-webkit-keyframes verticalFlipOut {
  0% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
}
@-moz-keyframes verticalFlipOut {
  0% {
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
  }
  100% {
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
}
@keyframes verticalFlipOut {
  0% {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    opacity: 0;
  }
}
/*--------------
     Fades
---------------*/
/* Fade */
@-webkit-keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
/* Fade Up */
@-webkit-keyframes fadeUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes fadeUp {
  0% {
    opacity: 0;
    -moz-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fadeUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes fadeUpOut {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}
@-moz-keyframes fadeUpOut {
  0% {
    opacity: 1;
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -moz-transform: translateY(20px);
    transform: translateY(20px);
  }
}
@keyframes fadeUpOut {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    transform: translateY(20px);
  }
}
/* Fade Down */
@-webkit-keyframes fadeDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes fadeDown {
  0% {
    opacity: 0;
    -moz-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes fadeDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes fadeDownOut {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@-moz-keyframes fadeDownOut {
  0% {
    opacity: 1;
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -moz-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
@keyframes fadeDownOut {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -moz-transform: translateY(-20px);
    transform: translateY(-20px);
  }
}
/*--------------
      Scale
---------------*/
/* Scale */
@-webkit-keyframes scale {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@-moz-keyframes scale {
  0% {
    opacity: 0;
    -moz-transform: scale(0.7);
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    -moz-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes scale {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
  }
}
@-webkit-keyframes scaleOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
}
@-moz-keyframes scaleOut {
  0% {
    opacity: 1;
    -moz-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -moz-transform: scale(0.7);
    transform: scale(0.7);
  }
}
@keyframes scaleOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    transform: scale(0.7);
  }
}

/*
 * # Semantic - Video
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
/*******************************
            Video
*******************************/
.ui.video {
  position: relative;
  max-width: 100%;
}
/*--------------
     Content
---------------*/
/* Placeholder Image */
.ui.video .placeholder {
  background-color: #333333;
}
/* Play Icon Overlay */
.ui.video .play {
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)";
  filter: alpha(opacity=60);
  opacity: 0.6;
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.ui.video .play.icon:before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 11;
  font-size: 6rem;
  margin: -3rem 0em 0em -3rem;
  color: #FFFFFF;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
}
.ui.video .placeholder {
  display: block;
  width: 100%;
  height: 100%;
}
/* IFrame Embed */
.ui.video .embed {
  display: none;
}
/*******************************
            States
*******************************/
/*--------------
    Hover
---------------*/
.ui.video .play:hover {
  opacity: 1;
}
/*--------------
     Active
---------------*/
.ui.video.active .play,
.ui.video.active .placeholder {
  display: none;
}
.ui.video.active .embed {
  display: block;
}

/*
 * # Semantic Comment View
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Released: April 17 2013
 */
/*******************************
            Standard
*******************************/
/*--------------
    Comments
---------------*/
.ui.comments a {
  cursor: pointer;
}
/*--------------
     Comment
---------------*/
.ui.comments .comment {
  position: relative;
  margin-top: 0.5em;
  padding-top: 0.5em;
}
.ui.comments .comment:first-child {
  margin-top: 0em;
  padding-top: 0em;
}
/*--------------------
   Avatar (Optional)
---------------------*/
.ui.comments .comment .avatar {
  display: block;
  float: left;
  width: 4em;
}
.ui.comments .comment .avatar img {
  display: block;
  margin: 0em auto;
  width: 3em;
  height: 3em;
  border-radius: 500px;
}
/*--------------
     Content
---------------*/
.ui.comments .comment > .content,
.ui.comments .comment > .avatar {
  display: block;
}
.ui.comments .comment .avatar ~ .content {
  padding: 0em 1em;
}
/* If there is an avatar move content over */
.ui.comments .comment > .avatar ~ .content {
  padding-top: 0.25em;
  margin-left: 3.5em;
}
.ui.comments .comment .metadata {
  display: inline-block;
  margin-left: 0.3em;
  color: rgba(0, 0, 0, 0.4);
}
.ui.comments .comment .metadata > * {
  display: inline-block;
  margin: 0em 0.3em 0em 0em;
}
/*--------------------
     Comment Text
---------------------*/
.ui.comments .comment .text {
  margin: 0.25em 0em 0.5em;
  word-wrap: break-word;
}
/*--------------------
     User Actions
---------------------*/
.ui.comments .comment .actions {
  font-size: 0.9em;
}
.ui.comments .comment .actions a {
  display: inline-block;
  margin: 0em 0.3em 0em 0em;
  color: rgba(0, 0, 0, 0.3);
}
.ui.comments .comment .actions a.active,
.ui.comments .comment .actions a:hover {
  color: rgba(0, 0, 0, 0.6);
}
/*--------------------
      Reply Form
---------------------*/
.ui.comments .reply.form {
  margin-top: 0.75em;
  width: 100%;
  max-width: 30em;
}
.ui.comments .comment .reply.form {
  margin-left: 2em;
}
.ui.comments > .reply.form {
  margin-top: 1.5em;
  max-width: 40em;
}
.ui.comments .reply.form textarea {
  height: 12em;
}
/*--------------------
    Nested Comments
---------------------*/
.ui.comments .comment .comments {
  margin-top: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 1em;
}
.ui.comments .comment .comments:before {
  position: absolute;
  top: 0px;
  left: 0px;
}
/* One Deep */
.ui.comments > .comment .comments {
  margin-left: 2em;
}
/* Two Deep */
.ui.comments > .comment > .comments > .comment > .comments {
  margin-left: 1.75em;
}
/* Three Deep */
.ui.comments > .comment > .comments > .comment > .comments > .comment > .comments {
  margin-left: 1.5em;
}
/* Four Deep or more */
.ui.comments > .comment > .comments > .comment > .comments > .comment > .comments > .comment .comments {
  margin-left: 0.5em;
}
/*******************************
           Variations
*******************************/
/*--------------------
        Threaded
---------------------*/
.ui.threaded.comments .comment .comments {
  margin-left: 2em !important;
  padding-left: 2em !important;
  -webkit-box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05);
  box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05);
}
/*--------------------
        Minimal
---------------------*/
.ui.minimal.comments .comment .actions {
  opacity: 0;
  -webkit-transition: opacity 0.1s ease-out;
  -moz-transition: opacity 0.1s ease-out;
  transition: opacity 0.1s ease-out;
  -webkit-transition-delay: 0.1s;
  -moz-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
.ui.minimal.comments .comment > .content:hover > .actions {
  opacity: 1;
}
/*--------------------
       Sizes
---------------------*/
.ui.small.comments {
  font-size: 0.875em;
}

/*
 * # Activity Feed View
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Released: May 22, 2013
 */
/*******************************
         Activity Feed
*******************************/
.ui.feed a {
  cursor: pointer;
}
.ui.feed,
.ui.feed .event,
.ui.feed .label,
.ui.feed .content,
.ui.feed .extra {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
/*******************************
            Content
*******************************/
/* Event */
.ui.feed .event {
  width: 100%;
  display: table;
  padding: 1em;
}
.ui.feed .event:first-child {
  border-top: 0px;
}
.ui.feed .event:last-child {
  margin-bottom: 1em;
}
/* Event Label */
.ui.feed .label {
  width: 3em;
  display: table-cell;
  vertical-align: top;
  text-align: left;
}
.ui.feed .label .icon {
  font-size: 1.5em;
  padding: 0.5em;
  margin: 0em;
}
.ui.feed .label img {
  width: 3em;
  margin: 0em;
  border-radius: 50em;
}
.ui.feed .label + .content {
  padding: 0.75em 1em 0em;
}
/* Content */
.ui.feed .content {
  display: table-cell;
  vertical-align: top;
  text-align: left;
  word-wrap: break-word;
}
/* Date */
.ui.feed .content .date {
  float: right;
  padding-left: 1em;
  color: rgba(0, 0, 0, 0.4);
}
/* Summary */
.ui.feed .content .summary {
  color: rgba(0, 0, 0, 0.75);
}
.ui.feed .content .summary img {
  display: inline-block;
  margin-right: 0.25em;
  width: 4em;
  border-radius: 500px;
}
/* Additional Information */
.ui.feed .content .extra {
  margin: 1em 0em 0em;
  padding: 0.5em 0em 0em;
  color: rgba(0, 0, 0, 0.5);
}
.ui.feed .content .extra.images img {
  display: inline-block;
  margin-right: 0.25em;
  width: 6em;
}
.ui.feed .content .extra.text {
  padding: 0.5em 1em;
  border-left: 0.2em solid rgba(0, 0, 0, 0.1);
}
/*******************************
            Variations
*******************************/
.ui.small.feed {
  font-size: 0.875em;
}
.ui.small.feed .label img {
  width: 2.5em;
}
.ui.small.feed .label .icon {
  font-size: 1.25em;
}
.ui.feed .event {
  padding: 0.75em 0em;
}
.ui.small.feed .label + .content {
  padding: 0.5em 0.5em 0;
}
.ui.small.feed .content .extra.images img {
  width: 5em;
}
.ui.small.feed .content .extra {
  margin: 0.5em 0em 0em;
}
.ui.small.feed .content .extra.text {
  padding: 0.25em 0.5em;
}

/*
 * # Semantic Item View
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Released: April 17 2013
 */
/*******************************
            Standard
*******************************/
/*--------------
      Items
---------------*/
.ui.items {
  margin: 1em 0em 0em;
}
.ui.items:first-child {
  margin-top: 0em;
}
.ui.items:last-child {
  margin-bottom: -1em;
}
/* Force Clearing */
.ui.items:after {
  display: block;
  content: ' ';
  height: 0px;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
/*--------------
      Item
---------------*/
.ui.items > .row > .item,
.ui.items > .item {
  display: block;
  float: left;
  position: relative;
  top: 0px;
  width: 316px;
  min-height: 375px;
  margin: 0em 0.5em 2.5em;
  padding: 0em;
  background-color: #FFFFFF;
  line-height: 1.2;
  font-size: 1em;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  border-bottom: 0.2em solid rgba(0, 0, 0, 0.2);
  border-radius: 0.33em;
  -webkit-transition: -webkit-box-shadow 0.2s ease;
  -moz-transition: box-shadow 0.2s ease;
  transition: box-shadow 0.2s ease;
  padding: 0.5em;
}
.ui.items a.item,
.ui.items .item a {
  cursor: pointer;
}
.ui.items .item,
.ui.items .item > .image,
.ui.items .item > .image .overlay,
.ui.items .item > .content,
.ui.items .item > .content > .meta,
.ui.items .item > .content > .extra {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
/*--------------
      Images
---------------*/
.ui.items .item > .image {
  display: block;
  position: relative;
  background-color: rgba(0, 0, 0, 0.05);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.2em;
}
.ui.items .item > .image > img {
  display: block;
  width: 100%;
}
/*--------------
     Content
---------------*/
.ui.items .item > .content {
  padding: 0.75em 0.5em;
}
.ui.items .item > .content > .name {
  display: block;
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 0.2em;
  color: rgba(0, 0, 0, 0.7);
}
.ui.items .item > .content > .description {
  clear: both;
  margin: 0em 0em;
  color: rgba(0, 0, 0, 0.45);
}
.ui.items .item > .content > .description p {
  margin: 0em 0em 0.2em;
}
.ui.items .item > .content > .description p:last-child {
  margin-bottom: 0em;
}
/*--------------
      Meta
---------------*/
.ui.items .item .meta {
  float: right;
  color: rgba(0, 0, 0, 0.35);
}
.ui.items .item > .content > .meta + .name {
  float: left;
}
/*--------------
     Labels
---------------*/
/*-----star----- */
/* hover */
.ui.items .item .star.label:hover::after {
  border-right-color: #F6EFC3;
}
.ui.items .item .star.label:hover::after {
  border-top-color: #F6EFC3;
}
.ui.items .item .star.label:hover .icon {
  color: #ac9400;
}
/* active */
.ui.items .item .star.label.active::after {
  border-right-color: #F6EFC3;
}
.ui.items .item .star.label.active::after {
  border-top-color: #F6EFC3;
}
.ui.items .item .star.label.active .icon {
  color: #ac9400;
}
/*-----like----- */
/* hover */
.ui.items .item .like.label:hover::after {
  border-right-color: #F5E1E2;
}
.ui.items .item .like.label.active::after {
  border-top-color: #F5E1E2;
}
.ui.items .item .like.label:hover .icon {
  color: #ef404a;
}
/* active */
.ui.items .item .like.label.active::after {
  border-right-color: #F5E1E2;
}
.ui.items .item .like.label.active::after {
  border-top-color: #F5E1E2;
}
.ui.items .item .like.label.active .icon {
  color: #ef404a;
}
/*--------------
      Extra
---------------*/
.ui.items .item .extra {
  position: absolute;
  width: 100%;
  padding: 0em 0.5em;
  bottom: -2em;
  left: 0em;
  height: 1.5em;
  color: rgba(0, 0, 0, 0.25);
  -webkit-transition: color 0.2s ease;
  -moz-transition: color 0.2s ease;
  transition: color 0.2s ease;
}
.ui.items .item .extra > img {
  display: inline-block;
  border-radius: 500px 500px 500px 500px;
  margin-right: 0.25em;
  vertical-align: middle;
  width: 2em;
}
.ui.items .item .extra .left {
  float: left;
}
.ui.items .item .extra .right {
  float: right;
}
/*******************************
           States
*******************************/
.ui.items .item:hover {
  cursor: pointer;
  z-index: 5;
  -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
}
.ui.items .item:hover .extra {
  color: rgba(0, 0, 0, 0.5);
}
.ui.items .item:nth-of-type(6n+1):hover {
  border-bottom-color: #6ECFF5 !important;
}
.ui.items .item:nth-of-type(6n+2):hover {
  border-bottom-color: #5C6166 !important;
}
.ui.items .item:nth-of-type(6n+3):hover {
  border-bottom-color: #A1CF64 !important;
}
.ui.items .item:nth-of-type(6n+4):hover {
  border-bottom-color: #D95C5C !important;
}
.ui.items .item:nth-of-type(6n+5):hover {
  border-bottom-color: #00B5AD !important;
}
.ui.items .item:nth-of-type(6n+6):hover {
  border-bottom-color: #564F8A !important;
}
/*******************************
           Variations
*******************************/
/*--------------
    Connected
---------------*/
.ui.connected.items {
  display: table;
  width: 100%;
  margin-left: 0em !important;
  margin-right: 0em !important;
}
.ui.connected.items > .row > .item,
.ui.connected.items > .item {
  float: none;
  display: table-cell;
  vertical-align: top;
  height: auto;
  border-radius: 0px;
  margin: 0em;
  width: 33.33%;
}
.ui.connected.items > .row {
  display: table;
  margin: 0.5em 0em;
}
.ui.connected.items > .row:first-child {
  margin-top: 0em;
}
/* Borders */
.ui.connected.items > .item,
.ui.connected.items > .row:last-child > .item {
  border-bottom: 0.2em solid rgba(0, 0, 0, 0.2);
}
.ui.connected.items > .row:last-child > .item:first-child,
.ui.connected.items > .item:first-child {
  border-radius: 0em 0em 0em 0.33em;
}
.ui.connected.items > .row:last-child > .item:last-child,
.ui.connected.items > .item:last-child {
  border-radius: 0em 0em 0.33em 0em;
}
/* Hover */
.ui.connected.items .item:hover {
  border-bottom-width: 0.2em;
}
/* Item Count */
.ui.one.connected.items > .row > .item,
.ui.one.connected.items > .item {
  width: 50%;
  padding-left: 2%;
  padding-right: 2%;
}
.ui.two.connected.items > .row > .item,
.ui.two.connected.items > .item {
  width: 50%;
  padding-left: 1%;
  padding-right: 1%;
}
.ui.three.connected.items > .row > .item,
.ui.three.connected.items > .item {
  width: 33.333%;
  padding-left: 1%;
  padding-right: 1%;
}
.ui.four.connected.items > .row > .item,
.ui.four.connected.items > .item {
  width: 25%;
  padding-left: 0.5%;
  padding-right: 0.5%;
}
.ui.five.connected.items > .row > .item,
.ui.five.connected.items > .item {
  width: 20%;
  padding-left: 0.5%;
  padding-right: 0.5%;
}
.ui.six.connected.items > .row > .item,
.ui.six.connected.items > .item {
  width: 16.66%;
  padding-left: 0.5%;
  padding-right: 0.5%;
}
.ui.seven.connected.items > .row > .item,
.ui.seven.connected.items > .item {
  width: 14.28%;
  padding-left: 0.5%;
  padding-right: 0.5%;
}
.ui.eight.connected.items > .row > .item,
.ui.eight.connected.items > .item {
  width: 12.5%;
  padding-left: 0.25%;
  padding-right: 0.25%;
}
.ui.nine.connected.items > .row > .item,
.ui.nine.connected.items > .item {
  width: 11.11%;
  padding-left: 0.25%;
  padding-right: 0.25%;
}
.ui.ten.connected.items > .row > .item,
.ui.ten.connected.items > .item {
  width: 10%;
  padding-left: 0.2%;
  padding-right: 0.2%;
}
.ui.eleven.connected.items > .row > .item,
.ui.eleven.connected.items > .item {
  width: 9.09%;
  padding-left: 0.2%;
  padding-right: 0.2%;
}
.ui.twelve.connected.items > .row > .item,
.ui.twelve.connected.items > .item {
  width: 8.3333%;
  padding-left: 0.1%;
  padding-right: 0.1%;
}
/*-------------------
      Responsive
--------------------*/
@media only screen and (max-width: 768px) {
  .ui.stackable.items {
    display: block !important;
  }
  .ui.stackable.items > .item,
  .ui.stackable.items > .row > .item {
    display: block !important;
    height: auto !important;
    width: 100% !important;
    padding: 0% !important;
  }
}
/*--------------------
      Horizontal
---------------------*/
.ui.horizontal.items > .item,
.ui.items > .horizontal.item {
  display: table;
}
.ui.horizontal.items > .item > .image,
.ui.items > .horizontal.item > .image {
  display: table-cell;
  width: 50%;
}
.ui.horizontal.items > .item > .image + .content,
.ui.items > .horizontal.item > .image + .content {
  width: 50%;
  display: table-cell;
}
.ui.horizontal.items > .item > .content,
.ui.items > .horizontal.item > .content {
  padding: 1% 1.7% 11% 3%;
  vertical-align: top;
}
.ui.horizontal.items > .item > .meta,
.ui.items > .horizontal.item > .meta {
  position: absolute;
  padding: 0%;
  bottom: 7%;
  left: 3%;
  width: 94%;
}
.ui.horizontal.items > .item > .image + .content + .meta,
.ui.items > .horizontal.item > .image + .content + .meta {
  bottom: 7%;
  left: 53%;
  width: 44%;
}
.ui.horizontal.items > .item .avatar,
.ui.items > .horizontal.item .avatar {
  width: 11.5%;
}
.ui.items > .item .avatar {
  max-width: 25px;
}
/*--------------
    Item Count
---------------*/
.ui.one.items {
  margin-left: -2%;
  margin-right: -2%;
}
.ui.one.items > .item {
  width: 100%;
  margin-left: 2%;
  margin-right: 2%;
}
.ui.two.items {
  margin-left: -1%;
  margin-right: -1%;
}
.ui.two.items > .item {
  width: 48%;
  margin-left: 1%;
  margin-right: 1%;
}
.ui.two.items > .item:nth-child(2n+1) {
  clear: left;
}
.ui.three.items {
  margin-left: -1%;
  margin-right: -1%;
}
.ui.three.items > .item {
  width: 31.333%;
  margin-left: 1%;
  margin-right: 1%;
}
.ui.three.items > .item:nth-child(3n+1) {
  clear: left;
}
.ui.four.items {
  margin-left: -0.5%;
  margin-right: -0.5%;
}
.ui.four.items > .item {
  width: 24%;
  margin-left: 0.5%;
  margin-right: 0.5%;
}
.ui.four.items > .item:nth-child(4n+1) {
  clear: left;
}
.ui.five.items {
  margin-left: -0.5%;
  margin-right: -0.5%;
}
.ui.five.items > .item {
  width: 19%;
  margin-left: 0.5%;
  margin-right: 0.5%;
}
.ui.five.items > .item:nth-child(5n+1) {
  clear: left;
}
.ui.six.items {
  margin-left: -0.5%;
  margin-right: -0.5%;
}
.ui.six.items > .item {
  width: 15.66%;
  margin-left: 0.5%;
  margin-right: 0.5%;
}
.ui.six.items > .item:nth-child(6n+1) {
  clear: left;
}
.ui.seven.items {
  margin-left: -0.5%;
  margin-right: -0.5%;
}
.ui.seven.items > .item {
  width: 13.28%;
  margin-left: 0.5%;
  margin-right: 0.5%;
  font-size: 11px;
}
.ui.seven.items > .item:nth-child(7n+1) {
  clear: left;
}
.ui.eight.items {
  margin-left: -0.25%;
  margin-right: -0.25%;
}
.ui.eight.items > .item {
  width: 12.0%;
  margin-left: 0.25%;
  margin-right: 0.25%;
  font-size: 11px;
}
.ui.eight.items > .item:nth-child(8n+1) {
  clear: left;
}
.ui.nine.items {
  margin-left: -0.25%;
  margin-right: -0.25%;
}
.ui.nine.items > .item {
  width: 10.61%;
  margin-left: 0.25%;
  margin-right: 0.25%;
  font-size: 10px;
}
.ui.nine.items > .item:nth-child(9n+1) {
  clear: left;
}
.ui.ten.items {
  margin-left: -0.2%;
  margin-right: -0.2%;
}
.ui.ten.items > .item {
  width: 9.6%;
  margin-left: 0.2%;
  margin-right: 0.2%;
  font-size: 10px;
}
.ui.ten.items > .item:nth-child(10n+1) {
  clear: left;
}
.ui.eleven.items {
  margin-left: -0.2%;
  margin-right: -0.2%;
}
.ui.eleven.items > .item {
  width: 8.69%;
  margin-left: 0.2%;
  margin-right: 0.2%;
  font-size: 9px;
}
.ui.eleven.items > .item:nth-child(11n+1) {
  clear: left;
}
.ui.twelve.items {
  margin-left: -0.1%;
  margin-right: -0.1%;
}
.ui.twelve.items > .item {
  width: 8.1333%;
  margin-left: 0.1%;
  margin-right: 0.1%;
  font-size: 9px;
}
.ui.twelve.items > .item:nth-child(12n+1) {
  clear: left;
}

/*
 * # Semantic List - Flat
 * http://github.com/jlukic/semantic-ui/
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Released: April 26 2013
 */
/*******************************
            List
*******************************/
ul.ui.list,
ol.ui.list,
.ui.list {
  list-style-type: none;
  margin: 1em 0em;
  padding: 0em;
}
ul.ui.list ul,
ol.ui.list ol,
.ui.list .list {
  margin: 0em;
  padding: 0.5em 0em 0.5em 1em;
}
ul.ui.list:first-child,
ol.ui.list:first-child,
.ui.list:first-child {
  margin-top: 0em;
}
ul.ui.list:last-child,
ol.ui.list:last-child,
.ui.list:last-child {
  margin-bottom: 0em;
}
/*******************************
            Content
*******************************/
/* List Item */
ul.ui.list li,
ol.ui.list li,
.ui.list .item {
  display: list-item;
  list-style-type: none;
  list-style-position: inside;
  padding: 0.3em 0em;
  line-height: 1.2em;
}
.ui.list .item:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
/* Sub-List */
.ui.list .list {
  clear: both;
}
/* Icon */
.ui.list .item > .icon {
  display: block;
  float: left;
  margin: 0em 1em 0em 0em;
  padding: 0.1em 0em 0em 0em;
}
.ui.list .item > .icon:only-child {
  display: inline-block;
}
.ui.horizontal.list .item > .icon {
  margin: 0em;
  padding: 0em 0.25em 0em 0em;
}
.ui.horizontal.list .item > .icon,
.ui.horizontal.list .item > .icon + .content {
  float: none;
  display: inline-block;
}
/* Image */
.ui.list .item > img {
  display: block;
  float: left;
  margin-right: 1em;
  vertical-align: middle;
}
/* Content */
.ui.list .item > .content {
  display: inline-block;
  vertical-align: middle;
  line-height: 1.2em;
}
.ui.list .item > .icon + .content {
  display: table-cell;
  vertical-align: top;
}
/* Link */
.ui.list a {
  cursor: pointer;
}
.ui.list a .icon {
  color: rgba(0, 0, 0, 0.6);
  -webkit-transition: color 0.2s ease;
  -moz-transition: color 0.2s ease;
  transition: color 0.2s ease;
}
/* Header */
.ui.list .header {
  font-weight: bold;
}
.ui.list .description {
  color: rgba(0, 0, 0, 0.5);
}
/* Floated Content */
.ui.list .item > .left.floated {
  margin-right: 1em;
  float: left;
}
.ui.list .item > .right.floated {
  margin-left: 1em;
  float: right;
}
/*******************************
            Types
*******************************/
/*-------------------
      Horizontal
--------------------*/
.ui.horizontal.list {
  display: inline-block;
  font-size: 0em;
}
.ui.horizontal.list > .item {
  display: inline-block;
  margin-left: 1em;
  font-size: 1rem;
}
.ui.horizontal.list > .item:first-child {
  margin-left: 0em;
}
.ui.horizontal.list .list {
  padding-left: 0em;
  padding-bottom: 0em;
}
/*******************************
             States
*******************************/
/*-------------------
        Hover
--------------------*/
.ui.list a:hover .icon {
  color: rgba(0, 0, 0, 0.8);
}
/*******************************
           Variations
*******************************/
/*-------------------
       Inverted
--------------------*/
.ui.inverted.list a .icon {
  color: rgba(255, 255, 255, 0.6);
}
.ui.inverted.list .description {
  color: rgba(255, 255, 255, 0.8);
}
.ui.inverted.link.list .item {
  color: rgba(255, 255, 255, 0.4);
}
/*-------------------
       Link
--------------------*/
.ui.link.list .item {
  color: rgba(0, 0, 0, 0.3);
}
.ui.link.list a.item,
.ui.link.list .item a {
  color: rgba(0, 0, 0, 0.5);
}
.ui.link.list a.item:hover,
.ui.link.list .item a:hover {
  color: rgba(0, 0, 0, 0.8);
}
.ui.link.list a.item:active,
.ui.link.list .item a:active {
  color: rgba(0, 0, 0, 0.8);
}
.ui.link.list a.active.item,
.ui.link.list .active.item a {
  color: rgba(0, 0, 0, 0.8);
}
/* Inverted */
.ui.inverted.link.list a.item,
.ui.inverted.link.list .item a {
  color: rgba(255, 255, 255, 0.6);
}
.ui.inverted.link.list a.item:hover,
.ui.inverted.link.list .item a:hover {
  color: rgba(255, 255, 255, 0.8);
}
.ui.inverted.link.list a.item:active,
.ui.inverted.link.list .item a:active {
  color: rgba(255, 255, 255, 0.9);
}
.ui.inverted.link.list a.active.item,
.ui.inverted.link.list .active.item a {
  color: rgba(255, 255, 255, 0.8);
}
/*-------------------
      Selection
--------------------*/
.ui.selection.list .item {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.4);
  padding: 0.5em;
  -webkit-transition: 0.2s color ease, 0.2s padding-left ease, 0.2s background-color ease;
  -moz-transition: 0.2s color ease, 0.2s padding-left ease, 0.2s background-color ease;
  transition: 0.2s color ease, 0.2s padding-left ease, 0.2s background-color ease;
}
.ui.selection.list .item:hover {
  background-color: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.7);
}
.ui.selection.list .item:active {
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.7);
}
.ui.selection.list .item.active {
  background-color: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.7);
}
.ui.animated.list .item {
  -webkit-transition: 0.2s color ease, 0.2s padding-left ease, 0.2s background-color ease;
  -moz-transition: 0.2s color ease, 0.2s padding-left ease, 0.2s background-color ease;
  transition: 0.2s color ease, 0.2s padding-left ease, 0.2s background-color ease;
}
.ui.animated.list:not(.horizontal) .item:hover {
  padding-left: 1em;
}
.ui.animated.list:not(.horizontal) .item:hover .item:hover {
  padding-left: 0.5em;
}
/* Inverted */
.ui.inverted.selection.list .item {
  color: rgba(255, 255, 255, 0.6);
}
.ui.inverted.selection.list .item:hover {
  background-color: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.8);
}
.ui.inverted.selection.list .item:active {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}
.ui.inverted.selection.list .item.active {
  background-color: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
}
/*-------------------
      Bulleted
--------------------*/
ul.ui.list,
.ui.bulleted.list {
  margin-left: 1.5em;
}
ul.ui.list li,
.ui.bulleted.list .item {
  position: relative;
}
ul.ui.list li:before,
.ui.bulleted.list .item:before {
  position: absolute;
  left: -1.5em;
  content: '•';
}
ul.ui.list ul,
.ui.bulleted.list .list {
  padding-left: 1.5em;
}
/* Horizontal Bulleted */
ul.ui.horizontal.bulleted.list,
.ui.horizontal.bulleted.list {
  margin-left: 0em;
}
ul.ui.horizontal.bulleted.list li,
.ui.horizontal.bulleted.list .item {
  margin-left: 1.5em;
}
ul.ui.horizontal.bulleted.list li:before,
.ui.horizontal.bulleted.list .item:before {
  left: -0.9em;
}
ul.ui.horizontal.bulleted.list li:first-child,
.ui.horizontal.bulleted.list .item:first-child {
  margin-left: 0em;
}
ul.ui.horizontal.bulleted.list li:first-child::before,
.ui.horizontal.bulleted.list .item:first-child::before {
  display: none;
}
/*-------------------
       Ordered
--------------------*/
ol.ui.list,
.ui.ordered.list {
  counter-reset: ordered;
  margin-left: 2em;
  list-style-type: none;
}
ol.ui.list li,
.ui.ordered.list .item {
  list-style-type: none;
  position: relative;
}
ol.ui.list li:before,
.ui.ordered.list .item:before {
  position: absolute;
  left: -2em;
  counter-increment: ordered;
  content: counters(ordered, ".");
  text-align: right;
  vertical-align: top;
  opacity: 0.75;
}
ol.ui.list ol,
.ui.ordered.list .list {
  counter-reset: ordered;
  padding-left: 2.5em;
}
ol.ui.list ol li:before,
.ui.ordered.list .list .item:before {
  left: -2.5em;
}
/* Horizontal Ordered */
ol.ui.horizontal.list,
.ui.ordered.horizontal.list {
  margin-left: 0em;
}
ol.ui.horizontal.list li:before,
.ui.ordered.horizontal.list .item:before {
  position: static;
  left: 0em;
  margin: 0em 0.5em 0em 0em;
}
/*-------------------
       Divided
--------------------*/
.ui.divided.list > .item,
.ui.divided.list:not(.horizontal) > .list {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 0.5em;
  padding-right: 0.5em;
}
.ui.divided.list .item .menu .item {
  border-width: 0px;
}
.ui.divided.list .item:first-child {
  border-top-width: 0px;
}
/* Sub Menu */
.ui.divided.list:not(.horizontal) .list {
  margin-left: -0.5em;
  margin-right: -0.5em;
}
.ui.divided.list:not(.horizontal) .list .item {
  padding-left: 1em;
  padding-right: 1em;
}
.ui.divided.list:not(.horizontal) .list .item:first-child {
  border-top-width: 1px;
}
/* Divided bulleted */
.ui.divided.bulleted.list {
  margin-left: 0em;
}
.ui.divided.bulleted.list .item {
  padding-left: 1.5em;
}
.ui.divided.bulleted.list .item:before {
  left: 0.5em;
}
/* Divided ordered */
.ui.divided.ordered.list {
  margin-left: 0em;
}
.ui.divided.ordered.list > .item {
  padding-left: 2em;
  padding-right: 2em;
}
.ui.divided.ordered.list > .item:before {
  left: 0.5em;
}
.ui.divided.ordered.list .item .list {
  margin-left: -2em;
  margin-right: -2em;
}
/* Divided horizontal */
.ui.divided.horizontal.list {
  margin-left: 0em;
}
.ui.divided.horizontal.list > .item {
  border-top: none;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  line-height: 0.6em;
}
.ui.horizontal.divided.list > .item:first-child {
  border-left: none;
  padding-left: 0em;
}
/* Inverted */
.ui.divided.inverted.list > .item,
.ui.divided.inverted.list > .list {
  border-color: rgba(255, 255, 255, 0.2);
}
.ui.divided.inverted.horizontal.list .item {
  border-color: rgba(255, 255, 255, 0.2);
}
/*-------------------
        Celled
--------------------*/
.ui.celled.list > .item,
.ui.celled.list > .list {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 0.5em;
  padding-right: 0.5em;
}
.ui.celled.list > .item:last-child {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
/* Sub Menu */
.ui.celled.list .item .list {
  margin-left: -0.5em;
  margin-right: -0.5em;
}
.ui.celled.list .item .list .item {
  border-width: 0px;
}
.ui.celled.list .list .item:first-child {
  border-top-width: 0px;
}
/* Celled Bulleted */
.ui.celled.bulleted.list {
  margin-left: 0em;
}
.ui.celled.bulleted.list > .item {
  padding-left: 1.5em;
}
.ui.celled.bulleted.list > .item:before {
  left: 0.5em;
}
/* Celled Ordered */
.ui.celled.ordered.list {
  margin-left: 0em;
}
.ui.celled.ordered.list .item {
  padding-left: 2em;
  padding-right: 2em;
}
.ui.celled.ordered.list .item:before {
  left: 0.5em;
}
.ui.celled.ordered.list .item .list {
  margin-left: -2em;
  margin-right: -2em;
}
/* Celled Horizontal */
.ui.horizontal.celled.list {
  margin-left: 0em;
}
.ui.horizontal.celled.list .item {
  border-top: none;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  line-height: 0.6em;
}
.ui.horizontal.celled.list .item:last-child {
  border-bottom: none;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
/* Inverted */
.ui.celled.inverted.list > .item,
.ui.celled.inverted.list > .list {
  border-color: rgba(255, 255, 255, 0.2);
}
.ui.celled.inverted.horizontal.list .item {
  border-color: rgba(255, 255, 255, 0.2);
}
/*-------------------
       Relaxed
--------------------*/
.ui.relaxed.list:not(.horizontal) .item {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.ui.relaxed.list .header {
  margin-bottom: 0.25em;
}
.ui.horizontal.relaxed.list .item {
  padding-left: 1.25em;
  padding-right: 1.25em;
}
.ui.very.relaxed.list:not(.horizontal) .item {
  padding-top: 1em;
  padding-bottom: 1em;
}
.ui.very.relaxed.list .header {
  margin-bottom: 0.5em;
}
.ui.horizontal.very.relaxed.list .item {
  padding-left: 2em;
  padding-right: 2em;
}
/*-------------------
      Sizes
--------------------*/
.ui.mini.list .item {
  font-size: 0.7rem;
}
.ui.tiny.list .item {
  font-size: 0.8125rem;
}
.ui.small.list .item {
  font-size: 0.875rem;
}
.ui.list .item {
  font-size: 1em;
}
.ui.large.list .item {
  font-size: 1.125rem;
}
.ui.big.list .item {
  font-size: 1.25rem;
}
.ui.huge.list .item {
  font-size: 1.375rem;
}
.ui.massive.list .item {
  font-size: 1.5rem;
}

/*
 * # Statistic
 *
 *
 * Copyright 2013 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Released: Aug 20, 2013
 */
/*******************************
           Statistic
*******************************/
.ui.statistic {
  text-align: center;
}
/*******************************
            Content
*******************************/
.ui.statistic > .number {
  font-size: 4em;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
}
.ui.statistic > .description {
  opacity: 0.8;
}

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
}

body {
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
h1 {
  margin: .67em 0;
  font-size: 2em;
}
mark {
  color: #000;
  background: #ff0;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sup {
  top: -.5em;
}
sub {
  bottom: -.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 1em 40px;
}
hr {
  height: 0;
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}
pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  padding: .35em .625em .75em;
  margin: 0 2px;
  border: 1px solid #c0c0c0;
}
legend {
  padding: 0;
  border: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
td,
th {
  padding: 0;
}
/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
@media print {
  *,
  *:before,
  *:after {
    color: #000 !important;
    text-shadow: none !important;
    background: transparent !important;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;

    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  .navbar {
    display: none;
  }
  .btn > .caret,
  .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }
  .label {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
}
@font-face {
  font-family: 'Glyphicons Halflings';

  src: url('../fonts/glyphicons-halflings-regular.eot');
  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-asterisk:before {
  content: "\\002a";
}
.glyphicon-plus:before {
  content: "\\002b";
}
.glyphicon-euro:before,
.glyphicon-eur:before {
  content: "\\20ac";
}
.glyphicon-minus:before {
  content: "\\2212";
}
.glyphicon-cloud:before {
  content: "\\2601";
}
.glyphicon-envelope:before {
  content: "\\2709";
}
.glyphicon-pencil:before {
  content: "\\270f";
}
.glyphicon-glass:before {
  content: "\\e001";
}
.glyphicon-music:before {
  content: "\\e002";
}
.glyphicon-search:before {
  content: "\\e003";
}
.glyphicon-heart:before {
  content: "\\e005";
}
.glyphicon-star:before {
  content: "\\e006";
}
.glyphicon-star-empty:before {
  content: "\\e007";
}
.glyphicon-user:before {
  content: "\\e008";
}
.glyphicon-film:before {
  content: "\\e009";
}
.glyphicon-th-large:before {
  content: "\\e010";
}
.glyphicon-th:before {
  content: "\\e011";
}
.glyphicon-th-list:before {
  content: "\\e012";
}
.glyphicon-ok:before {
  content: "\\e013";
}
.glyphicon-remove:before {
  content: "\\e014";
}
.glyphicon-zoom-in:before {
  content: "\\e015";
}
.glyphicon-zoom-out:before {
  content: "\\e016";
}
.glyphicon-off:before {
  content: "\\e017";
}
.glyphicon-signal:before {
  content: "\\e018";
}
.glyphicon-cog:before {
  content: "\\e019";
}
.glyphicon-trash:before {
  content: "\\e020";
}
.glyphicon-home:before {
  content: "\\e021";
}
.glyphicon-file:before {
  content: "\\e022";
}
.glyphicon-time:before {
  content: "\\e023";
}
.glyphicon-road:before {
  content: "\\e024";
}
.glyphicon-download-alt:before {
  content: "\\e025";
}
.glyphicon-download:before {
  content: "\\e026";
}
.glyphicon-upload:before {
  content: "\\e027";
}
.glyphicon-inbox:before {
  content: "\\e028";
}
.glyphicon-play-circle:before {
  content: "\\e029";
}
.glyphicon-repeat:before {
  content: "\\e030";
}
.glyphicon-refresh:before {
  content: "\\e031";
}
.glyphicon-list-alt:before {
  content: "\\e032";
}
.glyphicon-lock:before {
  content: "\\e033";
}
.glyphicon-flag:before {
  content: "\\e034";
}
.glyphicon-headphones:before {
  content: "\\e035";
}
.glyphicon-volume-off:before {
  content: "\\e036";
}
.glyphicon-volume-down:before {
  content: "\\e037";
}
.glyphicon-volume-up:before {
  content: "\\e038";
}
.glyphicon-qrcode:before {
  content: "\\e039";
}
.glyphicon-barcode:before {
  content: "\\e040";
}
.glyphicon-tag:before {
  content: "\\e041";
}
.glyphicon-tags:before {
  content: "\\e042";
}
.glyphicon-book:before {
  content: "\\e043";
}
.glyphicon-bookmark:before {
  content: "\\e044";
}
.glyphicon-print:before {
  content: "\\e045";
}
.glyphicon-camera:before {
  content: "\\e046";
}
.glyphicon-font:before {
  content: "\\e047";
}
.glyphicon-bold:before {
  content: "\\e048";
}
.glyphicon-italic:before {
  content: "\\e049";
}
.glyphicon-text-height:before {
  content: "\\e050";
}
.glyphicon-text-width:before {
  content: "\\e051";
}
.glyphicon-align-left:before {
  content: "\\e052";
}
.glyphicon-align-center:before {
  content: "\\e053";
}
.glyphicon-align-right:before {
  content: "\\e054";
}
.glyphicon-align-justify:before {
  content: "\\e055";
}
.glyphicon-list:before {
  content: "\\e056";
}
.glyphicon-indent-left:before {
  content: "\\e057";
}
.glyphicon-indent-right:before {
  content: "\\e058";
}
.glyphicon-facetime-video:before {
  content: "\\e059";
}
.glyphicon-picture:before {
  content: "\\e060";
}
.glyphicon-map-marker:before {
  content: "\\e062";
}
.glyphicon-adjust:before {
  content: "\\e063";
}
.glyphicon-tint:before {
  content: "\\e064";
}
.glyphicon-edit:before {
  content: "\\e065";
}
.glyphicon-share:before {
  content: "\\e066";
}
.glyphicon-check:before {
  content: "\\e067";
}
.glyphicon-move:before {
  content: "\\e068";
}
.glyphicon-step-backward:before {
  content: "\\e069";
}
.glyphicon-fast-backward:before {
  content: "\\e070";
}
.glyphicon-backward:before {
  content: "\\e071";
}
.glyphicon-play:before {
  content: "\\e072";
}
.glyphicon-pause:before {
  content: "\\e073";
}
.glyphicon-stop:before {
  content: "\\e074";
}
.glyphicon-forward:before {
  content: "\\e075";
}
.glyphicon-fast-forward:before {
  content: "\\e076";
}
.glyphicon-step-forward:before {
  content: "\\e077";
}
.glyphicon-eject:before {
  content: "\\e078";
}
.glyphicon-chevron-left:before {
  content: "\\e079";
}
.glyphicon-chevron-right:before {
  content: "\\e080";
}
.glyphicon-plus-sign:before {
  content: "\\e081";
}
.glyphicon-minus-sign:before {
  content: "\\e082";
}
.glyphicon-remove-sign:before {
  content: "\\e083";
}
.glyphicon-ok-sign:before {
  content: "\\e084";
}
.glyphicon-question-sign:before {
  content: "\\e085";
}
.glyphicon-info-sign:before {
  content: "\\e086";
}
.glyphicon-screenshot:before {
  content: "\\e087";
}
.glyphicon-remove-circle:before {
  content: "\\e088";
}
.glyphicon-ok-circle:before {
  content: "\\e089";
}
.glyphicon-ban-circle:before {
  content: "\\e090";
}
.glyphicon-arrow-left:before {
  content: "\\e091";
}
.glyphicon-arrow-right:before {
  content: "\\e092";
}
.glyphicon-arrow-up:before {
  content: "\\e093";
}
.glyphicon-arrow-down:before {
  content: "\\e094";
}
.glyphicon-share-alt:before {
  content: "\\e095";
}
.glyphicon-resize-full:before {
  content: "\\e096";
}
.glyphicon-resize-small:before {
  content: "\\e097";
}
.glyphicon-exclamation-sign:before {
  content: "\\e101";
}
.glyphicon-gift:before {
  content: "\\e102";
}
.glyphicon-leaf:before {
  content: "\\e103";
}
.glyphicon-fire:before {
  content: "\\e104";
}
.glyphicon-eye-open:before {
  content: "\\e105";
}
.glyphicon-eye-close:before {
  content: "\\e106";
}
.glyphicon-warning-sign:before {
  content: "\\e107";
}
.glyphicon-plane:before {
  content: "\\e108";
}
.glyphicon-calendar:before {
  content: "\\e109";
}
.glyphicon-random:before {
  content: "\\e110";
}
.glyphicon-comment:before {
  content: "\\e111";
}
.glyphicon-magnet:before {
  content: "\\e112";
}
.glyphicon-chevron-up:before {
  content: "\\e113";
}
.glyphicon-chevron-down:before {
  content: "\\e114";
}
.glyphicon-retweet:before {
  content: "\\e115";
}
.glyphicon-shopping-cart:before {
  content: "\\e116";
}
.glyphicon-folder-close:before {
  content: "\\e117";
}
.glyphicon-folder-open:before {
  content: "\\e118";
}
.glyphicon-resize-vertical:before {
  content: "\\e119";
}
.glyphicon-resize-horizontal:before {
  content: "\\e120";
}
.glyphicon-hdd:before {
  content: "\\e121";
}
.glyphicon-bullhorn:before {
  content: "\\e122";
}
.glyphicon-bell:before {
  content: "\\e123";
}
.glyphicon-certificate:before {
  content: "\\e124";
}
.glyphicon-thumbs-up:before {
  content: "\\e125";
}
.glyphicon-thumbs-down:before {
  content: "\\e126";
}
.glyphicon-hand-right:before {
  content: "\\e127";
}
.glyphicon-hand-left:before {
  content: "\\e128";
}
.glyphicon-hand-up:before {
  content: "\\e129";
}
.glyphicon-hand-down:before {
  content: "\\e130";
}
.glyphicon-circle-arrow-right:before {
  content: "\\e131";
}
.glyphicon-circle-arrow-left:before {
  content: "\\e132";
}
.glyphicon-circle-arrow-up:before {
  content: "\\e133";
}
.glyphicon-circle-arrow-down:before {
  content: "\\e134";
}
.glyphicon-globe:before {
  content: "\\e135";
}
.glyphicon-wrench:before {
  content: "\\e136";
}
.glyphicon-tasks:before {
  content: "\\e137";
}
.glyphicon-filter:before {
  content: "\\e138";
}
.glyphicon-briefcase:before {
  content: "\\e139";
}
.glyphicon-fullscreen:before {
  content: "\\e140";
}
.glyphicon-dashboard:before {
  content: "\\e141";
}
.glyphicon-paperclip:before {
  content: "\\e142";
}
.glyphicon-heart-empty:before {
  content: "\\e143";
}
.glyphicon-link:before {
  content: "\\e144";
}
.glyphicon-phone:before {
  content: "\\e145";
}
.glyphicon-pushpin:before {
  content: "\\e146";
}
.glyphicon-usd:before {
  content: "\\e148";
}
.glyphicon-gbp:before {
  content: "\\e149";
}
.glyphicon-sort:before {
  content: "\\e150";
}
.glyphicon-sort-by-alphabet:before {
  content: "\\e151";
}
.glyphicon-sort-by-alphabet-alt:before {
  content: "\\e152";
}
.glyphicon-sort-by-order:before {
  content: "\\e153";
}
.glyphicon-sort-by-order-alt:before {
  content: "\\e154";
}
.glyphicon-sort-by-attributes:before {
  content: "\\e155";
}
.glyphicon-sort-by-attributes-alt:before {
  content: "\\e156";
}
.glyphicon-unchecked:before {
  content: "\\e157";
}
.glyphicon-expand:before {
  content: "\\e158";
}
.glyphicon-collapse-down:before {
  content: "\\e159";
}
.glyphicon-collapse-up:before {
  content: "\\e160";
}
.glyphicon-log-in:before {
  content: "\\e161";
}
.glyphicon-flash:before {
  content: "\\e162";
}
.glyphicon-log-out:before {
  content: "\\e163";
}
.glyphicon-new-window:before {
  content: "\\e164";
}
.glyphicon-record:before {
  content: "\\e165";
}
.glyphicon-save:before {
  content: "\\e166";
}
.glyphicon-open:before {
  content: "\\e167";
}
.glyphicon-saved:before {
  content: "\\e168";
}
.glyphicon-import:before {
  content: "\\e169";
}
.glyphicon-export:before {
  content: "\\e170";
}
.glyphicon-send:before {
  content: "\\e171";
}
.glyphicon-floppy-disk:before {
  content: "\\e172";
}
.glyphicon-floppy-saved:before {
  content: "\\e173";
}
.glyphicon-floppy-remove:before {
  content: "\\e174";
}
.glyphicon-floppy-save:before {
  content: "\\e175";
}
.glyphicon-floppy-open:before {
  content: "\\e176";
}
.glyphicon-credit-card:before {
  content: "\\e177";
}
.glyphicon-transfer:before {
  content: "\\e178";
}
.glyphicon-cutlery:before {
  content: "\\e179";
}
.glyphicon-header:before {
  content: "\\e180";
}
.glyphicon-compressed:before {
  content: "\\e181";
}
.glyphicon-earphone:before {
  content: "\\e182";
}
.glyphicon-phone-alt:before {
  content: "\\e183";
}
.glyphicon-tower:before {
  content: "\\e184";
}
.glyphicon-stats:before {
  content: "\\e185";
}
.glyphicon-sd-video:before {
  content: "\\e186";
}
.glyphicon-hd-video:before {
  content: "\\e187";
}
.glyphicon-subtitles:before {
  content: "\\e188";
}
.glyphicon-sound-stereo:before {
  content: "\\e189";
}
.glyphicon-sound-dolby:before {
  content: "\\e190";
}
.glyphicon-sound-5-1:before {
  content: "\\e191";
}
.glyphicon-sound-6-1:before {
  content: "\\e192";
}
.glyphicon-sound-7-1:before {
  content: "\\e193";
}
.glyphicon-copyright-mark:before {
  content: "\\e194";
}
.glyphicon-registration-mark:before {
  content: "\\e195";
}
.glyphicon-cloud-download:before {
  content: "\\e197";
}
.glyphicon-cloud-upload:before {
  content: "\\e198";
}
.glyphicon-tree-conifer:before {
  content: "\\e199";
}
.glyphicon-tree-deciduous:before {
  content: "\\e200";
}
.glyphicon-cd:before {
  content: "\\e201";
}
.glyphicon-save-file:before {
  content: "\\e202";
}
.glyphicon-open-file:before {
  content: "\\e203";
}
.glyphicon-level-up:before {
  content: "\\e204";
}
.glyphicon-copy:before {
  content: "\\e205";
}
.glyphicon-paste:before {
  content: "\\e206";
}
.glyphicon-alert:before {
  content: "\\e209";
}
.glyphicon-equalizer:before {
  content: "\\e210";
}
.glyphicon-king:before {
  content: "\\e211";
}
.glyphicon-queen:before {
  content: "\\e212";
}
.glyphicon-pawn:before {
  content: "\\e213";
}
.glyphicon-bishop:before {
  content: "\\e214";
}
.glyphicon-knight:before {
  content: "\\e215";
}
.glyphicon-baby-formula:before {
  content: "\\e216";
}
.glyphicon-tent:before {
  content: "\\26fa";
}
.glyphicon-blackboard:before {
  content: "\\e218";
}
.glyphicon-bed:before {
  content: "\\e219";
}
.glyphicon-apple:before {
  content: "\\f8ff";
}
.glyphicon-erase:before {
  content: "\\e221";
}
.glyphicon-hourglass:before {
  content: "\\231b";
}
.glyphicon-lamp:before {
  content: "\\e223";
}
.glyphicon-duplicate:before {
  content: "\\e224";
}
.glyphicon-piggy-bank:before {
  content: "\\e225";
}
.glyphicon-scissors:before {
  content: "\\e226";
}
.glyphicon-bitcoin:before {
  content: "\\e227";
}
.glyphicon-btc:before {
  content: "\\e227";
}
.glyphicon-xbt:before {
  content: "\\e227";
}
.glyphicon-yen:before {
  content: "\\00a5";
}
.glyphicon-jpy:before {
  content: "\\00a5";
}
.glyphicon-ruble:before {
  content: "\\20bd";
}
.glyphicon-rub:before {
  content: "\\20bd";
}
.glyphicon-scale:before {
  content: "\\e230";
}
.glyphicon-ice-lolly:before {
  content: "\\e231";
}
.glyphicon-ice-lolly-tasted:before {
  content: "\\e232";
}
.glyphicon-education:before {
  content: "\\e233";
}
.glyphicon-option-horizontal:before {
  content: "\\e234";
}
.glyphicon-option-vertical:before {
  content: "\\e235";
}
.glyphicon-menu-hamburger:before {
  content: "\\e236";
}
.glyphicon-modal-window:before {
  content: "\\e237";
}
.glyphicon-oil:before {
  content: "\\e238";
}
.glyphicon-grain:before {
  content: "\\e239";
}
.glyphicon-sunglasses:before {
  content: "\\e240";
}
.glyphicon-text-size:before {
  content: "\\e241";
}
.glyphicon-text-color:before {
  content: "\\e242";
}
.glyphicon-text-background:before {
  content: "\\e243";
}
.glyphicon-object-align-top:before {
  content: "\\e244";
}
.glyphicon-object-align-bottom:before {
  content: "\\e245";
}
.glyphicon-object-align-horizontal:before {
  content: "\\e246";
}
.glyphicon-object-align-left:before {
  content: "\\e247";
}
.glyphicon-object-align-vertical:before {
  content: "\\e248";
}
.glyphicon-object-align-right:before {
  content: "\\e249";
}
.glyphicon-triangle-right:before {
  content: "\\e250";
}
.glyphicon-triangle-left:before {
  content: "\\e251";
}
.glyphicon-triangle-bottom:before {
  content: "\\e252";
}
.glyphicon-triangle-top:before {
  content: "\\e253";
}
.glyphicon-console:before {
  content: "\\e254";
}
.glyphicon-superscript:before {
  content: "\\e255";
}
.glyphicon-subscript:before {
  content: "\\e256";
}
.glyphicon-menu-left:before {
  content: "\\e257";
}
.glyphicon-menu-right:before {
  content: "\\e258";
}
.glyphicon-menu-down:before {
  content: "\\e259";
}
.glyphicon-menu-up:before {
  content: "\\e260";
}
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
html {
  font-size: 10px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
}
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #23527c;
  text-decoration: underline;
}
a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
figure {
  margin: 0;
}
img {
  vertical-align: middle;
}
.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
.img-rounded {
  border-radius: 6px;
}
.img-thumbnail {
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
       -o-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
[role="button"] {
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small,
.h1 small,
.h2 small,
.h3 small,
.h4 small,
.h5 small,
.h6 small,
h1 .small,
h2 .small,
h3 .small,
h4 .small,
h5 .small,
h6 .small,
.h1 .small,
.h2 .small,
.h3 .small,
.h4 .small,
.h5 .small,
.h6 .small {
  font-weight: normal;
  line-height: 1;
  color: #777;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
h1 small,
.h1 small,
h2 small,
.h2 small,
h3 small,
.h3 small,
h1 .small,
.h1 .small,
h2 .small,
.h2 .small,
h3 .small,
.h3 .small {
  font-size: 65%;
}
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
h4 small,
.h4 small,
h5 small,
.h5 small,
h6 small,
.h6 small,
h4 .small,
.h4 .small,
h5 .small,
.h5 .small,
h6 .small,
.h6 .small {
  font-size: 75%;
}
h1,
.h1 {
  font-size: 36px;
}
h2,
.h2 {
  font-size: 30px;
}
h3,
.h3 {
  font-size: 24px;
}
h4,
.h4 {
  font-size: 18px;
}
h5,
.h5 {
  font-size: 14px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 10px;
}
.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
small,
.small {
  font-size: 85%;
}
mark,
.mark {
  padding: .2em;
  background-color: #fcf8e3;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-nowrap {
  white-space: nowrap;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-capitalize {
  text-transform: capitalize;
}
.text-muted {
  color: #777;
}
.text-primary {
  color: #337ab7;
}
a.text-primary:hover,
a.text-primary:focus {
  color: #286090;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover,
a.text-success:focus {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover,
a.text-info:focus {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover,
a.text-warning:focus {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover,
a.text-danger:focus {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #337ab7;
}
a.bg-primary:hover,
a.bg-primary:focus {
  background-color: #286090;
}
.bg-success {
  background-color: #dff0d8;
}
a.bg-success:hover,
a.bg-success:focus {
  background-color: #c1e2b3;
}
.bg-info {
  background-color: #d9edf7;
}
a.bg-info:hover,
a.bg-info:focus {
  background-color: #afd9ee;
}
.bg-warning {
  background-color: #fcf8e3;
}
a.bg-warning:hover,
a.bg-warning:focus {
  background-color: #f7ecb5;
}
.bg-danger {
  background-color: #f2dede;
}
a.bg-danger:hover,
a.bg-danger:focus {
  background-color: #e4b9b9;
}
.page-header {
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
ul ul,
ol ul,
ul ol,
ol ol {
  margin-bottom: 0;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 20px;
}
dt,
dd {
  line-height: 1.42857143;
}
dt {
  font-weight: bold;
}
dd {
  margin-left: 0;
}
@media (min-width: 768px) {
  .dl-horizontal dt {
    float: left;
    width: 160px;
    overflow: hidden;
    clear: left;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dl-horizontal dd {
    margin-left: 180px;
  }
}
abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #777;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}
blockquote p:last-child,
blockquote ul:last-child,
blockquote ol:last-child {
  margin-bottom: 0;
}
blockquote footer,
blockquote small,
blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #777;
}
blockquote footer:before,
blockquote small:before,
blockquote .small:before {
  content: '\\2014 \\00A0';
}
.blockquote-reverse,
blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  text-align: right;
  border-right: 5px solid #eee;
  border-left: 0;
}
.blockquote-reverse footer:before,
blockquote.pull-right footer:before,
.blockquote-reverse small:before,
blockquote.pull-right small:before,
.blockquote-reverse .small:before,
blockquote.pull-right .small:before {
  content: '';
}
.blockquote-reverse footer:after,
blockquote.pull-right footer:after,
.blockquote-reverse small:after,
blockquote.pull-right small:after,
.blockquote-reverse .small:after,
blockquote.pull-right .small:after {
  content: '\\00A0 \\2014';
}
address {
  margin-bottom: 20px;
  font-style: normal;
  line-height: 1.42857143;
}
code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}
code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);
}
kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
  -webkit-box-shadow: none;
          box-shadow: none;
}
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
}
.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
  float: left;
}
.col-xs-12 {
  width: 100%;
}
.col-xs-11 {
  width: 91.66666667%;
}
.col-xs-10 {
  width: 83.33333333%;
}
.col-xs-9 {
  width: 75%;
}
.col-xs-8 {
  width: 66.66666667%;
}
.col-xs-7 {
  width: 58.33333333%;
}
.col-xs-6 {
  width: 50%;
}
.col-xs-5 {
  width: 41.66666667%;
}
.col-xs-4 {
  width: 33.33333333%;
}
.col-xs-3 {
  width: 25%;
}
.col-xs-2 {
  width: 16.66666667%;
}
.col-xs-1 {
  width: 8.33333333%;
}
.col-xs-pull-12 {
  right: 100%;
}
.col-xs-pull-11 {
  right: 91.66666667%;
}
.col-xs-pull-10 {
  right: 83.33333333%;
}
.col-xs-pull-9 {
  right: 75%;
}
.col-xs-pull-8 {
  right: 66.66666667%;
}
.col-xs-pull-7 {
  right: 58.33333333%;
}
.col-xs-pull-6 {
  right: 50%;
}
.col-xs-pull-5 {
  right: 41.66666667%;
}
.col-xs-pull-4 {
  right: 33.33333333%;
}
.col-xs-pull-3 {
  right: 25%;
}
.col-xs-pull-2 {
  right: 16.66666667%;
}
.col-xs-pull-1 {
  right: 8.33333333%;
}
.col-xs-pull-0 {
  right: auto;
}
.col-xs-push-12 {
  left: 100%;
}
.col-xs-push-11 {
  left: 91.66666667%;
}
.col-xs-push-10 {
  left: 83.33333333%;
}
.col-xs-push-9 {
  left: 75%;
}
.col-xs-push-8 {
  left: 66.66666667%;
}
.col-xs-push-7 {
  left: 58.33333333%;
}
.col-xs-push-6 {
  left: 50%;
}
.col-xs-push-5 {
  left: 41.66666667%;
}
.col-xs-push-4 {
  left: 33.33333333%;
}
.col-xs-push-3 {
  left: 25%;
}
.col-xs-push-2 {
  left: 16.66666667%;
}
.col-xs-push-1 {
  left: 8.33333333%;
}
.col-xs-push-0 {
  left: auto;
}
.col-xs-offset-12 {
  margin-left: 100%;
}
.col-xs-offset-11 {
  margin-left: 91.66666667%;
}
.col-xs-offset-10 {
  margin-left: 83.33333333%;
}
.col-xs-offset-9 {
  margin-left: 75%;
}
.col-xs-offset-8 {
  margin-left: 66.66666667%;
}
.col-xs-offset-7 {
  margin-left: 58.33333333%;
}
.col-xs-offset-6 {
  margin-left: 50%;
}
.col-xs-offset-5 {
  margin-left: 41.66666667%;
}
.col-xs-offset-4 {
  margin-left: 33.33333333%;
}
.col-xs-offset-3 {
  margin-left: 25%;
}
.col-xs-offset-2 {
  margin-left: 16.66666667%;
}
.col-xs-offset-1 {
  margin-left: 8.33333333%;
}
.col-xs-offset-0 {
  margin-left: 0;
}
@media (min-width: 768px) {
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
  }
  .col-sm-12 {
    width: 100%;
  }
  .col-sm-11 {
    width: 91.66666667%;
  }
  .col-sm-10 {
    width: 83.33333333%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-8 {
    width: 66.66666667%;
  }
  .col-sm-7 {
    width: 58.33333333%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-5 {
    width: 41.66666667%;
  }
  .col-sm-4 {
    width: 33.33333333%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-2 {
    width: 16.66666667%;
  }
  .col-sm-1 {
    width: 8.33333333%;
  }
  .col-sm-pull-12 {
    right: 100%;
  }
  .col-sm-pull-11 {
    right: 91.66666667%;
  }
  .col-sm-pull-10 {
    right: 83.33333333%;
  }
  .col-sm-pull-9 {
    right: 75%;
  }
  .col-sm-pull-8 {
    right: 66.66666667%;
  }
  .col-sm-pull-7 {
    right: 58.33333333%;
  }
  .col-sm-pull-6 {
    right: 50%;
  }
  .col-sm-pull-5 {
    right: 41.66666667%;
  }
  .col-sm-pull-4 {
    right: 33.33333333%;
  }
  .col-sm-pull-3 {
    right: 25%;
  }
  .col-sm-pull-2 {
    right: 16.66666667%;
  }
  .col-sm-pull-1 {
    right: 8.33333333%;
  }
  .col-sm-pull-0 {
    right: auto;
  }
  .col-sm-push-12 {
    left: 100%;
  }
  .col-sm-push-11 {
    left: 91.66666667%;
  }
  .col-sm-push-10 {
    left: 83.33333333%;
  }
  .col-sm-push-9 {
    left: 75%;
  }
  .col-sm-push-8 {
    left: 66.66666667%;
  }
  .col-sm-push-7 {
    left: 58.33333333%;
  }
  .col-sm-push-6 {
    left: 50%;
  }
  .col-sm-push-5 {
    left: 41.66666667%;
  }
  .col-sm-push-4 {
    left: 33.33333333%;
  }
  .col-sm-push-3 {
    left: 25%;
  }
  .col-sm-push-2 {
    left: 16.66666667%;
  }
  .col-sm-push-1 {
    left: 8.33333333%;
  }
  .col-sm-push-0 {
    left: auto;
  }
  .col-sm-offset-12 {
    margin-left: 100%;
  }
  .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-sm-offset-9 {
    margin-left: 75%;
  }
  .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-sm-offset-6 {
    margin-left: 50%;
  }
  .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-sm-offset-3 {
    margin-left: 25%;
  }
  .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-sm-offset-0 {
    margin-left: 0;
  }
}
@media (min-width: 992px) {
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0;
  }
}
@media (min-width: 1200px) {
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
  }
  .col-lg-12 {
    width: 100%;
  }
  .col-lg-11 {
    width: 91.66666667%;
  }
  .col-lg-10 {
    width: 83.33333333%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-8 {
    width: 66.66666667%;
  }
  .col-lg-7 {
    width: 58.33333333%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-5 {
    width: 41.66666667%;
  }
  .col-lg-4 {
    width: 33.33333333%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-2 {
    width: 16.66666667%;
  }
  .col-lg-1 {
    width: 8.33333333%;
  }
  .col-lg-pull-12 {
    right: 100%;
  }
  .col-lg-pull-11 {
    right: 91.66666667%;
  }
  .col-lg-pull-10 {
    right: 83.33333333%;
  }
  .col-lg-pull-9 {
    right: 75%;
  }
  .col-lg-pull-8 {
    right: 66.66666667%;
  }
  .col-lg-pull-7 {
    right: 58.33333333%;
  }
  .col-lg-pull-6 {
    right: 50%;
  }
  .col-lg-pull-5 {
    right: 41.66666667%;
  }
  .col-lg-pull-4 {
    right: 33.33333333%;
  }
  .col-lg-pull-3 {
    right: 25%;
  }
  .col-lg-pull-2 {
    right: 16.66666667%;
  }
  .col-lg-pull-1 {
    right: 8.33333333%;
  }
  .col-lg-pull-0 {
    right: auto;
  }
  .col-lg-push-12 {
    left: 100%;
  }
  .col-lg-push-11 {
    left: 91.66666667%;
  }
  .col-lg-push-10 {
    left: 83.33333333%;
  }
  .col-lg-push-9 {
    left: 75%;
  }
  .col-lg-push-8 {
    left: 66.66666667%;
  }
  .col-lg-push-7 {
    left: 58.33333333%;
  }
  .col-lg-push-6 {
    left: 50%;
  }
  .col-lg-push-5 {
    left: 41.66666667%;
  }
  .col-lg-push-4 {
    left: 33.33333333%;
  }
  .col-lg-push-3 {
    left: 25%;
  }
  .col-lg-push-2 {
    left: 16.66666667%;
  }
  .col-lg-push-1 {
    left: 8.33333333%;
  }
  .col-lg-push-0 {
    left: auto;
  }
  .col-lg-offset-12 {
    margin-left: 100%;
  }
  .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-lg-offset-9 {
    margin-left: 75%;
  }
  .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-lg-offset-6 {
    margin-left: 50%;
  }
  .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-lg-offset-3 {
    margin-left: 25%;
  }
  .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-lg-offset-0 {
    margin-left: 0;
  }
}
table {
  background-color: transparent;
}
caption {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #777;
  text-align: left;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}
.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td {
  border-top: 0;
}
.table > tbody + tbody {
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
}
.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
  padding: 5px;
}
.table-bordered {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover {
  background-color: #f5f5f5;
}
table col[class*="col-"] {
  position: static;
  display: table-column;
  float: none;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  display: table-cell;
  float: none;
}
.table > thead > tr > td.active,
.table > tbody > tr > td.active,
.table > tfoot > tr > td.active,
.table > thead > tr > th.active,
.table > tbody > tr > th.active,
.table > tfoot > tr > th.active,
.table > thead > tr.active > td,
.table > tbody > tr.active > td,
.table > tfoot > tr.active > td,
.table > thead > tr.active > th,
.table > tbody > tr.active > th,
.table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}
.table-hover > tbody > tr > td.active:hover,
.table-hover > tbody > tr > th.active:hover,
.table-hover > tbody > tr.active:hover > td,
.table-hover > tbody > tr:hover > .active,
.table-hover > tbody > tr.active:hover > th {
  background-color: #e8e8e8;
}
.table > thead > tr > td.success,
.table > tbody > tr > td.success,
.table > tfoot > tr > td.success,
.table > thead > tr > th.success,
.table > tbody > tr > th.success,
.table > tfoot > tr > th.success,
.table > thead > tr.success > td,
.table > tbody > tr.success > td,
.table > tfoot > tr.success > td,
.table > thead > tr.success > th,
.table > tbody > tr.success > th,
.table > tfoot > tr.success > th {
  background-color: #dff0d8;
}
.table-hover > tbody > tr > td.success:hover,
.table-hover > tbody > tr > th.success:hover,
.table-hover > tbody > tr.success:hover > td,
.table-hover > tbody > tr:hover > .success,
.table-hover > tbody > tr.success:hover > th {
  background-color: #d0e9c6;
}
.table > thead > tr > td.info,
.table > tbody > tr > td.info,
.table > tfoot > tr > td.info,
.table > thead > tr > th.info,
.table > tbody > tr > th.info,
.table > tfoot > tr > th.info,
.table > thead > tr.info > td,
.table > tbody > tr.info > td,
.table > tfoot > tr.info > td,
.table > thead > tr.info > th,
.table > tbody > tr.info > th,
.table > tfoot > tr.info > th {
  background-color: #d9edf7;
}
.table-hover > tbody > tr > td.info:hover,
.table-hover > tbody > tr > th.info:hover,
.table-hover > tbody > tr.info:hover > td,
.table-hover > tbody > tr:hover > .info,
.table-hover > tbody > tr.info:hover > th {
  background-color: #c4e3f3;
}
.table > thead > tr > td.warning,
.table > tbody > tr > td.warning,
.table > tfoot > tr > td.warning,
.table > thead > tr > th.warning,
.table > tbody > tr > th.warning,
.table > tfoot > tr > th.warning,
.table > thead > tr.warning > td,
.table > tbody > tr.warning > td,
.table > tfoot > tr.warning > td,
.table > thead > tr.warning > th,
.table > tbody > tr.warning > th,
.table > tfoot > tr.warning > th {
  background-color: #fcf8e3;
}
.table-hover > tbody > tr > td.warning:hover,
.table-hover > tbody > tr > th.warning:hover,
.table-hover > tbody > tr.warning:hover > td,
.table-hover > tbody > tr:hover > .warning,
.table-hover > tbody > tr.warning:hover > th {
  background-color: #faf2cc;
}
.table > thead > tr > td.danger,
.table > tbody > tr > td.danger,
.table > tfoot > tr > td.danger,
.table > thead > tr > th.danger,
.table > tbody > tr > th.danger,
.table > tfoot > tr > th.danger,
.table > thead > tr.danger > td,
.table > tbody > tr.danger > td,
.table > tfoot > tr.danger > td,
.table > thead > tr.danger > th,
.table > tbody > tr.danger > th,
.table > tfoot > tr.danger > th {
  background-color: #f2dede;
}
.table-hover > tbody > tr > td.danger:hover,
.table-hover > tbody > tr > th.danger:hover,
.table-hover > tbody > tr.danger:hover > td,
.table-hover > tbody > tr:hover > .danger,
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
.table-responsive {
  min-height: .01%;
  overflow-x: auto;
}
@media screen and (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 15px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
  }
  .table-responsive > .table {
    margin-bottom: 0;
  }
  .table-responsive > .table > thead > tr > th,
  .table-responsive > .table > tbody > tr > th,
  .table-responsive > .table > tfoot > tr > th,
  .table-responsive > .table > thead > tr > td,
  .table-responsive > .table > tbody > tr > td,
  .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }
  .table-responsive > .table-bordered {
    border: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:first-child,
  .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .table-responsive > .table-bordered > thead > tr > td:first-child,
  .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:last-child,
  .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .table-responsive > .table-bordered > thead > tr > td:last-child,
  .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
  }
  .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .table-responsive > .table-bordered > tfoot > tr:last-child > td {
    border-bottom: 0;
  }
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}
input[type="search"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
input[type="radio"],
input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \9;
  line-height: normal;
}
input[type="file"] {
  display: block;
}
input[type="range"] {
  display: block;
  width: 100%;
}
select[multiple],
select[size] {
  height: auto;
}
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
output {
  display: block;
  padding-top: 7px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #eee;
  opacity: 1;
}
.form-control[disabled],
fieldset[disabled] .form-control {
  cursor: not-allowed;
}
textarea.form-control {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: none;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"].form-control,
  input[type="time"].form-control,
  input[type="datetime-local"].form-control,
  input[type="month"].form-control {
    line-height: 34px;
  }
  input[type="date"].input-sm,
  input[type="time"].input-sm,
  input[type="datetime-local"].input-sm,
  input[type="month"].input-sm,
  .input-group-sm input[type="date"],
  .input-group-sm input[type="time"],
  .input-group-sm input[type="datetime-local"],
  .input-group-sm input[type="month"] {
    line-height: 30px;
  }
  input[type="date"].input-lg,
  input[type="time"].input-lg,
  input[type="datetime-local"].input-lg,
  input[type="month"].input-lg,
  .input-group-lg input[type="date"],
  .input-group-lg input[type="time"],
  .input-group-lg input[type="datetime-local"],
  .input-group-lg input[type="month"] {
    line-height: 46px;
  }
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-top: 4px \9;
  margin-left: -20px;
}
.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px;
}
.radio-inline,
.checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  vertical-align: middle;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}
.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}
.form-control-static {
  min-height: 34px;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 0;
}
.form-control-static.input-lg,
.form-control-static.input-sm {
  padding-right: 0;
  padding-left: 0;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.form-group-sm .form-control {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.form-group-sm select.form-control {
  height: 30px;
  line-height: 30px;
}
.form-group-sm textarea.form-control,
.form-group-sm select[multiple].form-control {
  height: auto;
}
.form-group-sm .form-control-static {
  height: 30px;
  min-height: 32px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.input-lg {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.input-lg {
  height: 46px;
  line-height: 46px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.form-group-lg .form-control {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
.form-group-lg select.form-control {
  height: 46px;
  line-height: 46px;
}
.form-group-lg textarea.form-control,
.form-group-lg select[multiple].form-control {
  height: auto;
}
.form-group-lg .form-control-static {
  height: 46px;
  min-height: 38px;
  padding: 11px 16px;
  font-size: 18px;
  line-height: 1.3333333;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 42.5px;
}
.form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  pointer-events: none;
}
.input-lg + .form-control-feedback,
.input-group-lg + .form-control-feedback,
.form-group-lg .form-control + .form-control-feedback {
  width: 46px;
  height: 46px;
  line-height: 46px;
}
.input-sm + .form-control-feedback,
.input-group-sm + .form-control-feedback,
.form-group-sm .form-control + .form-control-feedback {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline,
.has-success.radio label,
.has-success.checkbox label,
.has-success.radio-inline label,
.has-success.checkbox-inline label {
  color: #3c763d;
}
.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;
}
.has-success .input-group-addon {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #3c763d;
}
.has-success .form-control-feedback {
  color: #3c763d;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline,
.has-warning.radio label,
.has-warning.checkbox label,
.has-warning.radio-inline label,
.has-warning.checkbox-inline label {
  color: #8a6d3b;
}
.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;
}
.has-warning .input-group-addon {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #8a6d3b;
}
.has-warning .form-control-feedback {
  color: #8a6d3b;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline,
.has-error.radio label,
.has-error.checkbox label,
.has-error.radio-inline label,
.has-error.checkbox-inline label {
  color: #a94442;
}
.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
}
.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;
}
.has-error .input-group-addon {
  color: #a94442;
  background-color: #f2dede;
  border-color: #a94442;
}
.has-error .form-control-feedback {
  color: #a94442;
}
.has-feedback label ~ .form-control-feedback {
  top: 25px;
}
.has-feedback label.sr-only ~ .form-control-feedback {
  top: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #737373;
}
@media (min-width: 768px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-static {
    display: inline-block;
  }
  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .form-inline .input-group .input-group-addon,
  .form-inline .input-group .input-group-btn,
  .form-inline .input-group .form-control {
    width: auto;
  }
  .form-inline .input-group > .form-control {
    width: 100%;
  }
  .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio,
  .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio label,
  .form-inline .checkbox label {
    padding-left: 0;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  padding-top: 7px;
  margin-top: 0;
  margin-bottom: 0;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 27px;
}
.form-horizontal .form-group {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  right: 15px;
}
@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 11px;
    font-size: 18px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
    font-size: 12px;
  }
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
      touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
          box-shadow: none;
  opacity: .65;
}
a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:focus,
.btn-default.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
.btn-default:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.btn-default:active:hover,
.btn-default.active:hover,
.open > .dropdown-toggle.btn-default:hover,
.btn-default:active:focus,
.btn-default.active:focus,
.open > .dropdown-toggle.btn-default:focus,
.btn-default:active.focus,
.btn-default.active.focus,
.open > .dropdown-toggle.btn-default.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  background-image: none;
}
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled.focus,
.btn-default[disabled].focus,
fieldset[disabled] .btn-default.focus {
  background-color: #fff;
  border-color: #ccc;
}
.btn-default .badge {
  color: #fff;
  background-color: #333;
}
.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn-primary:focus,
.btn-primary.focus {
  color: #fff;
  background-color: #286090;
  border-color: #122b40;
}
.btn-primary:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.btn-primary:active:hover,
.btn-primary.active:hover,
.open > .dropdown-toggle.btn-primary:hover,
.btn-primary:active:focus,
.btn-primary.active:focus,
.open > .dropdown-toggle.btn-primary:focus,
.btn-primary:active.focus,
.btn-primary.active.focus,
.open > .dropdown-toggle.btn-primary.focus {
  color: #fff;
  background-color: #204d74;
  border-color: #122b40;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background-image: none;
}
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled.focus,
.btn-primary[disabled].focus,
fieldset[disabled] .btn-primary.focus {
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn-primary .badge {
  color: #337ab7;
  background-color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:focus,
.btn-success.focus {
  color: #fff;
  background-color: #449d44;
  border-color: #255625;
}
.btn-success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.btn-success:active:hover,
.btn-success.active:hover,
.open > .dropdown-toggle.btn-success:hover,
.btn-success:active:focus,
.btn-success.active:focus,
.open > .dropdown-toggle.btn-success:focus,
.btn-success:active.focus,
.btn-success.active.focus,
.open > .dropdown-toggle.btn-success.focus {
  color: #fff;
  background-color: #398439;
  border-color: #255625;
}
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  background-image: none;
}
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled.focus,
.btn-success[disabled].focus,
fieldset[disabled] .btn-success.focus {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:focus,
.btn-info.focus {
  color: #fff;
  background-color: #31b0d5;
  border-color: #1b6d85;
}
.btn-info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.btn-info:active:hover,
.btn-info.active:hover,
.open > .dropdown-toggle.btn-info:hover,
.btn-info:active:focus,
.btn-info.active:focus,
.open > .dropdown-toggle.btn-info:focus,
.btn-info:active.focus,
.btn-info.active.focus,
.open > .dropdown-toggle.btn-info.focus {
  color: #fff;
  background-color: #269abc;
  border-color: #1b6d85;
}
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  background-image: none;
}
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled.focus,
.btn-info[disabled].focus,
fieldset[disabled] .btn-info.focus {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:focus,
.btn-warning.focus {
  color: #fff;
  background-color: #ec971f;
  border-color: #985f0d;
}
.btn-warning:hover {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.btn-warning:active:hover,
.btn-warning.active:hover,
.open > .dropdown-toggle.btn-warning:hover,
.btn-warning:active:focus,
.btn-warning.active:focus,
.open > .dropdown-toggle.btn-warning:focus,
.btn-warning:active.focus,
.btn-warning.active.focus,
.open > .dropdown-toggle.btn-warning.focus {
  color: #fff;
  background-color: #d58512;
  border-color: #985f0d;
}
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  background-image: none;
}
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled.focus,
.btn-warning[disabled].focus,
fieldset[disabled] .btn-warning.focus {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:focus,
.btn-danger.focus {
  color: #fff;
  background-color: #c9302c;
  border-color: #761c19;
}
.btn-danger:hover {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.btn-danger:active:hover,
.btn-danger.active:hover,
.open > .dropdown-toggle.btn-danger:hover,
.btn-danger:active:focus,
.btn-danger.active:focus,
.open > .dropdown-toggle.btn-danger:focus,
.btn-danger:active.focus,
.btn-danger.active.focus,
.open > .dropdown-toggle.btn-danger.focus {
  color: #fff;
  background-color: #ac2925;
  border-color: #761c19;
}
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  background-image: none;
}
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled.focus,
.btn-danger[disabled].focus,
fieldset[disabled] .btn-danger.focus {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}
.btn-link {
  font-weight: normal;
  color: #337ab7;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
.btn-link.active,
.btn-link[disabled],
fieldset[disabled] .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
          box-shadow: none;
}
.btn-link,
.btn-link:hover,
.btn-link:focus,
.btn-link:active {
  border-color: transparent;
}
.btn-link:hover,
.btn-link:focus {
  color: #23527c;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #777;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 5px;
}
input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}
.fade {
  opacity: 0;
  -webkit-transition: opacity .15s linear;
       -o-transition: opacity .15s linear;
          transition: opacity .15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
tr.collapse.in {
  display: table-row;
}
tbody.collapse.in {
  display: table-row-group;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-timing-function: ease;
       -o-transition-timing-function: ease;
          transition-timing-function: ease;
  -webkit-transition-duration: .35s;
       -o-transition-duration: .35s;
          transition-duration: .35s;
  -webkit-transition-property: height, visibility;
       -o-transition-property: height, visibility;
          transition-property: height, visibility;
}
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.dropup,
.dropdown {
  position: relative;
}
.dropdown-toggle:focus {
  outline: 0;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #337ab7;
  outline: 0;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #777;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  right: 0;
  left: auto;
}
.dropdown-menu-left {
  right: auto;
  left: 0;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777;
  white-space: nowrap;
}
.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 4px dashed;
  border-bottom: 4px solid \9;
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}
@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
  }
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}
.btn-toolbar {
  margin-left: -5px;
}
.btn-toolbar .btn,
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}
.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
  margin-left: 5px;
}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}
.btn-group > .btn:first-child {
  margin-left: 0;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
          box-shadow: none;
}
.btn .caret {
  margin-left: 0;
}
.btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}
.dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}
.btn-group-vertical > .btn-group > .btn {
  float: none;
}
.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}
.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  display: table-cell;
  float: none;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
.btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}
[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-right: 0;
  padding-left: 0;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group .form-control:focus {
  z-index: 3;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 46px;
  line-height: 46px;
}
textarea.input-group-lg > .form-control,
textarea.input-group-lg > .input-group-addon,
textarea.input-group-lg > .input-group-btn > .btn,
select[multiple].input-group-lg > .form-control,
select[multiple].input-group-lg > .input-group-addon,
select[multiple].input-group-lg > .input-group-btn > .btn {
  height: auto;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
}
textarea.input-group-sm > .form-control,
textarea.input-group-sm > .input-group-addon,
textarea.input-group-sm > .input-group-btn > .btn,
select[multiple].input-group-sm > .form-control,
select[multiple].input-group-sm > .input-group-addon,
select[multiple].input-group-sm > .input-group-btn > .btn {
  height: auto;
}
.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;
}
.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #555;
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 3px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 18px;
  border-radius: 6px;
}
.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group-addon:first-child {
  border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group-addon:last-child {
  border-left: 0;
}
.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.input-group-btn > .btn {
  position: relative;
}
.input-group-btn > .btn + .btn {
  margin-left: -1px;
}
.input-group-btn > .btn:hover,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:active {
  z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  z-index: 2;
  margin-left: -1px;
}
.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav > li > a:hover,
.nav > li > a:focus {
  text-decoration: none;
  background-color: #eee;
}
.nav > li.disabled > a {
  color: #777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777;
  text-decoration: none;
  cursor: not-allowed;
  background-color: transparent;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eee;
  border-color: #337ab7;
}
.nav .nav-divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}
.nav-tabs > li > a:hover {
  border-color: #eee #eee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555;
  cursor: default;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}
.nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.nav-pills > li {
  float: left;
}
.nav-pills > li > a {
  border-radius: 4px;
}
.nav-pills > li + li {
  margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #337ab7;
}
.nav-stacked > li {
  float: none;
}
.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}
.nav-justified {
  width: 100%;
}
.nav-justified > li {
  float: none;
}
.nav-justified > li > a {
  margin-bottom: 5px;
  text-align: center;
}
.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs-justified {
  border-bottom: 0;
}
.nav-tabs-justified > li > a {
  margin-right: 0;
  border-radius: 4px;
}
.nav-tabs-justified > .active > a,
.nav-tabs-justified > .active > a:hover,
.nav-tabs-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 4px 4px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}
@media (min-width: 768px) {
  .navbar {
    border-radius: 4px;
  }
}
@media (min-width: 768px) {
  .navbar-header {
    float: left;
  }
}
.navbar-collapse {
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 768px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    padding-right: 0;
    padding-left: 0;
  }
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-device-width: 480px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}
.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 768px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}
.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}
@media (min-width: 768px) {
  .navbar-static-top {
    border-radius: 0;
  }
}
.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
@media (min-width: 768px) {
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    border-radius: 0;
  }
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}
.navbar-brand {
  float: left;
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}
.navbar-brand > img {
  display: block;
}
@media (min-width: 768px) {
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: -15px;
  }
}
.navbar-toggle {
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.navbar-toggle:focus {
  outline: 0;
}
.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}
.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}
@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }
}
.navbar-nav {
  margin: 7.5px -15px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
}
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 20px;
  }
  .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: none;
  }
}
@media (min-width: 768px) {
  .navbar-nav {
    float: left;
    margin: 0;
  }
  .navbar-nav > li {
    float: left;
  }
  .navbar-nav > li > a {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
.navbar-form {
  padding: 10px 15px;
  margin-top: 8px;
  margin-right: -15px;
  margin-bottom: 8px;
  margin-left: -15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);
}
@media (min-width: 768px) {
  .navbar-form .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .navbar-form .form-control-static {
    display: inline-block;
  }
  .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .navbar-form .input-group .input-group-addon,
  .navbar-form .input-group .input-group-btn,
  .navbar-form .input-group .form-control {
    width: auto;
  }
  .navbar-form .input-group > .form-control {
    width: 100%;
  }
  .navbar-form .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio,
  .navbar-form .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio label,
  .navbar-form .checkbox label {
    padding-left: 0;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
}
@media (max-width: 767px) {
  .navbar-form .form-group {
    margin-bottom: 5px;
  }
  .navbar-form .form-group:last-child {
    margin-bottom: 0;
  }
}
@media (min-width: 768px) {
  .navbar-form {
    width: auto;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 0;
    border: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  margin-bottom: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}
.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}
.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}
.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}
@media (min-width: 768px) {
  .navbar-text {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
}
@media (min-width: 768px) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
    margin-right: -15px;
  }
  .navbar-right ~ .navbar-right {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
@media (max-width: 767px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-default .btn-link {
  color: #777;
}
.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
  color: #333;
}
.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
  color: #ccc;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #9d9d9d;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a {
  color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  color: #fff;
  background-color: #080808;
}
@media (max-width: 767px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #9d9d9d;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #9d9d9d;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
.navbar-inverse .btn-link {
  color: #9d9d9d;
}
.navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link:focus {
  color: #fff;
}
.navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .navbar-inverse .btn-link:focus {
  color: #444;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\\00a0";
}
.breadcrumb > .active {
  color: #777;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  z-index: 2;
  color: #23527c;
  background-color: #eee;
  border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 3;
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #777;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.3333333;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.pager {
  padding-left: 0;
  margin: 20px 0;
  text-align: center;
  list-style: none;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eee;
}
.pager .next > a,
.pager .next > span {
  float: right;
}
.pager .previous > a,
.pager .previous > span {
  float: left;
}
.pager .disabled > a,
.pager .disabled > a:hover,
.pager .disabled > a:focus,
.pager .disabled > span {
  color: #777;
  cursor: not-allowed;
  background-color: #fff;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
a.label:hover,
a.label:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.label:empty {
  display: none;
}
.btn .label {
  position: relative;
  top: -1px;
}
.label-default {
  background-color: #777;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #5e5e5e;
}
.label-primary {
  background-color: #337ab7;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #286090;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  background-color: #777;
  border-radius: 10px;
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.btn-xs .badge,
.btn-group-xs > .btn .badge {
  top: 0;
  padding: 1px 5px;
}
a.badge:hover,
a.badge:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #337ab7;
  background-color: #fff;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 21px;
  font-weight: 200;
}
.jumbotron > hr {
  border-top-color: #d5d5d5;
}
.container .jumbotron,
.container-fluid .jumbotron {
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 6px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron,
  .container-fluid .jumbotron {
    padding-right: 60px;
    padding-left: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 63px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 20px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: border .2s ease-in-out;
       -o-transition: border .2s ease-in-out;
          transition: border .2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-right: auto;
  margin-left: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #337ab7;
}
.thumbnail .caption {
  padding: 9px;
  color: #333;
}
.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}
.alert h4 {
  margin-top: 0;
  color: inherit;
}
.alert .alert-link {
  font-weight: bold;
}
.alert > p,
.alert > ul {
  margin-bottom: 0;
}
.alert > p + p {
  margin-top: 5px;
}
.alert-dismissable,
.alert-dismissible {
  padding-right: 35px;
}
.alert-dismissable .close,
.alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@-o-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
}
.progress-bar {
  float: left;
  width: 0;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
  -webkit-transition: width .6s ease;
       -o-transition: width .6s ease;
          transition: width .6s ease;
}
.progress-striped .progress-bar,
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  -webkit-background-size: 40px 40px;
          background-size: 40px 40px;
}
.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
       -o-animation: progress-bar-stripes 2s linear infinite;
          animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.media-body {
  width: 10000px;
}
.media-object {
  display: block;
}
.media-object.img-thumbnail {
  max-width: none;
}
.media-right,
.media > .pull-right {
  padding-left: 10px;
}
.media-left,
.media > .pull-left {
  padding-right: 10px;
}
.media-left,
.media-right,
.media-body {
  display: table-cell;
  vertical-align: top;
}
.media-middle {
  vertical-align: middle;
}
.media-bottom {
  vertical-align: bottom;
}
.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
a.list-group-item,
button.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading,
button.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
button.list-group-item:hover,
a.list-group-item:focus,
button.list-group-item:focus {
  color: #555;
  text-decoration: none;
  background-color: #f5f5f5;
}
button.list-group-item {
  width: 100%;
  text-align: left;
}
.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
  color: #777;
  cursor: not-allowed;
  background-color: #eee;
}
.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}
.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
  color: #777;
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.list-group-item.active .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active:hover .list-group-item-heading > small,
.list-group-item.active:focus .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small,
.list-group-item.active:hover .list-group-item-heading > .small,
.list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}
.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
  color: #c7ddef;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success,
button.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading,
button.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
button.list-group-item-success:hover,
a.list-group-item-success:focus,
button.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
button.list-group-item-success.active,
a.list-group-item-success.active:hover,
button.list-group-item-success.active:hover,
a.list-group-item-success.active:focus,
button.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info,
button.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading,
button.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
button.list-group-item-info:hover,
a.list-group-item-info:focus,
button.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
button.list-group-item-info.active,
a.list-group-item-info.active:hover,
button.list-group-item-info.active:hover,
a.list-group-item-info.active:focus,
button.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning,
button.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading,
button.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
button.list-group-item-warning:hover,
a.list-group-item-warning:focus,
button.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
button.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
button.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus,
button.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger,
button.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading,
button.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
button.list-group-item-danger:hover,
a.list-group-item-danger:focus,
button.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
button.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
button.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus,
button.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}
.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
}
.panel-title > a,
.panel-title > small,
.panel-title > .small,
.panel-title > small > a,
.panel-title > .small > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .list-group,
.panel > .panel-collapse > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item,
.panel > .panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child,
.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .list-group:last-child .list-group-item:last-child,
.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.list-group + .panel-footer {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table,
.panel > .panel-collapse > .table {
  margin-bottom: 0;
}
.panel > .table caption,
.panel > .table-responsive > .table caption,
.panel > .panel-collapse > .table caption {
  padding-right: 15px;
  padding-left: 15px;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
  border-top-left-radius: 3px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
  border-top-right-radius: 3px;
}
.panel > .table:last-child,
.panel > .table-responsive:last-child > .table:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
  border-bottom-left-radius: 3px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
  border-bottom-right-radius: 3px;
}
.panel > .panel-body + .table,
.panel > .panel-body + .table-responsive,
.panel > .table + .panel-body,
.panel > .table-responsive + .panel-body {
  border-top: 1px solid #ddd;
}
.panel > .table > tbody:first-child > tr:first-child th,
.panel > .table > tbody:first-child > tr:first-child td {
  border-top: 0;
}
.panel > .table-bordered,
.panel > .table-responsive > .table-bordered {
  border: 0;
}
.panel > .table-bordered > thead > tr > th:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.panel > .table-bordered > tbody > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.panel > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-bordered > thead > tr > td:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.panel > .table-bordered > tbody > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.panel > .table-bordered > tfoot > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
  border-left: 0;
}
.panel > .table-bordered > thead > tr > th:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.panel > .table-bordered > tbody > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.panel > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-bordered > thead > tr > td:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.panel > .table-bordered > tbody > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.panel > .table-bordered > tfoot > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
  border-right: 0;
}
.panel > .table-bordered > thead > tr:first-child > td,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.panel > .table-bordered > tbody > tr:first-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.panel > .table-bordered > thead > tr:first-child > th,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.panel > .table-bordered > tbody > tr:first-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
  border-bottom: 0;
}
.panel > .table-bordered > tbody > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.panel > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-bordered > tbody > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.panel > .table-bordered > tfoot > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
  border-bottom: 0;
}
.panel > .table-responsive {
  margin-bottom: 0;
  border: 0;
}
.panel-group {
  margin-bottom: 20px;
}
.panel-group .panel {
  margin-bottom: 0;
  border-radius: 4px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse > .panel-body,
.panel-group .panel-heading + .panel-collapse > .list-group {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #337ab7;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #337ab7;
}
.panel-primary > .panel-heading .badge {
  color: #337ab7;
  background-color: #fff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #337ab7;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.embed-responsive-4by3 {
  padding-bottom: 75%;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, .15);
}
.well-lg {
  padding: 24px;
  border-radius: 6px;
}
.well-sm {
  padding: 9px;
  border-radius: 3px;
}
.close {
  float: right;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: .2;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  filter: alpha(opacity=50);
  opacity: .5;
}
button.close {
  -webkit-appearance: none;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
}
.modal-open {
  overflow: hidden;
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transition: -webkit-transform .3s ease-out;
       -o-transition:      -o-transform .3s ease-out;
          transition:         transform .3s ease-out;
  -webkit-transform: translate(0, -25%);
      -ms-transform: translate(0, -25%);
       -o-transform: translate(0, -25%);
          transform: translate(0, -25%);
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
       -o-transform: translate(0, 0);
          transform: translate(0, 0);
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  outline: 0;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0;
}
.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5;
}
.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.modal-header .close {
  margin-top: -2px;
}
.modal-title {
  margin: 0;
  line-height: 1.42857143;
}
.modal-body {
  position: relative;
  padding: 15px;
}
.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-bottom: 0;
  margin-left: 5px;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
  }
  .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  white-space: normal;
  filter: alpha(opacity=0);
  opacity: 0;

  line-break: auto;
}
.tooltip.in {
  filter: alpha(opacity=90);
  opacity: .9;
}
.tooltip.top {
  padding: 5px 0;
  margin-top: -3px;
}
.tooltip.right {
  padding: 0 5px;
  margin-left: 3px;
}
.tooltip.bottom {
  padding: 5px 0;
  margin-top: 3px;
}
.tooltip.left {
  padding: 0 5px;
  margin-left: -3px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 4px;
}
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
  right: 5px;
  bottom: 0;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
  bottom: 0;
  left: 5px;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  right: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  left: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  white-space: normal;
  background-color: #fff;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);

  line-break: auto;
}
.popover.top {
  margin-top: -10px;
}
.popover.right {
  margin-left: 10px;
}
.popover.bottom {
  margin-top: 10px;
}
.popover.left {
  margin-left: -10px;
}
.popover-title {
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}
.popover-content {
  padding: 9px 14px;
}
.popover > .arrow,
.popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.popover > .arrow {
  border-width: 11px;
}
.popover > .arrow:after {
  content: "";
  border-width: 10px;
}
.popover.top > .arrow {
  bottom: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-color: #999;
  border-top-color: rgba(0, 0, 0, .25);
  border-bottom-width: 0;
}
.popover.top > .arrow:after {
  bottom: 1px;
  margin-left: -10px;
  content: " ";
  border-top-color: #fff;
  border-bottom-width: 0;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-right-color: #999;
  border-right-color: rgba(0, 0, 0, .25);
  border-left-width: 0;
}
.popover.right > .arrow:after {
  bottom: -10px;
  left: 1px;
  content: " ";
  border-right-color: #fff;
  border-left-width: 0;
}
.popover.bottom > .arrow {
  top: -11px;
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999;
  border-bottom-color: rgba(0, 0, 0, .25);
}
.popover.bottom > .arrow:after {
  top: 1px;
  margin-left: -10px;
  content: " ";
  border-top-width: 0;
  border-bottom-color: #fff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999;
  border-left-color: rgba(0, 0, 0, .25);
}
.popover.left > .arrow:after {
  right: 1px;
  bottom: -10px;
  content: " ";
  border-right-width: 0;
  border-left-color: #fff;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner > .item {
  position: relative;
  display: none;
  -webkit-transition: .6s ease-in-out left;
       -o-transition: .6s ease-in-out left;
          transition: .6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
}
@media all and (transform-3d), (-webkit-transform-3d) {
  .carousel-inner > .item {
    -webkit-transition: -webkit-transform .6s ease-in-out;
         -o-transition:      -o-transform .6s ease-in-out;
            transition:         transform .6s ease-in-out;

    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-perspective: 1000px;
            perspective: 1000px;
  }
  .carousel-inner > .item.next,
  .carousel-inner > .item.active.right {
    left: 0;
    -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
  }
  .carousel-inner > .item.prev,
  .carousel-inner > .item.active.left {
    left: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
  }
  .carousel-inner > .item.next.left,
  .carousel-inner > .item.prev.right,
  .carousel-inner > .item.active {
    left: 0;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
}
.carousel-inner > .active,
.carousel-inner > .next,
.carousel-inner > .prev {
  display: block;
}
.carousel-inner > .active {
  left: 0;
}
.carousel-inner > .next,
.carousel-inner > .prev {
  position: absolute;
  top: 0;
  width: 100%;
}
.carousel-inner > .next {
  left: 100%;
}
.carousel-inner > .prev {
  left: -100%;
}
.carousel-inner > .next.left,
.carousel-inner > .prev.right {
  left: 0;
}
.carousel-inner > .active.left {
  left: -100%;
}
.carousel-inner > .active.right {
  left: 100%;
}
.carousel-control {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
  background-color: rgba(0, 0, 0, 0);
  filter: alpha(opacity=50);
  opacity: .5;
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control.right {
  right: 0;
  left: auto;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));
  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}
.carousel-control:hover,
.carousel-control:focus {
  color: #fff;
  text-decoration: none;
  filter: alpha(opacity=90);
  outline: 0;
  opacity: .9;
}
.carousel-control .icon-prev,
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
  position: absolute;
  top: 50%;
  z-index: 5;
  display: inline-block;
  margin-top: -10px;
}
.carousel-control .icon-prev,
.carousel-control .glyphicon-chevron-left {
  left: 50%;
  margin-left: -10px;
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
  margin-right: -10px;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  font-family: serif;
  line-height: 1;
}
.carousel-control .icon-prev:before {
  content: '\\2039';
}
.carousel-control .icon-next:before {
  content: '\\203a';
}
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #000 \9;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
}
.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 0;
  background-color: #fff;
}
.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);
}
.carousel-caption .btn {
  text-shadow: none;
}
@media screen and (min-width: 768px) {
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -10px;
    font-size: 30px;
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .icon-prev {
    margin-left: -10px;
  }
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next {
    margin-right: -10px;
  }
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-header:before,
.modal-header:after,
.modal-footer:before,
.modal-footer:after {
  display: table;
  content: " ";
}
.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-header:after,
.modal-footer:after {
  clear: both;
}
.center-block {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
.hide {
  display: none !important;
}
.show {
  display: block !important;
}
.invisible {
  visibility: hidden;
}
.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.hidden {
  display: none !important;
}
.affix {
  position: fixed;
}
@-ms-viewport {
  width: device-width;
}
.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
  display: none !important;
}
.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
  display: none !important;
}
@media (max-width: 767px) {
  .visible-xs {
    display: block !important;
  }
  table.visible-xs {
    display: table !important;
  }
  tr.visible-xs {
    display: table-row !important;
  }
  th.visible-xs,
  td.visible-xs {
    display: table-cell !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-block {
    display: block !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline {
    display: inline !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm {
    display: block !important;
  }
  table.visible-sm {
    display: table !important;
  }
  tr.visible-sm {
    display: table-row !important;
  }
  th.visible-sm,
  td.visible-sm {
    display: table-cell !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-block {
    display: block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline {
    display: inline !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md {
    display: block !important;
  }
  table.visible-md {
    display: table !important;
  }
  tr.visible-md {
    display: table-row !important;
  }
  th.visible-md,
  td.visible-md {
    display: table-cell !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-block {
    display: block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline {
    display: inline !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg {
    display: block !important;
  }
  table.visible-lg {
    display: table !important;
  }
  tr.visible-lg {
    display: table-row !important;
  }
  th.visible-lg,
  td.visible-lg {
    display: table-cell !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-block {
    display: block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline {
    display: inline !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline-block {
    display: inline-block !important;
  }
}
@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}
.visible-print {
  display: none !important;
}
@media print {
  .visible-print {
    display: block !important;
  }
  table.visible-print {
    display: table !important;
  }
  tr.visible-print {
    display: table-row !important;
  }
  th.visible-print,
  td.visible-print {
    display: table-cell !important;
  }
}
.visible-print-block {
  display: none !important;
}
@media print {
  .visible-print-block {
    display: block !important;
  }
}
.visible-print-inline {
  display: none !important;
}
@media print {
  .visible-print-inline {
    display: inline !important;
  }
}
.visible-print-inline-block {
  display: none !important;
}
@media print {
  .visible-print-inline-block {
    display: inline-block !important;
  }
}
@media print {
  .hidden-print {
    display: none !important;
  }
}
/*# sourceMappingURL=bootstrap.css.map */

h3tml,b3ody{ width:100%; height:100%; margin:0; padding:0; background:#F0F0F0; font-size:14px; font-family:Verdana,Tahoma; line-height:22px; }

@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import 'custom.css';
@import url("chrome://communicator/skin/");
@import "common.css" screen, projection;
@import url('landscape.css') screen and (orientation:landscape);

@media (-webkit-transform-3d) {
  .foo {
    transform-style: preserve-3d;
  }
}

@media (-webkit-transform-3d: 1) {
  .foo {
    transform-style: preserve-3d;
  }
}

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
.btn-default,
.btn-primary,
.btn-success,
.btn-info,
.btn-warning,
.btn-danger {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, .2);
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);
}
.btn-default:active,
.btn-primary:active,
.btn-success:active,
.btn-info:active,
.btn-warning:active,
.btn-danger:active,
.btn-default.active,
.btn-primary.active,
.btn-success.active,
.btn-info.active,
.btn-warning.active,
.btn-danger.active {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
.btn-default.disabled,
.btn-primary.disabled,
.btn-success.disabled,
.btn-info.disabled,
.btn-warning.disabled,
.btn-danger.disabled,
.btn-default[disabled],
.btn-primary[disabled],
.btn-success[disabled],
.btn-info[disabled],
.btn-warning[disabled],
.btn-danger[disabled],
fieldset[disabled] .btn-default,
fieldset[disabled] .btn-primary,
fieldset[disabled] .btn-success,
fieldset[disabled] .btn-info,
fieldset[disabled] .btn-warning,
fieldset[disabled] .btn-danger {
  -webkit-box-shadow: none;
          box-shadow: none;
}
.btn-default .badge,
.btn-primary .badge,
.btn-success .badge,
.btn-info .badge,
.btn-warning .badge,
.btn-danger .badge {
  text-shadow: none;
}
.btn:active,
.btn.active {
  background-image: none;
}
.btn-default {
  text-shadow: 0 1px 0 #fff;
  background-image: -webkit-linear-gradient(top, #fff 0%, #e0e0e0 100%);
  background-image:      -o-linear-gradient(top, #fff 0%, #e0e0e0 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#e0e0e0));
  background-image:         linear-gradient(to bottom, #fff 0%, #e0e0e0 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe0e0e0', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #dbdbdb;
  border-color: #ccc;
}
.btn-default:hover,
.btn-default:focus {
  background-color: #e0e0e0;
  background-position: 0 -15px;
}
.btn-default:active,
.btn-default.active {
  background-color: #e0e0e0;
  border-color: #dbdbdb;
}
.btn-default.disabled,
.btn-default[disabled],
fieldset[disabled] .btn-default,
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled.focus,
.btn-default[disabled].focus,
fieldset[disabled] .btn-default.focus,
.btn-default.disabled:active,
.btn-default[disabled]:active,
fieldset[disabled] .btn-default:active,
.btn-default.disabled.active,
.btn-default[disabled].active,
fieldset[disabled] .btn-default.active {
  background-color: #e0e0e0;
  background-image: none;
}
.btn-primary {
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #265a88 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #265a88 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#265a88));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #265a88 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff265a88', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #245580;
}
.btn-primary:hover,
.btn-primary:focus {
  background-color: #265a88;
  background-position: 0 -15px;
}
.btn-primary:active,
.btn-primary.active {
  background-color: #265a88;
  border-color: #245580;
}
.btn-primary.disabled,
.btn-primary[disabled],
fieldset[disabled] .btn-primary,
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled.focus,
.btn-primary[disabled].focus,
fieldset[disabled] .btn-primary.focus,
.btn-primary.disabled:active,
.btn-primary[disabled]:active,
fieldset[disabled] .btn-primary:active,
.btn-primary.disabled.active,
.btn-primary[disabled].active,
fieldset[disabled] .btn-primary.active {
  background-color: #265a88;
  background-image: none;
}
.btn-success {
  background-image: -webkit-linear-gradient(top, #5cb85c 0%, #419641 100%);
  background-image:      -o-linear-gradient(top, #5cb85c 0%, #419641 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#5cb85c), to(#419641));
  background-image:         linear-gradient(to bottom, #5cb85c 0%, #419641 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff419641', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #3e8f3e;
}
.btn-success:hover,
.btn-success:focus {
  background-color: #419641;
  background-position: 0 -15px;
}
.btn-success:active,
.btn-success.active {
  background-color: #419641;
  border-color: #3e8f3e;
}
.btn-success.disabled,
.btn-success[disabled],
fieldset[disabled] .btn-success,
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled.focus,
.btn-success[disabled].focus,
fieldset[disabled] .btn-success.focus,
.btn-success.disabled:active,
.btn-success[disabled]:active,
fieldset[disabled] .btn-success:active,
.btn-success.disabled.active,
.btn-success[disabled].active,
fieldset[disabled] .btn-success.active {
  background-color: #419641;
  background-image: none;
}
.btn-info {
  background-image: -webkit-linear-gradient(top, #5bc0de 0%, #2aabd2 100%);
  background-image:      -o-linear-gradient(top, #5bc0de 0%, #2aabd2 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#5bc0de), to(#2aabd2));
  background-image:         linear-gradient(to bottom, #5bc0de 0%, #2aabd2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff2aabd2', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #28a4c9;
}
.btn-info:hover,
.btn-info:focus {
  background-color: #2aabd2;
  background-position: 0 -15px;
}
.btn-info:active,
.btn-info.active {
  background-color: #2aabd2;
  border-color: #28a4c9;
}
.btn-info.disabled,
.btn-info[disabled],
fieldset[disabled] .btn-info,
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled.focus,
.btn-info[disabled].focus,
fieldset[disabled] .btn-info.focus,
.btn-info.disabled:active,
.btn-info[disabled]:active,
fieldset[disabled] .btn-info:active,
.btn-info.disabled.active,
.btn-info[disabled].active,
fieldset[disabled] .btn-info.active {
  background-color: #2aabd2;
  background-image: none;
}
.btn-warning {
  background-image: -webkit-linear-gradient(top, #f0ad4e 0%, #eb9316 100%);
  background-image:      -o-linear-gradient(top, #f0ad4e 0%, #eb9316 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f0ad4e), to(#eb9316));
  background-image:         linear-gradient(to bottom, #f0ad4e 0%, #eb9316 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff0ad4e', endColorstr='#ffeb9316', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #e38d13;
}
.btn-warning:hover,
.btn-warning:focus {
  background-color: #eb9316;
  background-position: 0 -15px;
}
.btn-warning:active,
.btn-warning.active {
  background-color: #eb9316;
  border-color: #e38d13;
}
.btn-warning.disabled,
.btn-warning[disabled],
fieldset[disabled] .btn-warning,
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled.focus,
.btn-warning[disabled].focus,
fieldset[disabled] .btn-warning.focus,
.btn-warning.disabled:active,
.btn-warning[disabled]:active,
fieldset[disabled] .btn-warning:active,
.btn-warning.disabled.active,
.btn-warning[disabled].active,
fieldset[disabled] .btn-warning.active {
  background-color: #eb9316;
  background-image: none;
}
.btn-danger {
  background-image: -webkit-linear-gradient(top, #d9534f 0%, #c12e2a 100%);
  background-image:      -o-linear-gradient(top, #d9534f 0%, #c12e2a 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9534f), to(#c12e2a));
  background-image:         linear-gradient(to bottom, #d9534f 0%, #c12e2a 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc12e2a', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-color: #b92c28;
}
.btn-danger:hover,
.btn-danger:focus {
  background-color: #c12e2a;
  background-position: 0 -15px;
}
.btn-danger:active,
.btn-danger.active {
  background-color: #c12e2a;
  border-color: #b92c28;
}
.btn-danger.disabled,
.btn-danger[disabled],
fieldset[disabled] .btn-danger,
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled.focus,
.btn-danger[disabled].focus,
fieldset[disabled] .btn-danger.focus,
.btn-danger.disabled:active,
.btn-danger[disabled]:active,
fieldset[disabled] .btn-danger:active,
.btn-danger.disabled.active,
.btn-danger[disabled].active,
fieldset[disabled] .btn-danger.active {
  background-color: #c12e2a;
  background-image: none;
}
.thumbnail,
.img-thumbnail {
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  background-color: #e8e8e8;
  background-image: -webkit-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);
  background-image:      -o-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#e8e8e8));
  background-image:         linear-gradient(to bottom, #f5f5f5 0%, #e8e8e8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#ffe8e8e8', GradientType=0);
  background-repeat: repeat-x;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  background-color: #2e6da4;
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2e6da4));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #2e6da4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2e6da4', GradientType=0);
  background-repeat: repeat-x;
}
.navbar-default {
  background-image: -webkit-linear-gradient(top, #fff 0%, #f8f8f8 100%);
  background-image:      -o-linear-gradient(top, #fff 0%, #f8f8f8 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f8f8f8));
  background-image:         linear-gradient(to bottom, #fff 0%, #f8f8f8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff8f8f8', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .active > a {
  background-image: -webkit-linear-gradient(top, #dbdbdb 0%, #e2e2e2 100%);
  background-image:      -o-linear-gradient(top, #dbdbdb 0%, #e2e2e2 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#dbdbdb), to(#e2e2e2));
  background-image:         linear-gradient(to bottom, #dbdbdb 0%, #e2e2e2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdbdbdb', endColorstr='#ffe2e2e2', GradientType=0);
  background-repeat: repeat-x;
  -webkit-box-shadow: inset 0 3px 9px rgba(0, 0, 0, .075);
          box-shadow: inset 0 3px 9px rgba(0, 0, 0, .075);
}
.navbar-brand,
.navbar-nav > li > a {
  text-shadow: 0 1px 0 rgba(255, 255, 255, .25);
}
.navbar-inverse {
  background-image: -webkit-linear-gradient(top, #3c3c3c 0%, #222 100%);
  background-image:      -o-linear-gradient(top, #3c3c3c 0%, #222 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#3c3c3c), to(#222));
  background-image:         linear-gradient(to bottom, #3c3c3c 0%, #222 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3c3c3c', endColorstr='#ff222222', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  background-repeat: repeat-x;
  border-radius: 4px;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .active > a {
  background-image: -webkit-linear-gradient(top, #080808 0%, #0f0f0f 100%);
  background-image:      -o-linear-gradient(top, #080808 0%, #0f0f0f 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#080808), to(#0f0f0f));
  background-image:         linear-gradient(to bottom, #080808 0%, #0f0f0f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff080808', endColorstr='#ff0f0f0f', GradientType=0);
  background-repeat: repeat-x;
  -webkit-box-shadow: inset 0 3px 9px rgba(0, 0, 0, .25);
          box-shadow: inset 0 3px 9px rgba(0, 0, 0, .25);
}
.navbar-inverse .navbar-brand,
.navbar-inverse .navbar-nav > li > a {
  text-shadow: 0 -1px 0 rgba(0, 0, 0, .25);
}
.navbar-static-top,
.navbar-fixed-top,
.navbar-fixed-bottom {
  border-radius: 0;
}
@media (max-width: 767px) {
  .navbar .navbar-nav .open .dropdown-menu > .active > a,
  .navbar .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-image: -webkit-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
    background-image:      -o-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2e6da4));
    background-image:         linear-gradient(to bottom, #337ab7 0%, #2e6da4 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2e6da4', GradientType=0);
    background-repeat: repeat-x;
  }
}
.alert {
  text-shadow: 0 1px 0 rgba(255, 255, 255, .2);
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .25), 0 1px 2px rgba(0, 0, 0, .05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .25), 0 1px 2px rgba(0, 0, 0, .05);
}
.alert-success {
  background-image: -webkit-linear-gradient(top, #dff0d8 0%, #c8e5bc 100%);
  background-image:      -o-linear-gradient(top, #dff0d8 0%, #c8e5bc 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#dff0d8), to(#c8e5bc));
  background-image:         linear-gradient(to bottom, #dff0d8 0%, #c8e5bc 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdff0d8', endColorstr='#ffc8e5bc', GradientType=0);
  background-repeat: repeat-x;
  border-color: #b2dba1;
}
.alert-info {
  background-image: -webkit-linear-gradient(top, #d9edf7 0%, #b9def0 100%);
  background-image:      -o-linear-gradient(top, #d9edf7 0%, #b9def0 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9edf7), to(#b9def0));
  background-image:         linear-gradient(to bottom, #d9edf7 0%, #b9def0 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9edf7', endColorstr='#ffb9def0', GradientType=0);
  background-repeat: repeat-x;
  border-color: #9acfea;
}
.alert-warning {
  background-image: -webkit-linear-gradient(top, #fcf8e3 0%, #f8efc0 100%);
  background-image:      -o-linear-gradient(top, #fcf8e3 0%, #f8efc0 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fcf8e3), to(#f8efc0));
  background-image:         linear-gradient(to bottom, #fcf8e3 0%, #f8efc0 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcf8e3', endColorstr='#fff8efc0', GradientType=0);
  background-repeat: repeat-x;
  border-color: #f5e79e;
}
.alert-danger {
  background-image: -webkit-linear-gradient(top, #f2dede 0%, #e7c3c3 100%);
  background-image:      -o-linear-gradient(top, #f2dede 0%, #e7c3c3 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f2dede), to(#e7c3c3));
  background-image:         linear-gradient(to bottom, #f2dede 0%, #e7c3c3 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2dede', endColorstr='#ffe7c3c3', GradientType=0);
  background-repeat: repeat-x;
  border-color: #dca7a7;
}
.progress {
  background-image: -webkit-linear-gradient(top, #ebebeb 0%, #f5f5f5 100%);
  background-image:      -o-linear-gradient(top, #ebebeb 0%, #f5f5f5 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#ebebeb), to(#f5f5f5));
  background-image:         linear-gradient(to bottom, #ebebeb 0%, #f5f5f5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffebebeb', endColorstr='#fff5f5f5', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar {
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #286090 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #286090 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#286090));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #286090 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff286090', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-success {
  background-image: -webkit-linear-gradient(top, #5cb85c 0%, #449d44 100%);
  background-image:      -o-linear-gradient(top, #5cb85c 0%, #449d44 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#5cb85c), to(#449d44));
  background-image:         linear-gradient(to bottom, #5cb85c 0%, #449d44 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5cb85c', endColorstr='#ff449d44', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-info {
  background-image: -webkit-linear-gradient(top, #5bc0de 0%, #31b0d5 100%);
  background-image:      -o-linear-gradient(top, #5bc0de 0%, #31b0d5 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#5bc0de), to(#31b0d5));
  background-image:         linear-gradient(to bottom, #5bc0de 0%, #31b0d5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de', endColorstr='#ff31b0d5', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-warning {
  background-image: -webkit-linear-gradient(top, #f0ad4e 0%, #ec971f 100%);
  background-image:      -o-linear-gradient(top, #f0ad4e 0%, #ec971f 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f0ad4e), to(#ec971f));
  background-image:         linear-gradient(to bottom, #f0ad4e 0%, #ec971f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff0ad4e', endColorstr='#ffec971f', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-danger {
  background-image: -webkit-linear-gradient(top, #d9534f 0%, #c9302c 100%);
  background-image:      -o-linear-gradient(top, #d9534f 0%, #c9302c 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9534f), to(#c9302c));
  background-image:         linear-gradient(to bottom, #d9534f 0%, #c9302c 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9534f', endColorstr='#ffc9302c', GradientType=0);
  background-repeat: repeat-x;
}
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
}
.list-group {
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .075);
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  text-shadow: 0 -1px 0 #286090;
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #2b669a 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #2b669a 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2b669a));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #2b669a 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2b669a', GradientType=0);
  background-repeat: repeat-x;
  border-color: #2b669a;
}
.list-group-item.active .badge,
.list-group-item.active:hover .badge,
.list-group-item.active:focus .badge {
  text-shadow: none;
}
.panel {
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .05);
}
.panel-default > .panel-heading {
  background-image: -webkit-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);
  background-image:      -o-linear-gradient(top, #f5f5f5 0%, #e8e8e8 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#e8e8e8));
  background-image:         linear-gradient(to bottom, #f5f5f5 0%, #e8e8e8 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#ffe8e8e8', GradientType=0);
  background-repeat: repeat-x;
}
.panel-primary > .panel-heading {
  background-image: -webkit-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
  background-image:      -o-linear-gradient(top, #337ab7 0%, #2e6da4 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#337ab7), to(#2e6da4));
  background-image:         linear-gradient(to bottom, #337ab7 0%, #2e6da4 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7', endColorstr='#ff2e6da4', GradientType=0);
  background-repeat: repeat-x;
}
.panel-success > .panel-heading {
  background-image: -webkit-linear-gradient(top, #dff0d8 0%, #d0e9c6 100%);
  background-image:      -o-linear-gradient(top, #dff0d8 0%, #d0e9c6 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#dff0d8), to(#d0e9c6));
  background-image:         linear-gradient(to bottom, #dff0d8 0%, #d0e9c6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdff0d8', endColorstr='#ffd0e9c6', GradientType=0);
  background-repeat: repeat-x;
}
.panel-info > .panel-heading {
  background-image: -webkit-linear-gradient(top, #d9edf7 0%, #c4e3f3 100%);
  background-image:      -o-linear-gradient(top, #d9edf7 0%, #c4e3f3 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d9edf7), to(#c4e3f3));
  background-image:         linear-gradient(to bottom, #d9edf7 0%, #c4e3f3 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffd9edf7', endColorstr='#ffc4e3f3', GradientType=0);
  background-repeat: repeat-x;
}
.panel-warning > .panel-heading {
  background-image: -webkit-linear-gradient(top, #fcf8e3 0%, #faf2cc 100%);
  background-image:      -o-linear-gradient(top, #fcf8e3 0%, #faf2cc 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fcf8e3), to(#faf2cc));
  background-image:         linear-gradient(to bottom, #fcf8e3 0%, #faf2cc 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcf8e3', endColorstr='#fffaf2cc', GradientType=0);
  background-repeat: repeat-x;
}
.panel-danger > .panel-heading {
  background-image: -webkit-linear-gradient(top, #f2dede 0%, #ebcccc 100%);
  background-image:      -o-linear-gradient(top, #f2dede 0%, #ebcccc 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f2dede), to(#ebcccc));
  background-image:         linear-gradient(to bottom, #f2dede 0%, #ebcccc 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2dede', endColorstr='#ffebcccc', GradientType=0);
  background-repeat: repeat-x;
}
.well {
  background-image: -webkit-linear-gradient(top, #e8e8e8 0%, #f5f5f5 100%);
  background-image:      -o-linear-gradient(top, #e8e8e8 0%, #f5f5f5 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, from(#e8e8e8), to(#f5f5f5));
  background-image:         linear-gradient(to bottom, #e8e8e8 0%, #f5f5f5 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe8e8e8', endColorstr='#fff5f5f5', GradientType=0);
  background-repeat: repeat-x;
  border-color: #dcdcdc;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, .05), 0 1px 0 rgba(255, 255, 255, .1);
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, .05), 0 1px 0 rgba(255, 255, 255, .1);
}
/*# sourceMappingURL=bootstrap-theme.css.map */

/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 *//*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}@media print{*,::after,::before,blockquote::first-letter,blockquote::first-line,div::first-letter,div::first-line,li::first-letter,li::first-line,p::first-letter,p::first-line{text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}abbr[title]::after{content:" (" attr(title) ")"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}@-ms-viewport{width:device-width}html{-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}body{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#292b2c;background-color:#fff}[tabindex="-1"]:focus{outline:0!important}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{cursor:help}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}a{color:#0275d8;text-decoration:none}a:focus,a:hover{color:#014c8c;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle}[role=button]{cursor:pointer}[role=button],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}table{border-collapse:collapse;background-color:transparent}caption{padding-top:.75rem;padding-bottom:.75rem;color:#636c72;text-align:left;caption-side:bottom}th{text-align:left}label{display:inline-block;margin-bottom:.5rem}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,select,textarea{line-height:inherit}input[type=checkbox]:disabled,input[type=radio]:disabled{cursor:not-allowed}input[type=date],input[type=time],input[type=datetime-local],input[type=month]{-webkit-appearance:listbox}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit}input[type=search]{-webkit-appearance:none}output{display:inline-block}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.1}.display-2{font-size:5.5rem;font-weight:300;line-height:1.1}.display-3{font-size:4.5rem;font-weight:300;line-height:1.1}.display-4{font-size:3.5rem;font-weight:300;line-height:1.1}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:5px}.initialism{font-size:90%;text-transform:uppercase}.blockquote{padding:.5rem 1rem;margin-bottom:1rem;font-size:1.25rem;border-left:.25rem solid #eceeef}.blockquote-footer{display:block;font-size:80%;color:#636c72}.blockquote-footer::before{content:"\\2014 \\00A0"}.blockquote-reverse{padding-right:1rem;padding-left:0;text-align:right;border-right:.25rem solid #eceeef;border-left:0}.blockquote-reverse .blockquote-footer::before{content:""}.blockquote-reverse .blockquote-footer::after{content:"\\00A0 \\2014"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#636c72}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}code{padding:.2rem .4rem;font-size:90%;color:#bd4147;background-color:#f7f7f9;border-radius:.25rem}a>code{padding:0;color:inherit;background-color:inherit}kbd{padding:.2rem .4rem;font-size:90%;color:#fff;background-color:#292b2c;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;margin-top:0;margin-bottom:1rem;font-size:90%;color:#292b2c}pre code{padding:0;font-size:inherit;color:inherit;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{position:relative;margin-left:auto;margin-right:auto;padding-right:15px;padding-left:15px}@media (min-width:576px){.container{padding-right:15px;padding-left:15px}}@media (min-width:768px){.container{padding-right:15px;padding-left:15px}}@media (min-width:992px){.container{padding-right:15px;padding-left:15px}}@media (min-width:1200px){.container{padding-right:15px;padding-left:15px}}@media (min-width:576px){.container{width:540px;max-width:100%}}@media (min-width:768px){.container{width:720px;max-width:100%}}@media (min-width:992px){.container{width:960px;max-width:100%}}@media (min-width:1200px){.container{width:1140px;max-width:100%}}.container-fluid{position:relative;margin-left:auto;margin-right:auto;padding-right:15px;padding-left:15px}@media (min-width:576px){.container-fluid{padding-right:15px;padding-left:15px}}@media (min-width:768px){.container-fluid{padding-right:15px;padding-left:15px}}@media (min-width:992px){.container-fluid{padding-right:15px;padding-left:15px}}@media (min-width:1200px){.container-fluid{padding-right:15px;padding-left:15px}}.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}@media (min-width:576px){.row{margin-right:-15px;margin-left:-15px}}@media (min-width:768px){.row{margin-right:-15px;margin-left:-15px}}@media (min-width:992px){.row{margin-right:-15px;margin-left:-15px}}@media (min-width:1200px){.row{margin-right:-15px;margin-left:-15px}}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}@media (min-width:576px){.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{padding-right:15px;padding-left:15px}}@media (min-width:768px){.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{padding-right:15px;padding-left:15px}}@media (min-width:992px){.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{padding-right:15px;padding-left:15px}}@media (min-width:1200px){.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9{padding-right:15px;padding-left:15px}}.col{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-0{right:auto}.pull-1{right:8.333333%}.pull-2{right:16.666667%}.pull-3{right:25%}.pull-4{right:33.333333%}.pull-5{right:41.666667%}.pull-6{right:50%}.pull-7{right:58.333333%}.pull-8{right:66.666667%}.pull-9{right:75%}.pull-10{right:83.333333%}.pull-11{right:91.666667%}.pull-12{right:100%}.push-0{left:auto}.push-1{left:8.333333%}.push-2{left:16.666667%}.push-3{left:25%}.push-4{left:33.333333%}.push-5{left:41.666667%}.push-6{left:50%}.push-7{left:58.333333%}.push-8{left:66.666667%}.push-9{left:75%}.push-10{left:83.333333%}.push-11{left:91.666667%}.push-12{left:100%}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-sm-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-sm-0{right:auto}.pull-sm-1{right:8.333333%}.pull-sm-2{right:16.666667%}.pull-sm-3{right:25%}.pull-sm-4{right:33.333333%}.pull-sm-5{right:41.666667%}.pull-sm-6{right:50%}.pull-sm-7{right:58.333333%}.pull-sm-8{right:66.666667%}.pull-sm-9{right:75%}.pull-sm-10{right:83.333333%}.pull-sm-11{right:91.666667%}.pull-sm-12{right:100%}.push-sm-0{left:auto}.push-sm-1{left:8.333333%}.push-sm-2{left:16.666667%}.push-sm-3{left:25%}.push-sm-4{left:33.333333%}.push-sm-5{left:41.666667%}.push-sm-6{left:50%}.push-sm-7{left:58.333333%}.push-sm-8{left:66.666667%}.push-sm-9{left:75%}.push-sm-10{left:83.333333%}.push-sm-11{left:91.666667%}.push-sm-12{left:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-md-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-md-0{right:auto}.pull-md-1{right:8.333333%}.pull-md-2{right:16.666667%}.pull-md-3{right:25%}.pull-md-4{right:33.333333%}.pull-md-5{right:41.666667%}.pull-md-6{right:50%}.pull-md-7{right:58.333333%}.pull-md-8{right:66.666667%}.pull-md-9{right:75%}.pull-md-10{right:83.333333%}.pull-md-11{right:91.666667%}.pull-md-12{right:100%}.push-md-0{left:auto}.push-md-1{left:8.333333%}.push-md-2{left:16.666667%}.push-md-3{left:25%}.push-md-4{left:33.333333%}.push-md-5{left:41.666667%}.push-md-6{left:50%}.push-md-7{left:58.333333%}.push-md-8{left:66.666667%}.push-md-9{left:75%}.push-md-10{left:83.333333%}.push-md-11{left:91.666667%}.push-md-12{left:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-lg-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-lg-0{right:auto}.pull-lg-1{right:8.333333%}.pull-lg-2{right:16.666667%}.pull-lg-3{right:25%}.pull-lg-4{right:33.333333%}.pull-lg-5{right:41.666667%}.pull-lg-6{right:50%}.pull-lg-7{right:58.333333%}.pull-lg-8{right:66.666667%}.pull-lg-9{right:75%}.pull-lg-10{right:83.333333%}.pull-lg-11{right:91.666667%}.pull-lg-12{right:100%}.push-lg-0{left:auto}.push-lg-1{left:8.333333%}.push-lg-2{left:16.666667%}.push-lg-3{left:25%}.push-lg-4{left:33.333333%}.push-lg-5{left:41.666667%}.push-lg-6{left:50%}.push-lg-7{left:58.333333%}.push-lg-8{left:66.666667%}.push-lg-9{left:75%}.push-lg-10{left:83.333333%}.push-lg-11{left:91.666667%}.push-lg-12{left:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-webkit-flex-basis:0;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:auto}.col-xl-1{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-webkit-box-flex:0;-webkit-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-webkit-box-flex:0;-webkit-flex:0 0 50%;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-webkit-box-flex:0;-webkit-flex:0 0 75%;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.pull-xl-0{right:auto}.pull-xl-1{right:8.333333%}.pull-xl-2{right:16.666667%}.pull-xl-3{right:25%}.pull-xl-4{right:33.333333%}.pull-xl-5{right:41.666667%}.pull-xl-6{right:50%}.pull-xl-7{right:58.333333%}.pull-xl-8{right:66.666667%}.pull-xl-9{right:75%}.pull-xl-10{right:83.333333%}.pull-xl-11{right:91.666667%}.pull-xl-12{right:100%}.push-xl-0{left:auto}.push-xl-1{left:8.333333%}.push-xl-2{left:16.666667%}.push-xl-3{left:25%}.push-xl-4{left:33.333333%}.push-xl-5{left:41.666667%}.push-xl-6{left:50%}.push-xl-7{left:58.333333%}.push-xl-8{left:66.666667%}.push-xl-9{left:75%}.push-xl-10{left:83.333333%}.push-xl-11{left:91.666667%}.push-xl-12{left:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;max-width:100%;margin-bottom:1rem}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #eceeef}.table thead th{vertical-align:bottom;border-bottom:2px solid #eceeef}.table tbody+tbody{border-top:2px solid #eceeef}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #eceeef}.table-bordered td,.table-bordered th{border:1px solid #eceeef}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table-success,.table-success>td,.table-success>th{background-color:#dff0d8}.table-hover .table-success:hover{background-color:#d0e9c6}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#d0e9c6}.table-info,.table-info>td,.table-info>th{background-color:#d9edf7}.table-hover .table-info:hover{background-color:#c4e3f3}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#c4e3f3}.table-warning,.table-warning>td,.table-warning>th{background-color:#fcf8e3}.table-hover .table-warning:hover{background-color:#faf2cc}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#faf2cc}.table-danger,.table-danger>td,.table-danger>th{background-color:#f2dede}.table-hover .table-danger:hover{background-color:#ebcccc}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#ebcccc}.thead-inverse th{color:#fff;background-color:#292b2c}.thead-default th{color:#464a4c;background-color:#eceeef}.table-inverse{color:#fff;background-color:#292b2c}.table-inverse td,.table-inverse th,.table-inverse thead th{border-color:#fff}.table-inverse.table-bordered{border:0}.table-responsive{display:block;width:100%;overflow-x:auto;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive.table-bordered{border:0}.form-control{display:block;width:100%;padding:.5rem .75rem;font-size:1rem;line-height:1.25;color:#464a4c;background-color:#fff;background-image:none;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-webkit-transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;-o-transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#464a4c;background-color:#fff;border-color:#5cb3fd;outline:0}.form-control::-webkit-input-placeholder{color:#636c72;opacity:1}.form-control::-moz-placeholder{color:#636c72;opacity:1}.form-control:-ms-input-placeholder{color:#636c72;opacity:1}.form-control::placeholder{color:#636c72;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#eceeef;opacity:1}.form-control:disabled{cursor:not-allowed}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#464a4c;background-color:#fff}.form-control-file,.form-control-range{display:block}.col-form-label{padding-top:calc(.5rem - 1px * 2);padding-bottom:calc(.5rem - 1px * 2);margin-bottom:0}.col-form-label-lg{padding-top:calc(.75rem - 1px * 2);padding-bottom:calc(.75rem - 1px * 2);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem - 1px * 2);padding-bottom:calc(.25rem - 1px * 2);font-size:.875rem}.col-form-legend{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0;font-size:1rem}.form-control-static{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0;line-height:1.25;border:solid transparent;border-width:1px 0}.form-control-static.form-control-lg,.form-control-static.form-control-sm,.input-group-lg>.form-control-static.form-control,.input-group-lg>.form-control-static.input-group-addon,.input-group-lg>.input-group-btn>.form-control-static.btn,.input-group-sm>.form-control-static.form-control,.input-group-sm>.form-control-static.input-group-addon,.input-group-sm>.input-group-btn>.form-control-static.btn{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-sm>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),.input-group-sm>select.input-group-addon:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:1.8125rem}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.input-group-lg>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),.input-group-lg>select.input-group-addon:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:3.166667rem}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-check{position:relative;display:block;margin-bottom:.5rem}.form-check.disabled .form-check-label{color:#636c72;cursor:not-allowed}.form-check-label{padding-left:1.25rem;margin-bottom:0;cursor:pointer}.form-check-input{position:absolute;margin-top:.25rem;margin-left:-1.25rem}.form-check-input:only-child{position:static}.form-check-inline{display:inline-block}.form-check-inline .form-check-label{vertical-align:middle}.form-check-inline+.form-check-inline{margin-left:.75rem}.form-control-feedback{margin-top:.25rem}.form-control-danger,.form-control-success,.form-control-warning{padding-right:2.25rem;background-repeat:no-repeat;background-position:center right .5625rem;-webkit-background-size:1.125rem 1.125rem;background-size:1.125rem 1.125rem}.has-success .col-form-label,.has-success .custom-control,.has-success .form-check-label,.has-success .form-control-feedback,.has-success .form-control-label{color:#5cb85c}.has-success .form-control{border-color:#5cb85c}.has-success .input-group-addon{color:#5cb85c;border-color:#5cb85c;background-color:#eaf6ea}.has-success .form-control-success{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E")}.has-warning .col-form-label,.has-warning .custom-control,.has-warning .form-check-label,.has-warning .form-control-feedback,.has-warning .form-control-label{color:#f0ad4e}.has-warning .form-control{border-color:#f0ad4e}.has-warning .input-group-addon{color:#f0ad4e;border-color:#f0ad4e;background-color:#fff}.has-warning .form-control-warning{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E")}.has-danger .col-form-label,.has-danger .custom-control,.has-danger .form-check-label,.has-danger .form-control-feedback,.has-danger .form-control-label{color:#d9534f}.has-danger .form-control{border-color:#d9534f}.has-danger .input-group-addon{color:#d9534f;border-color:#d9534f;background-color:#fdf7f7}.has-danger .form-control-danger{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E")}.form-inline{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{width:auto}.form-inline .form-control-label{margin-bottom:0;vertical-align:middle}.form-inline .form-check{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:auto;margin-top:0;margin-bottom:0}.form-inline .form-check-label{padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:0}.form-inline .custom-control-indicator{position:static;display:inline-block;margin-right:.25rem;vertical-align:text-bottom}.form-inline .has-feedback .form-control-feedback{top:0}}.btn{display:inline-block;font-weight:400;line-height:1.25;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.5rem 1rem;font-size:1rem;border-radius:.25rem;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.btn:focus,.btn:hover{text-decoration:none}.btn.focus,.btn:focus{outline:0;-webkit-box-shadow:0 0 0 2px rgba(2,117,216,.25);box-shadow:0 0 0 2px rgba(2,117,216,.25)}.btn.disabled,.btn:disabled{cursor:not-allowed;opacity:.65}.btn.active,.btn:active{background-image:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-primary:hover{color:#fff;background-color:#025aa5;border-color:#01549b}.btn-primary.focus,.btn-primary:focus{-webkit-box-shadow:0 0 0 2px rgba(2,117,216,.5);box-shadow:0 0 0 2px rgba(2,117,216,.5)}.btn-primary.disabled,.btn-primary:disabled{background-color:#0275d8;border-color:#0275d8}.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#025aa5;background-image:none;border-color:#01549b}.btn-secondary{color:#292b2c;background-color:#fff;border-color:#ccc}.btn-secondary:hover{color:#292b2c;background-color:#e6e6e6;border-color:#adadad}.btn-secondary.focus,.btn-secondary:focus{-webkit-box-shadow:0 0 0 2px rgba(204,204,204,.5);box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-secondary.disabled,.btn-secondary:disabled{background-color:#fff;border-color:#ccc}.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{color:#292b2c;background-color:#e6e6e6;background-image:none;border-color:#adadad}.btn-info{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#2aabd2}.btn-info.focus,.btn-info:focus{-webkit-box-shadow:0 0 0 2px rgba(91,192,222,.5);box-shadow:0 0 0 2px rgba(91,192,222,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#5bc0de;border-color:#5bc0de}.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#31b0d5;background-image:none;border-color:#2aabd2}.btn-success{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#419641}.btn-success.focus,.btn-success:focus{-webkit-box-shadow:0 0 0 2px rgba(92,184,92,.5);box-shadow:0 0 0 2px rgba(92,184,92,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#5cb85c;border-color:#5cb85c}.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#449d44;background-image:none;border-color:#419641}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#eb9316}.btn-warning.focus,.btn-warning:focus{-webkit-box-shadow:0 0 0 2px rgba(240,173,78,.5);box-shadow:0 0 0 2px rgba(240,173,78,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{color:#fff;background-color:#ec971f;background-image:none;border-color:#eb9316}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#c12e2a}.btn-danger.focus,.btn-danger:focus{-webkit-box-shadow:0 0 0 2px rgba(217,83,79,.5);box-shadow:0 0 0 2px rgba(217,83,79,.5)}.btn-danger.disabled,.btn-danger:disabled{background-color:#d9534f;border-color:#d9534f}.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#c9302c;background-image:none;border-color:#c12e2a}.btn-outline-primary{color:#0275d8;background-image:none;background-color:transparent;border-color:#0275d8}.btn-outline-primary:hover{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-primary.focus,.btn-outline-primary:focus{-webkit-box-shadow:0 0 0 2px rgba(2,117,216,.5);box-shadow:0 0 0 2px rgba(2,117,216,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#0275d8;background-color:transparent}.btn-outline-primary.active,.btn-outline-primary:active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-secondary{color:#ccc;background-image:none;background-color:transparent;border-color:#ccc}.btn-outline-secondary:hover{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-secondary.focus,.btn-outline-secondary:focus{-webkit-box-shadow:0 0 0 2px rgba(204,204,204,.5);box-shadow:0 0 0 2px rgba(204,204,204,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#ccc;background-color:transparent}.btn-outline-secondary.active,.btn-outline-secondary:active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-info{color:#5bc0de;background-image:none;background-color:transparent;border-color:#5bc0de}.btn-outline-info:hover{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-info.focus,.btn-outline-info:focus{-webkit-box-shadow:0 0 0 2px rgba(91,192,222,.5);box-shadow:0 0 0 2px rgba(91,192,222,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#5bc0de;background-color:transparent}.btn-outline-info.active,.btn-outline-info:active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-success{color:#5cb85c;background-image:none;background-color:transparent;border-color:#5cb85c}.btn-outline-success:hover{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-success.focus,.btn-outline-success:focus{-webkit-box-shadow:0 0 0 2px rgba(92,184,92,.5);box-shadow:0 0 0 2px rgba(92,184,92,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#5cb85c;background-color:transparent}.btn-outline-success.active,.btn-outline-success:active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-warning{color:#f0ad4e;background-image:none;background-color:transparent;border-color:#f0ad4e}.btn-outline-warning:hover{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning.focus,.btn-outline-warning:focus{-webkit-box-shadow:0 0 0 2px rgba(240,173,78,.5);box-shadow:0 0 0 2px rgba(240,173,78,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#f0ad4e;background-color:transparent}.btn-outline-warning.active,.btn-outline-warning:active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-danger{color:#d9534f;background-image:none;background-color:transparent;border-color:#d9534f}.btn-outline-danger:hover{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger.focus,.btn-outline-danger:focus{-webkit-box-shadow:0 0 0 2px rgba(217,83,79,.5);box-shadow:0 0 0 2px rgba(217,83,79,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#d9534f;background-color:transparent}.btn-outline-danger.active,.btn-outline-danger:active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-link{font-weight:400;color:#0275d8;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link:disabled{background-color:transparent}.btn-link,.btn-link:active,.btn-link:focus{border-color:transparent}.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#014c8c;text-decoration:underline;background-color:transparent}.btn-link:disabled{color:#636c72}.btn-link:disabled:focus,.btn-link:disabled:hover{text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.show{opacity:1}.collapse{display:none}.collapse.show{display:block}tr.collapse.show{display:table-row}tbody.collapse.show{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;-o-transition:height .35s ease;transition:height .35s ease}.dropdown,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.3em;vertical-align:middle;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-left:.3em solid transparent}.dropdown-toggle:focus{outline:0}.dropup .dropdown-toggle::after{border-top:0;border-bottom:.3em solid}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#292b2c;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-divider{height:1px;margin:.5rem 0;overflow:hidden;background-color:#eceeef}.dropdown-item{display:block;width:100%;padding:3px 1.5rem;clear:both;font-weight:400;color:#292b2c;text-align:inherit;white-space:nowrap;background:0 0;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#1d1e1f;text-decoration:none;background-color:#f7f7f9}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0275d8}.dropdown-item.disabled,.dropdown-item:disabled{color:#636c72;cursor:not-allowed;background-color:transparent}.show>.dropdown-menu{display:block}.show>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#636c72;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.dropup .dropdown-menu{top:auto;bottom:100%;margin-bottom:.125rem}.btn-group,.btn-group-vertical{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-webkit-box-flex:0;-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:2}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn+.dropdown-toggle-split::after{margin-left:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:1.125rem;padding-left:1.125rem}.btn-group-vertical{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}.input-group .form-control{position:relative;z-index:2;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group .form-control:active,.input-group .form-control:focus,.input-group .form-control:hover{z-index:3}.input-group .form-control,.input-group-addon,.input-group-btn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{white-space:nowrap;vertical-align:middle}.input-group-addon{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.25;color:#464a4c;text-align:center;background-color:#eceeef;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.input-group-addon.form-control-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-addon.form-control-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:not(:last-child),.input-group-addon:not(:last-child),.input-group-btn:not(:first-child)>.btn-group:not(:last-child)>.btn,.input-group-btn:not(:first-child)>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group>.btn,.input-group-btn:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:not(:last-child){border-right:0}.input-group .form-control:not(:first-child),.input-group-addon:not(:first-child),.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group>.btn,.input-group-btn:not(:first-child)>.dropdown-toggle,.input-group-btn:not(:last-child)>.btn-group:not(:first-child)>.btn,.input-group-btn:not(:last-child)>.btn:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.form-control+.input-group-addon:not(:first-child){border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative;-webkit-box-flex:1;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:3}.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group{margin-right:-1px}.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group{z-index:2;margin-left:-1px}.input-group-btn:not(:first-child)>.btn-group:active,.input-group-btn:not(:first-child)>.btn-group:focus,.input-group-btn:not(:first-child)>.btn-group:hover,.input-group-btn:not(:first-child)>.btn:active,.input-group-btn:not(:first-child)>.btn:focus,.input-group-btn:not(:first-child)>.btn:hover{z-index:3}.custom-control{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;min-height:1.5rem;padding-left:1.5rem;margin-right:1rem;cursor:pointer}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-indicator{color:#fff;background-color:#0275d8}.custom-control-input:focus~.custom-control-indicator{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 3px #0275d8;box-shadow:0 0 0 1px #fff,0 0 0 3px #0275d8}.custom-control-input:active~.custom-control-indicator{color:#fff;background-color:#8fcafe}.custom-control-input:disabled~.custom-control-indicator{cursor:not-allowed;background-color:#eceeef}.custom-control-input:disabled~.custom-control-description{color:#636c72;cursor:not-allowed}.custom-control-indicator{position:absolute;top:.25rem;left:0;display:block;width:1rem;height:1rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#ddd;background-repeat:no-repeat;background-position:center center;-webkit-background-size:50% 50%;background-size:50% 50%}.custom-checkbox .custom-control-indicator{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-indicator{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-indicator{background-color:#0275d8;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E")}.custom-radio .custom-control-indicator{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-indicator{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E")}.custom-controls-stacked{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.custom-controls-stacked .custom-control{margin-bottom:.25rem}.custom-controls-stacked .custom-control+.custom-control{margin-left:0}.custom-select{display:inline-block;max-width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.25;color:#464a4c;vertical-align:middle;background:#fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center;-webkit-background-size:8px 10px;background-size:8px 10px;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-moz-appearance:none;-webkit-appearance:none}.custom-select:focus{border-color:#5cb3fd;outline:0}.custom-select:focus::-ms-value{color:#464a4c;background-color:#fff}.custom-select:disabled{color:#636c72;cursor:not-allowed;background-color:#eceeef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{padding-top:.375rem;padding-bottom:.375rem;font-size:75%}.custom-file{position:relative;display:inline-block;max-width:100%;height:2.5rem;margin-bottom:0;cursor:pointer}.custom-file-input{min-width:14rem;max-width:100%;height:2.5rem;margin:0;filter:alpha(opacity=0);opacity:0}.custom-file-control{position:absolute;top:0;right:0;left:0;z-index:5;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#464a4c;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.custom-file-control:lang(en)::after{content:"Choose file..."}.custom-file-control::before{position:absolute;top:-1px;right:-1px;bottom:-1px;z-index:6;display:block;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#464a4c;background-color:#eceeef;border:1px solid rgba(0,0,0,.15);border-radius:0 .25rem .25rem 0}.custom-file-control:lang(en)::before{content:"Browse"}.nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5em 1em}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#636c72;cursor:not-allowed}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-right-radius:.25rem;border-top-left-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#eceeef #eceeef #ddd}.nav-tabs .nav-link.disabled{color:#636c72;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#464a4c;background-color:#fff;border-color:#ddd #ddd #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-item.show .nav-link,.nav-pills .nav-link.active{color:#fff;cursor:default;background-color:#0275d8}.nav-fill .nav-item{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:.5rem 1rem}.navbar-brand{display:inline-block;padding-top:.25rem;padding-bottom:.25rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-text{display:inline-block;padding-top:.425rem;padding-bottom:.425rem}.navbar-toggler{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;padding:.25rem .75rem;font-size:1.25rem;line-height:1;background:0 0;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:"";background:no-repeat center center;-webkit-background-size:100% 100%;background-size:100% 100%}.navbar-toggler-left{position:absolute;left:1rem}.navbar-toggler-right{position:absolute;right:1rem}@media (max-width:575px){.navbar-toggleable .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable>.container{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-toggleable{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable .navbar-toggler{display:none}}@media (max-width:767px){.navbar-toggleable-sm .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable-sm>.container{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-toggleable-sm{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-sm .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable-sm>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-sm .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable-sm .navbar-toggler{display:none}}@media (max-width:991px){.navbar-toggleable-md .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable-md>.container{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-toggleable-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-md .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable-md>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-md .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable-md .navbar-toggler{display:none}}@media (max-width:1199px){.navbar-toggleable-lg .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable-lg>.container{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-toggleable-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-lg .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable-lg>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-lg .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable-lg .navbar-toggler{display:none}}.navbar-toggleable-xl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-xl .navbar-nav .dropdown-menu{position:static;float:none}.navbar-toggleable-xl>.container{padding-right:0;padding-left:0}.navbar-toggleable-xl .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.navbar-toggleable-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-toggleable-xl>.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.navbar-toggleable-xl .navbar-collapse{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;width:100%}.navbar-toggleable-xl .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-toggler{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover,.navbar-light .navbar-toggler:focus,.navbar-light .navbar-toggler:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.open,.navbar-light .navbar-nav .open>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-inverse .navbar-brand,.navbar-inverse .navbar-toggler{color:#fff}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover,.navbar-inverse .navbar-toggler:focus,.navbar-inverse .navbar-toggler:hover{color:#fff}.navbar-inverse .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-inverse .navbar-nav .nav-link:focus,.navbar-inverse .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-inverse .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-inverse .navbar-nav .active>.nav-link,.navbar-inverse .navbar-nav .nav-link.active,.navbar-inverse .navbar-nav .nav-link.open,.navbar-inverse .navbar-nav .open>.nav-link{color:#fff}.navbar-inverse .navbar-toggler{border-color:rgba(255,255,255,.1)}.navbar-inverse .navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")}.navbar-inverse .navbar-text{color:rgba(255,255,255,.5)}.card{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#fff;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card-block{-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card>.list-group:first-child .list-group-item:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:#f7f7f9;border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:#f7f7f9;border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-primary{background-color:#0275d8;border-color:#0275d8}.card-primary .card-footer,.card-primary .card-header{background-color:transparent}.card-success{background-color:#5cb85c;border-color:#5cb85c}.card-success .card-footer,.card-success .card-header{background-color:transparent}.card-info{background-color:#5bc0de;border-color:#5bc0de}.card-info .card-footer,.card-info .card-header{background-color:transparent}.card-warning{background-color:#f0ad4e;border-color:#f0ad4e}.card-warning .card-footer,.card-warning .card-header{background-color:transparent}.card-danger{background-color:#d9534f;border-color:#d9534f}.card-danger .card-footer,.card-danger .card-header{background-color:transparent}.card-outline-primary{background-color:transparent;border-color:#0275d8}.card-outline-secondary{background-color:transparent;border-color:#ccc}.card-outline-info{background-color:transparent;border-color:#5bc0de}.card-outline-success{background-color:transparent;border-color:#5cb85c}.card-outline-warning{background-color:transparent;border-color:#f0ad4e}.card-outline-danger{background-color:transparent;border-color:#d9534f}.card-inverse{color:rgba(255,255,255,.65)}.card-inverse .card-footer,.card-inverse .card-header{background-color:transparent;border-color:rgba(255,255,255,.2)}.card-inverse .card-blockquote,.card-inverse .card-footer,.card-inverse .card-header,.card-inverse .card-title{color:#fff}.card-inverse .card-blockquote .blockquote-footer,.card-inverse .card-link,.card-inverse .card-subtitle,.card-inverse .card-text{color:rgba(255,255,255,.65)}.card-inverse .card-link:focus,.card-inverse .card-link:hover{color:#fff}.card-blockquote{padding:0;margin-bottom:0;border-left:0}.card-img{border-radius:calc(.25rem - 1px)}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img-top{border-top-right-radius:calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px)}.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}@media (min-width:576px){.card-deck{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-deck .card{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.card-deck .card:not(:first-child){margin-left:15px}.card-deck .card:not(:last-child){margin-right:15px}}@media (min-width:576px){.card-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group .card{-webkit-box-flex:1;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%}.card-group .card+.card{margin-left:0;border-left:0}.card-group .card:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.card-group .card:first-child .card-img-top{border-top-right-radius:0}.card-group .card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group .card:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.card-group .card:last-child .card-img-top{border-top-left-radius:0}.card-group .card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group .card:not(:first-child):not(:last-child){border-radius:0}.card-group .card:not(:first-child):not(:last-child) .card-img-bottom,.card-group .card:not(:first-child):not(:last-child) .card-img-top{border-radius:0}}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%;margin-bottom:.75rem}}.breadcrumb{padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#eceeef;border-radius:.25rem}.breadcrumb::after{display:block;content:"";clear:both}.breadcrumb-item{float:left}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#636c72;content:"/"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#636c72}.pagination{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-item:first-child .page-link{margin-left:0;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.page-item:last-child .page-link{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.page-item.active .page-link{z-index:2;color:#fff;background-color:#0275d8;border-color:#0275d8}.page-item.disabled .page-link{color:#636c72;pointer-events:none;cursor:not-allowed;background-color:#fff;border-color:#ddd}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#0275d8;background-color:#fff;border:1px solid #ddd}.page-link:focus,.page-link:hover{color:#014c8c;text-decoration:none;background-color:#eceeef;border-color:#ddd}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-bottom-left-radius:.3rem;border-top-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-bottom-left-radius:.2rem;border-top-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-bottom-right-radius:.2rem;border-top-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-default{background-color:#636c72}.badge-default[href]:focus,.badge-default[href]:hover{background-color:#4b5257}.badge-primary{background-color:#0275d8}.badge-primary[href]:focus,.badge-primary[href]:hover{background-color:#025aa5}.badge-success{background-color:#5cb85c}.badge-success[href]:focus,.badge-success[href]:hover{background-color:#449d44}.badge-info{background-color:#5bc0de}.badge-info[href]:focus,.badge-info[href]:hover{background-color:#31b0d5}.badge-warning{background-color:#f0ad4e}.badge-warning[href]:focus,.badge-warning[href]:hover{background-color:#ec971f}.badge-danger{background-color:#d9534f}.badge-danger[href]:focus,.badge-danger[href]:hover{background-color:#c9302c}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#eceeef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-hr{border-top-color:#d0d5d8}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible .close{position:relative;top:-.75rem;right:-1.25rem;padding:.75rem 1.25rem;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d0e9c6;color:#3c763d}.alert-success hr{border-top-color:#c1e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bcdff1;color:#31708f}.alert-info hr{border-top-color:#a6d5ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faf2cc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7ecb5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebcccc;color:#a94442}.alert-danger hr{border-top-color:#e4b9b9}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;font-size:.75rem;line-height:1rem;text-align:center;background-color:#eceeef;border-radius:.25rem}.progress-bar{height:1rem;color:#fff;background-color:#0275d8}.progress-bar-striped{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:1rem 1rem;background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;-o-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.media{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.media-body{-webkit-box-flex:1;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%}.list-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#464a4c;text-align:inherit}.list-group-item-action .list-group-item-heading{color:#292b2c}.list-group-item-action:focus,.list-group-item-action:hover{color:#464a4c;text-decoration:none;background-color:#f7f7f9}.list-group-item-action:active{color:#292b2c;background-color:#eceeef}.list-group-item{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#636c72;cursor:not-allowed;background-color:#fff}.list-group-item.disabled .list-group-item-heading,.list-group-item:disabled .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item:disabled .list-group-item-text{color:#636c72}.list-group-item.active{z-index:2;color:#fff;background-color:#0275d8;border-color:#0275d8}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text{color:#daeeff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,button.list-group-item-success.active{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,button.list-group-item-info.active{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,button.list-group-item-warning.active{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,button.list-group-item-danger.active{color:#fff;background-color:#a94442;border-color:#a94442}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:""}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.75}button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out,-o-transform .3s ease-out;-webkit-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.show .modal-dialog{-webkit-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:15px;border-bottom:1px solid #eceeef}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;padding:15px}.modal-footer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:15px;border-top:1px solid #eceeef}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:30px auto}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:800px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip.bs-tether-element-attached-bottom,.tooltip.tooltip-top{padding:5px 0;margin-top:-3px}.tooltip.bs-tether-element-attached-bottom .tooltip-inner::before,.tooltip.tooltip-top .tooltip-inner::before{bottom:0;left:50%;margin-left:-5px;content:"";border-width:5px 5px 0;border-top-color:#000}.tooltip.bs-tether-element-attached-left,.tooltip.tooltip-right{padding:0 5px;margin-left:3px}.tooltip.bs-tether-element-attached-left .tooltip-inner::before,.tooltip.tooltip-right .tooltip-inner::before{top:50%;left:0;margin-top:-5px;content:"";border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.bs-tether-element-attached-top,.tooltip.tooltip-bottom{padding:5px 0;margin-top:3px}.tooltip.bs-tether-element-attached-top .tooltip-inner::before,.tooltip.tooltip-bottom .tooltip-inner::before{top:0;left:50%;margin-left:-5px;content:"";border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bs-tether-element-attached-right,.tooltip.tooltip-left{padding:0 5px;margin-left:-3px}.tooltip.bs-tether-element-attached-right .tooltip-inner::before,.tooltip.tooltip-left .tooltip-inner::before{top:50%;right:0;margin-top:-5px;content:"";border-width:5px 0 5px 5px;border-left-color:#000}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.tooltip-inner::before{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;padding:1px;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover.bs-tether-element-attached-bottom,.popover.popover-top{margin-top:-10px}.popover.bs-tether-element-attached-bottom::after,.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::after,.popover.popover-top::before{left:50%;border-bottom-width:0}.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::before{bottom:-11px;margin-left:-11px;border-top-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-bottom::after,.popover.popover-top::after{bottom:-10px;margin-left:-10px;border-top-color:#fff}.popover.bs-tether-element-attached-left,.popover.popover-right{margin-left:10px}.popover.bs-tether-element-attached-left::after,.popover.bs-tether-element-attached-left::before,.popover.popover-right::after,.popover.popover-right::before{top:50%;border-left-width:0}.popover.bs-tether-element-attached-left::before,.popover.popover-right::before{left:-11px;margin-top:-11px;border-right-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-left::after,.popover.popover-right::after{left:-10px;margin-top:-10px;border-right-color:#fff}.popover.bs-tether-element-attached-top,.popover.popover-bottom{margin-top:10px}.popover.bs-tether-element-attached-top::after,.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::after,.popover.popover-bottom::before{left:50%;border-top-width:0}.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::before{top:-11px;margin-left:-11px;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-top::after,.popover.popover-bottom::after{top:-10px;margin-left:-10px;border-bottom-color:#f7f7f7}.popover.bs-tether-element-attached-top .popover-title::before,.popover.popover-bottom .popover-title::before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:"";border-bottom:1px solid #f7f7f7}.popover.bs-tether-element-attached-right,.popover.popover-left{margin-left:-10px}.popover.bs-tether-element-attached-right::after,.popover.bs-tether-element-attached-right::before,.popover.popover-left::after,.popover.popover-left::before{top:50%;border-right-width:0}.popover.bs-tether-element-attached-right::before,.popover.popover-left::before{right:-11px;margin-top:-11px;border-left-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-right::after,.popover.popover-left::after{right:-10px;margin-top:-10px;border-left-color:#fff}.popover-title{padding:8px 14px;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-right-radius:calc(.3rem - 1px);border-top-left-radius:calc(.3rem - 1px)}.popover-title:empty{display:none}.popover-content{padding:9px 14px}.popover::after,.popover::before{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover::before{content:"";border-width:11px}.popover::after{content:"";border-width:10px}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-item{position:relative;display:none;width:100%}@media (-webkit-transform-3d){.carousel-item{-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out,-o-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}}@supports ((-webkit-transform:translate3d(0,0,0)) or (transform:translate3d(0,0,0))){.carousel-item{-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out,-o-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.carousel-item-next,.carousel-item-prev{position:absolute;top:0}@media (-webkit-transform-3d){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@supports ((-webkit-transform:translate3d(0,0,0)) or (transform:translate3d(0,0,0))){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;-webkit-background-size:100% 100%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E")}.carousel-control-next-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E")}.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{position:relative;-webkit-box-flex:1;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;max-width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:rgba(255,255,255,.5)}.carousel-indicators li::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:""}.carousel-indicators li::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:""}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-faded{background-color:#f7f7f7}.bg-primary{background-color:#0275d8!important}a.bg-primary:focus,a.bg-primary:hover{background-color:#025aa5!important}.bg-success{background-color:#5cb85c!important}a.bg-success:focus,a.bg-success:hover{background-color:#449d44!important}.bg-info{background-color:#5bc0de!important}a.bg-info:focus,a.bg-info:hover{background-color:#31b0d5!important}.bg-warning{background-color:#f0ad4e!important}a.bg-warning:focus,a.bg-warning:hover{background-color:#ec971f!important}.bg-danger{background-color:#d9534f!important}a.bg-danger:focus,a.bg-danger:hover{background-color:#c9302c!important}.bg-inverse{background-color:#292b2c!important}a.bg-inverse:focus,a.bg-inverse:hover{background-color:#101112!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.rounded{border-radius:.25rem}.rounded-top{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.rounded-right{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.rounded-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-left{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.rounded-circle{border-radius:50%}.rounded-0{border-radius:0}.clearfix::after{display:block;content:"";clear:both}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-cell{display:table-cell!important}.d-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-webkit-inline-box!important;display:-webkit-inline-flex!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}.flex-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-sm-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-sm-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-sm-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-sm-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-sm-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-sm-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-md-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-md-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-md-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-md-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-md-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-md-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-lg-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-lg-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-lg-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-lg-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-lg-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-lg-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-first{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.flex-xl-last{-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}.flex-xl-unordered{-webkit-box-ordinal-group:1;-webkit-order:0;-ms-flex-order:0;order:0}.flex-xl-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-webkit-flex-direction:column!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:row-reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-webkit-flex-direction:column-reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-webkit-flex-wrap:wrap!important;-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-webkit-flex-wrap:nowrap!important;-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-webkit-flex-wrap:wrap-reverse!important;-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-xl-start{-webkit-box-pack:start!important;-webkit-justify-content:flex-start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-webkit-box-pack:end!important;-webkit-justify-content:flex-end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-webkit-box-pack:center!important;-webkit-justify-content:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-webkit-box-pack:justify!important;-webkit-justify-content:space-between!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-webkit-box-align:start!important;-webkit-align-items:flex-start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-webkit-box-align:end!important;-webkit-align-items:flex-end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-webkit-box-align:baseline!important;-webkit-align-items:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-webkit-box-align:stretch!important;-webkit-align-items:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-webkit-align-content:flex-start!important;-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-webkit-align-content:flex-end!important;-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-webkit-align-content:center!important;-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-webkit-align-content:space-between!important;-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-webkit-align-content:space-around!important;-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-webkit-align-content:stretch!important;-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-webkit-align-self:auto!important;-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-xl-start{-webkit-align-self:flex-start!important;-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-webkit-align-self:flex-end!important;-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-webkit-align-self:center!important;-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-xl-baseline{-webkit-align-self:baseline!important;-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-webkit-align-self:stretch!important;-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1030}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.m-0{margin:0 0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0{margin-left:0!important}.mx-0{margin-right:0!important;margin-left:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.m-1{margin:.25rem .25rem!important}.mt-1{margin-top:.25rem!important}.mr-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.ml-1{margin-left:.25rem!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-2{margin:.5rem .5rem!important}.mt-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.mb-2{margin-bottom:.5rem!important}.ml-2{margin-left:.5rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-3{margin:1rem 1rem!important}.mt-3{margin-top:1rem!important}.mr-3{margin-right:1rem!important}.mb-3{margin-bottom:1rem!important}.ml-3{margin-left:1rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-4{margin:1.5rem 1.5rem!important}.mt-4{margin-top:1.5rem!important}.mr-4{margin-right:1.5rem!important}.mb-4{margin-bottom:1.5rem!important}.ml-4{margin-left:1.5rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-5{margin:3rem 3rem!important}.mt-5{margin-top:3rem!important}.mr-5{margin-right:3rem!important}.mb-5{margin-bottom:3rem!important}.ml-5{margin-left:3rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-0{padding:0 0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0{padding-left:0!important}.px-0{padding-right:0!important;padding-left:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.p-1{padding:.25rem .25rem!important}.pt-1{padding-top:.25rem!important}.pr-1{padding-right:.25rem!important}.pb-1{padding-bottom:.25rem!important}.pl-1{padding-left:.25rem!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-2{padding:.5rem .5rem!important}.pt-2{padding-top:.5rem!important}.pr-2{padding-right:.5rem!important}.pb-2{padding-bottom:.5rem!important}.pl-2{padding-left:.5rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-3{padding:1rem 1rem!important}.pt-3{padding-top:1rem!important}.pr-3{padding-right:1rem!important}.pb-3{padding-bottom:1rem!important}.pl-3{padding-left:1rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-4{padding:1.5rem 1.5rem!important}.pt-4{padding-top:1.5rem!important}.pr-4{padding-right:1.5rem!important}.pb-4{padding-bottom:1.5rem!important}.pl-4{padding-left:1.5rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-5{padding:3rem 3rem!important}.pt-5{padding-top:3rem!important}.pr-5{padding-right:3rem!important}.pb-5{padding-bottom:3rem!important}.pl-5{padding-left:3rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-auto{margin:auto!important}.mt-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.mb-auto{margin-bottom:auto!important}.ml-auto{margin-left:auto!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}@media (min-width:576px){.m-sm-0{margin:0 0!important}.mt-sm-0{margin-top:0!important}.mr-sm-0{margin-right:0!important}.mb-sm-0{margin-bottom:0!important}.ml-sm-0{margin-left:0!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.m-sm-1{margin:.25rem .25rem!important}.mt-sm-1{margin-top:.25rem!important}.mr-sm-1{margin-right:.25rem!important}.mb-sm-1{margin-bottom:.25rem!important}.ml-sm-1{margin-left:.25rem!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-sm-2{margin:.5rem .5rem!important}.mt-sm-2{margin-top:.5rem!important}.mr-sm-2{margin-right:.5rem!important}.mb-sm-2{margin-bottom:.5rem!important}.ml-sm-2{margin-left:.5rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-sm-3{margin:1rem 1rem!important}.mt-sm-3{margin-top:1rem!important}.mr-sm-3{margin-right:1rem!important}.mb-sm-3{margin-bottom:1rem!important}.ml-sm-3{margin-left:1rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-sm-4{margin:1.5rem 1.5rem!important}.mt-sm-4{margin-top:1.5rem!important}.mr-sm-4{margin-right:1.5rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.ml-sm-4{margin-left:1.5rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-sm-5{margin:3rem 3rem!important}.mt-sm-5{margin-top:3rem!important}.mr-sm-5{margin-right:3rem!important}.mb-sm-5{margin-bottom:3rem!important}.ml-sm-5{margin-left:3rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-sm-0{padding:0 0!important}.pt-sm-0{padding-top:0!important}.pr-sm-0{padding-right:0!important}.pb-sm-0{padding-bottom:0!important}.pl-sm-0{padding-left:0!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.p-sm-1{padding:.25rem .25rem!important}.pt-sm-1{padding-top:.25rem!important}.pr-sm-1{padding-right:.25rem!important}.pb-sm-1{padding-bottom:.25rem!important}.pl-sm-1{padding-left:.25rem!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-sm-2{padding:.5rem .5rem!important}.pt-sm-2{padding-top:.5rem!important}.pr-sm-2{padding-right:.5rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pl-sm-2{padding-left:.5rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-sm-3{padding:1rem 1rem!important}.pt-sm-3{padding-top:1rem!important}.pr-sm-3{padding-right:1rem!important}.pb-sm-3{padding-bottom:1rem!important}.pl-sm-3{padding-left:1rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-sm-4{padding:1.5rem 1.5rem!important}.pt-sm-4{padding-top:1.5rem!important}.pr-sm-4{padding-right:1.5rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pl-sm-4{padding-left:1.5rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-sm-5{padding:3rem 3rem!important}.pt-sm-5{padding-top:3rem!important}.pr-sm-5{padding-right:3rem!important}.pb-sm-5{padding-bottom:3rem!important}.pl-sm-5{padding-left:3rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto{margin-top:auto!important}.mr-sm-auto{margin-right:auto!important}.mb-sm-auto{margin-bottom:auto!important}.ml-sm-auto{margin-left:auto!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}}@media (min-width:768px){.m-md-0{margin:0 0!important}.mt-md-0{margin-top:0!important}.mr-md-0{margin-right:0!important}.mb-md-0{margin-bottom:0!important}.ml-md-0{margin-left:0!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.m-md-1{margin:.25rem .25rem!important}.mt-md-1{margin-top:.25rem!important}.mr-md-1{margin-right:.25rem!important}.mb-md-1{margin-bottom:.25rem!important}.ml-md-1{margin-left:.25rem!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-md-2{margin:.5rem .5rem!important}.mt-md-2{margin-top:.5rem!important}.mr-md-2{margin-right:.5rem!important}.mb-md-2{margin-bottom:.5rem!important}.ml-md-2{margin-left:.5rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-md-3{margin:1rem 1rem!important}.mt-md-3{margin-top:1rem!important}.mr-md-3{margin-right:1rem!important}.mb-md-3{margin-bottom:1rem!important}.ml-md-3{margin-left:1rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-md-4{margin:1.5rem 1.5rem!important}.mt-md-4{margin-top:1.5rem!important}.mr-md-4{margin-right:1.5rem!important}.mb-md-4{margin-bottom:1.5rem!important}.ml-md-4{margin-left:1.5rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-md-5{margin:3rem 3rem!important}.mt-md-5{margin-top:3rem!important}.mr-md-5{margin-right:3rem!important}.mb-md-5{margin-bottom:3rem!important}.ml-md-5{margin-left:3rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-md-0{padding:0 0!important}.pt-md-0{padding-top:0!important}.pr-md-0{padding-right:0!important}.pb-md-0{padding-bottom:0!important}.pl-md-0{padding-left:0!important}.px-md-0{padding-right:0!important;padding-left:0!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.p-md-1{padding:.25rem .25rem!important}.pt-md-1{padding-top:.25rem!important}.pr-md-1{padding-right:.25rem!important}.pb-md-1{padding-bottom:.25rem!important}.pl-md-1{padding-left:.25rem!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-md-2{padding:.5rem .5rem!important}.pt-md-2{padding-top:.5rem!important}.pr-md-2{padding-right:.5rem!important}.pb-md-2{padding-bottom:.5rem!important}.pl-md-2{padding-left:.5rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-md-3{padding:1rem 1rem!important}.pt-md-3{padding-top:1rem!important}.pr-md-3{padding-right:1rem!important}.pb-md-3{padding-bottom:1rem!important}.pl-md-3{padding-left:1rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-md-4{padding:1.5rem 1.5rem!important}.pt-md-4{padding-top:1.5rem!important}.pr-md-4{padding-right:1.5rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pl-md-4{padding-left:1.5rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-md-5{padding:3rem 3rem!important}.pt-md-5{padding-top:3rem!important}.pr-md-5{padding-right:3rem!important}.pb-md-5{padding-bottom:3rem!important}.pl-md-5{padding-left:3rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto{margin-top:auto!important}.mr-md-auto{margin-right:auto!important}.mb-md-auto{margin-bottom:auto!important}.ml-md-auto{margin-left:auto!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}}@media (min-width:992px){.m-lg-0{margin:0 0!important}.mt-lg-0{margin-top:0!important}.mr-lg-0{margin-right:0!important}.mb-lg-0{margin-bottom:0!important}.ml-lg-0{margin-left:0!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.m-lg-1{margin:.25rem .25rem!important}.mt-lg-1{margin-top:.25rem!important}.mr-lg-1{margin-right:.25rem!important}.mb-lg-1{margin-bottom:.25rem!important}.ml-lg-1{margin-left:.25rem!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-lg-2{margin:.5rem .5rem!important}.mt-lg-2{margin-top:.5rem!important}.mr-lg-2{margin-right:.5rem!important}.mb-lg-2{margin-bottom:.5rem!important}.ml-lg-2{margin-left:.5rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-lg-3{margin:1rem 1rem!important}.mt-lg-3{margin-top:1rem!important}.mr-lg-3{margin-right:1rem!important}.mb-lg-3{margin-bottom:1rem!important}.ml-lg-3{margin-left:1rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-lg-4{margin:1.5rem 1.5rem!important}.mt-lg-4{margin-top:1.5rem!important}.mr-lg-4{margin-right:1.5rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.ml-lg-4{margin-left:1.5rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-lg-5{margin:3rem 3rem!important}.mt-lg-5{margin-top:3rem!important}.mr-lg-5{margin-right:3rem!important}.mb-lg-5{margin-bottom:3rem!important}.ml-lg-5{margin-left:3rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-lg-0{padding:0 0!important}.pt-lg-0{padding-top:0!important}.pr-lg-0{padding-right:0!important}.pb-lg-0{padding-bottom:0!important}.pl-lg-0{padding-left:0!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.p-lg-1{padding:.25rem .25rem!important}.pt-lg-1{padding-top:.25rem!important}.pr-lg-1{padding-right:.25rem!important}.pb-lg-1{padding-bottom:.25rem!important}.pl-lg-1{padding-left:.25rem!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-lg-2{padding:.5rem .5rem!important}.pt-lg-2{padding-top:.5rem!important}.pr-lg-2{padding-right:.5rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pl-lg-2{padding-left:.5rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-lg-3{padding:1rem 1rem!important}.pt-lg-3{padding-top:1rem!important}.pr-lg-3{padding-right:1rem!important}.pb-lg-3{padding-bottom:1rem!important}.pl-lg-3{padding-left:1rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-lg-4{padding:1.5rem 1.5rem!important}.pt-lg-4{padding-top:1.5rem!important}.pr-lg-4{padding-right:1.5rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pl-lg-4{padding-left:1.5rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-lg-5{padding:3rem 3rem!important}.pt-lg-5{padding-top:3rem!important}.pr-lg-5{padding-right:3rem!important}.pb-lg-5{padding-bottom:3rem!important}.pl-lg-5{padding-left:3rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto{margin-top:auto!important}.mr-lg-auto{margin-right:auto!important}.mb-lg-auto{margin-bottom:auto!important}.ml-lg-auto{margin-left:auto!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0 0!important}.mt-xl-0{margin-top:0!important}.mr-xl-0{margin-right:0!important}.mb-xl-0{margin-bottom:0!important}.ml-xl-0{margin-left:0!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.m-xl-1{margin:.25rem .25rem!important}.mt-xl-1{margin-top:.25rem!important}.mr-xl-1{margin-right:.25rem!important}.mb-xl-1{margin-bottom:.25rem!important}.ml-xl-1{margin-left:.25rem!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.m-xl-2{margin:.5rem .5rem!important}.mt-xl-2{margin-top:.5rem!important}.mr-xl-2{margin-right:.5rem!important}.mb-xl-2{margin-bottom:.5rem!important}.ml-xl-2{margin-left:.5rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.m-xl-3{margin:1rem 1rem!important}.mt-xl-3{margin-top:1rem!important}.mr-xl-3{margin-right:1rem!important}.mb-xl-3{margin-bottom:1rem!important}.ml-xl-3{margin-left:1rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.m-xl-4{margin:1.5rem 1.5rem!important}.mt-xl-4{margin-top:1.5rem!important}.mr-xl-4{margin-right:1.5rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.ml-xl-4{margin-left:1.5rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-xl-5{margin:3rem 3rem!important}.mt-xl-5{margin-top:3rem!important}.mr-xl-5{margin-right:3rem!important}.mb-xl-5{margin-bottom:3rem!important}.ml-xl-5{margin-left:3rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.p-xl-0{padding:0 0!important}.pt-xl-0{padding-top:0!important}.pr-xl-0{padding-right:0!important}.pb-xl-0{padding-bottom:0!important}.pl-xl-0{padding-left:0!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.p-xl-1{padding:.25rem .25rem!important}.pt-xl-1{padding-top:.25rem!important}.pr-xl-1{padding-right:.25rem!important}.pb-xl-1{padding-bottom:.25rem!important}.pl-xl-1{padding-left:.25rem!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.p-xl-2{padding:.5rem .5rem!important}.pt-xl-2{padding-top:.5rem!important}.pr-xl-2{padding-right:.5rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pl-xl-2{padding-left:.5rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.p-xl-3{padding:1rem 1rem!important}.pt-xl-3{padding-top:1rem!important}.pr-xl-3{padding-right:1rem!important}.pb-xl-3{padding-bottom:1rem!important}.pl-xl-3{padding-left:1rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.p-xl-4{padding:1.5rem 1.5rem!important}.pt-xl-4{padding-top:1.5rem!important}.pr-xl-4{padding-right:1.5rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pl-xl-4{padding-left:1.5rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-xl-5{padding:3rem 3rem!important}.pt-xl-5{padding-top:3rem!important}.pr-xl-5{padding-right:3rem!important}.pb-xl-5{padding-bottom:3rem!important}.pl-xl-5{padding-left:3rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto{margin-top:auto!important}.mr-xl-auto{margin-right:auto!important}.mb-xl-auto{margin-bottom:auto!important}.ml-xl-auto{margin-left:auto!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-normal{font-weight:400}.font-weight-bold{font-weight:700}.font-italic{font-style:italic}.text-white{color:#fff!important}.text-muted{color:#636c72!important}a.text-muted:focus,a.text-muted:hover{color:#4b5257!important}.text-primary{color:#0275d8!important}a.text-primary:focus,a.text-primary:hover{color:#025aa5!important}.text-success{color:#5cb85c!important}a.text-success:focus,a.text-success:hover{color:#449d44!important}.text-info{color:#5bc0de!important}a.text-info:focus,a.text-info:hover{color:#31b0d5!important}.text-warning{color:#f0ad4e!important}a.text-warning:focus,a.text-warning:hover{color:#ec971f!important}.text-danger{color:#d9534f!important}a.text-danger:focus,a.text-danger:hover{color:#c9302c!important}.text-gray-dark{color:#292b2c!important}a.text-gray-dark:focus,a.text-gray-dark:hover{color:#101112!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.invisible{visibility:hidden!important}.hidden-xs-up{display:none!important}@media (max-width:575px){.hidden-xs-down{display:none!important}}@media (min-width:576px){.hidden-sm-up{display:none!important}}@media (max-width:767px){.hidden-sm-down{display:none!important}}@media (min-width:768px){.hidden-md-up{display:none!important}}@media (max-width:991px){.hidden-md-down{display:none!important}}@media (min-width:992px){.hidden-lg-up{display:none!important}}@media (max-width:1199px){.hidden-lg-down{display:none!important}}@media (min-width:1200px){.hidden-xl-up{display:none!important}}.hidden-xl-down{display:none!important}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}/*# sourceMappingURL=bootstrap.min.css.map */

 @font-face {
  font-family: 'fontello';
  src: url('../font/fontello.eot?31917357');
  src: url('../font/fontello.eot?31917357#iefix') format('embedded-opentype'),
       url('../font/fontello.woff2?31917357') format('woff2'),
       url('../font/fontello.woff?31917357') format('woff'),
       url('../font/fontello.ttf?31917357') format('truetype'),
       url('../font/fontello.svg?31917357#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'fontello';
    src: url('../font/fontello.svg?31917357#fontello') format('svg');
  }
}
*/
 
 [class^="icon-"]:before, [class*=" icon-"]:before {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  speak: none;
 
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */
 
  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;
 
  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;
 
  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;
 
  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */
 
  /* Font smoothing. That was taken from TWBS */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}
 
.icon-cog:before { content: '\\e800'; } /* '' */
.icon-mail:before { content: '\\e801'; } /* '' */
.icon-user:before { content: '\\e802'; } /* '' */
.icon-left-dir:before { content: '\\e803'; } /* '' */
.icon-wrench:before { content: '\\e804'; } /* '' */
.icon-ok:before { content: '\\e805'; } /* '' */
.icon-cancel:before { content: '\\e806'; } /* '' */
.icon-ok-circled:before { content: '\\e807'; } /* '' */
.icon-ok-circled2:before { content: '\\e808'; } /* '' */
.icon-cancel-circled:before { content: '\\e809'; } /* '' */
.icon-cancel-circled2:before { content: '\\e80a'; } /* '' */
.icon-heart:before { content: '\\e80b'; } /* '' */
.icon-star:before { content: '\\e80c'; } /* '' */
.icon-heart-empty:before { content: '\\e80d'; } /* '' */
.icon-search:before { content: '\\e80e'; } /* '' */
.icon-users:before { content: '\\e80f'; } /* '' */
.icon-help-circled:before { content: '\\e810'; } /* '' */
.icon-info-circled:before { content: '\\e811'; } /* '' */
.icon-home:before { content: '\\e812'; } /* '' */
.icon-lock:before { content: '\\e813'; } /* '' */
.icon-eye:before { content: '\\e814'; } /* '' */
.icon-eye-off:before { content: '\\e815'; } /* '' */
.icon-tag:before { content: '\\e816'; } /* '' */
.icon-lock-open:before { content: '\\e817'; } /* '' */
.icon-bookmark:before { content: '\\e818'; } /* '' */
.icon-tags:before { content: '\\e819'; } /* '' */
.icon-flag:before { content: '\\e81a'; } /* '' */
.icon-thumbs-up:before { content: '\\e81b'; } /* '' */
.icon-thumbs-down:before { content: '\\e81c'; } /* '' */
.icon-block:before { content: '\\e81d'; } /* '' */
.icon-check:before { content: '\\e81e'; } /* '' */
.icon-chart-bar:before { content: '\\e81f'; } /* '' */
.icon-right-dir:before { content: '\\e820'; } /* '' */
.icon-down-dir:before { content: '\\e821'; } /* '' */
.icon-up-dir:before { content: '\\e822'; } /* '' */
.icon-mail-1:before { content: '\\e823'; } /* '' */
.icon-ok-1:before { content: '\\e824'; } /* '' */
.icon-cancel-1:before { content: '\\e825'; } /* '' */
.icon-check-1:before { content: '\\e826'; } /* '' */
.icon-cancel-2:before { content: '\\e827'; } /* '' */
.icon-cancel-circled-1:before { content: '\\e828'; } /* '' */
.icon-cancel-squared:before { content: '\\e829'; } /* '' */
.icon-plus:before { content: '\\e82a'; } /* '' */
.icon-plus-circled:before { content: '\\e82b'; } /* '' */
.icon-minus:before { content: '\\e82c'; } /* '' */
.icon-minus-circled:before { content: '\\e82d'; } /* '' */
.icon-minus-squared-1:before { content: '\\e82e'; } /* '' */
.icon-help-1:before { content: '\\e82f'; } /* '' */
.icon-help-circled-1:before { content: '\\e830'; } /* '' */
.icon-info-1:before { content: '\\e831'; } /* '' */
.icon-info-circled-1:before { content: '\\e832'; } /* '' */
.icon-check-empty:before { content: '\\f096'; } /* '' */
.icon-bookmark-empty:before { content: '\\f097'; } /* '' */
.icon-sort-down:before { content: '\\f0dd'; } /* '' */
.icon-sort-up:before { content: '\\f0de'; } /* '' */
.icon-mail-alt:before { content: '\\f0e0'; } /* '' */
.icon-comment-empty:before { content: '\\f0e5'; } /* '' */
.icon-plus-squared:before { content: '\\f0fe'; } /* '' */
.icon-angle-up:before { content: '\\f106'; } /* '' */
.icon-angle-down:before { content: '\\f107'; } /* '' */
.icon-flag-empty:before { content: '\\f11d'; } /* '' */
.icon-help:before { content: '\\f128'; } /* '' */
.icon-info:before { content: '\\f129'; } /* '' */
.icon-lock-open-alt:before { content: '\\f13e'; } /* '' */
.icon-minus-squared:before { content: '\\f146'; } /* '' */
.icon-minus-squared-alt:before { content: '\\f147'; } /* '' */
.icon-ok-squared:before { content: '\\f14a'; } /* '' */
.icon-bitcoin:before { content: '\\f15a'; } /* '' */
.icon-sort-name-up:before { content: '\\f15d'; } /* '' */
.icon-sort-name-down:before { content: '\\f15e'; } /* '' */
.icon-sort-alt-up:before { content: '\\f160'; } /* '' */
.icon-sort-alt-down:before { content: '\\f161'; } /* '' */
.icon-sort-number-up:before { content: '\\f162'; } /* '' */
.icon-sort-number-down:before { content: '\\f163'; } /* '' */
.icon-thumbs-up-alt:before { content: '\\f164'; } /* '' */
.icon-thumbs-down-alt:before { content: '\\f165'; } /* '' */
.icon-male:before { content: '\\f183'; } /* '' */
.icon-plus-squared-alt:before { content: '\\f196'; } /* '' */
.icon-mail-squared:before { content: '\\f199'; } /* '' */
.icon-child:before { content: '\\f1ae'; } /* '' */
.icon-user-secret:before { content: '\\f21b'; } /* '' */
.icon-hourglass-o:before { content: '\\f250'; } /* '' */
.icon-handshake-o:before { content: '\\f2b5'; } /* '' */
.icon-address-card:before { content: '\\f2bb'; } /* '' */
.icon-address-card-o:before { content: '\\f2bc'; } /* '' */
.icon-user-circle:before { content: '\\f2bd'; } /* '' */
.icon-user-circle-o:before { content: '\\f2be'; } /* '' */

@charset "UTF-8";       /* Set the encoding of the style sheet to Unicode UTF-8 */
@charset 'iso-8859-15'; /* Invalid, wrong quoting style used */
@charset  "UTF-8";      /* Invalid, more than one space */
 @charset "UTF-8";      /* Invalid, there is a character (a space) before the at-rule */
@charset 	UTF-8;         /* Invalid, without ' or ", the charset is not a CSS <string> */

 @namespace "http://www.w3.org/1999/xhtml";
  @namespace svg "http://www.w3.org/2000/svg";

/*! normalize.css v3.0.1 | MIT License | git.io/normalize */

/**
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */

html {
  font-family: sans-serif; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/**
 * Remove default margin.
 */

body {
  margin: 0;
}

/* HTML5 display definitions
   ========================================================================== */

/**
 * Correct 'block' display not defined for any HTML5 element in IE 8/9.
 * Correct 'block' display not defined for 'details' or 'summary' in IE 10/11 and Firefox.
 * Correct 'block' display not defined for 'main' in IE 11.
 */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

/**
 * 1. Correct 'inline-block' display not defined in IE 8/9.
 * 2. Normalize vertical alignment of 'progress' in Chrome, Firefox, and Opera.
 */

audio,
canvas,
progress,
video {
  display: inline-block; /* 1 */
  vertical-align: baseline; /* 2 */
}

/**
 * Prevent modern browsers from displaying 'audio' without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address '[hidden]' styling not present in IE 8/9/10.
 * Hide the 'template' element in IE 8/9/11, Safari, and Firefox < 22.
 */

[hidden],
template {
  display: none;
}

/* Links
   ========================================================================== */

/**
 * Remove the gray background color from active links in IE 10.
 */

a {
  background: transparent;
}

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a:active,
a:hover {
  outline: 0;
}

/* Text-level semantics
   ========================================================================== */

/**
 * Address styling not present in IE 8/9/10/11, Safari, and Chrome.
 */

abbr[title] {
  border-bottom: 1px dotted;
}

/**
 * Address style set to 'bolder' in Firefox 4+, Safari, and Chrome.
 */

b,
strong {
  font-weight: bold;
}

/**
 * Address styling not present in Safari and Chrome.
 */

dfn {
  font-style: italic;
}

/**
 * Address variable 'h1' font-size and margin within 'section' and 'article'
 * contexts in Firefox 4+, Safari, and Chrome.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/**
 * Address styling not present in IE 8/9.
 */

mark {
  background: #ff0;
  color: #000;
}

/**
 * Address inconsistent and variable font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent 'sub' and 'sup' affecting 'line-height' in all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove border when inside 'a' element in IE 8/9/10.
 */

img {
  border: 0;
}

/**
 * Correct overflow not hidden in IE 9/10/11.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
   ========================================================================== */

/**
 * Address margin not present in IE 8/9 and Safari.
 */

figure {
  margin: 1em 40px;
}

/**
 * Address differences between Firefox and other browsers.
 */

hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}

/**
 * Contain overflow in all browsers.
 */

pre {
  overflow: auto;
}

/**
 * Address odd 'em'-unit font size rendering in all browsers.
 */

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

/* Forms
   ========================================================================== */

/**
 * Known limitation: by default, Chrome and Safari on OS X allow very limited
 * styling of 'select', unless a 'border' property is set.
 */

/**
 * 1. Correct color not being inherited.
 *    Known issue: affects color of disabled elements.
 * 2. Correct font properties not being inherited.
 * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
 */

button,
input,
optgroup,
select,
textarea {
  color: inherit; /* 1 */
  font: inherit; /* 2 */
  margin: 0; /* 3 */
}

/**
 * Address 'overflow' set to 'hidden' in IE 8/9/10/11.
 */

button {
  overflow: visible;
}

/**
 * Address inconsistent 'text-transform' inheritance for 'button' and 'select'.
 * All other form control elements do not inherit 'text-transform' values.
 * Correct 'button' style inheritance in Firefox, IE 8/9/10/11, and Opera.
 * Correct 'select' style inheritance in Firefox.
 */

button,
select {
  text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native 'audio'
 *    and 'video' controls.
 * 2. Correct inability to style clickable 'input' types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    'input' and others.
 */

button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; /* 2 */
  cursor: pointer; /* 3 */
}

/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * Remove inner padding and border in Firefox 4+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
 * Address Firefox 4+ setting 'line-height' on 'input' using '!important' in
 * the UA stylesheet.
 */

input {
  line-height: normal;
}

/**
 * It's recommended that you don't attempt to style these elements.
 * Firefox's implementation doesn't respect box-sizing, padding, or width.
 *
 * 1. Address box sizing set to 'content-box' in IE 8/9/10.
 * 2. Remove excess padding in IE 8/9/10.
 */

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Fix the cursor style for Chrome's increment/decrement buttons. For certain
 * 'font-size' values of the 'input', it causes the cursor style of the
 * decrement button to change from 'default' to 'text'.
 */

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Address 'appearance' set to 'searchfield' in Safari and Chrome.
 * 2. Address 'box-sizing' set to 'border-box' in Safari and Chrome
 *    (include '-moz' to future-proof).
 */

input[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari and Chrome on OS X.
 * Safari (but not Chrome) clips the cancel button when the search input has
 * padding (and 'textfield' appearance).
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Define consistent border, margin, and padding.
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct 'color' not being inherited in IE 8/9/10/11.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */

legend {
  border: 0; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Remove default vertical scrollbar in IE 8/9/10/11.
 */

textarea {
  overflow: auto;
}

/**
 * Don't inherit the 'font-weight' (applied by a rule above).
 * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
 */

optgroup {
  font-weight: bold;
}

/* Tables
   ========================================================================== */

/**
 * Remove most spacing between table cells.
 */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

a{margin:auto;padding:0;}

/* 1 */

head, /* footer, */body/*, nav */ { /* 2 */
  /* 3 */
  /**/foo: 'bar';
  /* 4 */
} /* 5 */

/* 6 */

a {
    color/**/: 12px;
    padding/*4815162342*/: 1px /**/ 2px /*13*/ 3px;
}

foo { /*/*/
  /* something */
  bar: baz; /* http://foo.com/bar/baz.html */
}

@custom-media --narrow-window (max-width: 30em);
@custom-media --wide-window screen and (min-width: 40em);

@custom-media
    --test
    (min-width: 200px)
;

@host
    {
        :scope { color: white; }
    }

@keyframes fade {
  /* from above */
  from {
    /* from inside */
    opacity: 0;
  }

  /* to above */
  to {
    /* to inside */
    opacity: 1;
  }
}

@keyframes advanced {
  top {
    opacity[sqrt]: 0;
  }

  100 {
    opacity: 0.5;
  }

  bottom {
    opacity: 1;
  }
}

@media screen, projection {
  /* html above */
  html {
    /* html inside */
    background: #fffef0;
    color: #300;
  }

  /* body above */
  body {
    /* body inside */
    max-width: 35em;
    margin: 0 auto;
  }
}

@media print {
  html {
    background: #fff;
    color: #000;
  }
  body {
    padding: 1in;
    border: 0.5pt solid #666;
  }
}

tobi loki jane {
  are: 'all';
  the-species: called "ferrets"
}

@supports
    (display: flex)
    {
        .test { display: flex; }
    }

`;
