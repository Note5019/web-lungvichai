export class jsUtility {
  constructor() {
    console.log(`jQuery version:  ${$.fn.jquery}`);
  }
  public static initialApp() {
    console.log("initialApp");

    // $(document).ready(function() {
    //   $("#sidebarCollapse").on("click", function() {
    //     console.log("sidebarCollapse click");

    //     $("#sidebar").toggleClass("active");
    //   });
    // });
  }
  static toggleSideBar() {
    $("#sidebar").toggleClass("active");
  }
}
