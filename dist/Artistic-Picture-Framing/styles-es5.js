(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "/*************************** Content ***********************************\n0. Loader\n1. Navbar\n2. Social Sidebar\n3. Landing Page\n4. Why us\n5. Footer\n*/\n\n/*--------------------------------------------------------------------------------------------------------\n                                            Loader\n---------------------------------------------------------------------------------------------------------*/\n\n#loading-overlay {\n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n\n#loading-overlay .loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin: -30px 0 0 -30px;\n}\n\n#loading-overlay .loader:before,\n#loading-overlay .loader:after {\n  position: absolute;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  content: \"\";\n  -webkit-animation: preloader-wave 1.6s linear infinite;\n  animation: preloader-wave 1.6s linear infinite;\n  border-radius: 50%;\n  background: #fbb545;\n}\n\n#loading-overlay .loader:after {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes preloader-wave {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0.5;\n  }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\n\n@keyframes preloader-wave {\n  0% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0);\n    opacity: 0.5;\n  }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\n\n/*--------------------------------------------------------------------------------------------------------\n                                            Navbar\n---------------------------------------------------------------------------------------------------------*/\n\n.wrap-header {\n  position: relative;\n}\n\n.flat-header {\n  width: 100%;\n  position: absolute;\n  z-index: 99999;\n  background: transparent;\n}\n\n.header-sticky {\n  z-index: 99999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  -ms-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  background-color: #333;\n  -webkit-animation-name: fadeInDown;\n  -webkit-animation-duration: 0.8s;\n  animation-name: fadeInDown;\n  animation-duration: 0.8s;\n}\n\n/*--------------------------------------------------------------------------------------------------------\n                                            Landing Page\n---------------------------------------------------------------------------------------------------------*/\n\n.flat-header .header-menu {\n  float: right;\n}\n\n.flat-slider .tp-caption a.btn-styl1 {\n  background: #fbb545;\n  -webkit-transition: 0.21s ease-in all;\n  transition: 0.21s ease-in all;\n  padding: 9px 32px 10px 32px;\n}\n\n.flat-slider .tp-caption a.btn-styl1:hover {\n  background: #8a5b10;\n}\n\n.flat-slider .rev_slider_wrapper .tp-caption a.btn-styl1 {\n  border-radius: 30px;\n  color: #fff;\n  font-weight: 600;\n  letter-spacing: 0.3px;\n  font-size: 17px;\n  margin-right: 36px;\n}\n\n/*--------------------------------------------------------------------------------------------------------\n                                            Why us\n---------------------------------------------------------------------------------------------------------*/\n\n.iconbox-benefit .iconbox-content h3:hover {\n  color: #fbb545;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n.iconbox-benefit .iconbox-content p {\n  color: #7a7a7a;\n  font-size: 17px;\n}\n\n.iconbox-benefit .iconbox-content h3 {\n  font-size: 24px;\n  font-weight: 600;\n  color: #216ae6;\n}\n\n.flat-benefit-style2 .iconbox {\n  text-align: center;\n}\n\n.flat-benefit-style2 .iconbox-one {\n  padding: 30px 20px 0px 6px;\n}\n\n.flat-benefit-style2 .iconbox-two {\n  padding: 35px 20px 0px 35px;\n}\n\n.flat-benefit-style2 .iconbox-three {\n  padding: 48px 20px 0px 6px;\n}\n\n.flat-benefit-style2 .iconbox-four {\n  padding: 48px 20px 0px 35px;\n}\n\n.flat-benefit-style2 .iconbox-one .iconbox-content h3 {\n  margin: 27px 0 15px 0;\n}\n\n.flat-benefit-style2 .iconbox-two .iconbox-content h3 {\n  margin: 32px 0 15px 0;\n}\n\n.flat-benefit-style2 .iconbox-three .iconbox-content h3 {\n  margin: 27px 0 15px 0;\n}\n\n.flat-benefit-style2 .iconbox-four .iconbox-content h3 {\n  margin: 27px 0 15px 0;\n}\n\n.why-choose-us {\n  margin-top: -156px;\n}\n\n.why-choose-us .getintouch {\n  position: relative;\n  z-index: 1;\n  -webkit-transform: translateY(-21.6%);\n          transform: translateY(-21.6%);\n}\n\n.iconbox-width50 .iconbox {\n  width: 50%;\n  float: left;\n}\n\n.iconbox-icon img {\n  width: 60px;\n}\n\n/*--------------------------------------------------------------------------------------------------------\n                                            FOOTER\n---------------------------------------------------------------------------------------------------------*/\n\n#footer {\n  background: #3f4c9a;\n}\n\n#footer #footer-widget .widget-nav-menu li a {\n  color: #f0f0f0 !important;\n}\n\n#footer #footer-widget {\n  padding-top: 36px;\n  padding-bottom: 30px;\n}\n\n#footer #footer-widget .logo-footer {\n  margin: 6px 0 40px 0;\n}\n\n#footer #footer-widget .info-footer {\n  padding-bottom: 40px;\n}\n\n#footer #footer-widget .widget.widget-title {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 36px;\n  color: #333;\n}\n\n#footer #footer-widget .col-company .widget.widget-title {\n  letter-spacing: 0.7px;\n}\n\n#footer #footer-widget .col-link .widget.widget-title,\n#footer #footer-widget .col-media .widget.widget-title {\n  margin-top: 3px;\n  letter-spacing: 0.9px;\n}\n\n#footer #footer-widget .widget-nav-menu li {\n  margin-bottom: 13px;\n}\n\n#footer #footer-widget .widget-nav-menu li a {\n  font-size: 17px;\n  color: #7a7a7a;\n  font-weight: 300;\n}\n\n#footer #footer-widget .widget-nav-menu li p {\n  font-size: 17px;\n  color: #f0f0f0 !important;\n  font-weight: 300;\n}\n\n.social-footer a i {\n  font-size: 30px !important;\n  color: white;\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  padding-left: 10px;\n}\n\n.social-footer a i:hover {\n  color: #fbb545;\n}\n\n.social-footer {\n  padding-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBT0M7O0FBRUQ7OzBHQUUwRzs7QUFDMUc7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUNBOztFQUVFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0RBQXNEO0VBQ3RELDhDQUE4QztFQUM5QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFO0lBQ0UsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtBQUNGOztBQUVBOzswR0FFMEc7O0FBQzFHO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFHUiw0Q0FBNEM7RUFDNUMsMkNBQTJDO0VBQzNDLHdDQUF3QztFQUN4QyxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQywwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUNBOzswR0FFMEc7O0FBQzFHO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUE2QjtFQUE3Qiw2QkFBNkI7RUFDN0IsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7OzBHQUUwRzs7QUFDMUc7RUFDRSxjQUFjO0VBQ2QsaUNBQWlDO0VBSWpDLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7MEdBRTBHOztBQUMxRztFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7O0VBRUUsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG9DQUE0QjtFQUE1Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29udGVudCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuMC4gTG9hZGVyXG4xLiBOYXZiYXJcbjIuIFNvY2lhbCBTaWRlYmFyXG4zLiBMYW5kaW5nIFBhZ2VcbjQuIFdoeSB1c1xuNS4gRm9vdGVyXG4qL1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiNsb2FkaW5nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuI2xvYWRpbmctb3ZlcmxheSAubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbn1cbiNsb2FkaW5nLW92ZXJsYXkgLmxvYWRlcjpiZWZvcmUsXG4jbG9hZGluZy1vdmVybGF5IC5sb2FkZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgY29udGVudDogXCJcIjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHByZWxvYWRlci13YXZlIDEuNnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHByZWxvYWRlci13YXZlIDEuNnMgbGluZWFyIGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmYmI1NDU7XG59XG4jbG9hZGluZy1vdmVybGF5IC5sb2FkZXI6YWZ0ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHJlbG9hZGVyLXdhdmUge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcHJlbG9hZGVyLXdhdmUge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYXZiYXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ud3JhcC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmxhdC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uaGVhZGVyLXN0aWNreSB7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbXMtYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW8tYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuOHM7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhbmRpbmcgUGFnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5mbGF0LWhlYWRlciAuaGVhZGVyLW1lbnUge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5mbGF0LXNsaWRlciAudHAtY2FwdGlvbiBhLmJ0bi1zdHlsMSB7XG4gIGJhY2tncm91bmQ6ICNmYmI1NDU7XG4gIHRyYW5zaXRpb246IDAuMjFzIGVhc2UtaW4gYWxsO1xuICBwYWRkaW5nOiA5cHggMzJweCAxMHB4IDMycHg7XG59XG4uZmxhdC1zbGlkZXIgLnRwLWNhcHRpb24gYS5idG4tc3R5bDE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjOGE1YjEwO1xufVxuLmZsYXQtc2xpZGVyIC5yZXZfc2xpZGVyX3dyYXBwZXIgLnRwLWNhcHRpb24gYS5idG4tc3R5bDEge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogMzZweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaHkgdXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaWNvbmJveC1iZW5lZml0IC5pY29uYm94LWNvbnRlbnQgaDM6aG92ZXIge1xuICBjb2xvcjogI2ZiYjU0NTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLmljb25ib3gtYmVuZWZpdCAuaWNvbmJveC1jb250ZW50IHAge1xuICBjb2xvcjogIzdhN2E3YTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLmljb25ib3gtYmVuZWZpdCAuaWNvbmJveC1jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIxNmFlNjtcbn1cblxuLmZsYXQtYmVuZWZpdC1zdHlsZTIgLmljb25ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxhdC1iZW5lZml0LXN0eWxlMiAuaWNvbmJveC1vbmUge1xuICBwYWRkaW5nOiAzMHB4IDIwcHggMHB4IDZweDtcbn1cbi5mbGF0LWJlbmVmaXQtc3R5bGUyIC5pY29uYm94LXR3byB7XG4gIHBhZGRpbmc6IDM1cHggMjBweCAwcHggMzVweDtcbn1cbi5mbGF0LWJlbmVmaXQtc3R5bGUyIC5pY29uYm94LXRocmVlIHtcbiAgcGFkZGluZzogNDhweCAyMHB4IDBweCA2cHg7XG59XG4uZmxhdC1iZW5lZml0LXN0eWxlMiAuaWNvbmJveC1mb3VyIHtcbiAgcGFkZGluZzogNDhweCAyMHB4IDBweCAzNXB4O1xufVxuLmZsYXQtYmVuZWZpdC1zdHlsZTIgLmljb25ib3gtb25lIC5pY29uYm94LWNvbnRlbnQgaDMge1xuICBtYXJnaW46IDI3cHggMCAxNXB4IDA7XG59XG4uZmxhdC1iZW5lZml0LXN0eWxlMiAuaWNvbmJveC10d28gLmljb25ib3gtY29udGVudCBoMyB7XG4gIG1hcmdpbjogMzJweCAwIDE1cHggMDtcbn1cbi5mbGF0LWJlbmVmaXQtc3R5bGUyIC5pY29uYm94LXRocmVlIC5pY29uYm94LWNvbnRlbnQgaDMge1xuICBtYXJnaW46IDI3cHggMCAxNXB4IDA7XG59XG4uZmxhdC1iZW5lZml0LXN0eWxlMiAuaWNvbmJveC1mb3VyIC5pY29uYm94LWNvbnRlbnQgaDMge1xuICBtYXJnaW46IDI3cHggMCAxNXB4IDA7XG59XG4ud2h5LWNob29zZS11cyB7XG4gIG1hcmdpbi10b3A6IC0xNTZweDtcbn1cbi53aHktY2hvb3NlLXVzIC5nZXRpbnRvdWNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIxLjYlKTtcbn1cbi5pY29uYm94LXdpZHRoNTAgLmljb25ib3gge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5pY29uYm94LWljb24gaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRk9PVEVSXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuI2Zvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMzZjRjOWE7XG59XG5cbiNmb290ZXIgI2Zvb3Rlci13aWRnZXQgLndpZGdldC1uYXYtbWVudSBsaSBhIHtcbiAgY29sb3I6ICNmMGYwZjAgIWltcG9ydGFudDtcbn1cbiNmb290ZXIgI2Zvb3Rlci13aWRnZXQge1xuICBwYWRkaW5nLXRvcDogMzZweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG4jZm9vdGVyICNmb290ZXItd2lkZ2V0IC5sb2dvLWZvb3RlciB7XG4gIG1hcmdpbjogNnB4IDAgNDBweCAwO1xufVxuI2Zvb3RlciAjZm9vdGVyLXdpZGdldCAuaW5mby1mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbiNmb290ZXIgI2Zvb3Rlci13aWRnZXQgLndpZGdldC53aWRnZXQtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuI2Zvb3RlciAjZm9vdGVyLXdpZGdldCAuY29sLWNvbXBhbnkgLndpZGdldC53aWRnZXQtdGl0bGUge1xuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG59XG4jZm9vdGVyICNmb290ZXItd2lkZ2V0IC5jb2wtbGluayAud2lkZ2V0LndpZGdldC10aXRsZSxcbiNmb290ZXIgI2Zvb3Rlci13aWRnZXQgLmNvbC1tZWRpYSAud2lkZ2V0LndpZGdldC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOXB4O1xufVxuI2Zvb3RlciAjZm9vdGVyLXdpZGdldCAud2lkZ2V0LW5hdi1tZW51IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cbiNmb290ZXIgI2Zvb3Rlci13aWRnZXQgLndpZGdldC1uYXYtbWVudSBsaSBhIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzdhN2E3YTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiNmb290ZXIgI2Zvb3Rlci13aWRnZXQgLndpZGdldC1uYXYtbWVudSBsaSBwIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2YwZjBmMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNvY2lhbC1mb290ZXIgYSBpIHtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnNvY2lhbC1mb290ZXIgYSBpOmhvdmVyIHtcbiAgY29sb3I6ICNmYmI1NDU7XG59XG4uc29jaWFsLWZvb3RlciB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuIl19 */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! G:\SRM\Web Dev\Web Projects\Artistic Picture Framing\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map