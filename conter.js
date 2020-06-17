// var transition = 0;

// function thoigian() {
//     let elementActive = $(".slider_head li.active");
//     let indexActive = elementActive.data("index");
//     let element = $(".slider_head li");
//     for (let i = 0; i < element.length; i++) {
//         let index = $(element[i]).data("index");
//         if ((indexActive + 1) == index) {
//             $(element[i]).addClass("active");
//         } else if (index == element.length) {

//             $(element[0]).addClass("active");
//         }
//         elementActive.removeClass("active");
//     }
// }

// setInterval(() => {
//     thoigian();
// }, 3000);


// function getParameterUrl(key) {
//     var url_string = window.location.href; //window.location.href
//     var url = new URL(url_string);
//     var res = url.searchParams.get(key);
//     return res;
// }

// function init() {
//     let tab = getParameterUrl("ici");
//     $(".model ." + tab).addClass("active");
//     let element = $(".model-list");
//     $.each(element, function(i, item) {
//         let key = $(item).data("tab");
//         if (key == tab) {
//             $(item).addClass("active");
//         }
//     });
// }
// init();

// var clothes = $(".clothes");
// var indexActive = clothes.data("index");
// $('input[name$="cb_category"]').click(function() {
//         let a = $(this).val();
//         for (let i = 0; i < clothes.length; i++) {
//             let index = $(clothes[i]).data("index");
//             if (a == 1) {
//                 index.slideToggle(300);
//             }
//             if (a == 2) {
//                 console.log("mongmanh");
//             }
//             if (a == 3) {
//                 console.log("aokhoacnu");
//             }
//             if (a == 4) {
//                 console.log("aonu");
//             }
//             if (a == 5) {
//                 console.log("bo");
//             }

//         }

//     })


// $(".clothes").find($('[data-index="1"]'));
// $('.clothes[name=name]').hide();
// var clothess = $(".clothes[name='name']");
// for (let index = 0; index < clothess.length; index++) {
//     const element = clothess[index];
// }


// var clothes = $(".clothes[name='aokhoac']");
// $('input[name$="cb_category"]').click(function() {
//     let a = $(this).val();
//     if (a == 1) {
//         clothes.slideToggle(300);
//     }
//     if (a == 2) {
//         console.log("mongmanh");
//     }
//     if (a == 3) {
//         console.log("aokhoacnu");
//     }
//     if (a == 4) {
//         console.log("aonu");
//     }
//     if (a == 5) {
//         console.log("bo");
//     }
//


var clothes = $(".product-img");
var $category1 = $(".category ul li ul");
var $category2 = $(".category[name = 'size'] div:nth-child(2) ul");
var $category3 = $(".category[name = 'color'] div:nth-child(2) ul");
var $category4 = $(".category[name = 'model'] div:nth-child(2) ul");
var $category5 = $(".category[name = 'Material'] div:nth-child(2) ul");
var $category6 = $(".category[name = 'style'] div:nth-child(2) ul");
// $category1 //
var html = "";
for (let index = 0; index < danhmuc.length; index++) {
    const element = danhmuc[index];
    html += '<li>' +
        '<a href="#">' +
        '<label class="con" name="' + element.name + '">' + element.text +
        '<input type="checkbox"  name="cb_category"  value="' + element.value + '">' +
        '<span class="checkmark"></span>' +
        '</label>' +
        '<i class="fas fa-plus" id="plus"></i>' +
        '</a>' +
        '</li>';
}
$category1.html(html);
// clothes //

var CategoryChoose = [];
var SizeChoose = [];
var ColorChoose = [];
var MaterialChoose = [];

function event() {
    $("input[name=cb_category]").off('click').on('click', function () {
        var elementChecked = $("input[name=cb_category]");
        if (elementChecked != undefined && elementChecked.length > 0) {
            $.each(elementChecked, function (i, item) {
                let value = $(item).val();
                let index = CategoryChoose.findIndex(x => x == value);
                let check = $(item).prop("checked");
                if (check) {
                    if (index < 0) {
                        CategoryChoose.push(value);
                    }
                } else {
                    if (index > -1) {
                        CategoryChoose.splice(index, 1);
                    }
                }
            });
        }
        loadData();
    });
}
event();
function loadData() {
    let data = [];
    if (CategoryChoose.length > 0) {
        CategoryChoose.forEach(element => {
            let dataNew = quanao.filter(x => x.category == parseInt(element));
            if (dataNew.length > 0)
                data = data.concat(dataNew);
        });
    }
    if (data.length == 0) {
        data = quanao;
    }
    let html = "";
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        html += '<div class="clothes" data-index="' + element.index + '" name="' + element.name + '">' +
            '<img src="' + element.img + '" alt="quần áo" >' +
            '<span class="add-cart d-none">Thêm vào giỏ hàng</span>' +
            '<span class="information">' + element.information + '</span>' +
            '<div>' +
            '<span class="price">' + element.price + ' đ</span>' +
            '<i class="far fa-heart"></i>' +
            '</div>' +
            '</div>';
    }
    clothes.html(html);
}
loadData();


// $category2 //
html = "";
for (let index = 0; index < $attr_item.length; index++) {
    const element = $attr_item[index];
    html += '  <li><a href="#"><label class="con">' + element.size + '' +
        '<input type="checkbox"  value="' + element.value + '">' +
        '<span class="checkmark"></span></label></li>'
}
$category2.html(html);

// $category3 //
html = "";
for (let index = 0; index < $color.length; index++) {
    const element = $color[index];
    html += '<li class="color">' +
        '<a href="#">' +
        '<img src="' + element.img + '" alt="xanhlam">' +
        '<span>' + element.content + '</span>' +
        '</a>' +
        '</li>'
}
$category3.html(html);


// $category4 //
html = "";
for (let index = 0; index < $model.length; index++) {
    const element = $model[index];
    html += '  <li><a href="#"><label class="con">' + element.content + '' +
        '<input type="checkbox"  value="' + element.value + '">' +
        '<span class="checkmark"></span></label></li>'
}
$category4.html(html);
// $category5 //

html = "";

for (let index = 0; index < $Material.length; index++) {
    const element = $Material[index];
    html += '  <li><a href="#"><label class="con">' + element.content + '' +
        '<input type="checkbox"  value="' + element.value + '">' +
        '<span class="checkmark"></span></label></li>'
}
$category5.html(html);
// $category6 //
html = "";
for (let index = 0; index < $style.length; index++) {
    const element = $style[index];
    html += '  <li><a href="#"><label class="con">' + element.content + '' +
        '<input type="checkbox"  value="' + element.value + '">' +
        '<span class="checkmark"></span></label></li>'
}

$category6.html(html);
var arrCategory = [];
var label = $(".product-label");
label.off("click").on("click", function () {
    let id = $(this).data("index");
    if ($(this).hasClass("active-label")) {
        $(this).removeClass("active-label");
        let index = arrCategory.findIndex(x => x == id);
        if (index > -1)
            arrCategory.splice(index, 1);

    } else {
        $(this).addClass("active-label");
        let index = arrCategory.findIndex(x => x == id);
        if (index < 0)
            arrCategory.push(id);
    };
});
// var $slider = $("#myRange");
// var $range_value = $("#range_value");
// $range_value.text($slider.val());

// $slider.oninput = function() {
//     $range_value.text($(this).val());
// }

// $slider.oninput(function() {
//     $range_value.text($(this).val());
// })
// let dam = clothes.filter(x => x.name === "dam")