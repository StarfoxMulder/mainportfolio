// $(document).ready(function () {
//     var testCase = "";

//     setTestCase();

//     $('#en_laptops').hover(function() {
//         if ($(this).parent().hasClass("opened") && testCase == "B") {
//             {
//                 $('div.mainContent').empty();
//                 $('<div id="forWork"></div>').appendTo('div.mainContent');
//                 $('<div id="forHome"></div>').appendTo('div.mainContent');
//             }, function() {
//                 $('#forWork').html('<h2>FOR WORK</h2><br><h4>EXPLORE LAPTOPS FOR WORK</h4>');
//                 $('#forWork').attr('href', '//shop.lenovo.com/us/en/laptops/?menu-id=laptops-forwork');
//                 $('#forWork').css({
//                     "background-image": "url('http://www.lenovo.com/shop/americas/content/img_lib/optimization/2017/laptops-forwork.jpg')",
//                     "width": "50%",
//                     "vertical-align": "bottom",
//                     "padding-bottom": "5%"
//                 });
//                 $('#forHome').html('<h2>FOR HOME</h2><br><h4>EXPLORE LAPTOPS FOR HOME</h4>');
//                 $('#forWork').attr('href', '//shop.lenovo.com/us/en/laptops/?menu-id=laptops-forhome');
//                 $('#forHome').css({
//                     "background-image": "url('http://www.lenovo.com/shop/americas/content/img_lib/optimization/2017/laptops-forhome.jpg')",
//                     "width": "50%",
//                     "vertical-align": "bottom",
//                     "padding-bottom": "5%"
//                     "margin-left": "2px"
//                 });
//             }
//         }
//     });

//     function setTestCase() {
//         num = Math.floor(Math.random()*2);
//         if (num == 0) {
//             testCase = "A";
//         } else {
//             testCase = "B";
//         }
//     }
// });
